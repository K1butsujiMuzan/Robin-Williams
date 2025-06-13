"use strict";
const BurgerMenuLinks = document.querySelector(".ModalBurgerMenu");
let BurgerisOpen = false;

function CheckBurgerMenu(){
    if(BurgerisOpen == false) {
        OpenBurgerMenu();      
        BurgerisOpen == true;
    } else{
        CloseBurgerMenu();        
        BurgerisOpen == false;
    }
}

function OpenBurgerMenu() {
    BurgerMenuLinks.classList.toggle("Active");  
}

function CloseBurgerMenu() {   
    BurgerMenuLinks.classList.toggle("Active");   
}
BurgerMenuLinks.addEventListener("click", function(e) {
    if(e.target === BurgerMenuLinks) {
        CloseBurgerMenu();
    }
});

if(window.innerWidth > 768) {
    BurgerMenuLinks.classList.remove("Active");
}

const ButtonCountry = document.querySelector(".PhotographyBlock__Button_Country");
window.onload = ButtonCountry.classList.add("Active");


