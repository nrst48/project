let burger = document.querySelector('#icon');
let navUl = document.querySelector('#list');
let nav = document.querySelector('nav');



burger.addEventListener('click', burgerF);

function burgerF(){
    navUl.classList.toggle('show');
}

window.addEventListener('scroll', bgNav);

function bgNav(){
    nav.classList.toggle('showBg', window.scrollY > 0);
}



// SEARCH
function Search(item){
    var collection = document.getElementsByClassName("listItem");
    for (i = 0;i < collection.length; i++){
        if (((collection[i].innerHTML).toLowerCase()).indexOf(item) > -1) {
            collection[i].style.display = "block";
            } else {
                collection[i].style.display = "none";
                }
    }
}
let darkmode = document.querySelector('#dark-mode');
let content = document.querySelector('body');

darkmode.addEventListener('click' , function() {
    content.classList.toggle('dark')
    darkmode.classList.toggle('mode-dark')
})