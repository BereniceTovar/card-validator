const validCvv = (number) => {
    const expreg = /^[0-9]{3}$/;
    if(expreg.test(number)){
        console.log(`Valid cvv`);
    } else {
        console.log(`Invalid cvv`);
    }
}


validCvv('456');

module.exports = validateCvv;