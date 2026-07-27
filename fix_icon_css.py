from pathlib import Path
p = Path('styles.css')
s = p.read_text(encoding='utf-8')
add = '''
.lightbox button svg,
.modal-close svg,
.to-top svg,
.slider-btn svg {
  width: 24px;
  height: 24px;
  display: block;
  margin: auto;
  fill: none;
  stroke: currentColor;
  stroke-width: 2.6;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.lightbox button,
.modal-close,
.to-top,
.slider-btn {
  display: grid;
  place-items: center;
  line-height: 1;
}
.to-top {
  background: linear-gradient(135deg, var(--royal), #174bd6);
  color: white;
}
.to-top:hover,
.lightbox button:hover,
.modal-close:hover,
.slider-btn:hover {
  transform: translateY(-3px);
}
.star-icons {
  display: inline-flex;
  gap: 2px;
  vertical-align: -2px;
  color: #f5a400;
}
.star-icons svg {
  width: 15px;
  height: 15px;
  fill: currentColor;
  stroke: none;
}
.service-icon svg {
  width: 24px;
  height: 24px;
  fill: currentColor;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}
'''
if '.star-icons {' not in s:
    s += '\n' + add
p.write_text(s, encoding='utf-8')
