let menu = document.querySelector(".menu")
let menuBtn = document.querySelector(".header__icon")
let menuBtnIcon = document.querySelector(".header__icon i")

menuBtn.addEventListener("click",function (){
    if (menuBtnIcon.classList.contains("fa-bars")){
        menu.style.left = "0"
        menuBtnIcon.classList = "fa fa-times"
    } else {
        menu.style.left = "-192px"
        menuBtnIcon.classList = "fa fa-bars"
    }
})

// 
function myFunc(){
    alert("thanks for join !");
 }