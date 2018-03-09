(function($){
  $(function(){

    $('.button-collapse').sideNav(options={closeOnClick: true});
    $('.parallax').parallax();
    $('.modal').modal();
    // Used for Mobile Scroll
    $('.scrollspy').scrollSpy(options={scrollOffset:0});
    //Desktop Scroll
    $("#menu li a[href^='#']").on('click', function(e) {

         // prevent default anchor click behavior
         e.preventDefault();

         // store hash
         var hash = this.hash;

         // animate
         if (hash=='#contact') {
           $('html, body').animate({
             scrollTop: $(hash).offset().top-200
           }, 500, function(){

             // when done, add hash to url
             // (default click behaviour)
             // window.location.hash = hash;
           });
         } else {
           $('html, body').animate({
             scrollTop: $(hash).offset().top-10
           }, 500, function(){

             // when done, add hash to url
             // (default click behaviour)
             // window.location.hash = hash;
           });
         }

      });

      $('#cropButton').on('click',function(){
        $('#mainContent').fadeOut(500);

        setTimeout(function() {
          // if ($(window).width() < 960) {
            window.location.hash = '';
            window.location.hash = '#services';
          // }
          $('#mainContent').hide();
          $('#cropContent').fadeIn(500);
        }, 500);

      });

      $('#soilButton').on('click',function(){
        $('#mainContent').fadeOut(500);

        setTimeout(function() {
          // if ($(window).width() < 960) {
            window.location.hash = '';
            window.location.hash = '#services';
          // }
          $('#mainContent').hide();
          $('#soilContent').fadeIn(500);
        }, 500);
      });

      $('#regulationButton').on('click',function(){
        $('#mainContent').fadeOut(500);

        setTimeout(function() {
          // if ($(window).width() < 960) {
            window.location.hash = '';
            window.location.hash = '#services';
          // }
          $('#mainContent').hide();
          $('#regulationContent').fadeIn(500);
        }, 500);
      });

      $('#precisionButton').on('click',function(){
        $('#mainContent').fadeOut(500);

        setTimeout(function() {
          // if ($(window).width() < 960) {
            window.location.hash = '';
            window.location.hash = '#services';
          // }
          $('#mainContent').hide();
          $('#precisionContent').fadeIn(500);
        }, 500);
      });

      $('.backButton').on('click', function() {
        var currentContent;
        if ($('#cropContent').css('display')!='none'){
          currentContent = $('#cropContent');
        } else if ($('#soilContent').css('display')!='none'){
          currentContent = $('#soilContent');
        } else if ($('#regulationContent').css('display')!='none'){
          currentContent = $('#regulationContent');
        } else if ($('#precisionContent').css('display')!='none'){
          currentContent = $('#precisionContent');
        }

        currentContent.fadeOut(500);

        setTimeout(function() {
          // if ($(window).width() < 960) {
            window.location.hash = '';
            window.location.hash = '#services';
          // }
          currentContent.hide();
          $('#mainContent').fadeIn(500);
        }, 500);
      });

  }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function() {
    // $('#submit').attr("disabled", true);
    // $('#submit-div > i').addClass("disabled");
    // $('#submit-div > i').removeClass("disabled");


    $('form').find('input, textarea').keyup(function() {

      var empty = false;

      $('form').find('input, textarea').each(function() {
        if (($(this).attr('id')=='input_text') || ($(this).attr('id')=='email') || ($(this).attr('id')=='textarea1')) {
          if ($(this).val() == '') {
            empty = true;
          }
        }
      });

      if (empty) {
        $('#submit').attr('disabled', 'disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        $('#submit-div > i').addClass("disabled");
      } else {
        $('#submit').removeAttr('disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        $('#submit-div > i').removeClass("disabled");
      }
    });

});
