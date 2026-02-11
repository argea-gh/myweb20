// Data produk — sesuai data yang Anda berikan
const products = [
  {
    id: "sevel-stamina",
    name: "Sevel Stamina - 20 sachet",
    category: "Minuman Sehat",
    price: 115000,
    packageContent: "20 sachet @ 20gr",
    image: "assets/images/products/sevel-stamina.webp",
    description: "Sevel Stamina adalah minuman herbal siap seduh yang membantu memelihara stamina harian secara alami. Diracik dari 15 bahan pilihan Nusantara seperti pasak bumi dan jahe merah, ia hadir sebagai solusi lembut untuk tubuh yang mudah lelah. Rasakan energi stabil tanpa efek samping — dari pagi penuh semangat hingga sore yang tetap bertenaga. Vitalitas alami, dalam secangkir hangat.",
    benefits: [
      "Bangun pagi dengan semangat, bukan keterpaksaan",
      "Menyelesaikan hari tanpa rasa kelelahan di sore hari",
      "Menjaga performa fisik & mental di tengah rutinitas padat",
      "Merawat stamina jangka panjang"
    ],
    howToUse: [
      "Seduh 1 sachet dengan 150ml air hangat",
      "Aduk hingga rata dan larut sempurna",
      "Nikmati hangat di pagi hari atau saat butuh energi",
      "Dapat dikonsumsi 1-2 kali sehari sesuai kebutuhan"
    ],
    composition: [
      "Pasak Bumi: Membantu menjaga vitalitas alami tubuh",
      "Serbuk Kopi: Memberikan stimulasi lembut tanpa bikin gelisah",
      "Jahe Merah & Kayu Angin: Menghangatkan badan, melancarkan sirkulasi darah",
      "Buah Manggis & Mengkudu: Kaya antioksidan untuk pertahanan tubuh",
      "Jintan Hitam & Daun Kelor: Nutrisi lengkap penunjang stamina harian",
      "Daun Sendok & Bunga Krisan: Membantu menjaga keseimbangan metabolisme",
      "Daun Stevia: Pemanis alami tanpa gula berlebih",
      "Gula Kelapa & Aren: Sumber energi alami yang mudah diserap tubuh",
      "Krimer & Garam Kalsium: Tekstur lembut dan kandungan mineral penunjang"
    ]
  },
    {
    id: "sevel-stamina-10",
    name: "Sevel Stamina - 10 sachet ",
    category: "Minuman Sehat",
    price: 65000,
    packageContent: "10 sachet @ 20gr",
    image: "assets/images/products/sevel-stamina-10.webp",
    description: "Sevel Stamina adalah minuman herbal siap seduh yang membantu memelihara stamina harian secara alami. Diracik dari 15 bahan pilihan Nusantara seperti pasak bumi dan jahe merah, ia hadir sebagai solusi lembut untuk tubuh yang mudah lelah. Rasakan energi stabil tanpa efek samping — dari pagi penuh semangat hingga sore yang tetap bertenaga. Vitalitas alami, dalam secangkir hangat.",
    benefits: [
      "Bangun pagi dengan semangat, bukan keterpaksaan",
      "Menyelesaikan hari tanpa rasa kelelahan di sore hari",
      "Menjaga performa fisik & mental di tengah rutinitas padat",
      "Merawat stamina jangka panjang"
    ],
    howToUse: [
      "Seduh 1 sachet dengan 150ml air hangat",
      "Aduk hingga rata dan larut sempurna",
      "Nikmati hangat di pagi hari atau saat butuh energi",
      "Dapat dikonsumsi 1-2 kali sehari sesuai kebutuhan"
    ],
    composition: [
      "Pasak Bumi: Membantu menjaga vitalitas alami tubuh",
      "Serbuk Kopi: Memberikan stimulasi lembut tanpa bikin gelisah",
      "Jahe Merah & Kayu Angin: Menghangatkan badan, melancarkan sirkulasi darah",
      "Buah Manggis & Mengkudu: Kaya antioksidan untuk pertahanan tubuh",
      "Jintan Hitam & Daun Kelor: Nutrisi lengkap penunjang stamina harian",
      "Daun Sendok & Bunga Krisan: Membantu menjaga keseimbangan metabolisme",
      "Daun Stevia: Pemanis alami tanpa gula berlebih",
      "Gula Kelapa & Aren: Sumber energi alami yang mudah diserap tubuh",
      "Krimer & Garam Kalsium: Tekstur lembut dan kandungan mineral penunjang"
    ]
  },
    {
    id: "sevel-premium",
    name: "Sevel Premium",
    category: "Minuman Sehat",
    price: 80000,
    packageContent: "10 sachet @ 21gr",
    image: "assets/images/products/sevel-premium.webp",
    description: "Kopi 7 Elemen Premium atau Sevel Premium adalah harmoni sempurna dari tujuh bagian alam — biji, akar, batang, kulit, daun, bunga, dan buah — yang disatukan dalam secangkir kehangatan. Bayangkan secangkir kopi yang tidak hanya membangunkan tubuh, tapi juga menyembuhkan dari dalam. Diperkaya dengan Qusthul Hindi, rempah langka penjaga napas lega, menjadikannya lebih dari sekadar kopi: ini adalah ritual harian untuk tubuh yang bugar dan jiwa yang tenang.",
    benefits: [
      "Stamina tahan lama tanpa jantung berdebar, energi alami dari herbal pilihan",
      "Napas lega & ringan, Qusthul Hindi membantu meredakan sesak, batuk, dan asma ringan",
      "Pertahanan tubuh kuat, antioksidan tinggi dari manggis & herbal sinergis",
      "Lambung tetap nyaman, tanpa iritasi, aman diminum pagi hari sebelum sarapan",
      "Tidur lebih nyenyak, herbal adaptogen membantu menyeimbangkan ritme tubuh"
    ],
    howToUse: [
      "Seduh 1 sachet dengan 150ml air hangat",
      "Aduk hingga rata dan larut sempurna",
      "Nikmati hangat di pagi hari atau saat butuh energi",
      "Dapat dikonsumsi 1-2 kali sehari sesuai kebutuhan",
      "Aman untuk dikonsumsi rutin"
    ],
    composition: [
      "Kopi Robusta pilihan",
      "Krimer nabati (tanpa lemak hewani)",
      "Gula aren organik",
      "Qusthul Hindi (batang), penjaga saluran napas",
      "Pasak bumi (akar), penambah stamina alami",
      "Kulit manggis, sumber xanthone antioksidan",
      "Daun Stevia: Pemanis alami tanpa gula berlebih",
      "Jahe merah, kayu angin, bunga krisan, daun kelor",
      "Tanpa pengawet, tanpa pemanis buatan"
    ]
  },
    {
    id: "teh-adeni",
    name: "Teh Susu Rempah Adeni",
    category: "Minuman Sehat",
    price: 75000,
    packageContent: "10 sachet @ 18gr",
    image: "assets/images/products/teh-susu_adeni.webp",
    description: "Teh Susu Rempah Adeni adalah minuman hangat perpaduan teh, susu, dan rempah pilihan yang membantu menghangatkan tubuh secara alami. Diracik dari kayu manis, jahe, dan kapulaga, ia menjadi teman setia di pagi dingin atau malam yang melelahkan. Rasakan kehangatan yang menenangkan tenggorokan sekaligus meningkatkan daya tahan tubuh. Kenikmatan tradisional dalam setiap teguknya.",
    benefits: [
    "Menghangatkan tubuh secara alami saat cuaca dingin",
    "Meredakan rasa tidak nyaman di tenggorokan",
    "Membantu meningkatkan daya tahan tubuh harian",
    "Memberikan relaksasi alami setelah aktivitas padat"
    ],
    howToUse: [
    "Seduh 1 sachet dengan 150ml air panas (80-90°C)",
    "Aduk hingga larut sempurna dan susu tercampur rata",
    "Nikmati hangat di pagi hari atau saat tubuh terasa kedinginan",
    "Dapat dinikmati tanpa tambahan gula karena sudah pas manisnya"
    ],
    composition: [
    "Kayu Manis – Menghangatkan tubuh & melancarkan sirkulasi darah",
    "Kapulaga – Meredakan batuk & menyegarkan saluran napas",
    "Jahe – Menghangatkan & meningkatkan daya tahan tubuh",
    "Lada Hitam – Melancarkan pernapasan & anti-inflamasi alami",
    "Cengkeh – Antibakteri & meredakan iritasi tenggorokan"
    ]
  },
    {
    id: "jannatee-cool",
    name: "Teh Jannatee Cool",
    category: "Minuman Sehat",
    price: 85000,
    packageContent: "20 kantong @ 2,5 gram",
    image: "assets/images/products/teh_jannatee_cool.webp",
    description: "Teh Jannatee Cool adalah minuman herbal penyejuk jiwa yang membantu menenangkan pikiran dan meredakan stres harian. Perpaduan daun mint, habbatussauda, dan zaitun menciptakan sensasi segar yang menyeimbangkan tubuh dan pikiran. Cocok dinikmati saat butuh ketenangan atau sebagai teman meditasi dan istirahat. Kesegaran alami untuk jiwa yang lebih damai.",
    benefits: [
    "Menenangkan pikiran dan meredakan stres harian",
    "Memberikan sensasi segar yang menyegarkan jiwa",
    "Membantu menjaga keseimbangan tubuh dan pikiran",
    "Mendukung relaksasi alami setelah aktivitas padat"
    ],
    howToUse: [
    "Seduh 1 sachet dengan 150ml air panas (80-90°C)",
    "Diamkan 3-5 menit agar ekstrak herbal larut sempurna",
    "Nikmati hangat atau dinginkan untuk sensasi lebih segar",
    "Konsumsi 1-2 kali sehari, terutama saat butuh ketenangan"
    ],
    composition: [
    "Daun Mint – Menenangkan & memberikan sensasi segar",
    "Daun Bidara – Menyejukkan jiwa & pikiran",
    "Kayu Manis – Menghangatkan & melancarkan sirkulasi",
    "Kapulaga – Menjaga kesehatan pencernaan",
    "Daun Tin – Kaya nutrisi & antioksidan",
    "Habbatussauda – Meningkatkan daya tahan tubuh",
    "Daun Zaitun – Antioksidan tinggi & kesehatan jantung"
    ]
  }
  // ... produk lainnya
];

// Ekspor untuk main.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { products };
}
