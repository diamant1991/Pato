
	$(document).ready(function () {
		var $nav = $("#nav");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 30 && $nav.hasClass("nav")) {
            $nav.removeClass("nav").addClass("nav-fixed");
            $('.logo-container').fadeOut(0,function(){
                $('.logo-text').fadeIn() //показываем текстовый логотип, уже после того, как скрыли логотип
            }) //скрываем логотип
            
        } else if ($(this).scrollTop() <= 30 && $nav.hasClass("nav-fixed")) {
            $nav.removeClass("nav-fixed").addClass("nav");
            $('.logo-text').fadeOut(0,function(){
                $('.logo-container').fadeIn() //показываем логотип, уже после того, как скрыли текстовый логотип
            }) //скрываем текстовый логотип
        }
    }); //scroll
});
	
		$(function () {
		var filterList = {
			init: function () {
				$('.portfolio-block').mixitup({
					targetSelector: '.portfolio',
					filterSelector: '.filter',
					effects: ['fade'],
					easing: 'snap',
					// call the hover effect
					onMixEnd: filterList.hoverEffect()
				});				
			},
			hoverEffect: function () {
				$('.portfolio').hover(
					function () {
						$(this).find('.label-text-bottom').stop().animate({bottom: 0}, 200, 'easeOutQuad');
						$(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');		
						$(this).find('.label-text').css({'background':'url(images/label-png-hover.png) no-repeat right',
							'background-color':'rgba(0, 0, 0, 0.6)'});	

					},
					function () {
						$(this).find('.label-text-bottom').stop().animate({bottom: -40}, 200, 'easeInQuad');
						$(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');	
						$(this).find('.label-text').css({'background':'url(images/label-png.png) no-repeat right',
							'background-color':'rgba(0, 0, 0, 0.6)'});								
					}		
				);				
			
			}

		};
		filterList.init();	

$('.padd-left').click(function(){
	/* Заносим выпадающий список в переменную */
	var dropBlock = $(this).parent().find('.dropdown');

	/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
	if( dropBlock.is(':hidden') ) {
		dropBlock.slideDown();

		/* Выделяем ссылку открывающую select */
		$(this).addClass('active');

		/* Работаем с событием клика по элементам выпадающего списка */
		$('.dropdown').find('li').click(function(){

			/* Заносим в переменную HTML код элемента
			списка по которому кликнули */
			var selectResult = $(this).html();

			/* Находим наш скрытый инпут и передаем в него
			значение из переменной selectResult */
			$(this).parent().parent().find('input').val(selectResult);

			/* Передаем значение переменной selectResult в ссылку которая
			открывает наш выпадающий список и удаляем активность */
			$(this).parent().parent().find('.padd-left').removeClass('active').html(selectResult);

			/* Скрываем выпадающий блок */
			dropBlock.slideUp();
		});

	/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
	} else {
		$(this).removeClass('active');
		dropBlock.slideUp();
	}

	/* Предотвращаем обычное поведение ссылки при клике */
	return false;
});


$('.spoiler-body').hide();
$('.minus').click(function(){
    $(this).toggleClass('opened').toggleClass('closed').next().slideToggle();
    if($(this).hasClass('opened')) {
        $('.minus').css("background","url(../images/minus.png);");
    }
    else {
        $('.minus').css("background","url(../images/plus.png);");
    }
});


jQuery('.post').addClass("hidden").viewportChecker({
	    classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
	    offset: 200 
	   });  


	});	


/*------------------------Слайдер контента------------*/
// просто запрашиваем DOM... будто просим разрешение у босса!
var links = document.querySelectorAll(".itemLinks");
var wrapper = document.querySelector("#wrapper");

// activeLink обеспечивает метку для активного элемента
var activeLink = 0;

// устанавливаем отслеживание событий
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.addEventListener('click', setClickedItem, false);

    // определяем элемент для activeLink
    link.itemID = i;
}

// устанавливаем первый элемент в качестве активного
links[activeLink].classList.add("active");

function setClickedItem(e) {
    removeActiveLinks();

    var clickedLink = e.target;
    activeLink = clickedLink.itemID;

    changePosition(clickedLink);
}

function removeActiveLinks() {
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
}

// Обработчик изменяет позицию слайдера, после того, как мы убедились,
// что в качестве активной обозначена нужная нам ссылка.
function changePosition(link) {
    link.classList.add("active");

    var position = link.getAttribute("data-pos");
    wrapper.style.left = position;
}

