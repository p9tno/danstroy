$(document).ready(function() {

    // function preloader() {
    //     $(()=>{

    //         setTimeout( () => {
    //             let p = $('#preloader');
    //             p.addClass('hide');

    //             setTimeout( () => {
    //                 p.remove()
    //             },1000);

    //         },1000);
    //     });
    // }
    // preloader();
    // setTimeout( ()=> preloader(),15000 )


    function openMobileNav() {
        $('.header__toggle').click(function(event) {
            // console.log('Показ меню');
            $('.navbar').toggleClass('navbar_open');
            $('.header__toggle').toggleClass('header__toggle_open');
            $('.nav_open_bg').toggleClass('nav_open_bg_open');
            $( 'body' ).toggleClass( 'nav-open' );
        });
    };
    openMobileNav();

    $('.modal').on('show.bs.modal', () => {
        let openedModal = $('.modal.in:not(.popapCalc)');
        if (openedModal.length > 0) {
            openedModal.modal('hide');
        }
    });

    function activeNav() {
        $('.menu-item').on('click', function() {
            $('.menu-item').removeClass('current-menu-item');
            $(this).addClass('current-menu-item');
        })
    };
    activeNav();


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

 
    // Stiky menu // Липкое меню. При прокрутке к элементу #header добавляется класс .stiky который и стилизуем
    function stikyMenu() {
        let HeaderTop = $( 'header' ).offset().top;
        // let HeaderTop = $( 'header' ).offset().top + $( '.home' ).innerHeight();
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

            // $( '.navbar__link' ).each( function () {
            //     let section = $( this ).attr( 'href' );
            //
            //     if ( $( 'section' ).is( section ) ) {
            //         let offset = $( section ).offset().top;
            //
            //         if ( offset <= currentTop && offset + $( section ).innerHeight() > currentTop ) {
            //             $( this ).addClass( 'active' );
            //         } else {
            //             $( this ).removeClass( 'active' );
            //         }
            //     }
            // } );
        }
    stikyMenu();

    }

    // start animate numbers

    function onVisible( selector, callback, repeat = false ) {

    let options = {
        threshold: [ 0.5 ]
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

    onVisible( '.programsInfo__number', function ( e ) {
        animateNumber( e, e.innerHTML );
    } );

    function animateNumber( elem, final, duration = 1000 ) {
        let start = 0;
        // console.log('init');
        setInterval( function () {
            if ( final > start ) {
                elem.innerHTML = start++;
            }
        }, duration / final );
    }
    // end animate numbers

})



