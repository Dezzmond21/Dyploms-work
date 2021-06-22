$(document).ready(function () {
   numberImg = 0;
   $('.slider').slick({
      arrows: true,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      easing: 'ease',
      infinite: true,
      autoplay: false,
      centerMode: true,
      autoplaySpeed: 1500,
      asNavFor: ".sliderbig"
   });
   $('.sliderbig').slick({
      arrows: false,
      fade: true,
      asNavFor: ".slider"
   });

   $('.js-add-slide').click(function (event) {
      numberImg++;
      $('.slider').slick('slickAdd', '<div class="slider__item"> <img src="img/Gallery' + numberImg + '.jpg" alt=""> </div>');
      $('.sliderbig').slick('slickAdd', '<div class="sliderbig__item"> <img data-lazy="img/BigGallery' + numberImg + '.jpg" alt=""> </div>');
      return false;
   });

   $('.js-remove-slide').click(function (event) {
      $('.slider').slick('slickRemove', 0);
      $('.sliderbig').slick('slickRemove', 0);
      return false;
   });




});