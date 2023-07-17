//główny plik z funkcjami js'owymi

import { changeOnDarkMode } from "./darkMode.js";

const darkModeSwitch = document.getElementById("darkMode");
const body = document.querySelector("body");
const menu = document.getElementById("menu");
const objects = [body, menu];

darkModeSwitch.addEventListener("click", () => {
    changeOnDarkMode(darkModeSwitch, objects);
});

