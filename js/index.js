//główny plik z funkcjami js'owymi

import { changeOnDarkMode } from "./darkMode.js";

const darkModeSwitch = document.getElementById("darkMode");
const body = document.querySelector("body");
const menu = document.getElementById("menu");
const bigSquare = document.getElementById("bigSquare");
const littleSquares = document.querySelectorAll(".littleSquare");
const mainOverlay = document.querySelector(".mainOverlay");

const objects = [body, menu, bigSquare, littleSquares, mainOverlay];

darkModeSwitch.addEventListener("click", () => {
    changeOnDarkMode(darkModeSwitch, objects);
});

