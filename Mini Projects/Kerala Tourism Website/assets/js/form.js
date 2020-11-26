let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password = document.getElementById("password");



function validateSignup() {

    let nameCheck = /^[a-zA-Z ]{2,15}$/;
    let emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let phoneCheck = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if(nameCheck.test(name.value)==false) {
        name_error.innerHTML = "Please enter a valid name!";
        return false;
    }

    else if(emailCheck.test(email.value)==false) {
        email_error.innerHTML = "Please enter a valid email!";
        return false;
    }

    else if(phoneCheck.test(phone.value)==false) {
        phone_error.innerHTML = "Please enter a valid phone number!";
        return false;
    }

    else if(passwordCheck.test(password.value)==false) {
        password_error.innerHTML = "Password must contain minimum 8 characters, at least one uppercase, one lower case, one special character and one number";
        password_error.style.color = "red";
        return false;
    }

    else {
        return true;
    }
}

function passwordChanged() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var pwd = document.getElementById("password");
    if (pwd.value.length == 0) {
        strength.innerHTML = '';
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green">Strong!</span>';
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange">Medium!</span>';
    } else {
        strength.innerHTML = '<span style="color:red">Weak!</span>';
    }
}


function validateLogin() {

    let emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if(emailCheck.test(email.value)==false) {
        email_error.innerHTML = "Please enter a valid email!";
        return false;
    }

    else if(passwordCheck.test(password.value)==false) {
        password_error.innerHTML = "Password must contain minimum 8 characters, at least one uppercase, one lower case, one special character and one number";
        password_error.style.color = "red";
        return false;
    }

    else {
        return true;
    }
}