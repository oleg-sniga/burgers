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

        myBurgers = new ymaps.GeoObjectCollection({}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/icons/map-marker.svg',
          iconImageSize: [46, 57],
          iconImageOffset: [-23, -55]
        });

        myBurger1 = new ymaps.Placemark([59.97250671, 30.31077346], {
          balloonContentHeader: 'Mister Burger',
          balloonContentBody: 'Здесь смакуют сочные бургеры',
          balloonContentFooter: 'Да, здесь они, имено здесь',
          hintContent: 'Тут бургер'
        });
        myBurger2 = new ymaps.Placemark([59.94496018, 30.38184127], {
          balloonContentHeader: 'Mister Burger',
          balloonContentBody: 'Здесь смакуют сочные бургеры',
          balloonContentFooter: 'Да, здесь они, имено здесь',
          hintContent: 'Тут бургер'
        });
        myBurger3 = new ymaps.Placemark([59.91463246, 30.49273452], {
          balloonContentHeader: 'Mister Burger',
          balloonContentBody: 'Здесь смакуют сочные бургеры',
          balloonContentFooter: 'Да, здесь они, имено здесь',
          hintContent: 'Тут бургер'
        });
        myBurger4 = new ymaps.Placemark([59.88928059, 30.31557998], {
          balloonContentHeader: 'Mister Burger',
          balloonContentBody: 'Здесь смакуют сочные бургеры',
          balloonContentFooter: 'Да, здесь они, имено здесь',
          hintContent: 'Тут бургер'
        });

        myBurgers.add(myBurger1).add(myBurger2).add(myBurger3).add(myBurger4);
        myMap.geoObjects.add(myBurgers);

        //myMap.geoObjects.add(myBurger1).add(myBurger2).add(myBurger3).add(myBurger4);
    }

});
