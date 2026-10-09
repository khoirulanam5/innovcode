/* =========================================================
   DARK MODE TOGGLE
   (Tema awal sudah diterapkan lebih dulu lewat inline script
   di <head> index.html agar tidak ada flash warna terang.
   Blok ini hanya menangani klik tombol toggle dan menyimpan
   preferensi pengguna.)
   ========================================================= */
const themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const root = document.documentElement;
    const isDark = root.getAttribute('data-theme') === 'dark';
    if (isDark) {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });
}

/* =========================================================
   PROYEK PORTOFOLIO
   - name   : nama aplikasi (singkatan / brand), tampil sebagai judul card
   - sub    : jenis aplikasi / metode, tampil di bawah nama
   - folder : folder gambar di /images, cover : nomor gambar untuk thumbnail
   - Terjemahan English ada di scripts/i18n.js (objek P), cocokkan lewat id
   ========================================================= */
const GH = 'https://github.com/khoirulanam5/';

const rawProjects = [
  { id: 39, name: 'InvenROP', sub: 'Inventory Bahan Baku · ROP & Safety Stock', folder: '39.rrfactory', cover: 1, repo: 'sistem-inventory-rop-safety-stock.git',
    desc: 'Aplikasi inventory berbasis web untuk mencatat barang masuk, barang keluar, dan stok bahan baku secara real-time. Memakai metode Reorder Point (ROP) dan Safety Stock agar sistem memberi tahu kapan bahan baku harus dipesan ulang, sehingga stok tidak kehabisan.' },
  { id: 38, name: 'SIMKIOS', sub: 'Monitoring Kios Pasar · Metode SAW', folder: '38.saw-kios', cover: 3, repo: 'monitoring-kios-pasar-saw.git',
    desc: 'Aplikasi monitoring kios pasar tradisional berbasis lokasi yang menampilkan status dan tingkat okupansi setiap kios secara real-time. Metode Simple Additive Weighting (SAW) dipakai untuk menentukan prioritas penanganan kios kosong berdasarkan aksesibilitas, lokasi, biaya sewa, dan okupansi.' },
  { id: 37, name: 'FurniFit', sub: 'Rekomendasi Furniture · Fuzzy & Knapsack', folder: '37.ristianjaya', cover: 7, repo: 'sistem-rekomendasi-furniture-fuzzy-knapsack.git',
    desc: 'Aplikasi rekomendasi kustomisasi furniture. Fuzzy Logic Mamdani menilai kecocokan dimensi dan harga, lalu algoritma Knapsack memilih kombinasi furniture terbaik sesuai luas ruangan dan anggaran. Hasilnya ditampilkan dalam visualisasi tata letak 3D.' },
  { id: 36, name: 'SPK-Restok', sub: 'Prioritas Restok Barang · Metode SAW', folder: '36.saw-stock', cover: 1, repo: 'spk-restok-saw-tokobangunan.git',
    desc: 'Sistem Pendukung Keputusan untuk toko bangunan dalam menentukan barang mana yang harus direstok lebih dulu. Metode SAW menilai jumlah stok, tingkat penjualan, harga, lead time, dan tingkat permintaan, sehingga pengendalian persediaan lebih objektif.' },
  { id: 35, name: 'PhoneRank', sub: 'SPK Smartphone Terbaik · Metode MAUT', folder: '35.spk-maut', cover: 2, repo: 'spk-maut.git',
    desc: 'Sistem Pendukung Keputusan untuk memilih smartphone terbaik dengan metode Multi Attribute Utility Theory (MAUT). Tersedia tiga peran pengguna (Owner, Admin, Customer), dan sistem menghasilkan perangkingan smartphone berdasarkan kriteria serta bobot yang ditentukan.' },
  { id: 34, name: 'SIM-Resto', sub: 'Manajemen Restoran · Stok FIFO', folder: '34.resto', cover: 1, repo: 'sim-resto.git',
    desc: 'Sistem informasi manajemen restoran yang mengelola alur pesanan dari kasir ke dapur dan mencatat transaksi penjualan. Stok bahan baku dikelola dengan metode First In First Out (FIFO) untuk mengurangi risiko bahan baku kedaluwarsa.' },
  { id: 33, name: 'HotelRec', sub: 'Rekomendasi Fasilitas Kamar · Apriori & FP-Growth', folder: '33.fpgrowth', cover: 1, repo: 'Hotel-Room-Facility-Recommendation-System-with-Apriori-and-FP-Growth.git',
    desc: 'Sistem rekomendasi fasilitas kamar hotel. Algoritma Apriori dan FP-Growth menggali pola asosiasi dari data transaksi tamu, sehingga pihak hotel tahu kombinasi fasilitas yang paling sering dipilih.' },
  { id: 32, name: 'SIKASIR', sub: 'Aplikasi Kasir & Penjualan', folder: '32.kasir', cover: 8, repo: 'kasir.git',
    desc: 'Aplikasi kasir berbasis web untuk mengelola transaksi penjualan, stok produk, dan data pelanggan, dengan laporan harian yang diperbarui secara real-time.' },
  { id: 31, name: 'SIPBAP', sub: 'Pengelolaan Bantuan Alat Pertanian', folder: '31.sipbap', cover: 1, repo: 'sipbap.git',
    desc: 'Sistem informasi untuk pengajuan dan pengelolaan bantuan alat pertanian. Memudahkan proses administrasi antara petani dan dinas terkait.' },
  { id: 30, name: 'SIBK', sub: 'Bimbingan Konseling Siswa', folder: '30.bk', cover: 1, repo: 'bimbingan-konseling.git',
    desc: 'Sistem manajemen bimbingan konseling sekolah untuk mencatat sesi konseling, menyusun laporan perkembangan siswa, dan memfasilitasi komunikasi antara guru BK dan siswa.' },
  { id: 29, name: 'E-BAP', sub: 'Berita Acara Pemeriksaan Digital · Imigrasi', folder: '29.bap', cover: 1, repo: 'bap-imigrasi.git',
    desc: 'Sistem pengelolaan berita acara pemeriksaan digital untuk kantor imigrasi. Dilengkapi tanda tangan digital dan arsip dokumen sehingga berkas lebih rapi dan mudah dicari.' },
  { id: 28, name: 'SIPELWA', sub: 'Pelayanan Warga Negara Asing', folder: '28.pelayanan', cover: 1, repo: 'pelayanan.git',
    desc: 'Sistem pelayanan warga negara asing berbasis web untuk mempermudah administrasi, pendataan, dan pemantauan status permohonan izin.' },
  { id: 27, name: 'E-UMKM', sub: 'Pengajuan & Verifikasi UMKM', folder: '27.umkm', cover: 1, repo: 'umkm.git',
    desc: 'Sistem pengajuan dan verifikasi UMKM secara online. Memudahkan registrasi, validasi data usaha, dan pelaporan kepada dinas terkait.' },
  { id: 26, name: 'WMS Gudang', sub: 'Manajemen Gudang & Inventori', folder: '26.warehouse', cover: 1, repo: 'warehouse.git',
    desc: 'Sistem manajemen gudang dengan pencatatan stok, penerimaan dan pengeluaran barang, serta laporan inventory berkala.' },
  { id: 25, name: 'E-Pengadaan', sub: 'Pengadaan Barang Terintegrasi', folder: '25.pengadaan', cover: 2, repo: 'pengadaan-barang.git',
    desc: 'Sistem pengadaan barang yang mengotomatisasi alur permintaan, persetujuan, pembelian, dan penerimaan barang dalam satu platform terintegrasi.' },
  { id: 24, name: 'PerpusQR', sub: 'E-Perpustakaan Berbasis QR Code', folder: '24.perpus-qr', cover: 9, repo: 'perpus-qr.git',
    desc: 'Perpustakaan digital dengan peminjaman buku lewat QR code, pencarian koleksi, manajemen anggota, dan notifikasi pengembalian otomatis.' },
  { id: 23, name: 'MenuOrder', sub: 'Pemesanan Makanan Online', folder: '23.ma', cover: 1, repo: 'menu-ordering.git',
    desc: 'Sistem pemesanan makanan berbasis web dengan menu interaktif, keranjang belanja, dan manajemen meja. Pesanan masuk ke dapur secara real-time.' },
  { id: 22, name: 'SIMOBAT', sub: 'Manajemen Stok Obat Apotek', folder: '22.stock-obat', cover: 2, repo: 'stock-obat.git',
    desc: 'Sistem manajemen stok obat apotek dengan notifikasi stok menipis, pemantauan tanggal kedaluwarsa, dan laporan penggunaan obat bulanan.' },
  { id: 21, name: 'InvenBan', sub: 'Inventori Toko Ban Motor', folder: '21.inventori-ban', cover: 5, repo: 'inventori-toko-ban.git',
    desc: 'Sistem inventori khusus toko ban motor dengan pengelolaan stok berdasarkan ukuran, merek, dan tipe ban, serta laporan penjualan harian.' },
  { id: 20, name: 'SPK-Prestasi', sub: 'Seleksi Siswa Berprestasi · Profile Matching', folder: '20.profile-match', cover: 9, repo: 'profile-match.git',
    desc: 'Sistem pendukung keputusan untuk menyeleksi siswa berprestasi dengan metode Profile Matching, menggunakan kriteria akademik dan non-akademik yang terukur.' },
  { id: 19, name: 'SIREMED', sub: 'Rekam Medis Elektronik', folder: '19.rm', cover: 8, repo: 'rekam-medis.git',
    desc: 'Rekam medis elektronik untuk klinik dan puskesmas, mencakup riwayat kunjungan pasien, resep digital, dan laporan statistik kesehatan.' },
  { id: 18, name: 'TopSiswa', sub: 'Penentuan Siswa Terbaik · Metode TOPSIS', folder: '18.topsis', cover: 6, repo: 'topsis.git',
    desc: 'Sistem pendukung keputusan untuk menentukan siswa terbaik dengan metode TOPSIS. Bobot setiap kriteria dapat diatur sendiri oleh admin.' },
  { id: 17, name: 'SIMTER', sub: 'Manajemen Terminal Bus', folder: '17.terminal', cover: 2, repo: 'manajemen-terminal.git',
    desc: 'Sistem manajemen terminal bus untuk mencatat kedatangan dan keberangkatan, data penumpang, dan retribusi, lengkap dengan laporan operasional terminal.' },
  { id: 16, name: 'SIMCATER', sub: 'Pemesanan & Manajemen Catering', folder: '16.catering', cover: 1, repo: 'manajemen-pemesanan-catering.git',
    desc: 'Sistem pemesanan dan manajemen catering dengan menu planner, jadwal pengiriman, invoice otomatis, dan pengelolaan bahan baku.' },
  { id: 15, name: 'RentCar', sub: 'Rental Mobil Online', folder: '15.rental', cover: 4, repo: 'rental-mobil.git',
    desc: 'Sistem rental mobil dengan manajemen armada, booking online, perhitungan biaya otomatis, dan laporan pendapatan berkala.' },
  { id: 14, name: 'SILUKA', sub: 'Sistem Informasi Klinik Terintegrasi', folder: '14.siluka', cover: 5, repo: 'siluka.git',
    desc: 'Sistem informasi klinik yang menyatukan pendaftaran pasien, antrian dokter, rekam medis, apotek, dan billing pasien secara digital.' },
  { id: 13, name: 'AquaShop', sub: 'Toko Online Aquarium', folder: '13.aquarium', cover: 8, repo: 'penjualan-aquarium.git',
    desc: 'Toko online aquarium dengan katalog produk, manajemen pesanan, stok ikan dan perlengkapan, serta laporan penjualan terintegrasi.' },
  { id: 12, name: 'E-Stunting', sub: 'Monitoring Stunting Balita', folder: '12.stunting', cover: 9, repo: 'sistem-monitoring-stunting.git',
    desc: 'Aplikasi monitoring pertumbuhan balita untuk deteksi dini stunting, dengan grafik perkembangan, peringatan risiko, dan laporan posyandu.' },
  { id: 11, name: 'SIAS-RS', sub: 'Inventaris Aset Non-Medis Rumah Sakit', folder: '11.inventaris', cover: 1, repo: 'inventaris-barang-non-medis-rs.git',
    desc: 'Sistem inventaris barang non-medis rumah sakit dengan QR code pada aset, mutasi barang antar departemen, dan laporan kondisi aset.' },
  { id: 10, name: 'SIKINERJA', sub: 'Penilaian KPI Karyawan', folder: '10.kpikinerja', cover: 10, repo: 'kpi-kinerja.git',
    desc: 'Sistem evaluasi KPI karyawan dengan indikator kinerja yang bisa disesuaikan, dashboard performa, dan laporan penilaian per periode.' },
  { id: 9, name: 'E-Maintenance', sub: 'Perawatan Kendaraan Operasional', folder: '9.maintenance', cover: 6, repo: 'Emaintenance.git',
    desc: 'Sistem manajemen perawatan kendaraan operasional dengan jadwal servis, riwayat perbaikan, biaya perawatan, dan pengingat servis rutin.' },
  { id: 8, name: 'E-Surat', sub: 'Persuratan & Disposisi Digital', folder: '8.surat', cover: 4, repo: 'persuratan.git',
    desc: 'Sistem persuratan digital untuk instansi pemerintah dan swasta, mencakup surat masuk dan keluar, disposisi, serta arsip dokumen yang tertata.' },
  { id: 7, name: 'E-Presensi', sub: 'Absensi Karyawan Berbasis QR Code', folder: '7.presensi', cover: 1, repo: 'presensi.git',
    desc: 'Aplikasi absensi karyawan berbasis web dengan QR code, rekap kehadiran otomatis, pengajuan izin dan cuti online, serta laporan bulanan.' },
  { id: 6, name: 'SIM-Inventori', sub: 'Inventori Barang Umum', folder: '6.inventori', cover: 2, repo: 'inventori.git',
    desc: 'Sistem manajemen inventori barang umum dengan pencatatan barang masuk dan keluar, peringatan stok minimum, laporan persediaan, dan manajemen supplier.' },
  { id: 5, name: 'TaStore', sub: 'Toko Online Busana Muslim', folder: '5.tasbiha', cover: 1, repo: 'penjualan_hijab.git',
    desc: 'Toko online busana muslim dengan katalog produk, keranjang belanja, manajemen pesanan dan pengiriman, serta laporan penjualan.' },
  { id: 4, name: 'SparepartKu', sub: 'Penjualan Sparepart Kendaraan', folder: '4.sparepart', cover: 5, repo: 'penjualan_sparepart.git',
    desc: 'Sistem penjualan sparepart kendaraan dengan stok per kategori, pencarian cepat, transaksi kasir, dan laporan stok harian.' },
  { id: 3, name: 'StokRoti', sub: 'Inventori Bahan Baku Roti · Metode FIFO', folder: '3.roti', cover: 1, repo: 'inventori-bahan-roti-fifo.git',
    desc: 'Sistem inventori bahan baku roti dengan metode FIFO agar bahan yang paling lama dipakai lebih dulu, dilengkapi peringatan kedaluwarsa.' },
  { id: 2, name: 'E-Tiket Bus', sub: 'Tiket & Penyewaan Bus Online', folder: '2.bus', cover: 6, repo: 'E-Tiket.git',
    desc: 'Platform pemesanan tiket dan penyewaan bus online dengan pilihan kursi interaktif, pembayaran digital, dan manajemen armada.' },
  { id: 1, name: 'E-Cuti', sub: 'Pengajuan Cuti Pegawai', folder: '1.cuti', cover: 1, repo: 'Sistem-Pengajuan-Cuti-Pegawai-Berbasis-Web.git',
    desc: 'Sistem pengajuan cuti pegawai digital dengan persetujuan berjenjang, kalender cuti tim, saldo cuti otomatis, dan notifikasi status.' }
];

const featuredProjects = rawProjects.map(p => ({
  id: p.id,
  name: p.name,
  sub: p.sub,
  desc: p.desc,
  img: `images/${p.folder}/${p.cover}.PNG`,
  github: GH + p.repo,
  images: Array.from({ length: 10 }, (_, i) => `images/${p.folder}/${i + 1}.PNG`)
}));

/* ── Testimonials data ── */
const testimonials = [
  { text: 'Dulu urusan surat-menyurat ribet banget, sekarang tinggal klik-klik aja langsung kelar. Beneran ngebantu banget buat kerjaan sehari-hari.', name: 'Pak Bambang', role: 'Staf Tata Usaha, Kantor Kecamatan' },
  { text: 'Selama proses bikin website kasirnya enak, tiap ada progres langsung ditunjukin. Sekarang kasir toko udah stabil, gampang dipakai anak-anak juga.', name: 'Ibu Sri Wahyuni', role: 'Pemilik Toko Kelontong' },
  { text: 'Fitur rekomendasi kamarnya lumayan bantu buat nentuin paket kamar mana yang paling laku. Jadi nggak asal tebak lagi.', name: 'Mas Dimas', role: 'Manajemen Hotel' },
  { text: 'Nyari data pasien lama sekarang cepet banget, tinggal ketik nama langsung ketemu. Antrian di depan juga jadi nggak numpuk kayak dulu.', name: 'dr. Anisa', role: 'Klinik Pratama' },
  { text: 'Absen pake QR code ini beneran ngebantu tim HR, dulu rekap manual sering salah hitung, sekarang udah otomatis.', name: 'Rina', role: 'HRD Pabrik' },
  { text: 'Timnya gercep, sering update progres duluan sebelum ditanya. Website sekolah jadi kelihatan lebih rapi pas dilihat wali murid.', name: 'Bu Endang', role: 'Tata Usaha Sekolah' },
  { text: 'Sekarang stok gudang bisa dipantau kapan aja, nggak perlu turun langsung buat ngecek. Selisih barang juga udah jarang kejadian.', name: 'Pak Yudi', role: 'Kepala Gudang' },
  { text: 'Awalnya takut ribet ngurus toko online sendiri, ternyata gampang dipakai. Kalau bingung juga ada panduannya, jadi nggak nanya-nanya terus.', name: 'Fitri', role: 'Owner Toko Online' },
  { text: 'Pengajuan cuti yang tadinya harus print kertas terus keliling ke atasan, sekarang tinggal ajukan online, disetujui juga cepet.', name: 'Andre', role: 'Staf Kepegawaian' },
  { text: 'Laporannya udah dalam bentuk grafik jadi enak dibaca, nggak perlu buka-buka excel lagi tiap mau ambil keputusan.', name: 'Pak Hendra', role: 'Operasional Perusahaan Jasa' },
  { text: 'Penilaian siswa berprestasi jadi lebih jelas dasarnya, orang tua juga bisa lihat sendiri prosesnya, jadi nggak ada yang komplain macem-macem.', name: 'Bu Wulandari', role: 'Wakil Kepala Sekolah' },
  { text: 'Order masuk langsung ke dapur, jadi nggak ada lagi salah catat pesanan kayak waktu masih pake nota manual.', name: 'Kang Asep', role: 'Pemilik Resto' },
  { text: 'Yang saya suka itu setelah website jadi pun masih dibantu kalau ada request tambahan fitur, nggak dilepas gitu aja.', name: 'Pak Rudi', role: 'Konsultan Usaha' },
  { text: 'Kader posyandu jadi kebantu banget buat catat data balita tiap bulan, nggak perlu lagi tulis manual di buku.', name: 'Bu Yuni', role: 'Kader Posyandu' },
  { text: 'Yang bikin tenang itu pengerjaannya tepat waktu sesuai janji di awal, nggak molor-molor kayak vendor sebelumnya.', name: 'Pak Wahyu', role: 'Manajer Proyek Kontraktor' }
];

/* =========================================================
   DOM REFERENCES
   ========================================================= */
const navbar       = document.getElementById('navbar');
const hamburger    = document.getElementById('hamburger');
const navLinks     = document.getElementById('nav-links');
const scrollTopBtn = document.getElementById('scroll-top');

/* =========================================================
   MOBILE NAV (overlay + toggle)
   ========================================================= */
const navOverlay = document.createElement('div');
navOverlay.id = 'nav-overlay';
document.body.appendChild(navOverlay);

function openNav() {
  navLinks.classList.add('open');
  hamburger.classList.add('active');
  hamburger.setAttribute('aria-expanded', 'true');
  navOverlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeNav() {
  navLinks.classList.remove('open');
  hamburger.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
  navOverlay.classList.remove('show');
  document.body.style.overflow = '';
}
function toggleNav() {
  navLinks.classList.contains('open') ? closeNav() : openNav();
}

hamburger.addEventListener('click', toggleNav);
navOverlay.addEventListener('click', closeNav);
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });
window.addEventListener('resize', () => { if (window.innerWidth > 992) closeNav(); });

/* =========================================================
   SCROLL REVEAL
   ========================================================= */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* Fallback: elemen .reveal yang terlewat observer tetap ditampilkan */
function revealFallbackSweep() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 200 && rect.bottom > -200) {
      el.classList.add('visible');
      revealObserver.unobserve(el);
    }
  });
}
setTimeout(revealFallbackSweep, 1500);
window.addEventListener('scroll', revealFallbackSweep, { passive: true });
window.addEventListener('resize', revealFallbackSweep);

/* =========================================================
   RENDER PORTFOLIO PREVIEW
   Card: thumbnail, nama aplikasi, jenis/metode, teknologi.
   ========================================================= */
const grid = document.getElementById('portfolio-grid');
if (grid) {
  featuredProjects.forEach((p, i) => {
    const col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-4';
    col.innerHTML = `
      <div class="pf-card reveal" style="transition-delay:${(i % 6) * 0.06}s" data-id="${p.id}">
        <div class="pf-thumb-wrap">
          <img class="pf-thumb" src="${p.img}" alt="${p.name}" loading="lazy"
               onerror="this.outerHTML='<div class=\\'pf-thumb-ph\\'><i class=\\'fas fa-diagram-project\\'></i></div>'">
        </div>
        <div class="pf-body">
          <div class="pf-title">${p.name}</div>
          <span class="pf-sub">${p.sub}</span>
          <span class="pf-link">Lihat Detail <i class="fas fa-arrow-up-right-from-square"></i></span>
        </div>
      </div>`;
    grid.appendChild(col);
    revealObserver.observe(col.querySelector('.reveal'));
    col.querySelector('.pf-card').addEventListener('click', () => openPfModal(p));
  });
  requestAnimationFrame(revealFallbackSweep);
}

/* =========================================================
   PORTFOLIO GALLERY MODAL + LIGHTBOX
   - Klik foto pada galeri membuka lightbox full layar.
   ========================================================= */
const pfModal   = document.getElementById('pf-modal');
const pfGallery = document.getElementById('pf-modal-gallery');
const pfTitle   = document.getElementById('pf-modal-title');
const pfSub     = document.getElementById('pf-modal-sub');
const pfDesc    = document.getElementById('pf-modal-desc');

const lightbox    = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lbClose     = document.getElementById('lb-close');

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  lightbox.classList.add('show');
  lightbox.setAttribute('aria-hidden', 'false');
}
function closeLightbox() {
  lightbox.classList.remove('show');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImg.src = '';
}
if (lbClose) lbClose.addEventListener('click', closeLightbox);
if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox && lightbox.classList.contains('show')) closeLightbox();
});

function openPfModal(project) {
  pfTitle.textContent = project.name;
  pfSub.textContent = project.sub;
  pfDesc.textContent = project.desc;

  pfGallery.innerHTML = '';
  project.images.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `${project.name} - tampilan ${i + 1}`;
    img.loading = 'lazy';
    img.onerror = () => { img.style.display = 'none'; };
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
    pfGallery.appendChild(img);
  });

  pfModal.classList.add('show');
  pfModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closePfModal() {
  pfModal.classList.remove('show');
  pfModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (pfModal) {
  pfModal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closePfModal));
  document.addEventListener('keydown', e => {
    if (!pfModal.classList.contains('show')) return;
    if (e.key === 'Escape') closePfModal();
  });
}

/* =========================================================
   NAVBAR SCROLL, ACTIVE LINK, SCROLL-TOP BUTTON
   ========================================================= */
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a[href^="#"]');
function activeMenu() {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 140) current = section.getAttribute('id');
  });
  links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + current));
}
window.addEventListener('scroll', () => {
  activeMenu();
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  scrollTopBtn.classList.toggle('show', window.scrollY > 400);
}, { passive: true });
activeMenu();

/* =========================================================
   HERO STAT COUNTERS
   ========================================================= */
const counters = document.querySelectorAll('.hnum');
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1200;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(progress * target) + (progress < 1 ? '' : suffix);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(tick);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(el => counterObserver.observe(el));

/* =========================================================
   TESTIMONIAL MARQUEE (jalan terus, tanpa titik)
   ========================================================= */
const testiTrack = document.getElementById('testi-track');
if (testiTrack) {
  const marquee = document.createElement('div');
  marquee.className = 'testi-marquee';

  const buildCard = (t, isClone) => {
    const card = document.createElement('div');
    card.className = 'testi-card';
    if (isClone) card.setAttribute('aria-hidden', 'true');
    card.innerHTML = `
      <i class="fas fa-quote-left"></i>
      <p>${t.text}</p>
      <div class="testi-who"><strong>${t.name}</strong><span>${t.role}</span></div>`;
    return card;
  };

  // dua set kartu agar putaran tidak terlihat putus
  testimonials.forEach(t => marquee.appendChild(buildCard(t, false)));
  testimonials.forEach(t => marquee.appendChild(buildCard(t, true)));
  testiTrack.appendChild(marquee);

  // Gerak via JavaScript (requestAnimationFrame) agar tetap jalan
  // walau pengguna mengaktifkan "kurangi animasi" di sistemnya.
  const SPEED = 50; // px per detik, ubah sesuai selera
  let pos = 0, last = performance.now(), paused = false, resumeTimer;

  const pause  = () => { paused = true; clearTimeout(resumeTimer); };
  const resume = (delay = 0) => { clearTimeout(resumeTimer); resumeTimer = setTimeout(() => { paused = false; }, delay); };

  testiTrack.addEventListener('mouseenter', pause);
  testiTrack.addEventListener('mouseleave', () => resume(0));
  testiTrack.addEventListener('touchstart', pause, { passive: true });
  testiTrack.addEventListener('touchend', () => resume(1500), { passive: true });

  function step(now) {
    const dt = Math.min((now - last) / 1000, 0.1);
    last = now;
    if (!paused) {
      const half = marquee.scrollWidth / 2;
      pos += SPEED * dt;
      if (pos >= half) pos -= half;
      marquee.style.transform = `translateX(${-pos}px)`;
    }
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* =========================================================
   FAQ ACCORDION
   ========================================================= */
document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-q');
  const answer = item.querySelector('.faq-a');
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      if (openItem !== item) {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-a').style.maxHeight = null;
      }
    });
    if (isOpen) {
      item.classList.remove('open');
      answer.style.maxHeight = null;
    } else {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

/* =========================================================
   WHATSAPP FLOATING WIDGET
   - Bubble hanya muncul saat ikon WhatsApp diklik.
   ========================================================= */
const waFloat = document.getElementById('wa-float');
const waBubble = document.getElementById('wa-bubble');
const waBubbleClose = document.getElementById('wa-bubble-close');
const waWidget = document.getElementById('wa-widget');

if (waFloat && waBubble && waBubbleClose && waWidget) {
  function toggleWaBubble() {
    const isShown = waBubble.classList.toggle('show');
    waBubble.setAttribute('aria-hidden', isShown ? 'false' : 'true');
  }
  function hideWaBubble() {
    waBubble.classList.remove('show');
    waBubble.setAttribute('aria-hidden', 'true');
  }

  waFloat.addEventListener('click', toggleWaBubble);
  waBubbleClose.addEventListener('click', (e) => {
    e.stopPropagation();
    hideWaBubble();
  });

  // klik di luar widget -> tutup bubble
  document.addEventListener('click', (e) => {
    if (!waWidget.contains(e.target)) hideWaBubble();
  });
}