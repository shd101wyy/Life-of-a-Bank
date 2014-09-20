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
    bankName : 
}

var branchList = [Branch()];

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







