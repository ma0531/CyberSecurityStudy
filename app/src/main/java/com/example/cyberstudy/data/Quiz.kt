package com.example.cyberstudy.data

import kotlin.random.Random

/** 出題する問題を選ぶ・結果を評価する（Android に依存しない純粋なロジック） */
object Quiz {

    /** ランダム出題の問題数 */
    const val RANDOM_COUNT = 10

    /** 問題をシャッフルして最大 count 問を取り出す（count が null なら全問） */
    fun pick(questions: List<Question>, count: Int? = null, random: Random = Random.Default): List<Question> {
        val shuffled = questions.shuffled(random)
        return if (count == null) shuffled else shuffled.take(count)
    }

    /** 正答率（%）。問題数 0 のときは 0 */
    fun percent(correct: Int, total: Int): Int = if (total == 0) 0 else correct * 100 / total

    /** 正答率に応じたひとことメッセージ */
    fun message(percent: Int): String = when {
        percent == 100 -> "全問正解！ 完璧です 🎉"
        percent >= 80 -> "よくできました！ この調子で次のレベルにも挑戦しましょう。"
        percent >= 60 -> "合格ライン！ 間違えた問題を復習して確実にしましょう。"
        percent >= 40 -> "もう一息！ 学習モードでレッスンを読み直してみましょう。"
        else -> "まずは学習モードでレッスンを読んでから再挑戦しましょう。"
    }
}
