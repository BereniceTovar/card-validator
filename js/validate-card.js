'use strict';

const validateCard = function (num) {
    let numCreditCardReverse = (num.split('')).reverse();
    let pairNumbers = [];

    numCreditCardReverse.forEach((element, index) => {
        if (index % 2 !== 0) {
            let multiplication = element * 2;
            if (multiplication >= 10) {
                let sum = 0;

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

    let numberToValidate = 0;
    pairNumbers.forEach(element => {
        numberToValidate += element;
    });
    if (numberToValidate % 10 === 0) {
        return console.log("Valid card");
    } else {
        return console.log("Invalid card");
    }
}

let number = "";

const expreg = /^[0-9]{16}$/;
    if(expreg.test(number)){
        validateCard(number);
    } else {
        console.log(`Invalid card, try again`);
    }