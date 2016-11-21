;
(function ($, window, document, undefined) {
    var $win = $(window);
    var $doc = $(document);
    var $html = $(document.documentElement);
    var $header = $('.header');
    var $footer = $('.footer');
    var $animated = $('.animated');
    var $fullpage = $('#fullpage');
    var $navToggle = $('.nav-toggle');
    var $accordionHead = $('.accordion-head');
    var $testimonials = $('.slider-testimonials');
    var $fullpageSection = $('.section-fullpage');
    var $taglines = $('.slider-about .owl-carousel');
    var $services = $('.section-services');
    var $background = $('#background');
    var $servicesNav = $('.nav-services');
    var $servicesToggle = $('#navMenuToggle');

    var winW = $win.width();
    var winH = $win.height();
    var winO = $win.scrollTop();

    var animatedClass = 'animated-in';
    var accordionClass = 'accordion-section-expanded';
    var scrolledClass = 'scrolled';

    var scrollTimer = 0;

    /**
     * Animate elements in a section based on section's index
     *
     * @param  {Number} indx 		The index of the section
     *
     * @return {Void}
     */
    function animatedElements(indx) {
        $animated.removeClass(animatedClass);
        $fullpageSection.eq(indx - 1).find('.animated').addClass(animatedClass);
        $header.toggleClass(scrolledClass, indx > 1);
        $footer.toggleClass(animatedClass, indx === $fullpageSection.length);
        $background.css('transform', 'translateY(-' + ((indx - 1) * 100) + 'vh)');
    };

    /**
     * Set a form element's filled state
     *
     * @param {Object} $field 		The field to manipulate
     *
     * @return {Void}
     */
    function setFormElementFilledState($field) {
        $field.toggleClass('filled', $.trim($field.val()) !== '');
    };

    // Navigation toggle
    $navToggle.on('click', function (event) {
        event.preventDefault();

        $html.toggleClass('nav-visible');
    });

    // Accordion
    $accordionHead.on('click', function () {
        $(this).parent().toggleClass(accordionClass).siblings().removeClass(accordionClass);
    });

    // Testimonials Slider
    $testimonials.owlCarousel({
        autoplay: true,
        autoplayTimeout: 12000,
        items: 1,
		startPosition: 0,
        loop: true
    });

    // About taglines fader
    $taglines.owlCarousel({
        autoplay: true,
        autoplayTimeout: 4000,
        dots: false,
        items: 1,
        loop: true,
        nav: false,
        smartSpeed: 2000
    });

    // Fullpage Initialization
    if(winW > 1279) {
        $fullpage.fullpage({
            afterRender: function () {
                var allSections = $(this).find('.section-fullpage').length;

                $background.height(allSections * 100 + 'vh');
            },
            afterResponsive: function (isResponsive) {
                if(isResponsive) {
                    $('html, body').removeAttr('style');
                };
            },
            navigation: false,
            onLeave: function (index, nextIndex, direction) {
                if($services.index() === (index - 1)) {
                    if(scrollTimer < 5) {
                        scrollTimer++;

                        return false;
                    } else {
                        scrollTimer = 0;

                        animatedElements(nextIndex);
                    };
                } else {
                    scrollTimer = 0;

                    animatedElements(nextIndex);
                };
            },
            responsiveWidth: 1280,
            scrollOverflow: true,
            scrollOverflowOptions: {
                snapThreshold: 0.1
            },
            sectionSelector: '.section-fullpage',
            slideSelector: '.slide-fullpage'
        });
    };

    $servicesToggle.on('click', function (event) {
        event.preventDefault();

        $servicesNav.toggleClass('open');
    });

    $doc.on('click touchstart', function (event) {
        var $target = $(event.target);

        if(!$target.hasClass('nav-services') && !$target.parents('.nav-services').length) {
            $servicesNav.removeClass('open');
        }
    });

    // Handle form elements's filled states
    $('.field, .select, .textarea').each(function () {
        setFormElementFilledState($(this));
    });

    $('.field, .select, .textarea').on('input change keyup', function (event) {
        setFormElementFilledState($(this));
    });

    $win
        .on('load scroll', function () {
            // Reassign variables' values
            winW = $win.width();
            winH = $win.height();
            winO = $win.scrollTop();

            // Animate various elements on scroll
            $animated.each(function () {
                var $element = $(this);

                if($element.hasClass(animatedClass)) {
                    return;
                };

                if(winO + winH * 0.8 > $element.offset().top) {
                    $element.addClass(animatedClass);
                };
            });

            $header.toggleClass(scrolledClass, winO > $header.outerHeight());
        })
        .on('resize', function () {
            // Reassign variables' values
            winW = $win.width();
            winH = $win.height();
        });

})(jQuery, window, document);
