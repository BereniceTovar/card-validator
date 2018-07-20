const validCvv = (number) => {
    const expreg = /^[0-9]{3}$/;
    if(expreg.test(number)){
        console.log(`Valid cvv`);
        return true;
    } else {
        console.log(`Invalid cvv`);
        return false;
    }
}


validCvv();

module.exports = validCvv;