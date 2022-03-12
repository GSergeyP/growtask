/* GROWTASK
   Автор – GSergeyP
   Версия 1.0.0  */

// Очистка формы при нажатии кнопки Reset
reset.onclick = function() {
    cleanerError();
}

// Определяем функции для отображения сообщения об ошибках
function printError(elemIdMsg, hintMsg, elemIdStyle) {
    document.getElementById(elemIdMsg).innerHTML = hintMsg;
    if (hintMsg != '') document.getElementById(elemIdStyle).style.borderColor = '#F63765';
    else document.getElementById(elemIdStyle).style.borderColor = '#000000';
}

// Очистка формы от меток ошибок
function cleanerError() {
    printError('nameErr', '', 'name');
    printError('phoneErr', '', 'phone');
    printError('msgErr', '', 'msg');
}

// Определяем функции для проверки формы
function formValidation() {
    // Получение значений элементов формы
    let name = document.form.name.value;
    let phone = document.form.phone.value;
    let msg = document.form.msg.value; 

    // Определяем переменные ошибок со значением по умолчанию
    let nameErr = phoneErr = msgErr = true;
    
    let regex;

    // Проверяем имя
    if(name == '') {
        printError('nameErr', 'Пожалуйста, введите ваше имя', 'name');
    } 
    else {
        regex = /^[а-яА-ЯёЁa-zA-Z]+$/;                
        if(regex.test(name) === false) {
            printError('nameErr', 'Используйте только буквы', 'name');
        } 
        else {
            printError('nameErr', '', 'name');
            nameErr = false;
        }
    }
    // Проверяем номер телефона
    if(phone == '') {
        printError('phoneErr', 'Пожалуйста, введите номер телефона', 'phone');
    } 
    else {
        regex = /^[0-9]\d{9}$/;
        if(regex.test(phone) === false) {
            printError('phoneErr', 'Вводите только 10-значный номер телефона', 'phone');
        } 
        else {
            printError('phoneErr', '', 'phone');
            phoneErr = false;
        }
    }
    // Проверяем напмсано сообщение
    if(msg == '') {
        printError('msgErr', 'Пожалуйста, оставте сообщение', 'msg');
    } 
    else {
        regex = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
        if(regex.test(msg) === false) {
            printError('msgErr', 'Вводите только цифры и буквы', 'msg');
        } 
        else {
            printError('msgErr', '', 'msg');
            msgErr = false;
        }
    }   
   // Запрещаем отправку формы в случае ошибок
   if((nameErr || phoneErr || msgErr) == true) {
       return false;
    } 
    else {
        // Создаем строки из входных данных для предварительного просмотра
        var dataPreview = 'Вы ввели следующие данные: \n' +
                          'Имя: ' + name + '\n' +
                          'Телефон: ' + phone + '\n' +
                          'Сообщение: ' + msg + '\n';
        // Отображаем входные данные в диалоговом окне перед отправкой формы
        alert(dataPreview);
        cleanerError();
        // Очистка формы
       document.getElementById('name').value = '';
       document.getElementById('phone').value = '';
       document.getElementById('msg').value = '';
    }
}  