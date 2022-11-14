$(document).ready(function() {
    const singleSlider = new Swiper('.single-swiper-js', {
        slidesPerView: 1,
        speed: 500,
        spaceBetween: 10,
        // loop: true,
        // autoplay: {
        //   delay: 5000,
        // },

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },

        pagination: {
            el: '.single__dotted',
            clickable: true,
        },

    });

});
