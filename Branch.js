function Branch () {
    
    var AVERAGE_CUSTOMERS = 100;
    var CUSTOMERS_VARIANCE = 0.3;
    var GROWTH_RATE_DIVISOR = 10;
    var INCOME_MULTIPLIER = 500;
    var INCOME_VARIANCE = 0.1;
    var MAX_EMPLOYEES = 10;
    
    var SALES_EMPLOYEE_DIVISOR = 10;
    var TELLER_EMPLOYEE_DIVISOR = 10;
    
    var variance = CUSTOMERS_VARIANCE - Math.random() * CUSTOMERS_VARIANCE * 2;
    
    //maximum number of customers this branch can have
    this.maxCustomers = AVERAGE_CUSTOMERS + variance * AVERAGE_CUSTOMERS;
    
    //current number of customers
    this.currentCustomers = 0.05 * this.maxCustomers;
    
    //growth rate of currentCustomers. A number > 1
    this.growthRate = 1 + ((1 - this.currentCustomers / this.maxCustomers) / GROWTH_RATE_DIVISOR);
    
    //array of all the employees in this branch
    this.employees = [];
    
    //number of employees this branch has at the moment
    this.employeeCount = 0;
    
    //income of this branch
    this.income;
    
    
    function getStarPower (type) {
        
        var starPower = 0;
        
        for (var i = 0; i < this.employeeCount; i++) {
            var tempEmployee = this.employees[i];
            if (tempEmployee.type == type) {
                starPower += tempEmployee.stars;
            }
        }
        
        return starPower;
    }
    
    this.hasSpace = function () {
        return this.employeeCount < MAX_EMPLOYEES;
    };
    
    this.updateBranch = function (advertisingMultiplier) {
        
        var employeeMultiplier = getStarPower("sales") / 10 + 1;
        
        this.currentCustomers += this.growthRate * advertisingMultiplier * employeeMultiplier;
        this.growthRate = 1 + ((1 - this.currentCustomers / this.maxCustomers) / GROWTH_RATE_DIVISOR);
    };
    
    this.addEmployee = function (employeeToAdd) {
        if(!this.hasSpace){
            alert("Branch is full");
            return;
        }
        
        this.employees[this.employeeCount] = employeeToAdd;
        this.employeeCount++;
    };
    
    this.removeEmployee = function(employeeToRemove){
        if(confirm("Are you sure you want to fire employee?")){
            var idxToRemove = this.employees.length - 1;
            for (var i = 0; i < this.employeeCount; i++) {
                var tempEmployee = this.employees[i];
                if (tempEmployee == employeeToRemove) {
                    idxToRemove = i;
                    }
                }
            this.employees.splice(idxToRemove, 1);
            this.employeeCount--;
        }
        else
        return
    }
    
    this.getIncome = function () {
        var variance = INCOME_VARIANCE - Math.random() * INCOME_VARIANCE * 2;
        var incomeMultiplier = INCOME_MULTIPLIER + variance * INCOME_MULTIPLIER;
        
        var employeeMultiplier = getStarPower("teller") / 10 + 1;
        
        this.income = this.currentCustomers * incomeMultiplier * employeeMultiplier;
        
        return this.income;
    };
    
    this.getExpenditure = function(){
        //TODO
    }
}