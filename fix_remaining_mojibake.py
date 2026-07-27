from pathlib import Path
# index footer copyright
p = Path('index.html')
s = p.read_text(encoding='utf-8')
s = s.replace('Â© 2026 RR Tourism, Mhow-Indore.', '&copy; 2026 RR Tourism, Mhow-Indore.')
p.write_text(s, encoding='utf-8')

p = Path('app.js')
s = p.read_text(encoding='utf-8')
for old, new in {
    '29Â°C': '29 C',
    '14Â°C': '14 C',
    '27Â°C': '27 C',
    '32Â°C': '32 C',
    '34Â°C': '34 C',
    '28Â°C': '28 C',
    '30Â°C': '30 C',
    '18Â°C': '18 C',
}.items():
    s = s.replace(old, new)
static_fn = '''
function setupStaticIcons() {
  document.querySelectorAll(".star-icons").forEach(el => {
    if (!el.innerHTML.trim()) el.innerHTML = iconSvg.star.repeat(5);
  });
}
'''
if 'function setupStaticIcons()' not in s:
    s = s.replace('function setupMediaFallbacks() {', static_fn + '\nfunction setupMediaFallbacks() {', 1)
s = s.replace('  setupMediaFallbacks();', '  setupStaticIcons();\n  setupMediaFallbacks();', 1)
p.write_text(s, encoding='utf-8')
