with open(r'C:\Users\shank\.gemini\antigravity\brain\9d6ea62d-c293-4558-97cf-f8924a8fa545\scratch\index.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Let's search for "Praveen"
pos = js.find('Praveen')
print("Praveen pos:", pos, "Total length:", len(js))

# Let's slice from pos - 2000 to the end, or write it out to inspect
app_code = js[max(0, pos - 2000):]
with open(r'C:\Users\shank\.gemini\antigravity\brain\9d6ea62d-c293-4558-97cf-f8924a8fa545\scratch\app_code.js', 'w', encoding='utf-8') as f_out:
    f_out.write(app_code)

print("App code length:", len(app_code))

