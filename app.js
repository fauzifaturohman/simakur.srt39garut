/**
 * ================================================================
 * SISTEM MANAJEMEN KURIKULUM SRT 39 GARUT
 * File: assets/js/app.js
 * ================================================================
 */

// ================================================================
// DATA MASTER — Lengkap dari file yang diupload (75 siswa)
// ================================================================

const defaultData = {
    school: {
        name: "Sekolah Rakyat Terintegrasi 39 Garut",
        npsn_srd: "70058801",
        npsn_srmp: "70058802",
        address: "Jl. Raya Samarang KM 4 Desa Cintarakyat, Kec. Samarang, Garut 44161",
        kepsek: "Andi Yasir Habibi, S.Sos., S.Pd.",
        kepsekNip: "198008292014121002",
        wakakur: "Fauzi Faturohman, S.Pd., Gr.",
        wakasekNip: "199409082025211128",
        moto: "Cerdas Bersama Tumbuh Setara",
        visi: "Mewujudkan Generasi yang Disiplin, Jujur, Mandiri, Tangguh, Religius, dan Mampu Bersaing di Persaingan Global",
        misi: [
            "Menanamkan kedisiplinan dimanapun berada",
            "Menanamkan karakter jujur dalam kehidupan sehari-hari",
            "Menumbuhkan kemandirian dalam berfikir dan berprilaku",
            "Menanamkan karakter tangguh atau tidak mudah menyerah dalam menghadapi permasalahan",
            "Membersamai dalam menumbuhkan ketaatan menjalankan ajaran agama",
            "Memberikan pembekalan ilmu dan keterampilan sebagai bekal untuk bersaing di persaingan global"
        ],
        tahun: "2026/2027",
        luasTanah: "2.613 m²",
        luasBangunan: "1.441 m²",
        statusTanah: "Hibah / BLK",
        tahunBerdiri: "2025"
    },
    // ===== GURU dengan foto profil =====
    teachers: [
        { nip: "198008292014121002", name: "Andi Yasir Habibi, S.Sos., S.Pd.", role: "Kepala Sekolah", classes: "-", photo: "" },
        { nip: "199409082025211128", name: "Fauzi Faturohman, S.Pd., Gr.", role: "Wali Kelas 7B / PPKn", classes: "SRMP-B (7B)", photo: "", isWaliKelas: true, waliKelas: "7B" },
        { nip: "199901222025212077", name: "Maha Ikhlas Sulfitrah, S.Pd., Gr.", role: "Wali Kelas SRD / Guru Kelas", classes: "SRD", photo: "", isWaliKelas: true, waliKelas: "SD" },
        { nip: "199908182025212101", name: "Sarah Nur Faziah, S.Pd., Gr.", role: "Guru TIK", classes: "SRD & SRMP", photo: "" },
        { nip: "200002282025211064", name: "Lufi Feriansyah, S.Pd., Gr.", role: "Guru Matematika", classes: "SRMP", photo: "" },
        { nip: "200003112025212061", name: "Mitha Amalia, S.Pd., Gr.", role: "Guru IPA", classes: "SRMP", photo: "" },
        { nip: "200003282025212060", name: "Meliana Dwi Rahmawati, S.Pd., Gr.", role: "Wali Kelas 7A / B. Inggris", classes: "SRMP-A (7A)", photo: "", isWaliKelas: true, waliKelas: "7A" },
        { nip: "200004272025212059", name: "Youtrin Fadila, S.Pd., Gr.", role: "Guru IPS", classes: "SRMP", photo: "" },
        { nip: "200006022025212083", name: "Navika Putri Dwi Lestari, S.Pd., Gr.", role: "Guru Seni Budaya", classes: "SRD & SRMP", photo: "" },
        { nip: "200009152025211042", name: "Mochamad Hoky Aldiansyah, S.Pd., Gr.", role: "Guru PJOK", classes: "SRD & SRMP", photo: "" },
        { nip: "200102142025212047", name: "Syifa Nurlathifah Al Azmi, S.Pd., Gr.", role: "Guru KKA", classes: "SRD & SRMP", photo: "" },
        { nip: "200109122025212039", name: "Yulistina, S.Pd., Gr.", role: "Guru B. Indonesia", classes: "SRMP", photo: "" }
    ],
    // ===== KALENDER PENDIDIKAN =====
    calendar: [{
        month: "Juli 2026",
        events: [
            { date: "1-30", name: "Libur Semester Genap (Siswa Eksisting)", type: "danger" },
            { date: "2", name: "Rapat Dinas Bulanan", type: "info" },
            { date: "14-31", name: "MPLS (Siswa Baru)", type: "primary" }
        ]
    }, {
        month: "Agustus 2026",
        events: [
            { date: "2", name: "Rapat Dinas Bulanan (Refleksi)", type: "info" },
            { date: "24", name: "Hari Pertama Masuk Sekolah", type: "primary" }
        ]
    }, {
        month: "September 2026",
        events: [
            { date: "2", name: "Rapat Dinas Bulanan (Refleksi)", type: "info" },
            { date: "1-30", name: "Rentang Supervisi II (GTK)", type: "warning" },
            { date: "30", name: "Ulang Tahun SRT 39 Garut (Open House)", type: "primary" }
        ]
    }, {
        month: "Oktober 2026",
        events: [
            { date: "2", name: "Rapat Dinas Bulanan (Refleksi)", type: "info" },
            { date: "1-31", name: "Kegiatan Sumatif", type: "warning" }
        ]
    }, {
        month: "November 2026",
        events: [
            { date: "3", name: "Rapat Dinas Bulanan (Refleksi)", type: "info" },
            { date: "1-30", name: "Class Meeting & Remedial", type: "warning" }
        ]
    }, {
        month: "Desember 2026",
        events: [
            { date: "3", name: "Rapat Dinas Bulanan (Refleksi)", type: "info" },
            { date: "18", name: "Pembagian Raport", type: "success" },
            { date: "27-31", name: "Awal Libur Semester", type: "danger" }
        ]
    }],
    jadwal: [
        { jam: "1", waktu: "08.00 - 08.40", s: ["B. Indonesia", "IPA", "Matematika"], sel: ["PJOK", "PAI", "KKA"], r: ["Matematika", "KKA", "PJOK"], k: ["KKA", "PJOK", "IPS"], jm: "08.00 - 08.35", j: ["IPAS", "IPS", "B. Indonesia"] },
        { jam: "2", waktu: "08.40 - 09.20", s: ["B. Indonesia", "IPA", "Matematika"], sel: ["PJOK", "PAI", "KKA"], r: ["Matematika", "KKA", "PJOK"], k: ["KKA", "PJOK", "IPS"], jm: "08.35 - 09.10", j: ["IPAS", "IPS", "B. Indonesia"] },
        { jam: "3", waktu: "09.20 - 10.00", s: ["B. Indonesia", "IPA", "Matematika"], sel: ["PJOK", "Matematika", "Seni Budaya"], r: ["Matematika", "IPS", "PJOK"], k: ["Matematika", "PJOK", "IPS"], jm: "09.10 - 09.45", j: ["IPAS", "IPS", "B. Indonesia"] },
        { jam: "", waktu: "10.00 - 10.30", isBreak: true },
        { jam: "4", waktu: "10.30 - 11.10", s: ["B. Inggris", "TIK", "IPA"], sel: ["PJOK", "Matematika", "Seni Budaya"], r: ["Pancasila", "Matematika", "B. Inggris"], k: ["Matematika", "IPA", "Matematika"], jm: "10.15 - 10.50", j: ["Prakarya", "B. Inggris", "Pancasila"] },
        { jam: "5", waktu: "11.10 - 11.50", s: ["B. Inggris", "TIK", "IPA"], sel: ["PAI", "Matematika", "Seni Budaya"], r: ["Pancasila", "Matematika", "B. Inggris"], k: ["Matematika", "IPA", "Matematika"], jm: "10.50 - 11.25", j: ["Prakarya", "B. Inggris", "Pancasila"] },
        { jam: "", waktu: "11.50 - 13.00", isBreak: true },
        { jam: "6", waktu: "13.00 - 13.40", s: ["IPAS", "B. Indonesia", "TIK"], sel: ["PAI", "Seni Budaya", "BK"], r: ["TIK", "BK", "B. Indonesia"], k: ["B. Indonesia", "B. Indonesia", "IPA"], jm: "13.15 - 13.50", j: ["Seni Budaya", "Pancasila", "IPS"] },
        { jam: "7", waktu: "13.40 - 14.20", s: ["IPAS", "B. Indonesia", "TIK"], sel: ["Calistung", "Seni Budaya", "PAI"], r: ["TIK", "B. Inggris", "B. Indonesia"], k: ["Pancasila", "B. Indonesia", "IPA"], jm: "13.50 - 14.25", j: ["Seni Budaya", "Pancasila", "B. Inggris"] },
        { jam: "8", waktu: "14.20 - 15.00", s: ["IPAS", "B. Indonesia", "Pancasila"], sel: ["Calistung", "Seni Budaya", "PAI"], r: ["BK", "B. Inggris", "B. Indonesia"], k: ["Pancasila", "B. Indonesia", "IPA"], jm: "14.25 - 15.00", j: ["Seni Budaya", "Pancasila", "B. Inggris"] }
    ],
    petugasPiket: {
        senin: ["Syifa Nurlathifah Al Azmi, S.Pd., Gr.", "Youtrin Fadila, S.Pd., Gr."],
        selasa: ["Maha Ikhlas Sulfitrah, S.Pd., Gr.", "Yulistina, S.Pd., Gr."],
        rabu: ["Navika Putri Dwi Lestari, S.Pd., Gr.", "Mitha Amalia, S.Pd., Gr."],
        kamis: ["Sarah Nur Faziah, S.Pd., Gr.", "Meliana Dwi Rahmawati, S.Pd., Gr."],
        jumat: ["Mochamad Hoky Aldiansyah, S.Pd., Gr.", "Lufi Feriansyah, S.Pd., Gr."],
        kordinator: ["Fauzi Faturohman, S.Pd., Gr."]
    },
    // ===== EKSTRAKURIKULER =====
    ekstra: [{
        waktu: "15.30 - Selesai",
        senin: "OSIS",
        selasa: "Literasi dan Numerasi",
        rabu: "Futsal",
        kamis: "Paskibra",
        jumat: "Hadroh",
        waktu_sabtu: "09.00 - Selesai",
        sabtu: "Pramuka",
        waktu_minggu: "15.30 - Selesai",
        minggu: "Paskibra",
        penanggung: {
            senin: ["Fauzi Faturohman, S.Pd., Gr.", "Meliana Dwi Rahmawati, S.Pd., Gr."],
            selasa: ["Maha Ikhlas Sulfitrah, S.Pd., Gr.", "Lufi Feriansyah, S.Pd., Gr."],
            rabu: ["Mochamad Hoky Aldiansyah, S.Pd., Gr.", "Youtrin Fadila, S.Pd., Gr."],
            kamis: ["Syifa Nurlathifah Al Azmi, S.Pd., Gr.", "Mitha Amalia, S.Pd., Gr."],
            jumat: ["Pelatih Tamu", "Mitha Amalia, S.Pd., Gr."],
            sabtu: ["Rukman", "-"],
            minggu: ["Syifa Nurlathifah Al Azmi, S.Pd., Gr.", "-"]
        }
    }, {
        waktu: "",
        senin: "English Club",
        selasa: "Karya Ilmiah Remaja",
        rabu: "Jurnalistik",
        kamis: "Silat",
        jumat: "UKS",
        waktu_sabtu: "",
        sabtu: "",
        waktu_minggu: "",
        minggu: "",
        penanggung: {
            senin: ["-", "Sarah Nur Fazriah, S.Pd., Gr."],
            selasa: ["-", "-"],
            rabu: ["Yulistina, S.Pd., Gr.", "-"],
            kamis: ["-", "-"],
            jumat: ["-", "-"],
            sabtu: ["-", "-"],
            minggu: ["-", "-"]
        }
    }, {
        waktu: "",
        senin: "-",
        selasa: "Computer Club",
        rabu: "Sahabat Literasi",
        kamis: "-",
        jumat: "-",
        waktu_sabtu: "",
        sabtu: "",
        waktu_minggu: "",
        minggu: "",
        penanggung: {
            senin: ["-", "-"],
            selasa: ["-", "-"],
            rabu: ["-", "-"],
            kamis: ["-", "-"],
            jumat: ["-", "-"],
            sabtu: ["-", "-"],
            minggu: ["-", "-"]
        }
    }],
    // ===== 75 SISWA =====
    students: [
        { id: 1, name: "ADE MUSTOPA", nisn: "3139453861", school: "SRDT 39 Garut", level: "SD", gender: "L", rombel: "SD", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 2, name: "AGUS RAMDANI", nisn: "0104915906", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7B", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 3, name: "AHMAD PADILAH", nisn: "3137836817", school: "SRDT 39 Garut", level: "SD", gender: "L", rombel: "SD", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 4, name: "AI SITI NUROHMAH", nisn: "3158260386", school: "SRDT 39 Garut", level: "SD", gender: "P", rombel: "SD", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 5, name: "ANDIKA NUROHMAN", nisn: "0141419382", school: "SRDT 39 Garut", level: "SD", gender: "L", rombel: "SD", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 6, name: "ANISA SAPUTRI", nisn: "0123595071", school: "SRMPT 39 Garut", level: "SMP", gender: "P", rombel: "7A", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 7, name: "ARDIANSYAH SAPUTRA", nisn: "3162522983", school: "SRDT 39 Garut", level: "SD", gender: "L", rombel: "SD", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 8, name: "ARIF FIRMANSYAH", nisn: "3120690349", school: "SRDT 39 Garut", level: "SD", gender: "L", rombel: "SD", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 9, name: "ARMAN MAULANA", nisn: "3132152714", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7A", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 10, name: "DE PAHRI PUTRA RAMADAN", nisn: "3111636292", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7B", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 11, name: "DERI MUHAMMAD", nisn: "3122527422", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7B", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 12, name: "DEWANGGA NUGRAHA", nisn: "3124835417", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7B", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 13, name: "DEWI TANIA", nisn: "3124764226", school: "SRDT 39 Garut", level: "SD", gender: "P", rombel: "SD", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 14, name: "ELSA SABILA NURHALIMAH", nisn: "3130228888", school: "SRMPT 39 Garut", level: "SMP", gender: "P", rombel: "7B", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 15, name: "EVA FAUZIAH", nisn: "0094884752", school: "SRMPT 39 Garut", level: "SMP", gender: "P", rombel: "7B", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 16, name: "FANESA ANASTASYA", nisn: "0106857181", school: "SRMPT 39 Garut", level: "SMP", gender: "P", rombel: "7B", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 17, name: "FEBI", nisn: "0129226857", school: "SRDT 39 Garut", level: "SD", gender: "L", rombel: "SD", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 18, name: "HISMA HOLIPATUL PADILAH", nisn: "0113316745", school: "SRMPT 39 Garut", level: "SMP", gender: "P", rombel: "7A", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 19, name: "IHSAN MAULANA", nisn: "3126090468", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7A", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 20, name: "INDRIA DELIA PUTRI", nisn: "97311050", school: "SRMPT 39 Garut", level: "SMP", gender: "P", rombel: "7B", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 21, name: "IRNA RAODOTUL ZANAH", nisn: "3133143373", school: "SRMPT 39 Garut", level: "SMP", gender: "P", rombel: "7B", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 22, name: "IRSAL KHAERUNA", nisn: "3146716444", school: "SRDT 39 Garut", level: "SD", gender: "L", rombel: "SD", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 23, name: "LESTI JULIANTI", nisn: "3128365677", school: "SRMPT 39 Garut", level: "SMP", gender: "P", rombel: "7B", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 24, name: "M RIZKY MAULANA", nisn: "3159241108", school: "SRDT 39 Garut", level: "SD", gender: "L", rombel: "SD", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 25, name: "M. FATIR", nisn: "0135531105", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7A", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 26, name: "MOCH AKBAR TRI HERMAWAN", nisn: "0107125765", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7B", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 27, name: "MOH PAISAL APRILIANSAH", nisn: "0125649737", school: "SRDT 39 Garut", level: "SD", gender: "L", rombel: "SD", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 28, name: "MUHAMAD FATTAN SAPUTRA", nisn: "3162907074", school: "SRDT 39 Garut", level: "SD", gender: "L", rombel: "SD", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 29, name: "MUHAMAD HANIF ALIYUDIN", nisn: "0104784680", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7B", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 30, name: "MUHAMAD HASANUDIN", nisn: "0113191027", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7B", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 31, name: "MUHAMAD REHAN NURUL JANAH", nisn: "0111987988", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7A", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 32, name: "MUHAMAD RISKI ABDULLOH", nisn: "3161059263", school: "SRDT 39 Garut", level: "SD", gender: "L", rombel: "SD", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 33, name: "MUHAMAD RIVAL ALFARIZI", nisn: "3169279715", school: "SRDT 39 Garut", level: "SD", gender: "L", rombel: "SD", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 34, name: "MUHAMAD SAMIN NUGRAHA", nisn: "0119673298", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7B", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 35, name: "MUHAMAD SANDI", nisn: "0115109325", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7B", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 36, name: "MUHAMMAD IDRUS PAHMI JAHARSAH", nisn: "0115015547", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7B", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 37, name: "MUHAMMAD RAEHAN", nisn: "3094108589", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7B", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 38, name: "MUHAMMAD ZAKI ARIPIN", nisn: "0127300770", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7A", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 39, name: "MUSNAN FIRDAUS", nisn: "3108593390", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7B", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 40, name: "NAZHAN", nisn: "0102332909", school: "SRDT 39 Garut", level: "SD", gender: "L", rombel: "SD", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 41, name: "NOVI RAHMADANI", nisn: "0127825608", school: "SRMPT 39 Garut", level: "SMP", gender: "P", rombel: "7A", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 42, name: "PARHAN HERIYANSAH", nisn: "3137252816", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7A", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 43, name: "PERDIANSAH PRATAMA", nisn: "0128988677", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7B", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 44, name: "PIRMANSYAH RAMDANI", nisn: "3108187441", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7A", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 45, name: "PONI YULIA", nisn: "0124893928", school: "SRDT 39 Garut", level: "SD", gender: "P", rombel: "SD", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 46, name: "RAIHAN SAPUTRA", nisn: "0119552685", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7A", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 47, name: "RAISA AURELIA PUTRI", nisn: "3142169447", school: "SRDT 39 Garut", level: "SD", gender: "P", rombel: "SD", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 48, name: "RAISYA NURPADILAH", nisn: "0104449370", school: "SRMPT 39 Garut", level: "SMP", gender: "P", rombel: "7A", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 49, name: "RANI", nisn: "3128636723", school: "SRMPT 39 Garut", level: "SMP", gender: "P", rombel: "7A", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 50, name: "RAYAA RAFSANJANI", nisn: "3151327926", school: "SRDT 39 Garut", level: "SD", gender: "L", rombel: "SD", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 51, name: "REGI", nisn: "0092815396", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7A", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 52, name: "REHAN", nisn: "0098060608", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7B", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 53, name: "REZA HANAFIYAH", nisn: "3129196277", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7A", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 54, name: "RINA", nisn: "3129604730", school: "SRMPT 39 Garut", level: "SMP", gender: "P", rombel: "7A", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 55, name: "RISKY", nisn: "0103304248", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7B", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 56, name: "RIYAD FADILAH", nisn: "0131133087", school: "SRDT 39 Garut", level: "SD", gender: "L", rombel: "SD", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 57, name: "RIYAN AGUNG FAUZI", nisn: "3129425558", school: "SRDT 39 Garut", level: "SD", gender: "L", rombel: "SD", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 58, name: "RIZKI MIRAJ NAWAWI", nisn: "3120958649", school: "SRDT 39 Garut", level: "SD", gender: "L", rombel: "SD", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 59, name: "SABIT MAULANA", nisn: "3117684281", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7A", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 60, name: "SALMAN SAEPUL BAGRI", nisn: "0115635878", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7B", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 61, name: "SALSA BILA", nisn: "0124232598", school: "SRMPT 39 Garut", level: "SMP", gender: "P", rombel: "7A", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 62, name: "SALWA AULIA ZAKIAWAN", nisn: "0109385868", school: "SRMPT 39 Garut", level: "SMP", gender: "P", rombel: "7B", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 63, name: "SELLI KHAIRUNNISA", nisn: "3124008773", school: "SRMPT 39 Garut", level: "SMP", gender: "P", rombel: "7A", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 64, name: "SIFA NURAINI", nisn: "0103955647", school: "SRMPT 39 Garut", level: "SMP", gender: "P", rombel: "7A", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 65, name: "SITI FADILAH", nisn: "3154325333", school: "SRDT 39 Garut", level: "SD", gender: "P", rombel: "SD", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 66, name: "SITIMASITOH", nisn: "3125474904", school: "SRMPT 39 Garut", level: "SMP", gender: "P", rombel: "7A", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 67, name: "SITIPASWA", nisn: "3131493765", school: "SRMPT 39 Garut", level: "SMP", gender: "P", rombel: "7A", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 68, name: "SRIMULYANI", nisn: "0108334564", school: "SRMPT 39 Garut", level: "SMP", gender: "P", rombel: "7B", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 69, name: "SUDIRMAN", nisn: "0119440168", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7A", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 70, name: "SYIFANURHAYATI", nisn: "0103927661", school: "SRMPT 39 Garut", level: "SMP", gender: "P", rombel: "7B", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 71, name: "YAN YAN ABDUL HADI", nisn: "0106183939", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7A", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 72, name: "YANA MULYANA", nisn: "3138754482", school: "SRDT 39 Garut", level: "SD", gender: "L", rombel: "SD", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 73, name: "YUSUP AWALUDIN", nisn: "0114870689", school: "SRMPT 39 Garut", level: "SMP", gender: "L", rombel: "7A", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 74, name: "ZAKI MUHAMAD KUSUMAH", nisn: "3133946425", school: "SRDT 39 Garut", level: "SD", gender: "L", rombel: "SD", grades: {}, promotionStatus: "Belum Ditentukan" },
        { id: 75, name: "ZIDAN ABDUL JAILANI", nisn: "3169526039", school: "SRDT 39 Garut", level: "SD", gender: "L", rombel: "SD", grades: {}, promotionStatus: "Belum Ditentukan" }
    ],
    adminLinks: [
        { id: Date.now(), nip: "199409082025211128", name: "Fauzi Faturohman", category: "Modul Ajar", title: "Modul Ajar PPKn Kelas VII Ganjil", link: "https://drive.google.com/drive/folders/example1", date: new Date().toLocaleDateString('id-ID') },
        { id: Date.now() + 1, nip: "199908182025212101", name: "Sarah Nur Faziah", category: "Modul Ajar", title: "Modul Ajar TIK Kelas VII Ganjil", link: "https://drive.google.com/drive/folders/example2", date: new Date().toLocaleDateString('id-ID') }
    ]
};

// ================================================================
// STATE
// ================================================================

let appState;
try {
    const saved = localStorage.getItem('srt39_data');
    appState = saved ? JSON.parse(saved) : defaultData;
} catch (e) { appState = defaultData; }

let currentUser;
try {
    currentUser = JSON.parse(localStorage.getItem('srt39_user'));
} catch (e) { currentUser = null; }

function saveState() {
    localStorage.setItem('srt39_data', JSON.stringify(appState));
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    const bg = type === 'success' ? 'bg-emerald-500' : type === 'error' ? 'bg-rose-500' : 'bg-indigo-500';
    const icon = type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle';
    toast.className = `flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-lg text-white font-medium ${bg} fade-in text-sm`;
    toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(8px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('-translate-x-full');
}

// ================================================================
// AUTH — dengan login Wali Kelas
// ================================================================

function initAuth() {
    if (currentUser) {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('app-wrapper').classList.remove('hidden');
        const avatar = document.getElementById('user-avatar');
        const nameElem = document.getElementById('user-name');
        const roleElem = document.getElementById('user-role');
        if (avatar) avatar.src = currentUser.photo || `https://placehold.co/150x150/1e40af/ffffff?text=${currentUser.name.split(' ').map(n=>n[0]).join('').toUpperCase()}`;
        if (nameElem) nameElem.innerText = currentUser.name.split(',')[0];
        if (roleElem) {
            let roleText = currentUser.role;
            if (currentUser.isWaliKelas) {
                roleText += ` 🏫 Wali Kelas ${currentUser.waliKelas}`;
            }
            roleElem.innerText = roleText;
        }
        router();
    } else {
        document.getElementById('login-screen').classList.remove('hidden');
        document.getElementById('app-wrapper').classList.add('hidden');
    }
}

function handleLogin(e) {
    e.preventDefault();
    const nip = document.getElementById('login-nip').value.trim();
    const pass = document.getElementById('login-pass').value;

    let user = appState.teachers.find(t => t.nip === nip);
    if (!user) {
        const lowerNip = nip.toLowerCase();
        if (lowerNip.includes('maha') || lowerNip === 'srd') {
            user = appState.teachers.find(t => t.isWaliKelas && t.waliKelas === 'SD');
        } else if (lowerNip.includes('meliana') || lowerNip === '7a') {
            user = appState.teachers.find(t => t.isWaliKelas && t.waliKelas === '7A');
        } else if (lowerNip.includes('fauzi') || lowerNip === '7b') {
            user = appState.teachers.find(t => t.isWaliKelas && t.waliKelas === '7B');
        }
    }
    if (!user && nip === 'kepsek') {
        user = appState.teachers.find(t => t.role === 'Kepala Sekolah');
    }

    if (user && pass === 'srt2026') {
        currentUser = user;
        if (!currentUser.photo) {
            const initials = currentUser.name.replace(/[^a-zA-Z ]/g, "").split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
            currentUser.photo = `https://placehold.co/150x150/1e40af/ffffff?text=${initials}`;
        }
        localStorage.setItem('srt39_user', JSON.stringify(currentUser));
        showToast(`Selamat datang, ${user.name.split(',')[0]}! ${user.isWaliKelas ? '👨‍🏫 Wali Kelas ' + user.waliKelas : ''}`);
        initAuth();
    } else {
        showToast('NIP atau Password salah!', 'error');
    }
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('srt39_user');
    initAuth();
}

// ================================================================
// ROUTER
// ================================================================

function router() {
    if (!currentUser) return;
    const hash = window.location.hash || '#dashboard';
    const container = document.getElementById('view-container');
    const pageTitle = document.getElementById('page-title');

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === hash) link.classList.add('active');
    });

    if (!container) return;
    switch (hash) {
        case '#dashboard': pageTitle.innerText = "Dashboard"; container.innerHTML = renderDashboard(); break;
        case '#profil': pageTitle.innerText = "Profil Sekolah"; container.innerHTML = renderProfile(); break;
        case '#kalender': pageTitle.innerText = "Kalender Akademik"; container.innerHTML = renderCalendarGrid(); break;
        case '#jadwal': pageTitle.innerText = "Jadwal Intrakurikuler"; container.innerHTML = renderSchedule(); break;
        case '#ekstra': pageTitle.innerText = "Jadwal Ekstrakurikuler"; container.innerHTML = renderEkstra(); break;
        case '#murid': pageTitle.innerText = "Data & Nilai Murid"; container.innerHTML = renderStudents(); setTimeout(() => { const s = document.getElementById('search-murid'); if (s) s.addEventListener('input', filterStudents); }, 100); break;
        case '#guru': pageTitle.innerText = "Data Guru"; container.innerHTML = renderTeachers(); break;
        case '#administrasi': pageTitle.innerText = "Administrasi"; container.innerHTML = renderAdmin(); break;
        case '#rkt': pageTitle.innerText = "RKT & KSP"; container.innerHTML = renderRKT_KSP(); break;
        default: window.location.hash = '#dashboard';
    }
}
window.addEventListener('hashchange', router);

// ================================================================
// DELETE DATA
// ================================================================

function deleteData(type, id) {
    if (!confirm('Yakin ingin menghapus data ini?')) return;
    if (type === 'student') {
        appState.students = appState.students.filter(s => s.id !== id);
    } else if (type === 'admin') {
        appState.adminLinks = appState.adminLinks.filter(a => a.id !== id);
    } else if (type === 'ekstra') {
        appState.ekstra.splice(id, 1);
    } else {
        showToast('Tipe data tidak dikenal.', 'error');
        return;
    }
    saveState();
    router();
    showToast('Data berhasil dihapus!');
}

// ================================================================
// AI ASSISTANT — Pintar dan dapat menjawab semua pertanyaan data
// ================================================================

function toggleAI() {
    const win = document.getElementById('ai-chat-window');
    win.classList.toggle('open');
}

function sendAIMessage() {
    const input = document.getElementById('ai-input');
    const body = document.getElementById('ai-chat-body');
    const text = input.value.trim();
    if (!text) return;

    const userMsg = document.createElement('div');
    userMsg.className = 'ai-msg user';
    userMsg.innerText = text;
    body.appendChild(userMsg);
    input.value = '';
    body.scrollTop = body.scrollHeight;

    const botMsg = document.createElement('div');
    botMsg.className = 'ai-msg bot';
    botMsg.innerText = '⏳ Sedang memproses...';
    body.appendChild(botMsg);
    body.scrollTop = body.scrollHeight;

    setTimeout(() => {
        const lower = text.toLowerCase();
        let reply = '';

        // Data Siswa
        if (lower.includes('total siswa') || lower.includes('jumlah siswa') || lower.includes('berapa siswa')) {
            const total = appState.students.length;
            const sd = appState.students.filter(s => s.level === 'SD').length;
            const smp = appState.students.filter(s => s.level === 'SMP').length;
            const l = appState.students.filter(s => s.gender === 'L').length;
            const p = appState.students.filter(s => s.gender === 'P').length;
            reply = `📊 <b>Data Siswa SRT 39 Garut</b>\nTotal: <span class="highlight">${total}</span> siswa\n• SD: ${sd} siswa\n• SMP: ${smp} siswa\n• Laki-laki: ${l}\n• Perempuan: ${p}`;
        } else if (lower.includes('cari siswa') || lower.includes('nama siswa') || lower.includes('siswa bernama')) {
            const nameMatch = text.match(/(?:siswa bernama|siswa|nama)\s*[:]?\s*([A-Za-z\s]+)/i);
            if (nameMatch && nameMatch[1]) {
                const searchName = nameMatch[1].trim().toLowerCase();
                const found = appState.students.filter(s => s.name.toLowerCase().includes(searchName));
                if (found.length > 0) {
                    reply = `🔍 <b>Hasil pencarian "${searchName}":</b>\n`;
                    found.slice(0, 10).forEach(s => {
                        reply += `• ${s.name} (${s.nisn}) - ${s.school} - ${s.level} - ${s.rombel}\n`;
                    });
                    if (found.length > 10) reply += `\n<i>... dan ${found.length - 10} siswa lainnya</i>`;
                } else {
                    reply = `🔍 Tidak ditemukan siswa dengan nama "${searchName}".`;
                }
            } else {
                reply = `🔍 Silakan sebutkan nama siswa yang dicari. Contoh: "cari siswa bernama Ade"`;
            }
        } else if (lower.includes('siswa sd') || lower.includes('sd')) {
            const sd = appState.students.filter(s => s.level === 'SD');
            reply = `📚 <b>Siswa SD (${sd.length} siswa)</b>\n${sd.slice(0, 10).map(s => `• ${s.name}`).join('\n')}${sd.length > 10 ? `\n<i>... dan ${sd.length - 10} siswa lainnya</i>` : ''}`;
        } else if (lower.includes('siswa smp') || lower.includes('smp')) {
            const smp = appState.students.filter(s => s.level === 'SMP');
            const a = smp.filter(s => s.rombel === '7A');
            const b = smp.filter(s => s.rombel === '7B');
            reply = `📚 <b>Siswa SMP (${smp.length} siswa)</b>\n• 7A: ${a.length} siswa\n• 7B: ${b.length} siswa\n\nContoh nama: ${smp.slice(0, 5).map(s => s.name).join(', ')}${smp.length > 5 ? '...' : ''}`;
        } else if (lower.includes('wali kelas') || lower.includes('wali')) {
            const wali = appState.teachers.filter(t => t.isWaliKelas);
            reply = `👨‍🏫 <b>Wali Kelas SRT 39 Garut</b>\n`;
            wali.forEach(w => {
                reply += `• Kelas ${w.waliKelas}: ${w.name.split(',')[0]}\n`;
            });
        } else if (lower.includes('siswa 7a') || lower.includes('kelas 7a')) {
            const students = appState.students.filter(s => s.rombel === '7A');
            reply = `📚 <b>Siswa Kelas 7A (${students.length} siswa)</b>\n${students.slice(0, 15).map(s => `• ${s.name}`).join('\n')}${students.length > 15 ? `\n<i>... dan ${students.length - 15} siswa lainnya</i>` : ''}`;
        } else if (lower.includes('siswa 7b') || lower.includes('kelas 7b')) {
            const students = appState.students.filter(s => s.rombel === '7B');
            reply = `📚 <b>Siswa Kelas 7B (${students.length} siswa)</b>\n${students.slice(0, 15).map(s => `• ${s.name}`).join('\n')}${students.length > 15 ? `\n<i>... dan ${students.length - 15} siswa lainnya</i>` : ''}`;
        }
        // Data Guru
        else if (lower.includes('total guru') || lower.includes('jumlah guru') || lower.includes('berapa guru')) {
            const total = appState.teachers.length;
            const wali = appState.teachers.filter(t => t.isWaliKelas).length;
            reply = `👨‍🏫 <b>Data Guru SRT 39 Garut</b>\nTotal: <span class="highlight">${total}</span> guru\n• Wali Kelas: ${wali} orang\n• Guru Mapel: ${total - wali} orang`;
        } else if (lower.includes('daftar guru') || lower.includes('guru apa saja')) {
            reply = `👨‍🏫 <b>Daftar Guru SRT 39 Garut</b>\n`;
            appState.teachers.forEach(t => {
                reply += `• ${t.name.split(',')[0]} - ${t.role}${t.isWaliKelas ? ' (Wali Kelas ' + t.waliKelas + ')' : ''}\n`;
            });
        }
        // Jadwal
        else if (lower.includes('jadwal intra') || lower.includes('jadwal pelajaran') || lower.includes('pelajaran hari')) {
            reply = `📅 <b>Jadwal Intrakurikuler</b>\nTerdapat ${appState.jadwal.length} sesi pelajaran per hari.\nMulai pukul 08.00 - 15.00.\n\nRincian lengkap dapat dilihat di menu "Jadwal Intrakurikuler".`;
        } else if (lower.includes('jadwal ekstra') || lower.includes('ekstrakurikuler') || lower.includes('ekskul')) {
            reply = `⚽ <b>Jadwal Ekstrakurikuler</b>\n${appState.ekstra.map((e, i) => `Sesi ${i+1}: ${e.senin || '-'} | ${e.selasa || '-'} | ${e.rabu || '-'} | ${e.kamis || '-'} | ${e.jumat || '-'}`).join('\n')}\n\nSabtu: Pramuka (09.00)\nMinggu: Paskibra (15.30)`;
        }
        // Kalender
        else if (lower.includes('kalender') || lower.includes('event') || lower.includes('acara') || lower.includes('bulan ini')) {
            const now = new Date();
            const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
            const currentMonth = monthNames[now.getMonth()] + ' ' + now.getFullYear();
            const monthData = appState.calendar.find(c => c.month === currentMonth);
            if (monthData) {
                reply = `📅 <b>Event ${currentMonth}</b>\n`;
                monthData.events.forEach(e => {
                    reply += `• ${e.date}: ${e.name}\n`;
                });
            } else {
                reply = `📅 <b>Kalender Akademik</b>\nTerdapat ${appState.calendar.length} bulan dengan berbagai event.\nLihat menu "Kalender Akademik" untuk detail lengkap.`;
            }
        }
        // RKT & KSP
        else if (lower.includes('rkt') || lower.includes('ksp') || lower.includes('kurikulum') || lower.includes('rencana kerja')) {
            reply = `📋 <b>RKT & KSP SRT 39 Garut</b>\n\n<b>RKT (Rencana Kerja Tahunan)</b>\n• Berisi program kerja 8 Standar Nasional Pendidikan\n• Target: meningkatkan literasi, numerasi, dan karakter siswa\n\n<b>KSP (Kurikulum Satuan Pendidikan)</b>\n• Menggunakan Kurikulum Merdeka\n• Terdiri dari Intrakurikuler, Kokurikuler, dan Ekstrakurikuler\n\nDetail lengkap di menu "RKT & KSP".`;
        }
        // Visi Misi
        else if (lower.includes('visi') || lower.includes('misi')) {
            reply = `🎯 <b>Visi & Misi SRT 39 Garut</b>\n\n<b>Visi:</b>\n"${appState.school.visi}"\n\n<b>Misi:</b>\n${appState.school.misi.map((m, i) => `${i+1}. ${m}`).join('\n')}\n\n<b>Moto:</b> "${appState.school.moto}"`;
        }
        // Informasi Sekolah
        else if (lower.includes('sekolah') || lower.includes('info sekolah') || lower.includes('profil sekolah')) {
            reply = `🏫 <b>Informasi Sekolah</b>\n\nNama: ${appState.school.name}\nAlamat: ${appState.school.address}\nNPSN SRD: ${appState.school.npsn_srd}\nNPSN SRMP: ${appState.school.npsn_srmp}\nKepala Sekolah: ${appState.school.kepsek}\nWakasek Kurikulum: ${appState.school.wakakur}\nTahun Ajaran: ${appState.school.tahun}\nLuas Tanah: ${appState.school.luasTanah}\nLuas Bangunan: ${appState.school.luasBangunan}`;
        }
        // Default
        else {
            reply = `🤖 <b>Saya siap membantu!</b>\n\nSaya dapat menjawab pertanyaan tentang:\n• 📊 Data siswa (total, cari nama, kelas)\n• 👨‍🏫 Data guru & wali kelas\n• 📅 Jadwal intra & ekstrakurikuler\n• 🎯 Visi, misi, profil sekolah\n• 📋 RKT & KSP\n• 📆 Kalender akademik\n\nContoh pertanyaan:\n• "Berapa total siswa?"\n• "Siapa wali kelas 7A?"\n• "Ada event apa bulan ini?"\n• "Cari siswa bernama Ade"`;
        }

        botMsg.innerHTML = reply.replace(/\n/g, '<br>');
        body.scrollTop = body.scrollHeight;
    }, 500);
}

// ================================================================
// RENDER FUNCTIONS (Dashboard, Profil, Kalender, Jadwal, Ekstra, Students, Teachers, Admin, RKT)
// ================================================================

function renderDashboard() {
    const total = appState.students.length;
    const sd = appState.students.filter(s => s.level === 'SD').length;
    const smp = appState.students.filter(s => s.level === 'SMP').length;
    const guru = appState.teachers.length;
    const wali = appState.teachers.filter(t => t.isWaliKelas).length;
    return `
        <div class="fade-in space-y-6">
            <div class="bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                <div class="absolute -right-12 -top-12 opacity-10"><i class="fas fa-school" style="font-size:16rem;"></i></div>
                <div class="relative z-10">
                    <h2 class="text-3xl font-extrabold mb-2">Halo, ${currentUser.name.split(',')[0]}! 👋</h2>
                    <p class="text-white/80 text-lg max-w-2xl">Selamat datang di SIMAKUR — Sistem Manajemen Kurikulum ${appState.school.name}</p>
                    ${currentUser.isWaliKelas ? `<p class="text-white/70 text-sm mt-1">🏫 <b>Wali Kelas ${currentUser.waliKelas}</b> — ${appState.students.filter(s => s.rombel === currentUser.waliKelas).length} siswa</p>` : ''}
                    <div class="mt-3 flex flex-wrap gap-3">
                        <span class="bg-white/20 backdrop-blur px-4 py-1.5 rounded-full text-sm font-medium"><i class="fas fa-calendar-alt mr-2"></i>TA ${appState.school.tahun}</span>
                        <span class="bg-white/20 backdrop-blur px-4 py-1.5 rounded-full text-sm font-medium"><i class="fas fa-quote-left mr-2"></i>${appState.school.moto}</span>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="stat-card flex items-center gap-4">
                    <div class="icon bg-blue-50 text-blue-600"><i class="fas fa-user-graduate"></i></div>
                    <div><p class="text-xs text-slate-500 font-medium">Total Siswa</p><p class="text-2xl font-extrabold text-dark">${total}</p></div>
                </div>
                <div class="stat-card flex items-center gap-4">
                    <div class="icon bg-emerald-50 text-emerald-600"><i class="fas fa-school"></i></div>
                    <div><p class="text-xs text-slate-500 font-medium">SRD</p><p class="text-2xl font-extrabold text-dark">${sd}</p></div>
                </div>
                <div class="stat-card flex items-center gap-4">
                    <div class="icon bg-purple-50 text-purple-600"><i class="fas fa-school"></i></div>
                    <div><p class="text-xs text-slate-500 font-medium">SRMP</p><p class="text-2xl font-extrabold text-dark">${smp}</p></div>
                </div>
                <div class="stat-card flex items-center gap-4">
                    <div class="icon bg-amber-50 text-amber-600"><i class="fas fa-users"></i></div>
                    <div><p class="text-xs text-slate-500 font-medium">GTK</p><p class="text-2xl font-extrabold text-dark">${guru}</p></div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
                    <h3 class="font-bold text-dark text-sm mb-3"><i class="fas fa-info-circle text-primary mr-2"></i>Informasi Sekolah</h3>
                    <div class="space-y-1.5 text-sm text-slate-600">
                        <div class="flex justify-between"><span class="font-medium">Kepala Sekolah</span><span>${appState.school.kepsek}</span></div>
                        <div class="flex justify-between"><span class="font-medium">Wakasek Kurikulum</span><span>${appState.school.wakakur}</span></div>
                        <div class="flex justify-between"><span class="font-medium">Tahun Ajaran</span><span>${appState.school.tahun}</span></div>
                        <div class="flex justify-between"><span class="font-medium">Status</span><span>Sekolah Rakyat Negeri</span></div>
                    </div>
                </div>
                <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
                    <h3 class="font-bold text-dark text-sm mb-3"><i class="fas fa-flag-checkered text-amber-500 mr-2"></i>Target 2026/2027</h3>
                    <div class="space-y-2">
                        <div><span class="badge-status bg-emerald-100 text-emerald-700">100%</span> Guru bersertifikat</div>
                        <div><span class="badge-status bg-blue-100 text-blue-700">75</span> Siswa (25 SD + 50 SMP)</div>
                        <div><span class="badge-status bg-purple-100 text-purple-700">${guru}</span> GTK aktif</div>
                        <div><span class="badge-status bg-amber-100 text-amber-700">8</span> Ekstrakurikuler</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderProfile() {
    let misiHTML = appState.school.misi.map((m, i) => `
        <li class="flex gap-3 mb-2.5">
            <span class="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold flex-shrink-0">${i+1}</span>
            <span class="flex-1">${m}</span>
        </li>
    `).join('');
    return `
        <div class="fade-in space-y-6">
            <div class="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                <div class="w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full border-4 border-white shadow-lg flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-school text-5xl text-primary/60"></i>
                </div>
                <div class="flex-1">
                    <h1 class="text-2xl md:text-3xl font-extrabold text-dark">${appState.school.name}</h1>
                    <p class="text-slate-500 mt-2 flex items-center justify-center md:justify-start gap-2"><i class="fas fa-map-marker-alt text-rose-500"></i> ${appState.school.address}</p>
                    <div class="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                        <span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold">NPSN SRD: ${appState.school.npsn_srd}</span>
                        <span class="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-semibold">NPSN SRMP: ${appState.school.npsn_srmp}</span>
                        <span class="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">Berdiri: ${appState.school.tahunBerdiri}</span>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                    <h2 class="text-xl font-bold text-dark mb-4"><i class="fas fa-eye text-amber-500 mr-2"></i>Visi Sekolah</h2>
                    <p class="text-slate-600 leading-relaxed font-medium p-5 bg-slate-50 rounded-2xl italic text-center">"${appState.school.visi}"</p>
                </div>
                <div class="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                    <h2 class="text-xl font-bold text-dark mb-4"><i class="fas fa-bullseye text-emerald-500 mr-2"></i>Misi Sekolah</h2>
                    <ul class="text-slate-600">${misiHTML}</ul>
                </div>
            </div>
            <div class="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                <h2 class="text-xl font-bold text-dark mb-4"><i class="fas fa-building text-sky-500 mr-2"></i>Data Fisik</h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div class="bg-slate-50 p-4 rounded-xl text-center"><span class="block font-bold text-dark">${appState.school.luasTanah}</span><span class="text-slate-500 text-xs">Luas Tanah</span></div>
                    <div class="bg-slate-50 p-4 rounded-xl text-center"><span class="block font-bold text-dark">${appState.school.luasBangunan}</span><span class="text-slate-500 text-xs">Luas Bangunan</span></div>
                    <div class="bg-slate-50 p-4 rounded-xl text-center"><span class="block font-bold text-dark">${appState.school.statusTanah}</span><span class="text-slate-500 text-xs">Status Tanah</span></div>
                    <div class="bg-slate-50 p-4 rounded-xl text-center"><span class="block font-bold text-dark">3</span><span class="text-slate-500 text-xs">Rombel</span></div>
                </div>
            </div>
        </div>
    `;
}

// ================================================================
// KALENDER GRID
// ================================================================

function renderCalendarGrid() {
    const months = appState.calendar;
    let output = '<div class="fade-in space-y-8">';
    output += `
        <div class="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-wrap gap-4 items-center text-xs">
            <span class="font-semibold text-slate-600 mr-2">Legenda:</span>
            <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-blue-100 border-l-4 border-blue-600"></span> Kegiatan Awal</span>
            <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-yellow-100 border-l-4 border-yellow-500"></span> Kegiatan Akademik</span>
            <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-red-100 border-l-4 border-red-600"></span> Libur / Cuti</span>
            <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-sky-100 border-l-4 border-sky-500"></span> Rapat Dinas</span>
            <span class="flex items-center gap-1"><span class="w-3 h-3 rounded bg-emerald-100 border-l-4 border-emerald-500"></span> Pembagian Rapor</span>
        </div>
    `;

    months.forEach(monthData => {
        const [monthName, year] = monthData.month.split(' ');
        const monthIndex = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'].indexOf(monthName);
        if (monthIndex === -1) return;
        const yearNum = parseInt(year);
        const firstDay = new Date(yearNum, monthIndex, 1).getDay();
        const daysInMonth = new Date(yearNum, monthIndex + 1, 0).getDate();
        const eventMap = {};
        monthData.events.forEach(ev => {
            const dateStr = ev.date;
            if (dateStr.includes('-')) {
                const parts = dateStr.split('-');
                const startDay = parseInt(parts[0]);
                const endDay = parseInt(parts[1]);
                for (let d = startDay; d <= endDay; d++) {
                    const key = `${d}`;
                    if (!eventMap[key]) eventMap[key] = [];
                    eventMap[key].push(ev);
                }
            } else {
                const day = parseInt(dateStr);
                const key = `${day}`;
                if (!eventMap[key]) eventMap[key] = [];
                eventMap[key].push(ev);
            }
        });

        let gridHTML = '';
        const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
        gridHTML += dayNames.map(d => `<div class="day-header">${d}</div>`).join('');
        for (let i = 0; i < firstDay; i++) {
            gridHTML += `<div class="day-cell other-month"></div>`;
        }
        for (let d = 1; d <= daysInMonth; d++) {
            const events = eventMap[`${d}`] || [];
            let displayBadges = events.slice(0, 2).map(ev => {
                let cls = 'event-badge';
                if (ev.type === 'danger') cls += ' danger';
                else if (ev.type === 'warning') cls += ' warning';
                else if (ev.type === 'primary') cls += ' primary';
                else if (ev.type === 'success') cls += ' success';
                else cls += ' info';
                return `<span class="${cls}" title="${ev.name}">${ev.name}</span>`;
            }).join('');
            if (events.length > 2) {
                displayBadges += `<span class="more-indicator">+${events.length - 2} lagi</span>`;
            }
            gridHTML += `
                <div class="day-cell">
                    <div class="date-num">${d}</div>
                    ${displayBadges}
                </div>
            `;
        }
        const totalCells = firstDay + daysInMonth;
        const remaining = (7 - (totalCells % 7)) % 7;
        for (let i = 0; i < remaining; i++) {
            gridHTML += `<div class="day-cell other-month"></div>`;
        }
        output += `
            <div class="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
                <div class="flex justify-between items-center border-b border-slate-100 pb-3 mb-4">
                    <h3 class="text-xl font-bold text-dark">${monthData.month}</h3>
                    <span class="text-xs text-slate-400">${daysInMonth} hari</span>
                </div>
                <div class="calendar-grid">${gridHTML}</div>
            </div>
        `;
    });
    output += '</div>';
    return output;
}

// ================================================================
// JADWAL INTRAKURIKULER
// ================================================================

function getSubjColor(t) {
    if (!t) return '';
    const l = t.toLowerCase();
    if (l.includes('b. indonesia') || l.includes('b. inggris')) return 'bg-orange-50 text-orange-800 border-orange-200';
    if (l.includes('ipa') || l.includes('ips') || l.includes('ipas')) return 'bg-green-50 text-green-800 border-green-200';
    if (l.includes('matematika') || l.includes('tik')) return 'bg-yellow-50 text-yellow-800 border-yellow-200';
    if (l.includes('pjok') || l.includes('seni') || l.includes('prakarya') || l.includes('calistung')) return 'bg-rose-50 text-rose-800 border-rose-200';
    if (l.includes('pai') || l.includes('kka') || l.includes('pancasila')) return 'bg-blue-50 text-blue-800 border-blue-200';
    if (l.includes('bk')) return 'bg-purple-50 text-purple-800 border-purple-200';
    return 'bg-white';
}

function renderSchedule() {
    let trMapel = appState.jadwal.map((row, i) => {
        if (row.isBreak) {
            return `
                <tr class="bg-slate-100 border-b border-slate-300 text-sm text-center font-bold text-slate-700 uppercase tracking-widest">
                    <td class="py-2 px-1 border-r border-slate-300 bg-white"></td>
                    <td class="py-2 px-1 whitespace-nowrap text-xs border-r border-slate-300 bg-white">${row.waktu}</td>
                    <td colspan="12" class="py-2 px-1 border-r border-slate-300">ISTIRAHAT</td>
                    <td class="py-2 px-1 whitespace-nowrap text-xs border-r border-slate-300 bg-white">09.45 - 10.15</td>
                    <td colspan="3" class="py-2 px-1 border-r border-slate-300">ISTIRAHAT</td>
                </tr>
            `;
        }
        return `
            <tr class="hover:bg-slate-50 transition border-b border-slate-200 text-sm text-center font-medium">
                <td class="py-3 px-1 font-bold text-slate-700 border-r border-slate-200 bg-slate-50">${row.jam}</td>
                <td class="py-3 px-1 whitespace-nowrap text-xs border-r border-slate-200 bg-slate-50">${row.waktu}</td>
                <td class="py-3 px-1 border-r border-b ${getSubjColor(row.s[0])}">${row.s[0]}</td>
                <td class="py-3 px-1 border-r border-b ${getSubjColor(row.s[1])}">${row.s[1]}</td>
                <td class="py-3 px-1 border-r border-b border-slate-200 ${getSubjColor(row.s[2])}">${row.s[2]}</td>
                <td class="py-3 px-1 border-r border-b ${getSubjColor(row.sel[0])}">${row.sel[0]}</td>
                <td class="py-3 px-1 border-r border-b ${getSubjColor(row.sel[1])}">${row.sel[1]}</td>
                <td class="py-3 px-1 border-r border-b border-slate-200 ${getSubjColor(row.sel[2])}">${row.sel[2]}</td>
                <td class="py-3 px-1 border-r border-b ${getSubjColor(row.r[0])}">${row.r[0]}</td>
                <td class="py-3 px-1 border-r border-b ${getSubjColor(row.r[1])}">${row.r[1]}</td>
                <td class="py-3 px-1 border-r border-b border-slate-200 ${getSubjColor(row.r[2])}">${row.r[2]}</td>
                <td class="py-3 px-1 border-r border-b ${getSubjColor(row.k[0])}">${row.k[0]}</td>
                <td class="py-3 px-1 border-r border-b ${getSubjColor(row.k[1])}">${row.k[1]}</td>
                <td class="py-3 px-1 border-r border-b border-slate-200 ${getSubjColor(row.k[2])}">${row.k[2]}</td>
                <td class="py-3 px-1 whitespace-nowrap text-xs border-r border-slate-200 bg-slate-50">${row.jm}</td>
                <td class="py-3 px-1 border-r border-b ${getSubjColor(row.j[0])}">${row.j[0]}</td>
                <td class="py-3 px-1 border-r border-b ${getSubjColor(row.j[1])}">${row.j[1]}</td>
                <td class="py-3 px-1 border-r border-b border-slate-200 ${getSubjColor(row.j[2])}">${row.j[2]}</td>
            </tr>
        `;
    }).join('');

    return `
        <div class="fade-in">
            <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden w-full overflow-x-auto">
                <div class="text-center py-4 border-b border-slate-200 bg-gradient-to-r from-blue-50 to-white">
                    <h2 class="text-xl font-extrabold text-dark uppercase tracking-wide">Jadwal Intrakurikuler Semester Ganjil</h2>
                    <h2 class="text-lg font-bold text-dark uppercase">${appState.school.name}</h2>
                    <h3 class="text-md font-semibold text-slate-600 uppercase">Tahun Ajaran ${appState.school.tahun}</h3>
                </div>
                <table class="w-full min-w-[1300px] border-collapse bg-white">
                    <thead>
                        <tr class="bg-[#1e40af] text-white text-sm uppercase text-center border-b border-slate-300">
                            <th rowspan="2" class="py-3 px-1 border-r border-slate-400 font-bold w-12">Jam</th>
                            <th rowspan="2" class="py-3 px-1 border-r border-slate-400 font-bold w-28">Waktu</th>
                            <th colspan="3" class="py-2 px-1 border-r border-slate-400 font-bold">Senin</th>
                            <th colspan="3" class="py-2 px-1 border-r border-slate-400 font-bold">Selasa</th>
                            <th colspan="3" class="py-2 px-1 border-r border-slate-400 font-bold">Rabu</th>
                            <th colspan="3" class="py-2 px-1 border-r border-slate-400 font-bold">Kamis</th>
                            <th rowspan="2" class="py-3 px-1 border-r border-slate-400 font-bold w-28">Waktu</th>
                            <th colspan="3" class="py-2 px-1 border-slate-400 font-bold">Jum'at</th>
                        </tr>
                        <tr class="bg-[#2563eb] text-white text-xs text-center border-b border-slate-300 font-bold uppercase tracking-wide">
                            <th class="py-2 px-1 border-r border-slate-400">SRD</th><th class="py-2 px-1 border-r border-slate-400">SMP-A</th><th class="py-2 px-1 border-r border-slate-400">SMP-B</th>
                            <th class="py-2 px-1 border-r border-slate-400">SRD</th><th class="py-2 px-1 border-r border-slate-400">SMP-A</th><th class="py-2 px-1 border-r border-slate-400">SMP-B</th>
                            <th class="py-2 px-1 border-r border-slate-400">SRD</th><th class="py-2 px-1 border-r border-slate-400">SMP-A</th><th class="py-2 px-1 border-r border-slate-400">SMP-B</th>
                            <th class="py-2 px-1 border-r border-slate-400">SRD</th><th class="py-2 px-1 border-r border-slate-400">SMP-A</th><th class="py-2 px-1 border-r border-slate-400">SMP-B</th>
                            <th class="py-2 px-1 border-r border-slate-400">SRD</th><th class="py-2 px-1 border-r border-slate-400">SMP-A</th><th class="py-2 px-1 border-r border-slate-400">SMP-B</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-slate-100 text-center text-xs font-bold text-slate-700 border-b border-slate-300">
                            <td class="border-r border-slate-300 bg-white"></td>
                            <td class="border-r border-slate-300 py-2">07.30 - 08.00</td>
                            <td colspan="12" class="py-2 border-r border-slate-300">Apel / Upacara Bendera (Senin)</td>
                            <td class="border-r border-slate-300 py-2">07.30 - 08.00</td>
                            <td colspan="3" class="py-2 border-r border-slate-300">Sholat Dhuha / Jumsih</td>
                        </tr>
                        ${trMapel}
                        <tr class="bg-white text-xs text-center border-b border-slate-300 text-slate-800">
                            <td rowspan="2" colspan="2" class="py-3 px-1 border-r border-slate-300 font-bold uppercase bg-slate-50">Piket</td>
                            <td colspan="3" class="py-1 px-1 border-r border-slate-300">${appState.petugasPiket.senin[0]}</td>
                            <td colspan="3" class="py-1 px-1 border-r border-slate-300">${appState.petugasPiket.selasa[0]}</td>
                            <td colspan="3" class="py-1 px-1 border-r border-slate-300">${appState.petugasPiket.rabu[0]}</td>
                            <td colspan="3" class="py-1 px-1 border-r border-slate-300">${appState.petugasPiket.kamis[0]}</td>
                            <td rowspan="2" class="border-r border-slate-300"></td>
                            <td colspan="3" class="py-1 px-1 border-r border-slate-300">${appState.petugasPiket.jumat[0]}</td>
                        </tr>
                        <tr class="bg-white text-xs text-center border-b border-slate-300 text-slate-800">
                            <td colspan="3" class="py-1 px-1 border-r border-slate-300">${appState.petugasPiket.senin[1]}</td>
                            <td colspan="3" class="py-1 px-1 border-r border-slate-300">${appState.petugasPiket.selasa[1]}</td>
                            <td colspan="3" class="py-1 px-1 border-r border-slate-300">${appState.petugasPiket.rabu[1]}</td>
                            <td colspan="3" class="py-1 px-1 border-r border-slate-300">${appState.petugasPiket.kamis[1]}</td>
                            <td colspan="3" class="py-1 px-1 border-r border-slate-300">${appState.petugasPiket.jumat[1]}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="p-3 bg-slate-50 text-xs text-slate-500 border-t border-slate-200 text-center">Koordinator Piket: ${appState.petugasPiket.kordinator[0]}</div>
            </div>
        </div>
    `;
}

// ================================================================
// JADWAL EKSTRAKURIKULER
// ================================================================

function renderEkstra() {
    const rows = appState.ekstra;
    let tableRows = '';
    rows.forEach((row, idx) => {
        const isFirst = idx === 0;
        const rowNum = isFirst ? '1' : '';
        const waktuDisplay = row.waktu || '';
        const waktuSabtu = row.waktu_sabtu || '';
        const waktuMinggu = row.waktu_minggu || '';
        tableRows += `
            <tr class="border-b border-slate-100 hover:bg-slate-50 transition text-sm">
                <td class="py-3 px-2 text-center font-bold text-slate-700 ${isFirst ? '' : 'text-slate-300'}">${rowNum}</td>
                <td class="py-3 px-2 text-center text-xs ${isFirst ? 'font-semibold text-slate-800' : 'text-slate-400'}">${waktuDisplay}</td>
                <td class="py-3 px-2 text-center">${row.senin || '-'}</td>
                <td class="py-3 px-2 text-center">${row.selasa || '-'}</td>
                <td class="py-3 px-2 text-center">${row.rabu || '-'}</td>
                <td class="py-3 px-2 text-center">${row.kamis || '-'}</td>
                <td class="py-3 px-2 text-center">${row.jumat || '-'}</td>
                <td class="py-3 px-2 text-center text-xs ${isFirst ? 'font-semibold text-slate-800' : 'text-slate-400'}">${waktuSabtu}</td>
                <td class="py-3 px-2 text-center">${row.sabtu || '-'}</td>
                <td class="py-3 px-2 text-center text-xs ${isFirst ? 'font-semibold text-slate-800' : 'text-slate-400'}">${waktuMinggu}</td>
                <td class="py-3 px-2 text-center">${row.minggu || '-'}</td>
            </tr>
        `;
    });

    const pj = appState.ekstra[0]?.penanggung || {};
    const pjMap = {
        senin: pj.senin || ['-', '-'],
        selasa: pj.selasa || ['-', '-'],
        rabu: pj.rabu || ['-', '-'],
        kamis: pj.kamis || ['-', '-'],
        jumat: pj.jumat || ['-', '-'],
        sabtu: pj.sabtu || ['-', '-'],
        minggu: pj.minggu || ['-', '-']
    };

    return `
        <div class="fade-in">
            <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden w-full overflow-x-auto">
                <div class="text-center py-4 border-b border-slate-200 bg-gradient-to-r from-indigo-50 to-white">
                    <h2 class="text-xl font-extrabold text-dark uppercase tracking-wide">Jadwal Ekstrakurikuler Semester Ganjil</h2>
                    <h2 class="text-lg font-bold text-dark uppercase">${appState.school.name}</h2>
                    <h3 class="text-md font-semibold text-slate-600 uppercase">Tahun Ajaran ${appState.school.tahun}</h3>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full min-w-[1000px] border-collapse bg-white ekskul-table">
                        <thead>
                            <tr class="bg-[#1e40af] text-white text-xs uppercase text-center border-b border-slate-300">
                                <th class="py-3 px-2 border-r border-slate-400 w-12">No</th>
                                <th class="py-3 px-2 border-r border-slate-400 w-28">Waktu</th>
                                <th class="py-3 px-2 border-r border-slate-400">Senin</th>
                                <th class="py-3 px-2 border-r border-slate-400">Selasa</th>
                                <th class="py-3 px-2 border-r border-slate-400">Rabu</th>
                                <th class="py-3 px-2 border-r border-slate-400">Kamis</th>
                                <th class="py-3 px-2 border-r border-slate-400">Jum'at</th>
                                <th class="py-3 px-2 border-r border-slate-400 w-28">Waktu</th>
                                <th class="py-3 px-2 border-r border-slate-400">Sabtu</th>
                                <th class="py-3 px-2 border-r border-slate-400 w-28">Waktu</th>
                                <th class="py-3 px-2">Minggu</th>
                            </tr>
                        </thead>
                        <tbody>${tableRows}</tbody>
                    </table>
                </div>
                <div class="p-4 bg-slate-50 border-t border-slate-200">
                    <h4 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"><i class="fas fa-user-tie mr-2 text-primary"></i>Penanggung Jawab</h4>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-1 text-xs text-slate-600">
                        <div><span class="font-semibold">Senin:</span> ${pjMap.senin[0]} ${pjMap.senin[1] ? '& ' + pjMap.senin[1] : ''}</div>
                        <div><span class="font-semibold">Selasa:</span> ${pjMap.selasa[0]} ${pjMap.selasa[1] ? '& ' + pjMap.selasa[1] : ''}</div>
                        <div><span class="font-semibold">Rabu:</span> ${pjMap.rabu[0]} ${pjMap.rabu[1] ? '& ' + pjMap.rabu[1] : ''}</div>
                        <div><span class="font-semibold">Kamis:</span> ${pjMap.kamis[0]} ${pjMap.kamis[1] ? '& ' + pjMap.kamis[1] : ''}</div>
                        <div><span class="font-semibold">Jum'at:</span> ${pjMap.jumat[0]} ${pjMap.jumat[1] ? '& ' + pjMap.jumat[1] : ''}</div>
                        <div><span class="font-semibold">Sabtu:</span> ${pjMap.sabtu[0]} ${pjMap.sabtu[1] ? '& ' + pjMap.sabtu[1] : ''}</div>
                        <div><span class="font-semibold">Minggu:</span> ${pjMap.minggu[0]} ${pjMap.minggu[1] ? '& ' + pjMap.minggu[1] : ''}</div>
                    </div>
                    <div class="mt-2 text-xs text-slate-400 border-t border-slate-200 pt-2">
                        <span class="font-semibold">Koordinator:</span> Fauzi Faturohman, S.Pd., Gr.
                    </div>
                </div>
                <div class="p-3 bg-white border-t border-slate-200 flex justify-end no-print">
                    <button onclick="if(confirm('Hapus semua data ekstrakurikuler?')){ appState.ekstra=[]; saveState(); router(); showToast('Data ekstrakurikuler dihapus!'); }" class="text-rose-500 hover:text-rose-700 text-xs font-medium flex items-center gap-1">
                        <i class="fas fa-trash-alt"></i> Hapus Semua Data
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ================================================================
// DATA MURID
// ================================================================

function renderStudents() {
    let filteredStudents = appState.students;
    if (currentUser && currentUser.isWaliKelas) {
        filteredStudents = appState.students.filter(s => s.rombel === currentUser.waliKelas);
    }

    let trs = filteredStudents.map((m, idx) => {
        const genderBadge = m.gender === 'L' ?
            `<span class="w-8 h-8 rounded-full border border-blue-200 bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold mx-auto">L</span>` :
            `<span class="w-8 h-8 rounded-full border border-pink-200 bg-pink-50 text-pink-600 flex items-center justify-center text-xs font-bold mx-auto">P</span>`;
        const rombelBadge = `<span class="px-4 py-1.5 rounded-full border border-teal-300 text-teal-600 bg-white text-xs font-bold shadow-sm">${m.rombel}</span>`;
        let statusBadge = '';
        if (m.promotionStatus === 'Naik Kelas') statusBadge = `<span class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">Naik</span>`;
        else if (m.promotionStatus === 'Tidak Naik Kelas') statusBadge = `<span class="px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold">Tidak Naik</span>`;
        else statusBadge = `<span class="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold">-</span>`;

        return `
            <tr class="border-b border-slate-50 hover:bg-slate-50 transition student-row">
                <td class="py-4 px-4 text-sm text-slate-600 text-center">${idx+1}</td>
                <td class="py-4 px-4 text-sm font-bold text-primary whitespace-nowrap uppercase student-name" data-value="${m.name.toLowerCase()}">${m.name}</td>
                <td class="py-4 px-4 text-sm text-slate-600 font-mono student-nisn" data-value="${m.nisn}">${m.nisn}</td>
                <td class="py-4 px-4 text-sm text-slate-600">${m.school}</td>
                <td class="py-4 px-4 text-sm text-slate-600">${m.level}</td>
                <td class="py-4 px-4 text-center">${genderBadge}</td>
                <td class="py-4 px-4 text-center">${rombelBadge}</td>
                <td class="py-4 px-4 text-center">${statusBadge}</td>
                <td class="py-4 px-4 text-center no-print">
                    <button onclick="openGradeModal(${m.id})" class="px-3 py-1.5 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-2 mx-auto border border-primary/20">
                        <i class="fas fa-edit"></i> Kelola
                    </button>
                </td>
                <td class="py-4 px-4 text-center no-print">
                    <button onclick="deleteData('student', ${m.id})" class="text-rose-400 hover:text-rose-600 transition" title="Hapus Siswa">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        `;
    }).join('');

    const totalDisplay = filteredStudents.length;

    return `
        <div class="fade-in space-y-6">
            <div class="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 no-print">
                <div class="relative w-full sm:w-96">
                    <span class="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400"><i class="fas fa-search"></i></span>
                    <input type="text" id="search-murid" class="w-full pl-11 pr-4 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm bg-slate-50 focus:bg-white transition" placeholder="Cari nama atau NISN..." />
                </div>
                <div class="flex gap-2 text-xs flex-wrap">
                    <span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">Total ${totalDisplay}</span>
                    <span class="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full font-medium">SD ${filteredStudents.filter(s=>s.level==='SD').length}</span>
                    <span class="px-3 py-1 bg-purple-50 text-purple-700 rounded-full font-medium">SMP ${filteredStudents.filter(s=>s.level==='SMP').length}</span>
                    ${currentUser && currentUser.isWaliKelas ? `<span class="px-3 py-1 bg-amber-50 text-amber-700 rounded-full font-medium">🏫 Kelas ${currentUser.waliKelas}</span>` : ''}
                </div>
            </div>
            <div class="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse min-w-[1100px]">
                        <thead>
                            <tr class="bg-slate-50 text-slate-600 text-xs font-bold uppercase tracking-wider border-b-2 border-slate-200">
                                <th class="py-4 px-4 text-center">No</th>
                                <th class="py-4 px-4">Nama</th>
                                <th class="py-4 px-4">NISN</th>
                                <th class="py-4 px-4">Sekolah</th>
                                <th class="py-4 px-4">Jenjang</th>
                                <th class="py-4 px-4 text-center">L/P</th>
                                <th class="py-4 px-4 text-center">Rombel</th>
                                <th class="py-4 px-4 text-center">Status</th>
                                <th class="py-4 px-4 text-center no-print">Aksi</th>
                                <th class="py-4 px-4 text-center no-print">Hapus</th>
                            </tr>
                        </thead>
                        <tbody>${trs}</tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function filterStudents(e) {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll('.student-row').forEach(row => {
        const name = row.querySelector('.student-name')?.getAttribute('data-value') || '';
        const nisn = row.querySelector('.student-nisn')?.getAttribute('data-value') || '';
        row.style.display = (name.includes(term) || nisn.includes(term)) ? '' : 'none';
    });
}

// ================================================================
// GRADE MODAL
// ================================================================

function openGradeModal(studentId) {
    const student = appState.students.find(s => s.id === studentId);
    if (!student) return;
    document.getElementById('grade-student-id').value = student.id;
    document.getElementById('grade-student-name').innerText = student.name;
    document.getElementById('grade-student-nisn').innerText = student.nisn;
    document.getElementById('grade-student-rombel').innerText = `${student.school} - ${student.level} (${student.rombel})`;

    const mapelList = student.level === 'SD' ?
        ['Pendidikan Pancasila', 'Bahasa Indonesia', 'Matematika', 'IPAS', 'PJOK', 'Seni Budaya'] :
        ['Pendidikan Pancasila', 'Bahasa Indonesia', 'Matematika', 'IPA', 'IPS', 'Bahasa Inggris', 'PJOK', 'Informatika'];

    let inputsHTML = '';
    mapelList.forEach(mapel => {
        const key = mapel.replace(/\s+/g, '_').toLowerCase();
        const val = student.grades[key] || '';
        inputsHTML += `
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <label class="block text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wider">${mapel}</label>
                <input type="number" min="0" max="100" name="grade_${key}" value="${val}" class="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none text-sm font-bold text-dark" placeholder="0-100" />
            </div>
        `;
    });
    document.getElementById('grade-inputs-container').innerHTML = inputsHTML;

    const select = document.getElementById('promotion-status-select');
    select.value = student.promotionStatus || 'Belum Ditentukan';

    document.getElementById('grade-modal').classList.remove('hidden');
    document.getElementById('grade-modal').classList.add('flex');
}

function closeGradeModal() {
    document.getElementById('grade-modal').classList.add('hidden');
    document.getElementById('grade-modal').classList.remove('flex');
}

function saveGrades(e) {
    e.preventDefault();
    const id = parseInt(document.getElementById('grade-student-id').value);
    const idx = appState.students.findIndex(s => s.id === id);
    if (idx > -1) {
        const fd = new FormData(e.target);
        const newGrades = {};
        for (let [key, val] of fd.entries()) {
            if (key.startsWith('grade_')) newGrades[key.replace('grade_', '')] = val ? parseInt(val) : 0;
        }
        appState.students[idx].grades = newGrades;
        const statusSelect = document.getElementById('promotion-status-select');
        appState.students[idx].promotionStatus = statusSelect.value;
        saveState();
        closeGradeModal();
        showToast(`Data ${appState.students[idx].name} berhasil disimpan!`);
        router();
    }
}

// ================================================================
// RENDER GURU
// ================================================================

function renderTeachers() {
    const sorted = [...appState.teachers].sort((a, b) => a.nip.localeCompare(b.nip));
    let html = sorted.map(t => {
        const photo = t.photo || `https://placehold.co/150x150/${t.isWaliKelas ? '1e40af' : '64748b'}/ffffff?text=${t.name.replace(/[^a-zA-Z ]/g, "").split(' ').slice(0,2).map(n=>n[0]).join('').toUpperCase()}`;
        return `
            <div class="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-col items-center text-center card-hover">
                <div class="relative">
                    <div class="w-24 h-24 rounded-full p-1 border-2 ${t.isWaliKelas ? 'border-amber-400' : 'border-primary/20'} mb-4 overflow-hidden">
                        <img src="${photo}" alt="${t.name}" class="w-full h-full object-cover rounded-full" />
                    </div>
                    ${t.isWaliKelas ? `<span class="absolute -top-1 -right-1 bg-amber-400 text-white text-[8px] font-bold px-2 py-0.5 rounded-full">🏫</span>` : ''}
                </div>
                <h3 class="font-bold text-dark text-base">${t.name}</h3>
                <p class="text-xs text-slate-500 mb-2">NIP. ${t.nip}</p>
                <div class="w-full mt-auto pt-4 border-t border-slate-100 flex flex-wrap justify-center gap-2">
                    <span class="px-3 py-1 ${t.isWaliKelas ? 'bg-amber-50 text-amber-700' : 'bg-primary/10 text-primary'} rounded-lg text-xs font-semibold">${t.role}</span>
                    <span class="text-xs text-slate-400 bg-slate-50 px-3 py-1 rounded-lg">${t.classes}</span>
                </div>
                ${t.isWaliKelas ? `<div class="mt-2 text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">👨‍🏫 Wali Kelas ${t.waliKelas}</div>` : ''}
            </div>
        `;
    }).join('');
    return `<div class="fade-in"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">${html}</div></div>`;
}

// ================================================================
// RENDER ADMINISTRASI
// ================================================================

function renderAdmin() {
    let trs = appState.adminLinks.length === 0 ?
        `<tr><td colspan="6" class="py-10 text-center text-slate-400 text-sm">Belum ada dokumen.</td></tr>` :
        appState.adminLinks.map(d => `
            <tr class="border-b border-slate-50 hover:bg-slate-50 transition">
                <td class="py-3.5 px-4 text-sm font-medium text-dark">${d.name}</td>
                <td class="py-3.5 px-4"><span class="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs">${d.category}</span></td>
                <td class="py-3.5 px-4 text-sm text-slate-700">${d.title}</td>
                <td class="py-3.5 px-4 text-sm text-slate-500">${d.date}</td>
                <td class="py-3.5 px-4 text-center"><a href="${d.link}" target="_blank" class="w-8 h-8 inline-flex items-center justify-center bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition"><i class="fas fa-external-link-alt text-xs"></i></a></td>
                <td class="py-3.5 px-4 text-center no-print">
                    <button onclick="deleteData('admin', ${d.id})" class="text-rose-400 hover:text-rose-600 transition" title="Hapus Dokumen">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    return `
        <div class="fade-in space-y-6">
            <div class="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div class="p-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white flex justify-between items-center">
                    <h3 class="font-bold text-dark"><i class="fas fa-folder-open text-amber-500 mr-2"></i>Dokumen Administrasi</h3>
                    <button onclick="if(confirm('Hapus semua dokumen?')){ appState.adminLinks=[]; saveState(); router(); showToast('Semua dokumen dihapus!'); }" class="text-rose-500 hover:text-rose-700 text-xs font-medium no-print">
                        <i class="fas fa-trash-alt"></i> Hapus Semua
                    </button>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead><tr class="bg-slate-50 text-slate-500 text-xs uppercase border-b border-slate-100">
                            <th class="py-3.5 px-4">Guru</th><th class="py-3.5 px-4">Kategori</th><th class="py-3.5 px-4">Judul</th><th class="py-3.5 px-4">Tanggal</th><th class="py-3.5 px-4 text-center">Link</th><th class="py-3.5 px-4 text-center no-print">Hapus</th>
                        </tr></thead>
                        <tbody>${trs}</tbody>
                    </table>
                </div>
            </div>
            <div class="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 text-center text-sm text-slate-500 no-print">
                <i class="fas fa-info-circle text-primary mr-2"></i>Gunakan menu <b>Data → Impor dari Excel</b> untuk menambah atau memperbarui dokumen.
            </div>
        </div>
    `;
}

// ================================================================
// RENDER RKT & KSP
// ================================================================

function renderRKT_KSP() {
    return `
        <div class="fade-in space-y-6">
            <div class="bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl p-8 text-white shadow-xl">
                <h2 class="text-2xl font-extrabold"><i class="fas fa-file-alt mr-3"></i>RKT & KSP</h2>
                <p class="text-white/80 text-sm mt-1">Rencana Kerja Tahunan & Kurikulum Satuan Pendidikan — ${appState.school.name}</p>
                <p class="text-white/60 text-xs mt-1">Tahun Ajaran ${appState.school.tahun}</p>
            </div>
            <div class="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div class="p-5 bg-gradient-to-r from-blue-50 to-white border-b border-slate-100">
                    <h3 class="text-lg font-extrabold text-dark flex items-center gap-2"><i class="fas fa-tasks text-primary"></i> Rencana Kerja Tahunan (RKT)</h3>
                </div>
                <div class="p-6 space-y-4">
                    <div class="section-card">
                        <div class="title"><i class="fas fa-book-open"></i> BAB I — Pendahuluan</div>
                        <div class="body">
                            <p><strong>Latar Belakang:</strong> Sekolah Rakyat merupakan program pendidikan yang diinisiasi Presiden Prabowo Subianto untuk menyediakan akses pendidikan gratis bagi anak-anak dari keluarga miskin dan miskin ekstrem.</p>
                            <ul class="mt-2">
                                <li>Sekolah Rakyat adalah Program Strategis Nasional untuk memutus mata rantai kemiskinan.</li>
                                <li>SRT 39 Garut harus menghasilkan lulusan yang kompeten dan mampu bersaing secara global.</li>
                            </ul>
                            <p class="mt-2"><strong>Sejarah Berdirinya:</strong> SRT 39 Garut mulai beroperasi pada 30 Desember 2025 dengan 75 siswa (25 SD + 50 SMP) dari keluarga Desil 1 dan 2.</p>
                        </div>
                    </div>
                    <div class="section-card">
                        <div class="title"><i class="fas fa-flag"></i> BAB II — Visi, Misi, dan Tujuan</div>
                        <div class="body">
                            <p><strong>Visi:</strong> "${appState.school.visi}"</p>
                            <p class="mt-2"><strong>Moto:</strong> "${appState.school.moto}"</p>
                        </div>
                    </div>
                    <div class="section-card">
                        <div class="title"><i class="fas fa-building"></i> BAB III — Profil Sekolah</div>
                        <div class="body">
                            <p><strong>Identitas Sekolah:</strong></p>
                            <ul>
                                <li>Nama: ${appState.school.name}</li>
                                <li>Alamat: ${appState.school.address}</li>
                                <li>NPSN SRD: ${appState.school.npsn_srd} | SRMP: ${appState.school.npsn_srmp}</li>
                                <li>Luas Tanah: ${appState.school.luasTanah} | Luas Bangunan: ${appState.school.luasBangunan}</li>
                                <li>Rombel: 3 | Jumlah Siswa: ${appState.students.length}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden mt-6">
                <div class="p-5 bg-gradient-to-r from-indigo-50 to-white border-b border-slate-100">
                    <h3 class="text-lg font-extrabold text-dark flex items-center gap-2"><i class="fas fa-book text-secondary"></i> Kurikulum Satuan Pendidikan (KSP)</h3>
                </div>
                <div class="p-6 space-y-4">
                    <div class="section-card">
                        <div class="title"><i class="fas fa-graduation-cap"></i> BAB I — Pendahuluan</div>
                        <div class="body">
                            <p><strong>Rasional:</strong> Pendidikan memegang peranan penting bagi perkembangan individu dan bangsa. Sekolah sebagai miniatur dunia harus menyiapkan siswa menjadi pribadi tangguh, kritis, kreatif, dan berkarakter.</p>
                        </div>
                    </div>
                    <div class="section-card">
                        <div class="title"><i class="fas fa-eye"></i> BAB II — Visi, Misi, dan Tujuan</div>
                        <div class="body">
                            <p><strong>Visi:</strong> "${appState.school.visi}"</p>
                            <p class="mt-2"><strong>Misi:</strong> ${appState.school.misi.length} misi sekolah.</p>
                        </div>
                    </div>
                    <div class="section-card">
                        <div class="title"><i class="fas fa-layer-group"></i> BAB III — Pengorganisasian Pembelajaran</div>
                        <div class="body">
                            <p><strong>Intrakurikuler:</strong> Menggunakan Kurikulum Merdeka. Beban belajar 41 JP/minggu.</p>
                            <p class="mt-2"><strong>Ekstrakurikuler:</strong> OSIS, Pramuka, Paskibra, Futsal, Silat, English Club, Hadroh, Computer Club, dan lainnya.</p>
                        </div>
                    </div>
                    <div class="section-card">
                        <div class="title"><i class="fas fa-clipboard-check"></i> BAB V — Pendampingan, Evaluasi</div>
                        <div class="body">
                            <p>Supervisi rutin, KKG SRT 39 Garut, IHT/FGD, dan evaluasi harian, per unit, per semester, per tahun.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ================================================================
// EXCEL IMPORT / EXPORT / TEMPLATE
// ================================================================

function exportExcel() {
    try {
        const wb = XLSX.utils.book_new();

        const schoolData = [
            ['Properti', 'Nilai'],
            ['Nama Sekolah', appState.school.name],
            ['NPSN SRD', appState.school.npsn_srd],
            ['NPSN SRMP', appState.school.npsn_srmp],
            ['Alamat', appState.school.address],
            ['Kepala Sekolah', appState.school.kepsek],
            ['NIP Kepsek', appState.school.kepsekNip],
            ['Wakasek Kurikulum', appState.school.wakakur],
            ['NIP Wakasek', appState.school.wakasekNip],
            ['Moto', appState.school.moto],
            ['Visi', appState.school.visi],
            ['Tahun Ajaran', appState.school.tahun],
            ['Luas Tanah', appState.school.luasTanah],
            ['Luas Bangunan', appState.school.luasBangunan],
            ['Status Tanah', appState.school.statusTanah],
            ['Tahun Berdiri', appState.school.tahunBerdiri]
        ];
        const ws1 = XLSX.utils.aoa_to_sheet(schoolData);
        XLSX.utils.book_append_sheet(wb, ws1, 'Sekolah');

        const misiData = appState.school.misi.map((m, i) => [i + 1, m]);
        misiData.unshift(['No', 'Misi']);
        const ws2 = XLSX.utils.aoa_to_sheet(misiData);
        XLSX.utils.book_append_sheet(wb, ws2, 'Misi');

        const guruData = appState.teachers.map(t => [t.nip, t.name, t.role, t.classes, t.isWaliKelas ? 'Ya' : 'Tidak', t.waliKelas || '-']);
        guruData.unshift(['NIP', 'Nama', 'Jabatan', 'Kelas', 'Wali Kelas', 'Kelas Wali']);
        const ws3 = XLSX.utils.aoa_to_sheet(guruData);
        XLSX.utils.book_append_sheet(wb, ws3, 'Guru');

        const siswaData = appState.students.map(s => [s.id, s.name, s.nisn, s.school, s.level, s.gender, s.rombel, s.promotionStatus || 'Belum Ditentukan']);
        siswaData.unshift(['ID', 'Nama', 'NISN', 'Sekolah', 'Jenjang', 'Gender', 'Rombel', 'Status Kenaikan']);
        const ws4 = XLSX.utils.aoa_to_sheet(siswaData);
        XLSX.utils.book_append_sheet(wb, ws4, 'Siswa');

        const ekstraData = appState.ekstra.map(e => [e.waktu, e.senin, e.selasa, e.rabu, e.kamis, e.jumat, e.waktu_sabtu, e.sabtu, e.waktu_minggu, e.minggu]);
        ekstraData.unshift(['Waktu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Waktu Sabtu', 'Sabtu', 'Waktu Minggu', 'Minggu']);
        const ws5 = XLSX.utils.aoa_to_sheet(ekstraData);
        XLSX.utils.book_append_sheet(wb, ws5, 'Ekstrakurikuler');

        const calData = [];
        calData.push(['Bulan', 'Tanggal', 'Event', 'Tipe']);
        appState.calendar.forEach(m => {
            m.events.forEach(e => {
                calData.push([m.month, e.date, e.name, e.type]);
            });
        });
        const ws6 = XLSX.utils.aoa_to_sheet(calData);
        XLSX.utils.book_append_sheet(wb, ws6, 'Kalender');

        const adminData = appState.adminLinks.map(d => [d.nip, d.name, d.category, d.title, d.link, d.date]);
        adminData.unshift(['NIP', 'Nama', 'Kategori', 'Judul', 'Link', 'Tanggal']);
        const ws7 = XLSX.utils.aoa_to_sheet(adminData);
        XLSX.utils.book_append_sheet(wb, ws7, 'Administrasi');

        const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([wbout], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `data_srt39_${new Date().toISOString().slice(0,10)}.xlsx`;
        a.click();
        URL.revokeObjectURL(url);
        showToast('Data berhasil diekspor ke Excel!', 'success');
    } catch (err) {
        showToast('Gagal ekspor: ' + err.message, 'error');
    }
}

function importExcel(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            const wsSchool = workbook.Sheets['Sekolah'];
            if (wsSchool) {
                const rows = XLSX.utils.sheet_to_json(wsSchool, { header: 1 });
                rows.forEach(row => {
                    if (row[0] === 'Nama Sekolah') appState.school.name = row[1] || appState.school.name;
                    if (row[0] === 'NPSN SRD') appState.school.npsn_srd = row[1] || appState.school.npsn_srd;
                    if (row[0] === 'NPSN SRMP') appState.school.npsn_srmp = row[1] || appState.school.npsn_srmp;
                    if (row[0] === 'Alamat') appState.school.address = row[1] || appState.school.address;
                    if (row[0] === 'Kepala Sekolah') appState.school.kepsek = row[1] || appState.school.kepsek;
                    if (row[0] === 'NIP Kepsek') appState.school.kepsekNip = row[1] || appState.school.kepsekNip;
                    if (row[0] === 'Wakasek Kurikulum') appState.school.wakakur = row[1] || appState.school.wakakur;
                    if (row[0] === 'NIP Wakasek') appState.school.wakasekNip = row[1] || appState.school.wakasekNip;
                    if (row[0] === 'Moto') appState.school.moto = row[1] || appState.school.moto;
                    if (row[0] === 'Visi') appState.school.visi = row[1] || appState.school.visi;
                    if (row[0] === 'Tahun Ajaran') appState.school.tahun = row[1] || appState.school.tahun;
                    if (row[0] === 'Luas Tanah') appState.school.luasTanah = row[1] || appState.school.luasTanah;
                    if (row[0] === 'Luas Bangunan') appState.school.luasBangunan = row[1] || appState.school.luasBangunan;
                    if (row[0] === 'Status Tanah') appState.school.statusTanah = row[1] || appState.school.statusTanah;
                    if (row[0] === 'Tahun Berdiri') appState.school.tahunBerdiri = row[1] || appState.school.tahunBerdiri;
                });
            }

            const wsMisi = workbook.Sheets['Misi'];
            if (wsMisi) {
                const rows = XLSX.utils.sheet_to_json(wsMisi, { header: 1 });
                const misiNew = [];
                rows.forEach((row, idx) => {
                    if (idx > 0 && row[1]) misiNew.push(row[1]);
                });
                if (misiNew.length > 0) appState.school.misi = misiNew;
            }

            const wsGuru = workbook.Sheets['Guru'];
            if (wsGuru) {
                const rows = XLSX.utils.sheet_to_json(wsGuru, { header: 1 });
                const guruNew = [];
                rows.forEach((row, idx) => {
                    if (idx > 0 && row[0]) {
                        const isWali = row[4] === 'Ya';
                        guruNew.push({
                            nip: row[0] || '',
                            name: row[1] || '',
                            role: row[2] || '',
                            classes: row[3] || '',
                            isWaliKelas: isWali,
                            waliKelas: isWali ? (row[5] || '') : '',
                            photo: ''
                        });
                    }
                });
                if (guruNew.length > 0) {
                    appState.teachers = guruNew;
                    appState.teachers.forEach(t => {
                        if (!t.photo) {
                            const initials = t.name.replace(/[^a-zA-Z ]/g, "").split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
                            t.photo = `https://placehold.co/150x150/${t.isWaliKelas ? '1e40af' : '64748b'}/ffffff?text=${initials}`;
                        }
                    });
                }
            }

            const wsSiswa = workbook.Sheets['Siswa'];
            if (wsSiswa) {
                const rows = XLSX.utils.sheet_to_json(wsSiswa, { header: 1 });
                const siswaNew = [];
                rows.forEach((row, idx) => {
                    if (idx > 0 && row[1]) {
                        siswaNew.push({
                            id: parseInt(row[0]) || idx,
                            name: row[1] || '',
                            nisn: row[2] || '',
                            school: row[3] || '',
                            level: row[4] || '',
                            gender: row[5] || '',
                            rombel: row[6] || '',
                            promotionStatus: row[7] || 'Belum Ditentukan',
                            grades: {}
                        });
                    }
                });
                if (siswaNew.length > 0) appState.students = siswaNew;
            }

            const wsEkstra = workbook.Sheets['Ekstrakurikuler'];
            if (wsEkstra) {
                const rows = XLSX.utils.sheet_to_json(wsEkstra, { header: 1 });
                const ekstraNew = [];
                rows.forEach((row, idx) => {
                    if (idx > 0) {
                        ekstraNew.push({
                            waktu: row[0] || '',
                            senin: row[1] || '',
                            selasa: row[2] || '',
                            rabu: row[3] || '',
                            kamis: row[4] || '',
                            jumat: row[5] || '',
                            waktu_sabtu: row[6] || '',
                            sabtu: row[7] || '',
                            waktu_minggu: row[8] || '',
                            minggu: row[9] || '',
                            penanggung: { senin: ['-', '-'], selasa: ['-', '-'], rabu: ['-', '-'], kamis: ['-', '-'], jumat: ['-', '-'], sabtu: ['-', '-'], minggu: ['-', '-'] }
                        });
                    }
                });
                if (ekstraNew.length > 0) appState.ekstra = ekstraNew;
            }

            const wsCal = workbook.Sheets['Kalender'];
            if (wsCal) {
                const rows = XLSX.utils.sheet_to_json(wsCal, { header: 1 });
                const calMap = {};
                rows.forEach((row, idx) => {
                    if (idx > 0 && row[0] && row[1]) {
                        if (!calMap[row[0]]) calMap[row[0]] = [];
                        calMap[row[0]].push({ date: row[1] || '', name: row[2] || '', type: row[3] || 'info' });
                    }
                });
                appState.calendar = Object.keys(calMap).map(month => ({ month: month, events: calMap[month] }));
            }

            const wsAdmin = workbook.Sheets['Administrasi'];
            if (wsAdmin) {
                const rows = XLSX.utils.sheet_to_json(wsAdmin, { header: 1 });
                const adminNew = [];
                rows.forEach((row, idx) => {
                    if (idx > 0 && row[0]) {
                        adminNew.push({
                            id: Date.now() + idx,
                            nip: row[0] || '',
                            name: row[1] || '',
                            category: row[2] || '',
                            title: row[3] || '',
                            link: row[4] || '',
                            date: row[5] || new Date().toLocaleDateString('id-ID')
                        });
                    }
                });
                if (adminNew.length > 0) appState.adminLinks = adminNew;
            }

            saveState();
            router();
            showToast('Data berhasil diimpor dari Excel!', 'success');

        } catch (err) {
            showToast('Gagal membaca file: ' + err.message, 'error');
        }
    };
    reader.readAsArrayBuffer(file);
    event.target.value = '';
}

function downloadTemplate() {
    try {
        const wb = XLSX.utils.book_new();

        const schoolTemplate = [
            ['Properti', 'Nilai'],
            ['Nama Sekolah', 'Sekolah Rakyat Terintegrasi 39 Garut'],
            ['NPSN SRD', '70058801'],
            ['NPSN SRMP', '70058802'],
            ['Alamat', 'Jl. Raya Samarang KM 4, Garut'],
            ['Kepala Sekolah', 'Andi Yasir Habibi, S.Sos., S.Pd.'],
            ['NIP Kepsek', '198008292014121002'],
            ['Wakasek Kurikulum', 'Fauzi Faturohman, S.Pd., Gr.'],
            ['NIP Wakasek', '199409082025211128'],
            ['Moto', 'Cerdas Bersama Tumbuh Setara'],
            ['Visi', 'Mewujudkan Generasi yang Disiplin, Jujur, Mandiri, Tangguh, Religius, dan Mampu Bersaing di Persaingan Global'],
            ['Tahun Ajaran', '2026/2027'],
            ['Luas Tanah', '2.613 m²'],
            ['Luas Bangunan', '1.441 m²'],
            ['Status Tanah', 'Hibah / BLK'],
            ['Tahun Berdiri', '2025']
        ];
        const ws1 = XLSX.utils.aoa_to_sheet(schoolTemplate);
        XLSX.utils.book_append_sheet(wb, ws1, 'Sekolah');

        const misiTemplate = [
            ['No', 'Misi'],
            [1, 'Menanamkan kedisiplinan dimanapun berada'],
            [2, 'Menanamkan karakter jujur dalam kehidupan sehari-hari'],
            [3, 'Menumbuhkan kemandirian dalam berfikir dan berprilaku'],
            [4, 'Menanamkan karakter tangguh atau tidak mudah menyerah'],
            [5, 'Membersamai dalam menumbuhkan ketaatan menjalankan ajaran agama'],
            [6, 'Memberikan pembekalan ilmu dan keterampilan untuk bersaing secara global']
        ];
        const ws2 = XLSX.utils.aoa_to_sheet(misiTemplate);
        XLSX.utils.book_append_sheet(wb, ws2, 'Misi');

        const guruTemplate = [
            ['NIP', 'Nama', 'Jabatan', 'Kelas', 'Wali Kelas', 'Kelas Wali'],
            ['199409082025211128', 'Fauzi Faturohman, S.Pd., Gr.', 'Wali Kelas 7B / PPKn', 'SRMP-B (7B)', 'Ya', '7B'],
            ['199901222025212077', 'Maha Ikhlas Sulfitrah, S.Pd., Gr.', 'Wali Kelas SRD / Guru Kelas', 'SRD', 'Ya', 'SD'],
            ['200003282025212060', 'Meliana Dwi Rahmawati, S.Pd., Gr.', 'Wali Kelas 7A / B. Inggris', 'SRMP-A (7A)', 'Ya', '7A'],
            ['', '', '', '', 'Tidak', '']
        ];
        const ws3 = XLSX.utils.aoa_to_sheet(guruTemplate);
        XLSX.utils.book_append_sheet(wb, ws3, 'Guru');

        const siswaTemplate = [
            ['ID', 'Nama', 'NISN', 'Sekolah', 'Jenjang', 'Gender', 'Rombel', 'Status Kenaikan'],
            [1, 'ADE MUSTOPA', '3139453861', 'SRDT 39 Garut', 'SD', 'L', 'SD', 'Belum Ditentukan'],
            [2, 'AGUS RAMDANI', '0104915906', 'SRMPT 39 Garut', 'SMP', 'L', '7B', 'Belum Ditentukan']
        ];
        const ws4 = XLSX.utils.aoa_to_sheet(siswaTemplate);
        XLSX.utils.book_append_sheet(wb, ws4, 'Siswa');

        const ekstraTemplate = [
            ['Waktu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Waktu Sabtu', 'Sabtu', 'Waktu Minggu', 'Minggu'],
            ['15.30 - Selesai', 'OSIS', 'Literasi dan Numerasi', 'Futsal', 'Paskibra', 'Hadroh', '09.00 - Selesai', 'Pramuka', '15.30 - Selesai', 'Paskibra'],
            ['', 'English Club', 'Karya Ilmiah Remaja', 'Jurnalistik', 'Silat', 'UKS', '', '', '', ''],
            ['', '', 'Computer Club', 'Sahabat Literasi', '', '', '', '', '', '']
        ];
        const ws5 = XLSX.utils.aoa_to_sheet(ekstraTemplate);
        XLSX.utils.book_append_sheet(wb, ws5, 'Ekstrakurikuler');

        const calTemplate = [
            ['Bulan', 'Tanggal', 'Event', 'Tipe'],
            ['Juli 2026', '1-30', 'Libur Semester Genap (Siswa Eksisting)', 'danger'],
            ['Juli 2026', '2', 'Rapat Dinas Bulanan', 'info'],
            ['Juli 2026', '14-31', 'MPLS (Siswa Baru)', 'primary'],
            ['Agustus 2026', '2', 'Rapat Dinas Bulanan (Refleksi)', 'info'],
            ['Agustus 2026', '24', 'Hari Pertama Masuk Sekolah', 'primary'],
            ['September 2026', '30', 'Ulang Tahun SRT 39 Garut', 'primary'],
            ['Desember 2026', '18', 'Pembagian Raport', 'success']
        ];
        const ws6 = XLSX.utils.aoa_to_sheet(calTemplate);
        XLSX.utils.book_append_sheet(wb, ws6, 'Kalender');

        const adminTemplate = [
            ['NIP', 'Nama', 'Kategori', 'Judul', 'Link', 'Tanggal'],
            ['199409082025211128', 'Fauzi Faturohman', 'Modul Ajar', 'Modul Ajar PPKn Kelas VII', 'https://example.com', new Date().toLocaleDateString('id-ID')]
        ];
        const ws7 = XLSX.utils.aoa_to_sheet(adminTemplate);
        XLSX.utils.book_append_sheet(wb, ws7, 'Administrasi');

        const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([wbout], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `template_data_srt39.xlsx`;
        a.click();
        URL.revokeObjectURL(url);
        showToast('Template Excel berhasil diunduh!', 'success');
    } catch (err) {
        showToast('Gagal unduh template: ' + err.message, 'error');
    }
}

// ================================================================
// INIT
// ================================================================

window.onload = function() {
    initAuth();
    document.getElementById('main-content')?.addEventListener('click', (e) => {
        const sidebar = document.getElementById('sidebar');
        if (window.innerWidth < 768 && sidebar && !sidebar.contains(e.target) && !e.target.closest('header button')) {
            sidebar.classList.add('-translate-x-full');
        }
    });
};