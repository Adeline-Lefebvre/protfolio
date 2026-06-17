# CV source

CV solaire (raccord portfolio), exporté en PDF vers `public/CV.pdf`.

## Régénérer le PDF

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=../public/CV.pdf \
  "file://$PWD/cv.html"
```

- Mise en page : 2 pages A4, `@page { margin: 0 }`.
- Polices : Fraunces (titres) + Inter (corps), via Google Fonts (connexion requise au rendu).
- Couleurs : crème `#FBF7F0`, terracotta `#BE5638`, vert sapin `#2F4A3C`.
- Photo : `public/profile-photo.jpg`.
