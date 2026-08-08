# Dese Consulting

Ürün Takip Sistemi (ÜTS) ve mevzuat danışmanlığı web sitesi.

**Canlı site:** [www.deseconsulting.com](https://www.deseconsulting.com/)

## Özellikler

- Responsive tasarım (mobil, tablet, masaüstü)
- Ana sayfa hero bölümü
- Hakkımızda
- Danışmanlık hizmetleri (ÜTS kayıt, bildirim, STE, ÜGDR vb.)
- SSS (Sık Sorulan Sorular) — TİTCK mevzuatına dayalı
- Duyurular / haberler bölümü
- Referanslar
- İletişim formu
- Mobil menü

## Dosya Yapısı

```
uts_danismanlik/
├── index.html      # Ana sayfa
├── CNAME           # Özel domain (GitHub Pages)
├── css/
│   └── style.css   # Stiller
├── js/
│   └── main.js     # Etkileşimler (menü, SSS, form)
├── .cursor/
│   └── skills/
│       └── ui-ux-pro-max/   # UI/UX Pro Max design skill
└── README.md
```

## UI/UX Pro Max Skill

Projeye [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) skill'i eklendi (`.cursor/skills/ui-ux-pro-max/`).

Cursor Agent, UI/tasarım işlerinde bu skill'i kullanır. Arama scriptleri için **Python 3** gerekir.

```powershell
# Örnek arama (skill klasöründen)
python .cursor/skills/ui-ux-pro-max/scripts/search.py "consulting landing" --domain style
```

## Çalıştırma

`index.html` dosyasını tarayıcıda açın veya yerel sunucu kullanın:

```bash
npx serve .
```

## Domain (GitHub Pages)

1. Repoyu GitHub'a push edin
2. Settings → Pages → Source: `main` branch, `/ (root)`
3. Custom domain: `www.deseconsulting.com`
4. DNS'te şu kayıtları tanımlayın (domain sağlayıcınızda):

| Tip | Ad | Değer |
|-----|-----|--------|
| CNAME | www | `ugurdemir58.github.io` |
| A (isteğe bağlı apex) | @ | GitHub Pages IP'leri |

`CNAME` dosyası projede zaten `www.deseconsulting.com` olarak ayarlıdır.

## Özelleştirme

- **İletişim:** Telefon ve WhatsApp numaralarını `index.html` içinde güncelleyin
- **Renkler:** `css/style.css` içindeki `:root` değişkenleri
- **İstatistikler / duyurular:** Hero ve haber kartlarını kendi verilerinizle değiştirin
