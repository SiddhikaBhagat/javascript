const accountId=14454;
let email="siddhi@gmail.com"//it is modernly used
var accountPass="1234";//not used generally (it dosenot know the scope)not control over the scope
let accountstate;//undefined value
accountCity="Digras";

//accountId=1454; //not posible
email="si@gmail.com"
accountPass="123";
accountCity="Amravati";

console.log(email)
console.table([email,accountPass,accountCity,accountstate]);
/*
prefer not to used var
because of issue in block scope and functional scope
**use const and let only
*/