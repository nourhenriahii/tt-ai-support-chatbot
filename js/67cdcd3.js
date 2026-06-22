   const buttonRight = document.getElementById('slideRight');
   const buttonLeft = document.getElementById('slideLeft');
   $(buttonRight).click(function () {
      document.getElementById('scrollable-container').scrollLeft += 100;
   });
   $(buttonLeft).click(function () {
      document.getElementById('scrollable-container').scrollLeft -= 100;
   });

   $(document).ready(function () {
      $(".plink").click(function (event) {
         if ($(window).width() < 960) {
            event.preventDefault()
            var url = "tel:" + $(this).attr("ussd");

            $(location).attr('href', url);
         }
      });
   });
