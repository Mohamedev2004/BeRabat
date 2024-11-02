(function($) {
    "use strict";

    var windowOn = $(window);

    windowOn.on('load', function() {
        wowAnimation();
    });

    // wow
    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }

    // preloader 
    windowOn.on('load', function() {
        $("#loading").fadeOut(500);
    })

    // back-to-top
    var btn = $('#back-to-top');
    windowOn.scroll(function() {
        if (windowOn.scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });


    // sticky js 
    var windowOn = $(window);
    windowOn.on('scroll', function() {
        var scroll = windowOn.scrollTop();
        if (scroll < 100) {
            $("#er-header-sticky").removeClass("header-sticky");
        } else {
            $("#er-header-sticky").addClass("header-sticky");
        }
    });



    // mobile menu 
    var erMenuWrap = $('.er-mobile-menu-active > ul').clone();
    var erSideMenu = $('.er-offcanvas-menu nav');
    erSideMenu.append(erMenuWrap);
    if ($(erSideMenu).find('.sub-menu, .er-mega-menu').length != 0) {
        $(erSideMenu).find('.sub-menu, .er-mega-menu').parent().append('<button class="er-menu-close"><i class="fas fa-chevron-right"></i></button>');
    }

    var sideMenuList = $('.er-offcanvas-menu nav > ul > li button.er-menu-close, .er-offcanvas-menu nav > ul li.has-dropdown > a');
    $(sideMenuList).on('click', function(e) {
        console.log(e);
        e.preventDefault();
        if (!($(this).parent().hasClass('active'))) {
            $(this).parent().addClass('active');
            $(this).siblings('.sub-menu, .er-mega-menu').slideDown();
        } else {
            $(this).siblings('.sub-menu, .er-mega-menu').slideUp();
            $(this).parent().removeClass('active');
        }
    });


    // offcanvas
    $(".er-offcanvas-toogle").on('click', function() {
        $(".er-offcanvas").addClass("er-offcanvas-open");
    });
    $(".er-offcanvas-close-toggle").on('click', function() {
        $(".er-offcanvas").removeClass("er-offcanvas-open");
    });
    $(".er-offcanvas-overlay").on('click', function() {
        $(".er-offcanvas").removeClass("er-offcanvas-open");
    });

    //  // Search bar
    $(".er-search-toggle").on('click', function() {
        $(".er-header-search-bar").addClass("er-search-open");

    });

    $(".er-search-close").on('click', function() {
        $(".er-header-search-bar").removeClass("er-search-open");

    });
    // // 
    // filter
    if ($('.grid').length != 0) {
        var $grid = $('.grid').imagesLoaded(function() {
            $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: 1
                }
            })

            // filter items on button click
            $('.er-portfolio-filter').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            //for menu active class
            $('.er-portfolio-filter button').on('click', function(event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });
        });
    }



    // data bg img
    $("[data-background]").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })


    // data bg color
    $("[data-bg-color]").each(function() {
        $(this).css("background-color", $(this).attr("data-bg-color"))
    })

    // data  color
    $("[data-color]").each(function() {
        $(this).css("color", $(this).attr("data-color"))
    })

    $('.popup-image').magnificPopup({
        type: 'image'
        // other options
    });

    $('.popup-video').magnificPopup({
        type: 'iframe'
        // other options
    });



    // testimonial slider
    var swiper = new Swiper(".er-testimonial-active", {
        slidesPerView: 2,
        spaceBetween: 10,
        autoplay: {
            delay: 5000,
        },
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".er-swiper-test-button-next",
            prevEl: ".er-swiper-test-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 2,
            },
        },
    });

    // blog slider
    var swiper = new Swiper(".er-blog-active", {
        slidesPerView: 3,
        spaceBetween: 10,
        autoplay: {
            delay: 5000,
        },
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".er-swiper-test-button-next",
            prevEl: ".er-swiper-test-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });


    // team slider
    var swiper = new Swiper(".er-team-active", {
        slidesPerView: 3,
        spaceBetween: 30,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".er-swiper-button-next",
            prevEl: ".er-swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });
    // single testimonial slider
    var swiper = new Swiper(".er-single-test-active", {
        slidesPerView: 1,
        spaceBetween: 30,

        centeredSlides: true,
        loop: true,
        autoplayDisableOnInteraction: true,
        autoplay: {
            delay: 1000,
            pauseOnMouseEnter: true,

        },
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".er-swiper-button-next",
            prevEl: ".er-swiper-button-prev",
        },
    });


    // project
    var swiper = new Swiper(".er-project-active", {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplayDisableOnInteraction: true,
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true,

        },
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".er-swiper-button-next",
            prevEl: ".er-swiper-button-prev",
        },


    });
    // fact counter
    document.addEventListener("DOMContentLoaded", function() {
        const counters = document.querySelectorAll('.er-facts-number span');
        const targetValues = [25, 150, 140, 500]; // Updated target value for the second column
        const duration = 4000; // Duration of the counting animation in milliseconds
        const delayBeforeStart = 500; // Delay before the counting starts, in milliseconds

        // Function to start counting
        const startCounting = (counter, index) => {
            const target = targetValues[index];
            let start = 0;
            const increment = target / (duration / 100); // Adjust increment for timing

            const updateCount = () => {
                start += increment;

                if (start < target) {
                    counter.innerText = start.toFixed(index === 1 ? 1 : 0);
                    setTimeout(updateCount, 100); // Update every 100 milliseconds
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };

            setTimeout(updateCount, delayBeforeStart); // Delay before starting
        };

        // Intersection Observer to detect when the counters are in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const index = Array.from(counters).indexOf(counter);
                    startCounting(counter, index);
                    observer.unobserve(counter); // Stop observing once the counting starts
                }
            });
        }, {
            threshold: 0.1
        }); // Trigger when 10% of the element is visible

        counters.forEach(counter => {
            observer.observe(counter);
        });
    });




})(jQuery);