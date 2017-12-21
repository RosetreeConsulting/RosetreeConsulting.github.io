(function($){
  $(function(){

    $('.button-collapse').sideNav(options={closeOnClick: true});
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy(options={scrollOffset:0});
    //
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


  }); // end of document ready
})(jQuery); // end of jQuery name space
