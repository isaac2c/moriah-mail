modalDialog = document.getElementById("modal-dialog");
modalDialog.showModal();
    onkeydown = function(evt) {
        console.log(evt.code);
        if (evt.code == 27) {
            evt.preventDefault();
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