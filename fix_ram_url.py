from pathlib import Path
p=Path('app.js')
s=p.read_text(encoding='utf-8')
s=s.replace('https://commons.wikimedia.org/wiki/Special:FilePath/Ram_Mandir_Ayodhya_Dham.jpg','https://commons.wikimedia.org/wiki/Special:FilePath/Ram_Janmbhoomi_Mandir,_Ayodhya_Dham.jpg')
p.write_text(s, encoding='utf-8')
