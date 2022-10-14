const lang = document.querySelector('.inf-lang .lang-li'),
    dropboxLang = document.querySelector('.inf-lang ul ul'),
    dropboxLi = document.querySelector('.inf-lang ul li');

lang.addEventListener('click', function () {
    dropboxLang.classList.toggle('activeLang')


})
dropboxLi.addEventListener('click', function () {
    
    dropboxLang.classList.remove('activeLang')

})


const menu = document.querySelector('.menu-box'),
    menuUl = document.querySelector('.menu__box-ul'),
    menuLink = document.querySelector('.menu');


menu.addEventListener('click', function () {
    menuUl.classList.toggle('activeBox')

})

console.log(menu);