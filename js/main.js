$(document).ready(function() {

  $('.hamburger-menu__btn').on('click',function(){
    $('.full-window').slideToggle();
  });
  $('.full__close').on('click', function(){
    $('.full-window').slideToggle();
  });

  ymaps.ready(init);
    var myMap;

    function init(){
        myMap = new ymaps.Map ("yandexMap", {
            center: [59.91506861, 30.33098388],
            zoom: 12
        });

        var coords = [
          [59.97250671, 30.31077346],
          [59.94496018, 30.38184127],
          [59.91463246, 30.49273452],
          [59.88928059, 30.31557998]
        ],
        myBurgers = new ymaps.GeoObjectCollection({}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/icons/map-marker.svg',
          iconImageSize: [46, 57],
          iconImageOffset: [-23, -55]
        });
        for (var i= 0; i < coords.length; i++){
          myBurgers.add(new ymaps.Placemark(coords[i],{
            balloonContentHeader: 'Mister Burger',
            balloonContentBody: 'Здесь смакуют сочные бургеры',
            balloonContentFooter: 'Да, здесь они, имено здесь',
            hintContent: 'Тут бургер'
          }));
        }
        myMap.geoObjects.add(myBurgers);
    }

    $('.team__btn').on('click', function(e){// Меню акордеон в секцыи team
      e.preventDefault();

      var elem = $(this).closest('.team__item');
      if (!elem.hasClass('team__item--active')) {
        $('.team__item').removeClass('team__item--active');
        elem.addClass('team__item--active');
      } else {
        elem.removeClass('team__item--active');
      }
    });

    $('.item__link').on('click', function(e){// Меню акордеон в секцыи manu
      e.preventDefault();

      var elem = $(this).siblings('.item__text');
      if (!elem.hasClass('item__text--active')) {
        $('.item__text').removeClass('item__text--active');
        elem.addClass('item__text--active');
      } else {
        elem.removeClass('item__text--active');
      }
    });

    function Slider(){
      $('.slider__btn').on('click',function(){

        var slider = $('.slider__list');
        var items = slider.find('.slider__item');
        var slideActive = items.filter('.slider--active');
        var reqItemN = slideActive.next();
        var reqItemP = slideActive.prev();

          if ($(this).hasClass('slider__btn--next')){
            if (reqItemN.length){
              var reqIndex = reqItemN.index();
              posElem = -reqIndex * 100;

              $('.slider__list').animate({"left": posElem+"%"},1000,function(){
                slideActive.removeClass('slider--active');
                reqItemN.addClass('slider--active');
              });
            }
          } else {

            if (reqItemP.length){
              var reqIndex = reqItemP.index();
              posElem = -reqIndex * 100;

              $('.slider__list').animate({"left": posElem+"%"},1000,function(){
                slideActive.removeClass('slider--active');
                reqItemP.addClass('slider--active');
              });
            }
          }

      });
    }
    Slider();

$('.section__btn--modal').on('click', function(){
  $('.form__modal').fadeToggle();
});
    var submitForm = function (ev) {
      ev.preventDefault();
    // console.log(ev);

    var form = $(ev.target);

    var request = ajaxForm(form);

    request.done(function(msg) {
        var mes = msg.mes,
            status = msg.status;
        if (status === 'OK') {
          $('.form__modal').fadeToggle(function(){
            $(this).children('.modal__text').text(mes);
          });

            // form.append('<p class="success">' + mes + '</p>');
        } else{
          $('.form__modal').fadeToggle(function(){
            $(this).children('.modal__text').text(mes);
          });
            // form.append('<p class="error">' + mes + '</p>');
        }
    });

    request.fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
}

var ajaxForm = function (form) {

    var url = form.attr('action'),
        data = form.serialize();
    return $.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'JSON'
    });

}
$('#order-form').on('submit', submitForm);


  var screen = 0,
      container = $('.main'),
      pages = $('.section'),
      inscroll = false;

      $('.section:first-child').addClass('active-scroll');
  $('body').on('mousewheel',function(event){

    var activeSection = pages.filter('.active-scroll');

    if (!inscroll) {
      inscroll = true;
      if (event.deltaY > 0){
        if (activeSection.prev().length){
          screen--;
        }
      } else {
        if (activeSection.next().length){
          screen++;
        }
      }
    }

    var position = (-screen * 100) + '%';

    pages.eq(screen).addClass('active-scroll').siblings().removeClass('active-scroll');
    var secionId = pages.eq(screen).attr('id');
    var navLink = $('.nav-section__link');

    navLink.removeClass('nav-section__link--active');
    navLink.filter('[href="#'+secionId+'"]').addClass('nav-section__link--active');

    container.css('top',position);
    setTimeout(function(){
      inscroll = false;
    },1300);
  });
});
