let current = 1;

export function slideToLeft(images) {

    images[current].style.transform = "";
    images[current].classList.add("slideToLeft");
    setTimeout(()=> {
        images[current].style.zIndex = "0"
        images[current].classList.remove("slideToLeft");
        images[current].style.transform = "translateX(0)";
        if(current == 1) {
            images[current - 1].style.zIndex = "2";
            images[current].style.zIndex = "1";
            current -= 1;
        } else {
            images[current + 1].style.zIndex = "2";
            images[current].style.zIndex = "1";
            current += 1;
        }
        

    }, 500)
}

export function slideToRight(images) {

    images[current].style.transform = "";
    images[current].classList.add("slideToRight");
    setTimeout(()=> {
        images[current].style.zIndex = "0"
        images[current].classList.remove("slideToRight");
        images[current].style.transform = "translateX(0)";
        if(current == 1) {
            images[current - 1].style.zIndex = "2";
            images[current].style.zIndex = "1";
            current -= 1;
        } else {
            images[current + 1].style.zIndex = "2";
            images[current].style.zIndex = "1";
            current += 1;
        }
        

    }, 500)
}