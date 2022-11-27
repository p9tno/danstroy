var app = {
    pageScroll: '',
    pageFs: 16,
    lgWidth: 1200,
    mdWidth: 992,
    smWidth: 768,
    resized: false,
    iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    touchDevice: function() { return navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile/i); }
};

function isLgWidth() { return $(window).width() >= app.lgWidth; } // >= 1200
function isMdWidth() { return $(window).width() >= app.mdWidth && $(window).width() < app.lgWidth; } //  >= 992 && < 1200
function isSmWidth() { return $(window).width() >= app.smWidth && $(window).width() < app.mdWidth; } // >= 768 && < 992
function isXsWidth() { return $(window).width() < app.smWidth; } // < 768
function isIOS() { return app.iOS(); } // for iPhone iPad iPod
function isTouch() { return app.touchDevice(); } // for touch device

$(document).ready(function() {

    function preloader() {
        $(()=>{

            setTimeout( () => {
                let p = $('#preloader');
                p.addClass('hide');

                setTimeout( () => {
                    p.remove()
                },1000);

            },1000);
        });
    }
    preloader();
    // setTimeout( ()=> preloader(),15000 )


    function openMobileNav() {
        $('.header__toggle').click(function(event) {
            // console.log('Показ меню');
            $('.header__bottom ').toggleClass('header__bottom_open');
            $('.header__toggle').toggleClass('header__toggle_open');
            $('.nav_open_bg').toggleClass('nav_open_bg_open');
            $( 'body' ).toggleClass( 'nav-open' );
            $('.feedback__content').removeClass('feedback__content_open');
        });
    };
    openMobileNav();

    function toggleFeedback() {
        $('.feedback__toggle').click(function() {
            $('.feedback__content').toggleClass('feedback__content_open');
        });

        $('.feedback__close').click(function(event) {
            event.preventDefault();
            $('.feedback__content').removeClass('feedback__content_open');
        });

        // $(document).mouseup(function (e) {
        //     let div = $(".feedback__content");
        //     // если клик был не по нашему блоку и не по его дочерним элементам
        //     if (!div.is(e.target) && div.has(e.target).length === 0) {
        //         div.removeClass('feedback__content_open');
        //         console.log('click');
        //     }
        // });
    };
    toggleFeedback();


    // $('.modal').on('show.bs.modal', () => {
    //     let openedModal = $('.modal.in:not(.popapCalc)');
    //     if (openedModal.length > 0) {
    //         openedModal.modal('hide');
    //     }
    // });

    function showModal() {
        $('.show_js').on('click', function (e) {
            e.preventDefault();
            let id  = $(this).attr('href');

            $(id).modal('show');
        });
    }
    showModal();

    $('.modal').on('show.bs.modal', () => {
        let openedModal = $('.modal');
        if (openedModal.length > 0) {
            openedModal.modal('hide');
        }
    });



    function openDropMenu(){
        $('.footer__nav .icon_arrow_bottom').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('open');
            let dropBox = $(this).parent().parent().children();
            // dropBox.slideDown();
            dropBox.toggleClass('open');

        });
    }
    openDropMenu();

    function addDataFancybox() {
        let item = $('.itemForDataFancybox_js');
        let num = 0;

        item.each(function(index, el) {
            $(this).find('a').attr('data-fancybox', num);
            num++;
        });
    }
    addDataFancybox();

    // $('[data-fancybox]').fancybox({
    //     loop: true,
    //     // autoFocus: false,
    //     infobar: false,
    //     toolbar: false,
    //     smallBtn: true,
    //
    // });

    // $('[data-fancybox]').fancybox({
    //     beforeLoad: function () {
    //         /* код */
    //     }
    // });


    function collapsed() {
        let toggle = $('[data-collapse]');

        toggle.on('click', function() {
            let id = $(this).data('collapse'),
            body = $('[data-collapse-body="'+id+'"]'),
            wrap = body.closest('[data-collapse-wrapper]');

            console.log(wrap);

            if (!id) {
                // $('[data-collapse-wrapper]').removeClass('open');
                body = $(this).parent().find('[data-collapse-body]');
                $(this).toggleClass('open');
                if ($(this).hasClass('open')) {
                    body.slideDown();
                } else {
                    body.slideUp();
                }
            } else if (id === 'all') {
                body.slideDown();
                toggle.addClass('open');
            } else {
                body.slideToggle();
                $(this).toggleClass('open');
            }
        });
    }
    collapsed();


    function stikyMenu() {
        let HeaderTop = $('.header' ).innerHeight();
        let currentTop = $( window ).scrollTop();

        setNavbarPosition();

        $( window ).scroll( function () {
            setNavbarPosition();
        } );

        function setNavbarPosition() {
            currentTop = $( window ).scrollTop();

            if ( currentTop > HeaderTop ) {
                $( 'header' ).addClass( 'stiky' );

            } else {
                $( 'header' ).removeClass( 'stiky' );
            }

        }
    };

    stikyMenu();


    // scrollTop
    $(document).ready(function(){
        //отменяем стандартную обработку нажатия по ссылке
        $(".toTop").on("click","a", function (event) {
            event.preventDefault();
            //забираем идентификатор блока с атрибута href
            let id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });

    $(document).ready(function(){
        $(window).scroll(function(){
            if($(window).scrollTop()>500){
                $('.toTop').fadeIn(900)
            }else{
                $('.toTop').fadeOut(700)
            }
        });
    });

    // end scrollTop

    $(".twentytwenty-container").twentytwenty({
        default_offset_pct: 0.42, // сколько показывать 'изображение до' в процентах (максимально 1) сразу после загрузки страницы
        orientation: 'horizontal', // ориентация слайдера ('horizontal' или 'vertical')
        before_label: 'До', // подпись 'до'
        after_label: 'После', // подпись 'после'
        no_overlay: true, // не показывать затемнение с надписями 'до' и 'после'
        move_slider_on_hover: false, // двигать "бегунок" слайдера вместе с курсором мыши
        move_with_handle_only: true, // двигать слайдер только за его "бегунок"
        click_to_move: false // разрешить перемещение "бегунка" слайдера по клику на изображении
    });

    $(function(){
        $(".tel").mask("8 (999) 999 9999");
    });

    function mouseMoveParallax() {
        let wrapper = $('.parallax-wrap-js');
        let item = $('.parallax-el-js');
        let speed = 0;
        let offsetX;
        let offsetY;

        if (isXsWidth()) return false;

        wrapper.on('mousemove', function(even) {
            // console.log(even.screenX);

            // console.log(even.clientX - $(window).width() / 2);

            offsetX = -(even.clientX - $(window).width() / 2);

            offsetY = -(even.clientY - $(window).width() / 2);

            item.each(function(index, el) {
                speed = $(el).data('speed');
                $(el).attr('style', 'transform: translate3d('+(offsetX*speed/1000)+'em, '+(offsetY*speed/1000)+'em , 0)');
            });
        });

        wrapper.on('mouseleave', function(even) {
            item.each(function(index, el) {
                speed = $(el).data('speed');
                $(el).attr('style', 'transform: translate3d(0, 0 , 0)');
            });
        });
    }

    mouseMoveParallax();

    // https://github.com/michalsnik/aos
    AOS.init({
        disable: 'mobile',
        // anchorPlacement: 'bottom-bottom',
        duration: 1000, // values from 0 to 3000, with step 50ms
        // offset: 20,
        // once: true,
    });

    AOS.init({
        disable: function () {
            var maxWidth = 768;
            return window.innerWidth < maxWidth;
        }
    });

})
