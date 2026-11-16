/*
 * サイバーセキュリティ学習（Web版）
 * GUI版（main.py / data_loader.py）と同じ画面構成・同じ出題ルールで動かす。
 *   メニュー ─┬─ レッスンで学ぶ（一覧 → 本文 → そのレッスンの問題）
 *             ├─ クイズに挑戦（レベル・出題数を選ぶ → クイズ → 結果）
 *             ├─ 資格一覧
 *             └─ おすすめWebサイト
 * 画面の切り替えは URL のハッシュ（#/lessons/beginner など）で行う。
 * 表示する言語（日本語・英語）は index.html が決めて、その言語のデータ（data.js / data.en.js）を読み込む。
 */
(function () {
  "use strict";

  // ---- 画面の文言（日本語・英語） ----
  // 文字を足すときは、ja と en の両方に同じキーで書く。数字などが入る文は関数にする
  const TEXT = {
    ja: {
      brand: "サイバーセキュリティ学習",
      pageTitle: "サイバーセキュリティ学習",
      pageDescription: "初級・中級・上級のレッスンと4択クイズで、サイバーセキュリティを段階的に学べる学習サイトです。",
      navLessons: "レッスン",
      navQuiz: "クイズ",
      navCerts: "資格",
      navSites: "おすすめWebサイト",
      siteMeta: (date) => `最終更新日：${date}　作成者　ま～君`,
      levels: { beginner: "初級", intermediate: "中級", advanced: "上級" },
      levelTag: (name) => `［${name}］`,
      backMenu: "← メニュー",
      // ホーム
      heroTitle: ["今日から始める、", "ITセキュリティ。"],
      heroLead: "むずかしい知識より、まずは毎日の小さな習慣から。大切な情報を守るための基本を、わかりやすく学びましょう。",
      heroCounts: (lessons, questions) => `レッスン ${lessons} 件 ／ 問題 ${questions} 問`,
      heroButton: "基本を学ぶ ↓",
      heroAlt: "セキュリティの監視画面が映ったモニター",
      heroCaption: "知ることが、守ることの第一歩。",
      entriesTitle: "まず始めたいことを選ぶ",
      entriesSub: "ちょっとした意識の変化が、日々のリスクを減らします。",
      entryLessons: ["レッスンで学ぶ", "知識（初級～上級）"],
      entryQuiz: ["クイズに挑戦", "初級から上級の問題から出題"],
      entryCerts: ["資格一覧", "関連する資格一覧と受験方法と申し込みサイト"],
      quickTitle: "確認クイズ",
      quickSub: "学んだことを、1問でおさらいしましょう。",
      quickNext: "別の問題",
      guideTitle: "はじめての方へ",
      guideSteps: [
        "「レッスンで学ぶ」で、初級から順番に知識を読みましょう。",
        "各レッスンの最後にある「このレッスンの問題を解く」で、理解を確認します。",
        "「クイズに挑戦」では、初級から上級までの問題からランダムに出題されます。",
        "「資格一覧」で、関連する資格の内容と受験方法、申し込みサイトを確認できます。",
        "「おすすめWebサイト」で、最新の攻撃手口や注意喚起をチェックしましょう。",
      ],
      correct: "○ 正解！",
      wrong: "× 不正解",
      wrongWithAnswer: (n) => `× 不正解（正解は ${n} 番）`,
      // レッスン
      lessonListTitle: "レッスン一覧",
      questionCount: (n) => `問題 ${n} 問`,
      lessonTitle: "レッスン",
      backToList: "← 一覧に戻る",
      lessonPosition: (level, i, total) => `${level}　${i} / ${total}`,
      explanationHead: "解説",
      keyPointsHead: "覚えるポイント",
      keywordsHead: "キーワード",
      keywordSeparator: "　/　",
      referenceHead: "参考リンク",
      prevLesson: "← 前のレッスン",
      nextLesson: "次のレッスン →",
      lessonQuizButton: (n) => `このレッスンの問題を解く（${n} 問）`,
      // クイズ
      quizSetupTitle: "クイズに挑戦",
      allLevelsRandom: "全レベルからランダム",
      allLevels: "全レベル",
      levelLegend: "出題するレベル",
      levelOption: (name, n) => `${name}（${n} 問）`,
      countLegend: "出題数",
      countAll: "全問",
      countOption: (n) => `${n} 問`,
      quizNote: ["問題の順番と選択肢の並びは、毎回ランダムに入れ替わります。", "回答は 1〜4 キー、次の問題へは Enter キーでも操作できます。"],
      start: "スタート",
      noQuestions: "出題できる問題がありません。",
      quizTitle: (title) => `クイズ：${title}`,
      quit: "やめる",
      quizProgress: (i, total, score) => `第 ${i} 問 / 全 ${total} 問　正解 ${score}`,
      explanation: (text) => `解説：${text}`,
      relatedLessonHint: (id, title) => `関連レッスン：${id}「${title}」で復習できます`,
      seeResults: "結果を見る",
      nextQuestion: "次の問題へ",
      quitConfirm: "クイズを中断して戻りますか？",
      // 結果
      resultTitle: (title) => `結果：${title}`,
      back: "← 戻る",
      score: (total, score, rate) => `${total} 問中 ${score} 問正解（正答率 ${rate}%）`,
      resultMessages: [
        "全問正解！すばらしい！",
        "よくできました！間違えた問題を見直して完璧にしましょう。",
        "あと一歩！関連レッスンを読み直してから再挑戦しましょう。",
        "まずはレッスンで基礎を確認してから、もう一度挑戦してみましょう。",
      ],
      retry: "もう一度（問題を選び直す）",
      reviewTitle: (n) => `間違えた問題の見直し（${n} 問）`,
      noWrong: "間違えた問題はありません。",
      yourAnswer: "あなたの回答：",
      correctAnswer: "正解：",
      relatedLesson: "関連レッスン：",
      lessonLinkLabel: (id, title) => `${id}「${title}」`,
      // おすすめWebサイト
      sitesTitle: "おすすめWebサイト",
      sitesChecked: (date) => `情報の確認日：${date}`,
      sitesIntro: "サイト名をクリックすると、別のタブで開きます。セキュリティの情報はすぐに古くなるので、定期的に公式サイトで最新情報を確認しましょう。",
      // 資格一覧
      certsTitle: "資格一覧",
      cbtHead: "CBT方式とは：",
      certTarget: (text) => `対象：${text}`,
      certFormat: (text) => `出題形式：${text}`,
      certDifficulty: (stars) => `難易度：${stars}`,
      difficultyHint: "☆が多いほど難しい（目安）",
      specHead: "試験の基本情報",
      methodHead: "受験方法",
      applyHead: "申し込みの流れ",
      officialSite: "公式サイト",
      applyPage: "申込ページ",
      // その他
      notFoundTitle: "ページが見つかりません",
      notFoundText: "お探しのページは見つかりませんでした。",
      footerCaution: "攻撃手法は「仕組みと対策を理解する」ための説明です。実際に試すのは、自分の環境や許可された演習環境（CTFなど）だけにしてください。",
      footerLatest: ["内容は一般的な知識に基づいています。最新の脅威は ", "おすすめWebサイト", " で確認してください。"],
      footerAnalytics: ["このサイトでは、閲覧状況を把握するために Google アナリティクスを使っています。データは Cookie を使って匿名で集められ、個人を特定するものではありません。詳しくは ", "Google のポリシー", " をご覧ください。"],
      googlePolicyUrl: "https://policies.google.com/technologies/partner-sites?hl=ja",
    },
    en: {
      brand: "Cybersecurity Study",
      pageTitle: "Cybersecurity Study",
      pageDescription: "A study site for learning cybersecurity step by step, with beginner, intermediate and advanced lessons and four-choice quizzes.",
      navLessons: "Lessons",
      navQuiz: "Quiz",
      navCerts: "Certifications",
      navSites: "Recommended Websites",
      siteMeta: (date) => `Last updated: ${date}　Created by Ma-kun`,
      levels: { beginner: "Beginner", intermediate: "Intermediate", advanced: "Advanced" },
      levelTag: (name) => `[${name}]`,
      backMenu: "← Menu",
      // ホーム
      heroTitle: ["Start today:", "IT security."],
      heroLead: "Before the difficult theory, start with small everyday habits. Learn the basics of protecting your important information in plain language.",
      heroCounts: (lessons, questions) => `${lessons} lessons / ${questions} questions`,
      heroButton: "Learn the basics ↓",
      heroAlt: "A monitor showing a security monitoring screen",
      heroCaption: "Knowing is the first step to protecting.",
      entriesTitle: "Choose where to start",
      entriesSub: "A small change in awareness reduces your everyday risks.",
      entryLessons: ["Learn with lessons", "Knowledge (beginner to advanced)"],
      entryQuiz: ["Take a quiz", "Questions from beginner to advanced"],
      entryCerts: ["Certifications", "Related certifications, how to take them, and where to apply"],
      quickTitle: "Quick quiz",
      quickSub: "Review what you have learned with one question.",
      quickNext: "Another question",
      guideTitle: "New here?",
      guideSteps: [
        "In \"Learn with lessons\", read the lessons in order, starting from the beginner level.",
        "Check your understanding with \"Take this lesson's quiz\" at the end of each lesson.",
        "\"Take a quiz\" gives you random questions from the beginner to the advanced level.",
        "In \"Certifications\", you can check related certifications, how to take them, and where to apply.",
        "In \"Recommended Websites\", check the latest attack methods and security alerts.",
      ],
      correct: "○ Correct!",
      wrong: "× Incorrect",
      wrongWithAnswer: (n) => `× Incorrect (the correct answer is No. ${n})`,
      // レッスン
      lessonListTitle: "Lessons",
      questionCount: (n) => `${n} questions`,
      lessonTitle: "Lesson",
      backToList: "← Back to list",
      lessonPosition: (level, i, total) => `${level}　${i} / ${total}`,
      explanationHead: "Explanation",
      keyPointsHead: "Key points",
      keywordsHead: "Keywords",
      keywordSeparator: " / ",
      referenceHead: "Reference",
      prevLesson: "← Previous lesson",
      nextLesson: "Next lesson →",
      lessonQuizButton: (n) => `Take this lesson's quiz (${n} questions)`,
      // クイズ
      quizSetupTitle: "Take a quiz",
      allLevelsRandom: "Random from all levels",
      allLevels: "All levels",
      levelLegend: "Level",
      levelOption: (name, n) => `${name} (${n} questions)`,
      countLegend: "Number of questions",
      countAll: "All",
      countOption: (n) => `${n} questions`,
      quizNote: ["The order of the questions and of the choices is shuffled every time.", "You can also answer with the 1-4 keys and go to the next question with the Enter key."],
      start: "Start",
      noQuestions: "There are no questions available.",
      quizTitle: (title) => `Quiz: ${title}`,
      quit: "Quit",
      quizProgress: (i, total, score) => `Question ${i} of ${total}　Correct: ${score}`,
      explanation: (text) => `Explanation: ${text}`,
      relatedLessonHint: (id, title) => `You can review this in the related lesson: ${id} "${title}"`,
      seeResults: "See results",
      nextQuestion: "Next question",
      quitConfirm: "Quit the quiz and go back?",
      // 結果
      resultTitle: (title) => `Results: ${title}`,
      back: "← Back",
      score: (total, score, rate) => `${score} of ${total} correct (${rate}%)`,
      resultMessages: [
        "A perfect score! Excellent!",
        "Well done! Review the questions you missed to make it perfect.",
        "Almost there! Reread the related lessons and try again.",
        "Go over the basics in the lessons first, then try again.",
      ],
      retry: "Try again (with new questions)",
      reviewTitle: (n) => `Review of the questions you missed (${n})`,
      noWrong: "You did not miss any questions.",
      yourAnswer: "Your answer: ",
      correctAnswer: "Correct answer: ",
      relatedLesson: "Related lesson: ",
      lessonLinkLabel: (id, title) => `${id} "${title}"`,
      // おすすめWebサイト
      sitesTitle: "Recommended Websites",
      sitesChecked: (date) => `Links checked: ${date}`,
      sitesIntro: "Click a site name to open it in a new tab. Security information goes out of date quickly, so check the official sites regularly for the latest information.",
      // 資格一覧
      certsTitle: "Certifications",
      cbtHead: "What is CBT? ",
      certTarget: (text) => `For: ${text}`,
      certFormat: (text) => `Format: ${text}`,
      certDifficulty: (stars) => `Difficulty: ${stars}`,
      difficultyHint: "The more stars, the harder (a rough guide)",
      specHead: "Exam basics",
      methodHead: "How to take the exam",
      applyHead: "How to apply",
      officialSite: "Official site",
      applyPage: "Application page",
      // その他
      notFoundTitle: "Page not found",
      notFoundText: "The page you are looking for could not be found.",
      footerCaution: "Attack methods are explained here so that you can understand how they work and how to defend against them. Only try them in your own environment or in a practice environment where you have permission (such as a CTF).",
      footerLatest: ["The content is based on general knowledge. Check ", "Recommended Websites", " for the latest threats."],
      footerAnalytics: ["This site uses Google Analytics to understand how it is used. The data is collected anonymously using cookies and does not identify you personally. For details, see ", "Google's policy", "."],
      googlePolicyUrl: "https://policies.google.com/technologies/partner-sites?hl=en",
    },
  };

  // 表示する言語（index.html が決めた値。想定外の値なら日本語にする）
  const LANG = window.SITE_LANG === "en" ? "en" : "ja";
  const T = TEXT[LANG];

  // ---- 定数（main.py / data_loader.py と同じ値） ----
  const LEVELS = T.levels;
  const ALL_LEVELS = "all";        // 「全レベルから出題」を表す特別なキー
  const QUIZ_COUNTS = [10, 20, 50, null]; // null は「全問」

  const DATA = window.CYBER_DATA;
  const view = document.getElementById("view");

  // 進行中のクイズの状態（ページを再読み込みすると消えます）
  let quiz = null;
  // 今クイズ画面を表示しているか（キー操作を受け付けるかの判定に使う）
  let quizActive = false;

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

  // 新しいタブで開く外部リンク
  function externalLink(href, label, cls) {
    return h("a", { class: cls || null, href, target: "_blank", rel: "noopener noreferrer" }, label);
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

  // ---- 言語の切り替えと、全画面に共通する部分（一番上の帯・ヘッダー・フッター） ----

  // 言語を保存して、その言語でページを読み込み直す（今見ている画面のハッシュは保つ）
  function setLanguage(lang) {
    if (lang === LANG) return;
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      // 保存領域が使えない環境でも、URL の ?lang= で切り替わる
    }
    location.href = `${location.pathname}?lang=${lang}${location.hash}`;
  }

  function renderChrome() {
    document.title = T.pageTitle;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", T.pageDescription);

    // 左上：最終更新日（data.js を作り直した日）と作成者
    document.getElementById("site-meta").textContent = T.siteMeta(DATA.updated);

    // 右上：言語の切り替えボタン（選択中の言語に印を付ける）
    document.querySelectorAll(".lang-switch button").forEach((button) => {
      const selected = button.dataset.lang === LANG;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
      button.addEventListener("click", () => setLanguage(button.dataset.lang));
    });

    // ヘッダーの文字（data-i18n のキーに対応する文言を入れる）
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = T[el.dataset.i18n];
    });

    document.getElementById("site-footer").replaceChildren(
      h("p", {}, T.footerCaution),
      h("p", {}, T.footerLatest[0], h("a", { href: "#/websites" }, T.footerLatest[1]), T.footerLatest[2]),
      h("p", {}, T.footerAnalytics[0], externalLink(T.googlePolicyUrl, T.footerAnalytics[1]), T.footerAnalytics[2])
    );
  }

  // ---- メニュー画面 ----
  function renderMenu() {
    // 入口のカード（番号・見出し・説明）
    const entryCard = (number, href, [title, note]) =>
      h(
        "a",
        { class: "entry-card", href },
        h("span", { class: "entry-number" }, number),
        h("strong", {}, title),
        h("span", { class: "entry-note" }, note)
      );

    render(
      // ヒーロー（画面の一番上）
      h(
        "section",
        { class: "home-hero" },
        h(
          "div",
          { class: "hero-text" },
          h("p", { class: "eyebrow" }, "DIGITAL SAFETY, EVERY DAY"),
          h("h1", {}, T.heroTitle[0], h("br"), T.heroTitle[1]),
          h("p", { class: "hero-lead" }, T.heroLead),
          h("p", { class: "sub" }, T.heroCounts(lessonCount, totalQuestions)),
          h(
            "button",
            {
              class: "btn-pill",
              type: "button",
              onclick: () => document.getElementById("entries").scrollIntoView({ behavior: "smooth" }),
            },
            T.heroButton
          )
        ),
        // ヒーローの写真（docs/hero.jpg）と、写真の上に重ねる一言
        h(
          "figure",
          { class: "hero-visual" },
          h("img", { src: "hero.jpg", alt: T.heroAlt, width: "493", height: "294" }),
          h("figcaption", { class: "hero-caption" }, T.heroCaption)
        )
      ),
      // 入口（3つのカード）
      h(
        "section",
        { class: "section", id: "entries" },
        h("p", { class: "eyebrow" }, "MENU"),
        h("h2", {}, T.entriesTitle),
        h("p", { class: "sub" }, T.entriesSub),
        h(
          "div",
          { class: "entry-grid" },
          entryCard("01 / LESSON", "#/lessons/beginner", T.entryLessons),
          entryCard("02 / QUIZ", "#/quiz", T.entryQuiz),
          entryCard("03 / CERTIFICATION", "#/certifications", T.entryCerts)
        )
      ),
      // 確認クイズ（実際の問題を1問ずつ出題）
      h(
        "section",
        { class: "quiz-band" },
        h(
          "div",
          { class: "quiz-band-inner" },
          h("p", { class: "eyebrow eyebrow-light" }, "QUICK CHECK"),
          h("h2", { class: "light" }, T.quickTitle),
          h("p", { class: "light-sub" }, T.quickSub),
          quickQuizCard()
        )
      ),
      // はじめての方へ
      h(
        "section",
        { class: "section" },
        h("h2", {}, T.guideTitle),
        h("ol", { class: "steps" }, T.guideSteps.map((step) => h("li", {}, step)))
      )
    );
  }

  // 確認クイズのカード。全問題からランダムに1問出題し、「別の問題」で入れ替える
  function quickQuizCard() {
    const pool = Object.keys(LEVELS).flatMap((lv) => DATA.questions[lv]);
    const box = h("div", { class: "quick-card" });
    let current = null;
    let picked = null; // 選んだ選択肢の番号（未回答は null）

    // 問題と選択肢を描き直す
    function draw() {
      const answered = picked !== null;
      // null の部品は入れない（replaceChildren は null を文字として追加してしまうため）
      const parts = [
        h("p", { class: "quick-question" }, current.question),
        h(
          "div",
          { class: "quick-choices" },
          current.choices.map((choice, i) => {
            let cls = "quick-choice";
            if (answered && i === current.answer) cls += " is-correct";
            else if (answered && i === picked) cls += " is-wrong";
            return h("button", { class: cls, type: "button", disabled: answered, onclick: () => answer(i) }, choice);
          })
        ),
        answered
          ? h(
              "div",
              { class: "quick-feedback" },
              picked === current.answer
                ? h("p", { class: "verdict good" }, T.correct)
                : h("p", { class: "verdict bad" }, T.wrong),
              h("p", {}, current.explanation)
            )
          : null,
        h("div", { class: "quick-nav" }, h("button", { class: "btn-pill small", type: "button", onclick: next }, T.quickNext)),
      ];
      box.replaceChildren(...parts.filter((part) => part !== null));
    }

    function answer(i) {
      if (picked !== null) return;
      picked = i;
      draw();
    }

    function next() {
      current = shuffleChoices(pool[Math.floor(Math.random() * pool.length)]);
      picked = null;
      draw();
    }

    next();
    return box;
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
            h("span", { class: "sub" }, T.questionCount(count)),
            h("p", { class: "summary" }, lesson.summary)
          )
        );
      })
    );

    render(
      pageHeader({ title: T.lessonListTitle, backLabel: T.backMenu }),
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
        title: T.lessonTitle,
        backLabel: T.backToList,
        backHref: `#/lessons/${level}`,
        info: T.lessonPosition(LEVELS[level], index + 1, lessons.length),
      }),
      h(
        "article",
        { class: "card" },
        h("p", { class: "sub" }, `${lesson.id}　${lesson.category}`),
        h("h2", { class: "lesson-title" }, lesson.title),
        h("p", { class: "summary-box" }, lesson.summary),
        h("h3", {}, T.explanationHead),
        h("ul", {}, lesson.content.map((paragraph) => h("li", {}, paragraph))),
        h("h3", {}, T.keyPointsHead),
        h("ul", { class: "points" }, lesson.key_points.map((point) => h("li", {}, `✔ ${point}`))),
        h("h3", {}, T.keywordsHead),
        h("p", {}, lesson.keywords.join(T.keywordSeparator)),
        lesson.reference_url
          ? [h("h3", {}, T.referenceHead), externalLink(lesson.reference_url, lesson.reference_url)]
          : null
      ),
      h(
        "div",
        { class: "lesson-nav" },
        prev ? h("a", { class: "btn", href: `#/lesson/${prev.id}` }, T.prevLesson) : h("span"),
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
              T.lessonQuizButton(questions.length)
            )
          : null,
        next ? h("a", { class: "btn", href: `#/lesson/${next.id}` }, T.nextLesson) : h("span")
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

    const levelOptions = [[ALL_LEVELS, T.allLevelsRandom], ...Object.entries(LEVELS)];
    const levelBox = h(
      "fieldset",
      {},
      h("legend", {}, T.levelLegend),
      levelOptions.map(([value, name]) =>
        radio("level", value, T.levelOption(name, counts[value]), value === selectedLevel, (v) => (selectedLevel = v))
      )
    );

    const countBox = h(
      "fieldset",
      {},
      h("legend", {}, T.countLegend),
      QUIZ_COUNTS.map((n, i) =>
        radio("count", String(i), n === null ? T.countAll : T.countOption(n), i === selectedCount, () => (selectedCount = i))
      )
    );

    render(
      pageHeader({ title: T.quizSetupTitle, backLabel: T.backMenu }),
      levelBox,
      countBox,
      h("p", { class: "sub" }, T.quizNote[0], h("br"), T.quizNote[1]),
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
                title: selectedLevel === ALL_LEVELS ? T.allLevels : LEVELS[selectedLevel],
                level: selectedLevel,
                lessonId: null,
                count: QUIZ_COUNTS[selectedCount],
                exitHash: "#/quiz",
              }),
          },
          T.start
        )
      )
    );
  }

  // 問題を用意してクイズを始める
  function startQuiz(params) {
    const questions = buildQuiz(params.level, params.lessonId, params.count);
    if (!questions.length) {
      alert(T.noQuestions);
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
            ? h("p", { class: "verdict good" }, T.correct)
            : h("p", { class: "verdict bad" }, T.wrongWithAnswer(q.answer + 1)),
          h("p", {}, T.explanation(q.explanation)),
          lesson ? h("p", { class: "sub" }, T.relatedLessonHint(lesson.id, lesson.title)) : null
        )
      : null;

    render(
      pageHeader({
        title: T.quizTitle(params.title),
        backLabel: T.quit,
        onBack: quitQuiz,
        info: T.quizProgress(index + 1, total, score),
      }),
      h(
        "section",
        { class: "card quiz" },
        h("p", { class: "sub" }, `${T.levelTag(LEVELS[q.level])} ${q.id}　${lesson ? lesson.title : ""}`),
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
          isLast ? T.seeResults : T.nextQuestion
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
    if (confirm(T.quitConfirm)) {
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

    // 正答率に応じたひとこと（100% / 80%以上 / 50%以上 / それ未満）
    let message;
    if (rate === 100) message = T.resultMessages[0];
    else if (rate >= 80) message = T.resultMessages[1];
    else if (rate >= 50) message = T.resultMessages[2];
    else message = T.resultMessages[3];

    render(
      pageHeader({ title: T.resultTitle(params.title), backLabel: T.back, backHref: params.exitHash }),
      h(
        "section",
        { class: "card" },
        h("p", { class: "big-score" }, T.score(total, score, rate)),
        h("p", { class: "sub" }, message),
        h("button", { class: "btn primary", type: "button", onclick: () => startQuiz(params) }, T.retry)
      ),
      wrong.length
        ? h(
            "section",
            { class: "card" },
            h("h2", {}, T.reviewTitle(wrong.length)),
            wrong.map(({ q, selected }) => reviewItem(q, selected))
          )
        : h("p", { class: "good" }, T.noWrong)
    );
  }

  // 結果画面で、間違えた1問分の見直し欄
  function reviewItem(q, selected) {
    const entry = lessonMap[q.lesson_id];
    return h(
      "div",
      { class: "review" },
      h("p", { class: "sub" }, `${T.levelTag(LEVELS[q.level])} ${q.id}`),
      h("p", { class: "bold" }, q.question),
      h("p", {}, T.yourAnswer, h("span", { class: "bad" }, q.choices[selected])),
      h("p", {}, T.correctAnswer, h("span", { class: "good" }, q.choices[q.answer])),
      h("p", {}, T.explanation(q.explanation)),
      entry
        ? h(
            "p",
            { class: "sub" },
            T.relatedLesson,
            h("a", { href: `#/lesson/${q.lesson_id}` }, T.lessonLinkLabel(q.lesson_id, entry.lesson.title))
          )
        : null
    );
  }

  // ---- おすすめWebサイト画面 ----
  function renderWebsites() {
    const data = DATA.websites;
    render(
      pageHeader({ title: T.sitesTitle, backLabel: T.backMenu, info: T.sitesChecked(data.updated) }),
      h("p", { class: "sub" }, T.sitesIntro),
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
                externalLink(site.url, site.name),
                h("span", { class: "level" }, T.levelTag(site.level)),
                h("p", {}, site.description),
                h("p", { class: "sub url" }, site.url)
              )
            )
          )
        )
      )
    );
  }

  // ---- 資格一覧（概要・対象・出題形式・試験の基本情報・受験方法・申し込みの流れ・公式リンク） ----
  function renderCertifications() {
    render(
      pageHeader({ title: T.certsTitle, backLabel: T.backMenu }),
      h("p", { class: "notice" }, DATA.certifications.description),
      h("p", { class: "notice" }, h("strong", {}, T.cbtHead), DATA.certifications.cbt_note),
      DATA.certifications.categories.map((category) =>
        h(
          "section",
          {},
          h("h2", { class: "category-title" }, category.name),
          category.items.map((item) =>
            h(
              "article",
              { class: "card" },
              h("h3", {}, item.name),
              h("p", {}, item.summary),
              h("p", { class: "sub" }, T.certTarget(item.target)),
              h("p", { class: "sub" }, T.certFormat(item.format)),
              h("p", { class: "difficulty", title: T.difficultyHint }, T.certDifficulty("☆".repeat(item.difficulty))),
              h("h4", {}, T.specHead),
              h("ul", { class: "spec" }, item.spec.map((text) => h("li", {}, text))),
              h("h4", {}, T.methodHead),
              h("ul", {}, item.exam_method.map((text) => h("li", {}, text))),
              h("h4", {}, T.applyHead),
              h("ol", {}, item.how_to_apply.map((step) => h("li", {}, step))),
              h(
                "div",
                { class: "cert-actions" },
                externalLink(item.official_url, T.officialSite, "btn"),
                item.apply_url ? externalLink(item.apply_url, T.applyPage, "btn primary") : null
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
      pageHeader({ title: T.notFoundTitle, backLabel: T.backMenu }),
      h("p", {}, T.notFoundText)
    );
  }

  // ---- Google アナリティクス ----
  // 画面を切り替えるたびに閲覧を送る。gtag は公開サイトでのみ用意される（index.html を参照）
  // 「#/lessons/beginner」は「/CyberSecurityStudy/lessons/beginner」の形にして、レポートで区別しやすくする
  function trackPageView() {
    if (typeof window.gtag !== "function") return;
    const screenPath = location.hash.replace(/^#\/?/, "");
    const basePath = location.pathname.replace(/index\.html$/, "").replace(/\/?$/, "/");
    window.gtag("event", "page_view", {
      page_location: location.origin + basePath + screenPath,
      page_title: document.title,
      language: LANG, // どちらの言語で見られたか
    });
  }

  // ---- ハッシュに応じて画面を選ぶ ----
  function route() {
    quizActive = false;
    trackPageView();
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
      case "certifications":
        return renderCertifications();
      case "websites":
        return renderWebsites();
      default:
        return renderNotFound();
    }
  }

  // ---- 起動 ----
  if (!DATA) {
    view.textContent =
      "学習データを読み込めませんでした。tools/build_site.py を実行して docs/data.js と docs/data.en.js を作成してください。 / " +
      "The study data could not be loaded.";
    return;
  }

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

  renderChrome();
  window.addEventListener("hashchange", route);
  route();
})();
