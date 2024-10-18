document.getElementById("sumForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    
    if (isNaN(number1) || isNaN(number2)) {
        alert("Silakan masukkan angka yang valid!");
        return;
    }

    const result = number1 + number2;
    document.getElementById("result").textContent = result;
});

// Tambahkan event listener untuk tombol reset
document.getElementById("resetBtn").addEventListener("click", function() {
    document.getElementById("result").textContent = ""; // Mengosongkan hasil ketika reset
});
