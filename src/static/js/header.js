'use strict';

/*-----VARIABLES -----*/

const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const headerNav = document.querySelector('.header__nav');
const searchButton = document.querySelector('#search');
const searchModal = document.querySelector('.search');
const modalButtons = document.querySelectorAll('.js-modal-button');
const modal = document.querySelector('.modal');
const navLinks = document.querySelectorAll('.nav__item');
/*----- LISTENERS -----*/


burger.addEventListener('click', menuActive);


/*----- FUNCTIONS -----*/

function menuActive() {
	burger.classList.toggle('active');
	headerNav.classList.toggle('active');
	body.classList.toggle('lock');
}

const accordionHeader = document.querySelectorAll('.footer-section__header');
const accordionBody = document.querySelectorAll('.footer-section__body');


accordionHeader.forEach((item, index) => {
	item.addEventListener('click', () => {
		if(!item.classList.contains('active')){
			item.classList.toggle('active')
			accordionBody[index].style.maxHeight = accordionBody[index].scrollHeight + 'px'	
		} else {
			item.classList.toggle('active')
			accordionBody[index].style.maxHeight = 0	

		}
	});
});

searchModal.addEventListener('click', function(e) {
	if(e.target.dataset.close){
		searchModal.classList.remove('active')
		body.classList.toggle('lock');
		body.style.marginRight = 0;
	}
});

searchButton.addEventListener('click', function(e) {
	searchModal.classList.add('active')
	body.style.marginRight = window.innerWidth - body.offsetWidth + 'px'
	body.classList.add('lock');
	e.preventDefault()
});

modalButtons.forEach(elem => {
	elem.addEventListener('click', function(e) {
		modal.classList.add('active')
		e.preventDefault()
	});
})

modal.addEventListener('click', function(e) {
	if(e.target.dataset.close){
		modal.classList.remove('active')
	}
});


navLinks.forEach(elem => {
	elem.addEventListener('click', function(e) {
		burger.classList.remove('active');
		headerNav.classList.remove('active');
		body.classList.remove('lock');
	});
})