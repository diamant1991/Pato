
			var id_menu = new Array('sub-menu');
			startList = function allclose() {
			for (i=0; i < id_menu.length; i++){
				document.getElementById(id_menu[i]).style.display = "none";
			}
			}
			function openMenu(id){
				for (i=0; i < id_menu.length; i++){
					if (id != id_menu[i]){
						document.getElementById(id_menu[i]).style.display = "none";
					}
				}
				if (document.getElementById(id).style.display == "block"){
					document.getElementById(id).style.display = "none";
				}else{
					document.getElementById(id).style.display = "block";
				}
			}
			window.onload=startList;

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


$('.dropdown').find('li').click(function(){

			/* Заносим в переменную HTML код элемента
			списка по которому кликнули */
			var selectResult = $(this).html();

			/* Находим наш скрытый инпут и передаем в него
			значение из переменной selectResult */
			$(this).parent().parent().find('input').val(selectResult);

			/* Передаем значение переменной selectResult в ссылку которая
			открывает наш выпадающий список и удаляем активность */
			$(this).parent().parent().find('.padd-left').removeClass('active').html(selectResult);});


$('.spoiler-body').hide();
$('.spoiler-title').click(function(){
    $(this).toggleClass('opened').toggleClass('closed').next().slideToggle();
    if($(this).hasClass('opened')) {
        $(this).html('Скрыть текст');
    }
    else {
        $(this).html('Показать текст');
    }
});


	});	
