$('.more').click(function(e) {
    e.preventDefault();
    $('.more-product').toggleClass('active');
    $('.more').toggleClass('active');
});
 
 const swiperProjects = new Swiper('.testimoniSwiper', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
  });