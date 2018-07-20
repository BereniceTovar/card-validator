//app.js Validación de pruebas en html
//let validateCard = require("./validate-card");

const numberCard = document.getElementById('cn').value;
console.log(numberCard);


document.getElementById('submit-btn').addEventListener('click',function(){
    alert('Funciona :D');
});

const formValid = (numberCard) => {
    const expreg = /^[0-9]{16}$/;
    if(expreg.test(numberCard)){
        validateCard(numberCard);
    } else {
        console.log(`Invalid card, try again`);
    }
}