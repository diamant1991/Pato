
/*------------------------------------Swiper slider--------------*/
		  var mySwiper = new Swiper('.swiper-container',{
		    pagination: '.pagination',
		    loop:true,
		    grabCursor: true,
		    paginationClickable: true,
		    autoplay:10000,
		    autoplayDisableOnInteraction:false 
		  })
		  $('.slider-arrow-left').on('click', function(e){
		    e.preventDefault()
		    mySwiper.swipePrev()
		  })
		   $('.slider-arrow-bottom').on('click', function(e){
		    e.preventDefault()
		    mySwiper.swipePrev()
		  })
		  $('.slider-arrow-right').on('click', function(e){
		    e.preventDefault()
		    mySwiper.swipeNext()
		  })
		   $('.slider-arrow-top').on('click', function(e){
		    e.preventDefault()
		    mySwiper.swipeNext()
		  })
