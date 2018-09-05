# CCVal - Credit Card  Validator 
CCval  is a validator, that uses luhn's algorithm for the validation of credit Cards, you need to have this in mind, *if you don't have a DataBase with names, expiration dates and CVV,  this will just validate the correct input of the information*, as  just numbers when you need it and  the same with the alphabet with the users name. 

Here you will find 5 modules, everyone have his own functionality and can be used   separately so, use them as you need. 

![ccval-preview](https://user-images.githubusercontent.com/35509785/45061512-6c9c3a80-b06a-11e8-9070-fb8fcb35825f.png)

## Desarrollado para 
[Laboratoria](http://laboratoria.la)


###  Installation 

Use de next code in your terminal to install
```
$npm install --save ccval 
```

### Usage

**Js**
The next tamplate can be use to call this library in your Js 
```javascript

if(validateCard(numberCardForm) && validCvv(cvvForm) && dateValidation(monthValidatorForm) && yearValidation(yearValidationForm) && nameValidator(nameValidatorForm)){

alert("Valid card!", "Successful purchase!", "success");

} else {

alert("Invalid card!", "Try again");

};
```

This validation can be use in your code calling the each of our  elements by an  id.

### Browser

Include it in your HTML:
```html
//Card Validator
<script src="node_modules/ccval/lib/validate-cvv.js"></script>

//Name Validator
<script src="node_modules/ccval/lib/nameValidator.js"></script>

//CVV  Validator
<script src="node_modules/ccval/lib/validCvv"></script>

//Month Validator
<script src="node_modules/ccval/lib/dateValidation"></script>

//Year Validator
<script src="node_modules/ccval/lib/yearValidation"></script>
```

##### Example HTML

***Html***
**cn  = Card Number**
```html
<label for="cn" class="col-form-label">Card number</label>

<input id="cn" name="cn" class="form-control" placeholder="16 digits"/>

```
***Expiration Month***
**Expiration month** *you need to take something in mind with this validation, it only validates month, and 2 digits 01 - 12*
```html
<label for="exp" class="col-form-label">Expires</label>

<input id="exp2" name="exp" class="form-control" placeholder="MM" />

```
***Expiration Year***
**Expiration year** this validation takes 4 digits, and never a year before the actual one 
```html
<input id="exp" name="exp" class="form-control" placeholder="YYYY" />

```
***CVV***

```html

<label for="cvv" class="col-form-label">CVV</label>

<input id="cvv" name="cvv" class="form-control" placeholder="3 digits"/>
```
**Name Validation**

```html
<label for="name">Cardholder name</label>



<input id="name" name="name" class="form-control" placeholder="Full Name"/>

```

## Demo

_Main page_

![Desktop](assets/images/demo1.png)
![Desktop](assets/images/demo2.png)
![Desktop](assets/images/demo3.png)
![Desktop](assets/images/demo4.png)
![Desktop](assets/images/demo5.png)

_After 'Show me more'_

![Desktop](assets/images/demo6.png)
![Desktop](assets/images/demo7.png)

_After 'Pre-order now!'_ 

![Desktop](assets/images/demo8.png)

### Authors

Berenice Tovar & Sarahi Ruiz Lopez