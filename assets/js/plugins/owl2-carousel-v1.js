var Owl2Carouselv1 = function () {

	return {

		// Owl Carousel v1
		initOwl2Carouselv1: function () {
			$('.owl2-carousel-v1').owlCarousel({
				items: 4,
				margin: 30,
				autoplay: true,
				loop: true,
				responsive: {
					0:{
						items: 1
					},
					768:{
						items: 2
					},
					992:{
						items: 3
					},
					1200:{
						items: 4
					}
				},
			})
		}

	};

}();
