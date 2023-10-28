 const prompt = require("prompt-sync")();           //Saya menginstall prompt-sync agar code bisa di run di terminal
                                                   //Menggunakan perintah "prompt" yang sebelumnya hanya bisa di run di browser

var nama = prompt("Siapa nama Anda? :");
var umur = prompt("Berapa umur Anda? :");

console.log("Halo, namaku " + nama + "! umurku sekarang " + umur + " tahun.");