package com.example.cyberstudy.ui

import androidx.activity.compose.BackHandler
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import com.example.cyberstudy.data.ProgressStore
import com.example.cyberstudy.data.Quiz
import com.example.cyberstudy.data.StudyData

/** アプリ全体の画面遷移を管理する */
@Composable
fun CyberStudyApp(data: StudyData, progress: ProgressStore) {
    var backStack by rememberSaveable(stateSaver = BackStackSaver) { mutableStateOf(listOf<Screen>(Screen.Home)) }
    val current = backStack.last()

    fun navigate(screen: Screen) {
        backStack = backStack + screen
    }

    fun back() {
        if (backStack.size > 1) backStack = backStack.dropLast(1)
    }

    // 今の画面を置き換える（出題 → 結果、レッスン → 次のレッスン など）
    fun replace(screen: Screen) {
        backStack = backStack.dropLast(1) + screen
    }

    // 出題中は QuizScreen 側で中断確認を出すため、ここでは扱わない
    BackHandler(enabled = backStack.size > 1 && current !is Screen.Quiz) { back() }

    when (current) {
        Screen.Home -> HomeScreen(
            data = data,
            progress = progress,
            onSelectMode = { navigate(Screen.LevelSelect(it)) },
            onOpenWebsites = { navigate(Screen.Websites) },
        )

        is Screen.LevelSelect -> LevelSelectScreen(
            mode = current.mode,
            data = data,
            progress = progress,
            onSelect = { level ->
                navigate(if (current.mode == Mode.LEARN) Screen.LessonList(level) else Screen.QuizMenu(level))
            },
            onBack = ::back,
        )

        is Screen.LessonList -> LessonListScreen(
            level = current.level,
            data = data,
            progress = progress,
            onOpenLesson = { navigate(Screen.LessonDetail(it.id)) },
            onBack = ::back,
        )

        is Screen.LessonDetail -> {
            val lesson = data.lesson(current.lessonId)
            if (lesson == null) {
                LaunchedEffect(Unit) { back() }
            } else {
                LessonDetailScreen(
                    lesson = lesson,
                    data = data,
                    progress = progress,
                    onStartQuiz = {
                        val questions = Quiz.pick(data.questionsForLesson(it.id))
                        navigate(Screen.Quiz(it.title, questions.map { q -> q.id }, null))
                    },
                    onOpenLesson = { replace(Screen.LessonDetail(it.id)) },
                    onBack = ::back,
                )
            }
        }

        is Screen.QuizMenu -> QuizMenuScreen(
            level = current.level,
            data = data,
            progress = progress,
            onStart = ::navigate,
            onBack = ::back,
        )

        is Screen.Quiz -> QuizScreen(
            quiz = current,
            data = data,
            progress = progress,
            onFinish = ::replace,
            onQuit = ::back,
        )

        is Screen.Result -> ResultScreen(
            result = current,
            data = data,
            progress = progress,
            onRetry = ::replace,
            onBack = ::back,
        )

        Screen.Websites -> WebsitesScreen(data = data, onBack = ::back)
    }
}
