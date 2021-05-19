const openMenuBtn = document.querySelector('.nav__btn');
const closeMenuBtn = document.querySelector('.menu__btn');
const mainMenu = document.querySelector('.menu__hidden');
const menuList = document.querySelector('.menu__list');

let menuInitialPosition = -100;

const showMenu = () => {

    mainMenu.style.position = 'fixed';

    menuInitialPosition = menuInitialPosition + 4;

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

    menuInitialPosition = menuInitialPosition - 4;

    mainMenu.style.left = menuInitialPosition + '%'
    let ww = -100;

    if (menuInitialPosition > ww) {
        window.requestAnimationFrame(closeMenu);
    }

    window.addEventListener('scroll', scrollListener);

}

const useMenu = () => {

    document.querySelector('.nav').style.position = 'absolute';
    window.requestAnimationFrame(closeMenu);
}

const scrollListener = () => {
    console.log('teste');
    document.querySelector('.nav').style.position = 'fixed';
    window.removeEventListener('scroll', scrollListener);
}


openMenuBtn.addEventListener('click', function(){
    window.requestAnimationFrame(showMenu);
});

closeMenuBtn.addEventListener('click', function (){
    window.requestAnimationFrame(closeMenu);
})

menuList.addEventListener('click', useMenu);

