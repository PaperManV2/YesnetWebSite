let current = 1;

export function slideToLeft(images) {

    images[current].style.transform = "";
    images[current].classList.add("slideToLeft");
    setTimeout(()=> {
        images[current].style.transition = "transform 0s";
        images[current].style.zIndex = "0";
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
        images[current].style.transition = "transform 0.5s";

    }, 500)
}

export function slideToRight(images) {

    images[current].style.transform = "";
    images[current].classList.add("slideToRight");
    setTimeout(()=> {
        images[current].style.transition = "transform 0s";
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
        images[current].style.transition = "transform 0.5s";

    }, 500)
}

export function TelOrMail(btns, input ) {
    const tel = btns[0];
    const mail = btns[1];

    tel.addEventListener("click", () => {
        tel.style.boxShadow = "inset 0px 0px 6px 1px rgba(0, 0, 0, 0.8)";
        mail.style.boxShadow = "2px 2px 6px 0px rgba(0, 0, 0, 0.8)";
        input.setAttribute("type", "tel");
        input.setAttribute("placeholder", "Phone");
    });
    mail.addEventListener("click", () => {
        mail.style.boxShadow = "inset 0px 0px 6px 1px rgba(0, 0, 0, 0.8)";
        tel.style.boxShadow = "2px 2px 6px 0px rgba(0, 0, 0, 0.8)";
        input.setAttribute("type", "email");
        input.setAttribute("placeholder", "E-mail");
    });
}

export function toggleServiceForm( exitBtn, form, displayBtns ) {
    exitBtn.addEventListener("click", () => {
        form.style.animation = "disappear 0.5s"
        setTimeout(() => {
            form.classList.add("hidden");
            form.style.animation = ""
        }, 500)

    })

    displayBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            form.classList.remove("hidden");
        })
    });

    
}