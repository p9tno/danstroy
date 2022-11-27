$(document).ready(function() {
    const singleSlider = new Swiper('.single-swiper-js', {
        slidesPerView: 1,
        speed: 500,
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 5000,
        },

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


// function addSliders() {
//
//     let projects = $('.projects-swiper-js');
//
//     projects.each(function() {
//         let options = $(this).data('options') || {};
//         let $parent = $(this).parent();
//         let swiperDefaults = {
//
//             loop: true,
//             slidesPerView: 1,
//             allowTouchMove: false,
//
//             pagination: {
//                 el: $parent.find('.projects__dotted')[0],
//             },
//
//             navigation: {
//                 nextEl: $parent.find('.icon_arrow_right')[0],
//                 prevEl: $parent.find('.icon_arrow_left')[0],
//             },
//
//             thumbs: {
//                 swiper: {
//                     el: $parent.closest('.projects__item').find('.projects-swiper-sm-js')[0],
//                     loop: true,
//                     spaceBetween: 6,
//                     slidesPerView: 2,
//                     centeredSlides: true,
//
//                     freeMode: true,
//                     watchSlidesProgress: true,
//
//                     breakpoints: {
//                         768: {
//                             spaceBetween: 15,
//                             centeredSlides: false,
//                         },
//                     }
//                 }
//             },
//
//         };
//
//         let swiperOptions = $.extend(swiperDefaults, options),
//         mySwiper = new Swiper(this, swiperOptions);
//
//         // console.log($parent);
//         // console.log($parent.find('.projects__dotted')[0]);
//         // console.log($parent.closest('.projects__item').find('.projects-swiper-sm-js')[0]);
//     });
//
// }
// addSliders();



// BEGIN gallery
// const galleryModal = new Swiper(".gallerySwiperModal-js", {
//     slidesPerView: 1,
//     loop: true,
//
//     navigation: {
//         nextEl: '.icon_arrow_right',
//         prevEl: '.icon_arrow_left',
//     },
//
//     pagination: {
//         el: '.gallerySwiper__dotted',
//         clickable: true,
//     },
//
//
//
// });

// const gallery = new Swiper(".gallerySwiper-js", {
//     slidesPerView: 1,
//     loop: true,
//
//     pagination: {
//         el: '.gallerySwiperModal__dotted',
//         clickable: true,
//     },
//
//     thumbs: {
//         swiper: galleryModal,
//     },
// });
// END gallery


function addDataGallery() {
    let item = $('.data_js');
    let num = 0;

    item.each(function(index, el) {
        $(this).find('.gallery__link').attr('data-modal', 'modal-' + num);
        $(this).find('.modalGallery').attr('id', 'modal-' + num);
        num++;
    });
}
addDataGallery();

function showGallery() {
    $('.gallery_js').on('click', function (e) {
        e.preventDefault();
        let id  = $(this).attr('data-modal');
        // console.log('#' + id);
        // let current_slide = $(this).attr('data-current');
        // console.log(current_slide);

        $('#' + id).modal('show');
        // $( 'body' ).toggleClass( 'nav-open' );
        // sliderModal.slideTo(current_slide, 10);
        // $('.gallerySwiperModal-js').slideTo(3, 10);
    });
}
showGallery();



function addSliders() {

    let projects = $('.gallerySwiper-js');

    projects.each(function() {
        let options = $(this).data('options') || {};
        let $parent = $(this).parent();
        let swiperDefaults = {

            loop: true,
            slidesPerView: 1,
            // allowTouchMove: false,

            pagination: {
                el: $parent.find('.gallerySwiperModal__dotted')[0],
                clickable: true,
            },

            navigation: {
                nextEl: $parent.find('.icon_arrow_right')[0],
                prevEl: $parent.find('.icon_arrow_left')[0],
            },

            thumbs: {
                swiper: {
                    el: $parent.closest('.examples__item').find('.gallerySwiperModal-js')[0],
                    // el: '.gallerySwiperModal-js',
                    loop: true,

                    slidesPerView: 1,
                    allowTouchMove: false,
                    pagination: {
                        el: $parent.find('.gallerySwiper__dotted')[0],
                        clickable: false,
                        // clickable: true,
                    },
                    // centeredSlides: true,
                    // freeMode: true,
                    // watchSlidesProgress: true,


                }
            },

        };

        let swiperOptions = $.extend(swiperDefaults, options),
        mySwiper = new Swiper(this, swiperOptions);

        // console.log($parent);
        // console.log($parent.find('.projects__dotted')[0]);
        // console.log($parent.closest('.projects__item').find('.projects-swiper-sm-js')[0]);
    });

}
addSliders();



// BEGIN project
    const desc_sm = new Swiper(".desc-sm-swiper-js", {
        spaceBetween: 10,
        slidesPerView: 4,
        allowTouchMove: true,
        clickable: true,
        centeredSlides: true,
        loop: true,


        freeMode: true,
        watchSlidesProgress: true,

        breakpoints: {
           768: {
               centeredSlides: false,
               allowTouchMove: false,
               // clickable: true,
           },
       }


    });

    const desc = new Swiper(".desc-swiper-js", {
        slidesPerView: 1,
        spaceBetween: 10,
        allowTouchMove: false,
        loop: true,

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },

        pagination: {
            el: '.project__dotted',
        },

        thumbs: {
            swiper: desc_sm,
        },
    });
    // END project
