const projects = [
  {
    id: 1,
    name: "NilaiKu",
    tagline: "Grade management for real teachers.",
    desc: "PWA manajemen nilai siswa yang dibangun untuk — dan aktif dipakai oleh — guru beneran. Menggantikan spreadsheet manual dengan sistem sync multi-perangkat, ranking otomatis, penilaian ekstrakurikuler, dan ekspor laporan Excel satu klik.",
    status: "live",
    year: "2025",
    tech: ["PWA", "Firebase Firestore", "JavaScript", "SheetJS", "Vercel"],
    link: null,
    github: null,
    highlight: "Real user. Real data. Bukan sekadar demo."
  },
  {
    id: 2,
    name: "Taskly",
    tagline: "Academic task manager, full-stack.",
    desc: "Aplikasi manajemen tugas akademik dengan arsitektur full-stack modern. Backend API sudah live dengan Pydantic models, service layer, dan persistensi database. Frontend React dalam pengembangan aktif menuju full deployment.",
    status: "building",
    year: "2025",
    tech: ["React", "FastAPI", "Supabase", "Python", "Railway", "Vercel"],
    link: null,
    github: "https://github.com/Grounded-labs-ctrl",
    highlight: "Backend live di Railway. Frontend in progress."
  }
];

// ─────────────────────────────────────────────
// Mau nambahin project baru?
// Tinggal copy salah satu object di atas,
// paste di bawah, dan isi datanya.
// Status: "live" | "building" | "archived"
// ─────────────────────────────────────────────