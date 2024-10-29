var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0, // Remove o espaço entre os slides
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
      delay: 7000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });