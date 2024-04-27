changingHeader = document.querySelector("#mail");
if (true) {
    changingHeader.style.cursor = "pointer";
    changingHeader.onclick = function() {
        changingHeader.innerText = "Correspondence";
        changingHeader.style.fontFamily = "Tangerine, Lugrasimo, Zeyada, Brush Script MT, cursive";
        changingHeader.style.fontSize = "0.8em"
        changingHeader.onclick = function() {
            changingHeader.innerText = "Discourse";
            changingHeader.onclick = function() {
                changingHeader.innerText = "Mail";
                changingHeader.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
                changingHeader.style.fontSize = "1em"
                changingHeader.style.cursor = "auto";
            };
        };
    };
};