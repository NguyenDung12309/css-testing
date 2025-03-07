document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        loop: true,
        effect: "fade",
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });
});