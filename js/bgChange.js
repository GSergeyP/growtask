/* GROWTASK
   Автор – GSergeyP
   Версия 1.0.0  */

const bgChange = document.querySelector('#bgChange')

// Изменение фона Навигации
window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        bgChange.style.backgroundColor = 'rgba(252, 252, 252, 0.9)';
        bgChange.style.backdropFilter = 'blur(30px)'; 
    }
    if (window.scrollY < 2) {
        bgChange.style.backgroundColor = '';
        bgChange.style.backdropFilter = '';
    }
})
