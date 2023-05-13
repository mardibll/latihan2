import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    gameBabakAngka();
  }, [2000]);

  let data = Math.floor(Math.random() * 3) + 1;
  const gameBabakAngka = () => {
    alert(
      "Selamat datang di game babak angka. Kamu diminta untuk menebak angka 1-3. dan kamu akan bermain dalam lima ronde, player yg berhasil mengumpulkan tebakan terbanyak akan menang. Selamat Bermain"
    );

    let skorPemain1 = 0;
    let skorPemain2 = 0;
    let seri = 0;
    for (let i = 1; i <= 5; i++) {
      let nilaiPlayer1 = parseInt(
        prompt(`Ronde ke-${i}: Player 1, Masukkan angka `)
      );
      let nilaiPlayer2 = parseInt(
        prompt(`Ronde ke-${i}: Player 2, Masukkan angka `)
      );

      if (
        isNaN(nilaiPlayer2) ||
        nilaiPlayer2 < 1 ||
        nilaiPlayer2 > 3 ||
        nilaiPlayer1 < 1 ||
        nilaiPlayer1 > 3 ||
        isNaN(nilaiPlayer1)
      ) {
        alert("Tebakan harus terdiri dari angka 1-3");
        i--;
        continue;
      } else if (nilaiPlayer2 === nilaiPlayer1) {
        alert("Tebakan tidak boleh sama");
        i--;
        continue;
      } else if (nilaiPlayer2 === data || nilaiPlayer1 === data) {
        if (nilaiPlayer2 === data) {
          alert("Player 2 Win");
          skorPemain2++;
        } else {
          alert("Player 1 Win");
          skorPemain1++;
        }
        alert(
          "Nilai yang di cari : " +
            data +
            "\n--------------------\n - Player 1 : " +
            skorPemain1 +
            "\n - Player 2 : " +
            skorPemain2
        );
      } else {
        alert("Tidak ada yang benar. Hasil seri!!! ");
        seri++;
      }
    }
    if (skorPemain1 > skorPemain2) {
      alert("Pemain 1 menang dengan skor :" + skorPemain1 + "-" + skorPemain2);
    } else if (skorPemain2 > skorPemain1) {
      alert("Pemain 2 menang dengan skor :" + skorPemain2 + "-" + skorPemain1);
    } else {
      alert("Permainan seri!!!" + skorPemain1 + "-" + skorPemain2);
    }
  };

  return <div className="App"></div>;
}

export default App;
