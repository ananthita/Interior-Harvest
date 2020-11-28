$(document).ready(function(){
    $('.first_about_us_image').fadeIn(500);
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
          $('.second_about_us_image').fadeIn(500);
          
          
        }
        if ($(this).scrollTop() > 400) {
            $('div.design_awards img').fadeIn(1000);
            $('div.media_features img').fadeIn(1000);
        }
      });
});