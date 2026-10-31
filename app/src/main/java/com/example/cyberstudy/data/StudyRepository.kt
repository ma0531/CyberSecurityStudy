package com.example.cyberstudy.data

import android.content.Context
import org.json.JSONArray
import org.json.JSONObject

/** assets 内の JSON から学習データを読み込む */
object StudyRepository {

    fun load(context: Context): StudyData {
        val descriptions = mutableMapOf<Level, String>()
        val lessons = mutableListOf<Lesson>()
        val questions = mutableListOf<Question>()

        for (level in Level.entries) {
            val lessonJson = JSONObject(readAsset(context, "lessons_${level.key}.json"))
            descriptions[level] = lessonJson.optString("description")
            lessons += lessonJson.getJSONArray("lessons").objects().map { parseLesson(it, level) }

            val questionJson = JSONObject(readAsset(context, "questions_${level.key}.json"))
            questions += questionJson.getJSONArray("questions").objects()
                .filter { it.optString("type") == "multiple_choice" }
                .map { parseQuestion(it, level) }
        }

        val sitesJson = JSONObject(readAsset(context, "websites.json"))
        val groups = sitesJson.getJSONArray("groups").objects().map { g ->
            SiteGroup(
                title = g.getString("title"),
                description = g.optString("description"),
                sites = g.getJSONArray("sites").objects().map { s ->
                    Site(
                        name = s.getString("name"),
                        url = s.getString("url"),
                        level = s.optString("level"),
                        description = s.optString("description"),
                    )
                },
            )
        }

        return StudyData(descriptions, lessons, questions, groups, sitesJson.optString("updated"))
    }

    private fun parseLesson(o: JSONObject, level: Level) = Lesson(
        id = o.getString("id"),
        level = level,
        category = o.optString("category"),
        title = o.getString("title"),
        summary = o.optString("summary"),
        content = o.optJSONArray("content").strings(),
        keyPoints = o.optJSONArray("key_points").strings(),
        keywords = o.optJSONArray("keywords").strings(),
        referenceUrl = o.optString("reference_url").ifBlank { null },
    )

    private fun parseQuestion(o: JSONObject, level: Level) = Question(
        id = o.getString("id"),
        level = level,
        lessonId = o.optString("lesson_id"),
        question = o.getString("question"),
        choices = o.getJSONArray("choices").strings(),
        answer = o.getInt("answer"),
        explanation = o.optString("explanation"),
    )

    private fun readAsset(context: Context, name: String): String =
        context.assets.open(name).bufferedReader(Charsets.UTF_8).use { it.readText() }

    private fun JSONArray.objects(): List<JSONObject> = List(length()) { getJSONObject(it) }

    private fun JSONArray?.strings(): List<String> =
        if (this == null) emptyList() else List(length()) { getString(it) }
}
