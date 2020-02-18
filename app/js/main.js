$(function(){

  $('.icon-th-list').on('click', function(){
    $('.products__item-list').addClass('list');
    $('.icon-th-large').removeClass('active')
    $('.icon-th-list').addClass('active')
  });

  $('.icon-th-large').on('click', function(){
    $('.products__item-list').removeClass('list');
    $('.icon-th-large').addClass('active')
    $('.icon-th-list').removeClass('active')
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$"
});

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