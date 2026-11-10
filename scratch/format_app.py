with open(r'C:\Users\shank\.gemini\antigravity\brain\9d6ea62d-c293-4558-97cf-f8924a8fa545\scratch\app_code.js', 'r', encoding='utf-8') as f:
    code = f.read()

try:
    import jsbeautifier
    beautified = jsbeautifier.beautify(code)
except Exception:
    lines = code.replace(';', ';\n').replace('{', '{\n').replace('}', '\n}\n')
    beautified = lines

with open(r'C:\Users\shank\.gemini\antigravity\brain\9d6ea62d-c293-4558-97cf-f8924a8fa545\scratch\beautified_app.js', 'w', encoding='utf-8') as fb:
    fb.write(beautified)
print("Formatted successfully!")
