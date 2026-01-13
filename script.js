// Animasi scroll ke bagian tertentu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Pesan Anda telah terkirim! Terima kasih.");
    this.reset();
});