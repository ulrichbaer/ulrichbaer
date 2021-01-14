jQuery(function($) {
  $(document).ready(function() {

    $("body").addClass("postload");

    // Mobile Menu

    $(".hamburger").click(function(){
      $("body").toggleClass("menu-open");
    });

    // General styling

    $('blockquote').each(function(){
      var contents = $(this).html();
      $(this).html('<span>'+contents+'</span>');
    });


     /* Menu on Scrolldown
    * ------------------------------------------------------ */
    var clMenuOnScrolldown = function() {
        
        var menuTrigger = $('.header-menu-toggle');

        $WIN.on('scroll', function() {

            if ($WIN.scrollTop() > 150) {
                menuTrigger.addClass('opaque');
            }
            else {
                menuTrigger.removeClass('opaque');
            }

        });
    };


   /* OffCanvas Menu
    * ------------------------------------------------------ */
    var clOffCanvas = function() {

        var menuTrigger     = $('.header-menu-toggle'),
            nav             = $('.header-nav'),
            closeButton     = nav.find('.header-nav__close'),
            siteBody        = $('body'),
            mainContents    = $('section, footer');

        // open-close menu by clicking on the menu icon
        menuTrigger.on('click', function(e){
            e.preventDefault();
            // menuTrigger.toggleClass('is-clicked');
            siteBody.toggleClass('menu-is-open');
        });

        // close menu by clicking the close button
        closeButton.on('click', function(e){
            e.preventDefault();
            menuTrigger.trigger('click');	
        });

        // close menu clicking outside the menu itself
        siteBody.on('click', function(e){
            if( !$(e.target).is('.header-nav, .header-nav__content, .header-menu-toggle, .header-menu-toggle span') ) {
                // menuTrigger.removeClass('is-clicked');
                siteBody.removeClass('menu-is-open');
            }
        });

    };

 /* Smooth Scrolling
    * ------------------------------------------------------ */
    var clSmoothScroll = function() {
        
        $('.smoothscroll').on('click', function (e) {
            var target = this.hash,
            $target    = $(target);
            
                e.preventDefault();
                e.stopPropagation();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, cfg.scrollDuration, 'swing').promise().done(function () {

                // check if menu is open
                if ($('body').hasClass('menu-is-open')) {
                    $('.header-menu-toggle').trigger('click');
                }

                window.location.hash = target;
            });
        });

    };

    // Add fullwidth class to gallery thumbs if less than 6

    $('.imageGallery').each(function(){
      if ($(this).children('div').length <= 6) {
        $(this).children('div').addClass('fullwidth-mobile');
      }
    });

    // Swipe gallery function

    var swipeGallery = function(){
      setTimeout(function(){
          var touchGallery = document.getElementsByClassName("fancybox-wrap")[0];
          var mc = new Hammer(touchGallery);
          mc.on("panleft panright", function(ev) {
            if (ev.type == "panleft") {
              $("a.fancybox-next").trigger("click");
          }
          else if (ev.type == "panright") {
              $("a.fancybox-prev").trigger("click");
          }
          swipeGallery();
      });
      }, 500);
    }

    // Initiate Swipe function on touch devices

    if ('ontouchstart' in window) {
      $("body").on( "click", "a.w-fancybox", function() {
        swipeGallery();
      });
    }

    // Cart mobile

    $("#nav").bind("DOMSubtreeModified",function(){
      setTimeout(function() {
        var cartnum = $("#wsite-nav-cart-num").text();
        if (cartnum && cartnum != "-") {
          $(".wsite-button-chevron").text(cartnum);
        }
      }, 800);
    });

    // Find top level blog comments

    $(".blogCommentLevel1").each(function(){
        if ($(this).parent().prev("div").children("div").hasClass("blogCommentLevel0")) {
            $(this).addClass("first");
        }
    });

    $(".blogCommentLevel2").each(function(){
        if ($(this).parent().prev("div").children("div").hasClass("blogCommentLevel1")) {
            $(this).addClass("first");
        }
    });

    // Storefront category list tablet

    var sidebar = $('.wsite-com-sidebar'),
        categories =  $("#wsite-com-hierarchy");

    sidebar.click(function(){
      sidebar.hasClass('sidebar-expanded') ? null : sidebar.addClass('sidebar-expanded');
    });

    categories.prepend('<a id="close" href="#">CLOSE</a>');
    $('#close').click(function(e){
      e.preventDefault();
      setTimeout(function() {sidebar.removeClass('sidebar-expanded');}, 50);
    });


    // Format Store markup

    $("#wsite-com-product-images-strip a:first-child").addClass("current-thumb");

    $("#wsite-com-product-images-strip a").click(function(){
        $(".current-thumb").removeClass("current-thumb");
        $(this).addClass("current-thumb");
    });

  });
});