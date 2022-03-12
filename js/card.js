/* GROWTASK
   Автор – GSergeyP
   Версия 1.0.0  */

   // Массив услуг
const card = new Array (
    {title: 'Услуга 1', descr: 'Описание услуги 1'},      // Услуга 1
    {title: 'Услуга 2', descr: 'Описание услуги 2'},      // Услуга 2
    {title: 'Услуга 3', descr: 'Описание услуги 3'}       // Услуга 3
);
// Массив фонов
const cardHeader = new Array (
    './img/card1.png',      // Фон 1
    './img/card2.png',      // Фон 2
    './img/card3.png'      // Фон 3
);

// Стартовый номер Карточки
var cardStart;

////////////////////////////////////////
/*     органы управления       */
// Выбор предыдущей Карточки
cardPrev.onclick = function() {
    cardStart--;
    if (cardStart < 0) cardStart = card.length;
    deleteСard();
    cardView();
}

// Выбор следующей Карточки
cardNext.onclick = function() {
    cardStart++;
    deleteСard();
    cardView();
}
///////////////////////////////////////

// Функция формирования Карточек
function cardView() {
if (typeof cardStart == 'undefined') cardStart = 0;
    for (let i = 0; i < 3; i++) {
        if (cardStart >= card.length) cardStart -= 3; 
        if (i != 1) cardItemSlim = ' cardItemSlim';
        else cardItemSlim = '';
        CARD = document.getElementById('cardBlock');
        CARD.insertAdjacentHTML('beforeEnd', '<div class="cardItem '+cardItemSlim+'"><div class="cardHeader"><img src="'+cardHeader[cardStart]+'" /></div><div class="cardBody"><h3>'+card[cardStart].title+'</h3><p>'+card[cardStart].descr+'</p><button type="button" class="modalOpen" onClick="modalOpen(); return false;">Модальное окно</button></div></div>'); 
        cardStart++;
    }
}
//Очистка карточек 
function deleteСard() {
  let deleteElement = document.getElementById('cardBlock');
  deleteElement.innerHTML = '';
}
// Запуск карточек
document.addEventListener('DOMContentLoaded', cardView);