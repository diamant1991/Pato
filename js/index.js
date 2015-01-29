$(document).ready(function () {
		
$(window).scroll(function() {
if ($(this).scrollTop() > 10){  
    $('.logo-container').hide(700);
    $('.logo-text').show(700);
  }
  else{
    $('.logo-container').show(700);
    $('.logo-text').hide(700);
  }
});

    var $nav2=$(".filter-block")
    $(window).scroll(function () {
        if ($(this).scrollTop() > 350 && $nav2.hasClass("filter-block")) {
            $nav2.removeClass("nav").addClass("filter-block-fixed");
            
            
        } else if ($(this).scrollTop() <= 350 && $nav2.hasClass("filter-block-fixed")) {
            $nav2.removeClass("filter-block-fixed").addClass("filter-block");
            
        }
    }); //scroll

    $('.vopros, .contacts-vopros, .contact-vopros').click(function(){
   		if($('.feedback-form').attr('visible')!='true'){
	   		$('.form_mask').css({'display':'block'})
	        $('.feedback-form').css({'display':'block'})
	        $('.feedback-form').attr({'visible':'true'})
	  	}
	  	else{
   			$('.form_mask').css({'display':'none'})
        	$('.feedback-form').css({'display':'none'})
	        $('.feedback-form').attr({'visible':'false'})
	  	}
	})
$(document).mouseup(function (e) {
    var container = $(".feedback-form");
    var form=$(".form_mask");
    if (container.has(e.target).length === 0){
        container.hide();
        form.hide();
    }
});
   
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






	});	

$(".closed").toggleClass("show").children(".title");

$(".title").click(function(){
if ($(this).parent().hasClass("show")) {
    $("div.spoiler").addClass("show").children(".spoiler-body").hide("medium");
    $("div.spoiler").children(".title").children(".title_h3").css("background","url(images/plus.png)");
    $(this).parent().toggleClass("show").children(".spoiler-body").slideToggle("medium");
    $(this).children(".title_h3").css("background","url(images/minus.png)");
    }

else {
    $(this).parent().toggleClass("show").children(".spoiler-body").slideToggle("medium");
    $(this).children(".title_h3").css("background","url(images/plus.png)");
    }
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





