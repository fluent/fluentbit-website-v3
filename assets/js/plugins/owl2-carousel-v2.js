var Owl2Carouselv2 = function () {

	return {

		// Owl Carousel v2
		initOwl2Carouselv2: function () {
			$('.owl2-carousel-v2').owlCarousel({
				items: 6,
				margin: 30,
				loop: true,
				nav: false,
				autoplay:true,
        responsive: {
					300:{
            items: 2
          },
          768:{
            items: 4
          },
          992:{
            items: 4
          },
          1200:{
            items: 6
          },
        },
			})
		}

	};

}();
