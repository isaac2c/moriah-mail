// DATA STRUCTURES
// These data structures contain information used to construct the emails displayed in Stephen's inbox.

emails = [
    {
        "id": "email-1",
        "date": "new Date(Number(localStorage.getItem(\"first-login\")) - 83880000)",
        "sender": "noreply@thedatingservice.email",
        "subject": "Keep looking for love!",
        "text": "Dear Stephen,<br><br>The best things in life are worth waiting for.  You never know what's round the corner..."
    },
    {
        "id": "email-2",
        "date": "new Date(Number(localStorage.getItem(\"first-login\")) - 86400000)",
        "sender": "estherabigailolsen@edifyingmail.com",
        "subject": "I'm sorry",
        "text": "Stephen,<br><br>I’m sorry for what happened.  I’m sorry to have put you through that.  I’m thankful that you were \
        there.<br><br>I know that you blame them.  I know that you don’t approve of the company I keep, that you think them my captors \
        – a corrupting influence that imperils my mortal soul.<br><br>I need you to know that you are wrong.<br><br>I would call them \
        my liberators, but they only showed me the latent potential for realising my own freedom.  We don’t simply pursue pleasure; we \
        revel and mourn in the pursuit of communal sensation.  They are a family and you, above all others, ought to know why that \
        matters to me.<br><br>I do not begrudge you your church; I ask only that you permit me mine.<br><br>I really do love you, you \
        know.  Call me sometime.<br><br>Abigail<br><br>PS. I know what you mean about feeling like someone’s following you.  I had the \
        same sensation in the hospital, but I blamed it on the drugs."
    },
    {
        "id": "email-3",
        "date": "new Date(Number(localStorage.getItem(\"first-login\")) - 86400000)",
        "sender": "noreply@thedatingservice.email",
        "subject": "You're getting attention...",
        "text": "Dear Stephen,<br><br>User: John1987 has viewed your profile.<br>Login to the app to see your matches."
    },
    {
        "id": "email-4",
        "date": "new Date(Number(localStorage.getItem(\"first-login\")) - 86400000)",
        "sender": "noreply@thedatingservice.email",
        "subject": "You're getting attention...",
        "text": "Dear Stephen,<br><br>User: admin@constantinslibrary.com has viewed your profile.<br>Login to the app to see your matches."
    },
    {
        "id": "email-5",
        "date": "new Date(Number(localStorage.getItem(\"first-login\")) - 86400000)",
        "sender": "princegerald@honest.email",
        "subject": "For your immediate attention",
        "text": "Dear sir,<br>I am a prince, wrongfully detained by a rival country.  Please send 500euro to secure my release and I will \
        share my wealth with you.  I anticipate your response.<br><br>Yours sincerely,<br>Prince Gerald"
    },
    {
        "id": "email-6",
        "date": "new Date(Number(localStorage.getItem(\"first-login\")) - 86400000)",
        "sender": "noreply@thedatingservice.email",
        "subject": "You're getting attention...",
        "text": "Dear Stephen,<br><br>User: BigRob has viewed your profile.<br>Login to the app to see your matches."
    }
];
asyncEmail1 = {
    "id": "async-email-1",
    "date": "new Date(Number(localStorage.getItem(\"first-login\")) + 10000)",
    "sender": "noreply@edifyingmail.com",
    "subject": "New login detected",
    "text": "A new device has signed into your account.<br><br>If this was not you, please immediately change your password and take \
    steps to secure your account.<br>If this was you, you may safely disregard this email.<br><br>Thank you for using Edifying Mail!"
};
asyncEmail2 = {
    "id": "async-email-2",
    "date": "new Date(Number(localStorage.getItem(\"first-login\")) + 600000)",
    "sender": "noreply@churchofourlady.email",
    "subject": "A Letter from Fr Jacob",
    "text": "Dear Parishoners,<br><br>Please find attached a letter from Fr Jacob concerning his recent absence.<br><br><b>Attachments:<\/b>\
    <br><a href=\"\/uploaded-resources\/letter_from_fr_jacob.pdf\" download=\"letter_from_fr_jacob\">letter_from_fr_jacob.pdf<\/a>"
};
asyncEmail3 = {
    "id": "async-email-click",
    "date": "new Date(Number(localStorage.getItem(\"date-mail-clicked\")))",
    "sender": "noreply@edifyingmail.com",
    "subject": "An Edifying Discourse",
    "text": "All observation is not only a receiving, a discovery, but also a creation, and in so far as it is that, the crucial thing is \
    what the observer himself is… for all things spiritual are appropriated only in freedom; but what is appropriated in freedom must \
    also be produced in freedom.<br>-Søren Kierkegaard, <cite>Edifying Discourses<\/cite>, p. 56"
};

// EARLY DECLARATIONS
// These are variables used elsewhere that must be declared early.

indirectEval = eval;
const emailList = document.querySelector("#email-list");

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
// These functions produce the emails displayed in the inbox.

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
    if (document.getElementById("async-email-1")) {
        emailList.insertBefore(document.getElementById("async-email-1"), emailList.firstChild);
    }
};
function constructAsync2() {
    constructEmail(asyncEmail2.id, asyncEmail2.date, asyncEmail2.sender, asyncEmail2.subject, asyncEmail2.text);
    if (document.getElementById("async-email-2")) {
        emailList.insertBefore(document.getElementById("async-email-2"), emailList.firstChild);
    }
};
function constructAsync3() {
    constructEmail(asyncEmail3.id, asyncEmail3.date, asyncEmail3.sender, asyncEmail3.subject, asyncEmail3.text);
    if (document.getElementById("async-email-click")) {
        emailList.insertBefore(document.getElementById("async-email-click"), emailList.firstChild);
    }
};

// MEMORABLE INFORMATION
// This function determines the result of user interaction with the memorable information link.

document.getElementById("forgot-link").onclick = function() {
    if (loginForm[0].value == "stephen.malling@edifyingmail.com") {
        document.getElementById("password-container").innerHTML = "Memorable information: \
    <input id=\"mem-info\" type=\"password\" name=\"mem-info\" required><\/input>";
        document.getElementById("form-paragraph").innerText = "Hint: Mother's maiden name";
    } else {
        if (loginForm[0].value == "estherabigailolsen@edifyingmail.com") {
            document.getElementById("password-container").innerHTML = "Memorable information: \
        <input id=\"mem-info\" type=\"password\" name=\"mem-info\" required><\/input>";
            document.getElementById("form-paragraph").innerText = "Hint: First pet";
        } else {
            alert("Please check username.")
        }
    }
};

// LOGIN FORM
// This code determines the result of user interaction with the login form element.

loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", nonSubmit);
function nonSubmit(event) {
    event.preventDefault(event);
    if (loginForm[0].value == "stephen.malling@edifyingmail.com") {
        if (document.getElementById("mem-info")) {
            if (loginForm[1].value == "Olsen") {
                document.querySelector("#user-id-1").innerText = "Stephen";
                document.querySelector("#user-id-2").innerText = "Stephen";
                if (!localStorage.getItem("first-login")) {
                    localStorage.setItem("first-login", Date.now());
                }
                for (const email of emails) {
                    constructEmail(email.id, email.date, email.sender, email.subject, email.text);
                }
                if (Number(localStorage.getItem("first-login")) + 10000 <= Date.now()) {
                    if (localStorage.getItem("date-mail-clicked")) {
                        if (Number(localStorage.getItem("date-mail-clicked")) < Number(localStorage.getItem("first-login")) + 10000) {
                            constructAsync3();
                        }
                    }
                    constructAsync1();
                } else {
                    asyncTimeout1 = setTimeout(constructAsync1, (Number(localStorage.getItem("first-login")) + 10000) - Date.now());
                }
                if (Number(localStorage.getItem("first-login")) + 600000 <= Date.now()) {
                    if (localStorage.getItem("date-mail-clicked")) {
                        if (!document.getElementById("async-email-click")) {
                            if (Number(localStorage.getItem("date-mail-clicked")) < Number(localStorage.getItem("first-login")) + 600000) {
                                constructAsync3();
                            }
                        }
                    }
                    constructAsync2();
                } else {
                    asyncTimeout2 = setTimeout(constructAsync2, (Number(localStorage.getItem("first-login")) + 600000) - Date.now());
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
                loginForm[1].value = "";
            } else { alert("Please check credentials.");

            }
        } else { alert("Please check credentials.");

        }
    } else { alert("Please check credentials.");

    }
};

// CHANGING HEADER
// This code determines the result of user interaction with the word "Mail", as it appears in the page header.

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
                constructAsync3();
            };
        };
    };
}

// LOGOUT
// This function determines the result of user interaction with the logout button.

document.getElementById("logout").onclick = function() {
    login = false;
    modalDialog.showModal();
    document.getElementById("subject-header").innerHTML = "&nbsp";
    document.getElementById("display-sender").innerText = "";
    document.getElementById("display-text").innerText = "";
    document.querySelector("#user-id-1").innerText = "";
    document.querySelector("#user-id-2").innerText = "";
    while (emailList.lastChild) {
        emailList.removeChild(emailList.lastChild);
    }
    if (asyncTimeout1) {
        clearTimeout(asyncTimeout1);
    }
    if (asyncTimeout2) {
        clearTimeout(asyncTimeout2);
    }
}