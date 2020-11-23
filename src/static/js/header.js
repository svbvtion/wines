'use strict';

/*-----VARIABLES -----*/

const body = document.querySelector('body');
const headerTop = document.querySelector('.header__top');
const burger = document.querySelector('.burger');
const headerNav = document.querySelector('.header__nav');

const headerBreakpoint = window.matchMedia("(max-width: 767px)")

/*----- LISTENERS -----*/

headerBreakpoint.addEventListener('change', headerTopIdent);
burger.addEventListener('click', menuActive);


/*----- FUNCTIONS -----*/

function headerTopIdent() {
	setTimeout(() => {
		headerNav.style.top = headerTop.offsetHeight + 'px'

	}, 10);

}

function menuActive() {
	burger.classList.toggle('active');
	headerNav.classList.toggle('active');
	body.classList.toggle('lock');
}

headerTopIdent()

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