var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 36,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 64,
      }

    },


  });

swiper.style.marginLeft = '160px !important';
swiper.style.marginRight = '160px !important'; 