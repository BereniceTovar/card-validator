const yearValidation = (numero) => {
    let today = new Date();
    // console.log("yo", e.target.value);
    
    let n1 = parseInt(numero);

    if ( typeof n1 !== "string" && n1 >= today.getYear()+1900 ){
        console.log("this is correct");
        return true;
    }else {
                console.log("this is incorrect,  your card expired ");
        return false;   
    } 
}

if(typeof window !== "undefined"){
    window.yearValidation = yearValidation;
}else{
    module.exports = yearValidation;
}