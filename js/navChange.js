/* GROWTASK
   Автор – GSergeyP
   Версия 1.0.0  */

// Массив всех иконок
const icon = new Array (
    './img/hamburger.png',      // Базовое состояние
    './img/hamburgerPush.png',  // При касании
    './img/cross.png'           // При нажатии
);

const navChange = document.querySelector('#navChange');
let display = 'none';

// Изменение внешнего вида кнопки hamburger при касании
hamburger.ontouchstart = function() {
    if (display == 'none') hamburger.src = icon[1];
};

// Изменение внешнего вида кнопки hamburger после прекращения касания 
hamburger.ontouchend = function() {
    if (display == 'none') hamburger.src = icon[0];
};

// Изменение внешнего вида кнопки hamburger при отмене касания касания 
hamburger.ontouchcancel = function() {
    if (display == 'none') hamburger.src = icon[0];
};

// Скрыть/Отобразить содержимое Навигации
hamburger.onclick = function() {
    if (display == 'none') {
        navChange.style.display = 'block';
        hamburger.src = icon[2];
        display ='block'
    }
    else {
        navChange.style.display = 'none';
        hamburger.src = icon[0];
        display ='none'
    }
};