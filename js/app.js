//app.js Validación de pruebas en html
//let validateCard = require("./validate-card");

document.getElementById('submit-btn').addEventListener('click',function(){
    alert('Funciona :D');
    const numberCard = document.getElementById('cn').value;
    console.log(numberCard);
    const monthValidator = document.getElementById('exp2').value;
    console.log(monthValidator);
    const yearValidation = document.getElementById('exp').value;
    console.log(yearValidation);
    const validCvv = document.getElementById('cvv').value;
    console.log(validCvv);
    const nameValidator = document.getElementById('name').value;
    console.log(nameValidator );

    const expreg = /^[0-9]{16}$/;
    if(expreg.test(numberCard) && monthValidator == true && yearValidation == true && validCvv == true){
        validateCard(numberCard);
        yearValidation(yearValidation);
        dateValidation(monthValidator);
        validCvv(validCvv);
        nameValidator(nameValidator);
    } else {
        console.log(`Invalid card, try again`);
    }

});