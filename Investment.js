/*
 *  Class for Investment
 */
function Investment (progress){
    //TODO high risk vs low risk
    
    var AMOUNT_MULTIPLIER = 100;
    var LENGTH_MULTIPLIER = 7;
    
    //a number between 0.5 and 1. the chance of success of the investment
    this.risk = (Math.random() * 0.5 + 0.5).toFixed(2);
    
    this.roi = 1 / this.risk;
    
    this.length = Math.round((this.roi * LENGTH_MULTIPLIER));
    
    this.amount = progress * AMOUNT_MULTIPLIER;
    
    this.updateInvestment = function() {
        this.length -= 1;
    };
    
    this.getIncome = function () {
        //check if investment has matured
        if (this.length === 0) {
            //check if investment was successful
            var success = Math.random() + this.risk;
            if (success > 1) {
                return this.amount * this.roi;
            }
            else {
                //investment failed
                return this.amount - (this.roi - 0.8) * this.amount;
            }
        }
        else {
            return 0;
        }
    };
    
    this.clickBuy = function(){
        investmentsBought[investmentsBought.length] = this;
        Player.money -= this.amount;
        
        for (var i = 0; i < investmentsAvailable; i++) {
            var indexToDelete;
            if (this === investmentsAvailable[i]) {
                indexToDelete = i;
            }
        }
        
        investmentsAvailable.splice(indexToDelete, 1);
    };
}