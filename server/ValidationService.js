// Input elements validation
const validateLib = require('./ValidationLib');

/*
 * Validate User
 * @param userObj
 * @returns {boolean|{msg: string, isNotValid: boolean}|{isNotValid}|*}
 */

// Required fields check
function validateUser(userObj) {

    // Username check
    let result = validateLib.checkRequired("username", userObj.username);
    if (result.isNotValid) {
        return result;
    }

    // Username email
    result = validateLib.checkRequired("email", userObj.email);
    if (result.isNotValid) {
        return result;
    }

    // Password check
    result = validateLib.checkRequired("password", userObj.password);
    if (result.isNotValid) {
        return result;
    }

    // Phone number check
    result = validateLib.checkRequired("phonenumber", userObj.phonenumber);
    if (result.isNotValid) {
        return result;
    }

    // First name check
    result = validateLib.checkRequired("firstname", userObj.firstname);
    if (result.isNotValid) {
        return result;
    }

    // Last name check
    result = validateLib.checkRequired("lastname", userObj.lastname);
    if (result.isNotValid) {
        return result;
    }

    // Password check
    result = validateLib.checkRequired("password", userObj.password);
    if (result.isNotValid) {
        return result;
    }

    result = validateLib.checkRequired("second password", userObj.password2);
    if (result.isNotValid) {
        return result;
    }

    // Length check
    result = validateLib.checkLength("username", userObj.username, 3, 15);
    if (result.isNotValid) {
        return result;
    }

    result = validateLib.checkLength("password", userObj.password, 6, 25);
    if (result.isNotValid) {
        return result;
    }

    // E-Mail syntax check
    result = validateLib.checkEmail("email", userObj.email);
    if (result.isNotValid) {
        return result;
    }

    // Phone number check
    result = validateLib.checkPhonenumber("phonenumber", userObj.phonenumber);
    if (result.isNotValid) {
        return result;
    }

    // Password check
    result = validateLib.checkPassword("password", userObj.password, userObj.password2);
    if (result.isNotValid) {
        return result;
    }

    // Lastname check
    result = validateLib.checkLastname("lastname", userObj.lastname);
    if (result.isNotValid) {
        return result;
    }

    // First name check
    result = validateLib.checkFirstname("firstname", userObj.firstname);
    if (result.isNotValid) {
        return result;
    }

    // All inputs are valid
    return false;
}

// User validation
module.exports = {
    validateUser
}
