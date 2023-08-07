export function exitLoginForm(Btn, object) {
    Btn.addEventListener("click", () => {
        object.classList.add("hidden");
    })
}

export function loginBtn(Btn, modal) {
    Btn.addEventListener("click", () => {
        if(!localStorage.getItem("login")) {
            modal.classList.toggle("hidden")
        } else {
            //zwijane menu
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
            body: JSON.stringify({username: form.elements["username"].value, password: form.elements["password"].value})
         })
        //.then(response => response.json())
        // .then(data => {
        //     console.log(data.message)
        // })
        // .catch(error => {
        //     console.error('error:', error)
        // })
        
        const data = await response.json();
        console.log(data.message);
        if(response.status == 200) {
            localStorage.setItem("login", JSON.stringify({username: form.elements["username"].value, password: form.elements["password"].value}))
            window.location.replace("/");
        }
    })
}