/* GROWTASK
   Автор – GSergeyP
   Версия 1.0.0  */

// Массив Аккордеон
const accordion = new Array (
    {title: 'Список 1', descr: 'HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык разметки документов для просмотра веб-страниц в браузере.'},      
    {title: 'Список 2', descr: 'Элементы HTML являются строительными блоками HTML страниц. С помощью HTML разные конструкции, изображения и другие объекты, такие как интерактивная веб-форма, могут быть встроены в отображаемую страницу. HTML предоставляет средства для создания заголовков, абзацев, списков, ссылок, цитат и других элементов. Элементы HTML выделяются тегами, записанными с использованием угловых скобок.'},     
    {title: 'Список 3', descr: 'В HTML можно встроить программый код на языке программирования JavaScript, для управления поведением и содержанием веб-страниц.'}       
);

// Функция формирования Аккордеона
function accordionView() {
    for (let i = 0; i < accordion.length; i++) {
        ACCORDION = document.getElementById('accordion');
        ACCORDION.insertAdjacentHTML('beforeEnd', '<div class="accordionBlock"><div class="accordionHeader"><h3>'+accordion[i].title+'</h3><button type="button" class="accordionOpen"></button></div><div class="accordionBody">'+accordion[i].descr+'</div></div>'); 
        
        //////////////////////////////////////////////////////////////////
        /*        Функция элементов управления Аккордеон              */
        // Получение элементов 
        let accordionOpen = document.getElementsByClassName('accordionOpen');
        let accordionBody = document.getElementsByClassName('accordionBody');
        let accordionHeader = document.getElementsByClassName('accordionHeader');

        // Функция активации раскрытия/скрытия Аккордеона при нажатии кнопки 
        accordionOpen[i].addEventListener('click', function() {

            // Проверка наличая классов accordionBodyNew, accordionHeaderNew, accordionOpenNew и при обнаружении его удаление
            if (accordionBody[i].classList.contains('accordionBodyNew'),
                accordionHeader[i].classList.contains('accordionHeaderNew'),
                accordionOpen[i].classList.contains('accordionOpenNew')
                == true) {

                accordionBody[i].classList.remove('accordionBodyNew'); 
                accordionHeader[i].classList.remove('accordionHeaderNew'); 
                accordionOpen[i].classList.remove('accordionOpenNew');
            }
            else {
                // Удаление всех имеющихся классов accordionBodyNew, accordionHeaderNew, accordionOpenNew
                for (let k = 0; k < accordion.length; k++) {
                    accordionBody[k].classList.remove('accordionBodyNew');
                    accordionHeader[k].classList.remove('accordionHeaderNew');
                    accordionOpen[k].classList.remove('accordionOpenNew');
                    }
                // Установка новых классов accordionBodyNew, accordionHeaderNew, accordionOpenNew по нажатию кнопки
                accordionBody[i].classList.add('accordionBodyNew');
                accordionHeader[i].classList.add('accordionHeaderNew');
                accordionOpen[i].classList.add('accordionOpenNew');
            }
        });
        ///////////////////////////////////////////////////////////////////
    }
}
// Запуск Аккордиона
document.addEventListener('DOMContentLoaded', accordionView);

