var app = {
    pageScroll: '',
    lgWidth: 1200,
    mdWidth: 992,
    smWidth: 768,
    resized: false,
    iOS: function () {
        return navigator.userAgent.match( /iPhone|iPad|iPod/i );
    },
    touchDevice: function () {
        return navigator.userAgent.match( /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile/i );
    }
};

function isLgWidth() {
    return $( window ).width() >= app.lgWidth;
} // >= 1200
function isMdWidth() {
    return $( window ).width() >= app.mdWidth && $( window ).width() < app.lgWidth;
} //  >= 992 && < 1200
function isSmWidth() {
    return $( window ).width() >= app.smWidth && $( window ).width() < app.mdWidth;
} // >= 768 && < 992
function isXsWidth() {
    return $( window ).width() < app.smWidth;
} // < 768
function isIOS() {
    return app.iOS();
} // for iPhone iPad iPod
function isTouch() {
    return app.touchDevice();
} // for touch device

isLgWidth();




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
        // let openedModal = $('.modal.in:not(.popapCalc)');
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
            // console.log(dropBox);
            // dropBox.slideDown();
            dropBox.toggleClass('open');

        });
    }
    openDropMenu();


    function collapsed() {
        let toggle = $('[data-collapse]');

        toggle.on('click', function() {
            let id = $(this).data('collapse'),
            body = $('[data-collapse-body="'+id+'"]'),
            wrap = body.closest('[data-collapse-wrapper]');

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


    function doTabs() {
        $('.tabs__item').on('click', function() {
            $('.tabs__item').removeClass('active');
            $(this).addClass('active');

            $('.tabContent__item').removeClass('active');
            $($(this).data('tab')).addClass('active');
        });
    };
    doTabs();

    // <div class="tabs-wrapper">
    //     <div class="tabs">
    //         <span class="tab">Вкладка 1</span>
    //         <span class="tab">Вкладка 2</span>
    //         <span class="tab">Вкладка 3</span>
    //     </div>
    //     <div class="tabs-content">
    //         <div class="tab-item">Содержимое 1</div>
    //         <div class="tab-item">Содержимое 2</div>
    //         <div class="tab-item">Содержимое 3</div>
    //     </div>
    // </div>

    // jQuery
    // $('.tabs-wrapper').each(function() {
    //     let ths = $(this);
    //     ths.find('.tab-item').not(':first').hide();
    //     ths.find('.tab').click(function() {
    //         ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
    //         ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
    //     }).eq(0).addClass('active');
    // });


    function doDrop() {
        $('.drop__toggle').on('click', function() {
            // $('.drop__list').toggleClass('open');
            $(this).toggleClass('active');
            $(this).closest('.drop').find('.drop__list').toggleClass('open');
        });
    };
    doDrop();


    function stikyMenu() {

        // let HeaderTop = $( '.header__bottom' ).offset().top;

        // let HeaderTop = $( '.header__bottom' ).offset().top;
        // let HeaderTop = $( 'header' ).offset().top + $( '.section' ).innerHeight();
        let HeaderTop = $('.header' ).innerHeight();
        // console.log(HeaderTop);
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

    // start animate numbers

    function onVisible( selector, callback, repeat = false ) {

    let options = {
        threshold: [ 0.1 ]
    };
    let observer = new IntersectionObserver( onEntry, options );
    let elements = document.querySelectorAll( selector );

    for ( let elm of elements ) {
        observer.observe( elm );
    }

    function onEntry( entry ) {
        entry.forEach( change => {
            let elem = change.target;
            // console.log(change);
            // console.log(elem.innerHTML);
            if ( change.isIntersecting ) {
                if ( !elem.classList.contains( 'show' ) || repeat ) {
                    elem.classList.add( 'show' );
                    callback( elem );
                }
            }
        } );
    }
    }

    onVisible( '.number_js', function ( e ) {
        animateNumber( e, e.innerHTML );
        console.log('start');
    } );

    function animateNumber( elem, final, duration = 1000 ) {
        let start = 0;
        // console.log('init');
        setInterval( function () {
            if ( final >= start ) {
                elem.innerHTML = start++;
            }
        }, duration / final );
    }
    // end animate numbers

})
