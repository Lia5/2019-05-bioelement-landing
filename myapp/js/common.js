$(function() {
	
//slider 
if(jQuery('.lic__slider').length) {
    $('.lic__slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }  

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }

// if( window.innerWidth < 1040 || window.screen.width < 1040){
if(jQuery('.help__slider').length) {
    $('.help__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      dots: false,
      prevArrow: '<div class="arrow-prev"></div>',
      nextArrow: '<div class="arrow-next"></div>',
      centerMode: true,
      centerPadding: '480px',
      responsive: [
        {
          breakpoint: 600,
          settings: {
            centerMode: false,
            dots: true
          }
        }  

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }
// }
if($('.styled').length) {
		$('.styled').styler();
	};

//menu
    var menu = document.querySelector('.menu-toggle');
    menu.addEventListener('click', function(){
        var nav = document.querySelector('.main-menu');
        nav.classList.toggle('active');
        var navGamb = document.querySelector('.menu-toggle');
        navGamb.classList.toggle('active');
    });
//anhor-menu
// $('.main-menu a').on('click', function(e){
//   var dataName = $(this).attr('data-menuAnchor');
//   e.preventDefault();
//   var id = $('[data-anchor="'+ dataName + '"]');
//   $('html,body').stop().animate({ scrollTop: $(id).offset().top }, 1000);
// });
//scrolling

// var $page = $('html, body');
// $('a[href*="#"]').click(function() {
//     $page.animate({
      
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 400);
//     return false;
// });



if( window.innerWidth > 720 || window.screen.width > 720){
  var linkNav = document.querySelectorAll('.main-menu [href*="#"]'), //выбираем все ссылки к якорю на странице
  V = 0.25; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
} else {
var linkNav = document.querySelectorAll('.main-menu [href*="#"]'), //выбираем все ссылки к якорю на странице
V = 0; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
}

for (var i = 0; i < linkNav.length; i++) {
linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
    var w = window.pageYOffset, // производим прокрутка прокрутка
      hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
      console.log(hash);
  t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
      start = null;
e.preventDefault(); //отменяем стандартное поведение


  requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
  function step(time) {
      if (start === null) start = time;
      var progress = time - start,
          r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
      window.scrollTo(0, r);
      if (r != w + t) {
          requestAnimationFrame(step)
      } else {
          location.hash = hash // URL с хэшем
      }
  }
  var nav = document.querySelector('.main-menu');
  nav.classList.toggle('active');
  if( window.innerWidth <= 720 || window.screen.width <= 720){
      var nav2 = document.querySelector('.menu-wrap');
      nav2.classList.toggle('active');
      var nav3 = document.querySelector('.menu-toggle');
      nav3.classList.toggle('active');
  }

}, false);

}

//tabs
// tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	$('ul.tabs li').last().addClass("tab_last");
	
  // MAP
      
  ymaps.ready(init);
  function init(){     
    var myMap = new ymaps.Map("map", {
          center: [55.756764, 37.639543],
          zoom: 15
      }),
      
      // Создаем метку с помощью вспомогательного класса.
      myPlacemark1 = new ymaps.Placemark([55.761021, 37.649795], {
      // Свойства.
      // Содержимое иконки, балуна и хинта.
      balloonContentBody: 'Bioelement',
      balloonContentFooter: 'г. Москва, ул.Покровка д.33, оф.14',
      hintContent: 'Bioelement'
  }, {
      // Опции.
      // Своё изображение иконки метки.
      iconLayout: 'default#imageWithContent',
      iconImageHref: 'img/icons/marker.svg',
      // Размеры метки.
      iconImageSize: [57, 78]
  });
      // Создаем метку с помощью вспомогательного класса.
      myPlacemark2 = new ymaps.Placemark([55.752911, 37.655688], {
        // Свойства.
        // Содержимое иконки, балуна и хинта.
        balloonContentBody: 'Bioelement',
        balloonContentFooter: 'г. Москва, ул. Земляной вал, д. 46',
        hintContent: 'Bioelement'
    }, {
        // Опции.
        // Своё изображение иконки метки.
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/icons/marker2.svg',
        // Размеры метки.
        iconImageSize: [57, 78]
    });


  // Добавляем все метки на карту.
  myMap.geoObjects.add(myPlacemark1);
  myMap.geoObjects.add(myPlacemark2);
  myMap.behaviors.disable('scrollZoom');

  };

});



document.addEventListener('DOMContentLoaded', function(){



});
