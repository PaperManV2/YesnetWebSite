"use strict"

//funkcja któa obsługuję zmianę ekranu na Dark theme. (Można by to wprowadzić do local storage tak żeby nie zmieniać cały czas przy wejściu)

export function changeOnDarkMode(OnOff, objects) {
    if(OnOff.checked) {


        objects[6].style.backgroundColor = "#2e2d2d";
        objects[5].style.color = "#fff";
        objects[5].style.backgroundColor = "#2e2d2d";
        objects[4].style.backgroundColor = "#cececea2";
        objects[3].forEach(element => {
            element.style.backgroundColor = "#7c7c7c"
        });

        objects[2].style.backgroundColor = "#4e4e4e";
        objects[1].style.boxShadow = "0px 0px 10px 4px #6e6e6ecc";
        objects[0].style.backgroundColor = "#2e2d2d";
    } else {

        objects[6].style.backgroundColor = "#cacaca";
        objects[5].style.color = "#000";
        objects[5].style.backgroundColor = "#fff";
        objects[4].style.backgroundColor = "#000000a2";
        objects[3].forEach(element => {
            element.style.backgroundColor = "#dadada";
        });

        objects[2].style.backgroundColor = "#dadada";
        objects[1].style.boxShadow = "0px 0px 10px 4px #000000cc";
        objects[0].style.backgroundColor = "#fff";

    }
}