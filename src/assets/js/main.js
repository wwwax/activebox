'use strict';

const burger = document.querySelector('.burger');
let isMenuOpen = false;

burger.addEventListener('click', handlerBurgerClick);

function handlerBurgerClick() {
    if (!isMenuOpen) {
        burger.classList.add('active');
        isMenuOpen = true;
    } else {
        burger.classList.remove('active');
        isMenuOpen = false;
    }
}
