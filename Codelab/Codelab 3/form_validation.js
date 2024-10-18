document.getElementById("simpleForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah perilaku submit default

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    let valid = true; // Set awal valid ke true

    if (name === "") {
        valid = false;
        alert("Nama harus diisi.");
    }


    if (email === "") {
        valid = false;
        alert("Email harus diisi.");
    }

    if (pesan === "") {
        valid = false;
        alert("Pesan harus diisi.");
    }
    
    if (valid) {
        alert("Form berhasil disubmit!");
    }
});
