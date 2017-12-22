(function($){
  $(function(){

    $('.button-collapse').sideNav(options={closeOnClick: true});
    $('.parallax').parallax();

    // Used for Mobile Scroll
    $('.scrollspy').scrollSpy(options={scrollOffset:0});
    //Desktop Scroll
    $("#menu li a[href^='#']").on('click', function(e) {

         // prevent default anchor click behavior
         e.preventDefault();

         // store hash
         var hash = this.hash;

         // animate
         $('html, body').animate({
             scrollTop: $(hash).offset().top-50
           }, 500, function(){

             // when done, add hash to url
             // (default click behaviour)
             // window.location.hash = hash;
           });

      });

      $('#cropButton').on('click',function(){
        $('#mainContent').fadeOut(500);

        setTimeout(function() {
          $('#mainContent').hide();
          $('#cropContent').fadeIn(500);
        }, 500);

      });

      $('#soilButton').on('click',function(){
        $('#mainContent').fadeOut(500);

        setTimeout(function() {
          $('#mainContent').hide();
          $('#soilContent').fadeIn(500);
        }, 500);
      });

      $('#regulationButton').on('click',function(){
        $('#mainContent').fadeOut(500);

        setTimeout(function() {
          $('#mainContent').hide();
          $('#regulationContent').fadeIn(500);
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
        }

        currentContent.fadeOut(500);

        setTimeout(function() {
          currentContent.hide();
          $('#mainContent').fadeIn(500);
        }, 500);
      });

  }); // end of document ready
})(jQuery); // end of jQuery name space
