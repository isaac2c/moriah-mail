// CLEAR LOCAL STORAGE
// This code sets information stored in local storage to expire if 30 days or more have elapsed since the user last accessed the site.
if (Number(localStorage.getItem("last-accessed")) <= (Date.now - 2592000000)) {
    localStorage.removeItem("date-mail-clicked");
    log.console("Expired");
}
localStorage.setItem("last-accessed", Date.now());
localStorage.setItem("last-accessed", Date.parse("2023-03-28"))

//
//

login = false;
document.onkeydown = function(event) {
    if (login == false) {
        if (event.code == "Escape") {
            event.preventDefault();
        }
    }
};
modalDialog = document.getElementById("modal-dialog");
modalDialog.showModal();

loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", nonSubmit);
function nonSubmit(event) {
    event.preventDefault(event);
    // Change login form
    if (loginForm[0].value == "admin@constantinslibrary.com") {
        document.querySelector("#user-id-1").innerText = "Stephen";
        document.querySelector("#user-id-2").innerText = "Stephen";
        login = true;
        modalDialog.close();
    }
};

changingHeader = document.querySelector("#mail");
if (!localStorage.getItem("date-mail-clicked")) {
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
                localStorage.setItem("date-mail-clicked", Date.now());
                console.log(Date(localStorage.getItem("date-mail-clicked")));
            };
        };
    };
} else {
    console.log(Date(localStorage.getItem("date-mail-clicked")));
}