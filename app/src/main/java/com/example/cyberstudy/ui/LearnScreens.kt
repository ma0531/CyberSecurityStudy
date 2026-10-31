package com.example.cyberstudy.ui

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.ExperimentalLayoutApi
import androidx.compose.foundation.layout.FlowRow
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalUriHandler
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.example.cyberstudy.data.Lesson
import com.example.cyberstudy.data.Level
import com.example.cyberstudy.data.ProgressStore
import com.example.cyberstudy.data.StudyData

/** レッスン一覧 */
@Composable
fun LessonListScreen(
    level: Level,
    data: StudyData,
    progress: ProgressStore,
    onOpenLesson: (Lesson) -> Unit,
    onBack: () -> Unit,
) {
    val lessons = data.lessons(level)
    StudyScaffold(title = "${level.label}のレッスン", onBack = onBack) { padding ->
        LazyColumn(
            modifier = Modifier.padding(padding),
            contentPadding = PaddingValues(16.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp),
        ) {
            items(lessons, key = { it.id }) { lesson ->
                val done = progress.isCompleted(lesson.id)
                Card(onClick = { onOpenLesson(lesson) }, modifier = Modifier.fillMaxWidth()) {
                    Row(Modifier.padding(16.dp), verticalAlignment = Alignment.CenterVertically) {
                        Column(Modifier.weight(1f)) {
                            Row(verticalAlignment = Alignment.CenterVertically) {
                                Text(lesson.id, style = MaterialTheme.typography.labelMedium)
                                Spacer(Modifier.width(8.dp))
                                Tag(lesson.category, color = level.color)
                            }
                            Spacer(Modifier.height(4.dp))
                            Text(lesson.title, style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
                            Text(lesson.summary, style = MaterialTheme.typography.bodySmall)
                        }
                        Spacer(Modifier.width(8.dp))
                        Text(if (done) "✅" else "　")
                    }
                }
            }
        }
    }
}

/** レッスン本文 */
@OptIn(ExperimentalLayoutApi::class)
@Composable
fun LessonDetailScreen(
    lesson: Lesson,
    data: StudyData,
    progress: ProgressStore,
    onStartQuiz: (Lesson) -> Unit,
    onOpenLesson: (Lesson) -> Unit,
    onBack: () -> Unit,
) {
    val uriHandler = LocalUriHandler.current
    val levelLessons = data.lessons(lesson.level)
    val nextLesson = levelLessons.getOrNull(levelLessons.indexOf(lesson) + 1)
    val questionCount = data.questionsForLesson(lesson.id).size
    val done = progress.isCompleted(lesson.id)

    StudyScaffold(title = lesson.title, onBack = onBack) { padding ->
        Column(
            modifier = Modifier
                .padding(padding)
                .verticalScroll(rememberScrollState())
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Tag(lesson.level.label, color = lesson.level.color)
                Spacer(Modifier.width(8.dp))
                Tag(lesson.category)
            }
            Text(lesson.title, style = MaterialTheme.typography.headlineSmall, fontWeight = FontWeight.Bold)

            // 要約
            Card(colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.secondaryContainer)) {
                Text(lesson.summary, modifier = Modifier.padding(16.dp), style = MaterialTheme.typography.bodyLarge)
            }

            // 本文
            lesson.content.forEach { paragraph ->
                Row {
                    Text("・", style = MaterialTheme.typography.bodyLarge)
                    Text(paragraph, style = MaterialTheme.typography.bodyLarge)
                }
            }

            // 重要ポイント
            if (lesson.keyPoints.isNotEmpty()) {
                Card(colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.tertiaryContainer)) {
                    Column(Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(4.dp)) {
                        Text("💡 ここがポイント", fontWeight = FontWeight.Bold)
                        lesson.keyPoints.forEach { Text("✔ $it") }
                    }
                }
            }

            // キーワード
            if (lesson.keywords.isNotEmpty()) {
                Text("キーワード", style = MaterialTheme.typography.titleSmall, fontWeight = FontWeight.Bold)
                FlowRow(
                    horizontalArrangement = Arrangement.spacedBy(6.dp),
                    verticalArrangement = Arrangement.spacedBy(6.dp),
                ) {
                    lesson.keywords.forEach { Tag(it, color = lesson.level.color) }
                }
            }

            lesson.referenceUrl?.let { url ->
                TextButton(onClick = { uriHandler.openUri(url) }) { Text("🔗 参考：$url") }
            }

            Spacer(Modifier.height(8.dp))
            if (done) {
                OutlinedButton(
                    onClick = { progress.setLessonCompleted(lesson.id, false) },
                    modifier = Modifier.fillMaxWidth(),
                ) { Text("✅ 学習済み（タップで未完了に戻す）") }
            } else {
                Button(
                    onClick = { progress.setLessonCompleted(lesson.id, true) },
                    modifier = Modifier.fillMaxWidth(),
                ) { Text("学習完了にする") }
            }
            if (questionCount > 0) {
                Button(onClick = { onStartQuiz(lesson) }, modifier = Modifier.fillMaxWidth()) {
                    Text("✏️ このレッスンの問題に挑戦（$questionCount 問）")
                }
            }
            if (nextLesson != null) {
                OutlinedButton(onClick = { onOpenLesson(nextLesson) }, modifier = Modifier.fillMaxWidth()) {
                    Text("次のレッスン：${nextLesson.title} →")
                }
            }
        }
    }
}
