package com.example.cyberstudy.data

import android.content.Context
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateMapOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.core.content.edit

/**
 * 学習の進み具合を端末に保存する。
 * Compose の State で保持しているので、値が変わると画面も自動で更新される。
 */
class ProgressStore(context: Context) {

    private val prefs = context.getSharedPreferences("study_progress", Context.MODE_PRIVATE)

    /** 「学習完了」にしたレッスンの ID */
    var completedLessons by mutableStateOf(prefs.getStringSet(KEY_COMPLETED, null).orEmpty().toSet())
        private set

    /** 最後に間違えたままの問題の ID（正解すると消える） */
    var wrongQuestions by mutableStateOf(prefs.getStringSet(KEY_WRONG, null).orEmpty().toSet())
        private set

    /** レベル別の最高正答率（%） */
    private val bestScores = mutableStateMapOf<Level, Int>().apply {
        Level.entries.forEach { level ->
            val v = prefs.getInt(bestKey(level), -1)
            if (v >= 0) put(level, v)
        }
    }

    fun isCompleted(lessonId: String) = lessonId in completedLessons

    fun setLessonCompleted(lessonId: String, completed: Boolean) {
        completedLessons = if (completed) completedLessons + lessonId else completedLessons - lessonId
        prefs.edit { putStringSet(KEY_COMPLETED, completedLessons) }
    }

    /** 1問ごとの解答結果を記録する */
    fun recordAnswer(questionId: String, correct: Boolean) {
        wrongQuestions = if (correct) wrongQuestions - questionId else wrongQuestions + questionId
        prefs.edit { putStringSet(KEY_WRONG, wrongQuestions) }
    }

    fun bestScore(level: Level): Int? = bestScores[level]

    /** レベル全体の問題（ランダム・全問）を解き終えたときに最高正答率を更新する */
    fun recordQuizResult(level: Level, correct: Int, total: Int) {
        if (total == 0) return
        val percent = correct * 100 / total
        if (percent > (bestScores[level] ?: -1)) {
            bestScores[level] = percent
            prefs.edit { putInt(bestKey(level), percent) }
        }
    }

    /** すべての進捗を消去する */
    fun reset() {
        completedLessons = emptySet()
        wrongQuestions = emptySet()
        bestScores.clear()
        prefs.edit { clear() }
    }

    private fun bestKey(level: Level) = "best_${level.key}"

    private companion object {
        const val KEY_COMPLETED = "completed_lessons"
        const val KEY_WRONG = "wrong_questions"
    }
}
