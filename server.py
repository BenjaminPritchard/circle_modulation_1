#!/usr/bin/env python3
"""
Lightweight development HTTP server for Circle Modulation Studio
Run: python3 server.py [port]
"""

import http.server
import socketserver
import os
import sys
import webbrowser

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS and disable aggressive caching for local development
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

def run_server(port=PORT):
    for p in range(port, port + 10):
        try:
            with socketserver.TCPServer(("", p), Handler) as httpd:
                url = f"http://localhost:{p}/index.html"
                print(f"=======================================================")
                print(f"🎵 Circle Modulation Studio is running!")
                print(f"👉 Local URL: {url}")
                print(f"👉 File directory: {DIRECTORY}")
                print(f"Press Ctrl+C to stop.")
                print(f"=======================================================")
                return httpd.serve_forever()
        except OSError:
            print(f"Port {p} in use, trying {p + 1}...")
            continue

if __name__ == "__main__":
    try:
        run_server()
    except KeyboardInterrupt:
        print("\nServer stopped.")
