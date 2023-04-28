const panels = document.querySelectorAll(".panel");
// console.log(panels);
// console.log(panels[0]);

panels.forEach((panel) => {
    // doing foreach function to add EventListener to listen the click
    panel.addEventListener("click", () => {

         removeActiveclass();

        panel.classList.add("active");
    });
});

function removeActiveclass() {
    panels.forEach((panel) => {
        // remove all active panel classes
        panel.classList.remove("active");

    });
    
}

