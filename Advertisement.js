function Advertisement (progress) {
    
    var COST_MULTIPLIER = 100;
    var COST_VARIANCE = 0.3;
    
    var variance = COST_VARIANCE - Math.random() * COST_VARIANCE * 2;
    this.cost = progress * (COST_MULTIPLIER + variance * COST_MULTIPLIER);
    this.advertisingPower;
}