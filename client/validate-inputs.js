// Selectors
const form = document.getElementById('form');
const phonenumber = document.getElementById('phonenumber');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const checkbox = document.getElementById('checkbox');

// Input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Email validation check
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'E-Mail is not valid');
    }
}

// Phone validation check
function checkPhone(input) {
    const re = /^(?:(?:|0{1,2}|\+{0,2})41(?:|\(0\))|0)([1-9]\d)(\d{3})(\d{2})(\d{2})$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Phone number is not valid');
    }
}

// Last name validation check
function checkLastname(input) {
    const re = (/^[A-Za-z]+$/);
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Last name is not valid');
    }
}

// First name validation check 
function checkFirstname(input) {
    const re = (/^[A-Za-z]+$/);
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'First name is not valid');
    }
}

// Required fields check
function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
            isRequired = true;
        } else {
            showSuccess(input);
        }
    });

    return isRequired;
}

// Input length check
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} must be at least ${min} characters`
        );
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        );
    } else {
        showSuccess(input);
    }
}

function checkPassword(input1, input2) {
    let passw1 = input1.value.trim();
    let passw2 = input2.value.trim();

    console.log(`${passw1}, ${passw2}`);

    // Return false if not same 
    if (passw1 !== passw2) {
        showError(
            input2,
            `${getFieldName(input2)} must be a matching Password`
        );

    } else {
        showSuccess(input1);
        showSuccess(input2);
    }
}

// Get field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function validateForm() {
    if (!checkRequired([username, email, password, firstname, lastname, phonenumber, password2])) {
        checkLength(username, 3, 15);
        checkLength(password, 6, 25);
        checkLength(firstname, 2, 20);
        checkLength(lastname, 2, 50);
        checkPhone(phonenumber);
        checkEmail(email);
        checkPassword(password, password2);
        checkFirstname(firstname);
        checkLastname(lastname);
    }
}

// Uncheck
document.getElementById("checkbox").checked = false;

var button = document.getElementById("mySubmit")
button.disabled = true;

if (document.getElementById("checkbox").checked = true) {
    button.disabled = false;
}

// Event listeners
form.addEventListener('submit', function (e) {
    // https://www.w3schools.com/jsref/event_preventdefault.asp
    e.preventDefault();

    // Validate form
    validateForm();
});
 

