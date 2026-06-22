  $(function () {

    var owl = $('.owl-carousel-offre');

    var owlOptions = {
        loop: false,
        margin: 10,
        smartSpeed: 700,
        nav: false,
        dots: true,
        autoWidth: false,
        stagePadding: 0,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2,
                dots: true,
                loop: false,
                stagePadding: 0
            },
            1000: {
                items: 2,
                dots: true,
                loop: false,
                stagePadding: 0
            }
        },
        navText: [
            "<i class='fa fa-angle-left text-main'></i>",
            "<i class='fa fa-angle-right text-main'></i>"
        ]
    };

    // Toujours activer Owl Carousel
    owl.owlCarousel(owlOptions);

});

  $(window).on("load resize", function (e) {
    $(function loadAccordion() {
      if (!($(window).width() < 1200)) {
        var expandedImage = $('.accordion-element').last().attr('img-expanded');
        $('.accordion-element').last().css('background-image', "url(" + expandedImage + ")");
        $(".accordion-element").css("background-size", "cover")
        $('.accordion-outer').removeClass('expand')
        $(".accordion-outer").addClass("default");
        $(".accordion-outer").last().addClass("last-element-border expand");
        $(".accordion-outer").last().removeClass("inbetween-border default");

        $(".accordion-outer").first().addClass("default");
        $(".accordion-inner").addClass("hidden");
        $(".accordion-outer").on("click", function () {
          var e = $(".horizontal-accordion> div");
          if (e.hasClass("expand")) {
            e.addClass("default");
            $(this).removeClass("default");
            e.removeClass("expand");
            $(this).addClass("expand");
            $(".accordion-inner").addClass("hidden");
            $(this).find(".accordion-inner").removeClass("hidden");
          } else {
            $(this).addClass("expand");
            $(this).find(".accordion-inner").removeClass("hidden");
            e.addClass("default");
          }
        });
      }
      else {

        $(".accordion-outer").addClass("expand");
        $(".accordion-outer").removeClass("default");
        $(".accordion-inner").removeClass("hidden");
        $(".accordion-inner").first().removeClass("first-element-border");
        $(".accordion-outer").first().addClass("inbetween-border");
        $(".accordion-inner").last().removeClass("last-element-border");
        $(".accordion-outer").last().addClass("inbetween-border");
        $(".accordion-element").css("background-size", "cover");
        $(".accordion-element").css("background-position", "center");
        var collapsedImage = $('.accordion-element').last().attr('img-collapsed');
        $('.accordion-element').last().css('background-image', "url(" + collapsedImage + ")");
        $(".accordion-element").css("background-position", "center")

      }
      $(".accordion-inner").last().removeClass("hidden");
      $(".horizontal-accordion").removeClass("toggle-visibility");
    });
  });
  $(".accordion-element").on("click", function () {
    var isExpanded = ($(this).parent().hasClass('expand'));
    if (!isExpanded) {
      var collapsedImage = $('.accordion-outer.expand>div').attr('img-collapsed')
      var expandedImage = $('.accordion-outer.expand>div').attr('img-expanded')
      $('.accordion-outer.expand>div').attr('img-expanded');
      $('.accordion-outer.expand>div').css('background-image', "url(" + collapsedImage + ")");
      $('.accordion-outer.expand>div').css('background-size', "cover");
      $('.accordion-outer.expand>div').css('background-position', "center");
    var replaceImage = $(this).attr('img-expanded');
      $(this).css("background-image", "url(" + replaceImage + ") ");
      $(this).css("background-size", "cover");
      $(this).css("background-repeat", "no-repeat");
      $(this).css("background-position-x", "right");
      $(this).css("ackground-position-y", "bottom");
    }
  });