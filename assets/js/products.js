// Data produk — sesuai data yang Anda berikan
const products = [
  {
    id: "sevel-stamina",
    name: "Sevel Stamina",
    category: "Minuman Sehat",
    price: 115000,
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
  }
  // ... produk lainnya
];

// Ekspor untuk main.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { products };
}
