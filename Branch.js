function Branch () {
    
    var AVERAGE_CUSTOMERS = [100, 200, 300];
    var CUSTOMERS_VARIANCE = 0.3;
    var GROWTH_RATE_DIVISOR = 10;
    var INCOME_MULTIPLIER = [500, 1000, 1500];
    var INCOME_VARIANCE = 0.1;
    var EXPENDITURE_MULTIPLIER = [500, 1000, 1500];
    var EXPENDITURE_VARIANCE = 0.1;
    var MAX_EMPLOYEES = [10, 15, 20];
    var BRANCH_VALUE = [1200, 2500, 5500];
    var SELL_MULTIPLIER = 0.8
    var MAX_BRANCH_LEVEL = 2;
    
    var SALES_EMPLOYEE_DIVISOR = 100;
    var TELLER_EMPLOYEE_DIVISOR = 100;
    
    //Bank level related
    this.branchLevel = 0;
    var branchRunCost = [200, 500, 1250];
    
    
    var variance = CUSTOMERS_VARIANCE - Math.random() * CUSTOMERS_VARIANCE * 2;
    
    //maximum number of customers this branch can have
    this.maxCustomers = Math.round(AVERAGE_CUSTOMERS[this.branchLevel] + variance * AVERAGE_CUSTOMERS[this.branchLevel]);
    console.log(this.maxCustomers);
    //current number of customers
    this.currentCustomers = Math.round(0.05 * this.maxCustomers);
    console.log(this.currentCustomers);
    //growth rate of currentCustomers. A number > 1
    this.growthRate = 1 + ((1 - this.currentCustomers / this.maxCustomers) / GROWTH_RATE_DIVISOR);
    
    //array of all the employees in this branch
    this.employees = [];
    
    //number of employees this branch has at the moment
    this.employeeCount = 0;
    
    //income of this branch
    this.income = 0;
    
    //expenditure of this branch
    this.expenditure = 0;
    
    this.branchValue = BRANCH_VALUE[this.branchLevel];
    
    
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
    
    function getEmployeeSalary(){
        var salary = 0;
        
        for (var i = 0; i < this.employeeCount; i++) {
        var tempEmployee = this.employees[i];
            salary += tempEmployee.salary;
        }
        return salary;
    }
    
    this.hasSpace = function () {
        return this.employeeCount < MAX_EMPLOYEES[this.branchLevel];
    };
    
    this.updateBranch = function (advertisingMultiplier) {
        
        var employeeMultiplier = getStarPower("sales") / SALES_EMPLOYEE_DIVISOR + 1;
        
        this.currentCustomers += Math.round(this.growthRate * advertisingMultiplier * employeeMultiplier);
        this.growthRate = 1 + ((1 - this.currentCustomers / this.maxCustomers) / GROWTH_RATE_DIVISOR);
    };
    
    this.addEmployee = function (employeeToAdd) {
        if(!this.hasSpace()){
            alert("Branch is full");
            return;
        }
        
        this.employees[this.employeeCount] = employeeToAdd;
        this.employeeCount++;
        
        Player.employees++;
    };
    
    this.removeEmployee = function(employeeToRemove){
        if(confirm("Are you sure you want to fire employee?")){
            var idxToRemove = this.employees.length - 1;
            for (var i = 0; i < this.employeeCount; i++) {
                var tempEmployee = this.employees[i];
                if (tempEmployee === employeeToRemove) {
                    idxToRemove = i;
                    }
                }
            this.employees.splice(idxToRemove, 1);
            this.employeeCount--;
        }
    };
    
    this.getIncome = function () {
        var variance = INCOME_VARIANCE - Math.random() * INCOME_VARIANCE * 2;
        var incomeMultiplier = INCOME_MULTIPLIER[this.branchLevel] + variance * INCOME_MULTIPLIER[this.branchLevel];
        
        var employeeMultiplier = getStarPower("teller") / TELLER_EMPLOYEE_DIVISOR + 1;
        
        this.income = Math.round(this.currentCustomers * incomeMultiplier * employeeMultiplier);
        
        return this.income;
    };
    
    this.getExpenditure = function(){
        var variance = EXPENDITURE_VARIANCE - Math.random() * EXPENDITURE_VARIANCE * 2;
        var expenditureMultiplier = EXPENDITURE_MULTIPLIER[this.branchLevel] + variance * EXPENDITURE_MULTIPLIER[this.branchLevel];
        
        this.expenditure = Math.round(this.currentCustomers * expenditureMultiplier + getEmployeeSalary() + branchRunCost[this.branchLevel]);
        
        return this.expenditure
    };
    
    this.clickDelete = function () {
        
        
        var indexToDelete;
    
        for (var i = 0; i < branchList.length; i++) {
            var tempBranch = branchList[i];
            if (tempBranch === this) {
                indexToDelete = i;
            }
        }
        Player.money += Math.round(SELL_MULTIPLIER * BRANCH_VALUE[this.branchLevel]);
        
        branchList.splice(indexToDelete, 1);
    };
    
    this.clickUpgrade = function() {
        if (this.branchLevel >= MAX_BRANCH_LEVEL) {
            alert("Branch is already at max level.");
        }
        else {
            var cost = (BRANCH_VALUE[this.branchLevel + 1] - BRANCH_VALUE[this.branchLevel]) * 1.5;
            Player.money -= cost;
            
            this.branchLevel++;
        }
    };
}