'use strict';

var validateCard = function validateCard(num) {
    var numCreditCardReverse = num.split('').reverse();
    var pairNumbers = [];

    numCreditCardReverse.forEach(function (element, index) {
        if (index % 2 !== 0) {
            var multiplication = element * 2;
            if (multiplication >= 10) {
                var sum = 0;

                while (multiplication) {
                    sum += multiplication % 10;
                    multiplication = Math.floor(multiplication / 10);
                }
                pairNumbers.push(sum);
            } else {
                pairNumbers.push(multiplication);
            }
        } else {
            pairNumbers.push(parseInt(element));
        }
    });

    var numberToValidate = 0;
    pairNumbers.forEach(function (element) {
        numberToValidate += element;
    });
    if (numberToValidate % 10 === 0) {
        console.log("Valid card");
        return true;
    } else {
        console.log("Invalid card");
        return false;
    }
};

var number = "";

var expreg = /^[0-9]{16}$/;
if (expreg.test(number)) {
    validateCard(number);
} else {
    console.log('Invalid card, try again');
}

module.exports = validateCard;