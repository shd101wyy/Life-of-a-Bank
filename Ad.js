function Advertisement (progress) {
    
    var COST_MULTIPLIER = 10;
    var COST_VARIANCE = 0.3;
    var ADVERTISING_POWER_DIVISOR = 10000;
    
    var NUMBER_OF_TYPES = 4;
    var TYPES_OF_ADVERTISEMENTS = ["TV", "Radio", "News", "Web"];
    
    var variance = COST_VARIANCE - Math.random() * COST_VARIANCE * 2;
    this.cost = Math.round(progress * (COST_MULTIPLIER + variance * COST_MULTIPLIER));
    this.advertisingPower = this.cost / ADVERTISING_POWER_DIVISOR;
    
    this.type;

    var randomType = Math.random();
    if (randomType < 1 / NUMBER_OF_TYPES) {
        this.type = TYPES_OF_ADVERTISEMENTS[0];
    }
    else if (randomType < 2 / NUMBER_OF_TYPES) {
        this.type = TYPES_OF_ADVERTISEMENTS[1];
    }
    else if (randomType < 3 / NUMBER_OF_TYPES) {
        this.type = TYPES_OF_ADVERTISEMENTS[2];
    }
    else if (randomType < 4 / NUMBER_OF_TYPES) {
        this.type = TYPES_OF_ADVERTISEMENTS[3];
    }
    
    this.clickBuy = function() {
        advertisingPower += this.advertisingPower;
        Player.money -= this.cost;
        Player.fameAdvertisingExp += 3;
        
        var indexToDelete;
        for (var i = 0; i < advertisementsAvailable.length; i++) {
            if (this === advertisementsAvailable[i]) {
                indexToDelete = i;
            }
        }
        
        advertisementsAvailable.splice(indexToDelete, 1);
    };
}