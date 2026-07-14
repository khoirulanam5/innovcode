/* =========================================================
   PROYEK
   ========================================================= */
const featuredProjects = [
  { id: 33, title: 'Aplikasi Rekomendasi Kamar Hotel', stack: ['CodeIgniter 3','MySQL','Bootstrap'], img: 'images/33.fpgrowth/1.PNG', github: 'https://github.com/khoirulanam5/Hotel-Room-Facility-Recommendation-System-with-Apriori-and-FP-Growth.git', desc: 'Sistem rekomendasi fasilitas kamar hotel menggunakan algoritma Apriori dan FP-Growth untuk menemukan pola asosiasi dari data transaksi tamu secara efisien.', images: Array.from({ length: 10 }, (_, i) => `images/33.fpgrowth/${i + 1}.PNG`) },
  { id: 32, title: 'Aplikasi Manajemen Kasir', stack: ['CodeIgniter 3','MySQL','Bootstrap'], img: 'images/32.kasir/8.PNG', github: 'https://github.com/khoirulanam5/kasir.git', desc: 'Aplikasi kasir berbasis web untuk manajemen transaksi penjualan, stok produk, laporan harian, dan pengelolaan data pelanggan secara real-time.', images: Array.from({ length: 10 }, (_, i) => `images/32.kasir/${i + 1}.PNG`) },
  { id: 31, title: 'Aplikasi Bantuan Alat Pertanian', stack: ['CodeIgniter 3','MySQL','Bootstrap'], img: 'images/31.sipbap/1.PNG', github: 'https://github.com/khoirulanam5/sipbap.git', desc: 'Sistem informasi pengajuan dan pengelolaan bantuan alat pertanian untuk memfasilitasi proses administrasi antara petani dan dinas terkait.', images: Array.from({ length: 10 }, (_, i) => `images/31.sipbap/${i + 1}.PNG`) },
  { id: 30, title: 'Aplikasi Bimbingan Konseling', stack: ['Laravel 12','MySQL','Bootstrap'], img: 'images/30.bk/1.PNG', github: 'https://github.com/khoirulanam5/bimbingan-konseling.git', desc: 'Sistem manajemen bimbingan konseling siswa yang memfasilitasi pencatatan sesi konseling, laporan perkembangan, dan komunikasi antara guru BK dan siswa.', images: Array.from({ length: 10 }, (_, i) => `images/30.bk/${i + 1}.PNG`) },
  { id: 29, title: 'Aplikasi Berita Acara', stack: ['CodeIgniter 3','MySQL','Bootstrap'], img: 'images/29.bap/1.PNG', github: 'https://github.com/khoirulanam5/bap-imigrasi.git', desc: 'Sistem pengelolaan berita acara pemeriksaan digital untuk kantor imigrasi, dilengkapi fitur tanda tangan digital dan arsip dokumen.', images: Array.from({ length: 10 }, (_, i) => `images/29.bap/${i + 1}.PNG`) },
  { id: 28, title: 'Aplikasi Pelayanan WNA', stack: ['CodeIgniter 3','MySQL','Bootstrap'], img: 'images/28.pelayanan/1.PNG', github: 'https://github.com/khoirulanam5/pelayanan.git', desc: 'Sistem pelayanan warga negara asing berbasis web untuk mempermudah proses administrasi, pendataan, dan monitoring status permohonan izin.', images: Array.from({ length: 10 }, (_, i) => `images/28.pelayanan/${i + 1}.PNG`) },
  { id: 27, title: 'Aplikasi Pengajuan UMKM', stack: ['PHP','MySQL','Bootstrap'], img: 'images/27.umkm/1.PNG', github: 'https://github.com/khoirulanam5/umkm.git', desc: 'Sistem pengajuan dan verifikasi UMKM online untuk memudahkan proses registrasi, validasi data usaha, dan pelaporan kepada dinas terkait.', images: Array.from({ length: 10 }, (_, i) => `images/27.umkm/${i + 1}.PNG`) },
  { id: 26, title: 'Aplikasi Warehouse Inventori', stack: ['Laravel 12','MySQL','Bootstrap'], img: 'images/26.warehouse/1.PNG', github: 'https://github.com/khoirulanam5/warehouse.git', desc: 'Sistem manajemen gudang komprehensif dengan fitur pencatatan stok, penerimaan dan pengeluaran barang, serta laporan inventory secara periodik.', images: Array.from({ length: 10 }, (_, i) => `images/26.warehouse/${i + 1}.PNG`) },
  { id: 25, title: 'Aplikasi Pengadaan Barang', stack: ['CodeIgniter 3','MySQL','Bootstrap'], img: 'images/25.pengadaan/2.PNG', github: 'https://github.com/khoirulanam5/pengadaan-barang.git', desc: 'Sistem pengadaan barang yang mengotomatisasi proses permintaan, persetujuan, pembelian, dan penerimaan barang dalam satu platform terintegrasi.', images: Array.from({ length: 10 }, (_, i) => `images/25.pengadaan/${i + 1}.PNG`) },
  { id: 24, title: 'Aplikasi E-Perpustakaan', stack: ['CodeIgniter 4','MySQL','Bootstrap'], img: 'images/24.perpus-qr/9.PNG', github: 'https://github.com/khoirulanam5/perpus-qr.git', desc: 'Perpustakaan digital dengan fitur QR code untuk peminjaman buku, pencarian koleksi, manajemen anggota, dan notifikasi pengembalian otomatis.', images: Array.from({ length: 10 }, (_, i) => `images/24.perpus-qr/${i + 1}.PNG`) },
  { id: 23, title: 'Aplikasi Order Makanan', stack: ['CodeIgniter 3','MySQL','Bootstrap'], img: 'images/23.ma/1.PNG', github: 'https://github.com/khoirulanam5/menu-ordering.git', desc: 'Sistem pemesanan makanan berbasis web dengan tampilan menu interaktif, keranjang belanja, manajemen meja, dan dapur order real-time.', images: Array.from({ length: 10 }, (_, i) => `images/23.ma/${i + 1}.PNG`) },
  { id: 22, title: 'Aplikasi Stok Obat', stack: ['PHP','MySQL','Bootstrap'], img: 'images/22.stock-obat/2.PNG', github: 'https://github.com/khoirulanam5/stock-obat.git', desc: 'Sistem manajemen stok obat apotek dengan fitur notifikasi stok menipis, expired date monitoring, dan laporan penggunaan obat bulanan.', images: Array.from({ length: 10 }, (_, i) => `images/22.stock-obat/${i + 1}.PNG`) },
  { id: 21, title: 'Inventori Toko Ban Motor', stack: ['CodeIgniter 3','MySQL','Bootstrap'], img: 'images/21.inventori-ban/5.PNG', github: 'https://github.com/khoirulanam5/inventori-toko-ban.git', desc: 'Sistem inventori khusus toko ban motor dengan manajemen stok berdasarkan ukuran, merk, dan tipe ban, serta laporan penjualan harian.', images: Array.from({ length: 10 }, (_, i) => `images/21.inventori-ban/${i + 1}.PNG`) },
  { id: 20, title: 'Seleksi Siswa Berprestasi', stack: ['CodeIgniter 3','MySQL','Bootstrap'], img: 'images/20.profile-match/9.PNG', github: 'https://github.com/khoirulanam5/profile-match.git', desc: 'Sistem pendukung keputusan seleksi siswa berprestasi menggunakan metode Profile Matching dengan kriteria akademik dan non-akademik terukur.', images: Array.from({ length: 10 }, (_, i) => `images/20.profile-match/${i + 1}.PNG`) },
  { id: 19, title: 'Aplikasi Rekam Medis', stack: ['CodeIgniter 3','MySQL','Bootstrap'], img: 'images/19.rm/8.PNG', github: 'https://github.com/khoirulanam5/rekam-medis.git', desc: 'Sistem rekam medis elektronik untuk klinik dan puskesmas dengan fitur riwayat kunjungan, resep digital, dan laporan statistik kesehatan.', images: Array.from({ length: 10 }, (_, i) => `images/19.rm/${i + 1}.PNG`) },
  { id: 18, title: 'Aplikasi Menentukan Siswa Terbaik', stack: ['CodeIgniter 3','MySQL','Bootstrap'], img: 'images/18.topsis/6.PNG', github: 'https://github.com/khoirulanam5/topsis.git', desc: 'Sistem pendukung keputusan penentuan siswa terbaik menggunakan metode TOPSIS dengan bobot kriteria yang dapat dikonfigurasi oleh admin.', images: Array.from({ length: 10 }, (_, i) => `images/18.topsis/${i + 1}.PNG`) },
  { id: 17, title: 'Aplikasi Manajemen Terminal', stack: ['CodeIgniter 3','MySQL','Bootstrap'], img: 'images/17.terminal/2.PNG', github: 'https://github.com/khoirulanam5/manajemen-terminal.git', desc: 'Sistem manajemen terminal bus untuk pencatatan kedatangan/keberangkatan, data penumpang, retribusi, dan laporan operasional terminal.', images: Array.from({ length: 10 }, (_, i) => `images/17.terminal/${i + 1}.PNG`) },
  { id: 16, title: 'Aplikasi Manajemen Catering', stack: ['PHP','MySQL','Bootstrap'], img: 'images/16.catering/1.PNG', github: 'https://github.com/khoirulanam5/manajemen-pemesanan-catering.git', desc: 'Sistem pemesanan dan manajemen catering dengan fitur menu planner, jadwal pengiriman, invoice otomatis, dan manajemen bahan baku.', images: Array.from({ length: 10 }, (_, i) => `images/16.catering/${i + 1}.PNG`) },
  { id: 15, title: 'Aplikasi Rental Mobil', stack: ['CodeIgniter 3','MySQL','Bootstrap'], img: 'images/15.rental/4.PNG', github: 'https://github.com/khoirulanam5/rental-mobil.git', desc: 'Sistem rental mobil lengkap dengan manajemen armada, booking online, kalkulasi biaya otomatis, dan laporan pendapatan periodik.', images: Array.from({ length: 10 }, (_, i) => `images/15.rental/${i + 1}.PNG`) },
  { id: 14, title: 'Aplikasi Manajemen Klinik', stack: ['CodeIgniter 3','MySQL','Bootstrap'], img: 'images/14.siluka/5.PNG', github: 'https://github.com/khoirulanam5/siluka.git', desc: 'Sistem informasi klinik terintegrasi mencakup pendaftaran pasien, antrian dokter, rekam medis, apotek, dan billing pasien secara digital.', images: Array.from({ length: 10 }, (_, i) => `images/14.siluka/${i + 1}.PNG`) },
  { id: 13, title: 'Aplikasi Penjualan Aquarium', stack: ['CodeIgniter 3','MySQL','Bootstrap'], img: 'images/13.aquarium/8.PNG', github: 'https://github.com/khoirulanam5/penjualan-aquarium.git', desc: 'Toko online aquarium dengan katalog produk, manajemen pesanan, stok ikan dan perlengkapan, serta laporan penjualan terintegrasi.', images: Array.from({ length: 10 }, (_, i) => `images/13.aquarium/${i + 1}.PNG`) },
  { id: 12, title: 'Aplikasi Monitoring Data Stunting', stack: ['CodeIgniter 3','MySQL','Bootstrap'], img: 'images/12.stunting/9.PNG', github: 'https://github.com/khoirulanam5/sistem-monitoring-stunting.git', desc: 'Sistem monitoring pertumbuhan balita berbasis web untuk deteksi dini stunting dengan grafik perkembangan, alert risiko, dan laporan posyandu.', images: Array.from({ length: 10 }, (_, i) => `images/12.stunting/${i + 1}.PNG`) },
  { id: 11, title: 'Aplikasi Inventaris', stack: ['CodeIgniter 3','MySQL','Bootstrap'], img: 'images/11.inventaris/1.PNG', github: 'https://github.com/khoirulanam5/inventaris-barang-non-medis-rs.git', desc: 'Sistem inventaris barang non-medis rumah sakit dengan fitur QR code aset, mutasi barang antar departemen, dan laporan kondisi aset.', images: Array.from({ length: 10 }, (_, i) => `images/11.inventaris/${i + 1}.PNG`) },
  { id: 10, title: 'Aplikasi KPI Karyawan', stack: ['CodeIgniter 3','MySQL','Bootstrap'], img: 'images/10.kpikinerja/10.PNG', github: 'https://github.com/khoirulanam5/kpi-kinerja.git', desc: 'Sistem evaluasi KPI karyawan dengan indikator kinerja yang dapat dikustomisasi, dashboard performa, dan laporan penilaian per periode.', images: Array.from({ length: 10 }, (_, i) => `images/10.kpikinerja/${i + 1}.PNG`) },
  { id: 9, title: 'Aplikasi Maintenance Kendaraan', stack: ['CodeIgniter 3','MySQL','Bootstrap'], img: 'images/9.maintenance/6.PNG', github: 'https://github.com/khoirulanam5/Emaintenance.git', desc: 'Sistem manajemen perawatan kendaraan operasional dengan jadwal servis, riwayat perbaikan, biaya maintenance, dan alert jadwal rutin.', images: Array.from({ length: 10 }, (_, i) => `images/9.maintenance/${i + 1}.PNG`) },
  { id: 8, title: 'Aplikasi Persuratan', stack: ['CodeIgniter 3','MySQL','Bootstrap'], img: 'images/8.surat/4.PNG', github: 'https://github.com/khoirulanam5/persuratan.git', desc: 'Sistem persuratan digital untuk instansi pemerintah dan swasta dengan fitur surat masuk/keluar, disposisi, dan arsip dokumen terstruktur.', images: Array.from({ length: 10 }, (_, i) => `images/8.surat/${i + 1}.PNG`) },
  { id: 7, title: 'Aplikasi Presensi', stack: ['CodeIgniter 3','MySQL','Bootstrap'], img: 'images/7.presensi/1.PNG', github: 'https://github.com/khoirulanam5/presensi.git', desc: 'Sistem absensi karyawan berbasis web dengan integrasi QR code, rekap kehadiran otomatis, izin/cuti online, dan laporan bulanan.', images: Array.from({ length: 10 }, (_, i) => `images/7.presensi/${i + 1}.PNG`) },
  { id: 6, title: 'Aplikasi Inventori', stack: ['CodeIgniter 3','MySQL','Bootstrap'], img: 'images/6.inventori/2.PNG', github: 'https://github.com/khoirulanam5/inventori.git', desc: 'Sistem manajemen inventori barang umum dengan pencatatan keluar-masuk, stok minimum alert, laporan persediaan, dan manajemen supplier.', images: Array.from({ length: 10 }, (_, i) => `images/6.inventori/${i + 1}.PNG`) },
  { id: 5, title: 'Aplikasi Penjualan Hijab', stack: ['CodeIgniter 3','MySQL','Bootstrap'], img: 'images/5.tasbiha/1.PNG', github: 'https://github.com/khoirulanam5/penjualan_hijab.git', desc: 'Toko online busana muslim dengan katalog produk, keranjang belanja, manajemen pesanan dan pengiriman, serta laporan penjualan.', images: Array.from({ length: 10 }, (_, i) => `images/5.tasbiha/${i + 1}.PNG`) },
  { id: 4, title: 'Aplikasi Penjualan Sparepart', stack: ['CodeIgniter 3','MySQL','Bootstrap'], img: 'images/4.sparepart/5.PNG', github: 'https://github.com/khoirulanam5/penjualan_sparepart.git', desc: 'Sistem penjualan sparepart kendaraan dengan manajemen stok per kategori, pencarian cepat, transaksi kasir, dan laporan stok harian.', images: Array.from({ length: 10 }, (_, i) => `images/4.sparepart/${i + 1}.PNG`) },
  { id: 3, title: 'Inventori Bahan Baku Roti', stack: ['PHP','MySQL','Bootstrap'], img: 'images/3.roti/1.PNG', github: 'https://github.com/khoirulanam5/inventori-bahan-roti-fifo.git', desc: 'Sistem inventori bahan baku roti dengan metode FIFO untuk memastikan bahan terlama digunakan lebih dulu, dilengkapi alert kadaluarsa.', images: Array.from({ length: 10 }, (_, i) => `images/3.roti/${i + 1}.PNG`) },
  { id: 2, title: 'Aplikasi E-Tiket & Penyewaan Bus', stack: ['CodeIgniter 3','MySQL','Bootstrap'], img: 'images/2.bus/6.PNG', github: 'https://github.com/khoirulanam5/E-Tiket.git', desc: 'Platform pemesanan tiket dan penyewaan bus online dengan fitur pemilihan kursi interaktif, pembayaran digital, dan manajemen armada.', images: Array.from({ length: 10 }, (_, i) => `images/2.bus/${i + 1}.PNG`) },
  { id: 1, title: 'Aplikasi Pengajuan Cuti Pegawai', stack: ['PHP','MySQL','Bootstrap'], img: 'images/1.cuti/1.PNG', github: 'https://github.com/khoirulanam5/Sistem-Pengajuan-Cuti-Pegawai-Berbasis-Web.git', desc: 'Sistem pengajuan cuti pegawai digital dengan alur persetujuan multi-level, kalender cuti tim, saldo cuti otomatis, dan notifikasi status.', images: Array.from({ length: 10 }, (_, i) => `images/1.cuti/${i + 1}.PNG`) }
];

/* ── Testimonials data ── */
const testimonials = [
  { text: 'Website persuratan yang dibuat sangat memudahkan alur kerja kami. Proses yang dulu memakan waktu berhari-hari kini selesai dalam hitungan jam.', name: 'Kepala Bagian Umum', role: 'Instansi Pemerintah' },
  { text: 'Komunikasi selama pengerjaan sangat jelas, setiap progres selalu didemokan. Website kasir yang jadi juga stabil dan mudah dipakai staf toko.', name: 'Pemilik Usaha', role: 'Retail & Perdagangan' },
  { text: 'Rekomendasi kamar berbasis data tamu benar-benar membantu tim kami membuat keputusan bundling fasilitas yang lebih tepat sasaran.', name: 'Manajer Operasional', role: 'Industri Perhotelan' },
  { text: 'Sistem rekam medis yang dibangun sangat memudahkan pencarian riwayat pasien. Antrian di loket jadi jauh lebih cepat sejak pakai sistem ini.', name: 'Kepala Klinik', role: 'Layanan Kesehatan' },
  { text: 'Aplikasi presensi berbasis QR code sangat membantu HR kami. Rekap kehadiran yang dulu manual sekarang otomatis dan minim kesalahan.', name: 'Staf HRD', role: 'Perusahaan Manufaktur' },
  { text: 'Tim KA InnovCode responsif dan selalu update progres tanpa diminta. Website sekolah kami jadi lebih profesional di mata orang tua murid.', name: 'Kepala Sekolah', role: 'Lembaga Pendidikan' },
  { text: 'Sistem inventori gudang membantu kami memantau stok secara real-time. Barang hilang atau selisih catatan jauh berkurang.', name: 'Manajer Gudang', role: 'Distribusi & Logistik' },
  { text: 'Toko online yang dibuat mudah dikelola meski kami tidak paham teknis. Panduan penggunaannya juga jelas dan lengkap.', name: 'Pemilik Toko', role: 'UMKM Fashion' },
  { text: 'Sistem pengajuan cuti pegawai sangat membantu proses approval berjenjang. Tidak perlu lagi bolak-balik kertas antar divisi.', name: 'Staf Kepegawaian', role: 'Perusahaan Swasta' },
  { text: 'Dashboard laporan yang dibuat sangat membantu kami mengambil keputusan lebih cepat karena data tersaji secara visual dan real-time.', name: 'Direktur Operasional', role: 'Perusahaan Jasa' },
  { text: 'Sistem seleksi siswa berprestasi jadi lebih objektif dan transparan. Guru dan orang tua bisa melihat proses penilaiannya dengan jelas.', name: 'Wakil Kepala Sekolah', role: 'Lembaga Pendidikan' },
  { text: 'Aplikasi pemesanan makanan mempercepat pelayanan di resto kami. Pesanan langsung masuk ke dapur tanpa salah catat lagi.', name: 'Pemilik Restoran', role: 'Kuliner & F&B' },
  { text: 'Setelah website rilis, dukungan tetap responsif setiap kali ada permintaan penambahan fitur. Berasa masih dikawal sampai sekarang.', name: 'Pemilik Usaha', role: 'Jasa Konsultasi' },
  { text: 'Sistem monitoring stunting sangat membantu kader posyandu mencatat data balita dan memantau perkembangannya tiap bulan.', name: 'Koordinator Posyandu', role: 'Layanan Kesehatan Masyarakat' },
  { text: 'Proses pengerjaan sesuai timeline yang disepakati di awal. Tidak ada drama keterlambatan seperti pengalaman kami sebelumnya.', name: 'Manajer Proyek', role: 'Perusahaan Kontraktor' }
];

/* =========================================================
   DOM REFERENCES
   ========================================================= */
const navbar      = document.getElementById('navbar');
const hamburger    = document.getElementById('hamburger');
const navLinks     = document.getElementById('nav-links');
const scrollTopBtn = document.getElementById('scroll-top');

/* =========================================================
   MOBILE NAV (overlay + toggle — click listener attached here)
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
window.addEventListener('resize', () => { if (window.innerWidth > 768) closeNav(); });

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

/* =========================================================
   RENDER PORTFOLIO PREVIEW
   ========================================================= */
const grid = document.getElementById('portfolio-grid');
if (grid) {
  featuredProjects.forEach((p, i) => {
    const col = document.createElement('div');
    // FIX: added explicit "col-12" base class so each card is guaranteed
    // full-width (and centered) on mobile, instead of relying implicitly
    // on Bootstrap's default row-child width rule, which could collapse
    // to an auto width and stick to the left edge if Bootstrap's CSS
    // loads late/out of order relative to this script.
    col.className = 'col-12 col-md-6 col-lg-4';
    col.innerHTML = `
      <div class="pf-card reveal" style="transition-delay:${(i % 6) * 0.06}s" data-id="${p.id}">
        <div class="pf-thumb-wrap">
          <img class="pf-thumb" src="${p.img}" alt="${p.title}"
               onerror="this.outerHTML='<div class=\\'pf-thumb-ph\\'><i class=\\'fas fa-diagram-project\\'></i></div>'">
        </div>
        <div class="pf-body">
          <div class="pf-title">${p.title}</div>
          <span class="pf-link">Lihat Detail <i class="fas fa-arrow-up-right-from-square"></i></span>
        </div>
      </div>`;
    grid.appendChild(col);
    revealObserver.observe(col.querySelector('.reveal'));
    col.querySelector('.pf-card').addEventListener('click', () => openPfModal(p));
  });
}

/* =========================================================
   PORTFOLIO GALLERY MODAL
   ========================================================= */
const pfModal = document.getElementById('pf-modal');
const pfImg = document.getElementById('pf-modal-img');
const pfCounter = document.getElementById('pf-counter');
const pfTitle = document.getElementById('pf-modal-title');
const pfDesc = document.getElementById('pf-modal-desc');
const pfGithub = document.getElementById('pf-modal-github');
let pfCurrentProject = null;
let pfCurrentIndex = 0;

function renderPfImage() {
  const imgs = pfCurrentProject.images;
  pfImg.src = imgs[pfCurrentIndex];
  pfImg.alt = `${pfCurrentProject.title} - foto ${pfCurrentIndex + 1}`;
  pfImg.onerror = () => { pfImg.onerror = null; pfImg.src = pfCurrentProject.img; };
  pfCounter.textContent = `${pfCurrentIndex + 1} / ${imgs.length}`;
}

function openPfModal(project) {
  pfCurrentProject = project;
  pfCurrentIndex = 0;
  pfTitle.textContent = project.title;
  pfDesc.textContent = project.desc;
  pfGithub.href = project.github;
  renderPfImage();
  pfModal.classList.add('show');
  pfModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closePfModal() {
  pfModal.classList.remove('show');
  pfModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
function pfNext() { pfCurrentIndex = (pfCurrentIndex + 1) % pfCurrentProject.images.length; renderPfImage(); }
function pfPrev() { pfCurrentIndex = (pfCurrentIndex - 1 + pfCurrentProject.images.length) % pfCurrentProject.images.length; renderPfImage(); }

if (pfModal) {
  pfModal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closePfModal));
  document.getElementById('pf-next').addEventListener('click', pfNext);
  document.getElementById('pf-prev').addEventListener('click', pfPrev);
  document.addEventListener('keydown', e => {
    if (!pfModal.classList.contains('show')) return;
    if (e.key === 'Escape') closePfModal();
    if (e.key === 'ArrowRight') pfNext();
    if (e.key === 'ArrowLeft') pfPrev();
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
    const duration = 1200;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(progress * target);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    }
    requestAnimationFrame(tick);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(el => counterObserver.observe(el));

/* =========================================================
   HERO CODE-CARD TYPING ANIMATION
   ========================================================= */
const typeEl = document.querySelector('.type-line');
if (typeEl) {
  const words = ['building...', 'testing...', 'online'];
  let wi = 0, ci = 0, deleting = false;
  function typeTick() {
    const word = words[wi];
    typeEl.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++);
    if (!deleting && ci === word.length + 1) { deleting = true; setTimeout(typeTick, 1100); return; }
    if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
    setTimeout(typeTick, deleting ? 45 : 90);
  }
  typeTick();
}

/* =========================================================
   TESTIMONIAL AUTO-SLIDING CAROUSEL
   ========================================================= */
const testiTrack = document.getElementById('testi-track');
const testiDots = document.getElementById('testi-dots');
if (testiTrack && testiDots) {
  testimonials.forEach(t => {
    const card = document.createElement('div');
    card.className = 'testi-card';
    card.innerHTML = `
      <i class="fas fa-quote-left"></i>
      <p>${t.text}</p>
      <div class="testi-who"><strong>${t.name}</strong><span>${t.role}</span></div>`;
    testiTrack.appendChild(card);
  });

  const cards = testiTrack.querySelectorAll('.testi-card');
  cards.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToTesti(i, true));
    testiDots.appendChild(dot);
  });
  const dotEls = testiDots.querySelectorAll('span');

  let testiIndex = 0;
  let testiPaused = false;

  // FIX: previously used cards[testiIndex].scrollIntoView({ block: 'nearest' }).
  // scrollIntoView can still move the PAGE's vertical scroll position when the
  // element is outside the viewport (e.g. user reading another section), which
  // caused the whole page to jump to the testimonials section every ~3.5s.
  // Now we scroll only the horizontal track itself and never touch page scroll.
  function goToTesti(i, userAction) {
    testiIndex = (i + cards.length) % cards.length;
    const target = cards[testiIndex];
    const trackRect = testiTrack.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const delta = targetRect.left - trackRect.left;
    testiTrack.scrollTo({ left: testiTrack.scrollLeft + delta, behavior: 'smooth' });
    dotEls.forEach(d => d.classList.remove('active'));
    dotEls[testiIndex].classList.add('active');
    if (userAction) { testiPaused = true; setTimeout(() => testiPaused = false, 6000); }
  }

  // keep dots in sync when user drags/scrolls the track manually
  const testiObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const idx = [...cards].indexOf(entry.target);
      if (entry.isIntersecting && idx > -1) {
        testiIndex = idx;
        dotEls.forEach(d => d.classList.remove('active'));
        dotEls[idx].classList.add('active');
      }
    });
  }, { root: testiTrack, threshold: 0.6 });
  cards.forEach(c => testiObserver.observe(c));

  testiTrack.addEventListener('mouseenter', () => testiPaused = true);
  testiTrack.addEventListener('mouseleave', () => testiPaused = false);
  testiTrack.addEventListener('touchstart', () => testiPaused = true, { passive: true });

  setInterval(() => { if (!testiPaused) goToTesti(testiIndex + 1, false); }, 3500);
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