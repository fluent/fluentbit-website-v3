var Owl2Carouselv3 = function () {
	return {
		// Owl Carousel v3
		initOwl2Carouselv3: function () {
			$('.owl2-carousel-v3').owlCarousel({
				// margin: 1,
				loop: true,
				items: 1,
				responsiveClass: true,
				nav: true,
				navText: ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
				navContainerClass: 'owl-buttons',
		    responsive: {
		        1200:{
	            items: 1,
		        }
		    }
			})
		}
	};
}();


