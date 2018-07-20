"use strict";

var nameValidator = function nameValidator(name) {
    var str = name;
    var reg = /^[a-zA-Z\s]+$/;

    if (reg.test(str) === true) {
        console.log("nombre correcto");
        return true;
    } else {
        console.log("incorrecto");
        return false;
    }
};

nameValidator();

module.exports = nameValidator;