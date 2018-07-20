const yearValidation = (numero) => {
    let today = new Date();
    // console.log("yo", e.target.value);
    
    let n1 = numero;
    

    if ( typeof numero !== "string" && n1 >= today.getYear()+1900 ){
        console.log("this is correct");
        return true;
    }else {
                console.log("this is incorrect,  your card expired ");
        return false;
        
    }
    
}


yearValidation();

module.exports = yearValidation;