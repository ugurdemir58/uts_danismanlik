# Dese Consulting

Ürün Takip Sistemi (ÜTS) ve mevzuat danışmanlığı web sitesi — **Astro** ile statik site.

**Canlı site:** [www.deseconsulting.com](https://www.deseconsulting.com/)

## Özellikler

- Astro 5 (SSG, sıfır gereksiz JS)
- Content Collections ile duyuru / makale sayfaları
- CoSteps benzeri SSS makale düzeni (breadcrumb, içerik, yan panel)
- Responsive tasarım (mobil, tablet, masaüstü)
- Ana sayfa: hero, hizmetler, SSS accordion, duyurular, iletişim
- Mobil menü ve scroll reveal

## Geliştirme

```bash
npm install
npm run dev
```

Tarayıcıda: `http://localhost:4321`

Örnek SSS sayfası:

`/duyurular/sorumlu-teknik-eleman-ve-urun-guvenlilik-degerlendirme-hakkinda-sik-sorulan-sorular/`

## Build

```bash
npm run build
npm run preview
```

Çıktı: `dist/`

## Dosya Yapısı

```
uts_danismanlik/
├── src/
│   ├── components/     # Header, Footer, FaqAccordion
│   ├── content/        # Markdown duyurular (content collection)
│   ├── layouts/        # BaseLayout, SiteLayout
│   ├── pages/          # index + duyurular/[slug]
│   ├── scripts/        # Menü, SSS, form
│   └── styles/         # Global CSS (Dese design tokens)
├── public/CNAME
├── astro.config.mjs
└── package.json
```

Yeni duyuru eklemek için `src/content/duyurular/` altına Markdown dosyası koyun.

## Domain (GitHub Pages)

1. Repo **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **`gh-pages`** / folder: **`/` (root)**
4. Custom domain: `www.deseconsulting.com` (CNAME dosyası `public/CNAME` içinde)

### Cloudflare DNS (zorunlu)

Domain Cloudflare’de. Şu kayıtları ekleyin (Proxy **DNS only** / gri bulut önerilir, en azından ilk kurulumda):

| Tip | Ad | Değer |
|-----|-----|--------|
| CNAME | `www` | `ugurdemir58.github.io` |
| CNAME | `@` (isteğe bağlı) | `ugurdemir58.github.io` |

Apex (`@`) için Cloudflare “CNAME flattening” destekler. GitHub Pages A kayıtları da kullanılabilir.

Push sonrası Actions workflow `dist/` içeriğini `gh-pages` branch’ine yayınlar.

## Tasarım

Renk ve tipografi: `design-system/dese-consulting/MASTER.md` (Lexend + Source Sans 3, primary `#0B3A4F`, accent `#B45309`).

## UI/UX Pro Max Skill

Projeye [ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) dahil edildi:

`.cursor/skills/ui-ux-pro-max/`

Cursor Agent, UI/tasarım işlerinde bu skill’i kullanır. Arama scriptleri için **Python 3** gerekir.

```powershell
# Skill’i yeniden kurmak / güncellemek
npx ui-ux-pro-max-cli@latest init --ai cursor --force

# Örnek arama
python .cursor/skills/ui-ux-pro-max/scripts/search.py "consulting landing" --domain style
python .cursor/skills/ui-ux-pro-max/scripts/search.py "B2B regulatory consulting" --design-system -p "Dese Consulting" --stack astro
```
