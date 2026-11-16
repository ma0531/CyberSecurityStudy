"""学習データ（data/*.json）から、Web版が読み込む docs/data.js と docs/data.en.js を作るスクリプト。

使い方:
    python tools/build_site.py                              （data/ と data/en/ を読む）
    python tools/build_site.py <日本語のフォルダ>            （英語は <日本語のフォルダ>/en、無ければ data/en）
    python tools/build_site.py <日本語のフォルダ> <英語のフォルダ>

data/ の JSON を書き換えたあとに実行すると、Web版にも同じ内容が反映される。
実行した日が、サイトの左上に出る「最終更新日」になる。
data.js / data.en.js は自動生成されるファイルなので、直接編集しないこと。
"""

import datetime
import json
import sys
from pathlib import Path

# プロジェクトの場所（tools/ の一つ上）
ROOT = Path(__file__).resolve().parent.parent
DEFAULT_DATA_DIR = ROOT / "data"
DOCS_DIR = ROOT / "docs"

LEVELS = ["beginner", "intermediate", "advanced"]


def load_json(data_dir, filename):
    """データフォルダ内の JSON を UTF-8 で読み込んで返す。"""
    with open(data_dir / filename, encoding="utf-8") as f:
        return json.load(f)


def build(data_dir, out_path, updated):
    """1つの言語のデータをまとめて、out_path に書き出す。"""
    # Web版で使う形にまとめる（レッスン・問題はレベルごと、おすすめサイト・資格一覧は1つずつ）
    site = {
        "updated": updated,
        "lessons": {lv: load_json(data_dir, f"lessons_{lv}.json") for lv in LEVELS},
        "questions": {lv: load_json(data_dir, f"questions_{lv}.json")["questions"] for lv in LEVELS},
        "websites": load_json(data_dir, "websites.json"),
        "certifications": load_json(data_dir, "certifications.json"),
    }

    body = json.dumps(site, ensure_ascii=False, indent=1)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("// tools/build_site.py が data/ から自動生成しています。直接編集しないでください。\n")
        f.write("window.CYBER_DATA = " + body + ";\n")
    print(f"書き出しました: {out_path}")


def main():
    # 引数があればそのフォルダを、なければ data/ を読む
    ja_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_DATA_DIR
    if len(sys.argv) > 2:
        en_dir = Path(sys.argv[2])
    elif (ja_dir / "en").is_dir():
        en_dir = ja_dir / "en"
    else:
        en_dir = DEFAULT_DATA_DIR / "en"

    # サイトの左上に表示する最終更新日（このスクリプトを実行した日）
    updated = datetime.date.today().isoformat()

    DOCS_DIR.mkdir(exist_ok=True)
    build(ja_dir, DOCS_DIR / "data.js", updated)
    build(en_dir, DOCS_DIR / "data.en.js", updated)


if __name__ == "__main__":
    main()
