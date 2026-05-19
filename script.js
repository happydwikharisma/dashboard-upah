// ============================================
// DASHBOARD UPAH BURUH INDONESIA
// VERSI 5 TAB - LENGKAP
// ============================================

// ============================================
// PART 1: KOORDINAT PROVINSI UNTUK PETA
// ============================================
const koordinatProvinsi = {
  "Aceh": [4.6951, 96.7494],
  "Sumatera Utara": [2.1154, 99.5451],
  "Sumatera Barat": [0.7392, 100.4301],
  "Riau": [0.2933, 101.7068],
  "Jambi": [-1.6101, 103.6131],
  "Sumatera Selatan": [-3.3194, 103.9144],
  "Bengkulu": [-3.7928, 102.2608],
  "Lampung": [-4.5585, 105.4068],
  "Kepulauan Bangka Belitung": [-2.7411, 106.4406],
  "Kepulauan Riau": [3.9457, 108.1429],
  "DKI Jakarta": [-6.2088, 106.8456],
  "Jawa Barat": [-6.9175, 107.6191],
  "Jawa Tengah": [-7.1509, 110.1403],
  "D.I. Yogyakarta": [-7.7956, 110.3695],
  "Jawa Timur": [-7.5361, 112.2384],
  "Banten": [-6.4058, 106.0640],
  "Bali": [-8.3405, 115.0920],
  "Nusa Tenggara Barat": [-8.6529, 117.3616],
  "Nusa Tenggara Timur": [-8.6574, 121.0794],
  "Kalimantan Barat": [-0.2788, 111.4753],
  "Kalimantan Tengah": [-1.6815, 113.3824],
  "Kalimantan Selatan": [-3.0926, 115.2838],
  "Kalimantan Timur": [0.5387, 116.4194],
  "Kalimantan Utara": [3.0731, 116.0411],
  "Sulawesi Utara": [0.6247, 123.9750],
  "Sulawesi Tengah": [-1.4300, 121.4456],
  "Sulawesi Selatan": [-3.6688, 119.9741],
  "Sulawesi Tenggara": [-3.9604, 122.5947],
  "Gorontalo": [0.5435, 123.0568],
  "Sulawesi Barat": [-2.4975, 119.3918],
  "Maluku": [-3.2385, 130.1453],
  "Maluku Utara": [0.6301, 127.9724],
  "Papua Barat": [-1.3362, 133.1747],
  "Papua Barat Daya": [-1.0, 132.0],
  "Papua": [-4.2699, 138.0804],
  "Papua Selatan": [-7.0, 139.0],
  "Papua Tengah": [-4.0, 137.0],
  "Papua Pegunungan": [-4.5, 139.5]
};

// ============================================
// PART 2: DATA RATA-RATA NASIONAL
// ============================================
const dataRataNasional = {
  "2023,Februari": 2944541,
  "2023,Agustus": 3178227,
  "2024,Februari": 3040719,
  "2024,Agustus": 3267618,
  "2025,Februari": 3094818,
  "2025,Agustus": 3331012
};

// ============================================
// PART 3: DATA PROVINSI (LENGKAP)
// ============================================
const dataProvinsi = [
  // FEBRUARI 2023 (34 provinsi)
  { tahun: 2023, periode: "Februari", provinsi: "Aceh", upah: 2294901 },
  { tahun: 2023, periode: "Februari", provinsi: "Sumatera Utara", upah: 2393548 },
  { tahun: 2023, periode: "Februari", provinsi: "Sumatera Barat", upah: 2603514 },
  { tahun: 2023, periode: "Februari", provinsi: "Riau", upah: 2872526 },
  { tahun: 2023, periode: "Februari", provinsi: "Jambi", upah: 2524049 },
  { tahun: 2023, periode: "Februari", provinsi: "Sumatera Selatan", upah: 2606420 },
  { tahun: 2023, periode: "Februari", provinsi: "Bengkulu", upah: 2363579 },
  { tahun: 2023, periode: "Februari", provinsi: "Lampung", upah: 2193447 },
  { tahun: 2023, periode: "Februari", provinsi: "Kepulauan Bangka Belitung", upah: 2986225 },
  { tahun: 2023, periode: "Februari", provinsi: "Kepulauan Riau", upah: 4143219 },
  { tahun: 2023, periode: "Februari", provinsi: "DKI Jakarta", upah: 5071094 },
  { tahun: 2023, periode: "Februari", provinsi: "Jawa Barat", upah: 3333558 },
  { tahun: 2023, periode: "Februari", provinsi: "Jawa Tengah", upah: 2178167 },
  { tahun: 2023, periode: "Februari", provinsi: "D.I. Yogyakarta", upah: 2374873 },
  { tahun: 2023, periode: "Februari", provinsi: "Jawa Timur", upah: 2516620 },
  { tahun: 2023, periode: "Februari", provinsi: "Banten", upah: 3732183 },
  { tahun: 2023, periode: "Februari", provinsi: "Bali", upah: 3200254 },
  { tahun: 2023, periode: "Februari", provinsi: "Nusa Tenggara Barat", upah: 2201507 },
  { tahun: 2023, periode: "Februari", provinsi: "Nusa Tenggara Timur", upah: 2140724 },
  { tahun: 2023, periode: "Februari", provinsi: "Kalimantan Barat", upah: 2699931 },
  { tahun: 2023, periode: "Februari", provinsi: "Kalimantan Tengah", upah: 3129693 },
  { tahun: 2023, periode: "Februari", provinsi: "Kalimantan Selatan", upah: 2971235 },
  { tahun: 2023, periode: "Februari", provinsi: "Kalimantan Timur", upah: 3946735 },
  { tahun: 2023, periode: "Februari", provinsi: "Kalimantan Utara", upah: 3550356 },
  { tahun: 2023, periode: "Februari", provinsi: "Sulawesi Utara", upah: 3217409 },
  { tahun: 2023, periode: "Februari", provinsi: "Sulawesi Tengah", upah: 2568687 },
  { tahun: 2023, periode: "Februari", provinsi: "Sulawesi Selatan", upah: 2825303 },
  { tahun: 2023, periode: "Februari", provinsi: "Sulawesi Tenggara", upah: 2653241 },
  { tahun: 2023, periode: "Februari", provinsi: "Gorontalo", upah: 2590343 },
  { tahun: 2023, periode: "Februari", provinsi: "Sulawesi Barat", upah: 2117920 },
  { tahun: 2023, periode: "Februari", provinsi: "Maluku", upah: 3005359 },
  { tahun: 2023, periode: "Februari", provinsi: "Maluku Utara", upah: 3015999 },
  { tahun: 2023, periode: "Februari", provinsi: "Papua Barat", upah: 3307020 },
  { tahun: 2023, periode: "Februari", provinsi: "Papua", upah: 4153146 },

  // AGUSTUS 2023 (34 provinsi)
  { tahun: 2023, periode: "Agustus", provinsi: "Aceh", upah: 2594530 },
  { tahun: 2023, periode: "Agustus", provinsi: "Sumatera Utara", upah: 2610584 },
  { tahun: 2023, periode: "Agustus", provinsi: "Sumatera Barat", upah: 2753517 },
  { tahun: 2023, periode: "Agustus", provinsi: "Riau", upah: 3011040 },
  { tahun: 2023, periode: "Agustus", provinsi: "Jambi", upah: 2668478 },
  { tahun: 2023, periode: "Agustus", provinsi: "Sumatera Selatan", upah: 2767669 },
  { tahun: 2023, periode: "Agustus", provinsi: "Bengkulu", upah: 2740734 },
  { tahun: 2023, periode: "Agustus", provinsi: "Lampung", upah: 2424538 },
  { tahun: 2023, periode: "Agustus", provinsi: "Kepulauan Bangka Belitung", upah: 3221747 },
  { tahun: 2023, periode: "Agustus", provinsi: "Kepulauan Riau", upah: 4651057 },
  { tahun: 2023, periode: "Agustus", provinsi: "DKI Jakarta", upah: 5532624 },
  { tahun: 2023, periode: "Agustus", provinsi: "Jawa Barat", upah: 3674236 },
  { tahun: 2023, periode: "Agustus", provinsi: "Jawa Tengah", upah: 2321344 },
  { tahun: 2023, periode: "Agustus", provinsi: "D.I. Yogyakarta", upah: 2705601 },
  { tahun: 2023, periode: "Agustus", provinsi: "Jawa Timur", upah: 2654068 },
  { tahun: 2023, periode: "Agustus", provinsi: "Banten", upah: 4378058 },
  { tahun: 2023, periode: "Agustus", provinsi: "Bali", upah: 3380840 },
  { tahun: 2023, periode: "Agustus", provinsi: "Nusa Tenggara Barat", upah: 2344661 },
  { tahun: 2023, periode: "Agustus", provinsi: "Nusa Tenggara Timur", upah: 2339851 },
  { tahun: 2023, periode: "Agustus", provinsi: "Kalimantan Barat", upah: 2796615 },
  { tahun: 2023, periode: "Agustus", provinsi: "Kalimantan Tengah", upah: 3323457 },
  { tahun: 2023, periode: "Agustus", provinsi: "Kalimantan Selatan", upah: 3066884 },
  { tahun: 2023, periode: "Agustus", provinsi: "Kalimantan Timur", upah: 4068893 },
  { tahun: 2023, periode: "Agustus", provinsi: "Kalimantan Utara", upah: 3599653 },
  { tahun: 2023, periode: "Agustus", provinsi: "Sulawesi Utara", upah: 3282230 },
  { tahun: 2023, periode: "Agustus", provinsi: "Sulawesi Tengah", upah: 2648195 },
  { tahun: 2023, periode: "Agustus", provinsi: "Sulawesi Selatan", upah: 2969920 },
  { tahun: 2023, periode: "Agustus", provinsi: "Sulawesi Tenggara", upah: 2876321 },
  { tahun: 2023, periode: "Agustus", provinsi: "Gorontalo", upah: 2570181 },
  { tahun: 2023, periode: "Agustus", provinsi: "Sulawesi Barat", upah: 2367534 },
  { tahun: 2023, periode: "Agustus", provinsi: "Maluku", upah: 2865989 },
  { tahun: 2023, periode: "Agustus", provinsi: "Maluku Utara", upah: 3267084 },
  { tahun: 2023, periode: "Agustus", provinsi: "Papua Barat", upah: 3601390 },
  { tahun: 2023, periode: "Agustus", provinsi: "Papua", upah: 4420390 },

  // FEBRUARI 2024 (38 provinsi)
  { tahun: 2024, periode: "Februari", provinsi: "Aceh", upah: 2565474 },
  { tahun: 2024, periode: "Februari", provinsi: "Sumatera Utara", upah: 2536687 },
  { tahun: 2024, periode: "Februari", provinsi: "Sumatera Barat", upah: 2624985 },
  { tahun: 2024, periode: "Februari", provinsi: "Riau", upah: 3132054 },
  { tahun: 2024, periode: "Februari", provinsi: "Jambi", upah: 2598253 },
  { tahun: 2024, periode: "Februari", provinsi: "Sumatera Selatan", upah: 2622784 },
  { tahun: 2024, periode: "Februari", provinsi: "Bengkulu", upah: 2503647 },
  { tahun: 2024, periode: "Februari", provinsi: "Lampung", upah: 2197378 },
  { tahun: 2024, periode: "Februari", provinsi: "Kepulauan Bangka Belitung", upah: 3240766 },
  { tahun: 2024, periode: "Februari", provinsi: "Kepulauan Riau", upah: 4442582 },
  { tahun: 2024, periode: "Februari", provinsi: "DKI Jakarta", upah: 5245339 },
  { tahun: 2024, periode: "Februari", provinsi: "Jawa Barat", upah: 3352200 },
  { tahun: 2024, periode: "Februari", provinsi: "Jawa Tengah", upah: 2252660 },
  { tahun: 2024, periode: "Februari", provinsi: "D.I. Yogyakarta", upah: 2747486 },
  { tahun: 2024, periode: "Februari", provinsi: "Jawa Timur", upah: 2504262 },
  { tahun: 2024, periode: "Februari", provinsi: "Banten", upah: 4373788 },
  { tahun: 2024, periode: "Februari", provinsi: "Bali", upah: 3252629 },
  { tahun: 2024, periode: "Februari", provinsi: "Nusa Tenggara Barat", upah: 2310968 },
  { tahun: 2024, periode: "Februari", provinsi: "Nusa Tenggara Timur", upah: 2351384 },
  { tahun: 2024, periode: "Februari", provinsi: "Kalimantan Barat", upah: 2815188 },
  { tahun: 2024, periode: "Februari", provinsi: "Kalimantan Tengah", upah: 3088199 },
  { tahun: 2024, periode: "Februari", provinsi: "Kalimantan Selatan", upah: 3233740 },
  { tahun: 2024, periode: "Februari", provinsi: "Kalimantan Timur", upah: 4234455 },
  { tahun: 2024, periode: "Februari", provinsi: "Kalimantan Utara", upah: 3625922 },
  { tahun: 2024, periode: "Februari", provinsi: "Sulawesi Utara", upah: 3222825 },
  { tahun: 2024, periode: "Februari", provinsi: "Sulawesi Tengah", upah: 2593831 },
  { tahun: 2024, periode: "Februari", provinsi: "Sulawesi Selatan", upah: 2837690 },
  { tahun: 2024, periode: "Februari", provinsi: "Sulawesi Tenggara", upah: 2968534 },
  { tahun: 2024, periode: "Februari", provinsi: "Gorontalo", upah: 2623130 },
  { tahun: 2024, periode: "Februari", provinsi: "Sulawesi Barat", upah: 2283344 },
  { tahun: 2024, periode: "Februari", provinsi: "Maluku", upah: 2947443 },
  { tahun: 2024, periode: "Februari", provinsi: "Maluku Utara", upah: 2960526 },
  { tahun: 2024, periode: "Februari", provinsi: "Papua Barat", upah: 3001058 },
  { tahun: 2024, periode: "Februari", provinsi: "Papua Barat Daya", upah: 3717604 },
  { tahun: 2024, periode: "Februari", provinsi: "Papua", upah: 4559275 },
  { tahun: 2024, periode: "Februari", provinsi: "Papua Selatan", upah: 4464615 },
  { tahun: 2024, periode: "Februari", provinsi: "Papua Tengah", upah: 4436017 },
  { tahun: 2024, periode: "Februari", provinsi: "Papua Pegunungan", upah: 4556451 },

  // AGUSTUS 2024 (38 provinsi)
  { tahun: 2024, periode: "Agustus", provinsi: "Aceh", upah: 2624922 },
  { tahun: 2024, periode: "Agustus", provinsi: "Sumatera Utara", upah: 2760361 },
  { tahun: 2024, periode: "Agustus", provinsi: "Sumatera Barat", upah: 2772393 },
  { tahun: 2024, periode: "Agustus", provinsi: "Riau", upah: 3139242 },
  { tahun: 2024, periode: "Agustus", provinsi: "Jambi", upah: 2831081 },
  { tahun: 2024, periode: "Agustus", provinsi: "Sumatera Selatan", upah: 2886117 },
  { tahun: 2024, periode: "Agustus", provinsi: "Bengkulu", upah: 2839093 },
  { tahun: 2024, periode: "Agustus", provinsi: "Lampung", upah: 2517788 },
  { tahun: 2024, periode: "Agustus", provinsi: "Kepulauan Bangka Belitung", upah: 3264692 },
  { tahun: 2024, periode: "Agustus", provinsi: "Kepulauan Riau", upah: 4911036 },
  { tahun: 2024, periode: "Agustus", provinsi: "DKI Jakarta", upah: 5806940 },
  { tahun: 2024, periode: "Agustus", provinsi: "Jawa Barat", upah: 3774498 },
  { tahun: 2024, periode: "Agustus", provinsi: "Jawa Tengah", upah: 2405447 },
  { tahun: 2024, periode: "Agustus", provinsi: "D.I. Yogyakarta", upah: 2829890 },
  { tahun: 2024, periode: "Agustus", provinsi: "Jawa Timur", upah: 2713383 },
  { tahun: 2024, periode: "Agustus", provinsi: "Banten", upah: 4392768 },
  { tahun: 2024, periode: "Agustus", provinsi: "Bali", upah: 3403265 },
  { tahun: 2024, periode: "Agustus", provinsi: "Nusa Tenggara Barat", upah: 2365102 },
  { tahun: 2024, periode: "Agustus", provinsi: "Nusa Tenggara Timur", upah: 2370111 },
  { tahun: 2024, periode: "Agustus", provinsi: "Kalimantan Barat", upah: 2904061 },
  { tahun: 2024, periode: "Agustus", provinsi: "Kalimantan Tengah", upah: 3384610 },
  { tahun: 2024, periode: "Agustus", provinsi: "Kalimantan Selatan", upah: 3239646 },
  { tahun: 2024, periode: "Agustus", provinsi: "Kalimantan Timur", upah: 4400771 },
  { tahun: 2024, periode: "Agustus", provinsi: "Kalimantan Utara", upah: 3748909 },
  { tahun: 2024, periode: "Agustus", provinsi: "Sulawesi Utara", upah: 3453051 },
  { tahun: 2024, periode: "Agustus", provinsi: "Sulawesi Tengah", upah: 2863721 },
  { tahun: 2024, periode: "Agustus", provinsi: "Sulawesi Selatan", upah: 2992571 },
  { tahun: 2024, periode: "Agustus", provinsi: "Sulawesi Tenggara", upah: 2954690 },
  { tahun: 2024, periode: "Agustus", provinsi: "Gorontalo", upah: 2605876 },
  { tahun: 2024, periode: "Agustus", provinsi: "Sulawesi Barat", upah: 2443110 },
  { tahun: 2024, periode: "Agustus", provinsi: "Maluku", upah: 2925208 },
  { tahun: 2024, periode: "Agustus", provinsi: "Maluku Utara", upah: 3456786 },
  { tahun: 2024, periode: "Agustus", provinsi: "Papua Barat", upah: 3392758 },
  { tahun: 2024, periode: "Agustus", provinsi: "Papua Barat Daya", upah: 3739328 },
  { tahun: 2024, periode: "Agustus", provinsi: "Papua", upah: 4151674 },
  { tahun: 2024, periode: "Agustus", provinsi: "Papua Selatan", upah: 3639485 },
  { tahun: 2024, periode: "Agustus", provinsi: "Papua Tengah", upah: 5071157 },
  { tahun: 2024, periode: "Agustus", provinsi: "Papua Pegunungan", upah: 4089877 },

  // FEBRUARI 2025 (38 provinsi)
  { tahun: 2025, periode: "Februari", provinsi: "Aceh", upah: 2884151 },
  { tahun: 2025, periode: "Februari", provinsi: "Sumatera Utara", upah: 2647529 },
  { tahun: 2025, periode: "Februari", provinsi: "Sumatera Barat", upah: 2831404 },
  { tahun: 2025, periode: "Februari", provinsi: "Riau", upah: 3083274 },
  { tahun: 2025, periode: "Februari", provinsi: "Jambi", upah: 2789581 },
  { tahun: 2025, periode: "Februari", provinsi: "Sumatera Selatan", upah: 2727684 },
  { tahun: 2025, periode: "Februari", provinsi: "Bengkulu", upah: 2566215 },
  { tahun: 2025, periode: "Februari", provinsi: "Lampung", upah: 2320932 },
  { tahun: 2025, periode: "Februari", provinsi: "Kepulauan Bangka Belitung", upah: 3155887 },
  { tahun: 2025, periode: "Februari", provinsi: "Kepulauan Riau", upah: 4741492 },
  { tahun: 2025, periode: "Februari", provinsi: "DKI Jakarta", upah: 4878943 },
  { tahun: 2025, periode: "Februari", provinsi: "Jawa Barat", upah: 3258613 },
  { tahun: 2025, periode: "Februari", provinsi: "Jawa Tengah", upah: 2441045 },
  { tahun: 2025, periode: "Februari", provinsi: "D.I. Yogyakarta", upah: 2914645 },
  { tahun: 2025, periode: "Februari", provinsi: "Jawa Timur", upah: 2625050 },
  { tahun: 2025, periode: "Februari", provinsi: "Banten", upah: 4168622 },
  { tahun: 2025, periode: "Februari", provinsi: "Bali", upah: 3617339 },
  { tahun: 2025, periode: "Februari", provinsi: "Nusa Tenggara Barat", upah: 2377411 },
  { tahun: 2025, periode: "Februari", provinsi: "Nusa Tenggara Timur", upah: 2341352 },
  { tahun: 2025, periode: "Februari", provinsi: "Kalimantan Barat", upah: 2829690 },
  { tahun: 2025, periode: "Februari", provinsi: "Kalimantan Tengah", upah: 3265545 },
  { tahun: 2025, periode: "Februari", provinsi: "Kalimantan Selatan", upah: 3269734 },
  { tahun: 2025, periode: "Februari", provinsi: "Kalimantan Timur", upah: 4439658 },
  { tahun: 2025, periode: "Februari", provinsi: "Kalimantan Utara", upah: 4355707 },
  { tahun: 2025, periode: "Februari", provinsi: "Sulawesi Utara", upah: 3332950 },
  { tahun: 2025, periode: "Februari", provinsi: "Sulawesi Tengah", upah: 3077492 },
  { tahun: 2025, periode: "Februari", provinsi: "Sulawesi Selatan", upah: 2956256 },
  { tahun: 2025, periode: "Februari", provinsi: "Sulawesi Tenggara", upah: 2928215 },
  { tahun: 2025, periode: "Februari", provinsi: "Gorontalo", upah: 2506904 },
  { tahun: 2025, periode: "Februari", provinsi: "Sulawesi Barat", upah: 2608578 },
  { tahun: 2025, periode: "Februari", provinsi: "Maluku", upah: 2866807 },
  { tahun: 2025, periode: "Februari", provinsi: "Maluku Utara", upah: 3666126 },
  { tahun: 2025, periode: "Februari", provinsi: "Papua Barat", upah: 3459119 },
  { tahun: 2025, periode: "Februari", provinsi: "Papua Barat Daya", upah: 3644386 },
  { tahun: 2025, periode: "Februari", provinsi: "Papua", upah: 3984589 },
  { tahun: 2025, periode: "Februari", provinsi: "Papua Selatan", upah: 3865415 },
  { tahun: 2025, periode: "Februari", provinsi: "Papua Tengah", upah: 4747826 },
  { tahun: 2025, periode: "Februari", provinsi: "Papua Pegunungan", upah: 4133474 },

  // AGUSTUS 2025 (38 provinsi)
  { tahun: 2025, periode: "Agustus", provinsi: "Aceh", upah: 2837520 },
  { tahun: 2025, periode: "Agustus", provinsi: "Sumatera Utara", upah: 2815066 },
  { tahun: 2025, periode: "Agustus", provinsi: "Sumatera Barat", upah: 2911450 },
  { tahun: 2025, periode: "Agustus", provinsi: "Riau", upah: 3144261 },
  { tahun: 2025, periode: "Agustus", provinsi: "Jambi", upah: 2975646 },
  { tahun: 2025, periode: "Agustus", provinsi: "Sumatera Selatan", upah: 3015055 },
  { tahun: 2025, periode: "Agustus", provinsi: "Bengkulu", upah: 2935681 },
  { tahun: 2025, periode: "Agustus", provinsi: "Lampung", upah: 2520619 },
  { tahun: 2025, periode: "Agustus", provinsi: "Kepulauan Bangka Belitung", upah: 3202690 },
  { tahun: 2025, periode: "Agustus", provinsi: "Kepulauan Riau", upah: 4768990 },
  { tahun: 2025, periode: "Agustus", provinsi: "DKI Jakarta", upah: 5903603 },
  { tahun: 2025, periode: "Agustus", provinsi: "Jawa Barat", upah: 3768080 },
  { tahun: 2025, periode: "Agustus", provinsi: "Jawa Tengah", upah: 2528470 },
  { tahun: 2025, periode: "Agustus", provinsi: "D.I. Yogyakarta", upah: 2924613 },
  { tahun: 2025, periode: "Agustus", provinsi: "Jawa Timur", upah: 2899074 },
  { tahun: 2025, periode: "Agustus", provinsi: "Banten", upah: 4062488 },
  { tahun: 2025, periode: "Agustus", provinsi: "Bali", upah: 3639413 },
  { tahun: 2025, periode: "Agustus", provinsi: "Nusa Tenggara Barat", upah: 2569181 },
  { tahun: 2025, periode: "Agustus", provinsi: "Nusa Tenggara Timur", upah: 2674136 },
  { tahun: 2025, periode: "Agustus", provinsi: "Kalimantan Barat", upah: 2972111 },
  { tahun: 2025, periode: "Agustus", provinsi: "Kalimantan Tengah", upah: 3451676 },
  { tahun: 2025, periode: "Agustus", provinsi: "Kalimantan Selatan", upah: 3164480 },
  { tahun: 2025, periode: "Agustus", provinsi: "Kalimantan Timur", upah: 4475944 },
  { tahun: 2025, periode: "Agustus", provinsi: "Kalimantan Utara", upah: 3675921 },
  { tahun: 2025, periode: "Agustus", provinsi: "Sulawesi Utara", upah: 3420935 },
  { tahun: 2025, periode: "Agustus", provinsi: "Sulawesi Tengah", upah: 3056120 },
  { tahun: 2025, periode: "Agustus", provinsi: "Sulawesi Selatan", upah: 3060385 },
  { tahun: 2025, periode: "Agustus", provinsi: "Sulawesi Tenggara", upah: 3189724 },
  { tahun: 2025, periode: "Agustus", provinsi: "Gorontalo", upah: 2911813 },
  { tahun: 2025, periode: "Agustus", provinsi: "Sulawesi Barat", upah: 2698528 },
  { tahun: 2025, periode: "Agustus", provinsi: "Maluku", upah: 3100805 },
  { tahun: 2025, periode: "Agustus", provinsi: "Maluku Utara", upah: 3620219 },
  { tahun: 2025, periode: "Agustus", provinsi: "Papua Barat", upah: 3765973 },
  { tahun: 2025, periode: "Agustus", provinsi: "Papua Barat Daya", upah: 3837947 },
  { tahun: 2025, periode: "Agustus", provinsi: "Papua", upah: 4426645 },
  { tahun: 2025, periode: "Agustus", provinsi: "Papua Selatan", upah: 4264963 },
  { tahun: 2025, periode: "Agustus", provinsi: "Papua Tengah", upah: 4808336 },
  { tahun: 2025, periode: "Agustus", provinsi: "Papua Pegunungan", upah: 3941546 }
];

// ============================================
// PART 4: DATA PENDIDIKAN (LENGKAP)
// ============================================
const dataPendidikan = [
  // FEBRUARI 2023
  { tahun: 2023, periode: "Februari", pendidikan: "SD ke Bawah", jenisKelamin: "Laki-Laki", upah: 2187331 },
  { tahun: 2023, periode: "Februari", pendidikan: "SMP", jenisKelamin: "Laki-Laki", upah: 2423723 },
  { tahun: 2023, periode: "Februari", pendidikan: "SMA Umum", jenisKelamin: "Laki-Laki", upah: 3121133 },
  { tahun: 2023, periode: "Februari", pendidikan: "SMA Kejuruan", jenisKelamin: "Laki-Laki", upah: 3176585 },
  { tahun: 2023, periode: "Februari", pendidikan: "Diploma I/II/III", jenisKelamin: "Laki-Laki", upah: 4557633 },
  { tahun: 2023, periode: "Februari", pendidikan: "DIV/S1/S2/S3", jenisKelamin: "Laki-Laki", upah: 5451366 },
  { tahun: 2023, periode: "Februari", pendidikan: "SD ke Bawah", jenisKelamin: "Perempuan", upah: 1288726 },
  { tahun: 2023, periode: "Februari", pendidikan: "SMP", jenisKelamin: "Perempuan", upah: 1774438 },
  { tahun: 2023, periode: "Februari", pendidikan: "SMA Umum", jenisKelamin: "Perempuan", upah: 2049206 },
  { tahun: 2023, periode: "Februari", pendidikan: "SMA Kejuruan", jenisKelamin: "Perempuan", upah: 2299311 },
  { tahun: 2023, periode: "Februari", pendidikan: "Diploma I/II/III", jenisKelamin: "Perempuan", upah: 3056360 },
  { tahun: 2023, periode: "Februari", pendidikan: "DIV/S1/S2/S3", jenisKelamin: "Perempuan", upah: 3527038 },
  { tahun: 2023, periode: "Februari", pendidikan: "SD ke Bawah", jenisKelamin: "Laki-Laki dan Perempuan", upah: 1901210 },
  { tahun: 2023, periode: "Februari", pendidikan: "SMP", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2235533 },
  { tahun: 2023, periode: "Februari", pendidikan: "SMA Umum", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2790116 },
  { tahun: 2023, periode: "Februari", pendidikan: "SMA Kejuruan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2931141 },
  { tahun: 2023, periode: "Februari", pendidikan: "Diploma I/II/III", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3727710 },
  { tahun: 2023, periode: "Februari", pendidikan: "DIV/S1/S2/S3", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4460185 },

  // AGUSTUS 2023
  { tahun: 2023, periode: "Agustus", pendidikan: "SD ke Bawah", jenisKelamin: "Laki-Laki", upah: 2303412 },
  { tahun: 2023, periode: "Agustus", pendidikan: "SMP", jenisKelamin: "Laki-Laki", upah: 2564210 },
  { tahun: 2023, periode: "Agustus", pendidikan: "SMA Umum", jenisKelamin: "Laki-Laki", upah: 3299777 },
  { tahun: 2023, periode: "Agustus", pendidikan: "SMA Kejuruan", jenisKelamin: "Laki-Laki", upah: 3298295 },
  { tahun: 2023, periode: "Agustus", pendidikan: "Diploma I/II/III", jenisKelamin: "Laki-Laki", upah: 5152964 },
  { tahun: 2023, periode: "Agustus", pendidikan: "DIV/S1/S2/S3", jenisKelamin: "Laki-Laki", upah: 5823909 },
  { tahun: 2023, periode: "Agustus", pendidikan: "SD ke Bawah", jenisKelamin: "Perempuan", upah: 1360349 },
  { tahun: 2023, periode: "Agustus", pendidikan: "SMP", jenisKelamin: "Perempuan", upah: 1775168 },
  { tahun: 2023, periode: "Agustus", pendidikan: "SMA Umum", jenisKelamin: "Perempuan", upah: 2236857 },
  { tahun: 2023, periode: "Agustus", pendidikan: "SMA Kejuruan", jenisKelamin: "Perempuan", upah: 2356539 },
  { tahun: 2023, periode: "Agustus", pendidikan: "Diploma I/II/III", jenisKelamin: "Perempuan", upah: 3317454 },
  { tahun: 2023, periode: "Agustus", pendidikan: "DIV/S1/S2/S3", jenisKelamin: "Perempuan", upah: 3788849 },
  { tahun: 2023, periode: "Agustus", pendidikan: "SD ke Bawah", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2026197 },
  { tahun: 2023, periode: "Agustus", pendidikan: "SMP", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2341855 },
  { tahun: 2023, periode: "Agustus", pendidikan: "SMA Umum", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2975103 },
  { tahun: 2023, periode: "Agustus", pendidikan: "SMA Kejuruan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3028328 },
  { tahun: 2023, periode: "Agustus", pendidikan: "Diploma I/II/III", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4145294 },
  { tahun: 2023, periode: "Agustus", pendidikan: "DIV/S1/S2/S3", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4780244 },

  // FEBRUARI 2024
  { tahun: 2024, periode: "Februari", pendidikan: "SD ke Bawah", jenisKelamin: "Laki-Laki", upah: 2160072 },
  { tahun: 2024, periode: "Februari", pendidikan: "SMP", jenisKelamin: "Laki-Laki", upah: 2437389 },
  { tahun: 2024, periode: "Februari", pendidikan: "SMA Umum", jenisKelamin: "Laki-Laki", upah: 3180213 },
  { tahun: 2024, periode: "Februari", pendidikan: "SMA Kejuruan", jenisKelamin: "Laki-Laki", upah: 3148873 },
  { tahun: 2024, periode: "Februari", pendidikan: "Diploma I/II/III", jenisKelamin: "Laki-Laki", upah: 4883787 },
  { tahun: 2024, periode: "Februari", pendidikan: "DIV/S1/S2/S3", jenisKelamin: "Laki-Laki", upah: 5589830 },
  { tahun: 2024, periode: "Februari", pendidikan: "SD ke Bawah", jenisKelamin: "Perempuan", upah: 1307849 },
  { tahun: 2024, periode: "Februari", pendidikan: "SMP", jenisKelamin: "Perempuan", upah: 1616092 },
  { tahun: 2024, periode: "Februari", pendidikan: "SMA Umum", jenisKelamin: "Perempuan", upah: 2089956 },
  { tahun: 2024, periode: "Februari", pendidikan: "SMA Kejuruan", jenisKelamin: "Perempuan", upah: 2279243 },
  { tahun: 2024, periode: "Februari", pendidikan: "Diploma I/II/III", jenisKelamin: "Perempuan", upah: 2989947 },
  { tahun: 2024, periode: "Februari", pendidikan: "DIV/S1/S2/S3", jenisKelamin: "Perempuan", upah: 3862161 },
  { tahun: 2024, periode: "Februari", pendidikan: "SD ke Bawah", jenisKelamin: "Laki-Laki dan Perempuan", upah: 1915731 },
  { tahun: 2024, periode: "Februari", pendidikan: "SMP", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2194956 },
  { tahun: 2024, periode: "Februari", pendidikan: "SMA Umum", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2842749 },
  { tahun: 2024, periode: "Februari", pendidikan: "SMA Kejuruan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2891948 },
  { tahun: 2024, periode: "Februari", pendidikan: "Diploma I/II/III", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3868555 },
  { tahun: 2024, periode: "Februari", pendidikan: "DIV/S1/S2/S3", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4685241 },

  // AGUSTUS 2024
  { tahun: 2024, periode: "Agustus", pendidikan: "SD ke Bawah", jenisKelamin: "Laki-Laki", upah: 2358145 },
  { tahun: 2024, periode: "Agustus", pendidikan: "SMP", jenisKelamin: "Laki-Laki", upah: 2608154 },
  { tahun: 2024, periode: "Agustus", pendidikan: "SMA Umum", jenisKelamin: "Laki-Laki", upah: 3454382 },
  { tahun: 2024, periode: "Agustus", pendidikan: "SMA Kejuruan", jenisKelamin: "Laki-Laki", upah: 3356922 },
  { tahun: 2024, periode: "Agustus", pendidikan: "Diploma I/II/III", jenisKelamin: "Laki-Laki", upah: 5228663 },
  { tahun: 2024, periode: "Agustus", pendidikan: "DIV/S1/S2/S3", jenisKelamin: "Laki-Laki", upah: 5935507 },
  { tahun: 2024, periode: "Agustus", pendidikan: "SD ke Bawah", jenisKelamin: "Perempuan", upah: 1405204 },
  { tahun: 2024, periode: "Agustus", pendidikan: "SMP", jenisKelamin: "Perempuan", upah: 1786888 },
  { tahun: 2024, periode: "Agustus", pendidikan: "SMA Umum", jenisKelamin: "Perempuan", upah: 2289222 },
  { tahun: 2024, periode: "Agustus", pendidikan: "SMA Kejuruan", jenisKelamin: "Perempuan", upah: 2437791 },
  { tahun: 2024, periode: "Agustus", pendidikan: "Diploma I/II/III", jenisKelamin: "Perempuan", upah: 3468993 },
  { tahun: 2024, periode: "Agustus", pendidikan: "DIV/S1/S2/S3", jenisKelamin: "Perempuan", upah: 4064351 },
  { tahun: 2024, periode: "Agustus", pendidikan: "SD ke Bawah", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2080684 },
  { tahun: 2024, periode: "Agustus", pendidikan: "SMP", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2379941 },
  { tahun: 2024, periode: "Agustus", pendidikan: "SMA Umum", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3092781 },
  { tahun: 2024, periode: "Agustus", pendidikan: "SMA Kejuruan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3091621 },
  { tahun: 2024, periode: "Agustus", pendidikan: "Diploma I/II/III", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4254733 },
  { tahun: 2024, periode: "Agustus", pendidikan: "DIV/S1/S2/S3", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4960719 },

  // FEBRUARI 2025
  { tahun: 2025, periode: "Februari", pendidikan: "SD ke Bawah", jenisKelamin: "Laki-Laki", upah: 2399680 },
  { tahun: 2025, periode: "Februari", pendidikan: "SMP", jenisKelamin: "Laki-Laki", upah: 2745784 },
  { tahun: 2025, periode: "Februari", pendidikan: "SMA Umum", jenisKelamin: "Laki-Laki", upah: 3343998 },
  { tahun: 2025, periode: "Februari", pendidikan: "SMA Kejuruan", jenisKelamin: "Laki-Laki", upah: 3255051 },
  { tahun: 2025, periode: "Februari", pendidikan: "Diploma I/II/III", jenisKelamin: "Laki-Laki", upah: 4680178 },
  { tahun: 2025, periode: "Februari", pendidikan: "DIV/S1/S2/S3", jenisKelamin: "Laki-Laki", upah: 5036565 },
  { tahun: 2025, periode: "Februari", pendidikan: "SD ke Bawah", jenisKelamin: "Perempuan", upah: 1269028 },
  { tahun: 2025, periode: "Februari", pendidikan: "SMP", jenisKelamin: "Perempuan", upah: 1809860 },
  { tahun: 2025, periode: "Februari", pendidikan: "SMA Umum", jenisKelamin: "Perempuan", upah: 2192347 },
  { tahun: 2025, periode: "Februari", pendidikan: "SMA Kejuruan", jenisKelamin: "Perempuan", upah: 2308621 },
  { tahun: 2025, periode: "Februari", pendidikan: "Diploma I/II/III", jenisKelamin: "Perempuan", upah: 3238558 },
  { tahun: 2025, periode: "Februari", pendidikan: "DIV/S1/S2/S3", jenisKelamin: "Perempuan", upah: 3746868 },
  { tahun: 2025, periode: "Februari", pendidikan: "SD ke Bawah", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2073275 },
  { tahun: 2025, periode: "Februari", pendidikan: "SMP", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2481444 },
  { tahun: 2025, periode: "Februari", pendidikan: "SMA Umum", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2982835 },
  { tahun: 2025, periode: "Februari", pendidikan: "SMA Kejuruan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2965677 },
  { tahun: 2025, periode: "Februari", pendidikan: "Diploma I/II/III", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3890826 },
  { tahun: 2025, periode: "Februari", pendidikan: "DIV/S1/S2/S3", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4350202 },

  // AGUSTUS 2025
  { tahun: 2025, periode: "Agustus", pendidikan: "SD ke Bawah", jenisKelamin: "Laki-Laki", upah: 2458735 },
  { tahun: 2025, periode: "Agustus", pendidikan: "SMP", jenisKelamin: "Laki-Laki", upah: 2739732 },
  { tahun: 2025, periode: "Agustus", pendidikan: "SMA Umum", jenisKelamin: "Laki-Laki", upah: 3504935 },
  { tahun: 2025, periode: "Agustus", pendidikan: "SMA Kejuruan", jenisKelamin: "Laki-Laki", upah: 3475834 },
  { tahun: 2025, periode: "Agustus", pendidikan: "Diploma I/II/III", jenisKelamin: "Laki-Laki", upah: 5570019 },
  { tahun: 2025, periode: "Agustus", pendidikan: "DIV/S1/S2/S3", jenisKelamin: "Laki-Laki", upah: 5675049 },
  { tahun: 2025, periode: "Agustus", pendidikan: "SD ke Bawah", jenisKelamin: "Perempuan", upah: 1530696 },
  { tahun: 2025, periode: "Agustus", pendidikan: "SMP", jenisKelamin: "Perempuan", upah: 1832502 },
  { tahun: 2025, periode: "Agustus", pendidikan: "SMA Umum", jenisKelamin: "Perempuan", upah: 2388199 },
  { tahun: 2025, periode: "Agustus", pendidikan: "SMA Kejuruan", jenisKelamin: "Perempuan", upah: 2707029 },
  { tahun: 2025, periode: "Agustus", pendidikan: "Diploma I/II/III", jenisKelamin: "Perempuan", upah: 3628700 },
  { tahun: 2025, periode: "Agustus", pendidikan: "DIV/S1/S2/S3", jenisKelamin: "Perempuan", upah: 4033781 },
  { tahun: 2025, periode: "Agustus", pendidikan: "SD ke Bawah", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2187199 },
  { tahun: 2025, periode: "Agustus", pendidikan: "SMP", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2482817 },
  { tahun: 2025, periode: "Agustus", pendidikan: "SMA Umum", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3149687 },
  { tahun: 2025, periode: "Agustus", pendidikan: "SMA Kejuruan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3256604 },
  { tahun: 2025, periode: "Agustus", pendidikan: "Diploma I/II/III", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4500603 },
  { tahun: 2025, periode: "Agustus", pendidikan: "DIV/S1/S2/S3", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4804860 }
];

// ============================================
// PART 5: DATA KELOMPOK UMUR (LENGKAP)
// ============================================
const dataUmur = [
  // FEBRUARI 2023 - Laki-Laki
  { tahun: 2023, periode: "Februari", umur: "15-19", jenisKelamin: "Laki-Laki", upah: 1893529 },
  { tahun: 2023, periode: "Februari", umur: "20-24", jenisKelamin: "Laki-Laki", upah: 2447247 },
  { tahun: 2023, periode: "Februari", umur: "25-29", jenisKelamin: "Laki-Laki", upah: 2826696 },
  { tahun: 2023, periode: "Februari", umur: "30-34", jenisKelamin: "Laki-Laki", upah: 3217400 },
  { tahun: 2023, periode: "Februari", umur: "35-39", jenisKelamin: "Laki-Laki", upah: 3568522 },
  { tahun: 2023, periode: "Februari", umur: "40-44", jenisKelamin: "Laki-Laki", upah: 3694902 },
  { tahun: 2023, periode: "Februari", umur: "45-49", jenisKelamin: "Laki-Laki", upah: 3667149 },
  { tahun: 2023, periode: "Februari", umur: "50-54", jenisKelamin: "Laki-Laki", upah: 3999054 },
  { tahun: 2023, periode: "Februari", umur: "55-59", jenisKelamin: "Laki-Laki", upah: 3899094 },
  { tahun: 2023, periode: "Februari", umur: "60+", jenisKelamin: "Laki-Laki", upah: 2716213 },
  // FEBRUARI 2023 - Perempuan
  { tahun: 2023, periode: "Februari", umur: "15-19", jenisKelamin: "Perempuan", upah: 1602579 },
  { tahun: 2023, periode: "Februari", umur: "20-24", jenisKelamin: "Perempuan", upah: 2121006 },
  { tahun: 2023, periode: "Februari", umur: "25-29", jenisKelamin: "Perempuan", upah: 2332750 },
  { tahun: 2023, periode: "Februari", umur: "30-34", jenisKelamin: "Perempuan", upah: 2419375 },
  { tahun: 2023, periode: "Februari", umur: "35-39", jenisKelamin: "Perempuan", upah: 2511314 },
  { tahun: 2023, periode: "Februari", umur: "40-44", jenisKelamin: "Perempuan", upah: 2662618 },
  { tahun: 2023, periode: "Februari", umur: "45-49", jenisKelamin: "Perempuan", upah: 2653640 },
  { tahun: 2023, periode: "Februari", umur: "50-54", jenisKelamin: "Perempuan", upah: 2996701 },
  { tahun: 2023, periode: "Februari", umur: "55-59", jenisKelamin: "Perempuan", upah: 3079114 },
  { tahun: 2023, periode: "Februari", umur: "60+", jenisKelamin: "Perempuan", upah: 1401044 },
  // FEBRUARI 2023 - Gabungan
  { tahun: 2023, periode: "Februari", umur: "15-19", jenisKelamin: "Laki-Laki dan Perempuan", upah: 1764800 },
  { tahun: 2023, periode: "Februari", umur: "20-24", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2311432 },
  { tahun: 2023, periode: "Februari", umur: "25-29", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2649437 },
  { tahun: 2023, periode: "Februari", umur: "30-34", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2960917 },
  { tahun: 2023, periode: "Februari", umur: "35-39", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3225141 },
  { tahun: 2023, periode: "Februari", umur: "40-44", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3323249 },
  { tahun: 2023, periode: "Februari", umur: "45-49", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3333395 },
  { tahun: 2023, periode: "Februari", umur: "50-54", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3656310 },
  { tahun: 2023, periode: "Februari", umur: "55-59", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3613046 },
  { tahun: 2023, periode: "Februari", umur: "60+", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2314207 },

  // AGUSTUS 2023 - Laki-Laki
  { tahun: 2023, periode: "Agustus", umur: "15-19", jenisKelamin: "Laki-Laki", upah: 1966526 },
  { tahun: 2023, periode: "Agustus", umur: "20-24", jenisKelamin: "Laki-Laki", upah: 2567617 },
  { tahun: 2023, periode: "Agustus", umur: "25-29", jenisKelamin: "Laki-Laki", upah: 3038453 },
  { tahun: 2023, periode: "Agustus", umur: "30-34", jenisKelamin: "Laki-Laki", upah: 3417997 },
  { tahun: 2023, periode: "Agustus", umur: "35-39", jenisKelamin: "Laki-Laki", upah: 3740901 },
  { tahun: 2023, periode: "Agustus", umur: "40-44", jenisKelamin: "Laki-Laki", upah: 3918268 },
  { tahun: 2023, periode: "Agustus", umur: "45-49", jenisKelamin: "Laki-Laki", upah: 4108065 },
  { tahun: 2023, periode: "Agustus", umur: "50-54", jenisKelamin: "Laki-Laki", upah: 4231106 },
  { tahun: 2023, periode: "Agustus", umur: "55-59", jenisKelamin: "Laki-Laki", upah: 4072093 },
  { tahun: 2023, periode: "Agustus", umur: "60+", jenisKelamin: "Laki-Laki", upah: 3248388 },
  // AGUSTUS 2023 - Perempuan
  { tahun: 2023, periode: "Agustus", umur: "15-19", jenisKelamin: "Perempuan", upah: 1680317 },
  { tahun: 2023, periode: "Agustus", umur: "20-24", jenisKelamin: "Perempuan", upah: 2214005 },
  { tahun: 2023, periode: "Agustus", umur: "25-29", jenisKelamin: "Perempuan", upah: 2555596 },
  { tahun: 2023, periode: "Agustus", umur: "30-34", jenisKelamin: "Perempuan", upah: 2737094 },
  { tahun: 2023, periode: "Agustus", umur: "35-39", jenisKelamin: "Perempuan", upah: 2837829 },
  { tahun: 2023, periode: "Agustus", umur: "40-44", jenisKelamin: "Perempuan", upah: 2860297 },
  { tahun: 2023, periode: "Agustus", umur: "45-49", jenisKelamin: "Perempuan", upah: 2874197 },
  { tahun: 2023, periode: "Agustus", umur: "50-54", jenisKelamin: "Perempuan", upah: 3233495 },
  { tahun: 2023, periode: "Agustus", umur: "55-59", jenisKelamin: "Perempuan", upah: 3429795 },
  { tahun: 2023, periode: "Agustus", umur: "60+", jenisKelamin: "Perempuan", upah: 1616782 },
  // AGUSTUS 2023 - Gabungan
  { tahun: 2023, periode: "Agustus", umur: "15-19", jenisKelamin: "Laki-Laki dan Perempuan", upah: 1832683 },
  { tahun: 2023, periode: "Agustus", umur: "20-24", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2416063 },
  { tahun: 2023, periode: "Agustus", umur: "25-29", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2862566 },
  { tahun: 2023, periode: "Agustus", umur: "30-34", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3197620 },
  { tahun: 2023, periode: "Agustus", umur: "35-39", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3449484 },
  { tahun: 2023, periode: "Agustus", umur: "40-44", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3566012 },
  { tahun: 2023, periode: "Agustus", umur: "45-49", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3704483 },
  { tahun: 2023, periode: "Agustus", umur: "50-54", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3908209 },
  { tahun: 2023, periode: "Agustus", umur: "55-59", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3850635 },
  { tahun: 2023, periode: "Agustus", umur: "60+", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2772678 },

  // FEBRUARI 2024 - Laki-Laki
  { tahun: 2024, periode: "Februari", umur: "15-19", jenisKelamin: "Laki-Laki", upah: 1804509 },
  { tahun: 2024, periode: "Februari", umur: "20-24", jenisKelamin: "Laki-Laki", upah: 2423458 },
  { tahun: 2024, periode: "Februari", umur: "25-29", jenisKelamin: "Laki-Laki", upah: 3009612 },
  { tahun: 2024, periode: "Februari", umur: "30-34", jenisKelamin: "Laki-Laki", upah: 3251315 },
  { tahun: 2024, periode: "Februari", umur: "35-39", jenisKelamin: "Laki-Laki", upah: 3594108 },
  { tahun: 2024, periode: "Februari", umur: "40-44", jenisKelamin: "Laki-Laki", upah: 3756403 },
  { tahun: 2024, periode: "Februari", umur: "45-49", jenisKelamin: "Laki-Laki", upah: 3896229 },
  { tahun: 2024, periode: "Februari", umur: "50-54", jenisKelamin: "Laki-Laki", upah: 4124829 },
  { tahun: 2024, periode: "Februari", umur: "55-59", jenisKelamin: "Laki-Laki", upah: 3892651 },
  { tahun: 2024, periode: "Februari", umur: "60+", jenisKelamin: "Laki-Laki", upah: 2563914 },
  // FEBRUARI 2024 - Perempuan
  { tahun: 2024, periode: "Februari", umur: "15-19", jenisKelamin: "Perempuan", upah: 1538908 },
  { tahun: 2024, periode: "Februari", umur: "20-24", jenisKelamin: "Perempuan", upah: 2095009 },
  { tahun: 2024, periode: "Februari", umur: "25-29", jenisKelamin: "Perempuan", upah: 2644682 },
  { tahun: 2024, periode: "Februari", umur: "30-34", jenisKelamin: "Perempuan", upah: 2554151 },
  { tahun: 2024, periode: "Februari", umur: "35-39", jenisKelamin: "Perempuan", upah: 2587829 },
  { tahun: 2024, periode: "Februari", umur: "40-44", jenisKelamin: "Perempuan", upah: 2877468 },
  { tahun: 2024, periode: "Februari", umur: "45-49", jenisKelamin: "Perempuan", upah: 2913656 },
  { tahun: 2024, periode: "Februari", umur: "50-54", jenisKelamin: "Perempuan", upah: 3272701 },
  { tahun: 2024, periode: "Februari", umur: "55-59", jenisKelamin: "Perempuan", upah: 3410936 },
  { tahun: 2024, periode: "Februari", umur: "60+", jenisKelamin: "Perempuan", upah: 1611397 },
  // FEBRUARI 2024 - Gabungan
  { tahun: 2024, periode: "Februari", umur: "15-19", jenisKelamin: "Laki-Laki dan Perempuan", upah: 1678609 },
  { tahun: 2024, periode: "Februari", umur: "20-24", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2278073 },
  { tahun: 2024, periode: "Februari", umur: "25-29", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2880988 },
  { tahun: 2024, periode: "Februari", umur: "30-34", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3027008 },
  { tahun: 2024, periode: "Februari", umur: "35-39", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3258311 },
  { tahun: 2024, periode: "Februari", umur: "40-44", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3463287 },
  { tahun: 2024, periode: "Februari", umur: "45-49", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3571819 },
  { tahun: 2024, periode: "Februari", umur: "50-54", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3829590 },
  { tahun: 2024, periode: "Februari", umur: "55-59", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3722747 },
  { tahun: 2024, periode: "Februari", umur: "60+", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2284357 },

  // AGUSTUS 2024 - Laki-Laki
  { tahun: 2024, periode: "Agustus", umur: "15-19", jenisKelamin: "Laki-Laki", upah: 1985186 },
  { tahun: 2024, periode: "Agustus", umur: "20-24", jenisKelamin: "Laki-Laki", upah: 2573387 },
  { tahun: 2024, periode: "Agustus", umur: "25-29", jenisKelamin: "Laki-Laki", upah: 3092744 },
  { tahun: 2024, periode: "Agustus", umur: "30-34", jenisKelamin: "Laki-Laki", upah: 3589442 },
  { tahun: 2024, periode: "Agustus", umur: "35-39", jenisKelamin: "Laki-Laki", upah: 3923971 },
  { tahun: 2024, periode: "Agustus", umur: "40-44", jenisKelamin: "Laki-Laki", upah: 3990221 },
  { tahun: 2024, periode: "Agustus", umur: "45-49", jenisKelamin: "Laki-Laki", upah: 4110009 },
  { tahun: 2024, periode: "Agustus", umur: "50-54", jenisKelamin: "Laki-Laki", upah: 4257022 },
  { tahun: 2024, periode: "Agustus", umur: "55-59", jenisKelamin: "Laki-Laki", upah: 4171814 },
  { tahun: 2024, periode: "Agustus", umur: "60+", jenisKelamin: "Laki-Laki", upah: 3045700 },
  // AGUSTUS 2024 - Perempuan
  { tahun: 2024, periode: "Agustus", umur: "15-19", jenisKelamin: "Perempuan", upah: 1795024 },
  { tahun: 2024, periode: "Agustus", umur: "20-24", jenisKelamin: "Perempuan", upah: 2263490 },
  { tahun: 2024, periode: "Agustus", umur: "25-29", jenisKelamin: "Perempuan", upah: 2704835 },
  { tahun: 2024, periode: "Agustus", umur: "30-34", jenisKelamin: "Perempuan", upah: 2967250 },
  { tahun: 2024, periode: "Agustus", umur: "35-39", jenisKelamin: "Perempuan", upah: 3013079 },
  { tahun: 2024, periode: "Agustus", umur: "40-44", jenisKelamin: "Perempuan", upah: 3024253 },
  { tahun: 2024, periode: "Agustus", umur: "45-49", jenisKelamin: "Perempuan", upah: 3003699 },
  { tahun: 2024, periode: "Agustus", umur: "50-54", jenisKelamin: "Perempuan", upah: 3244417 },
  { tahun: 2024, periode: "Agustus", umur: "55-59", jenisKelamin: "Perempuan", upah: 3467989 },
  { tahun: 2024, periode: "Agustus", umur: "60+", jenisKelamin: "Perempuan", upah: 1669230 },
  // AGUSTUS 2024 - Gabungan
  { tahun: 2024, periode: "Agustus", umur: "15-19", jenisKelamin: "Laki-Laki dan Perempuan", upah: 1899846 },
  { tahun: 2024, periode: "Agustus", umur: "20-24", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2438093 },
  { tahun: 2024, periode: "Agustus", umur: "25-29", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2951664 },
  { tahun: 2024, periode: "Agustus", umur: "30-34", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3392392 },
  { tahun: 2024, periode: "Agustus", umur: "35-39", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3627292 },
  { tahun: 2024, periode: "Agustus", umur: "40-44", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3671374 },
  { tahun: 2024, periode: "Agustus", umur: "45-49", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3735852 },
  { tahun: 2024, periode: "Agustus", umur: "50-54", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3926132 },
  { tahun: 2024, periode: "Agustus", umur: "55-59", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3930678 },
  { tahun: 2024, periode: "Agustus", umur: "60+", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2630986 },

  // FEBRUARI 2025 - Laki-Laki
  { tahun: 2025, periode: "Februari", umur: "15-19", jenisKelamin: "Laki-Laki", upah: 2010112 },
  { tahun: 2025, periode: "Februari", umur: "20-24", jenisKelamin: "Laki-Laki", upah: 2573221 },
  { tahun: 2025, periode: "Februari", umur: "25-29", jenisKelamin: "Laki-Laki", upah: 3142100 },
  { tahun: 2025, periode: "Februari", umur: "30-34", jenisKelamin: "Laki-Laki", upah: 3357596 },
  { tahun: 2025, periode: "Februari", umur: "35-39", jenisKelamin: "Laki-Laki", upah: 3667696 },
  { tahun: 2025, periode: "Februari", umur: "40-44", jenisKelamin: "Laki-Laki", upah: 3662319 },
  { tahun: 2025, periode: "Februari", umur: "45-49", jenisKelamin: "Laki-Laki", upah: 4004225 },
  { tahun: 2025, periode: "Februari", umur: "50-54", jenisKelamin: "Laki-Laki", upah: 3801906 },
  { tahun: 2025, periode: "Februari", umur: "55-59", jenisKelamin: "Laki-Laki", upah: 3705050 },
  { tahun: 2025, periode: "Februari", umur: "60+", jenisKelamin: "Laki-Laki", upah: 2643067 },
  // FEBRUARI 2025 - Perempuan
  { tahun: 2025, periode: "Februari", umur: "15-19", jenisKelamin: "Perempuan", upah: 1817435 },
  { tahun: 2025, periode: "Februari", umur: "20-24", jenisKelamin: "Perempuan", upah: 2209773 },
  { tahun: 2025, periode: "Februari", umur: "25-29", jenisKelamin: "Perempuan", upah: 2529779 },
  { tahun: 2025, periode: "Februari", umur: "30-34", jenisKelamin: "Perempuan", upah: 2551394 },
  { tahun: 2025, periode: "Februari", umur: "35-39", jenisKelamin: "Perempuan", upah: 2799320 },
  { tahun: 2025, periode: "Februari", umur: "40-44", jenisKelamin: "Perempuan", upah: 2855543 },
  { tahun: 2025, periode: "Februari", umur: "45-49", jenisKelamin: "Perempuan", upah: 2748109 },
  { tahun: 2025, periode: "Februari", umur: "50-54", jenisKelamin: "Perempuan", upah: 3176998 },
  { tahun: 2025, periode: "Februari", umur: "55-59", jenisKelamin: "Perempuan", upah: 3401725 },
  { tahun: 2025, periode: "Februari", umur: "60+", jenisKelamin: "Perempuan", upah: 1979782 },
  // FEBRUARI 2025 - Gabungan
  { tahun: 2025, periode: "Februari", umur: "15-19", jenisKelamin: "Laki-Laki dan Perempuan", upah: 1917807 },
  { tahun: 2025, periode: "Februari", umur: "20-24", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2411408 },
  { tahun: 2025, periode: "Februari", umur: "25-29", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2912764 },
  { tahun: 2025, periode: "Februari", umur: "30-34", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3091360 },
  { tahun: 2025, periode: "Februari", umur: "35-39", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3372983 },
  { tahun: 2025, periode: "Februari", umur: "40-44", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3394391 },
  { tahun: 2025, periode: "Februari", umur: "45-49", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3580228 },
  { tahun: 2025, periode: "Februari", umur: "50-54", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3590779 },
  { tahun: 2025, periode: "Februari", umur: "55-59", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3599129 },
  { tahun: 2025, periode: "Februari", umur: "60+", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2444927 },

  // AGUSTUS 2025 - Laki-Laki
  { tahun: 2025, periode: "Agustus", umur: "15-19", jenisKelamin: "Laki-Laki", upah: 2172685 },
  { tahun: 2025, periode: "Agustus", umur: "20-24", jenisKelamin: "Laki-Laki", upah: 2739351 },
  { tahun: 2025, periode: "Agustus", umur: "25-29", jenisKelamin: "Laki-Laki", upah: 3273680 },
  { tahun: 2025, periode: "Agustus", umur: "30-34", jenisKelamin: "Laki-Laki", upah: 3604948 },
  { tahun: 2025, periode: "Agustus", umur: "35-39", jenisKelamin: "Laki-Laki", upah: 3893265 },
  { tahun: 2025, periode: "Agustus", umur: "40-44", jenisKelamin: "Laki-Laki", upah: 3991914 },
  { tahun: 2025, periode: "Agustus", umur: "45-49", jenisKelamin: "Laki-Laki", upah: 4181802 },
  { tahun: 2025, periode: "Agustus", umur: "50-54", jenisKelamin: "Laki-Laki", upah: 4303596 },
  { tahun: 2025, periode: "Agustus", umur: "55-59", jenisKelamin: "Laki-Laki", upah: 3944260 },
  { tahun: 2025, periode: "Agustus", umur: "60+", jenisKelamin: "Laki-Laki", upah: 2844051 },
  // AGUSTUS 2025 - Perempuan
  { tahun: 2025, periode: "Agustus", umur: "15-19", jenisKelamin: "Perempuan", upah: 1829883 },
  { tahun: 2025, periode: "Agustus", umur: "20-24", jenisKelamin: "Perempuan", upah: 2414396 },
  { tahun: 2025, periode: "Agustus", umur: "25-29", jenisKelamin: "Perempuan", upah: 2874233 },
  { tahun: 2025, periode: "Agustus", umur: "30-34", jenisKelamin: "Perempuan", upah: 3033999 },
  { tahun: 2025, periode: "Agustus", umur: "35-39", jenisKelamin: "Perempuan", upah: 3056083 },
  { tahun: 2025, periode: "Agustus", umur: "40-44", jenisKelamin: "Perempuan", upah: 3080555 },
  { tahun: 2025, periode: "Agustus", umur: "45-49", jenisKelamin: "Perempuan", upah: 3152117 },
  { tahun: 2025, periode: "Agustus", umur: "50-54", jenisKelamin: "Perempuan", upah: 3151761 },
  { tahun: 2025, periode: "Agustus", umur: "55-59", jenisKelamin: "Perempuan", upah: 3588930 },
  { tahun: 2025, periode: "Agustus", umur: "60+", jenisKelamin: "Perempuan", upah: 1801184 },
  // AGUSTUS 2025 - Gabungan
  { tahun: 2025, periode: "Agustus", umur: "15-19", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2016352 },
  { tahun: 2025, periode: "Agustus", umur: "20-24", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2598018 },
  { tahun: 2025, periode: "Agustus", umur: "25-29", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3123993 },
  { tahun: 2025, periode: "Agustus", umur: "30-34", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3415148 },
  { tahun: 2025, periode: "Agustus", umur: "35-39", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3616348 },
  { tahun: 2025, periode: "Agustus", umur: "40-44", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3683485 },
  { tahun: 2025, periode: "Agustus", umur: "45-49", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3842679 },
  { tahun: 2025, periode: "Agustus", umur: "50-54", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3922659 },
  { tahun: 2025, periode: "Agustus", umur: "55-59", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3823919 },
  { tahun: 2025, periode: "Agustus", umur: "60+", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2534895 }
];

// ============================================
// PART 6: DATA LAPANGAN USAHA (LENGKAP)
// ============================================
const dataUsaha = [
  // FEBRUARI 2023
  { tahun: 2023, periode: "Februari", usaha: "Pertanian, Kehutanan, dan Perikanan", jenisKelamin: "Laki-Laki", upah: 2226655 },
  { tahun: 2023, periode: "Februari", usaha: "Pertambangan dan Penggalian", jenisKelamin: "Laki-Laki", upah: 4599829 },
  { tahun: 2023, periode: "Februari", usaha: "Industri Pengolahan", jenisKelamin: "Laki-Laki", upah: 3263021 },
  { tahun: 2023, periode: "Februari", usaha: "Pengadaan Listrik, Gas, Uap/Air Panas dan Udara Dingin", jenisKelamin: "Laki-Laki", upah: 4333824 },
  { tahun: 2023, periode: "Februari", usaha: "Treatment Air, Sampah dan Daur Ulang", jenisKelamin: "Laki-Laki", upah: 2696372 },
  { tahun: 2023, periode: "Februari", usaha: "Konstruksi", jenisKelamin: "Laki-Laki", upah: 3000968 },
  { tahun: 2023, periode: "Februari", usaha: "Perdagangan Besar dan Eceran, Reparasi Mobil dan Motor", jenisKelamin: "Laki-Laki", upah: 2634031 },
  { tahun: 2023, periode: "Februari", usaha: "Pengangkutan dan Pergudangan", jenisKelamin: "Laki-Laki", upah: 3564555 },
  { tahun: 2023, periode: "Februari", usaha: "Penyediaan Akomodasi dan Makan Minum", jenisKelamin: "Laki-Laki", upah: 2540950 },
  { tahun: 2023, periode: "Februari", usaha: "Informasi dan Komunikasi", jenisKelamin: "Laki-Laki", upah: 4455674 },
  { tahun: 2023, periode: "Februari", usaha: "Aktivitas Keuangan dan Asuransi", jenisKelamin: "Laki-Laki", upah: 4906169 },
  { tahun: 2023, periode: "Februari", usaha: "Real Estat", jenisKelamin: "Laki-Laki", upah: 5132904 },
  { tahun: 2023, periode: "Februari", usaha: "Aktivitas Profesional dan Perusahaan", jenisKelamin: "Laki-Laki", upah: 3573871 },
  { tahun: 2023, periode: "Februari", usaha: "Administrasi Pemerintahan, Pertahanan, dan Jaminan Sosial", jenisKelamin: "Laki-Laki", upah: 4072640 },
  { tahun: 2023, periode: "Februari", usaha: "Pendidikan", jenisKelamin: "Laki-Laki", upah: 2903432 },
  { tahun: 2023, periode: "Februari", usaha: "Aktivitas Kesehatan dan Kegiatan Sosial", jenisKelamin: "Laki-Laki", upah: 4193059 },
  { tahun: 2023, periode: "Februari", usaha: "Aktivitas Jasa Lainnya", jenisKelamin: "Laki-Laki", upah: 2359500 },
  { tahun: 2023, periode: "Februari", usaha: "Pertanian, Kehutanan, dan Perikanan", jenisKelamin: "Perempuan", upah: 1457707 },
  { tahun: 2023, periode: "Februari", usaha: "Pertambangan dan Penggalian", jenisKelamin: "Perempuan", upah: 4435014 },
  { tahun: 2023, periode: "Februari", usaha: "Industri Pengolahan", jenisKelamin: "Perempuan", upah: 2415364 },
  { tahun: 2023, periode: "Februari", usaha: "Pengadaan Listrik, Gas, Uap/Air Panas dan Udara Dingin", jenisKelamin: "Perempuan", upah: 3580952 },
  { tahun: 2023, periode: "Februari", usaha: "Treatment Air, Sampah dan Daur Ulang", jenisKelamin: "Perempuan", upah: 2147967 },
  { tahun: 2023, periode: "Februari", usaha: "Konstruksi", jenisKelamin: "Perempuan", upah: 5057451 },
  { tahun: 2023, periode: "Februari", usaha: "Perdagangan Besar dan Eceran, Reparasi Mobil dan Motor", jenisKelamin: "Perempuan", upah: 2241471 },
  { tahun: 2023, periode: "Februari", usaha: "Pengangkutan dan Pergudangan", jenisKelamin: "Perempuan", upah: 3804636 },
  { tahun: 2023, periode: "Februari", usaha: "Penyediaan Akomodasi dan Makan Minum", jenisKelamin: "Perempuan", upah: 1712244 },
  { tahun: 2023, periode: "Februari", usaha: "Informasi dan Komunikasi", jenisKelamin: "Perempuan", upah: 4097641 },
  { tahun: 2023, periode: "Februari", usaha: "Aktivitas Keuangan dan Asuransi", jenisKelamin: "Perempuan", upah: 4612313 },
  { tahun: 2023, periode: "Februari", usaha: "Real Estat", jenisKelamin: "Perempuan", upah: 3291107 },
  { tahun: 2023, periode: "Februari", usaha: "Aktivitas Profesional dan Perusahaan", jenisKelamin: "Perempuan", upah: 3478468 },
  { tahun: 2023, periode: "Februari", usaha: "Administrasi Pemerintahan, Pertahanan, dan Jaminan Sosial", jenisKelamin: "Perempuan", upah: 3434639 },
  { tahun: 2023, periode: "Februari", usaha: "Pendidikan", jenisKelamin: "Perempuan", upah: 2223403 },
  { tahun: 2023, periode: "Februari", usaha: "Aktivitas Kesehatan dan Kegiatan Sosial", jenisKelamin: "Perempuan", upah: 3248856 },
  { tahun: 2023, periode: "Februari", usaha: "Aktivitas Jasa Lainnya", jenisKelamin: "Perempuan", upah: 1445751 },
  { tahun: 2023, periode: "Februari", usaha: "Pertanian, Kehutanan, dan Perikanan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2062328 },
  { tahun: 2023, periode: "Februari", usaha: "Pertambangan dan Penggalian", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4591764 },
  { tahun: 2023, periode: "Februari", usaha: "Industri Pengolahan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2963061 },
  { tahun: 2023, periode: "Februari", usaha: "Pengadaan Listrik, Gas, Uap/Air Panas dan Udara Dingin", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4261802 },
  { tahun: 2023, periode: "Februari", usaha: "Treatment Air, Sampah dan Daur Ulang", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2605373 },
  { tahun: 2023, periode: "Februari", usaha: "Konstruksi", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3050337 },
  { tahun: 2023, periode: "Februari", usaha: "Perdagangan Besar dan Eceran, Reparasi Mobil dan Motor", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2496098 },
  { tahun: 2023, periode: "Februari", usaha: "Pengangkutan dan Pergudangan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3583428 },
  { tahun: 2023, periode: "Februari", usaha: "Penyediaan Akomodasi dan Makan Minum", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2145400 },
  { tahun: 2023, periode: "Februari", usaha: "Informasi dan Komunikasi", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4365911 },
  { tahun: 2023, periode: "Februari", usaha: "Aktivitas Keuangan dan Asuransi", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4811289 },
  { tahun: 2023, periode: "Februari", usaha: "Real Estat", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4824840 },
  { tahun: 2023, periode: "Februari", usaha: "Aktivitas Profesional dan Perusahaan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3553175 },
  { tahun: 2023, periode: "Februari", usaha: "Administrasi Pemerintahan, Pertahanan, dan Jaminan Sosial", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3880060 },
  { tahun: 2023, periode: "Februari", usaha: "Pendidikan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2473647 },
  { tahun: 2023, periode: "Februari", usaha: "Aktivitas Kesehatan dan Kegiatan Sosial", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3556947 },
  { tahun: 2023, periode: "Februari", usaha: "Aktivitas Jasa Lainnya", jenisKelamin: "Laki-Laki dan Perempuan", upah: 1790306 },

  // AGUSTUS 2023
  { tahun: 2023, periode: "Agustus", usaha: "Pertanian, Kehutanan, dan Perikanan", jenisKelamin: "Laki-Laki", upah: 2527078 },
  { tahun: 2023, periode: "Agustus", usaha: "Pertambangan dan Penggalian", jenisKelamin: "Laki-Laki", upah: 4760357 },
  { tahun: 2023, periode: "Agustus", usaha: "Industri Pengolahan", jenisKelamin: "Laki-Laki", upah: 3555385 },
  { tahun: 2023, periode: "Agustus", usaha: "Pengadaan Listrik, Gas, Uap/Air Panas dan Udara Dingin", jenisKelamin: "Laki-Laki", upah: 4310145 },
  { tahun: 2023, periode: "Agustus", usaha: "Treatment Air, Sampah dan Daur Ulang", jenisKelamin: "Laki-Laki", upah: 3371817 },
  { tahun: 2023, periode: "Agustus", usaha: "Konstruksi", jenisKelamin: "Laki-Laki", upah: 3098595 },
  { tahun: 2023, periode: "Agustus", usaha: "Perdagangan Besar dan Eceran, Reparasi Mobil dan Motor", jenisKelamin: "Laki-Laki", upah: 2992429 },
  { tahun: 2023, periode: "Agustus", usaha: "Pengangkutan dan Pergudangan", jenisKelamin: "Laki-Laki", upah: 3768940 },
  { tahun: 2023, periode: "Agustus", usaha: "Penyediaan Akomodasi dan Makan Minum", jenisKelamin: "Laki-Laki", upah: 2865152 },
  { tahun: 2023, periode: "Agustus", usaha: "Informasi dan Komunikasi", jenisKelamin: "Laki-Laki", upah: 5465181 },
  { tahun: 2023, periode: "Agustus", usaha: "Aktivitas Keuangan dan Asuransi", jenisKelamin: "Laki-Laki", upah: 5234744 },
  { tahun: 2023, periode: "Agustus", usaha: "Real Estat", jenisKelamin: "Laki-Laki", upah: 4162071 },
  { tahun: 2023, periode: "Agustus", usaha: "Aktivitas Profesional dan Perusahaan", jenisKelamin: "Laki-Laki", upah: 4051145 },
  { tahun: 2023, periode: "Agustus", usaha: "Administrasi Pemerintahan, Pertahanan, dan Jaminan Sosial", jenisKelamin: "Laki-Laki", upah: 4224970 },
  { tahun: 2023, periode: "Agustus", usaha: "Pendidikan", jenisKelamin: "Laki-Laki", upah: 3141409 },
  { tahun: 2023, periode: "Agustus", usaha: "Aktivitas Kesehatan dan Kegiatan Sosial", jenisKelamin: "Laki-Laki", upah: 4180418 },
  { tahun: 2023, periode: "Agustus", usaha: "Aktivitas Jasa Lainnya", jenisKelamin: "Laki-Laki", upah: 2437750 },
  { tahun: 2023, periode: "Agustus", usaha: "Pertanian, Kehutanan, dan Perikanan", jenisKelamin: "Perempuan", upah: 1654096 },
  { tahun: 2023, periode: "Agustus", usaha: "Pertambangan dan Penggalian", jenisKelamin: "Perempuan", upah: 5450564 },
  { tahun: 2023, periode: "Agustus", usaha: "Industri Pengolahan", jenisKelamin: "Perempuan", upah: 2581398 },
  { tahun: 2023, periode: "Agustus", usaha: "Pengadaan Listrik, Gas, Uap/Air Panas dan Udara Dingin", jenisKelamin: "Perempuan", upah: 4860266 },
  { tahun: 2023, periode: "Agustus", usaha: "Treatment Air, Sampah dan Daur Ulang", jenisKelamin: "Perempuan", upah: 1926346 },
  { tahun: 2023, periode: "Agustus", usaha: "Konstruksi", jenisKelamin: "Perempuan", upah: 4619283 },
  { tahun: 2023, periode: "Agustus", usaha: "Perdagangan Besar dan Eceran, Reparasi Mobil dan Motor", jenisKelamin: "Perempuan", upah: 2400316 },
  { tahun: 2023, periode: "Agustus", usaha: "Pengangkutan dan Pergudangan", jenisKelamin: "Perempuan", upah: 4112939 },
  { tahun: 2023, periode: "Agustus", usaha: "Penyediaan Akomodasi dan Makan Minum", jenisKelamin: "Perempuan", upah: 1898452 },
  { tahun: 2023, periode: "Agustus", usaha: "Informasi dan Komunikasi", jenisKelamin: "Perempuan", upah: 4340691 },
  { tahun: 2023, periode: "Agustus", usaha: "Aktivitas Keuangan dan Asuransi", jenisKelamin: "Perempuan", upah: 4877040 },
  { tahun: 2023, periode: "Agustus", usaha: "Real Estat", jenisKelamin: "Perempuan", upah: 4526627 },
  { tahun: 2023, periode: "Agustus", usaha: "Aktivitas Profesional dan Perusahaan", jenisKelamin: "Perempuan", upah: 4006924 },
  { tahun: 2023, periode: "Agustus", usaha: "Administrasi Pemerintahan, Pertahanan, dan Jaminan Sosial", jenisKelamin: "Perempuan", upah: 3388962 },
  { tahun: 2023, periode: "Agustus", usaha: "Pendidikan", jenisKelamin: "Perempuan", upah: 2455945 },
  { tahun: 2023, periode: "Agustus", usaha: "Aktivitas Kesehatan dan Kegiatan Sosial", jenisKelamin: "Perempuan", upah: 3423804 },
  { tahun: 2023, periode: "Agustus", usaha: "Aktivitas Jasa Lainnya", jenisKelamin: "Perempuan", upah: 1510665 },
  { tahun: 2023, periode: "Agustus", usaha: "Pertanian, Kehutanan, dan Perikanan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2374788 },
  { tahun: 2023, periode: "Agustus", usaha: "Pertambangan dan Penggalian", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4795266 },
  { tahun: 2023, periode: "Agustus", usaha: "Industri Pengolahan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3204880 },
  { tahun: 2023, periode: "Agustus", usaha: "Pengadaan Listrik, Gas, Uap/Air Panas dan Udara Dingin", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4357011 },
  { tahun: 2023, periode: "Agustus", usaha: "Treatment Air, Sampah dan Daur Ulang", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3153575 },
  { tahun: 2023, periode: "Agustus", usaha: "Konstruksi", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3144676 },
  { tahun: 2023, periode: "Agustus", usaha: "Perdagangan Besar dan Eceran, Reparasi Mobil dan Motor", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2786349 },
  { tahun: 2023, periode: "Agustus", usaha: "Pengangkutan dan Pergudangan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3793465 },
  { tahun: 2023, periode: "Agustus", usaha: "Penyediaan Akomodasi dan Makan Minum", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2424909 },
  { tahun: 2023, periode: "Agustus", usaha: "Informasi dan Komunikasi", jenisKelamin: "Laki-Laki dan Perempuan", upah: 5125818 },
  { tahun: 2023, periode: "Agustus", usaha: "Aktivitas Keuangan dan Asuransi", jenisKelamin: "Laki-Laki dan Perempuan", upah: 5110190 },
  { tahun: 2023, periode: "Agustus", usaha: "Real Estat", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4255738 },
  { tahun: 2023, periode: "Agustus", usaha: "Aktivitas Profesional dan Perusahaan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4040138 },
  { tahun: 2023, periode: "Agustus", usaha: "Administrasi Pemerintahan, Pertahanan, dan Jaminan Sosial", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3967128 },
  { tahun: 2023, periode: "Agustus", usaha: "Pendidikan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2704818 },
  { tahun: 2023, periode: "Agustus", usaha: "Aktivitas Kesehatan dan Kegiatan Sosial", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3670913 },
  { tahun: 2023, periode: "Agustus", usaha: "Aktivitas Jasa Lainnya", jenisKelamin: "Laki-Laki dan Perempuan", upah: 1869207 },

  // FEBRUARI 2024
  { tahun: 2024, periode: "Februari", usaha: "Pertanian, Kehutanan, dan Perikanan", jenisKelamin: "Laki-Laki", upah: 2378541 },
  { tahun: 2024, periode: "Februari", usaha: "Pertambangan dan Penggalian", jenisKelamin: "Laki-Laki", upah: 4985884 },
  { tahun: 2024, periode: "Februari", usaha: "Industri Pengolahan", jenisKelamin: "Laki-Laki", upah: 3371660 },
  { tahun: 2024, periode: "Februari", usaha: "Pengadaan Listrik, Gas, Uap/Air Panas dan Udara Dingin", jenisKelamin: "Laki-Laki", upah: 4830799 },
  { tahun: 2024, periode: "Februari", usaha: "Treatment Air, Sampah dan Daur Ulang", jenisKelamin: "Laki-Laki", upah: 2779172 },
  { tahun: 2024, periode: "Februari", usaha: "Konstruksi", jenisKelamin: "Laki-Laki", upah: 2906907 },
  { tahun: 2024, periode: "Februari", usaha: "Perdagangan Besar dan Eceran, Reparasi Mobil dan Motor", jenisKelamin: "Laki-Laki", upah: 2699833 },
  { tahun: 2024, periode: "Februari", usaha: "Pengangkutan dan Pergudangan", jenisKelamin: "Laki-Laki", upah: 3645410 },
  { tahun: 2024, periode: "Februari", usaha: "Penyediaan Akomodasi dan Makan Minum", jenisKelamin: "Laki-Laki", upah: 2642187 },
  { tahun: 2024, periode: "Februari", usaha: "Informasi dan Komunikasi", jenisKelamin: "Laki-Laki", upah: 4615895 },
  { tahun: 2024, periode: "Februari", usaha: "Aktivitas Keuangan dan Asuransi", jenisKelamin: "Laki-Laki", upah: 5060015 },
  { tahun: 2024, periode: "Februari", usaha: "Real Estat", jenisKelamin: "Laki-Laki", upah: 4276480 },
  { tahun: 2024, periode: "Februari", usaha: "Aktivitas Profesional dan Perusahaan", jenisKelamin: "Laki-Laki", upah: 3656706 },
  { tahun: 2024, periode: "Februari", usaha: "Administrasi Pemerintahan, Pertahanan, dan Jaminan Sosial", jenisKelamin: "Laki-Laki", upah: 3855876 },
  { tahun: 2024, periode: "Februari", usaha: "Pendidikan", jenisKelamin: "Laki-Laki", upah: 3399324 },
  { tahun: 2024, periode: "Februari", usaha: "Aktivitas Kesehatan dan Kegiatan Sosial", jenisKelamin: "Laki-Laki", upah: 3558441 },
  { tahun: 2024, periode: "Februari", usaha: "Aktivitas Jasa Lainnya", jenisKelamin: "Laki-Laki", upah: 2296185 },
  { tahun: 2024, periode: "Februari", usaha: "Pertanian, Kehutanan, dan Perikanan", jenisKelamin: "Perempuan", upah: 1556723 },
  { tahun: 2024, periode: "Februari", usaha: "Pertambangan dan Penggalian", jenisKelamin: "Perempuan", upah: 3932950 },
  { tahun: 2024, periode: "Februari", usaha: "Industri Pengolahan", jenisKelamin: "Perempuan", upah: 2418389 },
  { tahun: 2024, periode: "Februari", usaha: "Pengadaan Listrik, Gas, Uap/Air Panas dan Udara Dingin", jenisKelamin: "Perempuan", upah: 5218453 },
  { tahun: 2024, periode: "Februari", usaha: "Treatment Air, Sampah dan Daur Ulang", jenisKelamin: "Perempuan", upah: 2193603 },
  { tahun: 2024, periode: "Februari", usaha: "Konstruksi", jenisKelamin: "Perempuan", upah: 4416534 },
  { tahun: 2024, periode: "Februari", usaha: "Perdagangan Besar dan Eceran, Reparasi Mobil dan Motor", jenisKelamin: "Perempuan", upah: 2244215 },
  { tahun: 2024, periode: "Februari", usaha: "Pengangkutan dan Pergudangan", jenisKelamin: "Perempuan", upah: 3500487 },
  { tahun: 2024, periode: "Februari", usaha: "Penyediaan Akomodasi dan Makan Minum", jenisKelamin: "Perempuan", upah: 1763048 },
  { tahun: 2024, periode: "Februari", usaha: "Informasi dan Komunikasi", jenisKelamin: "Perempuan", upah: 5137770 },
  { tahun: 2024, periode: "Februari", usaha: "Aktivitas Keuangan dan Asuransi", jenisKelamin: "Perempuan", upah: 5324965 },
  { tahun: 2024, periode: "Februari", usaha: "Real Estat", jenisKelamin: "Perempuan", upah: 4388501 },
  { tahun: 2024, periode: "Februari", usaha: "Aktivitas Profesional dan Perusahaan", jenisKelamin: "Perempuan", upah: 3950869 },
  { tahun: 2024, periode: "Februari", usaha: "Administrasi Pemerintahan, Pertahanan, dan Jaminan Sosial", jenisKelamin: "Perempuan", upah: 3268984 },
  { tahun: 2024, periode: "Februari", usaha: "Pendidikan", jenisKelamin: "Perempuan", upah: 2525257 },
  { tahun: 2024, periode: "Februari", usaha: "Aktivitas Kesehatan dan Kegiatan Sosial", jenisKelamin: "Perempuan", upah: 3223574 },
  { tahun: 2024, periode: "Februari", usaha: "Aktivitas Jasa Lainnya", jenisKelamin: "Perempuan", upah: 1412422 },
  { tahun: 2024, periode: "Februari", usaha: "Pertanian, Kehutanan, dan Perikanan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2236045 },
  { tahun: 2024, periode: "Februari", usaha: "Pertambangan dan Penggalian", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4944886 },
  { tahun: 2024, periode: "Februari", usaha: "Industri Pengolahan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3026413 },
  { tahun: 2024, periode: "Februari", usaha: "Pengadaan Listrik, Gas, Uap/Air Panas dan Udara Dingin", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4853131 },
  { tahun: 2024, periode: "Februari", usaha: "Treatment Air, Sampah dan Daur Ulang", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2692899 },
  { tahun: 2024, periode: "Februari", usaha: "Konstruksi", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2945227 },
  { tahun: 2024, periode: "Februari", usaha: "Perdagangan Besar dan Eceran, Reparasi Mobil dan Motor", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2544248 },
  { tahun: 2024, periode: "Februari", usaha: "Pengangkutan dan Pergudangan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3631764 },
  { tahun: 2024, periode: "Februari", usaha: "Penyediaan Akomodasi dan Makan Minum", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2240980 },
  { tahun: 2024, periode: "Februari", usaha: "Informasi dan Komunikasi", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4736936 },
  { tahun: 2024, periode: "Februari", usaha: "Aktivitas Keuangan dan Asuransi", jenisKelamin: "Laki-Laki dan Perempuan", upah: 5154872 },
  { tahun: 2024, periode: "Februari", usaha: "Real Estat", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4313920 },
  { tahun: 2024, periode: "Februari", usaha: "Aktivitas Profesional dan Perusahaan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3725742 },
  { tahun: 2024, periode: "Februari", usaha: "Administrasi Pemerintahan, Pertahanan, dan Jaminan Sosial", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3670645 },
  { tahun: 2024, periode: "Februari", usaha: "Pendidikan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2843321 },
  { tahun: 2024, periode: "Februari", usaha: "Aktivitas Kesehatan dan Kegiatan Sosial", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3350737 },
  { tahun: 2024, periode: "Februari", usaha: "Aktivitas Jasa Lainnya", jenisKelamin: "Laki-Laki dan Perempuan", upah: 1744402 },

  // AGUSTUS 2024
  { tahun: 2024, periode: "Agustus", usaha: "Pertanian, Kehutanan, dan Perikanan", jenisKelamin: "Laki-Laki", upah: 2552934 },
  { tahun: 2024, periode: "Agustus", usaha: "Pertambangan dan Penggalian", jenisKelamin: "Laki-Laki", upah: 5221394 },
  { tahun: 2024, periode: "Agustus", usaha: "Industri Pengolahan", jenisKelamin: "Laki-Laki", upah: 3590047 },
  { tahun: 2024, periode: "Agustus", usaha: "Pengadaan Listrik, Gas, Uap/Air Panas dan Udara Dingin", jenisKelamin: "Laki-Laki", upah: 4791492 },
  { tahun: 2024, periode: "Agustus", usaha: "Treatment Air, Sampah dan Daur Ulang", jenisKelamin: "Laki-Laki", upah: 3012698 },
  { tahun: 2024, periode: "Agustus", usaha: "Konstruksi", jenisKelamin: "Laki-Laki", upah: 3247607 },
  { tahun: 2024, periode: "Agustus", usaha: "Perdagangan Besar dan Eceran, Reparasi Mobil dan Motor", jenisKelamin: "Laki-Laki", upah: 3019675 },
  { tahun: 2024, periode: "Agustus", usaha: "Pengangkutan dan Pergudangan", jenisKelamin: "Laki-Laki", upah: 3945597 },
  { tahun: 2024, periode: "Agustus", usaha: "Penyediaan Akomodasi dan Makan Minum", jenisKelamin: "Laki-Laki", upah: 2844884 },
  { tahun: 2024, periode: "Agustus", usaha: "Informasi dan Komunikasi", jenisKelamin: "Laki-Laki", upah: 5375488 },
  { tahun: 2024, periode: "Agustus", usaha: "Aktivitas Keuangan dan Asuransi", jenisKelamin: "Laki-Laki", upah: 5199778 },
  { tahun: 2024, periode: "Agustus", usaha: "Real Estat", jenisKelamin: "Laki-Laki", upah: 4117886 },
  { tahun: 2024, periode: "Agustus", usaha: "Aktivitas Profesional dan Perusahaan", jenisKelamin: "Laki-Laki", upah: 4129475 },
  { tahun: 2024, periode: "Agustus", usaha: "Administrasi Pemerintahan, Pertahanan, dan Jaminan Sosial", jenisKelamin: "Laki-Laki", upah: 4359956 },
  { tahun: 2024, periode: "Agustus", usaha: "Pendidikan", jenisKelamin: "Laki-Laki", upah: 3324012 },
  { tahun: 2024, periode: "Agustus", usaha: "Aktivitas Kesehatan dan Kegiatan Sosial", jenisKelamin: "Laki-Laki", upah: 4085038 },
  { tahun: 2024, periode: "Agustus", usaha: "Aktivitas Jasa Lainnya", jenisKelamin: "Laki-Laki", upah: 2638973 },
  { tahun: 2024, periode: "Agustus", usaha: "Pertanian, Kehutanan, dan Perikanan", jenisKelamin: "Perempuan", upah: 1731060 },
  { tahun: 2024, periode: "Agustus", usaha: "Pertambangan dan Penggalian", jenisKelamin: "Perempuan", upah: 5362489 },
  { tahun: 2024, periode: "Agustus", usaha: "Industri Pengolahan", jenisKelamin: "Perempuan", upah: 2634900 },
  { tahun: 2024, periode: "Agustus", usaha: "Pengadaan Listrik, Gas, Uap/Air Panas dan Udara Dingin", jenisKelamin: "Perempuan", upah: 5233246 },
  { tahun: 2024, periode: "Agustus", usaha: "Treatment Air, Sampah dan Daur Ulang", jenisKelamin: "Perempuan", upah: 2629157 },
  { tahun: 2024, periode: "Agustus", usaha: "Konstruksi", jenisKelamin: "Perempuan", upah: 4850647 },
  { tahun: 2024, periode: "Agustus", usaha: "Perdagangan Besar dan Eceran, Reparasi Mobil dan Motor", jenisKelamin: "Perempuan", upah: 2518451 },
  { tahun: 2024, periode: "Agustus", usaha: "Pengangkutan dan Pergudangan", jenisKelamin: "Perempuan", upah: 4310221 },
  { tahun: 2024, periode: "Agustus", usaha: "Penyediaan Akomodasi dan Makan Minum", jenisKelamin: "Perempuan", upah: 1975516 },
  { tahun: 2024, periode: "Agustus", usaha: "Informasi dan Komunikasi", jenisKelamin: "Perempuan", upah: 3981272 },
  { tahun: 2024, periode: "Agustus", usaha: "Aktivitas Keuangan dan Asuransi", jenisKelamin: "Perempuan", upah: 4893353 },
  { tahun: 2024, periode: "Agustus", usaha: "Real Estat", jenisKelamin: "Perempuan", upah: 4836580 },
  { tahun: 2024, periode: "Agustus", usaha: "Aktivitas Profesional dan Perusahaan", jenisKelamin: "Perempuan", upah: 4188302 },
  { tahun: 2024, periode: "Agustus", usaha: "Administrasi Pemerintahan, Pertahanan, dan Jaminan Sosial", jenisKelamin: "Perempuan", upah: 3691134 },
  { tahun: 2024, periode: "Agustus", usaha: "Pendidikan", jenisKelamin: "Perempuan", upah: 2595187 },
  { tahun: 2024, periode: "Agustus", usaha: "Aktivitas Kesehatan dan Kegiatan Sosial", jenisKelamin: "Perempuan", upah: 3678902 },
  { tahun: 2024, periode: "Agustus", usaha: "Aktivitas Jasa Lainnya", jenisKelamin: "Perempuan", upah: 1587249 },
  { tahun: 2024, periode: "Agustus", usaha: "Pertanian, Kehutanan, dan Perikanan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2407712 },
  { tahun: 2024, periode: "Agustus", usaha: "Pertambangan dan Penggalian", jenisKelamin: "Laki-Laki dan Perempuan", upah: 5228542 },
  { tahun: 2024, periode: "Agustus", usaha: "Industri Pengolahan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3246220 },
  { tahun: 2024, periode: "Agustus", usaha: "Pengadaan Listrik, Gas, Uap/Air Panas dan Udara Dingin", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4832177 },
  { tahun: 2024, periode: "Agustus", usaha: "Treatment Air, Sampah dan Daur Ulang", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2948558 },
  { tahun: 2024, periode: "Agustus", usaha: "Konstruksi", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3293968 },
  { tahun: 2024, periode: "Agustus", usaha: "Perdagangan Besar dan Eceran, Reparasi Mobil dan Motor", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2846680 },
  { tahun: 2024, periode: "Agustus", usaha: "Pengangkutan dan Pergudangan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3977339 },
  { tahun: 2024, periode: "Agustus", usaha: "Penyediaan Akomodasi dan Makan Minum", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2439455 },
  { tahun: 2024, periode: "Agustus", usaha: "Informasi dan Komunikasi", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4983257 },
  { tahun: 2024, periode: "Agustus", usaha: "Aktivitas Keuangan dan Asuransi", jenisKelamin: "Laki-Laki dan Perempuan", upah: 5084220 },
  { tahun: 2024, periode: "Agustus", usaha: "Real Estat", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4297520 },
  { tahun: 2024, periode: "Agustus", usaha: "Aktivitas Profesional dan Perusahaan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4143964 },
  { tahun: 2024, periode: "Agustus", usaha: "Administrasi Pemerintahan, Pertahanan, dan Jaminan Sosial", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4155018 },
  { tahun: 2024, periode: "Agustus", usaha: "Pendidikan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2858783 },
  { tahun: 2024, periode: "Agustus", usaha: "Aktivitas Kesehatan dan Kegiatan Sosial", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3801776 },
  { tahun: 2024, periode: "Agustus", usaha: "Aktivitas Jasa Lainnya", jenisKelamin: "Laki-Laki dan Perempuan", upah: 1992910 },

  // FEBRUARI 2025
  { tahun: 2025, periode: "Februari", usaha: "Pertanian, Kehutanan, dan Perikanan", jenisKelamin: "Laki-Laki", upah: 2395065 },
  { tahun: 2025, periode: "Februari", usaha: "Pertambangan dan Penggalian", jenisKelamin: "Laki-Laki", upah: 5062095 },
  { tahun: 2025, periode: "Februari", usaha: "Industri Pengolahan", jenisKelamin: "Laki-Laki", upah: 3397744 },
  { tahun: 2025, periode: "Februari", usaha: "Pengadaan Listrik, Gas, Uap/Air Panas dan Udara Dingin", jenisKelamin: "Laki-Laki", upah: 5069623 },
  { tahun: 2025, periode: "Februari", usaha: "Treatment Air, Sampah dan Daur Ulang", jenisKelamin: "Laki-Laki", upah: 2949855 },
  { tahun: 2025, periode: "Februari", usaha: "Konstruksi", jenisKelamin: "Laki-Laki", upah: 3199004 },
  { tahun: 2025, periode: "Februari", usaha: "Perdagangan Besar dan Eceran, Reparasi Mobil dan Motor", jenisKelamin: "Laki-Laki", upah: 2877061 },
  { tahun: 2025, periode: "Februari", usaha: "Pengangkutan dan Pergudangan", jenisKelamin: "Laki-Laki", upah: 3666716 },
  { tahun: 2025, periode: "Februari", usaha: "Penyediaan Akomodasi dan Makan Minum", jenisKelamin: "Laki-Laki", upah: 2856692 },
  { tahun: 2025, periode: "Februari", usaha: "Informasi dan Komunikasi", jenisKelamin: "Laki-Laki", upah: 4132577 },
  { tahun: 2025, periode: "Februari", usaha: "Aktivitas Keuangan dan Asuransi", jenisKelamin: "Laki-Laki", upah: 4768150 },
  { tahun: 2025, periode: "Februari", usaha: "Real Estat", jenisKelamin: "Laki-Laki", upah: 3993942 },
  { tahun: 2025, periode: "Februari", usaha: "Aktivitas Profesional dan Perusahaan", jenisKelamin: "Laki-Laki", upah: 3885966 },
  { tahun: 2025, periode: "Februari", usaha: "Administrasi Pemerintahan, Pertahanan, dan Jaminan Sosial", jenisKelamin: "Laki-Laki", upah: 4004930 },
  { tahun: 2025, periode: "Februari", usaha: "Pendidikan", jenisKelamin: "Laki-Laki", upah: 3187002 },
  { tahun: 2025, periode: "Februari", usaha: "Aktivitas Kesehatan dan Kegiatan Sosial", jenisKelamin: "Laki-Laki", upah: 3853600 },
  { tahun: 2025, periode: "Februari", usaha: "Aktivitas Jasa Lainnya", jenisKelamin: "Laki-Laki", upah: 2533362 },
  { tahun: 2025, periode: "Februari", usaha: "Pertanian, Kehutanan, dan Perikanan", jenisKelamin: "Perempuan", upah: 1612151 },
  { tahun: 2025, periode: "Februari", usaha: "Pertambangan dan Penggalian", jenisKelamin: "Perempuan", upah: 5558015 },
  { tahun: 2025, periode: "Februari", usaha: "Industri Pengolahan", jenisKelamin: "Perempuan", upah: 2561037 },
  { tahun: 2025, periode: "Februari", usaha: "Pengadaan Listrik, Gas, Uap/Air Panas dan Udara Dingin", jenisKelamin: "Perempuan", upah: 4791919 },
  { tahun: 2025, periode: "Februari", usaha: "Treatment Air, Sampah dan Daur Ulang", jenisKelamin: "Perempuan", upah: 2590075 },
  { tahun: 2025, periode: "Februari", usaha: "Konstruksi", jenisKelamin: "Perempuan", upah: 3741208 },
  { tahun: 2025, periode: "Februari", usaha: "Perdagangan Besar dan Eceran, Reparasi Mobil dan Motor", jenisKelamin: "Perempuan", upah: 2319402 },
  { tahun: 2025, periode: "Februari", usaha: "Pengangkutan dan Pergudangan", jenisKelamin: "Perempuan", upah: 4234357 },
  { tahun: 2025, periode: "Februari", usaha: "Penyediaan Akomodasi dan Makan Minum", jenisKelamin: "Perempuan", upah: 1902390 },
  { tahun: 2025, periode: "Februari", usaha: "Informasi dan Komunikasi", jenisKelamin: "Perempuan", upah: 4128927 },
  { tahun: 2025, periode: "Februari", usaha: "Aktivitas Keuangan dan Asuransi", jenisKelamin: "Perempuan", upah: 5040044 },
  { tahun: 2025, periode: "Februari", usaha: "Real Estat", jenisKelamin: "Perempuan", upah: 4213440 },
  { tahun: 2025, periode: "Februari", usaha: "Aktivitas Profesional dan Perusahaan", jenisKelamin: "Perempuan", upah: 4221858 },
  { tahun: 2025, periode: "Februari", usaha: "Administrasi Pemerintahan, Pertahanan, dan Jaminan Sosial", jenisKelamin: "Perempuan", upah: 3160446 },
  { tahun: 2025, periode: "Februari", usaha: "Pendidikan", jenisKelamin: "Perempuan", upah: 2586305 },
  { tahun: 2025, periode: "Februari", usaha: "Aktivitas Kesehatan dan Kegiatan Sosial", jenisKelamin: "Perempuan", upah: 3220290 },
  { tahun: 2025, periode: "Februari", usaha: "Aktivitas Jasa Lainnya", jenisKelamin: "Perempuan", upah: 1394518 },
  { tahun: 2025, periode: "Februari", usaha: "Pertanian, Kehutanan, dan Perikanan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2247459 },
  { tahun: 2025, periode: "Februari", usaha: "Pertambangan dan Penggalian", jenisKelamin: "Laki-Laki dan Perempuan", upah: 5086094 },
  { tahun: 2025, periode: "Februari", usaha: "Industri Pengolahan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3090532 },
  { tahun: 2025, periode: "Februari", usaha: "Pengadaan Listrik, Gas, Uap/Air Panas dan Udara Dingin", jenisKelamin: "Laki-Laki dan Perempuan", upah: 5040313 },
  { tahun: 2025, periode: "Februari", usaha: "Treatment Air, Sampah dan Daur Ulang", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2906210 },
  { tahun: 2025, periode: "Februari", usaha: "Konstruksi", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3209091 },
  { tahun: 2025, periode: "Februari", usaha: "Perdagangan Besar dan Eceran, Reparasi Mobil dan Motor", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2667185 },
  { tahun: 2025, periode: "Februari", usaha: "Pengangkutan dan Pergudangan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3720086 },
  { tahun: 2025, periode: "Februari", usaha: "Penyediaan Akomodasi dan Makan Minum", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2424447 },
  { tahun: 2025, periode: "Februari", usaha: "Informasi dan Komunikasi", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4131648 },
  { tahun: 2025, periode: "Februari", usaha: "Aktivitas Keuangan dan Asuransi", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4878087 },
  { tahun: 2025, periode: "Februari", usaha: "Real Estat", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4042854 },
  { tahun: 2025, periode: "Februari", usaha: "Aktivitas Profesional dan Perusahaan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3965419 },
  { tahun: 2025, periode: "Februari", usaha: "Administrasi Pemerintahan, Pertahanan, dan Jaminan Sosial", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3758174 },
  { tahun: 2025, periode: "Februari", usaha: "Pendidikan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2794131 },
  { tahun: 2025, periode: "Februari", usaha: "Aktivitas Kesehatan dan Kegiatan Sosial", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3415963 },
  { tahun: 2025, periode: "Februari", usaha: "Aktivitas Jasa Lainnya", jenisKelamin: "Laki-Laki dan Perempuan", upah: 1808930 },

  // AGUSTUS 2025
  { tahun: 2025, periode: "Agustus", usaha: "Pertanian, Kehutanan, dan Perikanan", jenisKelamin: "Laki-Laki", upah: 2658315 },
  { tahun: 2025, periode: "Agustus", usaha: "Pertanian, Kehutanan, dan Perikanan", jenisKelamin: "Perempuan", upah: 2042977 },
  { tahun: 2025, periode: "Agustus", usaha: "Pertanian, Kehutanan, dan Perikanan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2540158 },
  { tahun: 2025, periode: "Agustus", usaha: "Informasi dan Komunikasi", jenisKelamin: "Laki-Laki", upah: 5250036 },
  { tahun: 2025, periode: "Agustus", usaha: "Informasi dan Komunikasi", jenisKelamin: "Perempuan", upah: 5353885 },
  { tahun: 2025, periode: "Agustus", usaha: "Informasi dan Komunikasi", jenisKelamin: "Laki-Laki dan Perempuan", upah: 5278706 },
  { tahun: 2025, periode: "Agustus", usaha: "Aktivitas Keuangan dan Asuransi", jenisKelamin: "Laki-Laki", upah: 5271357 },
  { tahun: 2025, periode: "Agustus", usaha: "Aktivitas Keuangan dan Asuransi", jenisKelamin: "Perempuan", upah: 4879821 },
  { tahun: 2025, periode: "Agustus", usaha: "Aktivitas Keuangan dan Asuransi", jenisKelamin: "Laki-Laki dan Perempuan", upah: 5116552 },
  { tahun: 2025, periode: "Agustus", usaha: "Pengadaan Listrik, Gas, Uap/Air Panas dan Udara Dingin", jenisKelamin: "Laki-Laki", upah: 4983259 },
  { tahun: 2025, periode: "Agustus", usaha: "Pengadaan Listrik, Gas, Uap/Air Panas dan Udara Dingin", jenisKelamin: "Perempuan", upah: 5855692 },
  { tahun: 2025, periode: "Agustus", usaha: "Pengadaan Listrik, Gas, Uap/Air Panas dan Udara Dingin", jenisKelamin: "Laki-Laki dan Perempuan", upah: 5073204 },
  { tahun: 2025, periode: "Agustus", usaha: "Pertambangan dan Penggalian", jenisKelamin: "Laki-Laki", upah: 4988025 },
  { tahun: 2025, periode: "Agustus", usaha: "Pertambangan dan Penggalian", jenisKelamin: "Perempuan", upah: 4909903 },
  { tahun: 2025, periode: "Agustus", usaha: "Pertambangan dan Penggalian", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4983713 },
  { tahun: 2025, periode: "Agustus", usaha: "Real Estat", jenisKelamin: "Laki-Laki", upah: 4324078 },
  { tahun: 2025, periode: "Agustus", usaha: "Real Estat", jenisKelamin: "Perempuan", upah: 4671017 },
  { tahun: 2025, periode: "Agustus", usaha: "Real Estat", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4399016 },
  { tahun: 2025, periode: "Agustus", usaha: "Aktivitas Profesional dan Perusahaan", jenisKelamin: "Laki-Laki", upah: 4195595 },
  { tahun: 2025, periode: "Agustus", usaha: "Aktivitas Profesional dan Perusahaan", jenisKelamin: "Perempuan", upah: 4458715 },
  { tahun: 2025, periode: "Agustus", usaha: "Aktivitas Profesional dan Perusahaan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4261425 },
  { tahun: 2025, periode: "Agustus", usaha: "Pengangkutan dan Pergudangan", jenisKelamin: "Laki-Laki", upah: 4090578 },
  { tahun: 2025, periode: "Agustus", usaha: "Pengangkutan dan Pergudangan", jenisKelamin: "Perempuan", upah: 4144619 },
  { tahun: 2025, periode: "Agustus", usaha: "Pengangkutan dan Pergudangan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4094527 },
  { tahun: 2025, periode: "Agustus", usaha: "Administrasi Pemerintahan, Pertahanan, dan Jaminan Sosial", jenisKelamin: "Laki-Laki", upah: 4650115 },
  { tahun: 2025, periode: "Agustus", usaha: "Administrasi Pemerintahan, Pertahanan, dan Jaminan Sosial", jenisKelamin: "Perempuan", upah: 3927047 },
  { tahun: 2025, periode: "Agustus", usaha: "Administrasi Pemerintahan, Pertahanan, dan Jaminan Sosial", jenisKelamin: "Laki-Laki dan Perempuan", upah: 4427234 },
  { tahun: 2025, periode: "Agustus", usaha: "Industri Pengolahan", jenisKelamin: "Laki-Laki", upah: 3604186 },
  { tahun: 2025, periode: "Agustus", usaha: "Industri Pengolahan", jenisKelamin: "Perempuan", upah: 2705273 },
  { tahun: 2025, periode: "Agustus", usaha: "Industri Pengolahan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3270191 },
  { tahun: 2025, periode: "Agustus", usaha: "Konstruksi", jenisKelamin: "Laki-Laki", upah: 3234543 },
  { tahun: 2025, periode: "Agustus", usaha: "Konstruksi", jenisKelamin: "Perempuan", upah: 3246311 },
  { tahun: 2025, periode: "Agustus", usaha: "Konstruksi", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3234953 },
  { tahun: 2025, periode: "Agustus", usaha: "Aktivitas Kesehatan dan Kegiatan Sosial", jenisKelamin: "Laki-Laki", upah: 4209832 },
  { tahun: 2025, periode: "Agustus", usaha: "Aktivitas Kesehatan dan Kegiatan Sosial", jenisKelamin: "Perempuan", upah: 3554635 },
  { tahun: 2025, periode: "Agustus", usaha: "Aktivitas Kesehatan dan Kegiatan Sosial", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3750376 },
  { tahun: 2025, periode: "Agustus", usaha: "Pendidikan", jenisKelamin: "Laki-Laki", upah: 3466596 },
  { tahun: 2025, periode: "Agustus", usaha: "Pendidikan", jenisKelamin: "Perempuan", upah: 2816734 },
  { tahun: 2025, periode: "Agustus", usaha: "Pendidikan", jenisKelamin: "Laki-Laki dan Perempuan", upah: 3050755 },
  { tahun: 2025, periode: "Agustus", usaha: "Perdagangan Besar dan Eceran, Reparasi Mobil dan Motor", jenisKelamin: "Laki-Laki", upah: 3016797 },
  { tahun: 2025, periode: "Agustus", usaha: "Perdagangan Besar dan Eceran, Reparasi Mobil dan Motor", jenisKelamin: "Perempuan", upah: 2548647 },
  { tahun: 2025, periode: "Agustus", usaha: "Perdagangan Besar dan Eceran, Reparasi Mobil dan Motor", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2839730 },
  { tahun: 2025, periode: "Agustus", usaha: "Penyediaan Akomodasi dan Makan Minum", jenisKelamin: "Laki-Laki", upah: 2891332 },
  { tahun: 2025, periode: "Agustus", usaha: "Penyediaan Akomodasi dan Makan Minum", jenisKelamin: "Perempuan", upah: 2101419 },
  { tahun: 2025, periode: "Agustus", usaha: "Penyediaan Akomodasi dan Makan Minum", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2547160 },
  { tahun: 2025, periode: "Agustus", usaha: "Treatment Air, Sampah dan Daur Ulang", jenisKelamin: "Laki-Laki", upah: 2943750 },
  { tahun: 2025, periode: "Agustus", usaha: "Treatment Air, Sampah dan Daur Ulang", jenisKelamin: "Perempuan", upah: 2244576 },
  { tahun: 2025, periode: "Agustus", usaha: "Treatment Air, Sampah dan Daur Ulang", jenisKelamin: "Laki-Laki dan Perempuan", upah: 2835286 },
  { tahun: 2025, periode: "Agustus", usaha: "Aktivitas Jasa Lainnya", jenisKelamin: "Laki-Laki", upah: 2533288 },
  { tahun: 2025, periode: "Agustus", usaha: "Aktivitas Jasa Lainnya", jenisKelamin: "Perempuan", upah: 1655947 },
  { tahun: 2025, periode: "Agustus", usaha: "Aktivitas Jasa Lainnya", jenisKelamin: "Laki-Laki dan Perempuan", upah: 1967707 }
];

// ============================================
// PART 7: VARIABEL GLOBAL & DOM ELEMENTS
// ============================================

// DOM Elements
const tahunSelect = document.getElementById("tahunSelect");
const periodeSelect = document.getElementById("periodeSelect");
const genderSelect = document.getElementById("genderSelect");
const provinsiSearch = document.getElementById("provinsiSearch");
const provinsiList = document.getElementById("provinsiList");
const usahaSearch = document.getElementById("usahaSearch");
const usahaList = document.getElementById("usahaList");
const resetBtn = document.getElementById("resetBtn");
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const closeSidebarBtn = document.getElementById("closeSidebarBtn");
const sidebar = document.getElementById("sidebar");

// Global Search Elements
const globalSearchInput = document.getElementById("globalSearchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const searchResultCount = document.getElementById("searchResultCount");
const autocompleteDropdown = document.getElementById("autocompleteDropdown");

// Tab Elements
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

// State untuk filter
let selectedProvinsi = [];
let selectedUsaha = [];
let selectedPendidikan = [];
let selectedUmur = [];
let currentTab = "provinsi";

// Map
let map = null;
let markers = [];

// Chart instances
let chartPerbandinganProvinsi = null;
let chartTrenNasional = null;
let chartPendidikanGender = null;
let chartUmurGender = null;
let chartUsahaGender = null;

// Additional Chart instances
let chartDonutProvinsi = null;
let chartDonutPendidikan = null;
let chartGapPendidikan = null;
let chartDonutUmur = null;
let chartBarUmur = null;
let chartDonutUsaha = null;
let chartGapUsaha = null;

// Data unik untuk filter
const allProvinsi = [...new Set(dataProvinsi.map(d => d.provinsi))].sort();
const allUsaha = [...new Set(dataUsaha.filter(d => d.usaha).map(d => d.usaha))].sort();
const jenjangPendidikan = ["SD ke Bawah", "SMP", "SMA Umum", "SMA Kejuruan", "Diploma I/II/III", "DIV/S1/S2/S3"];
const shortPendidikan = ["SD", "SMP", "SMA Umum", "SMA Kejuruan", "Diploma", "Sarjana"];
const kelompokUmur = ["15-19", "20-24", "25-29", "30-34", "35-39", "40-44", "45-49", "50-54", "55-59", "60+"];

// ============================================
// PART 8: HELPER FUNCTIONS
// ============================================

function formatRupiah(angka) {
  if (!angka || isNaN(angka) || angka === 0) return "-";
  return "Rp " + Math.round(angka).toLocaleString("id-ID");
}

function getTrend(current, prev) {
  if (!prev || prev === 0) return '';
  const diff = ((current - prev) / prev) * 100;
  if (diff > 0.5) return `🔼 +${diff.toFixed(1)}%`;
  if (diff < -0.5) return `🔽 ${Math.abs(diff).toFixed(1)}%`;
  return `➡️ stabil`;
}

// Filter data berdasarkan tab dan semua filter multi-select
function filterDataByTab(dataArray, tabName) {
  const tahun = tahunSelect.value;
  const periode = periodeSelect.value;
  const gender = genderSelect.value;
  const provinsiTerpilih = selectedProvinsi;
  const usahaTerpilih = selectedUsaha;
  const pendidikanTerpilih = selectedPendidikan;
  const umurTerpilih = selectedUmur;

  return dataArray.filter(d => {
    if (tahun !== "Semua" && d.tahun != tahun) return false;
    if (periode !== "Semua" && d.periode !== periode) return false;
    
    if (tabName === "provinsi") {
      if (provinsiTerpilih.length > 0 && d.provinsi && !provinsiTerpilih.includes(d.provinsi)) return false;
    }
    if (tabName === "pendidikan") {
      if (gender !== "Semua" && d.jenisKelamin && d.jenisKelamin !== gender) return false;
      if (pendidikanTerpilih.length > 0 && d.pendidikan && !pendidikanTerpilih.includes(d.pendidikan)) return false;
    }
    if (tabName === "umur") {
      if (gender !== "Semua" && d.jenisKelamin && d.jenisKelamin !== gender) return false;
      if (umurTerpilih.length > 0 && d.umur && !umurTerpilih.includes(d.umur)) return false;
    }
    if (tabName === "usaha") {
      if (gender !== "Semua" && d.jenisKelamin && d.jenisKelamin !== gender) return false;
      if (usahaTerpilih.length > 0 && d.usaha && !usahaTerpilih.includes(d.usaha)) return false;
    }
    return true;
  });
}

// ============================================
// PART 9: FUNGSI RENDER LIST (PROVINSI, USAHA, PENDIDIKAN, UMUR)
// ============================================
function renderProvinsiList() {
  if (!provinsiList) return;
  const searchTerm = provinsiSearch?.value.toLowerCase() || "";
  const filtered = allProvinsi.filter(p => p.toLowerCase().includes(searchTerm));
  provinsiList.innerHTML = `<div class="list-item ${selectedProvinsi.length === 0 ? 'active' : ''}" data-value="Semua">📌 Semua Provinsi</div>`;
  filtered.forEach(prov => {
    provinsiList.innerHTML += `<div class="list-item ${selectedProvinsi.includes(prov) ? 'active' : ''}" data-value="${prov}">📍 ${prov}</div>`;
  });
  provinsiList.querySelectorAll(".list-item").forEach(el => {
    el.onclick = () => {
      const val = el.dataset.value;
      if (val === "Semua") {
        selectedProvinsi = [];
      } else {
        const idx = selectedProvinsi.indexOf(val);
        if (idx === -1) selectedProvinsi.push(val);
        else selectedProvinsi.splice(idx, 1);
      }
      renderProvinsiList();
      if (currentTab === "provinsi") {
        updateTabProvinsi();
        updateMapMarkers();
        updateAdditionalChartsProvinsi();
      }
    };
  });
}

function renderUsahaList() {
  if (!usahaList) return;
  const searchTerm = usahaSearch?.value.toLowerCase() || "";
  const filtered = allUsaha.filter(u => u.toLowerCase().includes(searchTerm));
  usahaList.innerHTML = `<div class="list-item ${selectedUsaha.length === 0 ? 'active' : ''}" data-value="Semua">🏭 Semua Usaha</div>`;
  filtered.forEach(usaha => {
    usahaList.innerHTML += `<div class="list-item ${selectedUsaha.includes(usaha) ? 'active' : ''}" data-value="${usaha}">🏭 ${usaha.substring(0, 30)}${usaha.length > 30 ? '...' : ''}</div>`;
  });
  usahaList.querySelectorAll(".list-item").forEach(el => {
    el.onclick = () => {
      const val = el.dataset.value;
      if (val === "Semua") {
        selectedUsaha = [];
      } else {
        const idx = selectedUsaha.indexOf(val);
        if (idx === -1) selectedUsaha.push(val);
        else selectedUsaha.splice(idx, 1);
      }
      renderUsahaList();
      if (currentTab === "usaha") {
        updateTabUsaha();
        updateAdditionalChartsUsaha();
      }
    };
  });
}
// BARU: Render list pendidikan multi-select
function renderPendidikanList() {
  const pendidikanListDiv = document.getElementById("pendidikanList");
  if (!pendidikanListDiv) return;
  const searchTerm = document.getElementById("pendidikanSearch")?.value.toLowerCase() || "";
  const filtered = jenjangPendidikan.filter(p => p.toLowerCase().includes(searchTerm));
  let html = `<div class="list-item ${selectedPendidikan.length === 0 ? 'active' : ''}" data-value="Semua">📌 Semua Pendidikan</div>`;
  filtered.forEach(pend => {
    html += `<div class="list-item ${selectedPendidikan.includes(pend) ? 'active' : ''}" data-value="${pend}">🎓 ${pend}</div>`;
  });
  pendidikanListDiv.innerHTML = html;
  pendidikanListDiv.querySelectorAll(".list-item").forEach(el => {
    el.onclick = () => {
      const val = el.dataset.value;
      if (val === "Semua") {
        selectedPendidikan = [];
      } else {
        const idx = selectedPendidikan.indexOf(val);
        if (idx === -1) selectedPendidikan.push(val);
        else selectedPendidikan.splice(idx, 1);
      }
      renderPendidikanList();
      if (currentTab === "pendidikan") {
        updateTabPendidikan();
        updateAdditionalChartsPendidikan();
         }
    };
  });
}

// BARU: Render list umur multi-select
function renderUmurList() {
  const umurListDiv = document.getElementById("umurList");
  if (!umurListDiv) return;
  const searchTerm = document.getElementById("umurSearch")?.value.toLowerCase() || "";
  const filtered = kelompokUmur.filter(u => u.toLowerCase().includes(searchTerm));
  let html = `<div class="list-item ${selectedUmur.length === 0 ? 'active' : ''}" data-value="Semua">📌 Semua Umur</div>`;
  filtered.forEach(um => {
    html += `<div class="list-item ${selectedUmur.includes(um) ? 'active' : ''}" data-value="${um}">👥 ${um}</div>`;
  });
  umurListDiv.innerHTML = html;
  umurListDiv.querySelectorAll(".list-item").forEach(el => {
    el.onclick = () => {
      const val = el.dataset.value;
      if (val === "Semua") {
        selectedUmur = [];
      } else {
        const idx = selectedUmur.indexOf(val);
        if (idx === -1) selectedUmur.push(val);
         else selectedUmur.splice(idx, 1);
      }
      renderUmurList();
      if (currentTab === "umur") {
        updateTabUmur();
        updateAdditionalChartsUmur();
      }
    };
  });
}
// ============================================
// PART 10: FUNGSI UPDATE SIDEBAR (sesuai tab)
// ============================================
function updateSidebarForTab(tabName) {
  const filterGenderGroup = document.getElementById("filterGenderGroup");
  const filterProvinsiGroup = document.getElementById("filterProvinsiGroup");
  const filterPendidikanGroup = document.getElementById("filterPendidikanGroup");
  const filterUmurGroup = document.getElementById("filterUmurGroup");
  const filterUsahaGroup = document.getElementById("filterUsahaGroup");
  const sidebarTitle = document.getElementById("sidebarTitle");
  
  if (filterGenderGroup) filterGenderGroup.style.display = "none";
  if (filterProvinsiGroup) filterProvinsiGroup.style.display = "none";
  if (filterPendidikanGroup) filterPendidikanGroup.style.display = "none";
  if (filterUmurGroup) filterUmurGroup.style.display = "none";
  if (filterUsahaGroup) filterUsahaGroup.style.display = "none";
  
  if (tabName === "provinsi") {
    if (sidebarTitle) sidebarTitle.innerHTML = "📍 FILTER PROVINSI";
    if (filterProvinsiGroup) filterProvinsiGroup.style.display = "block";
    renderProvinsiList();
  } 
  else if (tabName === "pendidikan") {
    if (sidebarTitle) sidebarTitle.innerHTML = "🎓 FILTER PENDIDIKAN";
    if (filterGenderGroup) filterGenderGroup.style.display = "block";
    if (filterPendidikanGroup) filterPendidikanGroup.style.display = "block";
    renderPendidikanList(); // panggil render
  } 
  else if (tabName === "umur") {
    if (sidebarTitle) sidebarTitle.innerHTML = "👥 FILTER UMUR";
    if (filterGenderGroup) filterGenderGroup.style.display = "block";
    if (filterUmurGroup) filterUmurGroup.style.display = "block";
    renderUmurList(); // panggil render
  } 
    else if (tabName === "usaha") {
    if (sidebarTitle) sidebarTitle.innerHTML = "🏭 FILTER USAHA";
    if (filterGenderGroup) filterGenderGroup.style.display = "block";
    if (filterUsahaGroup) filterUsahaGroup.style.display = "block";
    renderUsahaList();
  } 
  else if (tabName === "semua") {
    if (sidebarTitle) sidebarTitle.innerHTML = "🔍 FILTER SEMUA DATA";
  }
}
// ============================================
// PART 11: TAB PROVINSI (MAP, TOP 15, BOTTOM 15, TREN)
// ============================================

function getUpahProvinsi(provinsi) {
  const filtered = dataProvinsi.filter(d => {
    if (tahunSelect.value !== "Semua" && d.tahun != tahunSelect.value) return false;
    if (periodeSelect.value !== "Semua" && d.periode !== periodeSelect.value) return false;
    if (d.provinsi === provinsi) return true;
    return false;
  });
  if (filtered.length === 0) return 0;
  const total = filtered.reduce((sum, d) => sum + d.upah, 0);
  return total / filtered.length;
}

function getWarnaMarker(upah, minUpah, maxUpah) {
  if (upah === 0 || minUpah === maxUpah) return "#6b7280";
  const persen = (upah - minUpah) / (maxUpah - minUpah);
  if (persen < 0.25) return "#dc2626";
  if (persen < 0.5) return "#f59e0b";
  if (persen < 0.75) return "#eab308";
  return "#10b981";
}

function initMap() {
  const mapContainer = document.getElementById("mapContainer");
  if (mapContainer && !map) {
    map = L.map("mapContainer").setView([-2.5, 118], 5);
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
    }).addTo(map);
    updateMapMarkers();
  }
}

function updateMapMarkers() {
  if (!map) return;
  markers.forEach(marker => map.removeLayer(marker));
  markers = [];
  
  let upahValues = [];
  allProvinsi.forEach(prov => {
    const upah = getUpahProvinsi(prov);
    if (upah > 0) upahValues.push(upah);
  });
  const minUpah = Math.min(...upahValues);
  const maxUpah = Math.max(...upahValues);
  
  allProvinsi.forEach(prov => {
    const upah = getUpahProvinsi(prov);
    if (upah === 0 || !koordinatProvinsi[prov]) return;
    
    const warna = getWarnaMarker(upah, minUpah, maxUpah);
    const customIcon = L.divIcon({
      html: `<div style="background-color: ${warna}; width: 14px; height: 14px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 5px rgba(0,0,0,0.3);"></div>`,
      iconSize: [18, 18],
      className: 'custom-marker'
    });
    
    const marker = L.marker(koordinatProvinsi[prov], { icon: customIcon })
      .bindPopup(`<strong>${prov}</strong><br>Upah: ${formatRupiah(upah)}<br><small>Klik untuk filter</small>`)
      .on("click", () => {
        if (!selectedProvinsi.includes(prov)) {
          selectedProvinsi.push(prov);
          renderProvinsiList();
          updateTabProvinsi();
          updateMapMarkers();
        }
      });
    
    marker.addTo(map);
    markers.push(marker);
  });
  
  const petaSubtitle = document.getElementById("petaSubtitle");
  if (petaSubtitle) {
    let text = "";
    if (tahunSelect.value !== "Semua" && periodeSelect.value !== "Semua") text = `${tahunSelect.value} ${periodeSelect.value}`;
    else if (tahunSelect.value !== "Semua") text = `Tahun ${tahunSelect.value}`;
    else if (periodeSelect.value !== "Semua") text = `Periode ${periodeSelect.value}`;
    else text = "Semua periode";
    petaSubtitle.innerHTML = `${text} | 🟢 tinggi 🔴 rendah`;
  }
}

// ============================================
// PART 11: TAB PROVINSI (MAP, TOP 15, BOTTOM 15, TREN)
// ============================================

function updateTabProvinsi() {
  const filteredData = filterDataByTab(dataProvinsi, "provinsi");
  
  // ============================================
  // KPI RATA-RATA NASIONAL (PAKAI dataRataNasional)
  // ============================================
  const selectedTahun = tahunSelect.value;
  const selectedPeriode = periodeSelect.value;
  
  let rataNasional = 0;
  let labelRata = "";
  
  if (selectedTahun !== "Semua" && selectedPeriode !== "Semua") {
    // Kasus 1: Tahun dan Periode spesifik → pakai dataRataNasional langsung
    const key = `${selectedTahun},${selectedPeriode}`;
    rataNasional = dataRataNasional[key] || 0;
    labelRata = `${selectedTahun} ${selectedPeriode}`;
  } 
  else if (selectedTahun !== "Semua" && selectedPeriode === "Semua") {
    // Kasus 2: Tahun spesifik, Periode Semua → rata-rata Feb + Agu di tahun itu
    const febKey = `${selectedTahun},Februari`;
    const aguKey = `${selectedTahun},Agustus`;
    const febVal = dataRataNasional[febKey] || 0;
    const aguVal = dataRataNasional[aguKey] || 0;
    rataNasional = (febVal + aguVal) / 2;
    labelRata = `${selectedTahun} (Rata-rata Feb + Agu)`;
  }
  else if (selectedTahun === "Semua" && selectedPeriode !== "Semua") {
    // Kasus 3: Tahun Semua, Periode spesifik → rata-rata 2023,2024,2025 di periode itu
    let total = 0;
    let count = 0;
    for (let tahun of [2023, 2024, 2025]) {
      const key = `${tahun},${selectedPeriode}`;
      if (dataRataNasional[key]) {
        total += dataRataNasional[key];
        count++;
      }
    }
    rataNasional = count > 0 ? total / count : 0;
    labelRata = `Periode ${selectedPeriode} (Rata 2023-2025)`;
  }
  else {
    // Kasus 4: Tahun Semua, Periode Semua → rata-rata semua 6 periode
    let total = 0;
    let count = 0;
    for (let tahun of [2023, 2024, 2025]) {
      for (let periode of ["Februari", "Agustus"]) {
        const key = `${tahun},${periode}`;
        if (dataRataNasional[key]) {
          total += dataRataNasional[key];
          count++;
        }
      }
    }
    rataNasional = count > 0 ? total / count : 0;
    labelRata = "Semua periode (2023-2025)";
  }
  
  document.getElementById("kpi-rata-provinsi").innerHTML = formatRupiah(rataNasional);
 
 // ============================================
// CHART TREN NASIONAL - DINAMIS (Berubah sesuai filter Tahun & Periode)
// ============================================

// Tentukan rentang tahun berdasarkan filter tahunSelect
let tahunMulai = 2023;
let tahunAkhir = 2025;

if (tahunSelect.value !== "Semua") {
  const tahunFilter = parseInt(tahunSelect.value);
  tahunMulai = tahunFilter;
  tahunAkhir = tahunFilter;
}

// Bangun urutan periode dan labels berdasarkan filter
let urutanDinamis = [];
let labelsDinamis = [];

for (let t = tahunMulai; t <= tahunAkhir; t++) {
  if (periodeSelect.value === "Semua" || periodeSelect.value === "Februari") {
    urutanDinamis.push(`${t},Februari`);
    labelsDinamis.push(`Feb ${t}`);
  }
  if (periodeSelect.value === "Semua" || periodeSelect.value === "Agustus") {
    urutanDinamis.push(`${t},Agustus`);
    labelsDinamis.push(`Agu ${t}`);
  }
}

// Ambil nilai upah dari dataRataNasional
const nilaiDinamis = urutanDinamis.map(key => dataRataNasional[key] || 0);

// Hitung persentase perubahan antar periode (untuk dataset kedua)
let perubahanDinamis = [];
for (let i = 1; i < nilaiDinamis.length; i++) {
  if (nilaiDinamis[i-1] > 0) {
    const persen = ((nilaiDinamis[i] - nilaiDinamis[i-1]) / nilaiDinamis[i-1]) * 100;
    perubahanDinamis.push(persen);
  } else {
    perubahanDinamis.push(0);
  }
}
// Tambahkan null di awal agar sejajar dengan data pertama
perubahanDinamis.unshift(null);

// Tentukan judul grafik berdasarkan filter
let grafikJudul = "Perkembangan Rata-rata Upah Nasional";
if (tahunSelect.value !== "Semua" && periodeSelect.value !== "Semua") {
  grafikJudul = `Perkembangan Rata-rata Upah Nasional (${tahunSelect.value} ${periodeSelect.value})`;
} else if (tahunSelect.value !== "Semua") {
  grafikJudul = `Perkembangan Rata-rata Upah Nasional (Tahun ${tahunSelect.value})`;
} else if (periodeSelect.value !== "Semua") {
  grafikJudul = `Perkembangan Rata-rata Upah Nasional (Periode ${periodeSelect.value})`;
} else {
  grafikJudul = "Perkembangan Rata-rata Upah Nasional (2023-2025)";
}

// Update judul grafik
const chartHeader = document.querySelector("#tab-provinsi .chart-card.full-width h3");
if (chartHeader) chartHeader.innerHTML = `📈 ${grafikJudul}`;

// Hapus chart lama jika ada
if (chartTrenNasional) chartTrenNasional.destroy();

// Buat chart baru
chartTrenNasional = new Chart(document.getElementById("chartTrenNasional"), {
  type: "line",
  data: {
    labels: labelsDinamis,
    datasets: [
      {
        label: "📈 Rata-rata Upah Nasional",
        data: nilaiDinamis,
        borderColor: "#0b2d5c",
        backgroundColor: "rgba(11,45,92,0.05)",
        tension: 0.3,
        fill: true,
        pointRadius: 6,
        pointHoverRadius: 10,
        pointBackgroundColor: "#0b2d5c",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        borderWidth: 2.5
      },
      {
        label: "📊 Perubahan (%)",
        data: perubahanDinamis,
        borderColor: "#f97316",
        backgroundColor: "rgba(249,115,22,0.05)",
        tension: 0.3,
        fill: false,
        pointRadius: 4,
        pointHoverRadius: 8,
        pointBackgroundColor: "#f97316",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 1.5,
        borderWidth: 2,
        borderDash: [5, 5],
        yAxisID: 'y1'
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    interaction: {
      mode: 'index',
      intersect: false
    },
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: "rgba(0,0,0,0.85)",
        titleColor: "#ffffff",
        bodyColor: "#e2e8f0",
        borderColor: "#0b2d5c",
        borderWidth: 2,
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            let value = context.raw;
            if (value === null || value === undefined) return null;
            if (context.dataset.label.includes("Rata-rata")) {
              return `${label}: ${formatRupiah(value)}`;
            } else {
              return `${label}: ${value.toFixed(2)}%`;
            }
          },
          afterBody: function(tooltipItems) {
            if (tooltipItems.length === 0) return [];
            const index = tooltipItems[0].dataIndex;
            const upah = nilaiDinamis[index];
            if (upah && upah > 0) {
              let insight = "";
              if (upah < 2500000) insight = "⚠️ Upah masih di bawah standar nasional";
              else if (upah > 3500000) insight = "✅ Upah di atas rata-rata nasional";
              else insight = "📌 Upah berada di kisaran rata-rata nasional";
              return [`📌 ${insight}`];
            }
            return [];
          }
        }
      },
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          font: { size: 11, weight: 'bold' }
        }
      }
    },
    scales: {
      y: {
        title: { display: true, text: 'Upah (Rupiah)', color: '#0b2d5c', font: { weight: 'bold', size: 11 } },
        ticks: { callback: v => formatRupiah(v) },
        grid: { color: 'rgba(0,0,0,0.05)' }
      },
      y1: {
        position: 'right',
        title: { display: true, text: 'Perubahan (%)', color: '#f97316', font: { weight: 'bold', size: 11 } },
        ticks: { callback: v => v + '%' },
        grid: { drawOnChartArea: false }
      },
      x: {
        title: { display: true, text: 'Periode', color: '#5a6e7c', font: { size: 10 } },
        grid: { display: false }
      }
    },
    onHover: (event, activeElements) => {
      const canvas = document.getElementById("chartTrenNasional");
      if (canvas) canvas.style.cursor = activeElements.length ? 'pointer' : 'default';
    }
  }
});

// Update info box ringkasan (opsional)
const trenContainer = document.querySelector("#tab-provinsi .chart-card.full-width");
if (trenContainer) {
  let infoBox = document.getElementById("trenInfoBox");
  if (!infoBox) {
    infoBox = document.createElement("div");
    infoBox.id = "trenInfoBox";
    infoBox.style.cssText = `
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 16px;
      padding: 12px 16px;
      background: #f8fafc;
      border-radius: 12px;
      font-size: 0.7rem;
      border-left: 4px solid #0b2d5c;
    `;
    trenContainer.appendChild(infoBox);
  }
  
  if (nilaiDinamis.length > 0 && nilaiDinamis.some(v => v > 0)) {
    const validNilai = nilaiDinamis.filter(v => v > 0);
    const rataKeseluruhan = validNilai.reduce((a,b) => a + b, 0) / validNilai.length;
    const awal = nilaiDinamis.find(v => v > 0);
    const akhir = [...nilaiDinamis].reverse().find(v => v > 0);
    const perubahanKeseluruhan = awal && akhir ? ((akhir - awal) / awal) * 100 : 0;
    
    infoBox.innerHTML = `
      <div><strong>📅 Periode:</strong> ${labelsDinamis.filter((_, i) => nilaiDinamis[i] > 0).join(" · ")}</div>
      <div><strong>💰 Rata-rata:</strong> ${formatRupiah(rataKeseluruhan)}</div>
      <div><strong>📊 Perubahan Total:</strong> <span style="color: ${perubahanKeseluruhan > 0 ? '#10b981' : '#dc2626'}; font-weight: bold;">${perubahanKeseluruhan > 0 ? '▲' : '▼'} ${Math.abs(perubahanKeseluruhan).toFixed(2)}%</span></div>
    `;
  } else {
    infoBox.innerHTML = `<div><strong>⚠️ Tidak ada data untuk filter yang dipilih</strong></div>`;
  }
}
  
  // Perbandingan Upah Tertinggi dan Terendah per Provinsi
const provinsiMap = new Map();

filteredData.forEach(d => {
  const key = d.provinsi;
  const upah = Number(d.upah);

  if (!key || isNaN(upah)) return;

  if (!provinsiMap.has(key)) {
    provinsiMap.set(key, {
      tertinggi: {
        upah: upah,
        periode: d.periode,
        tahun: d.tahun
      },
      terendah: {
        upah: upah,
        periode: d.periode,
        tahun: d.tahun
      }
    });
  } else {
    const current = provinsiMap.get(key);

    if (upah > current.tertinggi.upah) {
      current.tertinggi = {
        upah: upah,
        periode: d.periode,
        tahun: d.tahun
      };
    }

    if (upah < current.terendah.upah) {
      current.terendah = {
        upah: upah,
        periode: d.periode,
        tahun: d.tahun
      };
    }

    provinsiMap.set(key, current);
  }
});

const perbandinganProvinsi = [];
for (let [prov, val] of provinsiMap) {
  perbandinganProvinsi.push({
    provinsi: prov,
    upahTertinggi: val.tertinggi.upah,
    periodeTertinggi: val.tertinggi.periode,
    tahunTertinggi: val.tertinggi.tahun,
    upahTerendah: val.terendah.upah,
    periodeTerendah: val.terendah.periode,
    tahunTerendah: val.terendah.tahun
  });
}

if (chartPerbandinganProvinsi) chartPerbandinganProvinsi.destroy();

chartPerbandinganProvinsi = new Chart(document.getElementById("chartPerbandinganProvinsi"), {
  type: "bar",
  data: {
    labels: perbandinganProvinsi.map(p => p.provinsi),
    datasets: [
      {
        label: "Upah Tertinggi",
        data: perbandinganProvinsi.map(p => p.upahTertinggi),
        backgroundColor: "#10b981",
        borderRadius: 6,
        metaInfo: perbandinganProvinsi.map(p => ({
          periode: p.periodeTertinggi,
          tahun: p.tahunTertinggi
        }))
      },
      {
        label: "Upah Terendah",
        data: perbandinganProvinsi.map(p => p.upahTerendah),
        backgroundColor: "#f59e0b",
        borderRadius: 6,
        metaInfo: perbandinganProvinsi.map(p => ({
          periode: p.periodeTerendah,
          tahun: p.tahunTerendah
        }))
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function(ctx) {
            return `${ctx.dataset.label}: ${formatRupiah(ctx.raw)}`;
          },
          afterLabel: function(ctx) {
            const info = ctx.dataset.metaInfo[ctx.dataIndex];
            return [
              `Periode: ${info.periode}`,
              `Tahun: ${info.tahun}`
            ];
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Provinsi"
        }
      },
      y: {
        ticks: {
          callback: function(value) {
            return formatRupiah(value);
          }
        }
      }
    }
  }
});


// TAMBAHKAN KODE INSIGHT DI BAWAH SINI
const insightPerbandingan = document.getElementById("insightPerbandinganProvinsi");

if (insightPerbandingan && perbandinganProvinsi.length > 0) {
  let dataInsight = [];

  perbandinganProvinsi.forEach(p => {
    dataInsight.push({
      provinsi: p.provinsi,
      upah: p.upahTertinggi,
      periode: p.periodeTertinggi,
      tahun: p.tahunTertinggi
    });

    dataInsight.push({
      provinsi: p.provinsi,
      upah: p.upahTerendah,
      periode: p.periodeTerendah,
      tahun: p.tahunTerendah
    });
  });

  dataInsight.sort((a, b) => b.upah - a.upah);

  const tertinggiInsight = dataInsight[0];
  const terendahInsight = dataInsight[dataInsight.length - 1];

  insightPerbandingan.innerHTML = `
    💡 Insight: Upah tertinggi terdapat di <strong>${tertinggiInsight.provinsi}</strong>
    sebesar <strong>${formatRupiah(tertinggiInsight.upah)}</strong>
    pada <strong>${tertinggiInsight.periode} ${tertinggiInsight.tahun}</strong>, 
    sedangkan upah terendah terdapat di <strong>${terendahInsight.provinsi}</strong>
    sebesar <strong>${formatRupiah(terendahInsight.upah)}</strong>
    pada <strong>${terendahInsight.periode} ${terendahInsight.tahun}</strong>.
  `;
} else if (insightPerbandingan) {
  insightPerbandingan.innerHTML = `
    💡 Insight: Data perbandingan upah belum tersedia.
  `;
}
  
  // Tabel Provinsi
  const tabelBody = document.getElementById("tabelProvinsiBody");
  if (tabelBody) {
    let html = "";
    filteredData.slice(0, 200).forEach(d => {
      html += `<tr><td>${d.tahun}</td><td>${d.periode}</td><td>${d.provinsi}</td><td class="upah-cell">${formatRupiah(d.upah)}</td></tr>`;
    });
    if (filteredData.length > 200) html += `<tr><td colspan="4" style="text-align:center">📌 ... dan ${filteredData.length - 200} data lainnya</td></tr>`;
    tabelBody.innerHTML = html;
  }
  
  // ============================================
// KPI UPAH TERTINGGI & TERENDAH
// ============================================

const dataKPIProvinsi = filteredData
  .map(d => ({
    provinsi: d.provinsi,
    upah: Number(d.upah),
    periode: d.periode,
    tahun: d.tahun
  }))
  .filter(d => d.provinsi && !isNaN(d.upah));

if (dataKPIProvinsi.length > 0) {
  dataKPIProvinsi.sort((a, b) => b.upah - a.upah);

  const tertinggi = dataKPIProvinsi[0];
  const terendah = dataKPIProvinsi[dataKPIProvinsi.length - 1];

  document.getElementById("kpi-tertinggi-provinsi").innerHTML =
    formatRupiah(tertinggi.upah);

  document.getElementById("kpi-terendah-provinsi").innerHTML =
    formatRupiah(terendah.upah);

  document.getElementById("kpi-tertinggi-ket").innerHTML = `
    ${tertinggi.provinsi}<br>
    <small>${tertinggi.periode} ${tertinggi.tahun}</small>
  `;

  document.getElementById("kpi-terendah-ket").innerHTML = `
    ${terendah.provinsi}<br>
    <small>${terendah.periode} ${terendah.tahun}</small>
  `;

  const trend = getTrend(rataNasional, dataRataNasional["2025,Agustus"]);
  document.getElementById("trend-provinsi").innerHTML = trend;
} else {
  document.getElementById("kpi-tertinggi-provinsi").innerHTML = "-";
  document.getElementById("kpi-terendah-provinsi").innerHTML = "-";
  document.getElementById("kpi-tertinggi-ket").innerHTML = "Data tidak tersedia";
  document.getElementById("kpi-terendah-ket").innerHTML = "Data tidak tersedia";
}
}

// ============================================
// PART 12: TAB PENDIDIKAN (Gender Comparison)
// ============================================

// ============================================
// PART 12: TAB PENDIDIKAN (Gender Comparison + Gabungan)
// ============================================

function updateTabPendidikan() {
  const filteredData = filterDataByTab(dataPendidikan, "pendidikan");
  
  // KPI Rata-rata
  let totalUpah = 0;
  filteredData.forEach(d => totalUpah += d.upah);
  const rata = filteredData.length > 0 ? totalUpah / filteredData.length : 0;
  document.getElementById("kpi-rata-pendidikan").innerHTML = formatRupiah(rata);
  
  // Data Laki, Perempuan, Gabungan
  const lakiData = jenjangPendidikan.map(j => {
    const items = filteredData.filter(d => d.pendidikan === j && d.jenisKelamin === "Laki-Laki");
    return items.length ? items.reduce((a,b) => a + b.upah, 0) / items.length : 0;
  });
  const perempuanData = jenjangPendidikan.map(j => {
    const items = filteredData.filter(d => d.pendidikan === j && d.jenisKelamin === "Perempuan");
    return items.length ? items.reduce((a,b) => a + b.upah, 0) / items.length : 0;
  });
  const gabunganData = jenjangPendidikan.map(j => {
    const items = filteredData.filter(d => d.pendidikan === j && d.jenisKelamin === "Laki-Laki dan Perempuan");
    return items.length ? items.reduce((a,b) => a + b.upah, 0) / items.length : 0;
  });
  
  if (chartPendidikanGender) chartPendidikanGender.destroy();
  chartPendidikanGender = new Chart(document.getElementById("chartPendidikanGender"), {
    type: "bar",
    data: { 
      labels: shortPendidikan, 
      datasets: [
        { label: "👨 Laki-Laki", data: lakiData, backgroundColor: "#3b82f6", borderRadius: 6 },
        { label: "👩 Perempuan", data: perempuanData, backgroundColor: "#ec489a", borderRadius: 6 },
        { label: "👫 Gabungan (L+P)", data: gabunganData, backgroundColor: "#10b981", borderRadius: 6 }
      ]
    },
    options: { 
      responsive: true, 
      maintainAspectRatio: true, 
      plugins: { 
        tooltip: { callbacks: { label: ctx => `${ctx.dataset.label}: ${formatRupiah(ctx.raw)}` } },
        legend: { position: "top" }
      }, 
      scales: { y: { ticks: { callback: v => formatRupiah(v) } } } 
    }
  });
  
  // KPI Laki, Perempuan, Gabungan Tertinggi
  const lakiMax = Math.max(...lakiData);
  const perempuanMax = Math.max(...perempuanData);
  const gabunganMax = Math.max(...gabunganData);
  document.getElementById("kpi-laki-pendidikan").innerHTML = formatRupiah(lakiMax);
  document.getElementById("kpi-perempuan-pendidikan").innerHTML = formatRupiah(perempuanMax);
  
  // Tambah KPI untuk Gabungan (optional - jika ada elemen)
  const kpiGabungan = document.getElementById("kpi-gabungan-pendidikan");
  if (kpiGabungan) kpiGabungan.innerHTML = formatRupiah(gabunganMax);
  
  // Insight
  const insightBox = document.getElementById("insightPendidikan");
  if (insightBox) {
    const selisihTerbesar = Math.max(...lakiData.map((l, i) => l - perempuanData[i]));
    const idxTerbesar = lakiData.findIndex((l, i) => l - perempuanData[i] === selisihTerbesar);
    insightBox.innerHTML = `💡 <strong>Insight:</strong> Upah laki-laki secara konsisten lebih tinggi dari perempuan di semua jenjang pendidikan. Selisih terbesar di tingkat ${shortPendidikan[idxTerbesar]} (${formatRupiah(selisihTerbesar)}). Data gabungan menunjukkan rata-rata upah nasional per jenjang pendidikan.`;
  }
  
  // Tabel
  const tabelBody = document.getElementById("tabelPendidikanBody");
  if (tabelBody) {
    let html = "";
    filteredData.slice(0, 200).forEach(d => {
      let genderDisplay = d.jenisKelamin === "Laki-Laki dan Perempuan" ? "👫 Gabungan" : (d.jenisKelamin === "Laki-Laki" ? "👨 Laki-Laki" : "👩 Perempuan");
      html += `<tr>
        <td>${d.tahun}</td>
        <td>${d.periode}</td>
        <td>${d.pendidikan}</td>
        <td>${genderDisplay}</td>
        <td class="upah-cell">${formatRupiah(d.upah)}</td>
      </tr>`;
    });
    if (filteredData.length > 200) html += `<tr><td colspan="5" style="text-align:center">📌 ... dan ${filteredData.length - 200} data lainnya</td></tr>`;
    tabelBody.innerHTML = html;
  }
}

// ============================================
// PART 13: TAB UMUR (Gender Comparison)
// ============================================

// ============================================
// PART 13: TAB UMUR (Gender Comparison + Gabungan)
// ============================================

function updateTabUmur() {
  const filteredData = filterDataByTab(dataUmur, "umur");
  
  let totalUpah = 0;
  filteredData.forEach(d => totalUpah += d.upah);
  const rata = filteredData.length > 0 ? totalUpah / filteredData.length : 0;
  document.getElementById("kpi-rata-umur").innerHTML = formatRupiah(rata);
  
  const lakiData = kelompokUmur.map(u => {
    const items = filteredData.filter(d => d.umur === u && d.jenisKelamin === "Laki-Laki");
    return items.length ? items.reduce((a,b) => a + b.upah, 0) / items.length : 0;
  });
  const perempuanData = kelompokUmur.map(u => {
    const items = filteredData.filter(d => d.umur === u && d.jenisKelamin === "Perempuan");
    return items.length ? items.reduce((a,b) => a + b.upah, 0) / items.length : 0;
  });
  const gabunganData = kelompokUmur.map(u => {
    const items = filteredData.filter(d => d.umur === u && d.jenisKelamin === "Laki-Laki dan Perempuan");
    return items.length ? items.reduce((a,b) => a + b.upah, 0) / items.length : 0;
  });
  
  if (chartUmurGender) chartUmurGender.destroy();
  chartUmurGender = new Chart(document.getElementById("chartUmurGender"), {
    type: "line",
    data: { 
      labels: kelompokUmur, 
      datasets: [
        { label: "👨 Laki-Laki", data: lakiData, borderColor: "#3b82f6", backgroundColor: "rgba(59,130,246,0.1)", tension: 0.3, fill: true },
        { label: "👩 Perempuan", data: perempuanData, borderColor: "#ec489a", backgroundColor: "rgba(236,72,153,0.1)", tension: 0.3, fill: true },
        { label: "👫 Gabungan (L+P)", data: gabunganData, borderColor: "#10b981", backgroundColor: "rgba(16,185,129,0.1)", tension: 0.3, fill: true }
      ]
    },
    options: { 
      responsive: true, 
      plugins: { 
        tooltip: { callbacks: { label: ctx => `${ctx.dataset.label}: ${formatRupiah(ctx.raw)}` } },
        legend: { position: "top" }
      }, 
      scales: { y: { ticks: { callback: v => formatRupiah(v) } } } 
    }
  });
  
  const lakiMax = Math.max(...lakiData);
  const perempuanMax = Math.max(...perempuanData);
  const gabunganMax = Math.max(...gabunganData);
  document.getElementById("kpi-laki-umur").innerHTML = formatRupiah(lakiMax);
  document.getElementById("kpi-perempuan-umur").innerHTML = formatRupiah(perempuanMax);
  
  const insightBox = document.getElementById("insightUmur");
  if (insightBox) {
    const lakiPuncak = kelompokUmur[lakiData.indexOf(lakiMax)];
    const perempuanPuncak = kelompokUmur[perempuanData.indexOf(perempuanMax)];
    insightBox.innerHTML = `💡 <strong>Insight:</strong> Upah tertinggi laki-laki di usia ${lakiPuncak} tahun (${formatRupiah(lakiMax)}), sementara perempuan di usia ${perempuanPuncak} tahun (${formatRupiah(perempuanMax)}). Data gabungan menunjukkan puncak upah di usia 50-54 tahun.`;
  }
  
  const tabelBody = document.getElementById("tabelUmurBody");
  if (tabelBody) {
    let html = "";
    filteredData.slice(0, 200).forEach(d => {
      let genderDisplay = d.jenisKelamin === "Laki-Laki dan Perempuan" ? "👫 Gabungan" : (d.jenisKelamin === "Laki-Laki" ? "👨 Laki-Laki" : "👩 Perempuan");
      html += `<tr>
        <td>${d.tahun}</td>
        <td>${d.periode}</td>
        <td>${d.umur}</td>
        <td>${genderDisplay}</td>
        <td class="upah-cell">${formatRupiah(d.upah)}</td>
      </tr>`;
    });
    if (filteredData.length > 200) html += `<tr><td colspan="5" style="text-align:center">📌 ... dan ${filteredData.length - 200} data lainnya</td></tr>`;
    tabelBody.innerHTML = html;
  }
}

// ============================================
// PART 14: TAB USAHA (Gender Comparison)
// ============================================

// ============================================
// PART 14: TAB USAHA (Gender Comparison + Gabungan)
// ============================================

// ============================================
// PART 14: TAB USAHA (Gender Comparison + Gabungan) - DIPERBAIKI
// ============================================

function updateTabUsaha() {
  const filteredData = filterDataByTab(dataUsaha, "usaha");
  
  let totalUpah = 0;
  filteredData.forEach(d => totalUpah += d.upah);
  const rata = filteredData.length > 0 ? totalUpah / filteredData.length : 0;
  document.getElementById("kpi-rata-usaha").innerHTML = formatRupiah(rata);
  
  // Ambil data berdasarkan gender yang dipilih untuk menentukan urutan top usaha
  const selectedGender = genderSelect.value;
  
  // Tentukan gender yang akan digunakan untuk mengurutkan top usaha
  let orderGender = selectedGender;
  if (selectedGender === "Semua") {
    // Jika "Semua", gunakan "Laki-Laki dan Perempuan" sebagai acuan urutan
    orderGender = "Laki-Laki dan Perempuan";
  }
  
  // Hitung rata-rata upah per usaha berdasarkan gender yang dipilih untuk urutan
  const usahaOrderMap = new Map();
  filteredData.forEach(d => {
    if (d.usaha && d.jenisKelamin === orderGender) {
      const current = usahaOrderMap.get(d.usaha) || { total: 0, count: 0 };
      current.total += d.upah;
      current.count++;
      usahaOrderMap.set(d.usaha, current);
    }
  });
  
  // Buat array untuk urutan (top 10 berdasarkan orderGender)
  const usahaOrderRata = [];
  for (let [usaha, val] of usahaOrderMap) {
    if (val.count > 0) {
      usahaOrderRata.push({ usaha, upah: val.total / val.count });
    }
  }
  usahaOrderRata.sort((a, b) => b.upah - a.upah);
  const topUsaha = usahaOrderRata.slice(0, 10);
  
  // Jika tidak ada data untuk orderGender, coba ambil dari semua data yang ada
  if (topUsaha.length === 0) {
    // Fallback: ambil semua usaha unik dari filteredData
    const uniqueUsaha = [...new Set(filteredData.filter(d => d.usaha).map(d => d.usaha))];
    uniqueUsaha.forEach(usaha => {
      topUsaha.push({ usaha, upah: 0 });
    });
    topUsaha.splice(10);
  }
  
  // Data Laki-Laki untuk top usaha
  const lakiUsaha = topUsaha.map(u => {
    const items = filteredData.filter(d => d.usaha === u.usaha && d.jenisKelamin === "Laki-Laki");
    return items.length ? items.reduce((a,b) => a + b.upah, 0) / items.length : 0;
  });
  
  // Data Perempuan untuk top usaha
  const perempuanUsaha = topUsaha.map(u => {
    const items = filteredData.filter(d => d.usaha === u.usaha && d.jenisKelamin === "Perempuan");
    return items.length ? items.reduce((a,b) => a + b.upah, 0) / items.length : 0;
  });
  
  // Data Gabungan untuk top usaha
  const gabunganUsaha = topUsaha.map(u => {
    const items = filteredData.filter(d => d.usaha === u.usaha && d.jenisKelamin === "Laki-Laki dan Perempuan");
    return items.length ? items.reduce((a,b) => a + b.upah, 0) / items.length : 0;
  });
  
  // Hancurkan chart lama jika ada
  if (chartUsahaGender) chartUsahaGender.destroy();
  
  // Buat chart baru dengan data yang sesuai
  const chartCtx = document.getElementById("chartUsahaGender");
  if (chartCtx) {
    chartUsahaGender = new Chart(chartCtx, {
      type: "bar",
      data: { 
        labels: topUsaha.map(u => u.usaha.substring(0, 25) + (u.usaha.length > 25 ? '...' : '')), 
        datasets: [
          { label: "👨 Laki-Laki", data: lakiUsaha, backgroundColor: "#3b82f6", borderRadius: 6 },
          { label: "👩 Perempuan", data: perempuanUsaha, backgroundColor: "#ec489a", borderRadius: 6 },
          { label: "👫 Gabungan (L+P)", data: gabunganUsaha, backgroundColor: "#10b981", borderRadius: 6 }
        ]
      },
      options: { 
        indexAxis: 'y', 
        responsive: true, 
        maintainAspectRatio: true, 
        plugins: { 
          tooltip: { 
            callbacks: { 
              label: ctx => `${ctx.dataset.label}: ${formatRupiah(ctx.raw)}`
            } 
          },
          legend: { position: "top" }
        }, 
        scales: { 
          x: { 
            ticks: { callback: v => formatRupiah(v) },
            title: { display: true, text: 'Upah (Rupiah)', font: { size: 10 } }
          },
          y: {
            title: { display: true, text: 'Lapangan Usaha', font: { size: 10 } }
          }
        } 
      }
    });
  }
  
  // KPI untuk Laki-Laki, Perempuan, Gabungan Tertinggi
  const lakiMax = Math.max(...lakiUsaha);
  const perempuanMax = Math.max(...perempuanUsaha);
  const gabunganMax = Math.max(...gabunganUsaha);
  
  document.getElementById("kpi-laki-usaha").innerHTML = formatRupiah(lakiMax);
  document.getElementById("kpi-perempuan-usaha").innerHTML = formatRupiah(perempuanMax);
  
  // Insight Box
  const insightBox = document.getElementById("insightUsaha");
  if (insightBox && topUsaha.length > 0) {
    const topLaki = topUsaha[lakiUsaha.indexOf(lakiMax)]?.usaha || "-";
    const topPerempuan = topUsaha[perempuanUsaha.indexOf(perempuanMax)]?.usaha || "-";
    const topGabungan = topUsaha[gabunganUsaha.indexOf(gabunganMax)]?.usaha || "-";
    
    let insightText = "";
    if (selectedGender === "Laki-Laki") {
      insightText = `💡 <strong>Insight:</strong> Berdasarkan filter Laki-Laki, sektor dengan upah tertinggi adalah "${topLaki.substring(0, 35)}" dengan upah ${formatRupiah(lakiMax)}.`;
    } else if (selectedGender === "Perempuan") {
      insightText = `💡 <strong>Insight:</strong> Berdasarkan filter Perempuan, sektor dengan upah tertinggi adalah "${topPerempuan.substring(0, 35)}" dengan upah ${formatRupiah(perempuanMax)}.`;
    } else if (selectedGender === "Laki-Laki dan Perempuan") {
      insightText = `💡 <strong>Insight:</strong> Berdasarkan filter Gabungan (L+P), sektor dengan upah tertinggi adalah "${topGabungan.substring(0, 35)}" dengan upah ${formatRupiah(gabunganMax)}.`;
    } else {
      insightText = `💡 <strong>Insight:</strong> Sektor dengan upah tertinggi untuk laki-laki adalah "${topLaki.substring(0, 35)}", untuk perempuan "${topPerempuan.substring(0, 35)}", dan untuk gabungan "${topGabungan.substring(0, 35)}".`;
    }
    insightBox.innerHTML = insightText;
  } else if (insightBox) {
    insightBox.innerHTML = `💡 <strong>Insight:</strong> Pilih filter tahun, periode, dan gender untuk melihat perbandingan upah antar sektor usaha.`;
  }
  
  // Tabel Usaha
  const tabelBody = document.getElementById("tabelUsahaBody");
  if (tabelBody) {
    let html = "";
    filteredData.slice(0, 200).forEach(d => {
      let genderDisplay = d.jenisKelamin === "Laki-Laki dan Perempuan" ? "👫 Gabungan" : (d.jenisKelamin === "Laki-Laki" ? "👨 Laki-Laki" : "👩 Perempuan");
      html += `<tr>
        <td>${d.tahun}</td>
        <td>${d.periode}</td>
        <td>${d.usaha ? d.usaha.substring(0, 50) : '-'}</td>
        <td>${genderDisplay}</td>
        <td class="upah-cell">${formatRupiah(d.upah)}</td>
      </tr>`;
    });
    if (filteredData.length > 200) html += `<tr><td colspan="5" style="text-align:center">📌 ... dan ${filteredData.length - 200} data lainnya</td></tr>`;
    tabelBody.innerHTML = html;
  }
}

// ============================================
// PART 15: TAB SEMUA DATA (Gabungan)
// ============================================

function updateTabSemua() {
  const tahun = tahunSelect.value;
  const periode = periodeSelect.value;
  
  let semuaData = [];
  
  // Data Provinsi
  dataProvinsi.forEach(d => {
    if ((tahun === "Semua" || d.tahun == tahun) && (periode === "Semua" || d.periode === periode)) {
      semuaData.push({ ...d, tipeData: "📍 Provinsi", nama: d.provinsi, gender: "-" });
    }
  });
  
  // Data Pendidikan
  dataPendidikan.forEach(d => {
    if ((tahun === "Semua" || d.tahun == tahun) && (periode === "Semua" || d.periode === periode)) {
      semuaData.push({ ...d, tipeData: "🎓 Pendidikan", nama: d.pendidikan, gender: d.jenisKelamin });
    }
  });
  
  // Data Umur
  dataUmur.forEach(d => {
    if ((tahun === "Semua" || d.tahun == tahun) && (periode === "Semua" || d.periode === periode)) {
      semuaData.push({ ...d, tipeData: "👥 Kelompok Umur", nama: d.umur, gender: d.jenisKelamin });
    }
  });
  
  // Data Usaha
  dataUsaha.forEach(d => {
    if (d.usaha && (tahun === "Semua" || d.tahun == tahun) && (periode === "Semua" || d.periode === periode)) {
      semuaData.push({ ...d, tipeData: "🏭 Lapangan Usaha", nama: d.usaha, gender: d.jenisKelamin });
    }
  });
  
  const tabelBody = document.getElementById("tabelSemuaBody");
  if (tabelBody) {
    let html = "";
    let no = 1;
    semuaData.slice(0, 500).forEach(d => {
      html += `<tr>
        <td>${no++}</td>
        <td>${d.tipeData}</td>
        <td><strong>${d.nama}</strong></td>
        <td>${d.tahun}</td>
        <td>${d.periode}</td>
        <td>${d.gender}</td>
        <td class="upah-cell">${formatRupiah(d.upah)}</td>
      </tr>`;
    });
    if (semuaData.length > 500) {
      html += `<tr><td colspan="7" style="text-align:center">📌 ... dan ${semuaData.length - 500} data lainnya</td></tr>`;
    }
    tabelBody.innerHTML = html;
  }
}

// ============================================
// PART 16: GLOBAL SEARCH & AUTOCOMPLETE
// ============================================

function generateSuggestions(searchText) {
  if (!searchText || searchText.length === 0) return [];
  const lowerText = searchText.toLowerCase();
  const suggestions = [];
  
  // Provinsi
  allProvinsi.filter(p => p.toLowerCase().includes(lowerText)).slice(0, 5).forEach(p => {
    suggestions.push({ text: p, type: "provinsi", icon: "📍", display: `Provinsi: ${p}` });
  });
  
  // Tahun
  [2023, 2024, 2025].forEach(t => {
    if (t.toString().includes(lowerText)) {
      suggestions.push({ text: t.toString(), type: "tahun", icon: "📆", display: `Tahun ${t}` });
    }
  });
  
  // Periode
    // Gender
  if (lowerText.includes("laki") && !lowerText.includes("perempuan")) {
    suggestions.push({ text: "Laki-Laki", type: "gender", icon: "⚥", display: "Gender Laki-Laki" });
  }
  if (lowerText.includes("perempuan") && !lowerText.includes("laki")) {
    suggestions.push({ text: "Perempuan", type: "gender", icon: "⚥", display: "Gender Perempuan" });
  }
  if (lowerText.includes("gabungan") || (lowerText.includes("laki") && lowerText.includes("perempuan"))) {
    suggestions.push({ text: "Laki-Laki dan Perempuan", type: "gender", icon: "⚥", display: "Gender Gabungan (Laki-Laki + Perempuan)" });
  }
  
  // Gender
  if (lowerText.includes("laki") && !lowerText.includes("perempuan")) suggestions.push({ text: "Laki-Laki", type: "gender", icon: "⚥", display: "Gender Laki-Laki" });
  if (lowerText.includes("perempuan")) suggestions.push({ text: "Perempuan", type: "gender", icon: "⚥", display: "Gender Perempuan" });
  
  // Pendidikan
  if (lowerText.includes("sd")) suggestions.push({ text: "SD ke Bawah", type: "pendidikan", icon: "🎓", display: "Pendidikan SD ke Bawah" });
  if (lowerText.includes("smp")) suggestions.push({ text: "SMP", type: "pendidikan", icon: "🎓", display: "Pendidikan SMP" });
  if (lowerText.includes("sma") && !lowerText.includes("kejuruan")) suggestions.push({ text: "SMA Umum", type: "pendidikan", icon: "🎓", display: "Pendidikan SMA Umum" });
  if (lowerText.includes("smk") || lowerText.includes("kejuruan")) suggestions.push({ text: "SMA Kejuruan", type: "pendidikan", icon: "🎓", display: "Pendidikan SMA Kejuruan" });
  if (lowerText.includes("diploma") || lowerText.includes("d3")) suggestions.push({ text: "Diploma I/II/III", type: "pendidikan", icon: "🎓", display: "Pendidikan Diploma" });
  if (lowerText.includes("sarjana") || lowerText.includes("s1")) suggestions.push({ text: "DIV/S1/S2/S3", type: "pendidikan", icon: "🎓", display: "Pendidikan Sarjana" });
  
  // Umur
  kelompokUmur.forEach(u => {
    if (lowerText.includes(u)) suggestions.push({ text: u, type: "umur", icon: "👥", display: `Umur ${u}` });
  });
  
  return suggestions.slice(0, 8);
}

function applyGlobalSearch(keywords) {
  if (keywords.type === "provinsi") {
    selectedProvinsi = [keywords.text];
    renderProvinsiList();
    if (currentTab === "provinsi") updateTabProvinsi();
    switchTab("provinsi");
  } else if (keywords.type === "tahun") {
    tahunSelect.value = keywords.text;
    updateAllTabs();
  } else if (keywords.type === "periode") {
    periodeSelect.value = keywords.text;
    updateAllTabs();
    } else if (keywords.type === "gender") {
    // Gender bisa: Laki-Laki, Perempuan, atau Laki-Laki dan Perempuan
    const genderMap = {
      "laki-laki": "Laki-Laki",
      "perempuan": "Perempuan", 
      "gabungan": "Laki-Laki dan Perempuan",
      "laki-laki dan perempuan": "Laki-Laki dan Perempuan"
    };
    let mappedGender = genderMap[keywords.text.toLowerCase()] || keywords.text;
    genderSelect.value = mappedGender;
    if (currentTab === "pendidikan") updateTabPendidikan();
    if (currentTab === "umur") updateTabUmur();
    if (currentTab === "usaha") updateTabUsaha();
  } else if (keywords.type === "pendidikan") {
    selectedPendidikan = [keywords.text];
    renderPendidikanList();
    if (currentTab === "pendidikan") updateTabPendidikan();
    switchTab("pendidikan");
  } else if (keywords.type === "umur") {
    selectedUmur = [keywords.text];
    renderUmurList();
    if (currentTab === "umur") updateTabUmur();
    switchTab("umur");
  }
}

function updateAllTabs() {
  if (currentTab === "provinsi") updateTabProvinsi();
  else if (currentTab === "pendidikan") updateTabPendidikan();
  else if (currentTab === "umur") updateTabUmur();
  else if (currentTab === "usaha") updateTabUsaha();
  else if (currentTab === "semua") updateTabSemua();
  if (currentTab === "provinsi") updateMapMarkers();
}


// ============================================
// PART 17: TAB SWITCHING
// ============================================

function switchTab(tabName) {
  currentTab = tabName;
  
  // Update tombol tab
  tabBtns.forEach(btn => {
    if (btn.dataset.tab === tabName) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  
  // Update konten tab
  tabContents.forEach(content => {
    if (content.id === `tab-${tabName}`) {
      content.classList.add("active");
    } else {
      content.classList.remove("active");
    }
  });
  
  // Update sidebar
  updateSidebarForTab(tabName);
  
  // Update konten sesuai tab
  if (tabName === "provinsi") {
    updateTabProvinsi();
    setTimeout(() => { if (map) map.invalidateSize(); }, 100);
  } else if (tabName === "pendidikan") {
    updateTabPendidikan();
  } else if (tabName === "umur") {
    updateTabUmur();
  } else if (tabName === "usaha") {
    updateTabUsaha();
  } else if (tabName === "semua") {
    updateTabSemua();
  }
  
  // Panggil update chart tambahan (donut, gap, dll) setelah tab berubah
  updateAllAdditionalCharts();
}
// ============================================
// PART 18: EVENT LISTENERS & INITIALIZATION
// ============================================

// Tab buttons
tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const tabName = btn.dataset.tab;
    switchTab(tabName);
    if (window.innerWidth <= 768) {
      sidebar.classList.remove("open");
    }
  });
});

// Filter events
tahunSelect.addEventListener("change", () => {
  updateAllTabs();
  if (currentTab === "provinsi") updateMapMarkers();
  updateAllAdditionalCharts();
});
periodeSelect.addEventListener("change", () => {
  updateAllTabs();
  if (currentTab === "provinsi") updateMapMarkers();
  updateAllAdditionalCharts();
});
genderSelect.addEventListener("change", () => {
  if (currentTab === "pendidikan") updateTabPendidikan();
  else if (currentTab === "umur") updateTabUmur();
  else if (currentTab === "usaha") updateTabUsaha();
  updateAllAdditionalCharts();
});

// Event listener untuk search input pendidikan & umur (multi-select)
document.getElementById("pendidikanSearch")?.addEventListener("input", () => renderPendidikanList());
document.getElementById("umurSearch")?.addEventListener("input", () => renderUmurList());

// Reset button
resetBtn.addEventListener("click", () => {
  tahunSelect.value = "Semua";
  periodeSelect.value = "Semua";
  genderSelect.value = "Semua";
  selectedProvinsi = [];
  selectedUsaha = [];
  selectedPendidikan = [];
  selectedUmur = [];
  if (provinsiSearch) provinsiSearch.value = "";
  if (usahaSearch) usahaSearch.value = "";
  if (document.getElementById("pendidikanSearch")) document.getElementById("pendidikanSearch").value = "";
  if (document.getElementById("umurSearch")) document.getElementById("umurSearch").value = "";
  renderProvinsiList();
  renderUsahaList();
  renderPendidikanList();
  renderUmurList();
  updateAllTabs();
  if (currentTab === "provinsi") updateMapMarkers();
  if (globalSearchInput) globalSearchInput.value = "";
  searchResultCount.innerHTML = "";
  autocompleteDropdown.classList.remove("show");
  updateAllAdditionalCharts();
});

// Global Search
globalSearchInput.addEventListener("input", () => {
  const searchTerm = globalSearchInput.value.trim();
  if (searchTerm.length === 0) {
    autocompleteDropdown.classList.remove("show");
    searchResultCount.innerHTML = "";
    return;
  }
  const suggestions = generateSuggestions(searchTerm);
  if (suggestions.length > 0) {
    autocompleteDropdown.innerHTML = suggestions.map(s => `
      <div class="autocomplete-item" data-type="${s.type}" data-value="${s.text}">
        <span class="suggestion-icon">${s.icon}</span>
        <span class="suggestion-text">${s.display}</span>
        <span class="suggestion-badge">${s.type}</span>
      </div>
    `).join("");
    autocompleteDropdown.classList.add("show");
    
    document.querySelectorAll(".autocomplete-item").forEach(item => {
      item.addEventListener("click", () => {
        const type = item.dataset.type;
        const value = item.dataset.value;
        applyGlobalSearch({ type, text: value });
        globalSearchInput.value = "";
        autocompleteDropdown.classList.remove("show");
        searchResultCount.innerHTML = `✅ Filter diterapkan: ${value}`;
        setTimeout(() => { searchResultCount.innerHTML = ""; }, 3000);
      });
    });
  } else {
    autocompleteDropdown.classList.remove("show");
  }
});

clearSearchBtn.addEventListener("click", () => {
  globalSearchInput.value = "";
  autocompleteDropdown.classList.remove("show");
  searchResultCount.innerHTML = "";
});

// Tutup autocomplete saat klik di luar
document.addEventListener("click", (e) => {
  if (!autocompleteDropdown.contains(e.target) && e.target !== globalSearchInput) {
    autocompleteDropdown.classList.remove("show");
  }
});

// Mobile sidebar
mobileMenuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});
closeSidebarBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
});
document.addEventListener("click", (e) => {
  if (window.innerWidth <= 768 && sidebar.classList.contains("open")) {
    if (!sidebar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      sidebar.classList.remove("open");
    }
  }
});

// Search input provinsi & usaha
if (provinsiSearch) {
  provinsiSearch.addEventListener("input", () => renderProvinsiList());
}
if (usahaSearch) {
  usahaSearch.addEventListener("input", () => renderUsahaList());
}

// Inisialisasi
function init() {
  renderProvinsiList();
  renderUsahaList();
  renderPendidikanList();
  renderUmurList();
  initMap();
  switchTab("provinsi");
}

document.addEventListener("DOMContentLoaded", init);

console.log("✅ DASHBOARD 5 TAB DENGAN MULTI-SELECT PENDIDIKAN & UMUR SIAP!");

// ============================================
// ADDITIONAL CHARTS - SEMUA VERSI FINAL (HANYA SATU KALI)
// ============================================

function updateAdditionalChartsProvinsi() {
  let filteredData = [...dataProvinsi];
  if (tahunSelect.value !== "Semua") filteredData = filteredData.filter(d => d.tahun == tahunSelect.value);
  if (periodeSelect.value !== "Semua") filteredData = filteredData.filter(d => d.periode === periodeSelect.value);
  if (selectedProvinsi.length > 0) filteredData = filteredData.filter(d => selectedProvinsi.includes(d.provinsi));
  
  const pulauMap = {
    "Sumatera": ["Aceh", "Sumatera Utara", "Sumatera Barat", "Riau", "Jambi", "Sumatera Selatan", "Bengkulu", "Lampung", "Kepulauan Bangka Belitung", "Kepulauan Riau"],
    "Jawa": ["DKI Jakarta", "Jawa Barat", "Jawa Tengah", "D.I. Yogyakarta", "Jawa Timur", "Banten"],
    "Bali & Nusa": ["Bali", "Nusa Tenggara Barat", "Nusa Tenggara Timur"],
    "Kalimantan": ["Kalimantan Barat", "Kalimantan Tengah", "Kalimantan Selatan", "Kalimantan Timur", "Kalimantan Utara"],
    "Sulawesi": ["Sulawesi Utara", "Sulawesi Tengah", "Sulawesi Selatan", "Sulawesi Tenggara", "Gorontalo", "Sulawesi Barat"],
    "Maluku & Papua": ["Maluku", "Maluku Utara", "Papua Barat", "Papua Barat Daya", "Papua", "Papua Selatan", "Papua Tengah", "Papua Pegunungan"]
  };
  
  const provMap = new Map();
  filteredData.forEach(d => {
    const current = provMap.get(d.provinsi) || { total: 0, count: 0 };
    current.total += d.upah;
    current.count++;
    provMap.set(d.provinsi, current);
  });
  
  const pulauData = {};
  for (let pulau in pulauMap) {
    pulauData[pulau] = { total: 0, count: 0 };
  }
  for (let [prov, val] of provMap) {
    const rata = val.total / val.count;
    for (let pulau in pulauMap) {
      if (pulauMap[pulau].includes(prov)) {
        pulauData[pulau].total += rata;
        pulauData[pulau].count++;
        break;
      }
    }
  }
  
  const pulauLabels = [];
  const pulauValues = [];
  for (let pulau in pulauData) {
    if (pulauData[pulau].count > 0) {
      pulauLabels.push(pulau);
      pulauValues.push(pulauData[pulau].total / pulauData[pulau].count);
    }
  }
  
  // DONUT CHART - Distribusi per pulau (TANPA BAR CHART)
  if (chartDonutProvinsi) chartDonutProvinsi.destroy();
  if (document.getElementById("chartDonutProvinsi")) {
    chartDonutProvinsi = new Chart(document.getElementById("chartDonutProvinsi"), {
      type: "doughnut",
      data: { 
        labels: pulauLabels, 
        datasets: [{ 
          data: pulauValues, 
          backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec489a"], 
          borderWidth: 0,
          hoverOffset: 10
        }] 
      },
      options: { 
        responsive: true, 
        maintainAspectRatio: true, 
        plugins: { 
          legend: { position: "bottom", labels: { font: { size: 10 } } }, 
          tooltip: { 
            callbacks: { 
              label: ctx => `${ctx.label}: ${formatRupiah(ctx.raw)}`
            } 
          } 
        } 
      }
    });
  }
  
  // Update insight donut
  const insightDonut = document.getElementById("insightDonutProvinsi");
  if (insightDonut && pulauLabels.length > 0) {
    const maxIndex = pulauValues.indexOf(Math.max(...pulauValues));
    insightDonut.innerHTML = `💡 <strong>Insight:</strong> Wilayah dengan rata-rata upah tertinggi adalah <strong>${pulauLabels[maxIndex]}</strong> (${formatRupiah(pulauValues[maxIndex])}). Distribusi upah antar pulau menunjukkan ketimpangan yang signifikan antara wilayah barat dan timur Indonesia.`;
  }
}

function updateAdditionalChartsPendidikan() {
  let filteredData = [...dataPendidikan];
  if (tahunSelect.value !== "Semua") filteredData = filteredData.filter(d => d.tahun == tahunSelect.value);
  if (periodeSelect.value !== "Semua") filteredData = filteredData.filter(d => d.periode === periodeSelect.value);
  if (genderSelect.value !== "Semua") filteredData = filteredData.filter(d => d.jenisKelamin === genderSelect.value);
  if (selectedPendidikan.length > 0) filteredData = filteredData.filter(d => selectedPendidikan.includes(d.pendidikan));
  
  // ============================================
  // DONUT CHART - Menggunakan RATA-RATA (sama seperti logika Umur)
  // ============================================
  // Buat objek penampung untuk setiap jenjang pendidikan
  const jenjangMap = new Map();
  
  filteredData.forEach(d => {
    // Hanya gunakan data Gabungan (Laki-Laki dan Perempuan) untuk donut chart
    if (d.jenisKelamin === "Laki-Laki dan Perempuan") {
      const pendidikan = d.pendidikan;
      if (!jenjangMap.has(pendidikan)) {
        jenjangMap.set(pendidikan, { total: 0, count: 0 });
      }
      const current = jenjangMap.get(pendidikan);
      current.total += d.upah;
      current.count++;
      jenjangMap.set(pendidikan, current);
    }
  });
  
  // Hitung RATA-RATA untuk setiap jenjang (total / count)
  const donutLabels = [];
  const donutValues = [];
  
  // Urutan jenjang pendidikan (biar rapi dari SD ke Sarjana)
  const urutanJenjang = ["SD ke Bawah", "SMP", "SMA Umum", "SMA Kejuruan", "Diploma I/II/III", "DIV/S1/S2/S3"];
  const shortLabels = ["SD", "SMP", "SMA Umum", "SMA Kejuruan", "Diploma", "Sarjana"];
  
  urutanJenjang.forEach((jenjang, index) => {
    const data = jenjangMap.get(jenjang);
    if (data && data.count > 0) {
      donutLabels.push(shortLabels[index]);
      donutValues.push(data.total / data.count); // ✅ RATA-RATA!
    }
  });
  
  // Warna untuk donut chart
  const warnaDonut = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec489a"];
  
  // Hancurkan chart lama jika ada
  if (chartDonutPendidikan) chartDonutPendidikan.destroy();
  
  // Buat chart baru
  if (document.getElementById("chartDonutPendidikan") && donutValues.length > 0) {
    chartDonutPendidikan = new Chart(document.getElementById("chartDonutPendidikan"), {
      type: "doughnut",
      data: {
        labels: donutLabels,
        datasets: [{
          data: donutValues,
          backgroundColor: warnaDonut.slice(0, donutValues.length),
          borderWidth: 0,
          hoverOffset: 10
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: "bottom",
            labels: { font: { size: 10 } }
          },
          tooltip: {
            callbacks: {
              label: function(ctx) {
                const label = ctx.label || '';
                const value = ctx.raw;
                const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
                const persen = ((value / total) * 100).toFixed(1);
                return `${label}: ${formatRupiah(value)} (${persen}%)`;
              }
            }
          }
        }
      }
    });
  } else if (document.getElementById("chartDonutPendidikan") && donutValues.length === 0) {
    // Tampilkan pesan jika tidak ada data
    const canvas = document.getElementById("chartDonutPendidikan");
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "12px 'Segoe UI'";
    ctx.fillStyle = "#94a3b8";
    ctx.textAlign = "center";
    ctx.fillText("📊 Tidak ada data untuk filter yang dipilih", canvas.width/2, canvas.height/2);
  }
  
  // ============================================
  // GAP CHART (Laki - Perempuan) - TETAP SAMA
  // ============================================
  const lakiData = jenjangPendidikan.map(j => {
    const items = filteredData.filter(d => d.pendidikan === j && d.jenisKelamin === "Laki-Laki");
    return items.length ? items.reduce((a,b) => a + b.upah, 0) / items.length : 0;
  });
  const perempuanData = jenjangPendidikan.map(j => {
    const items = filteredData.filter(d => d.pendidikan === j && d.jenisKelamin === "Perempuan");
    return items.length ? items.reduce((a,b) => a + b.upah, 0) / items.length : 0;
  });
  
  if (chartGapPendidikan) chartGapPendidikan.destroy();
  if (document.getElementById("chartGapPendidikan")) {
    chartGapPendidikan = new Chart(document.getElementById("chartGapPendidikan"), {
      type: "bar",
      data: {
        labels: shortPendidikan,
        datasets: [{
          label: "Selisih Upah (Laki - Perempuan)",
          data: lakiData.map((l, i) => l - perempuanData[i]),
          backgroundColor: "#f59e0b",
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: function(ctx) {
                let value = ctx.raw;
                let persen = 0;
                if (perempuanData[ctx.dataIndex] > 0) {
                  persen = (value / perempuanData[ctx.dataIndex]) * 100;
                }
                return `${formatRupiah(value)} (${persen.toFixed(1)}% lebih tinggi dari perempuan)`;
              }
            }
          }
        },
        scales: {
          y: {
            ticks: { callback: v => formatRupiah(v) }
          }
        }
      }
    });
  }
}

function updateAdditionalChartsUmur() {
  let filteredData = [...dataUmur];
  if (tahunSelect.value !== "Semua") filteredData = filteredData.filter(d => d.tahun == tahunSelect.value);
  if (periodeSelect.value !== "Semua") filteredData = filteredData.filter(d => d.periode === periodeSelect.value);
  if (genderSelect.value !== "Semua") filteredData = filteredData.filter(d => d.jenisKelamin === genderSelect.value);
  if (selectedUmur.length > 0) filteredData = filteredData.filter(d => selectedUmur.includes(d.umur));
  
  // Donut chart untuk 3 kelompok usia (hanya data gabungan)
  const kelompokUsia = [
    { name: "Usia Muda (15-24)", range: ["15-19", "20-24"], total: 0, count: 0 },
    { name: "Usia Produktif (25-44)", range: ["25-29", "30-34", "35-39", "40-44"], total: 0, count: 0 },
    { name: "Usia Dewasa Akhir (45+)", range: ["45-49", "50-54", "55-59", "60+"], total: 0, count: 0 }
  ];
  
  filteredData.forEach(d => {
    if (d.jenisKelamin === "Laki-Laki dan Perempuan") {
      for (let k of kelompokUsia) {
        if (k.range.includes(d.umur)) {
          k.total += d.upah;
          k.count++;
          break;
        }
      }
    }
  });
  const donutValues = kelompokUsia.map(k => k.count > 0 ? k.total / k.count : 0);
  
  if (chartDonutUmur) chartDonutUmur.destroy();
  if (document.getElementById("chartDonutUmur")) {
    chartDonutUmur = new Chart(document.getElementById("chartDonutUmur"), {
      type: "doughnut", data: { labels: kelompokUsia.map(k => k.name), datasets: [{ data: donutValues, backgroundColor: ["#10b981", "#3b82f6", "#f59e0b"], borderWidth: 0 }] },
      options: { responsive: true, maintainAspectRatio: true, plugins: { legend: { position: "bottom" }, tooltip: { callbacks: { label: ctx => formatRupiah(ctx.raw) } } } }
    });
  }
  
    // ============================================
  // BAR CHART - Puncak Upah per Kelompok Umur (dengan RATA-RATA)
  // ============================================
  const umurMap = new Map(); // pakai object dengan { total, count }
  
  filteredData.forEach(d => {
    if (d.jenisKelamin === "Laki-Laki dan Perempuan") {
      const umur = d.umur;
      if (!umurMap.has(umur)) {
        umurMap.set(umur, { total: 0, count: 0 });
      }
      const current = umurMap.get(umur);
      current.total += d.upah;
      current.count++;
      umurMap.set(umur, current);
    }
  });
  
  // Hitung RATA-RATA untuk setiap kelompok umur
  const barValues = kelompokUmur.map(u => {
    const data = umurMap.get(u);
    return data && data.count > 0 ? data.total / data.count : 0;
  });
  
  if (chartBarUmur) chartBarUmur.destroy();
  if (document.getElementById("chartBarUmur")) {
    chartBarUmur = new Chart(document.getElementById("chartBarUmur"), {
      type: "bar",
      data: {
        labels: kelompokUmur,
        datasets: [{
          data: barValues,
          backgroundColor: "#8b5cf6",
          borderRadius: 8,
          label: "Rata-rata Upah"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: function(ctx) {
                let value = ctx.raw;
                // Cari tahu peringkatnya (tertinggi ke-berapa)
                const sorted = [...barValues].sort((a,b) => b - a);
                const rank = sorted.findIndex(v => v === value) + 1;
                let rankText = "";
                if (rank === 1) rankText = " 🏆 Peringkat 1 (Tertinggi)";
                else if (rank === 2) rankText = " 🥈 Peringkat 2";
                else if (rank === 3) rankText = " 🥉 Peringkat 3";
                return `${formatRupiah(value)}${rankText}`;
              }
            }
          },
          legend: {
            position: "top",
            labels: { font: { size: 11 } }
          }
        },
        scales: {
          y: {
            title: { display: true, text: "Upah (Rupiah)", font: { size: 10 } },
            ticks: { callback: v => formatRupiah(v) }
          },
          x: {
            title: { display: true, text: "Kelompok Umur", font: { size: 10 } }
          }
        }
      }
    });
  }
}

function updateAdditionalChartsUsaha() {
  let filteredData = [...dataUsaha];
  if (tahunSelect.value !== "Semua") filteredData = filteredData.filter(d => d.tahun == tahunSelect.value);
  if (periodeSelect.value !== "Semua") filteredData = filteredData.filter(d => d.periode === periodeSelect.value);
  if (genderSelect.value !== "Semua") filteredData = filteredData.filter(d => d.jenisKelamin === genderSelect.value);
  if (selectedUsaha.length > 0) filteredData = filteredData.filter(d => selectedUsaha.includes(d.usaha));
  
  // ============================================
  // KUMPULKAN DATA RATA-RATA UNTUK SEMUA USAHA
  // ============================================
  const usahaMap = new Map();
  filteredData.forEach(d => {
    if (d.usaha) {
      const current = usahaMap.get(d.usaha) || { total: 0, count: 0 };
      current.total += d.upah;
      current.count++;
      usahaMap.set(d.usaha, current);
    }
  });
  
  // ============================================
  // DONUT CHART - SEMUA Sektor Usaha (Tanpa Legend)
  // ============================================
  
  // Hitung rata-rata upah untuk SEMUA sektor usaha
  const semuaUsahaRata = [];
  for (let [usaha, val] of usahaMap) {
    if (val.count > 0) {
      semuaUsahaRata.push({ 
        usaha: usaha, 
        upah: val.total / val.count 
      });
    }
  }
  
  // Urutkan dari upah tertinggi ke terendah
  semuaUsahaRata.sort((a, b) => b.upah - a.upah);
  
  // Ambil SEMUA (tidak di-slice)
  const semuaUsaha = semuaUsahaRata;
  
  // Warna otomatis (menggunakan palet warna yang lebih beragam)
  const warnaPalet = [
    "#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", 
    "#ec489a", "#06b6d4", "#84cc16", "#f97316", "#6366f1",
    "#14b8a6", "#d946ef", "#f43f5e", "#0ea5e9", "#eab308",
    "#a855f7", "#22c55e", "#ef4444", "#fb923c", "#6b7280"
  ];
  
  if (chartDonutUsaha) chartDonutUsaha.destroy();
  
  if (document.getElementById("chartDonutUsaha") && semuaUsaha.length > 0) {
    // Persiapkan labels dan data
    const donutLabels = semuaUsaha.map(u => u.usaha);
    const donutValues = semuaUsaha.map(u => u.upah);
    
    // Potong warna sesuai jumlah data
    const warnaDonut = warnaPalet.slice(0, donutLabels.length);
    
    chartDonutUsaha = new Chart(document.getElementById("chartDonutUsaha"), {
      type: "doughnut",
      data: {
        labels: donutLabels,
        datasets: [{
          data: donutValues,
          backgroundColor: warnaDonut,
          borderWidth: 0,
          hoverOffset: 10
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          // ❌ LEGEND DISEMBUNYIKAN!
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function(ctx) {
                const label = ctx.label || '';
                const value = ctx.raw;
                const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
                const persen = ((value / total) * 100).toFixed(1);
                const shortLabel = label.length > 45 ? label.substring(0, 42) + '...' : label;
                return `${shortLabel}: ${formatRupiah(value)} (${persen}%)`;
              }
            },
            bodyFont: { size: 11 }
          }
        },
        cutout: '50%'
      }
    });
    
    // Tambahkan teks total di tengah donut chart
    const totalSemua = donutValues.reduce((a, b) => a + b, 0);
    const rataSemua = totalSemua / donutValues.length;
    
    const canvas = document.getElementById("chartDonutUsaha");
    if (canvas && canvas.parentNode) {
      let centerText = canvas.parentNode.querySelector('.donut-center-text');
      if (!centerText) {
        centerText = document.createElement('div');
        centerText.className = 'donut-center-text';
        centerText.style.cssText = `
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          font-size: 0.65rem;
          font-weight: bold;
          color: #1e293b;
          background: rgba(255,255,255,0.9);
          padding: 4px 8px;
          border-radius: 20px;
          pointer-events: none;
          z-index: 10;
        `;
        canvas.parentNode.style.position = 'relative';
        canvas.parentNode.appendChild(centerText);
      }
      centerText.innerHTML = `${semuaUsaha.length} Sektor<br>${formatRupiah(rataSemua)}`;
    }
    
  } else if (document.getElementById("chartDonutUsaha") && semuaUsaha.length === 0) {
    // Tampilkan pesan jika tidak ada data
    const canvas = document.getElementById("chartDonutUsaha");
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "12px 'Segoe UI'";
    ctx.fillStyle = "#94a3b8";
    ctx.textAlign = "center";
    ctx.fillText("📊 Tidak ada data untuk filter yang dipilih", canvas.width/2, canvas.height/2);
  }
  
  // ============================================
  // GAP CHART (Laki - Perempuan) - TETAP SAMA
  // ============================================
  const lakiUsaha = new Map();
  const perempuanUsaha = new Map();
  filteredData.forEach(d => {
    if (d.jenisKelamin === "Laki-Laki" && d.usaha) {
      const current = lakiUsaha.get(d.usaha) || { total: 0, count: 0 };
      current.total += d.upah;
      current.count++;
      lakiUsaha.set(d.usaha, current);
    }
    if (d.jenisKelamin === "Perempuan" && d.usaha) {
      const current = perempuanUsaha.get(d.usaha) || { total: 0, count: 0 };
      current.total += d.upah;
      current.count++;
      perempuanUsaha.set(d.usaha, current);
    }
  });
  
  const gapData = [];
  const allUsahaSet = new Set([...lakiUsaha.keys(), ...perempuanUsaha.keys()]);
  for (let usaha of allUsahaSet) {
    const lakiRata = lakiUsaha.get(usaha) ? lakiUsaha.get(usaha).total / lakiUsaha.get(usaha).count : 0;
    const perempuanRata = perempuanUsaha.get(usaha) ? perempuanUsaha.get(usaha).total / perempuanUsaha.get(usaha).count : 0;
    if (lakiRata > 0 || perempuanRata > 0) {
      gapData.push({ usaha, gap: lakiRata - perempuanRata });
    }
  }
  gapData.sort((a,b) => b.gap - a.gap);
  const top10Gap = gapData.slice(0, 10);
  
  if (chartGapUsaha) chartGapUsaha.destroy();
  if (document.getElementById("chartGapUsaha")) {
    chartGapUsaha = new Chart(document.getElementById("chartGapUsaha"), {
      type: "bar",
      data: {
        labels: top10Gap.map(u => u.usaha.substring(0, 25) + (u.usaha.length > 25 ? '...' : '')),
        datasets: [{
          data: top10Gap.map(u => u.gap),
          backgroundColor: "#ec489a",
          borderRadius: 8,
          label: "Selisih Upah (Laki - Perempuan)"
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: function(ctx) {
                let value = ctx.raw;
                let persen = 0;
                // Cari tahu persentase terhadap upah perempuan
                const usahaNama = top10Gap[ctx.dataIndex].usaha;
                const perempuanData = perempuanUsaha.get(usahaNama);
                const rataPerempuan = perempuanData ? perempuanData.total / perempuanData.count : 0;
                if (rataPerempuan > 0) {
                  persen = (value / rataPerempuan) * 100;
                }
                return `${formatRupiah(value)} (${persen.toFixed(1)}% lebih tinggi dari perempuan)`;
              }
            }
          }
        },
        scales: {
          x: {
            ticks: { callback: v => formatRupiah(v) }
          }
        }
      }
    });
  }
}

function updateAllAdditionalCharts() {
  if (currentTab === "provinsi") updateAdditionalChartsProvinsi();
  else if (currentTab === "pendidikan") updateAdditionalChartsPendidikan();
  else if (currentTab === "umur") updateAdditionalChartsUmur();
  else if (currentTab === "usaha") updateAdditionalChartsUsaha();
}

// Panggil pertama kali setelah inisialisasi
setTimeout(() => {
  updateAllAdditionalCharts();
}, 500);