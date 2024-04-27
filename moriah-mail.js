changingHeader = document.querySelector("#mail");
if (true) {
    changingHeader.style.cursor = "pointer";
    changingHeader.onclick = function() {
        changingHeader.innerText = "Correspondence";
        changingHeader.style.fontFamily = "Tangerine, Lugrasimo, Zeyada, Brush Script MT, cursive";
        changingHeader.onclick = function() {
            changingHeader.innerText = "Discourse";
            changingHeader.style.fontFamily = "Lugrasimo, Tangerine, Zeyada, Brush Script MT, cursive";
            changingHeader.onclick = function() {
                changingHeader.innerText = "Mail";
                changingHeader.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
                changingHeader.style.cursor = "auto";
            };
        };
    };
};