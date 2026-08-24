#!/usr/bin/env python3
"""
Assembles the app into a single self-contained HTML file for publishing as a
Claude Artifact (or anywhere else that needs one file with no external
requests): inlines src/styles.css, vendor/xlsx.mini.min.js, and src/app.js,
and swaps the logo's file path for a base64 data URI.

Usage:
    python3 scripts/build-artifact.py [output_path]

Notes:
- Uses vendor/xlsx.mini.min.js (not the full SheetJS build) deliberately.
  The full build embeds legacy codepage conversion tables that contain
  literal U+FFFD placeholder characters for undefined byte values - valid
  JS, but Claude Artifact's publisher rejects any file containing them.
  The app only ever parses UTF-8 CSV/XLSX, so the mini build (no codepage
  tables) has everything it needs.
- Strips the service-worker registration line; meaningless in a sandboxed
  single-page artifact.
- Whatever serves the output file MUST send a UTF-8 charset (e.g.
  `Content-Type: text/html; charset=utf-8`, or a `<meta charset="utf-8">`
  if the file keeps its own <head>). Without one, inline German text
  (a/o/u-umlaut, ß) gets misread and corrupts the inlined JS enough to
  break parsing. Claude's Artifact hosting sets this correctly; a bare
  `python3 -m http.server` typically does not, which is a trap when
  testing locally - use scripts/serve-utf8.py instead for local checks.
"""
import base64
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent

def build():
    app_js = (ROOT / "src/app.js").read_text(encoding="utf-8")
    styles_css = (ROOT / "src/styles.css").read_text(encoding="utf-8")
    xlsx_js = (ROOT / "vendor/xlsx.mini.min.js").read_text(encoding="utf-8")
    logo_bytes = (ROOT / "public/assets/dr-schumacher-logo.png").read_bytes()

    assert "�" not in xlsx_js, "vendor xlsx build contains U+FFFD - Artifact publish will reject it"

    logo_data_uri = "data:image/png;base64," + base64.b64encode(logo_bytes).decode("ascii")
    app_js = app_js.replace("public/assets/dr-schumacher-logo.png", logo_data_uri)
    app_js = app_js.replace(
        "if ('serviceWorker' in navigator) navigator.serviceWorker.register('service-worker.js').catch(() => {});",
        "",
    )

    html = f"""<title>Dr. Schumacher Produktberater</title>
<style>
{styles_css}
</style>
<div id="app"></div>
<script>
{xlsx_js}
</script>
<script>
{app_js}
</script>
"""
    assert "�" not in html
    return html

if __name__ == "__main__":
    out_path = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "dist" / "produktberater-artifact.html"
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(build(), encoding="utf-8")
    print(f"wrote {out_path} ({out_path.stat().st_size} bytes)")
