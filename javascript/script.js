document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 100);
    });
    
    // Offer Slider
    const offerSlides = document.querySelectorAll('.offer-slide');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentSlide = 0;
    
    function showSlide(n) {
        offerSlides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + offerSlides.length) % offerSlides.length;
        offerSlides[currentSlide].classList.add('active');
    }
    
    prevBtn.addEventListener('click', function() {
        showSlide(currentSlide - 1);
    });
    
    nextBtn.addEventListener('click', function() {
        showSlide(currentSlide + 1);
    });
    
    // Auto slide change
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
    
   
});