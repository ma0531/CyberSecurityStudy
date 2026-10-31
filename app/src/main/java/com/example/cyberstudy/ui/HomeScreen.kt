package com.example.cyberstudy.ui

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
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.cyberstudy.data.Level
import com.example.cyberstudy.data.ProgressStore
import com.example.cyberstudy.data.StudyData

/** ホーム画面：学習モード・問題モード・参考サイトの入口 */
@Composable
fun HomeScreen(
    data: StudyData,
    progress: ProgressStore,
    onSelectMode: (Mode) -> Unit,
    onOpenWebsites: () -> Unit,
) {
    var showResetDialog by remember { mutableStateOf(false) }
    val completed = data.lessons.count { progress.isCompleted(it.id) }

    StudyScaffold(title = "サイバーセキュリティ学習", onBack = null) { padding ->
        Column(
            modifier = Modifier
                .padding(padding)
                .verticalScroll(rememberScrollState())
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            Text(
                "初級・中級・上級の3レベルで、レッスンを読んで学び、問題で理解度を確かめましょう。",
                style = MaterialTheme.typography.bodyMedium,
            )

            // 全体の進み具合
            Card(modifier = Modifier.fillMaxWidth()) {
                Column(Modifier.padding(16.dp)) {
                    Text("学習の進み具合", fontWeight = FontWeight.Bold)
                    Spacer(Modifier.height(8.dp))
                    Text("レッスン完了：$completed / ${data.lessons.size}")
                    Spacer(Modifier.height(4.dp))
                    LinearProgressIndicator(
                        progress = { if (data.lessons.isEmpty()) 0f else completed.toFloat() / data.lessons.size },
                        modifier = Modifier.fillMaxWidth(),
                    )
                    Spacer(Modifier.height(8.dp))
                    Text("復習が必要な問題：${progress.wrongQuestions.size} 問")
                    Level.entries.forEach { level ->
                        val best = progress.bestScore(level)
                        Text(
                            "${level.label} 最高正答率：${best?.let { "$it%" } ?: "未挑戦"}",
                            style = MaterialTheme.typography.bodySmall,
                        )
                    }
                }
            }

            ModeCard(
                emoji = "📖",
                title = "学習モード",
                description = "レッスンを読んで、セキュリティの基礎から順番に学びます。",
                color = Color(0xFF00796B),
                onClick = { onSelectMode(Mode.LEARN) },
            )
            ModeCard(
                emoji = "✏️",
                title = "問題モード",
                description = "4択問題で理解度をチェック。間違えた問題は復習できます。",
                color = Color(0xFF5E35B1),
                onClick = { onSelectMode(Mode.QUIZ) },
            )
            ModeCard(
                emoji = "🔗",
                title = "おすすめ学習サイト",
                description = "最新の脅威情報や、さらに深く学ぶための公式サイト集です。",
                color = Color(0xFF455A64),
                onClick = onOpenWebsites,
            )

            TextButton(onClick = { showResetDialog = true }, modifier = Modifier.align(Alignment.End)) {
                Text("進捗をリセット")
            }
        }
    }

    if (showResetDialog) {
        AlertDialog(
            onDismissRequest = { showResetDialog = false },
            title = { Text("進捗をリセット") },
            text = { Text("レッスンの完了状況・復習リスト・最高正答率をすべて消去します。よろしいですか？") },
            confirmButton = {
                TextButton(onClick = {
                    progress.reset()
                    showResetDialog = false
                }) { Text("リセット") }
            },
            dismissButton = {
                TextButton(onClick = { showResetDialog = false }) { Text("キャンセル") }
            },
        )
    }
}

@Composable
private fun ModeCard(emoji: String, title: String, description: String, color: Color, onClick: () -> Unit) {
    Card(
        onClick = onClick,
        modifier = Modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(containerColor = color, contentColor = Color.White),
    ) {
        Row(Modifier.padding(20.dp), verticalAlignment = Alignment.CenterVertically) {
            Text(emoji, fontSize = 36.sp)
            Spacer(Modifier.width(16.dp))
            Column {
                Text(title, style = MaterialTheme.typography.titleLarge, fontWeight = FontWeight.Bold)
                Text(description, style = MaterialTheme.typography.bodyMedium)
            }
        }
    }
}

/** レベル選択画面（学習モード・問題モード共通） */
@Composable
fun LevelSelectScreen(
    mode: Mode,
    data: StudyData,
    progress: ProgressStore,
    onSelect: (Level) -> Unit,
    onBack: () -> Unit,
) {
    val title = if (mode == Mode.LEARN) "学習モード：レベル選択" else "問題モード：レベル選択"
    StudyScaffold(title = title, onBack = onBack) { padding ->
        Column(
            modifier = Modifier
                .padding(padding)
                .verticalScroll(rememberScrollState())
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            Text(
                if (mode == Mode.LEARN) "はじめての方は「初級」から順に進めるのがおすすめです。"
                else "学習モードでレッスンを読んでから挑戦すると効果的です。",
                style = MaterialTheme.typography.bodyMedium,
            )
            Level.entries.forEach { level ->
                LevelCard(level, mode, data, progress) { onSelect(level) }
            }
        }
    }
}

@Composable
private fun LevelCard(level: Level, mode: Mode, data: StudyData, progress: ProgressStore, onClick: () -> Unit) {
    val lessons = data.lessons(level)
    val questions = data.questions(level)
    Card(onClick = onClick, modifier = Modifier.fillMaxWidth()) {
        Column(Modifier.padding(16.dp)) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Tag(level.label, color = level.color)
                Spacer(Modifier.width(8.dp))
                Text(
                    if (mode == Mode.LEARN) "${lessons.size} レッスン" else "${questions.size} 問",
                    style = MaterialTheme.typography.titleMedium,
                    fontWeight = FontWeight.Bold,
                )
            }
            Spacer(Modifier.height(8.dp))
            Text(data.levelDescription(level), style = MaterialTheme.typography.bodySmall)
            Spacer(Modifier.height(8.dp))
            if (mode == Mode.LEARN) {
                val done = lessons.count { progress.isCompleted(it.id) }
                Text("完了：$done / ${lessons.size}", style = MaterialTheme.typography.labelMedium)
                LinearProgressIndicator(
                    progress = { if (lessons.isEmpty()) 0f else done.toFloat() / lessons.size },
                    color = level.color,
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(top = 4.dp),
                )
            } else {
                val best = progress.bestScore(level)
                val wrong = questions.count { it.id in progress.wrongQuestions }
                Text(
                    "最高正答率：${best?.let { "$it%" } ?: "未挑戦"}　／　復習待ち：$wrong 問",
                    style = MaterialTheme.typography.labelMedium,
                )
            }
        }
    }
}
