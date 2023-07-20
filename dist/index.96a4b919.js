const checkbox = document.querySelector(".toggle-checkbox");
const detectToggleOnce = (e)=>{
    e.target.classList.add("toggled-once");
};
checkbox.addEventListener("click", detectToggleOnce, {
    once: true
});

//# sourceMappingURL=index.96a4b919.js.map
