package com.example.cyberstudy.ui

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.cyberstudy.data.Level

/** 正解・不正解の表示色 */
val CorrectColor = Color(0xFF2E7D32)
val WrongColor = Color(0xFFC62828)

/** レベルごとのテーマ色 */
val Level.color: Color
    get() = when (this) {
        Level.BEGINNER -> Color(0xFF2E7D32)
        Level.INTERMEDIATE -> Color(0xFF1565C0)
        Level.ADVANCED -> Color(0xFFC62828)
    }

/** 各画面共通のトップバー付きレイアウト（onBack が null なら戻るボタンなし） */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun StudyScaffold(
    title: String,
    onBack: (() -> Unit)?,
    content: @Composable (PaddingValues) -> Unit,
) {
    Scaffold(
        modifier = Modifier.fillMaxSize(),
        topBar = {
            TopAppBar(
                title = { Text(title, maxLines = 1, overflow = TextOverflow.Ellipsis) },
                navigationIcon = {
                    if (onBack != null) {
                        IconButton(onClick = onBack) { Text("←", fontSize = 22.sp) }
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.primaryContainer,
                ),
            )
        },
        content = content,
    )
}

/** 小さなラベル（カテゴリ・レベル表示用） */
@Composable
fun Tag(text: String, color: Color = MaterialTheme.colorScheme.secondary, modifier: Modifier = Modifier) {
    Surface(
        color = color.copy(alpha = 0.15f),
        contentColor = color,
        shape = MaterialTheme.shapes.small,
        modifier = modifier,
    ) {
        Text(
            text,
            style = MaterialTheme.typography.labelMedium,
            fontWeight = FontWeight.Bold,
            modifier = Modifier.padding(horizontal = 8.dp, vertical = 2.dp),
        )
    }
}
