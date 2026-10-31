package com.example.cyberstudy.data

/** 難易度レベル（key は JSON の "level" と対応） */
enum class Level(val key: String, val label: String) {
    BEGINNER("beginner", "初級"),
    INTERMEDIATE("intermediate", "中級"),
    ADVANCED("advanced", "上級");

    companion object {
        fun fromKey(key: String): Level = entries.first { it.key == key }
    }
}

/** 学習モードで読むレッスン */
data class Lesson(
    val id: String,
    val level: Level,
    val category: String,
    val title: String,
    val summary: String,
    val content: List<String>,
    val keyPoints: List<String>,
    val keywords: List<String>,
    val referenceUrl: String?,
)

/** 問題モードで出題する4択問題 */
data class Question(
    val id: String,
    val level: Level,
    val lessonId: String,
    val question: String,
    val choices: List<String>,
    /** 正解の choices インデックス（0始まり） */
    val answer: Int,
    val explanation: String,
)

/** おすすめ学習サイト */
data class Site(
    val name: String,
    val url: String,
    val level: String,
    val description: String,
)

data class SiteGroup(
    val title: String,
    val description: String,
    val sites: List<Site>,
)

/** アセットから読み込んだ学習データ一式 */
class StudyData(
    private val levelDescriptions: Map<Level, String>,
    val lessons: List<Lesson>,
    val questions: List<Question>,
    val siteGroups: List<SiteGroup>,
    val sitesUpdated: String,
) {
    private val lessonById = lessons.associateBy { it.id }
    private val questionById = questions.associateBy { it.id }

    fun levelDescription(level: Level): String = levelDescriptions[level].orEmpty()

    fun lessons(level: Level): List<Lesson> = lessons.filter { it.level == level }

    fun questions(level: Level): List<Question> = questions.filter { it.level == level }

    fun questionsForLesson(lessonId: String): List<Question> = questions.filter { it.lessonId == lessonId }

    fun lesson(id: String): Lesson? = lessonById[id]

    fun question(id: String): Question? = questionById[id]

    /** ID リストから問題を取り出す（存在しない ID は無視） */
    fun questionsByIds(ids: List<String>): List<Question> = ids.mapNotNull { questionById[it] }
}
