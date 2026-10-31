package com.example.cyberstudy

import com.example.cyberstudy.data.Level
import com.example.cyberstudy.data.Question
import com.example.cyberstudy.data.Quiz
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Test
import kotlin.random.Random

class QuizTest {

    private fun question(n: Int) = Question(
        id = "Q$n", level = Level.BEGINNER, lessonId = "B01", question = "問題$n",
        choices = listOf("a", "b", "c", "d"), answer = 0, explanation = "",
    )

    private val questions = (1..25).map(::question)

    @Test
    fun pick_指定数だけ重複なく取り出す() {
        val picked = Quiz.pick(questions, 10, Random(1))
        assertEquals(10, picked.size)
        assertEquals(10, picked.map { it.id }.toSet().size)
    }

    @Test
    fun pick_問題数より多く指定したら全問() {
        assertEquals(25, Quiz.pick(questions, 100, Random(1)).size)
    }

    @Test
    fun pick_countなしなら全問をシャッフル() {
        val picked = Quiz.pick(questions, random = Random(1))
        assertEquals(questions.toSet(), picked.toSet())
    }

    @Test
    fun percent_計算() {
        assertEquals(70, Quiz.percent(7, 10))
        assertEquals(0, Quiz.percent(0, 0))
    }

    @Test
    fun message_正答率に応じて変わる() {
        assertTrue(Quiz.message(100).contains("全問正解"))
        assertTrue(Quiz.message(80) != Quiz.message(30))
    }
}
