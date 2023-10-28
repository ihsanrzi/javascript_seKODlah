
const prompt = require("prompt-sync")();
var N = parseInt(prompt("Masukkan angka N:"));


var jumlah = 0;


for (var i = 1; i <= N; i++) {
    jumlah += i; 
}


console.log("Jumlah bilangan bulat dari 1 hingga " + N + " adalah " + jumlah);