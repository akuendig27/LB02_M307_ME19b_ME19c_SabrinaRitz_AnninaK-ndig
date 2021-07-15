// Input error message
function showError(id, message) {
    return `${id}: ${message}`;
}

// Success outline
function showSuccess(id) {
    return `${id} successfully validated!`;
}

// E-Mail validation check
function checkEmail(id, input) {
    // Default is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Email is not valid')
        }
    }
    return result;
}

// Last name validation check
function checkLastname(id, input) {
    // Default is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = (/^[A-Za-z]+$/);
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Lastname is not valid')
        }
    }
    return result;
}

// Last name validation check
function checkFirstname(id, input) {
    // Default is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = (/^[A-Za-z]+$/);
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Firstname is not valid')
        }
    }
    return result;
}

// Phone validation check
function checkPhonenumber(id, input) {
    // Default is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^(?:(?:|0{1,2}|\+{0,2})41(?:|\(0\))|0)([1-9]\d)(\d{3})(\d{2})(\d{2})$/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Phonenumber is not valid')
        }
    }
    return result;
}

// Required fields check
function checkRequired(id, input) {
    // Default is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    // IF input is empty
    if (input.trim() === '') {
        result = {
            isNotValid: true,
            msg: showError(id, `${input.toString()} is required`)
        }
    }
    // Return result
    return result;
}

// Input length check
function checkLength(id, input, min, max) {
    // Default is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    if (input.length < min) {
        result = {
            isNotValid: true,
            msg: showError(id,
                `${id} must be at least ${min} characters`)
        }
    } else if (input.length > max) {
        result = {
            isNotValid: true,
            msg: showError(id,
                `${id} must be less than ${max} characters`)
        }
    }
    return result;
}

function checkPassword(id, input1, input2) {
    let passw1 = input1.trim();
    let passw2 = input2.trim();
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    // Return false if not same
    if (passw1 !== passw2) {
        result = {
            isNotValid: true,
            msg: showError(id, `passwords do not match`)
        }

    } else {
        result = {
            isNotValid: false,
            msg: showSuccess(id)
        }
    }
    return result;
}

module.exports = {
    checkEmail,
    checkLength,
    checkRequired,
    checkPhonenumber,
    checkPassword,
    checkFirstname,
    checkLastname,
}
