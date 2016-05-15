$(document).ready(function($){
    var contentSections = $('.project-section'),
        navigationItems = $('.vertical-nav a');
        updateNavigation();
    $('.arrow').addClass('fade');

    $(window).on('scroll', function(){
        var pos = $(window).scrollTop();
        if (pos > 100) {
            $('.arrow').addClass('fade-out');
        } 
        updateNavigation();
    });

    $("#section" + (1) + " .fade-first").addClass("fade-up");
    $("#section" + (1) + " .fade-second").addClass("fade-up");
    $("#section" + (1) + " .fade-last").addClass("fade-in");

    //smooth scroll to the section
    navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //smooth scroll to second section
    $('.arrow').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    function updateNavigation() {
        contentSections.each(function(){
            $this = $(this);
            var activeSection = $('.vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
            if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
                navigationItems.eq(activeSection).addClass('is-selected');
            }else {
                navigationItems.eq(activeSection).removeClass('is-selected');
            }
        });
    }

    function smoothScroll(target) {
        console.log(target);
        $('body,html').animate(
            {'scrollTop':target.offset().top},
            600
        );
    }
});