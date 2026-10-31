package com.example.cyberstudy.ui

import androidx.compose.runtime.saveable.Saver
import com.example.cyberstudy.data.Level

/** 学習モード / 問題モード */
enum class Mode { LEARN, QUIZ }

/**
 * アプリ内の画面。画面回転などで状態が消えないよう、文字列に変換して保存できるようにしている。
 */
sealed interface Screen {
    data object Home : Screen
    data class LevelSelect(val mode: Mode) : Screen
    data class LessonList(val level: Level) : Screen
    data class LessonDetail(val lessonId: String) : Screen
    data class QuizMenu(val level: Level) : Screen
    data object Websites : Screen

    /** 出題中。level はレベル全体から出題したとき（最高正答率を記録する）だけ設定 */
    data class Quiz(val title: String, val questionIds: List<String>, val level: Level?) : Screen

    data class Result(
        val title: String,
        val questionIds: List<String>,
        val wrongIds: List<String>,
        val level: Level?,
    ) : Screen
}

private const val SEP = "\u001F"
private const val LIST_SEP = ","

private fun List<String>.join() = joinToString(LIST_SEP)
private fun String.toIdList(): List<String> = if (isEmpty()) emptyList() else split(LIST_SEP)
private fun Level?.encode() = this?.key.orEmpty()
private fun String.toLevelOrNull() = if (isEmpty()) null else Level.fromKey(this)

private fun Screen.encode(): String = when (this) {
    Screen.Home -> "home"
    Screen.Websites -> "websites"
    is Screen.LevelSelect -> listOf("level", mode.name).joinToString(SEP)
    is Screen.LessonList -> listOf("lessons", level.key).joinToString(SEP)
    is Screen.LessonDetail -> listOf("lesson", lessonId).joinToString(SEP)
    is Screen.QuizMenu -> listOf("quizmenu", level.key).joinToString(SEP)
    is Screen.Quiz -> listOf("quiz", title, questionIds.join(), level.encode()).joinToString(SEP)
    is Screen.Result -> listOf("result", title, questionIds.join(), wrongIds.join(), level.encode()).joinToString(SEP)
}

private fun decodeScreen(s: String): Screen {
    val p = s.split(SEP)
    return when (p[0]) {
        "websites" -> Screen.Websites
        "level" -> Screen.LevelSelect(Mode.valueOf(p[1]))
        "lessons" -> Screen.LessonList(Level.fromKey(p[1]))
        "lesson" -> Screen.LessonDetail(p[1])
        "quizmenu" -> Screen.QuizMenu(Level.fromKey(p[1]))
        "quiz" -> Screen.Quiz(p[1], p[2].toIdList(), p[3].toLevelOrNull())
        "result" -> Screen.Result(p[1], p[2].toIdList(), p[3].toIdList(), p[4].toLevelOrNull())
        else -> Screen.Home
    }
}

/** 画面スタック（戻る履歴）の保存用 Saver */
val BackStackSaver = Saver<List<Screen>, ArrayList<String>>(
    save = { stack -> ArrayList(stack.map { it.encode() }) },
    restore = { saved -> saved.map(::decodeScreen) },
)
