function Advertisement (progress) {
    
    var COST_MULTIPLIER = 10;
    var COST_VARIANCE = 0.3;
    var ADVERTISING_POWER_DIVISOR = 10000;
    
    var variance = COST_VARIANCE - Math.random() * COST_VARIANCE * 2;
    this.cost = progress * (COST_MULTIPLIER + variance * COST_MULTIPLIER);
    this.advertisingPower = this.cost / ADVERTISING_POWER_DIVISOR;
}