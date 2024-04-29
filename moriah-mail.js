// DATA STRUCTURES
// These data structures contain information used to construct the emails displayed in Stephen's inbox.

emails = [
    {
        "id": "email-1",
        "date": "new Date(Number(localStorage.getItem(\"first-login\")) - 86400000)",
        "sender": "user@domain.com",
        "subject": "For your immediate attention",
        "text": "Dear sir,<br>I am a Nigerian Prince.  Please send rand.<br><br>Yours sincerely,<br>Prince Princington"
    },
    {
        "id": "email-2",
        "date": "new Date(Number(localStorage.getItem(\"first-login\")) - 86400000)",
        "sender": "user@domain.com",
        "subject": "For your immediate attention",
        "text": "Dear sir,<br>I am a German Prince.  Please send rand.<br><br>Yours sincerely,<br>Prince Princington"
    },
    {
        "id": "email-3",
        "date": "new Date(Number(localStorage.getItem(\"first-login\")) - 86400000)",
        "sender": "user@domain.com",
        "subject": "For your immediate attention",
        "text": "Dear sir,<br>I am a Ugandan Prince.  Please send rand.<br><br>Yours sincerely,<br>Prince Princington"
    },
    {
        "id": "email-4",
        "date": "new Date(Number(localStorage.getItem(\"first-login\")) - 86400000)",
        "sender": "user@domain.com",
        "subject": "For your immediate attention",
        "text": "Dear sir,<br>I am a Ugandan Prince.  Please send rand.<br><br>Yours sincerely,<br>Prince Princington"
    },
    {
        "id": "email-5",
        "date": "new Date(Number(localStorage.getItem(\"first-login\")) - 86400000)",
        "sender": "user@domain.com",
        "subject": "For your immediate attention",
        "text": "Dear sir,<br>I am a Ugandan Prince.  Please send rand.<br><br>Yours sincerely,<br>Prince Princington"
    },
    {
        "id": "email-6",
        "date": "new Date(Number(localStorage.getItem(\"first-login\")) - 86400000)",
        "sender": "user@domain.com",
        "subject": "For your immediate attention",
        "text": "Dear sir,<br>I am a Ugandan Prince.  Please send rand.<br><br>Yours sincerely,<br>Prince Princington"
    },
    {
        "id": "email-7",
        "date": "new Date(Number(localStorage.getItem(\"first-login\")) - 86400000)",
        "sender": "user@domain.com",
        "subject": "For your immediate attention",
        "text": "Dear sir,<br>I am a Spanish Prince.  Please send rand.<br><br>Yours sincerely,<br>Prince Princington"
    }
];
asyncEmail1 = {
    "id": "async-email-1",
    "date": "new Date(Number(localStorage.getItem(\"first-login\")) + 10000)",
    "sender": "async@domain.com",
    "subject": "Async Email 1",
    "text": "This arrives after 10 seconds."
};
asyncEmail2 = {
    "id": "async-email-2",
    "date": "new Date(Number(localStorage.getItem(\"first-login\")) + 600000)",
    "sender": "async@domain.com",
    "subject": "Async Email 2",
    "text": "This arrives after 10 minutes."
};
asyncEmail3 = {
    "id": "async-email-click",
    "date": "new Date(Number(localStorage.getItem(\"date-mail-clicked\")))",
    "sender": "async@domain.com",
    "subject": "Async Email Click",
    "text": "This arrives on click."
};

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
// These functions produce the emails displayed in Stephen's inbox.

function constructEmail(emailID, emailDate, emailSender, emailSubject, emailText) {
    newEmail = document.createElement("div");
    newEmail.setAttribute("id", emailID)
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
        document.getElementById(emailID).style.boxShadow = "none";
        if (localStorage.getItem("read")) {
            localStorage.setItem("read", localStorage.getItem("read") + " " + emailID);
        } else {
            localStorage.setItem("read", emailID);
        }
    };
    document.getElementById("email-list").append(newEmail);
};
function constructAsync1() {
    constructEmail(asyncEmail1.id, asyncEmail1.date, asyncEmail1.sender, asyncEmail1.subject, asyncEmail1.text);
    emailList.insertBefore(document.getElementById("async-email-click"), emailList.firstChild);
};
function constructAsync2() {
    constructEmail(asyncEmail2.id, asyncEmail2.date, asyncEmail2.sender, asyncEmail2.subject, asyncEmail2.text);
    emailList.insertBefore(document.getElementById("async-email-1"), emailList.firstChild);
};
function constructAsync3() {
    constructEmail(asyncEmail3.id, asyncEmail3.date, asyncEmail3.sender, asyncEmail3.subject, asyncEmail3.text);
    emailList.insertBefore(document.getElementById("async-email-2"), emailList.firstChild);
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
        const emailList = document.querySelector("#email-list");
        while (emailList.lastChild) {
            emailList.removeChild(emailList.lastChild);
        }
        if (!localStorage.getItem("first-login")) {
            localStorage.setItem("first-login", Date.now());
        }
        for (const email of emails) {
            constructEmail(email.id, email.date, email.sender, email.subject, email.text);
        }
        if (Number(localStorage.getItem("first-login")) + 10000 >= Date.now()) {
            if (localStorage.getItem("date-mail-clicked")) {
                if (Number(localStorage.getItem("date-mail-clicked")) < Number(localStorage.getItem("first-login") + 10000)) {
                    constructAsync3();
                }
            }
            constructAsync1();
        } else {
            setTimeout(constructAsync1(), Date.now - (Number(localStorage.getItem("first-login")) + 10000))
        }
        if (Number(localStorage.getItem("first-login")) + 600000 >= Date.now()) {
            constructAsync2();
        } else {
            setTimeout(constructAsync2(), Date.now - (Number(localStorage.getItem("first-login")) + 600000))
        }
        if (localStorage.getItem("date-mail-clicked")) {
            if (!document.getElementById("async-email-click")) {
                constructAsync3();
            }
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
                constructEmail(asyncEmail3.id, asyncEmail3.date, asyncEmail3.sender, asyncEmail3.subject, asyncEmail3.text);
            };
        };
    };
}

// LOGOUT
// This function determines the result of clicking the logout button.
//Should reset subject header to blankspace, not clear.