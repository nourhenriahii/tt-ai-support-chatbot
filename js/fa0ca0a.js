  $(function () {
    var owl = $('.owl-carousel-service'),
      owlOptions = {
        loop: false,
        margin: 50,
        smartSpeed: 700,
        nav: false,
        dots: true,
        center:true,
        autoWidth: false,
        stagePadding: 20,
        autoWidth: true,
        items: 1,
        navText: [
          "<i class='fa fa-angle-left text-main'></i>",
          "<i class='fa fa-angle-right text-main'></i>"
        ],
      };
    if ($(window).width() < 768) {
      var owlActive = owl.owlCarousel(owlOptions);
    } else {
      owl.addClass('off');
    }

    $(window).resize(function () {
      if ($(window).width() < 768) {
        if ($('.owl-carousel-service').hasClass('off')) {
          var owlActive = owl.owlCarousel(owlOptions);
          owl.removeClass('off');
        }
      } else {
        if (!$('.owl-carousel-service').hasClass('off')) {
          owl.addClass('off').trigger('destroy.owl.carousel');
          owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
        }
      }
    });
  });
