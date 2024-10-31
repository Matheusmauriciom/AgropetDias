const testimonialSwiper = new Swiper(".js-testimonials-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".js-testimonials-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000, // Muda o slide a cada 5 segundos
      disableOnInteraction: false, // Continua mesmo após interação manual
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  