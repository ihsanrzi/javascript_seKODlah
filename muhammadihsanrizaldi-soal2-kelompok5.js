
const prompt = require("prompt-sync")();              //Saya menginstall prompt-sync agar code bisa di run di terminal
                                                      //Menggunakan perintah "prompt" yang sebelumnya hanya bisa di run di browser
var angka = prompt("Masukkan sebuah angka:");


if (!isNaN(angka) && Number.isInteger(Number(angka))) {
  angka = Number(angka); 

  if (angka % 2 === 0) {
    console.log("Angka Genap");
  } else {
    console.log("Angka Ganjil");
  }
} else {
  console.log("Masukkan bilangan bulat dong bosss!!!! jangan pecahan, gue bingung nih.");
}
