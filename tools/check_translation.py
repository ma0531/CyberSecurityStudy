"""英語版のデータ（data/en/）が、日本語版（data/）と同じ構造になっているかを確認するスクリプト。

使い方:
    python tools/check_translation.py              （data/ と data/en/ を比べる）
    python tools/check_translation.py <日本語のフォルダ> [英語のフォルダ]

確認する内容:
    - レッスン・問題の ID と並び順、問題の正解番号・選択肢の数・レッスンID
    - おすすめサイト・資格一覧の件数と URL、難易度
    - 英語版に日本語の文字が残っていないこと
問題を追加・修正したら、英語版も直してからこのスクリプトを実行する。
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LEVELS = ["beginner", "intermediate", "advanced"]

# ひらがな・カタカナ・漢字（英語版に残っていたら訳し漏れ）
JAPANESE = re.compile(r"[぀-ヿ一-鿿]")

errors = []


def load(path):
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def check(condition, message):
    if not condition:
        errors.append(message)


def check_no_japanese(value, where):
    """英語版の値の中に、日本語の文字が残っていないかを再帰的に調べる。"""
    if isinstance(value, str):
        check(not JAPANESE.search(value), f"{where}: 日本語が残っています → {value[:40]}")
    elif isinstance(value, list):
        for i, item in enumerate(value):
            check_no_japanese(item, f"{where}[{i}]")
    elif isinstance(value, dict):
        for key, item in value.items():
            check_no_japanese(item, f"{where}.{key}")


def main():
    ja_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "data"
    # 英語版の場所：第2引数 → <日本語のフォルダ>/en → data/en の順に探す（build_site.py と同じ）
    if len(sys.argv) > 2:
        en_dir = Path(sys.argv[2])
    elif (ja_dir / "en").is_dir():
        en_dir = ja_dir / "en"
    else:
        en_dir = ROOT / "data" / "en"

    for level in LEVELS:
        # --- レッスン ---
        ja = load(ja_dir / f"lessons_{level}.json")
        en = load(en_dir / f"lessons_{level}.json")
        check(en["level"] == ja["level"], f"lessons_{level}: level が違います")
        check([x["id"] for x in en["lessons"]] == [x["id"] for x in ja["lessons"]], f"lessons_{level}: ID の並びが違います")
        for j, e in zip(ja["lessons"], en["lessons"]):
            for key in ["content", "key_points", "keywords"]:
                check(len(e[key]) == len(j[key]), f"{j['id']}: {key} の件数が違います（日 {len(j[key])} / 英 {len(e[key])}）")
            check(e.get("reference_url") == j.get("reference_url"), f"{j['id']}: reference_url が違います")
            check(set(e) == set(j), f"{j['id']}: キーが違います")
        check_no_japanese(en, f"lessons_{level}")

        # --- 問題 ---
        ja = load(ja_dir / f"questions_{level}.json")
        en = load(en_dir / f"questions_{level}.json")
        check([x["id"] for x in en["questions"]] == [x["id"] for x in ja["questions"]], f"questions_{level}: ID の並びが違います")
        for j, e in zip(ja["questions"], en["questions"]):
            check(e["answer"] == j["answer"], f"{j['id']}: 正解の番号が違います（日 {j['answer']} / 英 {e['answer']}）")
            check(len(e["choices"]) == len(j["choices"]), f"{j['id']}: 選択肢の数が違います")
            check(e["lesson_id"] == j["lesson_id"], f"{j['id']}: lesson_id が違います")
            check(e["type"] == j["type"], f"{j['id']}: type が違います")
            check(len(set(e["choices"])) == len(e["choices"]), f"{j['id']}: 同じ選択肢が重複しています")
            check(set(e) == set(j), f"{j['id']}: キーが違います")
        check_no_japanese(en, f"questions_{level}")

    # --- おすすめサイト ---
    ja = load(ja_dir / "websites.json")
    en = load(en_dir / "websites.json")
    check(en["updated"] == ja["updated"], "websites: updated が違います")
    check(len(en["groups"]) == len(ja["groups"]), "websites: グループ数が違います")
    for j, e in zip(ja["groups"], en["groups"]):
        check([s["url"] for s in e["sites"]] == [s["url"] for s in j["sites"]], f"websites「{j['title']}」: URL の並びが違います")
    check_no_japanese(en, "websites")

    # --- 資格一覧 ---
    ja = load(ja_dir / "certifications.json")
    en = load(en_dir / "certifications.json")
    check(len(en["categories"]) == len(ja["categories"]), "certifications: 分類の数が違います")
    for jc, ec in zip(ja["categories"], en["categories"]):
        check(len(ec["items"]) == len(jc["items"]), f"certifications「{jc['name']}」: 資格の数が違います")
        for j, e in zip(jc["items"], ec["items"]):
            name = j["name"]
            check(e["difficulty"] == j["difficulty"], f"{name}: 難易度が違います")
            check(e["official_url"] == j["official_url"], f"{name}: official_url が違います")
            check(e.get("apply_url") == j.get("apply_url"), f"{name}: apply_url が違います")
            for key in ["spec", "exam_method", "how_to_apply"]:
                check(len(e[key]) == len(j[key]), f"{name}: {key} の件数が違います（日 {len(j[key])} / 英 {len(e[key])}）")
            check(set(e) == set(j), f"{name}: キーが違います")
    check_no_japanese(en, "certifications")

    if errors:
        print(f"NG: {len(errors)} 件の問題があります")
        for message in errors:
            print(" -", message)
        sys.exit(1)
    print("OK: 英語版のデータは、日本語版と同じ構造です")


if __name__ == "__main__":
    main()
