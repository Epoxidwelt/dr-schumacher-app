#!/usr/bin/env python3
"""
Local dev server that sends a proper UTF-8 charset on text/html responses.

`python3 -m http.server` does not set a charset, which most browsers
tolerate for a normal page (the <meta charset> in <head> saves it) but NOT
for content built by scripts/build-artifact.py, which has no <head> at all
by design (it's meant to be dropped into Claude's Artifact wrapper, which
adds its own <head> with the right charset). Serving that file with this
script - or via the real Artifact publish - is what makes German text
(a/o/u-umlaut, sharp s) parse correctly; the bare stdlib server will not.

Usage:
    python3 scripts/serve-utf8.py [port]   # defaults to 8080, serves cwd
"""
import http.server
import socketserver
import sys

class Handler(http.server.SimpleHTTPRequestHandler):
    def send_header(self, keyword, value):
        if keyword == "Content-type" and value.startswith("text/html"):
            value = "text/html; charset=utf-8"
        super().send_header(keyword, value)

if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", port), Handler) as httpd:
        print(f"serving on http://localhost:{port} (UTF-8 charset forced)")
        httpd.serve_forever()
