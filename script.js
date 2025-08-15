document.addEventListener("DOMContentLoaded", function () {
  /* mengunduh
file javascript dan menampilkannya setelah merender elemen html */
  const num1 = document.getElementById("firstNumber");
  const num2 = document.getElementById("secondNumber");
  const operasiMtk = document.querySelectorAll("numOps");
  const hitung = document.getElementById("hitung");
  const kotakJawaban = document.getElementsByClassName("hasil");
  let hasil; // variable untuk menyimpan hasil perhitungan

  // ganti switch operator dengan eval()
  // switch (operasiMtk) {
  //   case "tambah":
  //     hasil = num1 + num2;
  //     break;
  //
  //   case "kurang":
  //     hasil = num1 - num2;
  //     break;
  //
  //   case "kali":
  //     hasil = num1 * num2;
  //     break;
  //
  //   case "bagi":
  //     if (hasil === 0) {
  //       console.error("Hasil Tidak Terdefinisi"); // nanti masukkan ke kolom hasil
  //     }
  //     hasil = num1 / num2;
  //     break;
  //
  //   default:
  //     console.error("Mohon masukkan angka dengan benar"); // nanti masukkan ke kolom hasil
  //     break;
  // }
});
