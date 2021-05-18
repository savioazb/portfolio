const openMenuBtn = document.querySelector('.nav__btn');
const closeMenuBtn = document.querySelector('.menu__btn');
const mainMenu = document.querySelector('.menu__hidden');

let menuInitialPosition = -100;

const showMenu = () => {

    mainMenu.style.position = 'fixed';

    menuInitialPosition = menuInitialPosition + 5;

    mainMenu.style.left = menuInitialPosition + '%';
    let ww = 0;
    console.log(ww);
    console.log(menuInitialPosition);

    if (menuInitialPosition < ww) {
        console.log(menuInitialPosition);
        requestAnimationFrame(showMenu);
    }
}

const closeMenu = () => {

    menuInitialPosition = menuInitialPosition - 5;

    mainMenu.style.left = menuInitialPosition + '%'
    let ww = -100;

    if (menuInitialPosition > ww) {
        window.requestAnimationFrame(closeMenu);
    }

}


openMenuBtn.addEventListener('click', function(){
    window.requestAnimationFrame(showMenu);
});

closeMenuBtn.addEventListener('click', function (){
    window.requestAnimationFrame(closeMenu);
})