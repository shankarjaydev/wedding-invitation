import re

with open(r'C:\Users\shank\.gemini\antigravity\brain\9d6ea62d-c293-4558-97cf-f8924a8fa545\scratch\index.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Let's find string literals that contain wedding-related keywords
wedding_strings = re.findall(r'[`"\']([^`"\']{15,500})[`"\']', js)
print("Found strings:", len(wedding_strings))

with open(r'C:\Users\shank\.gemini\antigravity\brain\9d6ea62d-c293-4558-97cf-f8924a8fa545\scratch\extracted_strings.txt', 'w', encoding='utf-8') as out:
    for s in wedding_strings:
        if any(w in s.lower() for w in ['wedding', 'praveen', 'priyanka', 'hall', 'muhurtham', 'reception', 'invite', 'bless', 'rsvp', 'function', 'june', 'mandapam', 'google', 'maps', 'wa.me', 'audio', 'music']):
            out.write(s + '\n---\n')

print("Wrote extracted strings to scratch/extracted_strings.txt")

