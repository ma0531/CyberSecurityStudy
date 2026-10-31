package com.example.cyberstudy

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.getValue
import androidx.compose.runtime.produceState
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.example.cyberstudy.data.ProgressStore
import com.example.cyberstudy.data.StudyData
import com.example.cyberstudy.data.StudyRepository
import com.example.cyberstudy.ui.CyberStudyApp
import com.example.cyberstudy.ui.theme.CyberSecurityStudyTheme
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        val appContext = applicationContext
        setContent {
            CyberSecurityStudyTheme {
                val progress = remember { ProgressStore(appContext) }
                // 学習データ（assets の JSON）はバックグラウンドで読み込む
                val loaded by produceState<Result<StudyData>?>(initialValue = null) {
                    value = withContext(Dispatchers.IO) { runCatching { StudyRepository.load(appContext) } }
                }

                Surface(modifier = Modifier.fillMaxSize()) {
                    val result = loaded
                    when {
                        result == null -> Box(Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                            CircularProgressIndicator()
                        }

                        result.isSuccess -> CyberStudyApp(data = result.getOrThrow(), progress = progress)

                        else -> Box(Modifier.fillMaxSize().padding(24.dp), contentAlignment = Alignment.Center) {
                            Text("学習データの読み込みに失敗しました。\n${result.exceptionOrNull()?.message.orEmpty()}")
                        }
                    }
                }
            }
        }
    }
}
