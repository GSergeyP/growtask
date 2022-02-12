//Имитация связи с сервером////////////////////////////////////////////////////////////////////////////////////
var img, prev, next;
if(typeof prev == "undefined") img = 1;
  prev = 3;
  next = 2;
  CARD0 = document.getElementById('cardOther');
  CARD0.insertAdjacentHTML('afterBegin','<p class="d-flex justify-content-end" style=" transform: translateX(-22%);"><a href="javascript:void(0)" onclick="mixingСardOther('+prev+',this)"><img class="img-fluid" onMouseOut="document.getElementById(\'cardOther_p\').src=\'./img/button_prev.png\'" onMouseEnter="document.getElementById(\'cardOther_p\').src=\'./img/button_prev_1.png\'" id="cardOther_p" src="./img/button_prev.png" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(0)" onclick="mixingСardOther('+next+',this)"><img class="img-fluid" onMouseOut="document.getElementById(\'cardOther_n\').src=\'./img/button_next.png\'" onMouseEnter="document.getElementById(\'cardOther_n\').src=\'./img/button_next_1.png\'" id="cardOther_n" src="./img/button_next.png" /></a></p><br />'); 

  for(let i = 0; i < 3; i++){
    CARD1 = document.getElementById('cardOther');
    CARD1.insertAdjacentHTML('beforeEnd', '<div class="card px-3 py-3 mx-3" style="width: 18rem;"><img src="./img/cards'+img+'.png" class="img-fluid" /><div class="card-body"><h5 class="card-title">Услуга'+img+'Услуга'+img+'</h5><p class="card-text">Описание Описание Описание<Br />Описание Описание<Br />Описание Описание Описание<Br />Описание</p></div><button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Модальное окно</button></div>');
    img++;
  }

var mixingСardOther =function(value, img){  
var img = value;
deleteСard();

if(img == 1){
  prev = 3;
  next = 2;
  CARD0 = document.getElementById('cardOther');
  CARD0.insertAdjacentHTML('afterBegin','<p class="d-flex justify-content-end" style=" transform: translateX(-22%);"><a href="javascript:void(0)" onclick="mixingСardOther('+prev+',this)"><img class="img-fluid" onMouseOut="document.getElementById(\'cardOther_p\').src=\'./img/button_prev.png\'" onMouseEnter="document.getElementById(\'cardOther_p\').src=\'./img/button_prev_1.png\'" id="cardOther_p" src="./img/button_prev.png" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(0)" onclick="mixingСardOther('+next+',this)"><img class="img-fluid" onMouseOut="document.getElementById(\'cardOther_n\').src=\'./img/button_next.png\'" onMouseEnter="document.getElementById(\'cardOther_n\').src=\'./img/button_next_1.png\'" id="cardOther_n" src="./img/button_next.png" /></a></p><br />'); 

  for(let i = 0; i < 3; i++){
    CARD1 = document.getElementById('cardOther');
    CARD1.insertAdjacentHTML('beforeEnd', '<div class="card px-3 py-3 mx-3" style="width: 18rem;"><img src="./img/cards'+img+'.png" class="img-fluid" /><div class="card-body"><h5 class="card-title">Услуга'+img+'Услуга'+img+'</h5><p class="card-text">Описание Описание Описание<Br />Описание Описание<Br />Описание Описание Описание<Br />Описание</p></div><button class="btn " type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Модальное окно</button></div>');
    img++;
  }
}
else{
  if(img == 2){
    prev = 1;
    next = 3;
    CARD0 = document.getElementById('cardOther');
    CARD0.insertAdjacentHTML('afterBegin','<p class="d-flex justify-content-end" style=" transform: translateX(-22%);"><a href="javascript:void(0)" onclick="mixingСardOther('+prev+',this)"><img class="img-fluid" onMouseOut="document.getElementById(\'cardOther_p\').src=\'./img/button_prev.png\'" onMouseEnter="document.getElementById(\'cardOther_p\').src=\'./img/button_prev_1.png\'" id="cardOther_p" src="./img/button_prev.png" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(0)" onclick="mixingСardOther('+next+',this)"><img class="img-fluid" onMouseOut="document.getElementById(\'cardOther_n\').src=\'./img/button_next.png\'" onMouseEnter="document.getElementById(\'cardOther_n\').src=\'./img/button_next_1.png\'" id="cardOther_n" src="./img/button_next.png" /></a></p><br />'); 
    for(let i = 1; i < 3; i++){
    CARD1 = document.getElementById('cardOther');
    CARD1.insertAdjacentHTML('beforeEnd', '<div class="card px-3 py-3 mx-3" style="width: 18rem;"><img src="./img/cards'+img+'.png" class="img-fluid" /><div class="card-body"><h5 class="card-title">Услуга'+img+'Услуга'+img+'</h5><p class="card-text">Описание Описание Описание<Br />Описание Описание<Br />Описание Описание Описание<Br />Описание</p></div><button class="btn " type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Модальное окно</button></div>');
    img++;
    }
    img = 1;
    CARD1 = document.getElementById('cardOther');
    CARD1.insertAdjacentHTML('beforeEnd', '<div class="card px-3 py-3 mx-3" style="width: 18rem;"><img src="./img/cards'+img+'.png" class="img-fluid" /><div class="card-body"><h5 class="card-title">Услуга'+img+'Услуга'+img+'</h5><p class="card-text">Описание Описание Описание<Br />Описание Описание<Br />Описание Описание Описание<Br />Описание</p></div><button class="btn " type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Модальное окно</button></div>');
  }
  else{
    prev = 2;
    next = 1;
    CARD0 = document.getElementById('cardOther');
  CARD0.insertAdjacentHTML('afterBegin','<p class="d-flex justify-content-end" style=" transform: translateX(-22%);"><a href="javascript:void(0)" onclick="mixingСardOther('+prev+',this)"><img class="img-fluid" onMouseOut="document.getElementById(\'cardOther_p\').src=\'./img/button_prev.png\'" onMouseEnter="document.getElementById(\'cardOther_p\').src=\'./img/button_prev_1.png\'" id="cardOther_p" src="./img/button_prev.png" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(0)" onclick="mixingСardOther('+next+',this)"><img class="img-fluid" onMouseOut="document.getElementById(\'cardOther_n\').src=\'./img/button_next.png\'" onMouseEnter="document.getElementById(\'cardOther_n\').src=\'./img/button_next_1.png\'" id="cardOther_n" src="./img/button_next.png" /></a></p><br />'); 
    for(let i = 0; i < 3; i++){
    CARD1 = document.getElementById('cardOther');
    CARD1.insertAdjacentHTML('beforeEnd', '<div class="card px-3 py-3 mx-3" style="width: 18rem;"><img src="./img/cards'+img+'.png" class="img-fluid" /><div class="card-body"><h5 class="card-title">Услуга'+img+'Услуга'+img+'</h5><p class="card-text">Описание Описание Описание<Br />Описание Описание<Br />Описание Описание Описание<Br />Описание</p></div><button class="btn " type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Модальное окно</button></div>');
    img--;
    }
  }
}

}
//Очистка card 
function deleteСard() {
  var deleteElement = document.getElementById('cardOther');
  deleteElement.innerHTML = '';
}
