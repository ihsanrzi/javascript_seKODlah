const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function hitung() {
  rl.question("Masukkan panjang alas: ", function(pAlas) {
    rl.question("Masukkan tinggi segitiga: ", function(tSegitiga) {
      const alas = parseInt(pAlas);
      const tinggi = parseInt(tSegitiga);

      if (isNaN(alas) || isNaN(tinggi)) {
        console.log("Tidak valid Bosss!!!!!!!.");
      } else {
        const luas = (alas * tinggi) / 2;
        console.log("Luas segitiganya adalah: " + luas);
      }

      rl.close();
    });
  });
}

hitung();
