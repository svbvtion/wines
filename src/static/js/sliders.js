import Swiper from './swiper.js'

const newWinesSlider = new Swiper('.new__slider', {
	slidesPerView: 1,
	spaceBetween: 200,
	navigation: {
	    nextEl: '.new__slider-next',
	    prevEl: '.new__slider-prev',
	},
	mousewheel: {
        forceToAxis: true
    },

});

const reviewsSlider = new Swiper('.reviews__slide', {
	slidesPerView: 1,
	  pagination: {
	    el: '.dots',
	    clickable: true
	  },
	  mousewheel: {
        forceToAxis: true
    },

});

const eventsSlider = new Swiper('.events__slider', {
	slidesPerView: 1,
	spaceBetween: 100,
	pagination: {
	    el: '.dots',
	    type: 'bullets',
	    clickable: true
	},
	mousewheel: {
        forceToAxis: true
    },

});