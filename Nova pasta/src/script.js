 // Inicialização dos Ícones Lucide
        lucide.createIcons();

        // 1. Carrossel de Fotos Interativo
        const track = document.getElementById('carouselTrack');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let currentSlide = 0;
        const totalSlides = 3;

        function updateCarousel() {
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        });

        // Autoplay do carrossel a cada 5 segundos
        setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }, 5000);

        // 2. Slider Antes & Depois
        const baSlider = document.getElementById('baSlider');
        const beforeImg = document.getElementById('beforeImg');
        
        if (baSlider && beforeImg) {
            baSlider.addEventListener('input', (e) => {
                beforeImg.style.width = `${e.target.value}%`;
            });
        }

        // 3. Envio do Formulário para o WhatsApp
        const leadForm = document.getElementById('leadForm');
        
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const whatsapp = document.getElementById('whatsapp').value;
            const interesse = document.getElementById('interesse').value;
            
            const phone = "5500000000000"; // Substitua pelo número real da clínica/salão
            const message = `Olá! Meu nome é *${nome}* (${whatsapp}) e gostaria de agendar um horário para *${interesse}*.`;
            
            window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
        });