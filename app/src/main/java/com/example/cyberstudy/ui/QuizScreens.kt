package com.example.cyberstudy.ui

import androidx.activity.compose.BackHandler
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.OutlinedCard
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.cyberstudy.data.Level
import com.example.cyberstudy.data.ProgressStore
import com.example.cyberstudy.data.Question
import com.example.cyberstudy.data.Quiz
import com.example.cyberstudy.data.StudyData

private val CHOICE_LABELS = listOf("A", "B", "C", "D", "E", "F")

/** 問題モードのメニュー（出題方法を選ぶ） */
@Composable
fun QuizMenuScreen(
    level: Level,
    data: StudyData,
    progress: ProgressStore,
    onStart: (Screen.Quiz) -> Unit,
    onBack: () -> Unit,
) {
    val all = data.questions(level)
    val wrong = all.filter { it.id in progress.wrongQuestions }

    fun start(title: String, questions: List<Question>, levelWide: Boolean) {
        if (questions.isEmpty()) return
        onStart(Screen.Quiz(title, questions.map { it.id }, if (levelWide) level else null))
    }

    StudyScaffold(title = "${level.label}の問題", onBack = onBack) { padding ->
        Column(
            modifier = Modifier
                .padding(padding)
                .verticalScroll(rememberScrollState())
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp),
        ) {
            MenuCard(
                title = "🎲 ランダム ${minOf(Quiz.RANDOM_COUNT, all.size)} 問",
                description = "${level.label}の問題からランダムに出題します。まずはここから！",
                enabled = all.isNotEmpty(),
            ) { start("${level.label} ランダム", Quiz.pick(all, Quiz.RANDOM_COUNT), levelWide = true) }

            MenuCard(
                title = "🏆 全問チャレンジ（${all.size} 問）",
                description = "${level.label}の全問題に順不同で挑戦します。",
                enabled = all.isNotEmpty(),
            ) { start("${level.label} 全問", Quiz.pick(all), levelWide = true) }

            MenuCard(
                title = "🔁 苦手な問題を復習（${wrong.size} 問）",
                description = if (wrong.isEmpty()) "間違えた問題はまだありません。"
                else "前回間違えた問題だけを解き直します。正解するとリストから消えます。",
                enabled = wrong.isNotEmpty(),
            ) { start("${level.label} 復習", Quiz.pick(wrong), levelWide = false) }

            Spacer(Modifier.height(4.dp))
            Text("レッスンごとに解く", style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
            data.lessons(level).forEach { lesson ->
                val questions = data.questionsForLesson(lesson.id)
                if (questions.isNotEmpty()) {
                    OutlinedCard(
                        onClick = { start(lesson.title, Quiz.pick(questions), levelWide = false) },
                        modifier = Modifier.fillMaxWidth(),
                    ) {
                        Row(Modifier.padding(12.dp), verticalAlignment = Alignment.CenterVertically) {
                            Text(lesson.id, style = MaterialTheme.typography.labelMedium)
                            Spacer(Modifier.width(8.dp))
                            Text(lesson.title, modifier = Modifier.weight(1f))
                            Text("${questions.size} 問", style = MaterialTheme.typography.labelMedium)
                        }
                    }
                }
            }
        }
    }
}

@Composable
private fun MenuCard(title: String, description: String, enabled: Boolean, onClick: () -> Unit) {
    Card(onClick = onClick, enabled = enabled, modifier = Modifier.fillMaxWidth()) {
        Column(Modifier.padding(16.dp)) {
            Text(title, style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
            Text(description, style = MaterialTheme.typography.bodySmall)
        }
    }
}

/** 出題画面：1問ずつ解答し、すぐに正誤と解説を表示する */
@Composable
fun QuizScreen(
    quiz: Screen.Quiz,
    data: StudyData,
    progress: ProgressStore,
    onFinish: (Screen.Result) -> Unit,
    onQuit: () -> Unit,
) {
    val questions = remember(quiz) { data.questionsByIds(quiz.questionIds) }
    // 画面回転でも消えないよう rememberSaveable で保持
    var index by rememberSaveable(quiz) { mutableIntStateOf(0) }
    var selected by rememberSaveable(quiz) { mutableIntStateOf(-1) }
    var wrongIds by rememberSaveable(quiz) { mutableStateOf(listOf<String>()) }
    var showQuitDialog by rememberSaveable { mutableStateOf(false) }

    BackHandler { showQuitDialog = true }

    if (questions.isEmpty()) {
        // 出題できる問題がなければ前の画面に戻る
        LaunchedEffect(Unit) { onQuit() }
        return
    }
    val q = questions[index]
    val answered = selected >= 0
    val isLast = index == questions.lastIndex

    StudyScaffold(title = quiz.title, onBack = { showQuitDialog = true }) { padding ->
        Column(
            modifier = Modifier
                .padding(padding)
                .verticalScroll(rememberScrollState())
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            // 進み具合
            Row(verticalAlignment = Alignment.CenterVertically) {
                Tag(q.level.label, color = q.level.color)
                Spacer(Modifier.width(8.dp))
                Text("第 ${index + 1} 問 / 全 ${questions.size} 問", style = MaterialTheme.typography.labelLarge)
            }
            LinearProgressIndicator(
                progress = { (index + if (answered) 1 else 0).toFloat() / questions.size },
                modifier = Modifier.fillMaxWidth(),
            )
            data.lesson(q.lessonId)?.let {
                Text("関連レッスン：${it.title}", style = MaterialTheme.typography.labelMedium)
            }

            Text(q.question, style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)

            // 選択肢
            q.choices.forEachIndexed { i, choice ->
                ChoiceCard(
                    label = CHOICE_LABELS.getOrElse(i) { "${i + 1}" },
                    text = choice,
                    state = when {
                        !answered -> ChoiceState.NORMAL
                        i == q.answer -> ChoiceState.CORRECT
                        i == selected -> ChoiceState.WRONG
                        else -> ChoiceState.DISABLED
                    },
                    onClick = {
                        if (!answered) {
                            selected = i
                            val correct = i == q.answer
                            progress.recordAnswer(q.id, correct)
                            if (!correct) wrongIds = wrongIds + q.id
                        }
                    },
                )
            }

            // 正誤と解説
            if (answered) {
                val correct = selected == q.answer
                val color = if (correct) CorrectColor else WrongColor
                Card(
                    colors = CardDefaults.cardColors(containerColor = color.copy(alpha = 0.12f)),
                    border = BorderStroke(1.dp, color),
                ) {
                    Column(Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(6.dp)) {
                        Text(
                            if (correct) "⭕ 正解！" else "❌ 不正解… 正解は ${CHOICE_LABELS.getOrElse(q.answer) { "" }}",
                            color = color,
                            fontWeight = FontWeight.Bold,
                            fontSize = 18.sp,
                        )
                        Text("解説", fontWeight = FontWeight.Bold)
                        Text(q.explanation)
                    }
                }
                Button(
                    onClick = {
                        if (isLast) {
                            onFinish(Screen.Result(quiz.title, quiz.questionIds, wrongIds, quiz.level))
                        } else {
                            index++
                            selected = -1
                        }
                    },
                    modifier = Modifier.fillMaxWidth(),
                ) { Text(if (isLast) "結果を見る" else "次の問題へ →") }
            }
        }
    }

    if (showQuitDialog) {
        AlertDialog(
            onDismissRequest = { showQuitDialog = false },
            title = { Text("問題を中断しますか？") },
            text = { Text("ここまでの解答は復習リストに記録されています。") },
            confirmButton = {
                TextButton(onClick = {
                    showQuitDialog = false
                    onQuit()
                }) { Text("中断する") }
            },
            dismissButton = {
                TextButton(onClick = { showQuitDialog = false }) { Text("続ける") }
            },
        )
    }
}

private enum class ChoiceState { NORMAL, CORRECT, WRONG, DISABLED }

@Composable
private fun ChoiceCard(label: String, text: String, state: ChoiceState, onClick: () -> Unit) {
    val borderColor = when (state) {
        ChoiceState.CORRECT -> CorrectColor
        ChoiceState.WRONG -> WrongColor
        else -> MaterialTheme.colorScheme.outline
    }
    val container = when (state) {
        ChoiceState.CORRECT -> CorrectColor.copy(alpha = 0.15f)
        ChoiceState.WRONG -> WrongColor.copy(alpha = 0.15f)
        else -> Color.Transparent
    }
    OutlinedCard(
        onClick = onClick,
        modifier = Modifier.fillMaxWidth(),
        border = BorderStroke(if (state == ChoiceState.NORMAL) 1.dp else 2.dp, borderColor),
        colors = CardDefaults.outlinedCardColors(containerColor = container),
    ) {
        Row(Modifier.padding(14.dp), verticalAlignment = Alignment.CenterVertically) {
            Text(label, fontWeight = FontWeight.Bold, color = borderColor)
            Spacer(Modifier.width(12.dp))
            Text(text, modifier = Modifier.weight(1f))
            when (state) {
                ChoiceState.CORRECT -> Text("⭕")
                ChoiceState.WRONG -> Text("❌")
                else -> {}
            }
        }
    }
}

/** 結果画面 */
@Composable
fun ResultScreen(
    result: Screen.Result,
    data: StudyData,
    progress: ProgressStore,
    onRetry: (Screen.Quiz) -> Unit,
    onBack: () -> Unit,
) {
    val total = result.questionIds.size
    val correct = total - result.wrongIds.size
    val percent = Quiz.percent(correct, total)
    val wrongQuestions = data.questionsByIds(result.wrongIds)

    // レベル全体のテストなら最高正答率を記録（画面回転で何度呼ばれても結果は同じ）
    LaunchedEffect(result) {
        result.level?.let { progress.recordQuizResult(it, correct, total) }
    }

    StudyScaffold(title = "結果：${result.title}", onBack = onBack) { padding ->
        Column(
            modifier = Modifier
                .padding(padding)
                .verticalScroll(rememberScrollState())
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            Card(modifier = Modifier.fillMaxWidth()) {
                Column(
                    Modifier
                        .fillMaxWidth()
                        .padding(24.dp),
                    horizontalAlignment = Alignment.CenterHorizontally,
                ) {
                    Text("$correct / $total 問正解", style = MaterialTheme.typography.headlineMedium, fontWeight = FontWeight.Bold)
                    Text(
                        "正答率 $percent%",
                        style = MaterialTheme.typography.titleLarge,
                        color = if (percent >= 60) CorrectColor else WrongColor,
                    )
                    Spacer(Modifier.height(8.dp))
                    Text(Quiz.message(percent), textAlign = TextAlign.Center)
                }
            }

            if (wrongQuestions.isNotEmpty()) {
                Button(
                    onClick = { onRetry(Screen.Quiz("${result.title}（間違えた問題）", result.wrongIds, null)) },
                    modifier = Modifier.fillMaxWidth(),
                ) { Text("🔁 間違えた ${wrongQuestions.size} 問だけ解き直す") }
            }
            OutlinedButton(
                onClick = {
                    val reshuffled = Quiz.pick(data.questionsByIds(result.questionIds))
                    onRetry(Screen.Quiz(result.title, reshuffled.map { it.id }, result.level))
                },
                modifier = Modifier.fillMaxWidth(),
            ) { Text("同じ問題にもう一度挑戦") }
            OutlinedButton(onClick = onBack, modifier = Modifier.fillMaxWidth()) { Text("メニューに戻る") }

            // 間違えた問題の振り返り
            if (wrongQuestions.isNotEmpty()) {
                Text("間違えた問題の振り返り", style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
                wrongQuestions.forEach { q ->
                    Card(modifier = Modifier.fillMaxWidth()) {
                        Column(Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(6.dp)) {
                            Text(q.question, fontWeight = FontWeight.Bold)
                            HorizontalDivider()
                            Text("正解：${q.choices.getOrElse(q.answer) { "" }}", color = CorrectColor, fontWeight = FontWeight.Bold)
                            Text(q.explanation, style = MaterialTheme.typography.bodyMedium)
                        }
                    }
                }
            }
        }
    }
}
