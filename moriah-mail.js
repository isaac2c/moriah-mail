changingHeader = document.querySelector("#mail");
changingHeader.onclick = function() {
    changingHeader.innerText = "Correspondence";
    changingHeader.style.fontFamily = "Lugrasimo, Tangerine, Zeyada, Brush Script MT, cursive";
    changingHeader.onclick = function() {
        changingHeader.innerText = "Discourse";
        changingHeader.style.fontFamily = "Tangerine, Lugrasimo, Zeyada, Brush Script MT, cursive";
        changingHeader.onclick = function() {
            changingHeader.style.cursor = "auto";
            if (false) {

            }
        }
    }
};