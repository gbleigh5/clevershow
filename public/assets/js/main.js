(function ($) {
  
  // Initiate Carousel
  var slider = $('.slider').unslider({
    autoplay: true,
    nav: false,
    arrows: {
      //  Unslider default behaviour
      prev: '<a href="#" class="slide-btns prev-slide position-absolute"><i class="fa fa-angle-right"></i></a>',
      next: '<a href="#" class="slide-btns next-slide position-absolute"><i class="fa fa-angle-left"></i></a>',
    }
  });

  // Attach Prev & Next Buttons
  function handleCarouselSlide(el, to){
    $(el).click(function(e){
      e.preventDefault();
      if(to == 'prev') slider.unslider('prev');
      else slider.unslider('next');
    });
  }

  handleCarouselSlide('.prev-slide', 'prev');
  handleCarouselSlide('.next-slide', 'next');

  // Show/Hide User Dropdown
  $('.user-icon').click(function(e){
    e.preventDefault();
    $('.account-drop').toggleClass('d-none');
  });


})(jQuery);