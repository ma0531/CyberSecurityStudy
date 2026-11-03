/*
 * サイバーセキュリティ学習（Web版）
 * GUI版（main.py / data_loader.py）と同じ画面構成・同じ出題ルールで動かす。
 *   メニュー ─┬─ レッスンで学ぶ（一覧 → 本文 → そのレッスンの問題）
 *             ├─ クイズに挑戦（レベル・出題数を選ぶ → クイズ → 結果）
 *             └─ おすすめWebサイト
 * 画面の切り替えは URL のハッシュ（#/lessons/beginner など）で行う。
 */
(function () {
  "use strict";

  // ---- 定数（main.py / data_loader.py と同じ値） ----
  const LEVELS = { beginner: "初級", intermediate: "中級", advanced: "上級" };
  const ALL_LEVELS = "all";        // 「全レベルから出題」を表す特別なキー
  const QUIZ_COUNTS = [10, 20, 50, null]; // null は「全問」

  const DATA = window.CYBER_DATA;
  const view = document.getElementById("view");

  // 進行中のクイズの状態（ページを再読み込みすると消えます）
  let quiz = null;
  // 今クイズ画面を表示しているか（キー操作を受け付けるかの判定に使う）
  let quizActive = false;

  // ---- データの下ごしらえ ----
  // 全レッスンを ID で引けるようにする（関連レッスンの表示に使う）
  const lessonMap = {};
  for (const level of Object.keys(LEVELS)) {
    DATA.lessons[level].lessons.forEach((lesson, index) => {
      lessonMap[lesson.id] = { lesson, level, index };
    });
  }
  const lessonCount = Object.keys(lessonMap).length;
  const questionCounts = {};
  for (const level of Object.keys(LEVELS)) {
    questionCounts[level] = DATA.questions[level].length;
  }
  const totalQuestions = Object.values(questionCounts).reduce((sum, n) => sum + n, 0);

  // ---- 出題の仕組み（data_loader.py の shuffle_choices / build_quiz と同じ考え方） ----

  // 配列をランダムに並べ替えた新しい配列を返す（Fisher-Yates 法）
  function shuffle(items) {
    const result = items.slice();
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  // 選択肢の順番を入れ替え、正解の番号を付け直した問題を返す（元データは変えない）
  function shuffleChoices(question) {
    const order = shuffle(question.choices.map((_, i) => i));
    return {
      ...question,
      choices: order.map((i) => question.choices[i]),
      answer: order.indexOf(question.answer),
    };
  }

  // 出題する問題を作る。レッスン指定・出題数の上限に対応する
  function buildQuiz(level, lessonId, count) {
    let questions;
    if (level === ALL_LEVELS) {
      questions = Object.keys(LEVELS).flatMap((lv) => DATA.questions[lv].map((q) => ({ ...q, level: lv })));
    } else {
      questions = DATA.questions[level].map((q) => ({ ...q, level }));
    }
    if (lessonId) {
      questions = questions.filter((q) => q.lesson_id === lessonId);
    }
    questions = shuffle(questions);
    if (count) {
      questions = questions.slice(0, count);
    }
    return questions.map(shuffleChoices);
  }

  // ---- 画面を作るための小さな部品 ----

  // 要素を作る。props の on で始まるキーはイベント、null・false の値は無視する
  function h(tag, props, ...children) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(props || {})) {
      if (value === null || value === undefined || value === false) continue;
      if (key.startsWith("on")) {
        node.addEventListener(key.slice(2), value);
      } else if (key === "class") {
        node.className = value;
      } else if (value === true) {
        node.setAttribute(key, "");
      } else {
        node.setAttribute(key, value);
      }
    }
    for (const child of children.flat()) {
      if (child === null || child === undefined || child === false) continue;
      // 文字列は文字として追加する（HTML として解釈させない）
      node.append(child instanceof Node ? child : document.createTextNode(String(child)));
    }
    return node;
  }

  // 画面の中身を差し替え、表示位置を上に戻す
  // 配列（グループごとの複数要素など）と null（省略した部品）も受け付けるように平らにする
  function render(...nodes) {
    const items = nodes.flat().filter((node) => node !== null && node !== undefined && node !== false);
    view.replaceChildren(...items);
    window.scrollTo(0, 0);
  }

  // 同じハッシュへの移動でも画面を描き直せるように、移動か再描画かを切り分ける
  function go(hash) {
    if (location.hash === hash) {
      route();
    } else {
      location.hash = hash;
    }
  }

  // 画面上部の「戻る」ボタン・タイトル・補足表示
  function pageHeader({ title, backLabel, backHref, onBack, info }) {
    return h(
      "header",
      { class: "page-head" },
      backLabel
        ? h("a", {
            class: "btn",
            href: backHref || "#/",
            onclick: onBack
              ? (e) => {
                  e.preventDefault();
                  onBack();
                }
              : null,
          }, backLabel)
        : null,
      h("h1", {}, title),
      info ? h("span", { class: "info" }, info) : null
    );
  }

  // 関連レッスンの表示で使う、レッスンへのリンク
  function lessonLink(lessonId) {
    const entry = lessonMap[lessonId];
    if (!entry) return null;
    return h("a", { href: `#/lesson/${lessonId}` }, `${lessonId}「${entry.lesson.title}」`);
  }

  // ---- メニュー画面 ----
  function renderMenu() {
    const steps = [
      "初級のレッスンから順番に読みましょう。",
      "各レッスンの最後にある「このレッスンの問題を解く」で理解を確認します。",
      "慣れてきたら「クイズに挑戦」で、全レベルからランダムに出題される問題に挑戦！",
      "「おすすめWebサイト」で、最新の攻撃手口や注意喚起をチェックする習慣をつけましょう。",
    ];
    const menuCard = (href, title, note) =>
      h("a", { class: "menu-card", href }, h("strong", {}, title), h("span", {}, note));

    render(
      h(
        "section",
        { class: "hero" },
        h("h1", {}, "サイバーセキュリティ学習"),
        h("p", { class: "sub" }, `初級・中級・上級　レッスン ${lessonCount} 件 ／ 問題 ${totalQuestions} 問`)
      ),
      h(
        "section",
        { class: "card guide" },
        h("h2", {}, "はじめての方へ"),
        h("ul", {}, steps.map((step, i) => h("li", {}, `${"①②③④"[i]} ${step}`)))
      ),
      h(
        "section",
        { class: "menu-cards" },
        menuCard("#/lessons/beginner", "レッスンで学ぶ", "基礎知識を読んで学ぶ"),
        menuCard("#/quiz", "クイズに挑戦", `全 ${totalQuestions} 問からランダム出題`),
        menuCard("#/websites", "おすすめWebサイト", "最新情報・学習サイトの紹介")
      )
    );
  }

  // ---- レッスン一覧画面 ----
  function renderLessonList(level) {
    if (!DATA.lessons[level]) level = "beginner";
    const data = DATA.lessons[level];

    const tabs = h(
      "nav",
      { class: "tabs" },
      Object.entries(LEVELS).map(([lv, name]) =>
        h("a", { class: "tab" + (lv === level ? " active" : ""), href: `#/lessons/${lv}` }, name)
      )
    );

    const list = h(
      "ol",
      { class: "lesson-list" },
      data.lessons.map((lesson) => {
        const count = DATA.questions[level].filter((q) => q.lesson_id === lesson.id).length;
        return h(
          "li",
          {},
          h(
            "a",
            { href: `#/lesson/${lesson.id}` },
            h("span", { class: "lesson-id" }, lesson.id),
            h("span", { class: "category" }, lesson.category),
            h("strong", {}, lesson.title),
            h("span", { class: "sub" }, `問題 ${count} 問`),
            h("p", { class: "summary" }, lesson.summary)
          )
        );
      })
    );

    render(
      pageHeader({ title: "レッスン一覧", backLabel: "← メニュー" }),
      tabs,
      h("p", { class: "sub" }, data.description),
      list
    );
  }

  // ---- レッスン本文画面 ----
  function renderLesson(id) {
    const entry = lessonMap[id];
    if (!entry) return renderNotFound();
    const { lesson, level, index } = entry;
    const lessons = DATA.lessons[level].lessons;
    const questions = DATA.questions[level].filter((q) => q.lesson_id === lesson.id);
    const prev = lessons[index - 1];
    const next = lessons[index + 1];

    render(
      pageHeader({
        title: "レッスン",
        backLabel: "← 一覧に戻る",
        backHref: `#/lessons/${level}`,
        info: `${LEVELS[level]}　${index + 1} / ${lessons.length}`,
      }),
      h(
        "article",
        { class: "card" },
        h("p", { class: "sub" }, `${lesson.id}　${lesson.category}`),
        h("h2", { class: "lesson-title" }, lesson.title),
        h("p", { class: "summary-box" }, lesson.summary),
        h("h3", {}, "解説"),
        h("ul", {}, lesson.content.map((paragraph) => h("li", {}, paragraph))),
        h("h3", {}, "覚えるポイント"),
        h("ul", { class: "points" }, lesson.key_points.map((point) => h("li", {}, `✔ ${point}`))),
        h("h3", {}, "キーワード"),
        h("p", {}, lesson.keywords.join("　/　")),
        lesson.reference_url
          ? [
              h("h3", {}, "参考リンク"),
              h("a", { href: lesson.reference_url, target: "_blank", rel: "noopener noreferrer" }, lesson.reference_url),
            ]
          : null
      ),
      h(
        "div",
        { class: "lesson-nav" },
        prev ? h("a", { class: "btn", href: `#/lesson/${prev.id}` }, "← 前のレッスン") : h("span"),
        questions.length
          ? h(
              "button",
              {
                class: "btn primary",
                type: "button",
                onclick: () =>
                  startQuiz({
                    title: `${lesson.id} ${lesson.title}`,
                    level,
                    lessonId: lesson.id,
                    count: null,
                    exitHash: `#/lesson/${lesson.id}`, // クイズを終えたら、このレッスンに戻る
                  }),
              },
              `このレッスンの問題を解く（${questions.length} 問）`
            )
          : null,
        next ? h("a", { class: "btn", href: `#/lesson/${next.id}` }, "次のレッスン →") : h("span")
      )
    );
  }

  // ---- クイズ：設定画面 ----
  function renderQuizSetup() {
    quizActive = false;
    const counts = { ...questionCounts, [ALL_LEVELS]: totalQuestions };
    let selectedLevel = ALL_LEVELS;
    let selectedCount = 0; // QUIZ_COUNTS の何番目か

    // ラジオボタン1つ分を作る
    const radio = (name, value, label, checked, onChange) =>
      h(
        "label",
        { class: "radio" + (name === "count" ? " inline" : "") },
        h("input", {
          type: "radio",
          name,
          value,
          checked,
          onchange: () => onChange(value),
        }),
        " ",
        label
      );

    const levelOptions = [[ALL_LEVELS, "全レベルからランダム"], ...Object.entries(LEVELS)];
    const levelBox = h(
      "fieldset",
      {},
      h("legend", {}, "出題するレベル"),
      levelOptions.map(([value, name]) =>
        radio("level", value, `${name}（${counts[value]} 問）`, value === selectedLevel, (v) => (selectedLevel = v))
      )
    );

    const countBox = h(
      "fieldset",
      {},
      h("legend", {}, "出題数"),
      QUIZ_COUNTS.map((n, i) =>
        radio("count", String(i), n === null ? "全問" : `${n} 問`, i === selectedCount, () => (selectedCount = i))
      )
    );

    render(
      pageHeader({ title: "クイズに挑戦", backLabel: "← メニュー" }),
      levelBox,
      countBox,
      h(
        "p",
        { class: "sub" },
        "問題の順番と選択肢の並びは、毎回ランダムに入れ替わります。",
        h("br"),
        "回答は 1〜4 キー、次の問題へは Enter キーでも操作できます。"
      ),
      h(
        "div",
        { class: "center" },
        h(
          "button",
          {
            class: "btn primary big",
            type: "button",
            onclick: () =>
              startQuiz({
                title: selectedLevel === ALL_LEVELS ? "全レベル" : LEVELS[selectedLevel],
                level: selectedLevel,
                lessonId: null,
                count: QUIZ_COUNTS[selectedCount],
                exitHash: "#/quiz",
              }),
          },
          "スタート"
        )
      )
    );
  }

  // 問題を用意してクイズを始める
  function startQuiz(params) {
    const questions = buildQuiz(params.level, params.lessonId, params.count);
    if (!questions.length) {
      alert("出題できる問題がありません。");
      return;
    }
    quiz = { params, questions, index: 0, score: 0, wrong: [], answered: false, selected: null, finished: false };
    go("#/quiz/run");
  }

  // ---- クイズ：出題画面 ----
  function renderQuiz() {
    quizActive = true;
    const { params, questions, index, score, answered, selected } = quiz;
    const q = questions[index];
    const total = questions.length;
    const isLast = index === total - 1;
    const lesson = lessonMap[q.lesson_id] ? lessonMap[q.lesson_id].lesson : null;

    const choiceButtons = q.choices.map((choice, i) => {
      let cls = "choice";
      if (answered && i === q.answer) cls += " is-correct";
      else if (answered && i === selected) cls += " is-wrong";
      return h(
        "button",
        { class: cls, type: "button", disabled: answered, onclick: () => answer(i) },
        `${i + 1}.  ${choice}`
      );
    });

    // 回答後だけ、正誤と解説を表示する
    const feedback = answered
      ? h(
          "div",
          { class: "feedback" },
          selected === q.answer
            ? h("p", { class: "verdict good" }, "○ 正解！")
            : h("p", { class: "verdict bad" }, `× 不正解（正解は ${q.answer + 1} 番）`),
          h("p", {}, `解説：${q.explanation}`),
          lesson ? h("p", { class: "sub" }, `関連レッスン：${lesson.id}「${lesson.title}」で復習できます`) : null
        )
      : null;

    render(
      pageHeader({
        title: `クイズ：${params.title}`,
        backLabel: "やめる",
        onBack: quitQuiz,
        info: `第 ${index + 1} 問 / 全 ${total} 問　正解 ${score}`,
      }),
      h(
        "section",
        { class: "card quiz" },
        h("p", { class: "sub" }, `［${LEVELS[q.level]}］ ${q.id}　${lesson ? lesson.title : ""}`),
        h("h2", { class: "question" }, q.question),
        h("div", { class: "choices" }, choiceButtons),
        feedback
      ),
      h(
        "div",
        { class: "quiz-nav" },
        h(
          "button",
          { class: "btn primary", type: "button", disabled: !answered, onclick: nextQuestion },
          isLast ? "結果を見る" : "次の問題へ"
        )
      )
    );
  }

  // 選択肢を選んだときの処理（正誤の記録）
  function answer(i) {
    if (quiz.answered) return;
    const q = quiz.questions[quiz.index];
    quiz.answered = true;
    quiz.selected = i;
    if (i === q.answer) {
      quiz.score += 1;
    } else {
      quiz.wrong.push({ q, selected: i });
    }
    renderQuiz();
  }

  // 次の問題へ。最後の問題の後は結果画面へ
  function nextQuestion() {
    quiz.index += 1;
    quiz.answered = false;
    quiz.selected = null;
    if (quiz.index < quiz.questions.length) {
      renderQuiz();
    } else {
      quiz.finished = true;
      go("#/quiz/result");
    }
  }

  // 途中でやめる（確認してから元の画面に戻る）
  function quitQuiz() {
    if (confirm("クイズを中断して戻りますか？")) {
      go(quiz.params.exitHash);
    }
  }

  // Enter（次へ）と 1〜4（回答）のキー操作。GUI版と同じ動き
  document.addEventListener("keydown", (e) => {
    if (!quizActive || !quiz) return;
    if (!quiz.answered && /^[1-4]$/.test(e.key)) {
      const i = Number(e.key) - 1;
      if (i < quiz.questions[quiz.index].choices.length) answer(i);
    } else if (e.key === "Enter" && quiz.answered) {
      e.preventDefault(); // フォーカス中のボタンが二重に押されるのを防ぐ
      nextQuestion();
    }
  });

  // ---- クイズ：結果画面 ----
  function renderResult() {
    quizActive = false;
    const { params, questions, score, wrong } = quiz;
    const total = questions.length;
    const rate = total ? Math.round((score / total) * 100) : 0;

    let message;
    if (rate === 100) message = "全問正解！すばらしい！";
    else if (rate >= 80) message = "よくできました！間違えた問題を見直して完璧にしましょう。";
    else if (rate >= 50) message = "あと一歩！関連レッスンを読み直してから再挑戦しましょう。";
    else message = "まずはレッスンで基礎を確認してから、もう一度挑戦してみましょう。";

    render(
      pageHeader({ title: `結果：${params.title}`, backLabel: "← 戻る", backHref: params.exitHash }),
      h(
        "section",
        { class: "card" },
        h("p", { class: "big-score" }, `${total} 問中 ${score} 問正解（正答率 ${rate}%）`),
        h("p", { class: "sub" }, message),
        h(
          "button",
          { class: "btn primary", type: "button", onclick: () => startQuiz(params) },
          "もう一度（問題を選び直す）"
        )
      ),
      wrong.length
        ? h(
            "section",
            { class: "card" },
            h("h2", {}, `間違えた問題の見直し（${wrong.length} 問）`),
            wrong.map(({ q, selected }) => reviewItem(q, selected))
          )
        : h("p", { class: "good" }, "間違えた問題はありません。")
    );
  }

  // 結果画面で、間違えた1問分の見直し欄
  function reviewItem(q, selected) {
    return h(
      "div",
      { class: "review" },
      h("p", { class: "sub" }, `［${LEVELS[q.level]}］ ${q.id}`),
      h("p", { class: "bold" }, q.question),
      h("p", {}, "あなたの回答：", h("span", { class: "bad" }, q.choices[selected])),
      h("p", {}, "正解：", h("span", { class: "good" }, q.choices[q.answer])),
      h("p", {}, `解説：${q.explanation}`),
      lessonMap[q.lesson_id] ? h("p", { class: "sub" }, "関連レッスン：", lessonLink(q.lesson_id)) : null
    );
  }

  // ---- おすすめWebサイト画面 ----
  function renderWebsites() {
    const data = DATA.websites;
    render(
      pageHeader({
        title: "おすすめWebサイト",
        backLabel: "← メニュー",
        info: `情報の確認日：${data.updated}`,
      }),
      h(
        "p",
        { class: "sub" },
        "サイト名をクリックすると、別のタブで開きます。セキュリティの情報はすぐに古くなるので、定期的に公式サイトで最新情報を確認しましょう。"
      ),
      data.groups.map((group) =>
        h(
          "section",
          { class: "card" },
          h("h2", {}, group.title),
          h("p", { class: "sub" }, group.description),
          h(
            "ul",
            { class: "site-list" },
            group.sites.map((site) =>
              h(
                "li",
                {},
                h("a", { href: site.url, target: "_blank", rel: "noopener noreferrer" }, site.name),
                h("span", { class: "level" }, `［${site.level}］`),
                h("p", {}, site.description),
                h("p", { class: "sub url" }, site.url)
              )
            )
          )
        )
      )
    );
  }

  // 存在しないハッシュを開いたときの表示
  function renderNotFound() {
    render(
      pageHeader({ title: "ページが見つかりません", backLabel: "← メニュー" }),
      h("p", {}, "お探しのページは見つかりませんでした。")
    );
  }

  // ---- ハッシュに応じて画面を選ぶ ----
  function route() {
    quizActive = false;
    const [name, arg] = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    switch (name) {
      case undefined:
        return renderMenu();
      case "lessons":
        return renderLessonList(arg || "beginner");
      case "lesson":
        return renderLesson(arg);
      case "quiz":
        if (arg === "run" && quiz && !quiz.finished) return renderQuiz();
        if (arg === "result" && quiz && quiz.finished) return renderResult();
        return renderQuizSetup();
      case "websites":
        return renderWebsites();
      default:
        return renderNotFound();
    }
  }

  // ---- 起動 ----
  if (!DATA) {
    view.textContent = "学習データを読み込めませんでした。tools/build_site.py を実行して docs/data.js を作成してください。";
  } else {
    window.addEventListener("hashchange", route);
    route();
  }
})();
