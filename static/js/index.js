//główny plik z funkcjami js'owymi

import { changeOnDarkMode } from "./darkMode.js";
import { loginBtn } from "./login.js";
import { exitLoginForm } from "./login.js";
import { login } from "./login.js";
import { slideToLeft, slideToRight } from "./slider.js";


const darkModeSwitch = document.getElementById("darkMode");
const body = document.querySelector("body");
const menu = document.getElementById("menu");
const bigSquare = document.getElementById("bigSquare");
const littleSquares = document.querySelectorAll(".littleSquare");
const mainOverlay = document.querySelector(".mainOverlay");
const loginFormContainer = document.querySelector(".loginForm")
const loginModal = document.querySelector(".loginOverlay");
const loginModalToogle = document.querySelector(".login");
const loginFormExit = document.querySelector(".exitLoginForm");
const signIn = document.getElementById("submitLogin");
const username = document.querySelector(".loginName");
const slideBtnLeft = document.querySelector(".arrow-left");
const slideBtnRight = document.querySelector(".arrow-right");
const userFormImg = document.querySelector(".userForm");
const companyFormImg = document.querySelector(".companyForm");

const objects = [body, menu, bigSquare, littleSquares, mainOverlay, loginFormContainer];
const sliderImages = [userFormImg, companyFormImg];

darkModeSwitch.addEventListener("click", () => {
    changeOnDarkMode(darkModeSwitch, objects);
});

loginBtn(loginModalToogle, loginModal);
exitLoginForm(loginFormExit, loginModal);
login(signIn, loginFormContainer);
document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("login")) {
        username.textContent = JSON.parse(localStorage.getItem("login")).username;
        if(username.offsetWidth > 150) {
            let offset = username.offsetWidth - 150;
            let Multiplier = (offset/9) +1;

            let string = username.textContent
            string = string.slice(0, -Multiplier);
            string += "...";
            username.textContent = string
        }
    }
})

slideBtnRight.addEventListener("click", () => {
    slideToLeft(sliderImages);
})

slideBtnLeft.addEventListener("click", () => {
    slideToRight(sliderImages);
})