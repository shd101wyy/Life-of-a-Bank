function Employee (type, progress) {
    
    var maxStarsDefinition = [0, 20, 50, 150, 500];
    var salaryDefinition = [100, 200, 350, 650, 1300];
    var SALARY_VARIANCE = 0.2;
    var trainingCost = [300, 600, 1300, 3000];
    var TRAINING_SUCCESS_RATE = 0.95;
    
    this.type = "";
    
    if (type == "sales") {
        this.type = "sales";
    }
    else if (type == "teller") {
        this.type = "teller";
    }
    
    var maxStars;
    
    for (var i = 1; i < maxStarsDefinition.length; i++) {
        if (progress < maxStarsDefinition[i] || i == maxStarsDefinition.length - 1) {
            maxStars = i;
            break;
        }
    }
    
    this.stars = Math.round(Math.random() * (maxStars - 1)) + 1;
    
    var variance = SALARY_VARIANCE - Math.random() * SALARY_VARIANCE * 2;
    this.salary = salaryDefinition[this.stars] + variance * salaryDefinition[this.stars];
    
    //
    this.trainCost = function () {
        return trainingCost[this.stars];
    };
    
    //called when the employee undergoes training. returns true if training is successful, false otherwise
    this.train = function () {
        if (Math.random() < TRAINING_SUCCESS_RATE) {
            //successful
            this.stars++;
            variance = SALARY_VARIANCE - Math.random() * SALARY_VARIANCE * 2;
            this.salary = salaryDefinition[this.stars] + variance * salaryDefinition[this.stars];
            alert("Successful training!");
            return true;
        }
        else {
            //unsuccessful
            alert("Training unsuccessful :(");
            return false;
        }
    };
}