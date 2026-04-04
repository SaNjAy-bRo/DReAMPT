import fs from 'fs';
const old = fs.readFileSync('legacy/style.css', 'utf8');
const theme = `@import "tailwindcss";
@theme {
  --font-heading: "Poppins", sans-serif;
  --font-body: "Noto Sans", sans-serif;
  --color-brand-ink: #101827;
  --color-brand-navy: #142234;
  --color-brand-slate: #4b5b72;
  --color-brand-line: #d7e0ea;
  --color-brand-mist: #f4f7fb;
  --color-brand-orange: #f26a21;
  --color-brand-green: #169c7d;
  --color-brand-blue: #2b6cb0;
  --shadow-soft: 0 20px 60px rgba(16, 24, 39, 0.08);
  --shadow-panel: 0 20px 50px rgba(20, 34, 52, 0.12);
}
`;
fs.writeFileSync('src/index.css', theme + old);
