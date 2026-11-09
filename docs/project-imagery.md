# Project imagery

Asele, Reframe and TeachEasy WebP assets in `public/images/projects` were copied without modification from the owner's portfolio, https://github.com/kenoyek/kenoye-portfolio, commit `1b7955e3562fdaaf95c7739190bb50d8bf060c04`.

The selection follows `src/content/projectExperiences.ts` in that repository: three Asele native mobile views, two Reframe native/public web views, and three TeachEasy public website views. TeachEasy imagery depicts the public product website, not a private academy dashboard. Labels preserve the distinction between mobile app screens and public web captures.

`app/data/project-experiences.ts` contains the view descriptions and asset paths. `ProjectShowcase.tsx` renders keyboard-accessible view selection and phone/browser frames. 1Vet uses live public website captures documented below.

## 1Vet live captures

The two JPEGs in `public/images/projects/1vet` were captured directly from https://1vet.store/ on 2026-11-09 using Chromium: desktop at 1440 × 1000 and mobile web at 390 × 1100, device scale 1, JPEG quality 88. Images show the public homepage after its loading state completed; they are not private application dashboards or native app screens. Frames are rendered in CSS, retaining the complete captured image proportions.

The cloud policy blocked the public site's external Google Fonts request, payment script and online-vet counter request during capture. The homepage's own layout and photographic assets loaded; screenshots use its fallback fonts. No authentication, payment, or contact actions were performed.
