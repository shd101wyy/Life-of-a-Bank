
/*
 * Init bank name
 */
 var bankname = null;
 do{
     bankname = prompt("Please enter your bank name", "Capital Two");
     if(!confirm("Are you sure you want your bank name to be " + bankname + "?")){
         bankname = null;
     }
 }
 while (bankname === null);

alert("Your bank is called " + bankname);
/*
 *   Player?
 *   attributes
 */
var Player = {
    money : 1000, 
    fame : 0,
    employees : 0, 
    branches : 1,
    progress : 0,
    bankName : bankname
}

//var branchList = [Branch()];

//console.log(Player.money);

/*
 *   hire employees
 *   invest
 *   build branches
 *   advertise
 */

/*
 *
 * the type could be:
 *      programmer
 *      accountant
 *      artist
 *      lawyer
 *
 */
var EmployeeType = {
    programmer : 0, // id
    accountant : 1, // id
    artist : 2,
    lawyer : 3
}
function Employee(type){
    this.type = type;
}







