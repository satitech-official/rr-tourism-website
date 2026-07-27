from pathlib import Path
p = Path('app.js')
s = p.read_text(encoding='utf-8')
s = s.replace('image: "https://images.unsplash.com/photo-1600100397608-f010a14112b9?auto=format&fit=crop&w=900&q=80"\n  }\n];\n\n\nconst internationalHolyPlaces', 'image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mahakaleshwar_Temple,_Ujjain.jpg"\n  }\n];\n\n\nconst internationalHolyPlaces', 1)
p.write_text(s, encoding='utf-8')
