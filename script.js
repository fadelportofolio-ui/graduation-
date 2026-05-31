document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Sistem Navigasi Tab Laman
    const tabButtons = document.querySelectorAll(".tab-btn");
    const pageSections = document.querySelectorAll(".page-section");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetPage = button.getAttribute("data-target");

            tabButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            pageSections.forEach(section => section.classList.remove("active"));
            document.getElementById(targetPage).classList.add("active");
        });
    });


    // 2. Mesin Pembuat Animasi Bergerak (Kelopak, Love, & Bintang)
    const animContainer = document.getElementById("animation-env");

    // Fungsi membuat Kelopak Bunga (Jatuh ke bawah)
    function createPetal() {
        const petal = document.createElement("div");
        petal.classList.add("petal");

        const size = Math.random() * 10 + 8; 
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        petal.style.left = `${Math.random() * 100}vw`;

        const duration = Math.random() * 3 + 5; 
        petal.style.animationDuration = `${duration}s`;

        animContainer.appendChild(petal);
        setTimeout(() => { petal.remove(); }, duration * 1000);
    }

    // Fungsi membuat Love (Melayang ke atas melintasi depan card)
    function createFloatingLove() {
        const love = document.createElement("div");
        love.classList.add("floating-love");
        
        const icons = ["❤️", "💖", "💝", "💕"];
        love.textContent = icons[Math.floor(Math.random() * icons.length)];
        
        love.style.left = `${Math.random() * 100}vw`;
        
        const size = Math.random() * 14 + 14; 
        love.style.fontSize = `${size}px`;

        const duration = Math.random() * 3 + 5; 
        love.style.animationDuration = `${duration}s`;

        animContainer.appendChild(love);
        setTimeout(() => { love.remove(); }, duration * 1000);
    }

    // Fungsi membuat Bintang Berkilau (Muncul-hilang di posisi acak)
    function createSparkle() {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");

        const size = Math.random() * 6 + 4; 
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        
        sparkle.style.left = `${Math.random() * 100}vw`;
        sparkle.style.top = `${Math.random() * 100}vh`;

        const duration = Math.random() * 2 + 2; 
        sparkle.style.animationDuration = `${duration}s`;

        animContainer.appendChild(sparkle);
        setTimeout(() => { sparkle.remove(); }, duration * 1000);
    }

    // Menjalankan interval perulangan efek gerak secara berkala
    setInterval(createPetal, 400);        
    setInterval(createFloatingLove, 500); 
    setInterval(createSparkle, 500);      


    // 3. Kontrol Audio & Text Rahasia
    const musicButton = document.getElementById("btn-play-music");
    const secretText = document.getElementById("secret-text");
    const bgMusic = document.getElementById("bg-music");

    musicButton.addEventListener("click", () => {
        if (bgMusic.paused) {
            bgMusic.play()
                .then(() => {
                    musicButton.textContent = "Musik Aktif ❤️";
                    musicButton.style.background = "linear-gradient(45deg, #2ec4b6, #0cbaba)";
                })
                .catch(err => console.log("Izin audio browser dibutuhkan."));
            
            if(secretText) {
                secretText.classList.remove("hidden");
            }
        } else {
            bgMusic.pause();
            musicButton.textContent = "klik Putar Musik 🎵";
            musicButton.style.background = "linear-gradient(45deg, #ff477e, #ff758f)";
            if(secretText) {
                secretText.classList.add("hidden");
            }
        }
    });
});