// DATA STRUCUTRES
// These data structures contain information used to construct the emails displayed in Stephen's inbox.

emails = [
    {
        "id": "email-1",
        "date": "new Date(Number(localStorage.getItem(\"first-login\")) - 86400000)",
        "sender": "user@domain.com",
        "subject": "For your immediate attention",
        "text": "Dear sir,<br>I am a Nigerian Prince.  Please send rand.<br><br>Yours sincerely,<br>Prince Princington"
    }
];

// EARLY DECLARATIONS
// This is a function used elsewhere that must be declared early.

indirectEval = eval;

// CLEAR LOCAL STORAGE
// This code sets information stored in local storage to expire if 30 days or more have elapsed since the user last accessed the site.

if (Number(localStorage.getItem("last-accessed")) <= (Date.now() - 2592000000)) {
    localStorage.clear();
}
localStorage.setItem("last-accessed", Date.now());

// LOGIN PAGE
// This code presents the user with a login page when they attempt to access the Edifying Mail email client.

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

// CONSTRUCT EMAIL
// This function produces the emails displayed in Stephen's inbox.

function constructEmail(emailID, emailDate, emailSender, emailSubject, emailText) {
    newEmail = document.createElement("div");
    newEmail.setAttribute("id", "")
    newEmail.setAttribute("class", "email-block inner-content");
    newDate = document.createElement("p")
    tempDate = indirectEval(emailDate);
    options = {
        hour12: false,
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    };
    newDate.innerText = new Intl.DateTimeFormat(undefined, options).format(tempDate);
    newSender = document.createElement("p");
    newSender.innerText = emailSender;
    newSubject = document.createElement("p");
    newSubject.innerText = emailSubject;
    newEmail.append(newDate, newSender, newSubject);
    newEmail.onclick = function() {
        document.getElementById("subject-header").innerText = emailSubject;
        document.getElementById("display-sender").innerText = "From: " + emailSender;
        document.getElementById("display-text").innerHTML = emailText;
        newEmail.style.boxShadow = "none";
        if (localStorage.getItem("read")) {
            localStorage.setItem("read", localStorage.getItem("read") + " " + emailID);
        } else {
            localStorage.setItem("read", emailID);
        }
    };
    document.getElementById("email-list").append(newEmail);
};

// LOGIN FORM
// This code determines the behaviour of the login form element in response to user input.

loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", nonSubmit);
function nonSubmit(event) {
    event.preventDefault(event);
    // Change login form
    if (loginForm[0].value == "admin@constantinslibrary.com") {
        document.querySelector("#user-id-1").innerText = "Stephen";
        document.querySelector("#user-id-2").innerText = "Stephen";
        if (!localStorage.getItem("first-login")) {
            localStorage.setItem("first-login", Date.now());
        }
        for (const email of emails) {
            constructEmail(email.id, email.date, email.sender, email.subject, email.text);
        }
        if (localStorage.getItem("read")) {
            readEmails = localStorage.getItem("read").split(" ");
            for (const readEmail of readEmails) {
                document.getElementById(readEmail).style.boxShadow = "none";
            }
        }
        login = true;
        modalDialog.close();
    }
};

// CHANGING HEADER
// This code determines the behaviour of the word "Mail" in the page header upon being clicked by the user.

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
            };
        };
    };
}