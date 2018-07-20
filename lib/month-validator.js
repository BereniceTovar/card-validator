"use strict";

var dateValidation = function dateValidation(numero) {
    var n1 = parseInt(numero);

    if (n1 <= 12 && n1 > 0 && typeof n1 !== "string") {
        console.log("this is correct");
        return true;
    } else {
        console.log("this is incorrect, you use a not allowed input");
        return false;
    }
};

if (typeof window !== "undefined") {
    window.dateValidation = dateValidation;
} else {
    module.exports = dateValidation;
}