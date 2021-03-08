$(function(){
    $('.top__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                dots: false
              }
            },
          ]
    });

    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1140,
              settings: {
                slidesToShow: 3,
                dots: true
              }
            },
            {
                breakpoint: 846,
                settings: {
                  slidesToShow: 2,
                  dots: true
                }
              },
              {
                breakpoint: 585,
                settings: {
                  slidesToShow: 1,
                  dots: true
                }
              },
          ]
    });

    $('.menu__btn').on('click', function (){
        $('.menu__list').toggleClass('menu__list--active');
    });
  

});