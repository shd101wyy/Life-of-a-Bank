/*
 *  Class for Investment
 */
function Investment (progress){
    //TODO high risk vs low risk
    
    var AMOUNT_MULTIPLIER = 100;
    var LENGTH_MULTIPLIER = 4;
    var AMOUNT_VARIANCE = 0.3
    
    //a number between 0.5 and 1. the chance of success of the investment
    this.risk = (Math.random() ).toFixed(2);
    
    this.roi = (1 / this.risk).toFixed(2);
    
    this.length = Math.round((this.roi * LENGTH_MULTIPLIER));
    
    var variance = AMOUNT_VARIANCE - Math.random() * AMOUNT_VARIANCE * 2
    
    this.amount = progress * AMOUNT_MULTIPLIER;
    this.amount = Math.round(this.amount + this.amount * variance);
    
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
        
        var indexToDelete;
        for (var i = 0; i < investmentsAvailable; i++) {
            if (this === investmentsAvailable[i]) {
                indexToDelete = i;
            }
        }
        
        investmentsAvailable.splice(indexToDelete, 1);
    };
}