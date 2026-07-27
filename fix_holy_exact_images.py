from pathlib import Path
p = Path('app.js')
s = p.read_text(encoding='utf-8')
repls = {
    'image: destinationImages.Varanasi': 'image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kashi_Vishwanath_temple.jpg"',
    'image: destinationImages.Ayodhya': 'image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ram_Mandir_Ayodhya_Dham.jpg"',
    'image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=900&q=80"': 'image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ajmer_Dargah_Main_Entrance.jpg"',
    'image: destinationImages.Amritsar': 'image: "https://commons.wikimedia.org/wiki/Special:FilePath/Golden_Temple,_Amritsar.jpg"',
    'image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=900&q=80"': 'image: "https://commons.wikimedia.org/wiki/Special:FilePath/Basilica_of_Bom_Jesus_(Goa).jpg"',
    'image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80"': 'image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mahabodhitemple.jpg"',
    'image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=900&q=80"': 'image: "https://commons.wikimedia.org/wiki/Special:FilePath/View_of_Palitana_temples.jpg"',
}
for old, new in repls.items():
    s = s.replace(old, new, 1)
p.write_text(s, encoding='utf-8')
