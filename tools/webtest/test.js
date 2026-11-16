// Web版（docs/）の動作確認。ヘッドレスの Edge で実際に画面を操作して確かめる。
//
// 使い方:
//   1) このフォルダで一度だけ:  npm install
//   2) 別の画面で:              python -m http.server 8800 --bind 127.0.0.1 --directory docs
//   3) このフォルダで:          node test.js http://127.0.0.1:8800/index.html
//      公開サイトを確かめるとき: node test.js https://ma0531.github.io/CyberSecurityStudy/index.html
//
// 第2引数にフォルダを渡すと、スクリーンショットを保存する。
const puppeteer = require("puppeteer-core");
const path = require("path");

const SITE = process.argv[2];
const SHOT_DIR = process.argv[3] || null;
const EDGE = process.env.EDGE_PATH || "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
if (!SITE) {
  console.error("使い方: node test.js <サイトのURL> [スクリーンショットの保存先]");
  process.exit(2);
}
// 公開サイトでは Google アナリティクスが動くため、手元かどうかで確認内容を変える
const IS_LOCAL = /127\.0\.0\.1|localhost/.test(SITE);

const results = [];
function check(name, ok, detail = "") {
  results.push(ok);
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail ? "  (" + detail + ")" : ""}`);
}
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const browser = await puppeteer.launch({ executablePath: EDGE, headless: true, args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1100, height: 800 });
  const errors = [];
  const gaRequests = [];
  page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
  page.on("console", (m) => { if (m.type() === "error") errors.push("console: " + m.text()); });
  page.on("request", (r) => { if (/googletagmanager|google-analytics/.test(r.url())) gaRequests.push(r.url()); });
  page.on("dialog", (d) => d.accept()); // クイズ中断の確認は「OK」で進める

  const viewText = () => page.$eval("#view", (el) => el.textContent);
  const hasText = async (t) => (await viewText()).includes(t);
  const hash = () => page.evaluate(() => location.hash);
  const open = async (h) => { await page.goto(SITE + h, { waitUntil: "load" }); await wait(200); };
  const shot = async (name, fullPage = true) => {
    if (SHOT_DIR) await page.screenshot({ path: path.join(SHOT_DIR, name), fullPage });
  };
  // 指定した文字を含む要素をクリックする
  const clickText = async (selector, t) => {
    const handle = await page.evaluateHandle(
      (selector, t) => [...document.querySelectorAll(selector)].find((el) => el.textContent.includes(t)), selector, t);
    const el = handle.asElement();
    if (!el) throw new Error(`見つからない: ${selector} 「${t}」`);
    await el.click();
    await wait(200);
  };
  const count = (selector) => page.$$eval(selector, (els) => els.length);

  // ---- ホーム ----
  await open("");
  const data = await page.evaluate(() => {
    const d = window.CYBER_DATA;
    const levels = Object.keys(d.questions);
    return {
      lessons: levels.reduce((n, lv) => n + d.lessons[lv].lessons.length, 0),
      questions: levels.reduce((n, lv) => n + d.questions[lv].length, 0),
      b01: d.questions.beginner.filter((q) => q.lesson_id === "B01").length,
      beginnerLessons: d.lessons.beginner.lessons.length,
      intermediateLessons: d.lessons.intermediate.lessons.length,
      siteGroups: d.websites.groups.length,
    };
  });
  check("ホームの件数表示", await hasText(`レッスン ${data.lessons} 件 ／ 問題 ${data.questions} 問`), `${data.lessons} 件 / ${data.questions} 問`);
  // 一番上の帯：左に最終更新日と作成者、右に言語の切り替え
  const updated = await page.evaluate(() => window.CYBER_DATA.updated);
  const metaText = await page.$eval("#site-meta", (el) => el.textContent);
  check("左上に最終更新日と作成者が出る", /^\d{4}-\d{2}-\d{2}$/.test(updated) && metaText === `最終更新日：${updated}　作成者　ま～君`, metaText);
  const bar = await page.evaluate(() => {
    const rect = (sel) => document.querySelector(sel).getBoundingClientRect();
    return {
      metaLeft: rect("#site-meta").left, langRight: rect(".lang-switch").right, barTop: rect(".top-bar").top,
      width: document.documentElement.clientWidth,
      labels: [...document.querySelectorAll(".lang-switch button")].map((b) => b.textContent),
      active: document.querySelector(".lang-switch button.active").textContent,
    };
  });
  check("帯はページの一番上にあり、作成者は左端、言語は右端",
    bar.barTop === 0 && bar.metaLeft < bar.width / 4 && bar.langRight > bar.width * 3 / 4);
  check("右上に「日本語」「English」があり、日本語が選択中", bar.labels.join(",") === "日本語,English" && bar.active === "日本語");

  // タブのアイコン（盾と南京錠）が指定されていて、ファイルを読み込める
  const icons = await page.evaluate(async () => {
    const hrefs = [...document.querySelectorAll('link[rel~="icon"], link[rel="apple-touch-icon"]')].map((l) => l.href);
    const ok = await Promise.all(hrefs.map((u) => fetch(u).then((r) => r.ok).catch(() => false)));
    return { names: hrefs.map((u) => u.split("/").pop()), ok };
  });
  check("タブのアイコンが読み込める", icons.names.includes("favicon.svg") && icons.ok.length === 3 && icons.ok.every(Boolean), icons.names.join(", "));

  const heroWidth = await page.$eval(".hero-visual img", (img) => (img.complete ? img.naturalWidth : 0));
  check("ヒーローの写真が表示される", heroWidth > 0, `幅 ${heroWidth}px`);
  check("ホームの文言（入口カードと案内）",
    (await hasText("知識（初級～専門）")) && (await hasText("初級から専門の問題から出題")) &&
    (await hasText("関連する資格一覧と受験方法と申し込みサイト")) && (await hasText("「資格一覧」で")));
  const quickText = await page.$eval(".quick-card", (el) => el.textContent);
  check("確認クイズに問題が出る（null 表示なし）", quickText.length > 0 && !quickText.includes("null"));
  await page.$eval(".quick-choice", (el) => el.click());
  await wait(200);
  check("確認クイズで回答すると正誤が出る", await hasText("正解"));
  await shot("01-home.png");

  // ---- レッスン ----
  await clickText("a", "レッスンで学ぶ");
  check("レッスン一覧（初級）", (await hash()) === "#/lessons/beginner" && (await count(".lesson-list li")) === data.beginnerLessons);
  await clickText(".tab", "中級");
  check("レッスン一覧を中級に切り替え", (await hash()) === "#/lessons/intermediate" && (await count(".lesson-list li")) === data.intermediateLessons);
  await open("#/lesson/B01");
  check("レッスン本文の表示", await hasText("情報セキュリティの3要素（CIA）"));

  // ---- レッスンのクイズ（キー操作：1で回答、Enterで次へ） ----
  await clickText("button", "このレッスンの問題を解く");
  check("レッスンのクイズ開始", (await hash()) === "#/quiz/run" && (await hasText(`全 ${data.b01} 問`)), `${data.b01} 問`);
  for (let i = 0; i < data.b01; i++) {
    await page.keyboard.press("Digit1");
    await wait(150);
    await page.keyboard.press("Enter");
    await wait(150);
  }
  check("キー操作で完走し結果が出る", (await hash()) === "#/quiz/result" && (await hasText(`${data.b01} 問中`)) && (await hasText("正答率")));

  // ---- クイズ設定（クリック操作で10問） ----
  await open("#/quiz");
  await clickText("label", "10 問");
  await clickText("button", "スタート");
  check("10問のクイズ開始", await hasText("全 10 問"));
  for (let i = 0; i < 10; i++) {
    await (await page.$(".choice:not([disabled])")).click();
    await wait(150);
    await clickText("button.btn.primary", i === 9 ? "結果を見る" : "次の問題へ");
  }
  check("クリック操作で10問完走", (await hash()) === "#/quiz/result" && (await hasText("10 問中")));
  await open("#/quiz");
  await clickText("label", "全問");
  await clickText("button", "スタート");
  await clickText("a", "やめる");
  check("途中終了で設定画面に戻る", (await hash()) === "#/quiz" && (await hasText("出題するレベル")));

  // ---- おすすめWebサイト ----
  await open("#/websites");
  check("おすすめサイトのグループ表示", (await count("#view h2")) === data.siteGroups, `${data.siteGroups} グループ`);

  // ---- 資格一覧 ----
  await open("#/certifications");
  const certNames = ["ITパスポート試験（IP）", "情報セキュリティマネジメント試験（SG）", "基本情報技術者試験（FE）",
    "情報処理安全確保支援士試験（SC）", "CompTIA Security+", "CISSP"];
  check("資格一覧に6資格が表示される",
    (await count("#view article")) === 6 && (await Promise.all(certNames.map(hasText))).every(Boolean));
  const stars = await page.$$eval("#view .difficulty", (els) => els.map((e) => e.textContent.replace("難易度：", "").length));
  check("難易度の☆（1,2,3,4,3,5 の順）", stars.join(",") === "1,2,3,4,3,5", stars.join(","));
  const heads = await page.$$eval("#view h4", (els) => els.map((e) => e.textContent));
  check("試験の基本情報・受験方法・申し込みの流れが6資格すべてにある",
    ["試験の基本情報", "受験方法", "申し込みの流れ"].every((t) => heads.filter((x) => x === t).length === 6));
  const spec = await page.$$eval("#view ul.spec li", (els) => els.map((e) => e.textContent));
  check("試験時間・問題数・合格ライン・受験手数料（4項目×6資格）",
    spec.length === 24 && ["試験時間", "問題数", "合格ライン", "受験手数料"].every((t) => spec.filter((x) => x.startsWith(t)).length === 6));
  // 2026-11-16 の内容確認で直した数字が、正しい値になっているか
  check("SG の問題数は60問", spec.includes("問題数：60問"));
  check("FE の問題数は科目A 60問・科目B 20問", spec.includes("問題数：科目A 60問、科目B 20問"));
  check("誤った記載（午後：記述式）が残っていない", !(await hasText("午後：記述式")));
  check("受験手数料に「公式サイトで確認」だけの項目が IPA の試験に残っていない",
    spec.filter((x) => x === "受験手数料：公式サイトで確認").length === 0);
  check("CBT方式の説明が表示される", await hasText("CBT方式とは"));
  const links = await page.$$eval("#view a.btn", (els) => els.map((a) => a.textContent));
  check("公式サイト6件・申込ページ1件", links.filter((t) => t === "公式サイト").length === 6 && links.filter((t) => t === "申込ページ").length === 1);
  check("外部リンクは新しいタブ（noopener）", await page.$$eval("#view a[target=_blank]", (els) => els.every((a) => a.rel.includes("noopener"))));
  await shot("02-certifications.png");

  // ---- その他 ----
  await open("#/nothing");
  check("存在しないページの表示", await hasText("ページが見つかりません"));

  await page.setViewport({ width: 390, height: 844 });
  for (const [label, h] of [["ホーム", ""], ["レッスン", "#/lesson/A01"], ["資格一覧", "#/certifications"]]) {
    await open(h);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    check(`スマホ幅で横スクロールなし（${label}）`, overflow <= 0, `はみ出し ${overflow}px`);
  }
  await shot("03-mobile.png", false);

  // ---- 英語版 ----
  await page.setViewport({ width: 1100, height: 800 });
  await open("#/certifications");
  await clickText(".lang-switch button", "English");
  await page.waitForFunction(() => document.documentElement.lang === "en" && document.querySelector("#view h1"));
  await wait(300);
  check("English を押すと英語になり、見ていた画面のまま切り替わる",
    (await hash()) === "#/certifications" && (await hasText("Certifications")) && (await page.title()) === "Cybersecurity Study");
  check("英語が選択中になる", (await page.$eval(".lang-switch button.active", (b) => b.textContent)) === "English");

  // 画面に日本語の文字が残っていないか（言語ボタンの「日本語」は除く）
  const japaneseLeft = () => page.evaluate(() => {
    const body = document.body.cloneNode(true);
    body.querySelectorAll(".lang-switch, script").forEach((el) => el.remove());
    const found = body.textContent.match(/[^\s]{0,12}[぀-ヿ一-鿿][^\s]{0,12}/);
    return found ? found[0] : "";
  });
  const openEn = async (h) => { await page.goto(SITE + "?lang=en" + h, { waitUntil: "load" }); await wait(250); };
  const leftovers = [];
  const scan = async (label) => { const found = await japaneseLeft(); if (found) leftovers.push(`${label}: ${found}`); };
  await scan("certifications");
  await openEn("");
  await page.$eval(".quick-choice", (el) => el.click());
  await wait(150);
  await scan("home");
  const metaEn = await page.$eval("#site-meta", (el) => el.textContent);
  check("英語版の左上の表示", metaEn === `Last updated: ${updated}　Created by Ma-kun`, metaEn);
  for (const h of ["#/lessons/beginner", "#/lessons/intermediate", "#/lessons/advanced", "#/lessons/expert", "#/lesson/B10", "#/lesson/A03", "#/lesson/E05", "#/websites", "#/quiz", "#/nothing"]) {
    await openEn(h);
    await scan(h);
  }
  // 英語でクイズを最後まで解く（わざと間違いも混ぜて、見直し欄も確かめる）
  await openEn("#/quiz");
  await clickText("label", "10 questions");
  await clickText("button", "Start");
  for (let i = 0; i < 10; i++) {
    await page.keyboard.press("Digit1");
    await wait(150);
    await scan(`quiz ${i + 1}`);
    await page.keyboard.press("Enter");
    await wait(150);
  }
  await scan("result");
  check("英語でクイズを完走できる", (await hash()) === "#/quiz/result" && (await hasText("of 10 correct")));
  check("英語版の画面に日本語が残っていない", leftovers.length === 0, leftovers.slice(0, 5).join(" | "));
  await page.setViewport({ width: 390, height: 844 });
  await openEn("#/certifications");
  const overflowEn = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  check("英語版もスマホ幅で横スクロールなし", overflowEn <= 0, `はみ出し ${overflowEn}px`);
  await shot("04-english-mobile.png", false);
  await page.setViewport({ width: 1100, height: 800 });
  await openEn("");
  await shot("05-english-home.png");
  // 日本語に戻す（選んだ言語は保存されるので、最後に戻しておく）
  await clickText(".lang-switch button", "日本語");
  await page.waitForFunction(() => document.documentElement.lang === "ja" && document.querySelector("#view h1"));
  await wait(300);
  check("日本語を押すと日本語に戻る", (await hasText("今日から始める")) && (await page.title()) === "サイバーセキュリティ学習");

  check("JavaScript エラーなし", errors.length === 0, errors.join(" | "));

  // ---- Google アナリティクス ----
  if (IS_LOCAL) {
    check("手元では Google アナリティクスに送信しない", gaRequests.length === 0, `${gaRequests.length} 件`);
    // gtag を差し替えて、画面の切り替えごとに送られる内容を確かめる
    const p2 = await browser.newPage();
    await p2.evaluateOnNewDocument(() => { window.__ga = []; window.gtag = (...args) => window.__ga.push(args); });
    await p2.goto(SITE, { waitUntil: "load" });
    await wait(200);
    for (const h of ["#/lessons/beginner", "#/quiz", "#/certifications"]) {
      await p2.evaluate((h) => { location.hash = h; }, h);
      await wait(200);
    }
    const sent = await p2.evaluate(() => window.__ga.filter((a) => a[1] === "page_view").map((a) => new URL(a[2].page_location).pathname));
    check("画面ごとに page_view が送られる", sent.join(" ") === "/ /lessons/beginner /quiz /certifications", sent.join(" "));
  } else {
    check("公開サイトでは Google アナリティクスへ送信される", gaRequests.length > 0, `${gaRequests.length} 件`);
  }

  // ブラウザの一時フォルダの削除に失敗することがあるが、テストの結果には関係ないので無視する
  await browser.close().catch(() => {});
  const failed = results.filter((ok) => !ok).length;
  console.log(`\n合計 ${results.length} 件、失敗 ${failed} 件`);
  process.exit(failed ? 1 : 0);
})().catch((e) => {
  console.error("テスト実行中のエラー:", e);
  process.exit(2);
});
