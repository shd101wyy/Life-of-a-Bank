/*
 * Class to calculate profit or loss
 */
 
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
 
function calculateExpenditure() {
      
     var branchExpenditure = 0;
      
     //getexpenditure from branches
     for (var i = 0; i < branchList.length; i++) {
          var tempBranch = branchList[i];
          branchExpenditure += tempBranch.getExpenditure();
     }
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

//calculate all profit/loss
function getProfit() {
    var totalProfit = 0;
    updateInvestments();
    updateBranches(adve);
    totalProfit = totalProfit + calculateIncome() - calculateExpenditure();
    
    return totalProfit;
}