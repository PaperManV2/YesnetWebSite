export function exitLoginForm(Btn, object) {
    Btn.addEventListener("click", () => {
        object.classList.add("hidden");
    })
}

export function loginBtn(Btn, modal,userMenu) {
    Btn.addEventListener("click", () => {
        if(!localStorage.getItem("login")) {
            modal.classList.toggle("hidden");
        } else {
            //zwijane menu
            const offModalClickHandler = (e) => {
                if (e.target !== userMenu && e.target !== Btn) {
                    closeModal()
                }
            }

            window.addEventListener("click", offModalClickHandler)

            const closeModal = () => {
                userMenu.classList.add("hidden");
                window.removeEventListener("click", offModalClickHandler)
            }

            

            if(!userMenu.classList.contains("hidden")) {
                closeModal()
            } else {

                userMenu.classList.remove("hidden");
            }

        }
    })
}

export function login(btn, form) {
    btn.addEventListener("click", async (e) => {
        e.preventDefault()
        const response = await fetch("/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: form.elements["username"].value.trim(), password: form.elements["password"].value.trim()})
         })  
        const data = await response.json();
        console.log(data.message);
        if(response.status == 200) {
            localStorage.setItem("login", JSON.stringify({username: form.elements["username"].value.trim(), password: form.elements["password"].value.trim()}))
            window.location.replace("/");
        }
    })
}