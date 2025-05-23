let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});


function validateLogin() {

    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const rememberme = document.getElementById("rememberme").checked;

    const emailErr = document.getElementById("email-error");
    const passwordErr = document.getElementById("password-error");
    const remembermeErr = document.getElementById("rememberme-error");


    emailErr.textContent = "";
    passwordErr.textContent = "";
    remembermeErr.textContent = "";

    let isValid = true;

    if (email === "" || !email.includes("@") || !email.includes(".")) {
        emailErr.textContent = "Please enter a valid email address.";
        isValid = false;
    }
    if (password === "" || password.length < 6) {
        passwordErr.textContent = "Please enter a password with at least 6 characters.";
        isValid = false;
    }

    const emailRegex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;
    if (!emailRegex.test(email)) {
        document.getElementById("email-error").textContent =
            "Invalid email address.";
        isValid = false;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{6,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById("password-error").textContent =
            "Password must have atleast 6 characters, 1 uppercase, 1 number, 1 special character";
        isValid = false;
    }

    if (isValid) {
        return true;
    } else {
        return false;
    }
}

function resetErrors() {

    document.getElementById("email-error").textContent = "";
    document.getElementById("password-error").textContent = "";
    document.getElementById("rememberme-error").textContent = "";
}

function validateRegistration() {
    const fName = document.getElementById("firstName").value;
    const lName = document.getElementById("lastName").value;
    const user = document.getElementById("username").value;
    const email = document.getElementById("regemail").value;
    const pass = document.getElementById("regpassword").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;

    let isValid = true;

    document.getElementById("firstName-error").textContent = "";
    document.getElementById("lastName-error").textContent = "";
    document.getElementById("username-error").textContent = "";
    document.getElementById("regemail-error").textContent = "";
    document.getElementById("regpassword-error").textContent = "";
    document.getElementById("phone-error").textContent = "";
    document.getElementById("dob-error").textContent = "";

    const nameRegex = /^[a-zA-Z]{1,30}$/;
    if (!nameRegex.test(fName)) {
        document.getElementById("firstName-error").textContent =
            "First name must be 1-30 letters.";
        isValid = false;
    }
    if (!nameRegex.test(lName)) {
        document.getElementById("lastName-error").textContent =
            "Last name must be 1-30 letters.";
        isValid = false;
    }
    const userRegex = /^[a-zA-Z0-9_]{3,15}$/;
    if (!userRegex.test(user)) {
        document.getElementById("username-error").textContent =
            "Username must be 3-15 chars (letters, numbers, underscores).";
        isValid = false;
    }
    const emailRegex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;
    if (!emailRegex.test(email)) {
        document.getElementById("regemail-error").textContent =
            "Invalid email address.";
        isValid = false;
    }
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{6,}$/;
    if (!passRegex.test(pass)) {
        document.getElementById("regpassword-error").textContent =
            "Password must have minimum 6 characters, 1 uppercase, 1 number, 1 special character";
        isValid = false;
    }
    const phoneRegex = /^[0][0-9]{9}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById("phone-error").textContent =
            "Phone must be 10 digits, starting with 0.";
        isValid = false;
    }
    const today = new Date();
    const bDate = new Date(dob);
    const age = today.getFullYear() - bDate.getFullYear();
    const month = today.getMonth() - bDate.getMonth();
    if (age < 18 || (age === 18 && month < 0)) {
        document.getElementById("dob-error").textContent =
            "You must be at least 18 years old.";
        isValid = false;
    }




    if (isValid) {
        return true;
    } else {
        return false;
    }
}


const loginBtn = document.getElementById("btn-login");
loginBtn.addEventListener("click", function (e) {
    // e.preventDefault();

    var loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        var resp = validateLogin();
        if (resp == true) {

            var formData = new FormData(loginForm);
            var formObject = Object.fromEntries(formData.entries());
            alert(JSON.stringify(formObject));
        }

    });


});


const registerBtn = document.getElementById("btn-register");
registerBtn.addEventListener("click", function (e) {
    //   e.preventDefault();

    var registerForm = document.getElementById("registerForm");
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var resp = validateRegistration();
        if (resp == true) {
            var formData = new FormData(registerForm);
            var formObject = Object.fromEntries(formData.entries());
            alert(JSON.stringify(formObject));
        }
    });

});


