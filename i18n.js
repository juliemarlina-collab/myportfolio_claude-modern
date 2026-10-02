/* =====================================================================
   EN | BM language switch · shared by index.html and folio-dh13.html
   English is the default. The visitor's choice is remembered.
   To add or fix a translation: add a line to PAIRS → ['English', 'Bahasa Melayu'].
   Matching ignores capital letters and extra spaces; <br> and <em> are allowed in BM.
   ===================================================================== */
(()=>{'use strict';
const PAIRS=[
/* ---------- navigation & common ---------- */
['Home','Utama'],['About','Tentang Saya'],['My Journey','Perjalanan Saya'],['Journey','Perjalanan'],['Contributions','Sumbangan'],['Evidence','Bukti'],
['Let’s Collaborate ↗','Mari Berkolaborasi ↗'],['Collaborate','Kolaborasi'],['DH13 Synthesis','Sintesis DH13'],['Menu','Menu'],
['Pause motion','Henti animasi'],['Resume motion','Sambung animasi'],['Show working notes','Papar nota kerja'],['Hide working notes','Sembunyi nota kerja'],
['Add / replace photos','Tambah / tukar foto'],['Finish photo editing','Selesai sunting foto'],['Export photo pack','Eksport pek foto'],['Import photo pack','Import pek foto'],['Photo guide','Panduan foto'],
['Lecturer · Trainer · Digital learning creator','Pensyarah · Jurulatih · Pencipta pembelajaran digital'],
['Explore contribution ↗','Teroka sumbangan ↗'],['Read context →','Baca konteks →'],['Source ↗','Sumber ↗'],['Close ×','Tutup ×'],
/* domain labels */
['Teaching & learning','Pengajaran & pembelajaran'],['Digital innovation','Inovasi digital'],['Research & scholarship','Penyelidikan & keilmuan'],
['Leadership & service','Kepimpinan & perkhidmatan'],['Training & sharing','Latihan & perkongsian'],['Collaboration & community','Kolaborasi & komuniti'],
['All contributions','Semua sumbangan'],['Teaching & curriculum','Pengajaran & kurikulum'],['National contribution','Sumbangan kebangsaan'],
['Speaking & training','Penceramah & latihan'],['Research & innovation','Penyelidikan & inovasi'],['Community','Komuniti'],
/* ---------- home ---------- */
['LECTURER · TRAINER · LEARNING CREATOR','PENSYARAH · JURULATIH · PENCIPTA PEMBELAJARAN'],
['Learning, with purpose. Growing, through practice.','Belajar,<br>dengan <em>tujuan.</em><br>Berkembang,<br>melalui amalan.'],
['I connect English language teaching, educator development and digital learning. This is the story of the people, ideas and responsibilities that shape my work.','Saya menghubungkan pengajaran Bahasa Inggeris, pembangunan pendidik dan pembelajaran digital. Inilah kisah insan, idea dan tanggungjawab yang membentuk kerja saya.'],
['Explore my journey ↗','Teroka perjalanan saya ↗'],['The educator behind the work →','Pendidik di sebalik kerja →'],
['Julie at work · Thunkable workshop, 2023','Julie bertugas · Bengkel Thunkable, 2023'],
['THE JOURNEY FORWARD / 2023—PRESENT','PERJALANAN KE HADAPAN / 2023—KINI'],
['Teach. Create. Share.','Ajar.<br>Cipta.<br>Kongsi.'],['A PRACTICE THAT KEEPS EVOLVING','AMALAN YANG TERUS BERKEMBANG'],
['ENGLISH LANGUAGE & DIGITAL LEARNING','BAHASA INGGERIS & PEMBELAJARAN DIGITAL'],['2023 → PRESENT','2023 → KINI'],
['MY PROFESSIONAL JOURNEY','PERJALANAN PROFESIONAL SAYA'],
['Every chapter adds a new perspective.','Setiap bab menambah<br>perspektif baharu.'],
['A journey through shared expertise, wider responsibility and connected contribution.','Perjalanan melalui perkongsian kepakaran, tanggungjawab yang lebih luas dan sumbangan yang saling berkait.'],
['Four chapters. A continuing practice.','Empat bab. Satu amalan berterusan.'],
['Share','Kongsi'],['Step Up','Melangkah'],['Expand','Berkembang'],['Converge & Build','Satukan & Bina'],
['From creating to enabling others','Daripada mencipta kepada memperkasa orang lain'],['Progression through responsibility','Kemajuan melalui tanggungjawab'],
['Learning spaces and professional networks','Ruang pembelajaran dan rangkaian profesional'],['Teaching, leadership and learning innovation','Pengajaran, kepimpinan dan inovasi pembelajaran'],
['SELECTED STORIES','KISAH TERPILIH'],['The work is human.','Kerja ini tentang insan.'],['Explore all contributions ↗','Teroka semua sumbangan ↗'],
['THE VISUAL STORY','KISAH VISUAL'],['People. Practice. Possibility.','Insan. Amalan. Kemungkinan.'],
['A visual record of the people, places and learning behind the work.','Rakaman visual insan, tempat dan pembelajaran di sebalik kerja ini.'],
['THE THREAD THROUGH IT ALL','BENANG YANG MENGHUBUNGKAN SEMUANYA'],['My starting point is always learning.','Titik mula saya<br>sentiasa pembelajaran.'],
['Whether I am teaching English, facilitating a workshop, building a digital resource or serving on a committee, I begin with a practical question: how can this work support people?','Sama ada mengajar Bahasa Inggeris, memudah cara bengkel, membina sumber digital atau berkhidmat dalam jawatankuasa, saya bermula dengan satu soalan praktikal: bagaimana kerja ini dapat membantu orang lain?'],
['Read my approach →','Baca pendekatan saya →'],['LET’S COLLABORATE','MARI BERKOLABORASI'],
['Good learning begins with a conversation.','Pembelajaran yang baik<br>bermula dengan perbualan.'],['Start a conversation ↗','Mulakan perbualan ↗'],
/* ---------- about ---------- */
['ABOUT / JULIE MARLINA BINTI HASAN','TENTANG / JULIE MARLINA BINTI HASAN'],['I teach. I create. I share.','Saya mengajar.<br><span>Saya mencipta.</span><br>Saya berkongsi.'],
['A lecturer and freelance trainer whose work connects language, learning design and educator development.','Pensyarah dan jurulatih bebas yang menghubungkan bahasa, reka bentuk pembelajaran dan pembangunan pendidik.'],
['Authentic workshop photograph · 2023','Foto bengkel sebenar · 2023'],['The educator behind the work.','Pendidik di sebalik<br>kerja ini.'],
['TEACHING PHILOSOPHY','FALSAFAH PENGAJARAN'],['Make learning relevant. Make it active.','Jadikan pembelajaran relevan.<br>Jadikan ia aktif.'],
['I connect language learning with situations students recognise: seeking work, making enquiries, presenting ideas and responding to workplace needs.','Saya mengaitkan pembelajaran bahasa dengan situasi yang dikenali pelajar: mencari kerja, membuat pertanyaan, membentangkan idea dan memenuhi keperluan tempat kerja.'],
['I use discussion, practice, reflection and digital resources to help learners participate with purpose. Technology earns its place when it supports that learning.','Saya menggunakan perbincangan, latihan, refleksi dan sumber digital untuk membantu pelajar mengambil bahagian dengan bermakna. Teknologi digunakan apabila ia benar-benar menyokong pembelajaran.'],
['Expertise & professional practice.','Kepakaran &<br>amalan profesional.'],
['Language teaching','Pengajaran bahasa'],['Educator development','Pembangunan pendidik'],['Learning design','Reka bentuk pembelajaran'],
['Institutional contribution','Sumbangan institusi'],['Professional accreditation','Akreditasi profesional'],
['HRD Corp Accredited Trainer; source certificate available in Evidence.','Jurulatih Bertauliah HRD Corp; sijil sumber tersedia di bahagian Bukti.'],
['View professional evidence ↗','Lihat bukti profesional ↗'],['The person behind the practice.','Insan di sebalik amalan.'],
['Hands-on workshop participants · 2023','Peserta bengkel secara hands-on · 2023'],
/* ---------- journey ---------- */
['MY JOURNEY / 2023—PRESENT','PERJALANAN SAYA / 2023—KINI'],['Not just a timeline. A story of growth.','Bukan sekadar garis masa.<br><em>Kisah pertumbuhan.</em>'],
['Each year opens a different chapter of my practice. Follow the shift from sharing expertise to broader responsibility, professional connections and learning innovation.','Setiap tahun membuka bab baharu dalam amalan saya. Ikuti peralihan daripada berkongsi kepakaran kepada tanggungjawab yang lebih luas, jaringan profesional dan inovasi pembelajaran.'],
['SHARE → STEP UP → EXPAND → CONVERGE & BUILD','KONGSI → MELANGKAH → BERKEMBANG → SATUKAN & BINA'],
['View the DH13 evidence synthesis ↗','Lihat sintesis bukti DH13 ↗'],['A journey, in moments.','Perjalanan, dalam detik-detik.'],
['MY JOURNEY','Perjalanan Saya'],['2023 · SHARE','2023 · KONGSI'],['2024 · STEP UP','2024 · MELANGKAH'],['2025 · EXPAND','2025 · BERKEMBANG'],['2026 · CONVERGE & BUILD','2026 · SATUKAN & BINA'],
['Practice becomes shared possibility.','Amalan menjadi<br><em>kemungkinan bersama.</em>'],
['The work began to reach beyond my own classroom. I trained colleagues, facilitated learning and helped turn teaching practice into resources others could use.','Kerja saya mula menjangkau di luar bilik darjah sendiri. Saya melatih rakan sekerja, memudah cara pembelajaran dan membantu menjadikan amalan pengajaran sebagai sumber yang boleh digunakan orang lain.'],
['From creating to enabling others','Daripada mencipta kepada memperkasa orang lain'],
['Share expertise','Kongsi kepakaran'],['Hands-on Thunkable training gave colleagues a space to explore digital teaching.','Latihan Thunkable secara hands-on memberi rakan sekerja ruang meneroka pengajaran digital.'],
['Build capability','Bina keupayaan'],['Micro-credential development connected workshops, platform review and expert checking.','Pembangunan mikro-kredential menghubungkan bengkel, semakan platform dan semakan pakar.'],
['Document practice','Dokumentasi amalan'],['CAMP21 facilitation and a published community-learning paper extended the story.','Pemudahcaraan CAMP21 dan kertas kerja pembelajaran komuniti yang diterbitkan meluaskan kisah ini.'],
['The year I shared more.','Tahun saya lebih banyak berkongsi.'],['Authentic photographs connect this chapter to the people and learning behind it.','Foto sebenar menghubungkan bab ini dengan insan dan pembelajaran di sebaliknya.'],
['A few stories, in greater focus.','Beberapa kisah,<br>dengan lebih dekat.'],['Inspect the evidence ↗','Semak bukti ↗'],
['THE NEXT CHAPTER','BAB SETERUSNYA'],['Growth carries forward.','Pertumbuhan diteruskan.'],
['The significance of this year becomes clearer in the chapters that follow. The work keeps building on earlier experience.','Makna tahun ini menjadi lebih jelas dalam bab-bab seterusnya. Kerja ini terus dibina atas pengalaman terdahulu.'],
['A new chapter. A wider responsibility.','Bab baharu.<br><em>Tanggungjawab lebih luas.</em>'],
['My DH12 chapter began on 5 February 2024. The year connects that professional milestone with industry exposure, institutional service and external collaboration.','Bab DH12 saya bermula pada 5 Februari 2024. Tahun ini menghubungkan pencapaian profesional itu dengan pendedahan industri, perkhidmatan institusi dan kolaborasi luar.'],
['Begin the next chapter','Memulakan bab seterusnya'],['The appointment milestone anchors the current-grade period of my DH13 journey.','Tarikh pelantikan menjadi asas tempoh gred semasa dalam perjalanan DH13 saya.'],
['Connect with industry','Berhubung dengan industri'],['The Panasonic placement record adds an industry-facing dimension to professional development.','Rekod latihan Panasonic menambah dimensi industri kepada pembangunan profesional.'],
['Contribute more widely','Menyumbang dengan lebih luas'],['Institutional programmes and community appointments sit alongside the teaching practice.','Program institusi dan pelantikan komuniti berjalan seiring amalan pengajaran.'],
['The moments that marked the shift.','Detik-detik yang menandakan peralihan.'],
['New connections. Broader horizons.','Jaringan baharu.<br><em>Ufuk lebih luas.</em>'],
['Professional development took on a wider canvas: evolving teaching spaces, educator sharing and a growing network of contribution. This chapter brings those strands together without making every activity compete for attention.','Pembangunan profesional berkembang lebih luas: ruang pengajaran yang berevolusi, perkongsian pendidik dan rangkaian sumbangan yang semakin besar. Bab ini menyatukan semua aspek tersebut secara tersusun.'],
['Develop learning spaces','Membangunkan ruang pembelajaran'],['TECC belongs within the teaching and learning story, with its programme sources retained.','TECC sebahagian daripada kisah pengajaran dan pembelajaran, dengan sumber program dikekalkan.'],
['Extend professional sharing','Meluaskan perkongsian profesional'],['Training and sharing records trace the year’s wider professional engagement.','Rekod latihan dan perkongsian menjejak penglibatan profesional yang lebih luas sepanjang tahun.'],
['Keep the sources close','Bukti sentiasa dekat'],['Individual roles and outcomes follow the available evidence, rather than assumptions.','Setiap peranan dan hasil berpandukan bukti yang ada, bukan andaian.'],
['A wider world of learning.','Dunia pembelajaran yang lebih luas.'],
['Many strands. One connected practice.','Pelbagai aspek.<br><em>Satu amalan bersepadu.</em>'],
['Teaching, training, digital learning, committee service and community contribution now sit within one professional practice. CAMP21 and Smart DT are part of this story, alongside language teaching, Smart MUET and institutional responsibilities.','Pengajaran, latihan, pembelajaran digital, khidmat jawatankuasa dan sumbangan komuniti kini bersatu dalam satu amalan profesional. CAMP21 dan Smart DT sebahagian daripada kisah ini, bersama pengajaran bahasa, Smart MUET dan tanggungjawab institusi.'],
['Design and share learning','Reka dan kongsi pembelajaran'],['Design Thinking sharing and CAMP21 speaker leadership connect facilitation with practical learning design.','Perkongsian Design Thinking dan kepimpinan penceramah CAMP21 menghubungkan pemudahcaraan dengan reka bentuk pembelajaran praktikal.'],
['Build digital resources','Bina sumber digital'],['Smart MUET Guide V2 connects English support with an evolving research and development journey.','Smart MUET Guide V2 menghubungkan sokongan Bahasa Inggeris dengan perjalanan penyelidikan dan pembangunan yang berterusan.'],
['Serve the wider institution','Berkhidmat untuk institusi'],['APACC, UKKP, curriculum roles and committee appointments form the organisational thread.','APACC, UKKP, peranan kurikulum dan pelantikan jawatankuasa membentuk aspek organisasi.'],
['Where the strands come together.','Di mana semuanya bersatu.'],['The practice continues.','Amalan diteruskan.'],
['The next step is to deepen the connection between professional contribution, usable learning resources and documented outcomes.','Langkah seterusnya ialah mengukuhkan hubungan antara sumbangan profesional, sumber pembelajaran yang boleh digunakan dan hasil yang didokumenkan.'],
['Explore the DH13 synthesis →','Teroka sintesis DH13 →'],
/* ---------- contributions / evidence / DH13 / contact ---------- */
['CONTRIBUTIONS / THE FULL PRACTICE','SUMBANGAN / AMALAN MENYELURUH'],['Work that connects.','Kerja yang<br>menghubungkan.'],
['Browse teaching, innovation, scholarship, leadership, training and community contribution across the years.','Layari sumbangan pengajaran, inovasi, keilmuan, kepimpinan, latihan dan komuniti sepanjang tahun.'],
['IN FOCUS','FOKUS'],['Contributions with a story.','Sumbangan yang bercerita.'],['Three entry points into a wider professional practice.','Tiga pintu masuk ke amalan profesional yang lebih luas.'],
['Browse the complete contribution register · search and filters','Layari daftar sumbangan lengkap · carian dan penapis'],['Search contributions','Cari sumbangan'],
['EVIDENCE / INSPECTABLE SOURCES','BUKTI / SUMBER BOLEH DISEMAK'],['The record behind the work.','Rekod di sebalik kerja.'],
['Six areas. The evidence behind the stories.','Enam bidang. Bukti di sebalik setiap kisah.'],['Open the sources behind this area of practice.','Buka sumber bagi bidang amalan ini.'],
['Search by programme or role. Filter by year, professional domain and source type.','Cari mengikut program atau peranan. Tapis mengikut tahun, domain profesional dan jenis sumber.'],
['Search and inspect the complete evidence register','Cari dan semak daftar bukti lengkap'],['Open evidence cross-reference sheet ↗','Buka helaian rujukan silang bukti ↗'],['DH13 synthesis →','Sintesis DH13 →'],
['Search','Cari'],['Year','Tahun'],['Domain','Domain'],['Evidence type','Jenis bukti'],['All years','Semua tahun'],['All six domains','Semua enam domain'],['All source types','Semua jenis sumber'],
['Appointment / nomination','Pelantikan / pencalonan'],['Certificate / recognition','Sijil / pengiktirafan'],['Report / publication / output','Laporan / penerbitan / hasil'],['Planning / roadmap','Perancangan / pelan hala tuju'],['Supporting source','Sumber sokongan'],
['DH13 / ASSESSOR CROSS-REFERENCES','DH13 / RUJUKAN SILANG PENILAI'],['The journey. The evidence.','Perjalanan.<br>Bukti.'],
['A synthesis of contribution, supporting records and remaining validation needs.','Sintesis sumbangan, rekod sokongan dan keperluan validasi yang masih ada.'],
['Current-grade evidence begins on 5 February 2024. Earlier chapters show professional progression. A confirmed role does not automatically establish acceptance under a promotion criterion.','Bukti gred semasa bermula pada 5 Februari 2024. Bab-bab terdahulu menunjukkan perkembangan profesional. Peranan yang disahkan tidak secara automatik diterima di bawah sesuatu kriteria pemangkuan.'],
['Open the live DH13 tracker ↗','Buka penjejak DH13 ↗'],['Inspect the DH13 contribution and criteria map','Semak peta sumbangan dan kriteria DH13'],
['Tracker area','Bidang penjejak'],['Supported contribution','Sumbangan disokong'],['Evidence & cross-reference','Bukti & rujukan silang'],['Remaining work','Tindakan susulan'],
['Inspect contribution ↗','Semak sumbangan ↗'],
['Evidence counts and formal completion status follow the live Google Sheet. This portfolio does not independently award promotion points.','Jumlah bukti dan status rasmi mengikut Google Sheet terkini. Portfolio ini tidak memberikan markah pemangkuan secara sendiri.'],
['Let’s make learning matter.','Jadikan<br><span>pembelajaran<br>bermakna.</span>'],
['For educator training, digital learning collaboration and professional sharing.','Untuk latihan pendidik, kolaborasi pembelajaran digital dan perkongsian profesional.'],
['Workshop facilitation · archive photograph','Pemudahcaraan bengkel · foto arkib'],['Start with a conversation.','Mulakan dengan<br>perbualan.'],
['Share your audience, learning needs and the kind of collaboration you have in mind.','Kongsikan sasaran peserta, keperluan pembelajaran dan bentuk kolaborasi yang anda rancang.'],
['Email Julie ↗','E-mel Julie ↗'],['Educator workshops','Bengkel pendidik'],['Language learning','Pembelajaran bahasa'],['Professional collaboration','Kolaborasi profesional'],
['Digital teaching, Design Thinking and practical learning-resource development.','Pengajaran digital, Design Thinking dan pembangunan sumber pembelajaran praktikal.'],
['English communication and contextual learning experiences.','Komunikasi Bahasa Inggeris dan pengalaman pembelajaran kontekstual.'],
['Teaching innovation, programme contribution and evidence-based development.','Inovasi pengajaran, sumbangan program dan pembangunan berasaskan bukti.'],
['Spaces for collaboration.','Ruang untuk kolaborasi.'],
['← All contributions','← Semua sumbangan'],['MY ROLE','PERANAN SAYA'],['WHAT I CONTRIBUTED / SOURCE CONTEXT','SUMBANGAN SAYA / KONTEKS SUMBER'],['The work in context.','Kerja dalam konteks.'],
['PHOTO GALLERY / SOURCE VISUALS','GALERI FOTO / VISUAL SUMBER'],['From the programme.','Dari program.'],['A programme, in moments.','Program, dalam detik-detik.'],
['OUTPUTS & DOCUMENTED OUTCOMES','HASIL & DAPATAN DIDOKUMENKAN'],['What the record supports.','Apa yang disokong<br>oleh rekod.'],
['Measured learning gains, completed KPI targets and promotion eligibility are presented only when supported by separate evidence.','Peningkatan pembelajaran, pencapaian KPI dan kelayakan pemangkuan hanya dinyatakan apabila disokong oleh bukti berasingan.'],
['EVIDENCE & CROSS-REFERENCES','BUKTI & RUJUKAN SILANG'],['Follow the source.','Ikuti sumber.'],['Open primary evidence ↗','Buka bukti utama ↗'],
['Google Sheet evidence map ↗','Peta bukti Google Sheet ↗'],['Portfolio evidence archive →','Arkib bukti portfolio →'],['REFLECTION','REFLEKSI'],['The practice continues.','Amalan diteruskan.'],
['Explore another contribution →','Teroka sumbangan lain →'],
['For assessors: DH13 Folio →','Untuk penilai: Folio DH13 →'],['Open the DH13 Folio ↗','Buka Folio DH13 ↗'],['Open the DH13 Folio →','Buka Folio DH13 →'],
['Five criteria. The evidence behind each one.','Lima kriteria. Bukti bagi setiap satu.'],['Open the evidence for this criterion.','Buka bukti bagi kriteria ini.'],
['Criterion','Kriteria'],['All five criteria','Semua lima kriteria'],['Search by programme or role. Filter by year, promotion criterion and evidence type.','Cari mengikut program atau peranan. Tapis mengikut tahun, kriteria pemangkuan dan jenis bukti.'],
['See this criterion in the DH13 Folio ↗','Lihat kriteria ini dalam Folio DH13 ↗'],['Verified record','Rekod disahkan'],['Contribution certificate','Sijil penghargaan'],['Appointment','Pelantikan'],['Confirmation letter','Surat pengesahan'],
['Confirmed in grade','Disahkan dalam gred'],['The substantive (hakiki) DH12 appointment on 5 February 2025 confirmed my current grade.','Pelantikan hakiki DH12 pada 5 Februari 2025 mengesahkan gred semasa saya.'],
['A two-day training programme for Panasonic System Networks added an industry-facing dimension to my work.','Program latihan dua hari untuk Panasonic System Networks menambah dimensi industri kepada kerja saya.'],
['Every item links to its original evidence. Full records are in the Evidence archive.','Setiap item disertakan pautan kepada bukti asal. Rekod penuh tersedia dalam arkib Bukti.'],['Evidence archive ↗','Arkib bukti ↗'],
['This contribution places professional practice in a wider institutional, community and national context.','Sumbangan ini meletakkan amalan profesional dalam konteks institusi, komuniti dan kebangsaan yang lebih luas.'],
['This contribution connects teaching responsibilities with the learning experience I design for students.','Sumbangan ini menghubungkan tanggungjawab pengajaran dengan pengalaman pembelajaran yang saya reka untuk pelajar.'],
['This responsibility shows the leadership work that supports programmes, colleagues and institutional practice.','Tanggungjawab ini menunjukkan kerja kepimpinan yang menyokong program, rakan sekerja dan amalan institusi.'],
['This record marks a step in my continuing professional development.','Rekod ini menandakan satu langkah dalam pembangunan profesional saya yang berterusan.'],
['This contribution connects innovation and research with everyday teaching practice.','Sumbangan ini menghubungkan inovasi dan penyelidikan dengan amalan pengajaran harian.'],
['Five chapters','Lima bab'],
['Teaching spaces at PPD evolved, connecting classroom practice with smarter, more digital learning environments.','Ruang pengajaran di PPD berevolusi, menghubungkan amalan bilik darjah dengan persekitaran pembelajaran yang lebih pintar dan digital.'],
['Workshops and sharing sessions took my practice to wider groups of educators and students.','Bengkel dan sesi perkongsian membawa amalan saya kepada lebih ramai pendidik dan pelajar.'],
['Professional development took on a wider canvas: evolving teaching spaces, educator sharing and a growing network of contribution. This chapter brings those strands together.','Pembangunan profesional berkembang lebih luas: ruang pengajaran yang berevolusi, perkongsian pendidik dan rangkaian sumbangan yang semakin besar. Bab ini menyatukan semua aspek tersebut.'],
['Lampiran 1A-2: leadership towards the Strategic Plan, research and publication committees, academic coordination, coaching and personal conduct. Each item is mapped to my SKU 2026.','Lampiran 1A-2: kepimpinan ke arah Pelan Strategik, jawatankuasa penyelidikan dan penerbitan, penyelarasan akademik, coaching dan keperibadian. Setiap item dipetakan kepada SKU 2026 saya.'],
['of expertise score at DH12','daripada markah kesepakaran pada DH12'],['Secretary, APACC Criterion C7','Setiausaha Kriteria C7 APACC'],
['Item 1 · SKU 1.3 · Feb 2026 · Institutional','Item 1 · SKU 1.3 · Feb 2026 · Institusi'],['Item 1 · PPD Strategic Management · Mar 2026 · Institutional','Item 1 · Pengurusan Strategik PPD · Mac 2026 · Institusi'],
['Lead researcher, Smart MUET Guide V2','Ketua Penyelidik, Smart MUET Guide V2'],['Item 2 · SKU 2.2 · Sep 2026 · Departmental','Item 2 · SKU 2.2 · Sep 2026 · Jabatan'],
['Committee member, JPPKK language review','AJK Jawatankuasa Semakan Bahasa JPPKK'],['Item 3 · Engineering Science Vol. II · Dec 2025 · National','Item 3 · Engineering Science Jilid II · Dis 2025 · Kebangsaan'],
['Head, JPA eLearning Committee','Ketua Jawatankuasa e-Pembelajaran JPA'],['Item 4a · SKU 2.1 · 2026 · Departmental','Item 4a · SKU 2.1 · 2026 · Jabatan'],
['Item 4a · SKU 3.4 · Apr 2026 · Institutional','Item 4a · SKU 3.4 · Apr 2026 · Institusi'],
['Coaching: 5 coachees, 15 sessions (eSiS)','Coaching: 5 coachee, 15 sesi (eSiS)'],['Item 6 · SKU 4.2 · compulsory for DH12','Item 6 · SKU 4.2 · wajib bagi DH12'],
['Item 3 · Language specialism · Dec 2025 · National','Item 3 · Bidang semakan bahasa · Dis 2025 · Kebangsaan'],
/* ---------- FOLIO DH13 page ---------- */
['Folio DH13','Folio DH13'],['5 Criteria ↓','5 Kriteria ↓'],['Promotion Folio · DH12 → DH13 · 2027','Folio Pemangkuan · DH12 → DH13 · 2027'],
['Senior Lecturer, English Language Unit, General Studies Department, Politeknik Port Dickson. Educator, trainer and digital learning builder.','Pensyarah Kanan, Unit Bahasa Inggeris, Jabatan Pengajian Am, Politeknik Port Dickson. Pendidik, jurulatih dan pembina pembelajaran digital.'],
['Category I(a)','Kategori I(a)'],['DH12 since 05.02.2024','DH12 sejak 05.02.2024'],['Contents','Kandungan'],['Scroll slowly to explore','Tatal perlahan untuk meneroka'],
['At a glance','Fakta Ringkas'],['00 · At a glance','00 · Fakta Ringkas'],['Me, at a glance.','Sekilas<br>tentang saya.'],
['Key figures and achievements, each backed by evidence records in this portfolio.','Angka dan pencapaian utama, setiap satu disokong rekod bukti dalam portfolio ini.'],
['Years in education','Tahun dalam pendidikan'],['Communicative English, MUET preparation and educator development.','Communicative English, persediaan MUET dan pembangunan pendidik.'],
['Lecturers trained','Pensyarah dilatih'],['Master Trainer, PPD Micro-Credential Platform, 2023.','Master Trainer, Platform Micro-Credential PPD, 2023.'],
['Course platforms','Platform kursus'],['Developed with expert panels, 2023.','Dibangunkan bersama panel pakar, 2023.'],
['KAFA teachers trained','Guru KAFA dilatih'],['Thunkable app course with JHEAINS, 2023.','Kursus Apps Thunkable bersama JHEAINS, 2023.'],
['International study visits','Lawatan antarabangsa'],['Organiser, CPSC study visits, 2024.','Penganjur, lawatan CPSC, 2024.'],
['Appointments & roles, 2026','Pelantikan & peranan 2026'],['APACC, UKKP, Strategic Management, SOLS–PPD, CAMP21 and more.','APACC, UKKP, Pengurusan Strategik, SOLS–PPD, CAMP21 dan lain-lain.'],
['Published proceedings paper','Kertas prosiding diterbitkan'],['Five major criteria','Lima kriteria utama'],['Evidence that builds the path.','Bukti yang<br>membina laluan.'],
['Organised by the expertise assessment aspects of the PPPT Promotion Guidelines (Candidate Edition, Version 4).','Disusun mengikut aspek penilaian kesepakaran dalam Garis Panduan Pemangkuan Skim PPPT (Edisi Calon, Versi 4).'],
['What is assessed','Apa yang dinilai'],['The path ahead','Laluan seterusnya'],['Teach. Build. Lead. Contribute.','Mengajar. Membina.<br>Memimpin. Menyumbang.'],
['Every item links to its original evidence. The full criteria map is in the DH13 Synthesis.','Setiap item disertakan pautan kepada bukti asal. Pemetaan penuh kriteria tersedia dalam Sintesis DH13.'],
['DH13 Synthesis ↗','Sintesis DH13 ↗'],['Follow my journey →','Ikuti perjalanan saya →'],['· before current grade','· sebelum gred semasa'],
['Teaching & Learning','Pengajaran & Pembelajaran'],['Innovation, Research & Publication','Inovasi, Penyelidikan & Penerbitan'],['Leadership','Kepimpinan'],
['Professional Development','Pembangunan Diri'],['Contribution & Service','Sumbangan'],
['Core Duties · Curriculum & Co-curriculum: teaching quality, course coordination, classroom observation and student supervision.','Teras Utama · Kurikulum & Kokurikulum — kualiti PdP, penyelarasan kursus, pencerapan dan penyeliaan pelajar.'],
['Core Duties · RDCI: teaching innovation, research in the prescribed format, writing and presentations within the current grade.','Teras Utama · RDCI — inovasi PdP, penyelidikan mengikut format, penulisan dan pembentangan dalam gred semasa.'],
['Organisational leadership towards the Strategic Plan, committee work, coaching & mentoring, and personal conduct.','Kepimpinan organisasi ke arah Pelan Strategik, jawatankuasa, coaching & mentoring dan keperibadian.'],
['Mandatory criteria (PPK, CPCM) and electives: professional qualifications, skills certificates and awards.','Kriteria wajib (PPK, CPCM) dan elektif — kelayakan profesional, sijil kemahiran, anugerah.'],
['Service to the institution, department and ministry, and to local communities, external agencies and the nation.','Sumbangan kepada institusi, jabatan, kementerian, komuniti setempat, agensi luar dan negara.'],
['teaching hours a week · Category I(a)','jam PdP seminggu · Kategori I(a)'],['leadership & service records, 2026','rekod kepimpinan & perkhidmatan 2026'],
['HRD Corp valid until','HRD Corp sah hingga'],['levels: institutional · national · international','peringkat: institusi · kebangsaan · antarabangsa'],
['Course Coordinator, DUE50132','Penyelaras Kursus DUE50132'],['TESL Subject Matter Expert Panel','Panel Pakar Bidang TESL'],['Communicative English 2 curriculum','Kurikulum Communicative English 2'],
['Industrial Training Monitoring Lecturer','Pensyarah Pemantau Latihan Industri'],['Session II 2025/2026, Phase 1','Sesi II 2025/2026, Fasa 1'],
['Observation & course CQI records','Rekod pencerapan & CQI kursus'],['Add observation and CQI reports','Tambah laporan pencerapan dan CQI'],
['Project Leader / Principal Research Officer','Ketua Projek / Principal Research Officer'],['JPA Researcher 2026–2027','Penyelidik JPA 2026–2027'],['Departmental researcher appointment','Pelantikan penyelidik jabatan'],
['Head, JPA eLearning','Ketua, JPA eLearning'],['JPA strategic plan 2026','Pelan strategik JPA 2026'],['Data & Information Secretariat (Head)','Sekretariat Data & Maklumat (K)'],
['PPD Strategic Management','Pengurusan Strategik PPD'],['Strategic Deputy Programme Director','Timbalan Pengarah Strategik'],['Head of Speakers, CAMP21','Ketua Penceramah, CAMP21'],
['Synergizing Literacies · 13–16 July','Synergizing Literacies · 13–16 Julai'],['Secretary, UKKP & APACC C7','Setiausaha UKKP & APACC C7'],['Safety & industry–community linkages','Keselamatan & pautan industri–komuniti'],
['Acting appointment, DH48 / DH12','Pemangkuan DH48 / DH12'],['Effective 05.02.2024','Berkuat kuasa 05.02.2024'],
['Skills Enhancement Programme (PPK)','Program Peningkatan Kemahiran (PPK)'],['Add PPK records for the current grade','Tambah rekod PPK gred semasa'],['Add CPCM records for the current grade','Tambah rekod CPCM gred semasa'],
['Organiser, CPSC × TESDA study visit','Penganjur, lawatan CPSC × TESDA'],['International · 17–20 Sep 2024','Antarabangsa · 17–20 Sep 2024'],
['Trainer, Panasonic System Networks','Jurulatih, Panasonic System Networks'],['Analytical & Creative Thinking · 2 days','Analytical & Creative Thinking · 2 hari'],
['Graphic Designer, BIPD micro-credentials','Pereka Grafik, Mikro-kredential BIPD'],['JPPKK · national level','JPPKK · peringkat kebangsaan'],
['Language Review, Engineering Science','Semakan Bahasa, Engineering Science'],['JPPKK · Volume II','JPPKK · Jilid II'],['Volunteer, CSR Acheh','Sukarelawan, CSR Acheh'],
['Project Leader, Smart MUET V2','Ketua Projek Smart MUET V2'],['CPSC Organiser','Penganjur CPSC'],['Secretary, UKKP','Setiausaha UKKP'],
];
/* patterns for text that contains numbers or years */
const RULES=[
 [/^CHAPTER (\d+) \/ (.+)$/i,(m,n,x)=>`BAB ${n} / ${tr(x)||x}`],
 [/^SELECTED CONTRIBUTIONS \/ (\d{4})$/i,(m,y)=>`SUMBANGAN TERPILIH / ${y}`],
 [/^All (\d{4}) contributions · (\d+) contribution records$/i,(m,y,n)=>`Semua sumbangan ${y} · ${n} rekod`],
 [/^Continue to (\d{4}) →$/i,(m,y)=>`Teruskan ke ${y} →`],
 [/^Explore (\d{4}) chapter →$/i,(m,y)=>`Teroka bab ${y} →`],
 [/^Read the full (\d{4}) story$/i,(m,y)=>`Baca kisah penuh ${y}`],
 [/^CRITERION 0(\d)$/i,(m,n)=>`KRITERIA 0${n}`],
 [/^(\d+) contribution records · some roles await supporting evidence$/i,(m,n)=>`${n} rekod sumbangan · sebahagian peranan menunggu bukti sokongan`],
 [/^(\d+) contribution records$/i,(m,n)=>`${n} rekod sumbangan`],
 [/^(\d+) source records$/i,(m,n)=>`${n} rekod sumber`],
 [/^(.+) \/ (\d{4})$/,(m,x,y)=>{const t=tr(x);return t?`${t} / ${y}`:null}],
 [/^(\d+) \/ THE STORY$/i,(m,n)=>`${n} / KISAH`],
 [/^Criterion (\d) of 5$/i,(m,n)=>`Kriteria ${n} daripada 5`],
];
const PLACEHOLDERS=[['Programme, role or year','Program, peranan atau tahun'],['Programme or role','Program atau peranan'],['Try APACC, secretary or teaching','Cuba APACC, setiausaha atau pengajaran']];

const key=s=>s.replace(/\s+/g,' ').trim().toLowerCase();
const DICT=new Map(PAIRS.map(([en,bm])=>[key(en),bm]));
const PH=new Map(PLACEHOLDERS.map(([en,bm])=>[en,bm]));
function tr(s){return DICT.get(key(s))}
const norm=n=>{let s='';n.childNodes.forEach(c=>{if(c.nodeType===3)s+=c.data;else if(c.nodeName==='BR')s+=' ';else if(c.nodeType===1&&c.nodeName!=='SCRIPT'&&c.nodeName!=='STYLE')s+=norm(c)});return s};
const SEL='h1,h2,h3,h4,p,a,button,summary,small,strong,figcaption,label,b,li,span,option,th,td,div.kicker';
const originals=new Map();
let lang='en';try{lang=localStorage.getItem('jm-lang')||'en'}catch{}

function roots(){const r=[document];for(const id of ['chapter-2025','chapter-2026']){const s=document.getElementById(id)?.shadowRoot;if(s)r.push(s)}return r}
function translateRoot(root){
  root.querySelectorAll('[data-bm]').forEach(el=>{if(!originals.has(el))originals.set(el,el.innerHTML);el.innerHTML=el.dataset.bm});
  root.querySelectorAll(SEL).forEach(el=>{
    if(originals.has(el)||el.closest('[data-i18n-done]'))return;
    if(el.closest('.legacy-chapter,.lang-switch,[data-bm]'))return;
    const text=norm(el).replace(/\s+/g,' ').trim();if(!text||text.length>420)return;
    let out=tr(text);
    if(!out&&el.children.length===0){for(const [re,fn] of RULES){const m=text.match(re);if(m){out=fn(...m);if(out)break}}}
    if(!out)return;
    originals.set(el,el.innerHTML);el.innerHTML=out;el.setAttribute('data-i18n-done','');
  });
  root.querySelectorAll('input[placeholder]').forEach(i=>{const bm=PH.get(i.placeholder);if(bm){i.dataset.phEn=i.placeholder;i.placeholder=bm}});
}
function restore(){
  originals.forEach((html,el)=>{if(el.isConnected){el.innerHTML=html;el.removeAttribute('data-i18n-done')}});originals.clear();
  roots().forEach(r=>r.querySelectorAll('input[data-ph-en]').forEach(i=>{i.placeholder=i.dataset.phEn;delete i.dataset.phEn}));
}
let busy=false;
function apply(){busy=true;observer.disconnect();
  if(lang==='bm')roots().forEach(translateRoot);
  document.documentElement.lang=lang==='bm'?'ms':'en';
  document.querySelectorAll('.lang-switch button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
  roots().forEach(r=>observer.observe(r===document?document.body:r,{childList:true,subtree:true}));busy=false;}
let timer;const observer=new MutationObserver(()=>{if(busy||lang!=='bm')return;clearTimeout(timer);timer=setTimeout(apply,120)});
function setLang(l){if(l===lang)return;lang=l;try{localStorage.setItem('jm-lang',l)}catch{};if(l==='en'){busy=true;restore();busy=false}apply()}

function addSwitch(){
  if(document.querySelector('.lang-switch'))return;
  const css=document.createElement('style');css.textContent=`.lang-switch{display:inline-flex;gap:2px;padding:3px;border-radius:999px;background:#14141A12;margin-left:12px;flex:none}
  .lang-switch button{border:0;background:transparent;font:700 11px 'Poppins',system-ui,sans-serif;letter-spacing:.06em;padding:7px 11px;border-radius:999px;cursor:pointer;color:inherit}
  .lang-switch button[aria-pressed=true]{background:#323EDD;color:#FFCF00}
  .top .lang-switch{background:#ffffff1f}
  .global-nav{justify-content:flex-start!important}.global-nav>nav{margin-left:auto}.global-nav .menu-toggle{margin-left:auto}
  @media(max-width:760px){.lang-switch{margin-left:8px}.lang-switch button{padding:6px 9px}}`;document.head.append(css);
  const w=document.createElement('div');w.className='lang-switch';w.setAttribute('role','group');w.setAttribute('aria-label','Language / Bahasa');
  w.innerHTML='<button type="button" data-lang="en" aria-pressed="true">EN</button><button type="button" data-lang="bm" aria-pressed="false">BM</button>';
  w.addEventListener('click',e=>{const b=e.target.closest('button');if(b)setLang(b.dataset.lang)});
  const host=document.querySelector('.global-nav')||document.querySelector('.top');if(!host)return;
  host.append(w);
}
function start(){addSwitch();apply();addEventListener('hashchange',()=>setTimeout(apply,60))}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(start,0));else setTimeout(start,0);
})();
