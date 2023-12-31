    // Fungsi untuk menghasilkan angka acak dari 1000 ke atas
    function generateRandomNumber() {
      var randomNumber = Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000;
      document.getElementById("randomNumber").innerHTML = randomNumber ;
    }

    // Menggunakan setInterval untuk memperbarui angka setiap 5 detik
    setInterval(generateRandomNumber, 3000);