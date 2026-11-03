"""学習データ（data/*.json）から、Web版が読み込む docs/data.js を作るスクリプト。

使い方:
    python tools/build_site.py                  （data/ を読む）
    python tools/build_site.py <データフォルダ>  （別の場所のJSONを読む）

data/ の JSON を書き換えたあとに実行すると、Web版にも同じ内容が反映される。
data.js は自動生成されるファイルなので、直接編集しないこと。
"""

import json
import sys
from pathlib import Path

# プロジェクトの場所（tools/ の一つ上）
ROOT = Path(__file__).resolve().parent.parent
DEFAULT_DATA_DIR = ROOT / "data"
OUT_PATH = ROOT / "docs" / "data.js"

LEVELS = ["beginner", "intermediate", "advanced"]


def load_json(data_dir, filename):
    """データフォルダ内の JSON を UTF-8 で読み込んで返す。"""
    with open(data_dir / filename, encoding="utf-8") as f:
        return json.load(f)


def main():
    # 引数があればそのフォルダを、なければ data/ を読む
    data_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_DATA_DIR

    # Web版で使う形にまとめる（レッスン・問題はレベルごと、おすすめサイトは1つ）
    site = {
        "lessons": {lv: load_json(data_dir, f"lessons_{lv}.json") for lv in LEVELS},
        "questions": {lv: load_json(data_dir, f"questions_{lv}.json")["questions"] for lv in LEVELS},
        "websites": load_json(data_dir, "websites.json"),
        "certifications": load_json(data_dir, "certifications.json"),
    }

    OUT_PATH.parent.mkdir(exist_ok=True)
    body = json.dumps(site, ensure_ascii=False, indent=1)
    with open(OUT_PATH, "w", encoding="utf-8") as f:
        f.write("// tools/build_site.py が data/ から自動生成しています。直接編集しないでください。\n")
        f.write("window.CYBER_DATA = " + body + ";\n")

    print(f"書き出しました: {OUT_PATH}")


if __name__ == "__main__":
    main()
