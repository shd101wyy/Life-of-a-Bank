
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
    fameAdvertisingExp : 0,
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

var FAME_LEVELS = [0, 10]

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

/**
 * initialize the FAME_LEVELS array
 * run at the start of the game, during initialization
 */
function initializeFameLevels () {
    var LEVEL_MULTIPLIER = 1.3;
    var MAX_LEVEL = 20;
    
    for (var i = 2; i <= MAX_LEVEL; i++) {
        FAME_LEVELS[i] = Math.round(FAME_LEVELS[i-1] * LEVEL_MULTIPLIER);
    }
}

//calculate and updates Player's fame
function calculateFame () {
    var BRANCH_MULTIPLIER = 5;
    var CUSTOMERS_MULTIPLIER = 1;
    
    var currentFameLevel = 0;
    
    
    //calculate fame exp
    var fameExp = 0;
    //add customers' value to fameExp
    for (var i = 0; i < branchList.length; i++) {
        var tempBranch = branchList[i];
        currentFameLevel += tempBranch.currentCustomers * CUSTOMERS_MULTIPLIER;
    }
    fameExp += branchList.length * BRANCH_MULTIPLIER;
    fameExp += Player.fameAdvertisingExp;
    
    for (var i = 0; i < FAME_LEVELS.length; i++) {
        if (fameExp > FAME_LEVELS[i]) {
            currentFameLevel = i;
        }
    }
    
    Player.fame = currentFameLevel;
}

//update the branches' stats. should be called before calculateIncome()
function updateBranches (advertisingMultiplier) {
     for (var i = 0; i < branchList.length; i++) {
          var tempBranch = branchList[i];
          tempBranch.updateBranch(advertisingMultiplier);
     }
}

//update the investments. should be called before calculateIncome()
function updateInvestments () {
     for (var i = 0; i < investments.length; i++) {
          var tempInvestment = investments[i];
          tempInvestment.updateInvestment();
     }
}

//delete completed investments. should be called after calculateIncome()
function deleteInvestments () {
    var i = 0;
    while (i < investments.length) {
        var tempInvestment = investments[i];
        if (tempInvestment.length === 0) {
            investments.splice(i, 1);
        }
        else {
            i++;
        }
    }
}

//calculate income for the month
function calculateIncome() {

     var investmentIncome = 0;
     var branchIncome = 0;
     
     //get income from investment
     for (var i = 0; i < investments.length; i++) {
          var tempInvestment = investments[i];
          investmentIncome += tempInvestment.getIncome();
     }
     
     //get income from branches
     for (var i = 0; i < branchList.length; i++) {
          var tempBranch = branchList[i];
          branchIncome += tempBranch.getIncome();
     }
     
     return investmentIncome + branchIncome;
}

//calculate expenditure for the month
function calculateExpenditure() {
      
     var branchExpenditure = 0;
      
     //getexpenditure from branches
     for (var i = 0; i < branchList.length; i++) {
          var tempBranch = branchList[i];
          branchExpenditure += tempBranch.getExpenditure();
     }
}

function nextMonth() {
    /**
     * Update branches and investments
     */
     updateBranches(advertisingPower + 1);
     updateInvestments();
     
    /**
     * Update Player.money based on income and expenditure
     */
    Player.money += calculateIncome();
    Player.money -= calculateExpenditure();
    
    /**
     * Delete completed investments, reset advertisingPower
     */
    deleteInvestments();
    advertisingPower = 0;
    
    /**
     * Delete and generate new investmentsAvailable and advertisementsAvailable
     */
}
