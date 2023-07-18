//główny plik z funkcjami js'owymi

import { changeOnDarkMode } from "./darkMode.js";

const darkModeSwitch = document.getElementById("darkMode");
const body = document.querySelector("body");
const menu = document.getElementById("menu");
const bigSquare = document.getElementById("bigSquare");
const littleSquares = document.querySelectorAll(".littleSquare");

const objects = [body, menu, bigSquare, littleSquares];

darkModeSwitch.addEventListener("click", () => {
    changeOnDarkMode(darkModeSwitch, objects);
});

