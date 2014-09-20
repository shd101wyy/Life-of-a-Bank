
/*
 * Init bank name
 */
 var bankname = null;
 do{
     bankname = prompt("Please enter your bank name", "Capital Bank");
//   if(!confirm("Are you sure you want your bank name to be " + bankname + "?")){
//         bankname = null;
//     }
 }
 while (bankname === null);

//alert("Your bank is called " + bankname);
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
    bankName : bankname,
    month : 1,
    negativeMonths : 0
}

var investments = [];
var investmentsAvailable = [];
var advertisingPower = 0;
var advertisementsAvailable = [];
var branchList = [Branch()];

//console.log(Player.money);

/*
 *   hire employees
 *   invest
 *   build branches
 *   advertise
 */
 
function addBranch() {
    var newBranch = Branch();
    branchList[branchList.length] = newBranch;
}

function calculateFame () {
    
}

function nextMonth() {
    
}
