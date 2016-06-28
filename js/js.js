
    $(document).ready(function() {
 
      var owl = $("#owl-demo");
     
      owl.owlCarousel({
          items : 4, //10 items above 1000px browser width
          itemsDesktop : [1000,4], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,3], // betweem 900px and 601px
          itemsTablet: [600,2], //2 items between 600 and 0
          itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
          pagination : false
      });
     
      // Custom Navigation Events
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
      // End owlCarousel_________
     
      //----------------------------------------------------------------------
      // external js: isotope.pkgd.js

        $(".grid").isotope({
           itemSelector: '.grid-item-2',
           layoutMode: 'fitRows',
        });

         // Add isotope click funtion

        $('.portfolio-list li').click(function(){
          $('.portfolio-list li').removeClass('active');
          $(this).addClass('active');

          var selector =$(this).attr('data-filter');
          $(".grid").isotope({
            filter: selector,
            animationOption: {
              duration: 750,
              easing: 'linear',
              queue: false,
            }
          });
            return false;
        });

        // external js: isotope.pkgd.js


      //- END ISOTOPE---------------------------------------------------------------------

      //- Light box---------------------------------------------------------------------
       lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true
          })
         //- end Light box---------------------------------------------------------------------
     
    });




    $(document).ready(function(){
        var animationNameIn = 'animated bounceInLeft';
        var animationNameOut = 'animated hinge';
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

       $('.open-nav').click(function(){
        
          $(".reponsive-nav-list").css({"z-index":"100","width":"100%","display":"block","font-size":"40px",
            "text-align":"center"});
          $(".reponsive-nav-list").addClass(animationNameIn).one(animationEnd,function(){
            $(this).removeClass(animationNameIn);
         });
      });
        $('.close-nav').click(function(){
           $(".reponsive-nav-list").addClass(animationNameOut).one(animationEnd,function(){
             $(this).css("display","none");
             $(this).removeClass(animationNameOut);
          });
       });
    });
 // End REnponsive-menu________


 //Flex Slider-2-________
   $(document).ready(function(){
      $(window).load(function() {
        $('.flexslider').flexslider({
          animation: "slide"
        });
      });
   });
      
 // End Flex Slider-2-________



    // Jquery for Class Naviar-sub-________
    $(document).ready(function(){
      $("ul.my-nav li").has("ul").addClass("sub-menu");
      $("li.sub-menu").append("<i class='fa fa-chevron-down' aria-hidden='true'></i>");
      // $("li.sub-menu").children("a").addClass("a-plus");
      // $("a.a-plus").append("<i class='fa fa-chevron-down' aria-hidden='true'></i>");
    });
    // EndJquery for Class Naviar-sub-________
