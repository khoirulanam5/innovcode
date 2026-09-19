# KA InnovCode — Company Profile

**KA InnovCode**, jasa pembuatan website & web app profesional yang berbasis di Jepara, Jawa Tengah.

Website ini dibangun murni dengan HTML, CSS, dan JavaScript (tanpa framework/build-tool), memakai Bootstrap 5 sebagai grid system dan Font Awesome untuk ikon.

## Struktur Proyek

```
.
├── index.html          # Struktur & konten seluruh halaman
├── styles/
│   └── main.css         # Semua styling kustom (di luar Bootstrap), termasuk dark mode
├── scripts/
│   └── main.js          # Semua interaksi & data (portofolio, testimoni, dark mode, dll)
└── images/               # (tidak disertakan) aset screenshot tiap proyek portofolio
```

## Fitur Utama

- **Hero section** dengan animasi mengetik (typing effect) dan counter statistik yang berjalan saat elemen masuk ke viewport.
- **Navbar responsif** dengan menu mobile (hamburger + overlay).
- **Dark mode** — tombol matahari/bulan di navbar untuk beralih antara tema terang dan gelap.
- **Scroll reveal** — elemen muncul dengan animasi fade + slide saat discroll ke dalam viewport, menggunakan `IntersectionObserver`.
- **Section Portofolio** — grid proyek yang di-render otomatis dari array `featuredProjects` di `main.js`, lengkap dengan modal detail proyek berisi judul, deskripsi, dan seluruh foto proyek.
- **Lightbox foto** — klik salah satu foto di dalam modal detail proyek untuk melihatnya dalam mode full layar.
- **Carousel testimoni otomatis** — auto-slide tiap 3.5 detik, bisa di-drag manual, dan berhenti sementara saat disentuh/di-hover.
- **FAQ accordion**.
- **Widget WhatsApp mengambang** — bubble info hanya muncul saat ikon WhatsApp diklik (tidak auto-popup).
- **Form kontak** terhubung ke Formspree.

## Dark Mode

Tombol toggle (ikon bulan/matahari) berada di navbar, di antara menu navigasi dan tombol hamburger.

- **Deteksi otomatis:** saat pertama kali dibuka, situs mengikuti preferensi sistem operasi/browser pengunjung (`prefers-color-scheme`).
- **Diingat per-pengunjung:** begitu pengunjung menekan tombol toggle, pilihannya (terang/gelap) disimpan di `localStorage` browser mereka dan akan otomatis diterapkan lagi di kunjungan berikutnya.
- **Tanpa "flash" putih:** tema diterapkan lewat inline script kecil di `<head>` `index.html`, sebelum CSS/JS lain dimuat, sehingga tidak ada kedipan warna terang sesaat sebelum berubah ke gelap saat halaman pertama kali dibuka dalam mode gelap.
- **Implementasi teknis:** seluruh warna di `styles/main.css` memakai CSS variable (`--bg`, `--ink`, `--line`, dll di dalam `:root`). Saat mode gelap aktif, atribut `data-theme="dark"` ditambahkan ke elemen `<html>`, yang memicu selector `:root[data-theme="dark"]` untuk menimpa variable-variable tersebut dengan palet gelap — jadi seluruh section otomatis mengikuti tanpa perlu class terpisah di tiap elemen.

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

### 3. Modal detail proyek gagal terbuka dengan benar
**Gejala:** saat card portofolio diklik untuk "Lihat Detail", modal tidak menampilkan galeri foto sebagaimana mestinya, dan klik foto tidak bisa dilihat dalam mode full layar.

**Penyebab:** fungsi `openPfModal()` mereferensikan elemen `#pf-modal-github` (tombol GitHub) yang sudah tidak ada di markup `index.html`, sehingga `pfGithub.href = ...` melempar error dan menghentikan eksekusi fungsi sebelum galeri foto sempat dirender. Selain itu, foto-foto di galeri modal belum punya event listener untuk membuka lightbox.

**Perbaikan:**
- Referensi ke `#pf-modal-github` dihapus dari `openPfModal()`.
- Setiap `<img>` di galeri modal kini diberi `addEventListener('click', ...)` yang memanggil `openLightbox()`, sehingga foto bisa dibuka full layar melalui elemen `#lightbox` yang sudah tersedia di `index.html`.

### 4. Bubble WhatsApp otomatis muncul saat halaman dibuka
**Gejala:** popup info WhatsApp ("Online Sekarang / Ada yang bisa kami bantu?") langsung muncul sendiri ~3 detik setelah halaman dimuat, padahal seharusnya hanya muncul saat ikon WhatsApp diklik oleh pengguna.

**Penyebab:** ada `setTimeout(() => { waBubble.classList.add('show'); ... }, 3000)` di bagian WHATSAPP FLOATING WIDGET pada `main.js` yang memaksa bubble tampil otomatis.

**Perbaikan:** `setTimeout` auto-show tersebut dihapus. Bubble sekarang murni dikontrol lewat `toggleWaBubble()`, yang hanya terpanggil saat tombol `#wa-float` diklik.

### 5. Pembaruan teks testimoni
**Perubahan:** kalimat testimoni dan nama pengirim pada array `testimonials` (`main.js`) diperbarui agar terdengar lebih natural dan tidak terkesan digenerate AI — bahasa dibuat lebih santai/sehari-hari, dan nama pengirim diganti dari sekadar jabatan generik (mis. "Kepala Bagian Umum") menjadi nama orang yang lebih manusiawi lengkap dengan peran singkatnya.

### 6. Penambahan dark mode
**Perubahan:** ditambahkan tombol toggle tema terang/gelap di navbar. Seluruh warna situs kini memakai CSS variable di `:root`, dan palet gelap didefinisikan lewat selector `:root[data-theme="dark"]` di `styles/main.css`. Pilihan tema pengunjung disimpan di `localStorage` dan diterapkan otomatis di kunjungan berikutnya; jika belum pernah memilih, situs mengikuti preferensi sistem (`prefers-color-scheme`).

### 7. Perbaikan jarak tombol dark mode di navbar
**Gejala:** setelah tombol toggle dark mode ditambahkan, jaraknya terhadap menu navigasi (Home, Layanan, dst.) terlalu jauh — terdorong ke ujung kanan navbar oleh `justify-content: space-between`.

**Penyebab:** `.nav-inner` memakai `justify-content: space-between` dengan tiga elemen (logo, menu, toggle), sehingga toggle selalu didorong ke ujung, bukan menempel ke menu.

**Perbaikan:** `.nav-inner` diubah menjadi `justify-content: flex-start`, menu (`.nav-links`) didorong ke kanan lewat `margin-left: auto`, dan tombol toggle diberi jarak kecil (`margin-left: .5rem`) agar menempel rapi setelah menu. Untuk tampilan mobile (hamburger), layout dikembalikan ke `space-between` seperti semula.

> Catatan: perbaikan pada nomor 1–4 murni pada logika JavaScript (dan sebagian CSS untuk nomor 2) — tidak mengubah copy/konten yang sudah final. Perbaikan nomor 5 murni perubahan teks pada section Testimoni saja. Nomor 6 adalah fitur baru (dark mode), dan nomor 7 adalah perbaikan tata letak navbar setelahnya.

## Kontak

- WhatsApp: +62 823-2364-7641
- Email: khoirulanam592000@gmail.com
- GitHub: [github.com/khoirulanam5](https://github.com/khoirulanam5)