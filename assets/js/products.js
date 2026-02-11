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
      "Dapat dikonsumsi 1-2 kali sehari sesuai kebutuhan"
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
  }
  // ... produk lainnya
];

// Ekspor untuk main.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { products };
}
