login = false;
document.onkeydown = function(event) {
    if (login == false) {
        if (event.code == "Escape") {
            event.preventDefault();
        }
    }
}
modalDialog = document.getElementById("modal-dialog");
modalDialog.showModal();

loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", nonSubmit);
function nonSubmit(event) {
    event.preventDefault(event);
    // Change login form
    if (loginForm[0].value == "admin@constantinslibrary.com") {
        login = true;
        modalDialog.close();
    }
}

changingHeader = document.querySelector("#mail");
if (true) {
    changingHeader.style.cursor = "pointer";
    changingHeader.onclick = function() {
        changingHeader.style.fontSize = "0.8em"
        changingHeader.style.fontFamily = "Tangerine, Lugrasimo, Zeyada, Brush Script MT, cursive";
        changingHeader.innerText = "Correspondence";
        changingHeader.onclick = function() {
            changingHeader.innerText = "Discourse";
            changingHeader.onclick = function() {
                changingHeader.style.fontSize = "1em"
                changingHeader.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
                changingHeader.innerText = "Mail";
                changingHeader.style.cursor = "auto";
            };
        };
    };
};