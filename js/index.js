 let currentSlide = 0;
        const slides = document.querySelectorAll('.slides img');
        const indicators = document.querySelectorAll('.indicador');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            indicators.forEach((ind, i) => {
                ind.classList.toggle('active', i === index);
            });
        }

        document.querySelector('.next').addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });

        document.querySelector('.prev').addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });

        indicators.forEach((ind, i) => {
            ind.addEventListener('click', () => {
                currentSlide = i;
                showSlide(currentSlide);
            });
        });