'use strict';

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
let isMenuOpen = false;

burger.addEventListener('click', handlerBurgerClick);

function handlerBurgerClick() {
    if (!isMenuOpen) {
        burger.classList.add('active');
        menu.classList.add('active');
        isMenuOpen = true;
    } else {
        burger.classList.remove('active');
        menu.classList.remove('active');
        isMenuOpen = false;
    }
}
