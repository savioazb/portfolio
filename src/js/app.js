const menuBtn = document.querySelector('.nav__link');
const mainMenu = document.querySelector('.menu__hidden');

const max = 100;
let start = null; 

const showMenu = timestamp => {

    mainMenu.style.position = "fixed"

    if (!start) start = timestamp;
    let progress = timestamp - start;

    let newPosition = Math.min(progress / 5, max);
    mainMenu.style.left = newPosition + '%';

    if(newPosition < max){
        window.requestAnimationFrame(showMenu);
    }

}


menuBtn.addEventListener('click', function(){
    window.requestAnimationFrame(showMenu);
});