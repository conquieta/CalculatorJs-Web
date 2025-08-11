console.log("Hello World!");

// const num1 = document.getElementById("firstNumber");
let num1 = 10;
let num2 = 5;
const operasiMtk = "bagi";
// const num2 = document.getElementById("secondNumber");
// const operasiMtk = document.getElementsByClassName("numOps");
let hasil; // Untuk menyimpan hasil perhitungan

switch (operasiMtk) {
  case "tambah":
    hasil = num1 + num2;
    break;

  case "kurang":
    hasil = num1 - num2;
    break;

  case "kali":
    hasil = num1 * num2;
    break;

  case "bagi":
    if (hasil === 0) {
      console.error("Hasil Tidak Terdefinisi"); // nanti masukkan ke kolom hasil
    }
    hasil = num1 / num2;
    break;

  default:
    console.error("Mohon masukkan angka dengan benar"); // nanti masukkan ke kolom hasil
    break;
}

console.log(`Hasil perhitungan ${hasil}`);
