/* ── i18n: Indonesia (default) / English — KA Inovasi Digital ── */
(function () {
  const KEY = 'compro-lang';
  let lang = 'id';
  try { const s = localStorage.getItem(KEY); if (s === 'en' || s === 'id') lang = s; } catch (e) {}

  /* [Indonesia, English] */
  const PAIRS = [
    /* nav */
    ['Layanan', 'Services'], ['Harga', 'Pricing'], ['Proses', 'Process'], ['Portofolio', 'Portfolio'], ['Kontak', 'Contact'],
    ['Mulai Proyek', 'Start a Project'],
    /* hero */
    ['Website bukan sekadar tampilan, tetapi investasi untuk meningkatkan kredibilitas, efisiensi, dan pertumbuhan bisnis. Kami siap mewujudkan solusi digital yang tepat untuk Anda.',
     'A website is more than a look — it is an investment in credibility, efficiency, and business growth. We are ready to deliver the right digital solution for you.'],
    ['Konsultasi', 'Consultation'], ['Proyek Selesai', 'Projects Completed'], ['Tahun Pengalaman', 'Years of Experience'], ['Tepat Rilis', 'On-Time Release'],
    ['Support KA Inovasi Digital', 'KA Inovasi Digital Support'], ['Mulai Bangun', 'Start Building'], ['Sekarang', 'Now'],
    /* about */
    ['Tentang Kami', 'About Us'], ['Solusi digital yang dibangun', 'Digital solutions built'], ['untuk mendukung pertumbuhan bisnis Anda.', 'to support your business growth.'],
    ['KA Inovasi Digital adalah software house yang menyediakan layanan pembuatan website, sistem informasi, dan aplikasi web yang dirancang sesuai kebutuhan bisnis, instansi, maupun lembaga pendidikan.',
     'KA Inovasi Digital is a software house providing websites, information systems, and web applications tailored to the needs of businesses, institutions, and educational organizations.'],
    ['Kami percaya bahwa setiap organisasi memiliki kebutuhan yang berbeda. Karena itu, setiap proyek kami dibangun secara khusus dengan mengutamakan desain yang profesional, performa yang optimal, serta sistem yang mudah digunakan dan mudah dikembangkan.',
     'We believe every organization has different needs. That is why each project is custom-built with professional design, optimal performance, and a system that is easy to use and easy to extend.'],
    ['Sebelum proses pengembangan dimulai, kami meluangkan waktu untuk memahami tujuan, proses bisnis, serta tantangan yang dihadapi klien agar solusi yang dihasilkan benar-benar memberikan manfaat dan nilai jangka panjang.',
     'Before development begins, we take the time to understand our clients\' goals, business processes, and challenges so the solution delivers real, long-term value.'],
    ['Misi', 'Mission'], ['Nilai', 'Values'],
    ['Website yang mudah dipakai, sesuai anggaran, dan benar-benar membantu klien.', 'Websites that are easy to use, within budget, and genuinely helpful to clients.'],
    ['Rapi, transparan, dan bertanggung jawab atas setiap proyek yang kami serahkan.', 'Neat, transparent, and accountable for every project we deliver.'],
    ['Konsultasi Kebutuhan', 'Needs Consultation'], ['Diskusi santai memahami tujuan & target website Anda', 'A relaxed discussion to understand your website goals & targets'],
    ['Desain & Pengembangan', 'Design & Development'], ['Tampilan menarik dengan sistem yang stabil di baliknya', 'An attractive look backed by a stable system'],
    ['Aman & Siap Berkembang', 'Secure & Ready to Grow'], ['Standar yang mudah dirawat dan ditambah fitur', 'Standards that are easy to maintain and extend'],
    ['Dukungan Purna Rilis', 'Post-Launch Support'], ['Pendampingan dan perawatan setelah online', 'Guidance and maintenance after going live'],
    /* services */
    ['Dari yang simpel,', 'From the simple,'], ['sampai yang kompleks.', 'to the complex.'],
    ['Butuh website yang menarik, cepat, dan sesuai kebutuhan bisnis atau organisasi Anda? Kami siap membantu.', 'Need a website that is attractive, fast, and fits your business or organization? We are here to help.'],
    ['Web Instansi', 'Institutional Website'], ['Sistem ERP', 'ERP System'], ['Lainnya', 'Others'],
    ['Desain Modern & Responsif', 'Modern & Responsive Design'], ['Tampilan yang enak dilihat dan rapi di berbagai perangkat, dari laptop sampai smartphone.', 'A pleasant look that stays tidy on every device, from laptops to smartphones.'],
    ['Performa Cepat & Optimal', 'Fast & Optimal Performance'], ['Website dibangun ringan sehingga cepat diakses dan nyaman digunakan pengunjung.', 'Lightweight websites that load quickly and are comfortable for visitors.'],
    ['Keamanan Website', 'Website Security'], ['Perlindungan standar untuk menjaga website dan data Anda tetap aman.', 'Standard protection to keep your website and data safe.'],
    ['Optimal di Semua Layar', 'Optimized for Every Screen'], ['Tampil rapi baik dibuka lewat komputer, tablet, maupun ponsel.', 'Looks neat whether opened on a computer, tablet, or phone.'],
    ['Fitur Sesuai Kebutuhan', 'Features That Fit Your Needs'], ['Fitur website dapat disesuaikan, dari yang sederhana sampai yang lebih lengkap.', 'Website features can be tailored, from simple to comprehensive.'],
    ['Siap Online & Berkembang', 'Ready to Go Live & Grow'], ['Website siap dipakai dan mudah dikembangkan lagi sesuai kebutuhan.', 'Ready to use and easy to develop further as needed.'],
    /* pricing */
    ['Daftar Harga', 'Price List'], ['Paket harga transparan,', 'Transparent pricing,'], ['sesuai kebutuhan Anda.', 'tailored to your needs.'],
    ['Pilih paket yang sesuai skala bisnis Anda. Harga dapat disesuaikan lagi setelah sesi konsultasi.', 'Choose the plan that fits your business scale. Prices can be adjusted after the consultation.'],
    ['Website Sederhana', 'Simple Website'], ['1 – 5 halaman (Home, About, dll)', '1 – 5 pages (Home, About, etc.)'], ['Desain responsif', 'Responsive design'], ['Form kontak', 'Contact form'], ['3 Hari Selesai', 'Done in 3 Days'],
    ['Website Profil Usaha', 'Business Profile Website'], ['5 – 10 halaman (Home, About, Services, Contact, dll)', '5 – 10 pages (Home, About, Services, Contact, etc.)'], ['Desain profesional', 'Professional design'], ['Admin panel', 'Admin panel'], ['7 Hari Selesai', 'Done in 7 Days'],
    ['Paling Diminati', 'Most Popular'], ['Login & register user', 'User login & registration'], ['Dashboard admin', 'Admin dashboard'], ['Data master', 'Master data'], ['Aplikasi internal', 'Internal applications'], ['Kustom web', 'Custom web'], ['10 Hari Selesai', 'Done in 10 Days'],
    ['Sistem ERP multi-modul', 'Multi-module ERP system'], ['Multi-tenant & manajemen role', 'Multi-tenant & role management'], ['Integrasi API', 'API integration'], ['Arsitektur skalabel', 'Scalable architecture'], ['20+ Hari Selesai (sesuai kompleksitas)', '20+ Days (depending on complexity)'],
    ['Mulai Dari', 'Starting From'], ['Pilih Paket', 'Choose Plan'],
    ['Harga di atas adalah estimasi awal. Kebutuhan fitur tambahan atau kompleksitas khusus akan dibahas saat konsultasi.', 'Prices above are initial estimates. Additional features or special complexity will be discussed during the consultation.'],
    /* why us */
    ['Mengapa memilih', 'Why choose'], ['sebagai partner digital?', 'as your digital partner?'],
    ['Alasan mengapa perusahaan dan UMKM mempercayakan pengerjaan sistem digital mereka kepada tim ahli kami.', 'Why companies and SMEs trust our expert team with their digital systems.'],
    ['Diskusi', 'Discussion'], ['Kami mengomunikasikan solusi teknis dengan bahasa yang mudah dipahami, memastikan visi bisnis Anda diterjemahkan dengan tepat ke dalam produk digital.', 'We explain technical solutions in plain language, making sure your business vision is translated accurately into a digital product.'],
    ['Komitmen Lini Masa', 'Timeline Commitment'], ['Pengembangan sistem yang terencana dengan estimasi waktu yang jujur (On-Time Delivery). Kami sangat menghargai momentum bisnis Anda.', 'Planned development with honest time estimates (On-Time Delivery). We deeply respect your business momentum.'],
    ['Standar SEO & Kecepatan', 'SEO & Speed Standards'], ['Setiap baris kode dioptimasi untuk kecepatan muat maksimal dan struktur SEO teknis yang disukai Google, meningkatkan visibilitas organik bisnis Anda.', 'Every line of code is optimized for maximum load speed and technical SEO structure that Google favors, boosting your organic visibility.'],
    ['Skalabilitas & Keamanan', 'Scalability & Security'], ['Sistem dibangun dengan fondasi teknologi modern yang siap berkembang seiring pertumbuhan bisnis Anda, lengkap dengan lapisan keamanan berlapis.', 'Built on a modern technology foundation that grows with your business, complete with layered security.'],
    /* process */
    ['Cara Kerja', 'How We Work'], ['Alur kerja yang jelas,', 'A clear workflow,'], ['di setiap tahap.', 'at every stage.'],
    ['Diskusi santai memahami kebutuhan dan gambaran website Anda.', 'A relaxed discussion to understand your needs and website vision.'],
    ['Perencanaan & Desain', 'Planning & Design'], ['Menyusun alur dan mockup sebelum masuk ke pengerjaan.', 'Drafting the flow and mockups before development starts.'],
    ['Pengembangan', 'Development'], ['Website mulai dibangun, dengan demo berkala tiap tahap penting.', 'The website is built, with periodic demos at each key stage.'],
    ['Pengujian', 'Testing'], ['Dicek ulang agar semua fitur berjalan baik sebelum rilis.', 'Rechecked so every feature works properly before release.'],
    ['Peluncuran', 'Launch'], ['Website resmi online dan siap diakses.', 'The website goes live and is ready to access.'],
    ['Dukungan Lanjutan', 'Ongoing Support'], ['Perawatan dan penambahan fitur sesuai kebutuhan.', 'Maintenance and new features as needed.'],
    /* portfolio & testimonials */
    ['Sebagian website & sistem', 'A selection of websites & systems'], ['yang telah kami buat.', 'we have built.'], ['Lihat Detail', 'View Details'],
    ['Testimoni', 'Testimonials'], ['Apa kata klien kami.', 'What our clients say.'],
    ['Dulu urusan surat-menyurat ribet banget, sekarang tinggal klik-klik aja langsung kelar. Beneran ngebantu banget buat kerjaan sehari-hari.', 'Handling correspondence used to be a hassle; now a few clicks and it\'s done. It really helps with our daily work.'],
    ['Staf Tata Usaha, Kantor Kecamatan', 'Administrative Staff, District Office'],
    ['Selama proses bikin website kasirnya enak, tiap ada progres langsung ditunjukin. Sekarang kasir toko udah stabil, gampang dipakai anak-anak juga.', 'Building the cashier website was smooth, with progress shown every step. The store\'s cashier is now stable and easy even for the staff to use.'],
    ['Pemilik Toko Kelontong', 'Grocery Store Owner'],
    ['Fitur rekomendasi kamarnya lumayan bantu buat nentuin paket kamar mana yang paling laku. Jadi nggak asal tebak lagi.', 'The room recommendation feature helps us see which room packages sell best. No more guessing.'],
    ['Manajemen Hotel', 'Hotel Management'],
    ['Nyari data pasien lama sekarang cepet banget, tinggal ketik nama langsung ketemu. Antrian di depan juga jadi nggak numpuk kayak dulu.', 'Finding old patient records is now very fast — just type a name. The queue at the front no longer piles up like before.'],
    ['Klinik Pratama', 'Primary Clinic'],
    ['Absen pake QR code ini beneran ngebantu tim HR, dulu rekap manual sering salah hitung, sekarang udah otomatis.', 'QR code attendance really helps the HR team; manual recaps often had miscounts, now it\'s automatic.'],
    ['HRD Pabrik', 'Factory HR'],
    ['Timnya gercep, sering update progres duluan sebelum ditanya. Website sekolah jadi kelihatan lebih rapi pas dilihat wali murid.', 'The team is quick and often updates progress before we ask. The school website looks much neater to parents.'],
    ['Tata Usaha Sekolah', 'School Administration'],
    ['Sekarang stok gudang bisa dipantau kapan aja, nggak perlu turun langsung buat ngecek. Selisih barang juga udah jarang kejadian.', 'Warehouse stock can now be monitored anytime without going down to check. Stock discrepancies rarely happen anymore.'],
    ['Kepala Gudang', 'Warehouse Manager'],
    ['Awalnya takut ribet ngurus toko online sendiri, ternyata gampang dipakai. Kalau bingung juga ada panduannya, jadi nggak nanya-nanya terus.', 'I was worried running an online store myself would be complicated, but it\'s easy to use. There\'s a guide when I\'m unsure, so I don\'t have to keep asking.'],
    ['Owner Toko Online', 'Online Store Owner'],
    ['Pengajuan cuti yang tadinya harus print kertas terus keliling ke atasan, sekarang tinggal ajukan online, disetujui juga cepet.', 'Leave requests used to mean printing paper and going around to supervisors; now we submit online and approval is quick.'],
    ['Staf Kepegawaian', 'HR Staff'],
    ['Laporannya udah dalam bentuk grafik jadi enak dibaca, nggak perlu buka-buka excel lagi tiap mau ambil keputusan.', 'Reports are already in chart form and easy to read, no need to dig through Excel every time we make a decision.'],
    ['Operasional Perusahaan Jasa', 'Service Company Operations'],
    ['Penilaian siswa berprestasi jadi lebih jelas dasarnya, orang tua juga bisa lihat sendiri prosesnya, jadi nggak ada yang komplain macem-macem.', 'The basis for selecting outstanding students is now clearer, and parents can see the process themselves, so there are no complaints.'],
    ['Wakil Kepala Sekolah', 'Vice Principal'],
    ['Order masuk langsung ke dapur, jadi nggak ada lagi salah catat pesanan kayak waktu masih pake nota manual.', 'Orders go straight to the kitchen, so no more mistakes like when we used manual notes.'],
    ['Pemilik Resto', 'Restaurant Owner'],
    ['Yang saya suka itu setelah website jadi pun masih dibantu kalau ada request tambahan fitur, nggak dilepas gitu aja.', 'What I like is that even after the website was done, they still help with extra feature requests instead of leaving us on our own.'],
    ['Konsultan Usaha', 'Business Consultant'],
    ['Kader posyandu jadi kebantu banget buat catat data balita tiap bulan, nggak perlu lagi tulis manual di buku.', 'Posyandu volunteers are greatly helped in recording toddler data each month, no more writing by hand in books.'],
    ['Kader Posyandu', 'Posyandu Volunteer'],
    ['Yang bikin tenang itu pengerjaannya tepat waktu sesuai janji di awal, nggak molor-molor kayak vendor sebelumnya.', 'What gives peace of mind is that delivery was on time as promised, unlike our previous vendor who kept delaying.'],
    ['Manajer Proyek Kontraktor', 'Contractor Project Manager'],
    /* faq */
    ['Pertanyaan yang', 'Frequently'], ['sering diajukan.', 'asked questions.'],
    ['Berapa lama waktu pembuatan website?', 'How long does it take to build a website?'],
    ['Tergantung jenis dan kompleksitasnya. Landing page atau company profile biasanya 2-3 hari, sistem atau web apps kompleks bisa 7-10 hari, Sistem ERP kustom bisa 20+ hari sesuai dengan kompleksitas. Estimasi pasti diberikan setelah konsultasi awal.',
     'It depends on the type and complexity. A landing page or company profile usually takes 2-3 days, complex systems or web apps 7-10 days, and a custom ERP 20+ days depending on complexity. An exact estimate is given after the initial consultation.'],
    ['Apakah kode sumber sepenuhnya milik klien?', 'Does the client fully own the source code?'],
    ['Ya. Setelah proyek selesai dan serah terima dilakukan, seluruh kode sumber dan hak penggunaan sepenuhnya menjadi milik klien.', 'Yes. Once the project is complete and handed over, all source code and usage rights belong entirely to the client.'],
    ['Apakah tersedia dukungan setelah website dirilis?', 'Is support available after the website is launched?'],
    ['Tersedia. Kami menyediakan paket perawatan pasca rilis, mulai dari perbaikan bug ringan hingga penambahan fitur baru.', 'Yes. We offer post-launch maintenance plans, from minor bug fixes to new features.'],
    ['Apakah bisa memperbaiki atau mengembangkan website lama?', 'Can you fix or extend an existing website?'],
    ['Bisa. Kami terbiasa memperbaiki bug, menambah fitur, hingga merapikan website atau sistem lama yang sudah berjalan.', 'Yes. We are used to fixing bugs, adding features, and cleaning up existing websites or systems.'],
    ['Bagaimana skema pembayarannya?', 'How does payment work?'],
    ['Umumnya dibagi menjadi termin: uang muka di awal, pembayaran bertahap sesuai progres, dan pelunasan saat serah terima.', 'Usually in installments: a down payment upfront, staged payments as progress is made, and final payment upon handover.'],
    /* cta & contact */
    ['Punya ide website yang ingin diwujudkan?', 'Have a website idea you want to bring to life?'],
    ['Ceritakan kebutuhan Anda, kami bantu petakan solusinya tanpa biaya di sesi konsultasi awal.', 'Tell us your needs and we will help map out the solution, free of charge in the initial consultation.'],
    ['Mulai Konsultasi', 'Start Consultation'],
    ['Mari diskusikan', "Let's discuss"], ['website Anda.', 'your website.'],
    ['Alamat', 'Address'], ['Jam Operasional', 'Operating Hours'], ['Setiap Hari (24 Jam)', 'Every Day (24 Hours)'],
    ['Nama', 'Name'], ['Perusahaan / Instansi', 'Company / Organization'], ['Nomor WhatsApp', 'WhatsApp Number'], ['Jenis Website', 'Website Type'],
    ['Pesan', 'Message'], ['Kirim Pesan', 'Send Message'], ['Lokasi', 'Location'],
    ['Pilih jenis website', 'Choose website type'], ['Website Instansi', 'Institutional Website'],
    ['Nama lengkap', 'Full name'], ['Opsional', 'Optional'], ['Ceritakan kebutuhan website Anda...', 'Tell us about your website needs...'],
    /* footer & widget */
    ['Jasa pembuatan website dan web apps profesional, dari landing page sampai sistem yang lebih kompleks.', 'Professional website and web app development, from landing pages to more complex systems.'],
    ['Navigasi', 'Navigation'], ['Hubungi Kami', 'Contact Us'],
    ['Online Sekarang', 'Online Now'], ['Ada yang bisa kami bantu?', 'How can we help you?'], ['Hubungi WhatsApp', 'Contact via WhatsApp']
  ];

  /* Project [title, description] dalam English, berdasarkan id project */
  const P = {
    39: ['Inventory App (ROP & Safety Stock)', 'Web-based inventory system that automates recording of incoming/outgoing goods and raw material stock in real time, using Reorder Point (ROP) and Safety Stock to determine the right reorder time and prevent stockouts.'],
    38: ['Location-Based Market Kiosk Monitoring App (SAW)', 'Location-based monitoring system for traditional market kiosks showing kiosk status and occupancy in real time, with Simple Additive Weighting (SAW) to prioritize vacant kiosks by accessibility, location, rent, and occupancy.'],
    37: ['Custom Furniture Recommendation App (Fuzzy & Knapsack)', 'Furniture customization recommender using Mamdani Fuzzy Logic to assess dimension and price fit, and a Knapsack algorithm to choose the best furniture combination for room size and budget, with a 3D layout visualization.'],
    36: ['Restock Priority DSS App (SAW)', 'Decision support system for prioritizing restocks with Simple Additive Weighting (SAW) based on stock level, sales, price, lead time, and demand, helping building-material stores control inventory more objectively.'],
    35: ['Best Smartphone Selection DSS App', 'Decision support system for choosing the best smartphone using Multi Attribute Utility Theory (MAUT), with multiple roles (Owner, Admin, Customer), ranking phones by defined criteria and weights.'],
    34: ['Restaurant App', 'Web-based restaurant management system handling the order flow from cashier to kitchen, sales transactions, and raw material stock using First In First Out (FIFO) to reduce expiry risk.'],
    33: ['Hotel Room Recommendation App', 'Hotel room facility recommender using the Apriori and FP-Growth algorithms to efficiently find association patterns in guest transaction data.'],
    32: ['Cashier Management App', 'Web-based cashier app for managing sales transactions, product stock, daily reports, and customer data in real time.'],
    31: ['Agricultural Equipment Aid App', 'Information system for submitting and managing agricultural equipment aid, streamlining administration between farmers and the relevant agency.'],
    30: ['Guidance Counseling App', 'Student counseling management system for recording sessions, progress reports, and communication between counselors and students.'],
    29: ['Official Report (Berita Acara) App', 'Digital system for managing official examination reports for an immigration office, with digital signatures and document archiving.'],
    28: ['Foreign Nationals Service App', 'Web-based service system for foreign nationals to simplify administration, data collection, and permit application status monitoring.'],
    27: ['MSME Submission App', 'Online MSME submission and verification system that simplifies registration, business data validation, and reporting to the relevant agency.'],
    26: ['Warehouse Inventory App', 'Comprehensive warehouse management system with stock recording, goods receipt and issue, and periodic inventory reports.'],
    25: ['Procurement App', 'Procurement system that automates requests, approvals, purchasing, and goods receipt in one integrated platform.'],
    24: ['E-Library App', 'Digital library with QR code book lending, collection search, member management, and automatic return notifications.'],
    23: ['Food Ordering App', 'Web-based food ordering system with an interactive menu, shopping cart, table management, and real-time kitchen orders.'],
    22: ['Medicine Stock App', 'Pharmacy medicine stock system with low-stock notifications, expiry date monitoring, and monthly usage reports.'],
    21: ['Motorcycle Tire Shop Inventory', 'Inventory system for motorcycle tire shops with stock management by size, brand, and type, plus daily sales reports.'],
    20: ['Outstanding Student Selection', 'Decision support system for selecting outstanding students using Profile Matching with measurable academic and non-academic criteria.'],
    19: ['Medical Records App', 'Electronic medical records for clinics and community health centers with visit history, digital prescriptions, and health statistics reports.'],
    18: ['Best Student Determination App', 'Decision support system for determining the best student using TOPSIS, with criteria weights configurable by the admin.'],
    17: ['Terminal Management App', 'Bus terminal management system for recording arrivals/departures, passenger data, fees, and operational reports.'],
    16: ['Catering Management App', 'Catering order and management system with a menu planner, delivery schedule, automatic invoices, and raw material management.'],
    15: ['Car Rental App', 'Complete car rental system with fleet management, online booking, automatic cost calculation, and periodic revenue reports.'],
    14: ['Clinic Management App', 'Integrated clinic information system covering patient registration, doctor queues, medical records, pharmacy, and digital patient billing.'],
    13: ['Aquarium Sales App', 'Online aquarium store with a product catalog, order management, fish and equipment stock, and integrated sales reports.'],
    12: ['Stunting Data Monitoring App', 'Web-based toddler growth monitoring for early stunting detection, with growth charts, risk alerts, and posyandu reports.'],
    11: ['Inventory App', 'Non-medical hospital inventory system with asset QR codes, inter-department transfers, and asset condition reports.'],
    10: ['Employee KPI App', 'Employee KPI evaluation system with customizable performance indicators, a performance dashboard, and per-period assessment reports.'],
    9: ['Vehicle Maintenance App', 'Operational vehicle maintenance management with service schedules, repair history, maintenance costs, and routine schedule alerts.'],
    8: ['Correspondence App', 'Digital correspondence system for government and private institutions with incoming/outgoing mail, dispositions, and structured document archives.'],
    7: ['Attendance App', 'Web-based employee attendance with QR code integration, automatic attendance recap, online leave requests, and monthly reports.'],
    6: ['Inventory App', 'General inventory management with in/out recording, minimum stock alerts, stock reports, and supplier management.'],
    5: ['Hijab Sales App', 'Muslim fashion online store with a product catalog, shopping cart, order and shipping management, and sales reports.'],
    4: ['Spare Parts Sales App', 'Vehicle spare parts sales system with per-category stock management, quick search, cashier transactions, and daily stock reports.'],
    3: ['Bread Raw Material Inventory', 'Bread raw material inventory using FIFO so the oldest materials are used first, with expiry alerts.'],
    2: ['E-Ticket & Bus Rental App', 'Online bus ticketing and rental platform with interactive seat selection, digital payments, and fleet management.'],
    1: ['Employee Leave Request App', 'Digital leave request system with multi-level approval, team leave calendar, automatic leave balance, and status notifications.']
  };

  const idx = new Map();
  PAIRS.forEach(p => { idx.set(p[0], p); idx.set(p[1], p); });
  const norm = s => s.replace(/\s+/g, ' ').trim();
  const orig = new WeakMap();
  const i = () => (lang === 'en' ? 1 : 0);
  const SKIP = 'script,style,.pf-title,#pf-modal-title,#pf-modal-desc';

  function translateText() {
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: n => n.parentElement && n.parentElement.closest(SKIP) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    });
    let n;
    while ((n = w.nextNode())) {
      const raw = n.nodeValue, k = norm(raw);
      if (!k) continue;
      let pair = orig.get(n);
      if (!pair) { pair = idx.get(k); if (!pair) continue; orig.set(n, pair); }
      n.nodeValue = raw.match(/^\s*/)[0] + pair[i()] + raw.match(/\s*$/)[0];
    }
  }

  function translatePlaceholders() {
    document.querySelectorAll('[placeholder]').forEach(el => {
      if (!el.dataset.ph) el.dataset.ph = el.getAttribute('placeholder');
      const pair = idx.get(el.dataset.ph);
      if (pair) el.setAttribute('placeholder', pair[i()]);
    });
  }

  const proj = p => (lang === 'en' && P[p.id]) ? { title: P[p.id][0], desc: P[p.id][1] } : { title: p.title, desc: p.desc };

  function translateProjects() {
    document.querySelectorAll('#portfolio-grid .pf-card').forEach(card => {
      const p = featuredProjects.find(x => String(x.id) === card.dataset.id);
      if (!p) return;
      const t = proj(p);
      const title = card.querySelector('.pf-title');
      const img = card.querySelector('.pf-thumb');
      if (title) title.textContent = t.title;
      if (img) img.alt = t.title;
    });
  }

  /* Modal: bungkus openPfModal bawaan main.js */
  let currentProject = null;
  const baseOpen = window.openPfModal;
  function fillModal() {
    if (!currentProject) return;
    const t = proj(currentProject);
    document.getElementById('pf-modal-title').textContent = t.title;
    document.getElementById('pf-modal-desc').textContent = t.desc;
  }
  window.openPfModal = function (p) { baseOpen(p); currentProject = p; fillModal(); };

  /* Tombol bahasa */
  const style = document.createElement('style');
  style.textContent = `
    /* ── Navbar: rapikan desktop & mobile ── */
    .nav-inner{padding:1rem .75rem;gap:.75rem}
    .nav-logo{white-space:nowrap;flex-shrink:0}
    .nav-links{gap:1.6rem}
    .nav-links a{white-space:nowrap}
    .nav-cta{padding:.6rem 1.15rem}
    .lang-switch{display:inline-flex;border:1px solid var(--line);border-radius:999px;padding:2px;background:var(--bg-soft);margin-left:.5rem;flex-shrink:0}
    .lang-switch button{background:none;border:none;color:var(--ink-soft);font:700 .7rem var(--f-body);letter-spacing:.06em;padding:.3rem .6rem;border-radius:999px;cursor:pointer;transition:.2s}
    .lang-switch button.active{background:linear-gradient(135deg,var(--primary),var(--primary-2));color:#fff}
    .theme-toggle{margin-left:0}
    @media (max-width:1100px){
      .nav-logo{font-size:1.05rem}
      .nav-links{gap:1.2rem}
      .nav-links a{font-size:.84rem}
    }
    /* menu drawer mulai dari 992px supaya tidak sesak di layar sedang */
    @media (max-width:992px){
      .nav-inner{justify-content:space-between;padding:.85rem 1rem;gap:.6rem}
      .nav-links{position:fixed;top:0;right:0;width:300px;max-width:82vw;height:100vh;background:var(--bg);flex-direction:column;align-items:flex-start;gap:0;transform:translateX(100%);transition:transform .3s ease,background .3s;z-index:310;padding-top:5.5rem;box-shadow:-10px 0 40px rgba(10,24,58,.15);margin-left:0}
      .nav-links.open{transform:translateX(0)}
      .nav-links li{width:100%;border-bottom:1px solid var(--line)}
      .nav-links a{display:block;padding:1rem 1.5rem;width:100%;font-size:.9rem}
      .nav-links a::after{display:none}
      .nav-links a.nav-cta{margin:1rem 1.5rem;width:calc(100% - 3rem);text-align:center}
      .hamburger{display:flex;padding:4px;margin-right:-4px}
      .lang-switch{margin-left:auto}
    }
    @media (max-width:480px){
      .nav-inner{padding:.75rem .9rem;gap:.45rem}
      .nav-logo{font-size:.95rem;gap:.4rem}
      .lang-switch button{padding:.26rem .5rem;font-size:.66rem}
      .theme-toggle{width:34px;height:34px;font-size:.82rem}
    }
    @media (max-width:380px){
      .nav-inner{padding:.7rem .75rem;gap:.35rem}
      .nav-logo{font-size:.84rem}
      .logo-mark{font-size:.72rem;padding:.12rem .32rem}
      .lang-switch button{padding:.24rem .42rem}
      .theme-toggle{width:30px;height:30px}
    }
    @media (max-width:340px){ .logo-mark{display:none} }`;
  document.head.appendChild(style);

  const sw = document.createElement('div');
  sw.className = 'lang-switch';
  sw.innerHTML = '<button type="button" data-lang="id">ID</button><button type="button" data-lang="en">EN</button>';
  sw.addEventListener('click', e => { const b = e.target.closest('button[data-lang]'); if (b) setLang(b.dataset.lang); });
  const themeBtn = document.getElementById('theme-toggle');
  themeBtn.parentNode.insertBefore(sw, themeBtn);

  function setLang(l) {
    lang = l;
    try { localStorage.setItem(KEY, l); } catch (e) {}
    document.documentElement.lang = l;
    translateText();
    translatePlaceholders();
    translateProjects();
    fillModal();
    document.querySelectorAll('.faq-item.open .faq-a').forEach(a => { a.style.maxHeight = a.scrollHeight + 'px'; });
    sw.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  }

  window.addEventListener('resize', () => { if (window.innerWidth > 992 && typeof closeNav === 'function') closeNav(); });

  setLang(lang);
})();