//app.js Validación de pruebas en html
//let validateCard = require("./validate-card");

document.getElementById('submit-btn').addEventListener('click',function(){

    const numberCardForm = document.getElementById('cn').value;
    const monthValidatorForm = document.getElementById('exp2').value;
    const yearValidationForm = document.getElementById('exp').value;
    const cvvForm = document.getElementById('cvv').value;
    const nameValidatorForm = document.getElementById('name').value;

    if(numberCardForm  && monthValidatorForm && yearValidationForm  && cvvForm && nameValidatorForm ){
        /*validateCard(numberCardForm);
        dateValidation(monthValidatorForm);
        validCvv(cvvForm);
        yearValidation(yearValidationForm);
        nameValidator(nameValidatorForm);*/

        if(validateCard(numberCardForm) && validCvv(cvvForm) && dateValidation(monthValidatorForm) && yearValidation(yearValidationForm) && nameValidator(nameValidatorForm)){
            swal("Valid card!", "Successful purchase!", "success");
        } else {
            swal("Invalid card!", "Try again");
        }
    } else {
        console.log('Invalid card, try again');
        swal("Invalid card!", "Try again");
    }

});
