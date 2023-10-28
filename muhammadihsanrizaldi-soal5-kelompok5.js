const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const angka = [];

function mintaInput() {
  rl.question("Masukkan angka ke-" + (angka.length + 1) + ": ", function(input) {
    const parsedInput = parseFloat(input);
    if (!isNaN(parsedInput)) {
      angka.push(parsedInput);
      if (angka.length < 5) {
        mintaInput();
      } else {
        rl.close();
        prosesAngka();
      }
    } else {
      console.log("Input tidak valid. Masukkan angka.");
      mintaInput();
    }
  });
}

function prosesAngka() {
  const jumlah = angka.reduce((total, num) => total + num, 0);
  const rataRata = jumlah / angka.length;
  const nilaiMaksimum = Math.max(...angka);
  const nilaiMinimum = Math.min(...angka);

  console.log("Angka yang dimasukkan: " + angka.join(", "));
  console.log("Jumlah: " + jumlah);
  console.log("Rata-rata: " + rataRata);
  console.log("Nilai Maksimum: " + nilaiMaksimum);
  console.log("Nilai Minimum: " + nilaiMinimum);
}

mintaInput();