var swiper = new Swiper(".action-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    direction: 'horizontal',
});