"use strict";

var validCvv = function validCvv(number) {
    var expreg = /^[0-9]{3}$/;
    if (expreg.test(number)) {
        console.log("Valid cvv");
        return true;
    } else {
        console.log("Invalid cvv");
        return false;
    }
};

validCvv();

module.exports = validCvv;