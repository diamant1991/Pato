
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



	});	

