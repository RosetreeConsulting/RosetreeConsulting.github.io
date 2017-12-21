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
        $('#mainContent').hide();
        $('#cropContent').show();
      });

      $('#soilButton').on('click',function(){
        $('#mainContent').hide();
        $('#soilContent').show();
      });

      $('#regulationButton').on('click',function(){
        $('#mainContent').hide();
        $('#regulationContent').show();
      });

      $('.backButton').on('click', function() {
        $('#mainContent').show();
        if ($('#cropContent').css('display')!='none'){
          $('#cropContent').hide();
        } else if ($('#soilContent').css('display')!='none'){
          $('#soilContent').hide();
        } else if ($('#regulationContent').css('display')!='none'){
          $('#regulationContent').hide();
        }
      });

  }); // end of document ready
})(jQuery); // end of jQuery name space
