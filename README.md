# KA InnovCode — Landing Page

Landing page satu halaman (single-page) untuk **KA InnovCode**, jasa pembuatan website & web app profesional yang berbasis di Jepara, Jawa Tengah.

Website ini dibangun murni dengan HTML, CSS, dan JavaScript (tanpa framework/build-tool), memakai Bootstrap 5 sebagai grid system dan Font Awesome untuk ikon.

## Struktur Proyek

```
.
├── index.html          # Struktur & konten seluruh halaman
├── styles/
│   └── main.css         # Semua styling kustom (di luar Bootstrap)
├── scripts/
│   └── main.js          # Semua interaksi & data (portofolio, testimoni, dll)
└── images/               # (tidak disertakan) aset screenshot tiap proyek portofolio
```

## Fitur Utama

- **Hero section** dengan animasi mengetik (typing effect) dan counter statistik yang berjalan saat elemen masuk ke viewport.
- **Navbar responsif** dengan menu mobile (hamburger + overlay).
- **Scroll reveal** — elemen muncul dengan animasi fade + slide saat discroll ke dalam viewport, menggunakan `IntersectionObserver`.
- **Section Portofolio** — grid proyek yang di-render otomatis dari array `featuredProjects` di `main.js`, lengkap dengan modal galeri (navigasi gambar, keyboard arrow, dan tombol GitHub).
- **Carousel testimoni otomatis** — auto-slide tiap 3.5 detik, bisa di-drag manual, dan berhenti sementara saat disentuh/di-hover.
- **FAQ accordion**.
- **Form kontak** terhubung ke Formspree, plus tombol WhatsApp mengambang.

## Cara Menjalankan

Karena tidak ada proses build, cukup buka `index.html` langsung di browser, atau jalankan local server sederhana agar path relatif (gambar, script) termuat dengan benar, misalnya:

```bash
# Python
python3 -m http.server 8000

# atau Node
npx serve .
```

Lalu akses `http://localhost:8000`.

## Riwayat Perbaikan (Bugfix Log)

### 1. Testimoni auto-slide menarik scroll halaman
**Gejala:** saat carousel testimoni auto-geser setiap ~3.5 detik, halaman ikut ter-scroll paksa ke section Testimoni meskipun pengguna sedang membaca section lain.

**Penyebab:** fungsi `goToTesti()` memakai `element.scrollIntoView({ block: 'nearest' })`. Opsi `block: 'nearest'` tetap bisa menggeser scroll **vertikal halaman**, bukan cuma scroll horizontal di dalam track, jika elemen target sedang berada di luar viewport.

**Perbaikan:** carousel sekarang digeser dengan menghitung offset horizontal card target lalu memanggil `testiTrack.scrollTo({ left, behavior: 'smooth' })` — hanya menggeser track testimoni itu sendiri, tidak pernah menyentuh scroll posisi halaman. Lihat `scripts/main.js` pada fungsi `goToTesti()`.

### 2. Card proyek terlalu mepet ke kiri di mode mobile
**Gejala:** di layar mobile, card di section Portofolio tampak menempel ke sisi kiri, bukan penuh/center seperti seharusnya.

**Penyebab:** wrapper tiap card hanya diberi class `col-md-6 col-lg-4` tanpa breakpoint dasar, sehingga lebar penuh di mobile bergantung sepenuhnya pada perilaku default Bootstrap yang bisa tidak konsisten jika CSS Bootstrap termuat belakangan/terhalang.

**Perbaikan:**
- `scripts/main.js`: wrapper card kini eksplisit diberi `col-12 col-md-6 col-lg-4` sehingga dijamin 100% lebar di layar kecil.
- `styles/main.css`: ditambahkan safety-net media query (`@media (max-width: 767.98px)`) yang memaksa `#portfolio-grid > div` selalu `width: 100%` dan gutter simetris, sebagai lapisan pengaman tambahan.

> Catatan: seluruh teks/konten yang sudah final (copy, testimoni, FAQ, dsb.) **tidak diubah** — perbaikan di atas murni pada logika JavaScript dan aturan CSS layout.

## Kontak

- WhatsApp: +62 823-2364-7641
- Email: khoirulanam592000@gmail.com
- GitHub: [github.com/khoirulanam5](https://github.com/khoirulanam5)