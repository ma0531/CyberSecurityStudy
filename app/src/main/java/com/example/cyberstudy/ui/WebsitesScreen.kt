package com.example.cyberstudy.ui

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Card
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalUriHandler
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.example.cyberstudy.data.StudyData

/** おすすめ学習サイト一覧（タップでブラウザを開く） */
@Composable
fun WebsitesScreen(data: StudyData, onBack: () -> Unit) {
    val uriHandler = LocalUriHandler.current
    StudyScaffold(title = "おすすめ学習サイト", onBack = onBack) { padding ->
        LazyColumn(
            modifier = Modifier.padding(padding),
            contentPadding = PaddingValues(16.dp),
            verticalArrangement = Arrangement.spacedBy(8.dp),
        ) {
            if (data.sitesUpdated.isNotBlank()) {
                item { Text("情報更新日：${data.sitesUpdated}", style = MaterialTheme.typography.labelMedium) }
            }
            data.siteGroups.forEach { group ->
                item {
                    Column(Modifier.padding(top = 12.dp)) {
                        Text(group.title, style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
                        Text(group.description, style = MaterialTheme.typography.bodySmall)
                    }
                }
                items(group.sites) { site ->
                    Card(onClick = { uriHandler.openUri(site.url) }, modifier = Modifier.fillMaxWidth()) {
                        Column(Modifier.padding(14.dp)) {
                            Row(verticalAlignment = Alignment.CenterVertically) {
                                Text(site.name, fontWeight = FontWeight.Bold, modifier = Modifier.weight(1f))
                                Spacer(Modifier.width(8.dp))
                                if (site.level.isNotBlank()) Tag(site.level)
                            }
                            Text(site.description, style = MaterialTheme.typography.bodySmall)
                            Text(
                                site.url,
                                style = MaterialTheme.typography.labelSmall,
                                color = MaterialTheme.colorScheme.primary,
                            )
                        }
                    }
                }
            }
        }
    }
}
