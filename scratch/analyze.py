import re
import json

with open(r'C:\Users\shank\.gemini\antigravity\brain\9d6ea62d-c293-4558-97cf-f8924a8fa545\scratch\index.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Find asset paths
assets = set(re.findall(r'["\'`](/[a-zA-Z0-9_\-\./]+\.(?:png|jpg|jpeg|svg|mp3|webp|gif))["\'`]', js))
print("Assets count:", len(assets))
for a in sorted(assets):
    print("Asset:", a)

# Search for v1
v1_matches = [m.start() for m in re.finditer(r'v1', js)]
print("v1 count:", len(v1_matches))
for pos in v1_matches[:5]:
    start = max(0, pos - 100)
    end = min(len(js), pos + 100)
    print("--- v1 snippet ---")
    print(js[start:end])

