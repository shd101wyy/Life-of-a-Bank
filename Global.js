/*
 * Init bank name
 */
 var BANK_NAME_MAX_LENGTH = 11;
 
 var bankname = null;
 do{
     bankname = prompt("Please enter your bank name", "Capital One");
//   if(!confirm("Are you sure you want your bank name to be " + bankname + "?")){
//         bankname = null;
//     }
     
     if (bankname.length > BANK_NAME_MAX_LENGTH) {
          alert("Name length cannot exceed " + BANK_NAME_MAX_LENGTH);
     }
 }
 while (bankname === null || bankname.length > BANK_NAME_MAX_LENGTH);

//alert("Your bank is called " + bankname);
/*
 *   Player?
 *   attributes
 */
var Player = {
    money : 1000, 
    fame : 0,
    fameAdvertisingExp : 0,
    employees : 0, 
    branches : 1,
    progress : 0,
    bankName : bankname,
    month : 1,
    negativeMonths : 0
}

var investmentsBought = [];
var investmentsAvailable = [];
var advertisingPower = 0;
var advertisementsAvailable = [];
var employeesAvailable = [];
var branchList = [];

var INVESTMENTS_PER_MONTH = 4;
var ADVERTISEMENTS_PER_MONTH = 4;
var EMPLOYEES_PER_MONTH = 4;