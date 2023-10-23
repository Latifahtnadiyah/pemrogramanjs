// Menggunakan readline untuk menerima input dari pengguna
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "Masukkan pendapatan harian salesman: Rp. ",
  (inputPendapatan) => {
    // Parse inputPendapatan ke tipe data number
    const pendapatan = parseFloat(inputPendapatan);

    if (isNaN(pendapatan)) {
      console.log("Input tidak valid. Harap masukkan angka.");
    } else {
      var uangJasa;
      var uangKomisi;

      if (pendapatan <= 200000) {
        uangJasa = 10000;
        uangKomisi = pendapatan * 0.1;
      } else if (pendapatan <= 500000) {
        uangJasa = 20000;
        uangKomisi = pendapatan * 0.15;
      } else {
        uangJasa = 30000;
        uangKomisi = pendapatan * 0.2;
      }

      // Menghitung total pendapatan
      var totalPendapatan = uangJasa + uangKomisi;

      console.log("Pendapatan harian salesman: Rp. " + pendapatan);
      console.log("Uang jasa: Rp. " + uangJasa);
      console.log("Uang komisi: Rp. " + uangKomisi);
      console.log("Total pendapatan: Rp. " + totalPendapatan);
    }

    readline.close();
  }
);
