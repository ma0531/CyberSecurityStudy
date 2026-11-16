// docs/favicon.svg から、PNG のアイコンを作るスクリプト（ヘッドレスの Edge で描画して保存する）。
//   favicon.png          … 64×64、背景は透明（SVG のアイコンに対応していない環境用）
//   apple-touch-icon.png … 180×180、背景は薄い緑（スマホのホーム画面用）
// 使い方（このフォルダで）: node make_favicon.js
const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");

const DOCS = path.join(__dirname, "..", "..", "docs");
const EDGE = process.env.EDGE_PATH || "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";

(async () => {
  const svg = fs.readFileSync(path.join(DOCS, "favicon.svg"), "utf8");
  const dataUrl = "data:image/svg+xml;base64," + Buffer.from(svg).toString("base64");
  const browser = await puppeteer.launch({ executablePath: EDGE, headless: true, args: ["--no-sandbox"] });
  const page = await browser.newPage();

  // [ファイル名, 一辺の大きさ, 背景色, 余白]
  const targets = [
    ["favicon.png", 64, "transparent", 0],
    ["apple-touch-icon.png", 180, "#e6f1ec", 22],
  ];
  for (const [name, size, background, padding] of targets) {
    await page.setViewport({ width: size, height: size });
    await page.setContent(
      `<body style="margin:0;background:${background}"><img src="${dataUrl}" style="display:block;box-sizing:border-box;width:${size}px;height:${size}px;padding:${padding}px"></body>`
    );
    await page.screenshot({ path: path.join(DOCS, name), omitBackground: background === "transparent" });
    console.log("書き出しました:", name);
  }
  await browser.close().catch(() => {});
})();
