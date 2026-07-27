from pathlib import Path
p = Path('index.html')
s = p.read_text(encoding='utf-8')
s = s.replace('<button class="slider-btn" id="prevReview" aria-label="Previous review">â€¹</button>', '<button class="slider-btn" id="prevReview" aria-label="Previous review"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18 9 12l6-6"/></svg></button>')
s = s.replace('<button class="slider-btn" id="nextReview" aria-label="Next review">â€º</button>', '<button class="slider-btn" id="nextReview" aria-label="Next review"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></button>')
s = s.replace('<span>â˜…â˜…â˜…â˜…â˜…</span>', '<span class="star-icons" aria-label="5 star rating"></span>')
s = s.replace('<button id="closeLightbox" aria-label="Close gallery preview">Ã—</button>', '<button id="closeLightbox" aria-label="Close gallery preview"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button>')
s = s.replace('<button class="modal-close" id="closeModal" aria-label="Close">x</button>', '<button class="modal-close" id="closeModal" aria-label="Close"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg></button>')
s = s.replace('<button class="to-top" id="toTop" aria-label="Scroll to top">â†‘</button>', '<button class="to-top" id="toTop" aria-label="Scroll to top"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg></button>')
insert = '''\n\n    <section class="section destinations section-page" id="international-holy">\n      <div class="section-heading reveal">\n        <p class="eyebrow">International Holy Trips</p>\n        <h2>Global spiritual destinations with RR Tourism.</h2>\n        <p>Plan international pilgrimage and spiritual journeys with flight assistance, hotel support, guided sightseeing, visa guidance and comfortable transfers.</p>\n      </div>\n      <div class="filter-bar reveal" id="internationalHolyFilters"></div>\n      <div class="destination-grid" id="internationalHolyGrid"></div>\n    </section>\n'''
if 'id="international-holy"' not in s:
    s = s.replace('\n\n    <section class="section planner section-page" id="planner">', insert + '\n    <section class="section planner section-page" id="planner">', 1)
p.write_text(s, encoding='utf-8')
