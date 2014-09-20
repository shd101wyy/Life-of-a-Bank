/**
 * Constants for fame calculation
 */
var FAME_LEVELS = [0, 40];
var FAME_BRANCH_MULTIPLIER = 5;
var FAME_CUSTOMERS_MULTIPLIER = 1;
var FAME_ADVERTISING_MULTIPLIER = 1;

/**
 * Constants for progress calculation
 */
var PROGRESS_FAME_MULTIPLIER = 10;
var PROGRESS_BRANCH_MULTIPLIER = 10;
var PROGRESS_EMPLOYEE_MULTIPLIER = 1;

//console.log(Player.money);

/*
 *   hire employees
 *   invest
 *   build branches
 *   advertise
 */

/**
 * Initialization functions
 */

function initializeFameLevels () {
    var LEVEL_MULTIPLIER = 1.3;
    var MAX_LEVEL = 20;
    
    for (var i = 2; i <= MAX_LEVEL; i++) {
        FAME_LEVELS[i] = Math.round(FAME_LEVELS[i-1] * LEVEL_MULTIPLIER);
    }
}
function initializeBranchList () {
    branchList[0] = new Branch();
}
function init () {
    initializeFameLevels();
    initializeBranchList();
    
    calculateFame();
    calculateProgress();
    
    advertisementsAvailable = generateAdvertisements();
    investmentsAvailable = generateInvestments();
    employeesAvailable = generateEmployees();
}

/**
 * Branch functions
 */
function addBranch() {
    var newBranch = new Branch();
    branchList[branchList.length] = newBranch;
    Player.branches++;
}

/**
 * Investment functions
 */


/**
 * Advertisement functions
 */
function buyAdvertisement (advertisementToAdd) {
    
}

/**
 * Next month functions
 */
//calculate and updates Player's fame
function calculateFame () {
    var currentFameLevel = 0;
    
    //calculate fame exp
    var fameExp = 0;
    //add customers' value to fameExp
    for (var i = 0; i < branchList.length; i++) {
        var tempBranch = branchList[i];
        currentFameLevel += tempBranch.currentCustomers * FAME_CUSTOMERS_MULTIPLIER;
    }
    fameExp += branchList.length * FAME_BRANCH_MULTIPLIER;
    fameExp += Player.fameAdvertisingExp * FAME_ADVERTISING_MULTIPLIER;
    
    //determine which fame level 
    for (var i = 0; i < FAME_LEVELS.length; i++) {
        if (fameExp > FAME_LEVELS[i]) {
            currentFameLevel = i;
        }
    }
    
    Player.fame = currentFameLevel;
}

//calculate and updates Player's progress
function calculateProgress () {
    var progress = 0;
    
    for (var i = 0; i < branchList.length; i++) {
        var tempBranch = branchList[i];
        progress += tempBranch.employeeCount * PROGRESS_EMPLOYEE_MULTIPLIER;
    }
    
    progress += branchList.length * PROGRESS_BRANCH_MULTIPLIER;
    progress += Player.fame * PROGRESS_FAME_MULTIPLIER;
    
    Player.progress = progress;
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
     for (var i = 0; i < investmentsBought.length; i++) {
          var tempInvestment = investmentsBought[i];
          tempInvestment.updateInvestment();
     }
}

//delete completed investments. should be called after calculateIncome()
function deleteInvestments () {
    var i = 0;
    while (i < investmentsBought.length) {
        var tempInvestment = investmentsBought[i];
        if (tempInvestment.length === 0) {
            investmentsBought.splice(i, 1);
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
     for (var i = 0; i < investmentsBought.length; i++) {
          var tempInvestment = investmentsBought[i];
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

//generates and returns a new set of investments for the month
function generateInvestments() {
    var newInvestments = [];
    
    for (var i = 0; i < INVESTMENTS_PER_MONTH; i++) {
        newInvestments[i] = new Investment(Player.progress);
    }
    
    return newInvestments;
}

//generates and returns a new set of advertisements for the month
function generateAdvertisements() {
    var newAdvertisements = [];
    
    for (var i = 0; i < ADVERTISEMENTS_PER_MONTH; i++) {
        newAdvertisements[i] = new Advertisement(Player.progress);
    }
    
    return newAdvertisements;
}

//generate and returns a new set of employees for the month
function generateEmployees() {
    var newEmployees = [];
    
    for (var i = 0; i < EMPLOYEES_PER_MONTH / 2; i++) {
        newEmployees[i] = new Employee("sales", Player.progress);
    }
    
    for (var i = EMPLOYEES_PER_MONTH / 2; i < EMPLOYEES_PER_MONTH; i++) {
        newEmployees[i] = new Employee("teller", Player.progress);
    }
    
    return newEmployees;
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
     console.log(Player.money);
    Player.money += calculateIncome();
    Player.money -= calculateExpenditure();
    
    /**
     * Delete completed investments, reset advertisingPower
     */
    deleteInvestments();
    advertisingPower = 0;
    
    /**
     * Delete and generate new investmentsAvailable, advertisementsAvailable, employeesAvailable
     */
    investmentsAvailable = generateInvestments();
    advertisementsAvailable = generateAdvertisements();
    employeesAvailable = generateEmployees();
    
    /**
     * Check if Player.money is negative
     */
    var losingCondition = Player.progress * -200;
    if (Player.money < losingCondition) {
        alert(Player.bankName + " is now bankrupt! D:");
    }
    else if (Player.money < 0 && Player.money > losingCondition) {
        Player.negativeMonths++;
        alert((6 - Player.negativeMonths) + "months till bankruptcy! ):");
    }
    else {
        Player.negativeMonths = 0;
    }
    
    /**
     * Update month, fame, progress
     */
    Player.month++;
    calculateFame();
    calculateProgress();
}




/**
 * Actual code to run
 */
init();