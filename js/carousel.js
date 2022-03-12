/* GROWTASK
   Автор – GSergeyP
   Версия 1.0.0  */
   
// Массив фонов Карусели
const bg = new Array (
    './img/slider2.png',      // Фон 1
    './img/slider1.png',      // Фон 2
    './img/slider3.png'       // Фон 3
);

// Стартовый номер фона карусели
var bgStart;
if (typeof bgStart == 'undefined') bgStart = 0;



////////////////////////////////////////
/*     органы управления мышью        */
// Выбор предыдущего фона Карусели мышью
carouselPrev.onclick = function() {
    clearTimeout(timer); // остановка перезапуска caruselView
    bgStart--;
    if (bgStart < 0) bgStart = bg.length;
    caruselView();
}

// Выбор следующего фона Карусели мышью
carouselNext.onclick = function() {
    clearTimeout(timer); // остановка перезапуска caruselView
    bgStart++;
    caruselView();
}
///////////////////////////////////////
/*     органы управления touch       */
//Получение области действия touch
const carouselControl = document.getElementById('carouselBlock');

var touchStart = null; //Точка начала касания
var touchPosition = null; //Текущая позиция

//Перехватываем события
carouselControl.addEventListener('touchstart', function (e) { TouchStart(e); }); //Начало касания
carouselControl.addEventListener('touchmove', function (e) { TouchMove(e); });   //Движение пальцем по экрану
carouselControl.addEventListener('touchend', function (e) { TouchEnd(e ); });    //Прекращение касания
carouselControl.addEventListener('touchcancel', function (e) { TouchEnd(e); });  //Отмена касания

function TouchStart(e) {
    // Получение начала касания
    touchStart = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
}

function TouchMove(e) {
    // Получение текущей позиции
    touchPosition = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
}
function TouchEnd(e) {
    CheckAction(); // Определение свайпа по осям 
    //Очищаем позиции
    touchStart = null;
    touchPosition = null;
}
function CheckAction() {
    let d = { // Пределение отрезков свайпа по осям
        x: touchStart.x - touchPosition.x,
        y: touchStart.y - touchPosition.y
    };
    if(Math.abs(d.x) > Math.abs(d.y)) { // Определение движения свайпа по осям
   		if(d.x > 0) { // Свайп в право		
            clearTimeout(timer); // остановка перезапуска caruselView
            bgStart++;
            caruselView();
   		}
   		else { // Свайп в лево	
            clearTimeout(timer); // остановка перезапуска caruselView
            bgStart--;
            if (bgStart < 0) bgStart = bg.length;
            caruselView();
   		}
   	}    
}
///////////////////////////////////////

// Функция формирования сортировки фонов Карусели
function caruselView() {
    let option = 1;
    for (let i = 0; i < 3; i++) {
        if (bgStart >= bg.length) bgStart -= 3; 
        document.getElementById('carouselItem'+option+'').style.backgroundImage = 'url('+bg[bgStart]+')';
        option++;
        bgStart++;
    }
}

// Функция перезапуска Карусели
function timer(){
    caruselView();
    setTimeout(function() {
            bgStart++;
            i = 0;
            timer();
    }, 10000);
};
  
// Запуск Карусели
document.addEventListener('DOMContentLoaded', timer);