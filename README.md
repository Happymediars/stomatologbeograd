# Stomatolog Beograd – Next.js site

Ovaj projekat predstavlja početni kod za modernu web prezentaciju stomatološke ordinacije.  Građen je na **Next.js** (App Router) uz **TypeScript**, **Tailwind CSS** i jednostavni CMS baziran na **Decap CMS** (ranije Netlify CMS).  Cilj je da se lako održava kroz GitHub uz punu kontrolu nad SEO optimizacijom i strukturalnom migracijom starog sajta.

## Kako pokrenuti projekat lokalno

1. Instalirajte Node.js (preporučena verzija ≥ 18).  
2. Klonirajte repozitorijum i instalirajte zavisnosti:

   ```bash
   git clone https://github.com/your-username/stomatologbeograd.git
   cd stomatologbeograd
   npm install
   ```

3. Pokrenite razvojni server:

   ```bash
   npm run dev
   ```

   Server će biti dostupan na `http://localhost:3000`.

## Struktura projekta

```
stomatologbeograd/
├── app/            # App Router pages and layouts
│   ├── layout.tsx  # Global layout (header, footer)
│   ├── page.tsx    # Početna stranica
│   ├── [slug]/     # Dinamičke stranice iz markdown-a
│   └── usluge/     # Primer statičke stranice (učitava markdown)
├── content/
│   ├── pages/      # Markdown stranice za CMS
│   └── settings/   # JSON datoteke sa podešavanjima sajta
├── decap-cms/      # Konfiguracija za Decap CMS
├── lib/            # Helper funkcije za čitanje sadržaja
├── public/
│   └── uploads/    # Mesto gde CMS snima slike i fajlove
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── package.json
```

## Migracija URL-ova

U `next.config.js` se nalazi `async redirects()` funkcija koja služi za definisanje 301 redirekcija sa starih URL-ova na nove.  Za potpunu migraciju, potrebno je prikupiti listu svih trenutnih URL-ova starog sajta (`stomatologbeograd.info`) i mapirati ih na odgovarajuće nove rute.

Primer pravila:

```js
async redirects() {
  return [
    {
      source: '/protetika/',
      destination: '/protetika',
      permanent: true,
    },
    // Dodaj sva ostala pravila ovde
  ];
}
```

## CMS (Decap)

Decap CMS omogućava da uređujete stranice i postavke kroz jednostavan interfejs bez direktnog editovanja koda.  Da biste ga pokrenuli lokalno:

1. Napravite GitHub OAuth aplikaciju i podesite `repo` u `decap-cms/config.yml` na svoje korisničko ime i ime repozitorijuma.
2. Pokrenite aplikaciju (`npm run dev`) i idite na `/admin`.  Prijavite se GitHub nalogom.  
3. Uredićete markdown fajlove u `content/pages` i JSON u `content/settings` direktno kroz CMS.

## Dalje korake

- Dodajte više stranica u `content/pages` prema potrebama ordinacije.  Svaka .md datoteka postaje nova ruta (`/naziv-datoteke`).
- Popunite redirekcije u `next.config.js` kada budete imali CSV ili sitemap starog sajta.
- Uvedite multijezičnost korišćenjem `next-intl` ili slične biblioteke, pošto stari sajt ima srpsku, englesku i nemačku verziju.
- Unapredite UI koristeći komponentne biblioteke kao što su shadcn/ui ili vlastite Tailwind komponente.

Srećno i slobodno dopunite sadržaj, SEO meta podatke i strukturu po potrebama!
