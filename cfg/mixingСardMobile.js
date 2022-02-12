//Имитация связи с сервером////////////////////////////////////////////////////////////////////////////////////
var img, prev, next;
if(typeof pref == "undefined") img = 1;
  prev = 0;
  next = 2; 
  CARD2 = document.getElementById('cardMobile');
  CARD2.insertAdjacentHTML('afterBegin','<p class="d-flex justify-content-center"><a href="javascript:void(0)" onclick="mixingСardMobile('+next+',this)"><img class="img-fluid" src="./img/button_prev.png" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img class="img-fluid" src="./img/button_next_0.png" /></p><br />');
  
  CARD3 = document.getElementById('cardMobile');
  CARD3.insertAdjacentHTML('beforeEnd', '<div class="card px-3 py-3 mx-3" style="width: 18rem;"><img src="./img/cards'+img+'.png" class="img-fluid" /><div class="card-body"><h5 class="card-title">Услуга'+img+'Услуга'+img+'</h5><p class="card-text">Описание Описание Описание<Br />Описание Описание<Br />Описание Описание Описание<Br />Описание</p></div><button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Модальное окно</button></div>');



var mixingСardMobile =function(value, img){  
var img = value;
deleteСardMobile();  
if(img == 1){
  prev = 0;
  next = 2; 
  CARD2 = document.getElementById('cardMobile');
  CARD2.insertAdjacentHTML('afterBegin','<p class="d-flex justify-content-center"><a href="javascript:void(0)" onclick="mixingСardMobile('+next+',this)"><img class="img-fluid" src="./img/button_prev.png" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img class="img-fluid" src="./img/button_next_0.png" /></p><br />');
  
  CARD3 = document.getElementById('cardMobile');
  CARD3.insertAdjacentHTML('beforeEnd', '<div class="card px-3 py-3 mx-3" style="width: 18rem;"><img src="./img/cards'+img+'.png" class="img-fluid" /><div class="card-body"><h5 class="card-title">Услуга'+img+'Услуга'+img+'</h5><p class="card-text">Описание Описание Описание<Br />Описание Описание<Br />Описание Описание Описание<Br />Описание</p></div><button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Модальное окно</button></div>');  
}
else{
  if(img == 2){
    prev = 1;
    next = 3; 
    CARD2 = document.getElementById('cardMobile');
    CARD2.insertAdjacentHTML('afterBegin','<p class="d-flex justify-content-center"><a href="javascript:void(0)" onclick="mixingСardMobile('+next+',this)"><img class="img-fluid" src="./img/button_prev.png" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(0)" onclick="mixingСardMobile('+prev+',this)"><img class="img-fluid" src="./img/button_next.png" /></a></p><br />');
  
    CARD3 = document.getElementById('cardMobile');
    CARD3.insertAdjacentHTML('beforeEnd', '<div class="card px-3 py-3 mx-3" style="width: 18rem;"><img src="./img/cards'+img+'.png" class="img-fluid" /><div class="card-body"><h5 class="card-title">Услуга'+img+'Услуга'+img+'</h5><p class="card-text">Описание Описание Описание<Br />Описание Описание<Br />Описание Описание Описание<Br />Описание</p></div><button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Модальное окно</button></div>');  
    } 
  else{
    prev = 2;
    next = 0;  
    CARD2 = document.getElementById('cardMobile');
    CARD2.insertAdjacentHTML('afterBegin','<p class="d-flex justify-content-center"><img class="img-fluid" src="./img/button_prev_0.png" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:void(0)" onclick="mixingСardMobile('+prev+',this)"><img class="img-fluid" src="./img/button_next.png" /></a></p><br />');
  
    CARD3 = document.getElementById('cardMobile');
    CARD3.insertAdjacentHTML('beforeEnd', '<div class="card px-3 py-3 mx-3" style="width: 18rem;"><img src="./img/cards'+img+'.png" class="img-fluid" /><div class="card-body"><h5 class="card-title">Услуга'+img+'Услуга'+img+'</h5><p class="card-text">Описание Описание Описание<Br />Описание Описание<Br />Описание Описание Описание<Br />Описание</p></div><button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Модальное окно</button></div>');     
  }
}
}
//Очистка card 
function deleteСardMobile() {
  var deleteElement = document.getElementById('cardMobile');
  deleteElement.innerHTML = '';
}