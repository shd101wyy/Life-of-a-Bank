/*
 *  Class for Investment
 */
function Investment (progress){
    //TODO high risk vs low risk
    
    var AMOUNT_MULTIPLIER = 1000;
    var LENGTH_MULTIPLIER = 7;
    
    //a number between 0.5 and 1. the chance of success of the investment
    this.risk = (Math.random() * 0.5 + 0.5).toFixed(2);
    
    this.roi = 1 / this.risk;
    
    this.length = (this.roi * LENGTH_MULTIPLIER).toFixed(0);
    
    this.amount = Player.progress * AMOUNT_MULTIPLIER;
    
    function updateInvestment () {
        this.length -= 1;
        
        //check if investment has matured
        if (this.length === 0) {
            //check if investment was successful
            var success = Math.random() + this.risk;
            if (success > 1) {
                return this.amount * this.roi;
            }
            else {
                //investment failed
                return this.amount - (this.roi - 1) * this.amount;
            }
        }
    }
}