$(function(){

  $('.products-slider__inner').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  });

  $('.rate-stars').rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true,
  });

  var mixer = mixitup('.products__inner');
});