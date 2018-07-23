# Valida datos de tarjetas de crédito

* **Track:** _Common Core_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Producto final_

***

# CCVal
##  Credit card  Validator 

###  Installation 

Use de next code in your terminal to install
```
$npm install --save ccval 
```

### Usage
**Js**
The next tamplate can be use to call this library in your Js 
```javascript
const ccVal = require('./app.js');
```

This validation can be use in your code calling the each of our  elements by an  id.

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




 ### Browser

Include it in your HTML:

<script src="node_modules/card-validator/js/app.js"></script>

### Authors

Berenice Tovar & Sarahi Ruiz Lopez
