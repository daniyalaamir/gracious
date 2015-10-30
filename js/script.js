$(document).ready(function() {
   
    'use strict';
    
    
    
    /* ============================= 
               SCROLLSPY 
    ================================ */
    $('body').scrollspy({
        target: '.navbar',
        offset: 160
    });
     
    
    
    
    /* ============================= 
               SCROLL TOP 
    ================================ */   
    $('.scrollup').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
        return false;
    });
     
    
    
    
    /* ============================= 
               SCROLL DOWN 
    ================================ */     
    $('.scrolldown a').bind('click', function() {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 160
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.button a').bind('click', function() {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 160
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
     
    
    
    
    /* ============================= 
               NAVBAR SCROLL 
    ================================ */     
    $('.nav a').bind('click', function() {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 80
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
     
    
    
    
    /* ============================= 
               BANNER SLIDER
    ================================ */     
    $('#slides').superslides({
        animation: "fade",
        play: 10000,
        slide_easing: 'easeInOutCubic',
        slide_speed: 800,
        pagination: true,
        hashchange: false,
        scrollable: true
    });    
     
    
    
     
    /* ============================= 
               SKILLBAR 
    ================================ */
    var skillBarTopPosition = $('.skillbar').position().top;
    $(document).scroll(function() {
        var scrolled_value = $(document).scrollTop().valueOf();
        if(scrolled_value > skillBarTopPosition - 250) {
            startAnimation();
        }
    });
    function startAnimation() {
        $('.skillbar').each(function() {
            $(this).find('.skillbar-bar').animate({
                width: $(this).attr('data-percent')
            }, 6000);
        });
    };
    

    
    
    /* ============================= 
               FANCYBOX 
    ================================ */
    $('.youtube-media').on('click', function(event) {
        
        var windowWidth = $(window).width();
        
        if(windowWidth <= 410) {
            return;
        }
        
        $.fancybox({
            href: this.href,
            padding: 4,
            type: 'iframe',
            'href': this.href.replace(new RegExp('watch\\?v=', 'i'), 'v/'),
        });
        
        return false;
    });

    
    
    
    /* ============================= 
               PORTFOLIO 
    ================================ */
    $('#portfolio a').nivoLightbox({
        effect: 'fadeScale'
    });
    
    
    
    
    /* ============================= 
               OWL_CAROUSEL TEAM 
    ================================ */
    $('#owl-carousel-team').owlCarousel({
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        pagination: true,
        paginationNumbers: false,
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window
    });
    
    
    
    
    /* ============================= 
               WOW JS 
    ================================ */
    new WOW().init();
    

}); // end of $(document).ready()




/* ============================= 
               NAVBAR 
================================ */
$(window).scroll(function() {
   
    var top = $(document).scrollTop();
    var height = $(window).height();
    
    if(top > height) {
        $('.main-menu').addClass('tiny').css('opacity', '1');
    } else {
        $('.main-menu').removeClass('tiny');
    }
    
});




/* ============================= 
               MAP 
================================ */
$(document).ready(function() {

    google.maps.event.addDomListener(window, 'load', init);
        
    function init() {

        var mapOptions = {
            
            // How zoomed in the map to start at
            zoom: 11,

            // The latitude and longitude to center the map
            center: new google.maps.LatLng(40.6700, -73.9400), // New York

            // Style the map
            styles: [
                     {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},
                     {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
                     {"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
                     {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#ec46c0"},{"visibility":"on"}]}
                    ]
        };

        // Get the HTML DOM element that contain the map 
        var mapElement = document.getElementById('map');

        // Create the Google Map using the 'mapElement' and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Add a marker where to the location
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            title: 'Snazzy!'
        });
    }

});	