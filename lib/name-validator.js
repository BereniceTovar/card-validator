"use strict";

var nameValidator = function nameValidator(name) {
    var str = name;
    var reg = /^[a-zA-Z\s]*$/;
    console.log(name);

    console.log(reg.test(str));
    if (reg.test(str) === true) {
        console.log("nombre correcto");
        return true;
    } else {
        console.log("incorrecto");
        return false;
    }
};

if (typeof window !== "undefined") {
    window.nameValidator = nameValidator;
} else {
    module.exports = nameValidator;
}