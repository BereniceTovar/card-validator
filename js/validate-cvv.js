const validCvv = (number) => {
    const expreg = /^[0-9]{3}$/;
    if(expreg.test(number)){
        console.log(`Correct`);
    } else {
        console.log(`Incorrect`);
    }
}


validCvv('456');