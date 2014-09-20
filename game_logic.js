/*
 * Game Logic file
 * use enchant.js
 */
 var WIDTH = window.innerWidth;
 var HEIGHT = window.innerHeight;
 var game_width = 640;
 var game_height = 960;
 var game; // our game
 var bankname = Player.bankName;

 var CURRENT_SCENE;   // save current scene
 var LAST_SCENE   ;   // save last scene
 var drawHomeMenuScene;
 var drawBranchesScene;
 var drawBranchInformation;
 var drawSpecificBranchInformation;
 var drawInvestmentScene;
 var drawAdvertisingScene;
 var SAVED_BRANCHES_SCENE; // for saving branches scene
 var drawAdvertisement;
 var drawEmployee;
 var drawHireInterface;   // two choices
 // scenes
 var Home_Menu_Scene; // home menu scene
 var Advertising_Scene;
 var Branches_Scene;
 var Investment_Scene;
 var Branch_Information_Scene;
 var Hire_Scene;
 var CURRENT_MONTH = Player.month;
 
 
 drawHireInterface = function(branch_object){
  Hire_Scene = new Scene();
  Hire_Scene.backgroundColor = "#F5F5F5";
  var sales = new Sprite(128, 128);
  sales.image = game.assets['assets/sales.png'];
  sales.x = 60;
  sales.y = 200;
  Hire_Scene.addChild(sales);
  sales.addEventListener("touchstart", function(){
   for(var i = 0; i < employeesAvailable.length; i++){
    if(employeesAvailable[i].type == "sales"){
     branch_object.addEmployee(employeesAvailable[i]);
     break;
    }    
   }
   //game.removeScene(Hire_Scene);
   drawSpecificBranchInformation(branch_object);
  });
  
  var tellers = new Sprite(128, 128);
  tellers.image = game.assets['assets/tellers.png'];
  tellers.x = 60;
  tellers.y = 400;
  Hire_Scene.addChild(tellers);
  tellers.addEventListener("touchstart", function(){
   for(var i = 0; i < employeesAvailable.length; i++){
    if(employeesAvailable[i].type == "teller"){
     branch_object.addEmployee(employeesAvailable[i]);
     break;
    }    
   }
    //game.removeScene(Hire_Scene);
    drawSpecificBranchInformation(branch_object);
  })
  
    var back_icon = new Sprite(128, 128);
    back_icon.x = 10;
    back_icon.y = game_height - 180;
    back_icon.image = game.assets['assets/back.png'];
    Hire_Scene.addChild(back_icon);
    
    var back_label = new Label("Back");
    back_label.x = 30;
    back_label.y = game_height - 60;
    back_label.font = "30px myFirstFont";
    Hire_Scene.addChild(back_label);
    
    var goBack = function(){
      game.removeScene(Hire_Scene); // go back to branches_scene;
      drawSpecificBranchInformation(branch_object, 0);
    }
    back_icon.addEventListener("touchstart", goBack);
    back_label.addEventListener("touchstart", goBack);
    
    game.pushScene(Hire_Scene);
  
  
 }
 /*
  *    home menu scene
  *    Money
  *    Fame
  *    Braches
  *    Employees
  */

 
 drawHomeMenuScene = function(){
         Home_Menu_Scene = new Scene();
         
          function click_invest(){
           game.removeScene(Home_Menu_Scene);
           drawInvestmentScene();
           
          }
          function click_branch(){
           game.removeScene(Home_Menu_Scene); // remove home menu scene
           drawBranchesScene();               // draw branches scene
          }
          function click_advertising(){
           game.removeScene(Home_Menu_Scene);
           drawAdvertisingScene();
          }

           
         var  money_icon = new Sprite(128, 128);
         money_icon.image = game.assets['assets/money.png'];
         money_icon.x = 50;
         money_icon.y = 140;
         
         var money_label = new Label("" + Player.money);
         money_label.x = 320;
         money_label.y = 170;
         money_label.font = "60px myFirstFont";
         
         var fame_icon = new Sprite(128, 128);
         fame_icon.image = game.assets['assets/fame.png'];
         fame_icon.x = 60;
         fame_icon.y = 250;
         
         var fame_label = new Label("" + Player.fame);
         fame_label.x = 320;
         fame_label.y = 280;
         fame_label.font = "60px myFirstFont";
         
         var branches_num_icon = new Sprite(128, 128);
         branches_num_icon.image = game.assets['assets/branches_num.png'];
         branches_num_icon.x = 50;
         branches_num_icon.y = 360;
         
         var branches_num_label = new Label("" + Player.branches);
         branches_num_label.x = 320;
         branches_num_label.y = 390;
         branches_num_label.font = "60px myFirstFont";
         
         var employees_num_icon = new Sprite(128, 128);
         employees_num_icon.image = game.assets['assets/employee.png'];
         employees_num_icon.x = 50;
         employees_num_icon.y = 470;
         
         var employees_num_label = new Label("" + Player.employees);
         employees_num_label.x = 320;
         employees_num_label.y = 500;
         employees_num_label.font = "60px myFirstFont";
     

         var invest_icon = new Sprite(128, 128);
         invest_icon.x = 50;
         invest_icon.y = game_height - 180;
         invest_icon.image = game.assets['assets/investment.png'];
         
         var invest_label = new Label("Invest");
         invest_label.x = 50;
         invest_label.y = game_height - 60;
         invest_label.font = "30px myFirstFont";
         invest_icon.addEventListener("touchstart", click_invest);
         invest_label.addEventListener("touchstart", click_invest);
         
         var branch_icon = new Sprite(128, 128);
         branch_icon.x = 50 + 128;
         branch_icon.y = game_height - 180;
         branch_icon.image = game.assets['assets/branches.png'];
         
         var branch_label = new Label("Branch");
         branch_label.x = 128+50;
         branch_label.y = game_height - 60;
         branch_label.font = "30px myFirstFont";
         branch_icon.addEventListener('touchstart', click_branch);
         branch_label.addEventListener('touchstart', click_branch);
         
         var advertising_icon = new Sprite(128, 128);
         advertising_icon.x = 50 + 128 * 2;
         advertising_icon.y = game_height - 180;
         advertising_icon.image = game.assets['assets/ad.png'];
         
         var advertising_label = new Label("Advert. ");
         advertising_label.x = 50 + 128 * 2;
         advertising_label.y = game_height - 60;
         advertising_label.font = "30px myFirstFont";
         advertising_icon.addEventListener('touchstart', click_advertising);
         advertising_label.addEventListener('touchstart', click_advertising);
         
         var settings_icon = new Sprite(128, 128);
         settings_icon.x = 50 + 128 * 3;
         settings_icon.y = game_height - 180;
         settings_icon.image = game.assets['assets/settings.png'];
         
         var settings_label = new Label("Settings");
         settings_label.x = 50 + 128 * 3;
         settings_label.y = game_height - 60;
         settings_label.font = "30px myFirstFont";
         
         var clickSettings = function(){
          alert("Game Made by Kanzy, Christian, Yiyi");
         }
         settings_icon.addEventListener("touchstart", clickSettings);
         settings_label.addEventListener("touchstart", clickSettings);
         
         var bank_name = new Label(bankname == null?"✮Bank" : ("✮" + bankname)); // code here has problem, if name of bank is too long, they overlap..
         bank_name.x = 60;
         bank_name.y = 40;
         bank_name.font = "50px myFirstFont";
         
         var next_month_button = new Sprite(128, 128);
         next_month_button.image = game.assets['assets/next_month.png'];
         next_month_button.x = 450;
         next_month_button.y = 620;
         next_month_button.addEventListener('touchstart', function(){
           nextMonth();
           drawHomeMenuScene();
         })
         
         var current_month_label = new Label("Now: " + Player.month);
         current_month_label.x = 60;
         current_month_label.y = game_height - 300;
         current_month_label.font = "50px myFirstFont";
         
   
         Home_Menu_Scene.addChild(money_icon);
         Home_Menu_Scene.addChild(money_label);
         Home_Menu_Scene.addChild(fame_icon);
         Home_Menu_Scene.addChild(fame_label);
         Home_Menu_Scene.addChild(branches_num_icon);
         Home_Menu_Scene.addChild(branches_num_label);
         Home_Menu_Scene.addChild(employees_num_icon);
         Home_Menu_Scene.addChild(employees_num_label);
         Home_Menu_Scene.addChild(invest_icon);
         Home_Menu_Scene.addChild(invest_label);
         Home_Menu_Scene.addChild(branch_icon);
         Home_Menu_Scene.addChild(branch_label);
         Home_Menu_Scene.addChild(advertising_icon);
         Home_Menu_Scene.addChild(advertising_label);
         Home_Menu_Scene.addChild(settings_icon);
         Home_Menu_Scene.addChild(settings_label);
         Home_Menu_Scene.addChild(bank_name);
         Home_Menu_Scene.addChild(next_month_button);
         Home_Menu_Scene.addChild(current_month_label);

         Home_Menu_Scene.backgroundColor = "#F5F5F5";
         
         game.pushScene(Home_Menu_Scene); // add to game
}

drawEmployee = function(branch_object, employee_object, x, y){
    var level = new Label("Level: " + employee_object.stars);
    level.x = 60;
    level.y = y + 60;
    level.font = "30px myFirstFont";
    Branch_Information_Scene.addChild(level);
    
    var salary = new Label("Salary: " + parseInt(employee_object.salary));
    salary.x = 60;
    salary.y = y + 100;
    salary.font = "30px myFirstFont";
    Branch_Information_Scene.addChild(salary);
    
    var employee_picture = new Sprite(128, 128);
    if(employee_object.type == "sales"){
       employee_picture.image = game.assets['assets/sales.png'];
    }
    else if (employee_object.type == "teller"){
     employee_picture.image = game.assets['assets/tellers.png']
    }
   
    employee_picture.x = 250;
    employee_picture.y = y + 50;
    Branch_Information_Scene.addChild(employee_picture);
    
    var fire_button = new Sprite(128, 128);
    fire_button.scale(0.7, 0.7);
    fire_button.image = game.assets['assets/fire.png'];
    fire_button.x = 400;
    fire_button.y = y + 40;
    Branch_Information_Scene.addChild(fire_button);
    
    fire_button.addEventListener("touchstart", function(){ // fire
     branch_object.removeEmployee(employee_object); // remove employee
     drawSpecificBranchInformation(branch_object); // redraw branch information
    })
    
    var train_button = new Sprite(128, 128);
    train_button.scale(0.7, 0.7);
    train_button.image = game.assets['assets/train.png'];
    train_button.x = 500;
    train_button.y = y + 40;
    Branch_Information_Scene.addChild(train_button);
    
    train_button.addEventListener("touchstart", function(){ // train
     employee_object.train();
    })
}
 
  /*
  draw information of each branch
  show employee information
  */
 drawSpecificBranchInformation = function(branch_object, start_i){
    if(start_i == null || typeof(start_i) === 'undefined') start_i = 0;
    Branch_Information_Scene = new Scene();
    Branch_Information_Scene.backgroundColor = "#F5F5F5";
      
    var back_icon = new Sprite(128, 128);
    back_icon.x = 10;
    back_icon.y = game_height - 180;
    back_icon.image = game.assets['assets/back.png'];
    
    var back_label = new Label("Back");
    back_label.x = 30;
    back_label.y = game_height - 60;
    back_label.font = "30px myFirstFont";
    
    var goBack = function(){
      game.popScene(); // go back to branches_scene;
      game.pushScene(SAVED_BRANCHES_SCENE); 
    }
    back_icon.addEventListener("touchstart", goBack);
    back_label.addEventListener("touchstart", goBack);
    /*
    var upgrade_icon = new Sprite(128, 128);
    upgrade_icon.image = game.assets['assets/upgrade_branch.png'];
    upgrade_icon.x = 30 + 128;
    upgrade_icon.y = game_height - 180;
    */
    var upgrade_label = new Label("Upgrade");
    upgrade_label.x = 30 + 128 * 3;
    upgrade_label.y = 150;
    upgrade_label.font = "30px myFirstFont";
    
    var sell_icon = new Sprite(128, 128);
    sell_icon.image = game.assets['assets/sell.png'];
    sell_icon.x = 30 + 128 ;
    sell_icon.y = game_height - 180;
    
    var sell_label = new Label("Sell");
    sell_label.x = 40 + 128;
    sell_label.y = game_height - 60;
    sell_label.font = "30px myFirstFont";
    
    var sellBranch = function(){ // redraw scene after add branch
      branch_object.clickDelete();
      game.removeScene(Branch_Information_Scene);
      drawBranchesScene()
    }
    
    sell_label.addEventListener("touchstart", sellBranch);
    sell_icon.addEventListener("touchstart", sellBranch);
    
    
    var employ_icon = new Sprite(128, 128);
    employ_icon.image = game.assets['assets/employ.png'];
    employ_icon.x = 30 + 128 * 2;
    employ_icon.y = game_height - 180;
    
    var employ_label = new Label("Employ");
    employ_label.x = 30 + 128 * 2;
    employ_label.y = game_height - 60;
    employ_label.font = "30px myFirstFont";
    
    var clickEmploy = function(){
     game.removeScene(Branch_Information_Scene);
     drawHireInterface(branch_object);
    }
    employ_icon.addEventListener("touchstart", clickEmploy);
    employ_label.addEventListener("touchstart", clickEmploy);
    
    /* Branch Information */
    var level = new Label("Level: " + (branch_object.branchLevel + 1));
    level.x = 60;
    level.y = 60;
    level.font = "40px myFirstFont";
    Branches_Scene.addChild((level));
    
    var employees = new Label("#Employees: " + branch_object.employeeCount);
    employees.x = 60;
    employees.y = 60 + 30;
    employees.font = "40px myFirstFont";
    Branches_Scene.addChild((employees));
    
    var customers = new Label("#Customers: " + branch_object.currentCustomers);
    customers.x = 60;
    customers.y = 60 + 60;
    customers.font = "40px myFirstFont";
    Branches_Scene.addChild((customers));
    
    var income = new Label("Profit: " + (branch_object.income - branch_object.expenditure));
    income.x = 60;
    income.y = 60 + 90;
    income.font = "40px myFirstFont";
    Branches_Scene.addChild(income);
    
    var up_button = new Sprite(128, 128);
    up_button.image = game.assets['assets/up_button.png'];
    up_button.scale(0.5, 0.5);
    up_button.x = 400;
    up_button.y = game_height - 180;
    
    var up_label = new Label("Up");
    up_label.x = 420;
    up_label.y = game_height - 60;
    up_label.font = "30px myFirstFont";
    
    var click_up_button = function(){
       game.removeScene(Branches_Scene);
       drawSpecificBranchInformation(branch_object, (start_i - 1) < 0 ? 0 : (start_i - 1));
    }
    up_label.addEventListener("touchstart", click_up_button);
    up_button.addEventListener("touchstart", click_up_button);

    
    var down_button = new Sprite(128, 128);
    down_button.image = game.assets['assets/down_button.png'];
    down_button.scale(0.5, 0.5);
    down_button.x = 500;
    down_button.y = game_height - 180;;
    
    var down_label = new Label("Down");
    down_label.x = 530;
    down_label.y = game_height - 60;
    down_label.font = "30px myFirstFont";
    
    var click_down_button = function(){
       game.removeScene(Branches_Scene);
       drawSpecificBranchInformation(branch_object, (start_i + 1) >= branch_object.employees.length ? start_i : (start_i + 1));
    }
    down_button.addEventListener("touchstart", click_down_button);
    down_label.addEventListener("touchstart", click_down_button);
    
    // draw branch scene
    var branch_picture = new Sprite(128, 128);
    if(branch_object.branchLevel == 0){
     branch_picture.image = game.assets['assets/level1_branch.png'];
    }
    else if (branch_object.branchLevel == 1){
     branch_picture.image = game.assets['assets/level2_branch.png'];
    }
    else{
     branch_picture.image = game.assets['assets/level3_branch.png'];
    }
    branch_picture.x = 400;
    branch_picture.y = 30;
    Branch_Information_Scene.addChild(branch_picture);
    
    // upgrade
    branch_picture.addEventListener("touchstart", function(){
     branch_object.clickUpgrade();
     game.removeScene(Branch_Information_Scene);
     drawSpecificBranchInformation(branch_object);
    });
    upgrade_label.addEventListener("touchstart", function(){
     branch_object.clickUpgrade();
     game.removeScene(Branch_Information_Scene);
     drawSpecificBranchInformation(branch_object);
    })
    
    
    Branch_Information_Scene.addChild(back_icon);
    Branch_Information_Scene.addChild(back_label);
    // Branch_Information_Scene.addChild(upgrade_icon);
    Branch_Information_Scene.addChild(upgrade_label);
    Branch_Information_Scene.addChild(sell_icon);
    Branch_Information_Scene.addChild(sell_label);
    Branch_Information_Scene.addChild(employ_icon);
    Branch_Information_Scene.addChild(employ_label);
    Branch_Information_Scene.addChild(level);
    Branch_Information_Scene.addChild(employees);
    Branch_Information_Scene.addChild(customers);
    Branch_Information_Scene.addChild(income);
    Branch_Information_Scene.addChild(up_button);
    Branch_Information_Scene.addChild(up_label);
    Branch_Information_Scene.addChild(down_button);
    Branch_Information_Scene.addChild(down_label);
    
    
    /*
     *  draw employees
     *  branch_object.employees
     */
    /* draw 4 employees */
    for (var i = start_i; i < start_i + 4; i++) {
        if(i == branch_object.employees.length) break;
        if(branch_object.employees[i] === null) continue;
        drawEmployee(branch_object, branch_object.employees[i], 60, 200 + (i-start_i) *  100);
    }
    game.pushScene(Branch_Information_Scene);
 }
 
 /*
  *
  *  Branches Scene
  *
  */
 drawBranchInformation = function(branch_object, x, y, start_i){
  if(start_i === null || typeof(start_i) === 'undefined'){
    start_i = 0;
  }
     /*
      * suppose I have property 
      * level, employees, customers, income
      */
   var level = new Label("Level: " + (branch_object.branchLevel + 1));
   level.x = x;
   level.y = y;
   level.font = "40px myFirstFont";
   Branches_Scene.addChild((level));
   
   var employees = new Label("#Employees: " + branch_object.employeeCount);
   employees.x = x;
   employees.y = y + 30;
   employees.font = "40px myFirstFont";
   Branches_Scene.addChild((employees));
   
   var customers = new Label("#Customers: " + branch_object.currentCustomers);
   customers.x = x;
   customers.y = y + 60;
   customers.font = "40px myFirstFont";
   Branches_Scene.addChild((customers));
   
   var income = new Label("Profit: " + (branch_object.income - branch_object.expenditure));
   income.x = x;
   income.y = y + 90;
   income.font = "40px myFirstFont";
   Branches_Scene.addChild(income);
   
   /* show specific branch information */
   var clickBranch = function(){
     SAVED_BRANCHES_SCENE = Branches_Scene; // save current scene
     game.removeScene(Branches_Scene);    
     // game.removeScene(Branches_Scene);
     drawSpecificBranchInformation(branch_object);
   };
   
   level.addEventListener("touchstart", clickBranch);
   employees.addEventListener("touchstart", clickBranch);
   customers.addEventListener("touchstart", clickBranch);
   income.addEventListener("touchstart", clickBranch);
   
   // draw branch scene
   var branch_picture = new Sprite(128, 128);
   branch_picture.addEventListener("touchstart", clickBranch);
   if(branch_object.branchLevel == 0){
    branch_picture.image = game.assets['assets/level1_branch.png'];
   }
   else if (branch_object.branchLevel == 1){
    branch_picture.image = game.assets['assets/level2_branch.png'];
   }
   else{
    branch_picture.image = game.assets['assets/level3_branch.png'];
   }
   branch_picture.x = 500;
   branch_picture.y = y;
   Branches_Scene.addChild(branch_picture);
 }

 drawBranchesScene = function(start_i){
    if(start_i === null || typeof(start_i) === 'undefined'){
      start_i = 0;
    }
      
    Branches_Scene = new Scene();
    // but not pushed to game.
    Branches_Scene.backgroundColor = "#F5F5F5";
    var title = new Label("Branches");
    title.x = 100;
    title.y = 40;
    title.font = "60px myFirstFont";
    
    var TOP_START = 120;
    var SPACE = 150;
    
    /* draw 4 branches */
    for (var i = start_i; i < start_i + 4; i++) {
        if(i == branchList.length) break;
        if(branchList[i] === null) continue;
        drawBranchInformation(branchList[i], 20, TOP_START + (i-start_i) * SPACE);
    }
    
    var back_icon = new Sprite(128, 128);
    back_icon.x = 10;
    back_icon.y = game_height - 180;
    back_icon.image = game.assets['assets/back.png'];
    
    var back_label = new Label("Back");
    back_label.x = 30;
    back_label.y = game_height - 60;
    back_label.font = "30px myFirstFont";
    
    var backInBranchScene = function(){
     game.removeScene(Branches_Scene); // remove current scene;
     drawHomeMenuScene();
     //game.pushScene(Home_Menu_Scene); // go back to branches scene
    }
    
    var buildBranch = function(){ // redraw scene after add branch
      addBranch();
      game.removeScene(Branches_Scene);
      drawBranchesScene()
    }
    
    back_icon.addEventListener("touchstart", backInBranchScene);
    back_label.addEventListener("touchstart", backInBranchScene);
   
    var build_branch_icon = new Sprite(128, 128);
    build_branch_icon.x = 30 + 128;
    build_branch_icon.y = game_height - 180;
    build_branch_icon.image = game.assets['assets/build_branch.png'];
    
    var build_branch_label = new Label("Build");
    build_branch_label.x = 128+50;
    build_branch_label.y = game_height - 60;
    build_branch_label.font = "30px myFirstFont";
    build_branch_icon.addEventListener('touchstart', buildBranch); // TODO Build Branches
    build_branch_label.addEventListener('touchstart', buildBranch);
         
   
    var up_button = new Sprite(128, 128);
    up_button.image = game.assets['assets/up_button.png'];
    up_button.scale(0.5, 0.5);
    up_button.x = 30 + 128 * 2;
    up_button.y = game_height - 180;
    
    var up_label = new Label("Up");
    up_label.x = 60 + 128 * 2;
    up_label.y = game_height - 60;
    up_label.font = "30px myFirstFont";
    
    var click_up_button = function(){
       game.removeScene(Branches_Scene);
       drawBranchesScene((start_i - 1) < 0 ? 0 : (start_i - 1));
    }
    up_button.addEventListener("touchstart", click_up_button);
    up_label.addEventListener("touchstart", click_up_button);

    
    var down_button = new Sprite(128, 128);
    down_button.image = game.assets['assets/down_button.png'];
    down_button.scale(0.5, 0.5);
    down_button.x = 30 + 128 * 3;
    down_button.y = game_height - 180;;
    
    var down_label = new Label("Down");
    down_label.x = 50 + 128 * 3;
    down_label.y = game_height - 60;
    down_label.font = "30px myFirstFont";
    
    var click_down_button = function(){
       game.removeScene(Branches_Scene);
       drawBranchesScene((start_i + 1) >= branchList.length ? start_i : (start_i + 1));
    }
    down_button.addEventListener("touchstart", click_down_button);
    down_label.addEventListener("touchstart", click_down_button);
    
    Branches_Scene.addChild(title);
    Branches_Scene.addChild(back_icon);
    Branches_Scene.addChild(back_label);
    Branches_Scene.addChild(build_branch_icon);
    Branches_Scene.addChild(build_branch_label);
    Branches_Scene.addChild(up_button);
    Branches_Scene.addChild(up_label);
    Branches_Scene.addChild(down_button);
    Branches_Scene.addChild(down_label);
    game.pushScene(Branches_Scene);
 }
 drawInvestmentInformation = function(investment_obj, x, y){
  /*
   * success%, ROI, amount, time
   */ 
   
   var success = new Label("Success%: " + (investment_obj.risk * 100));
   success.x = x;
   success.y = y;
   success.font = "40px myFirstFont";
   Investment_Scene.addChild((success));
   
   var ROI = new Label("ROI: " + (investment_obj.roi) + "x");
   ROI.x = x;
   ROI.y = y + 30;
   ROI.font = "40px myFirstFont";
   Investment_Scene.addChild((ROI));
   
   var amount = new Label("Amount: " + investment_obj.amount);
   amount.x = x;
   amount.y = y + 60;
   amount.font = "40px myFirstFont";
   Investment_Scene.addChild((amount));
   
   var time = new Label("Time: " + investment_obj.length + " month(s)");
   time.x = x;
   time.y = y + 90;
   time.font = "40px myFirstFont";
   Investment_Scene.addChild(time);
   
   var invest_button = new Sprite(128, 128);
   invest_button.image = game.assets['assets/invest_button.png'];
   invest_button.x = x + 440;
   invest_button.y = y;
   Investment_Scene.addChild(invest_button);
   
   var click = function(){
    investment_obj.clickBuy();
    
    drawInvestmentScene();       // draw advertising scene again.
   }
   
   invest_button.addEventListener("touchstart", click);
 }
 drawInvestmentScene = function(){
  Investment_Scene = new Scene();
  Investment_Scene.backgroundColor = "#F5F5F5";
  
  
  var TOP_START = 120;
  var SPACE = 150;
  
  for (var i = 0; i < investmentsAvailable.length; i++) {
      drawInvestmentInformation(investmentsAvailable[i], 20, TOP_START + SPACE * i);
  }
    
  var title = new Label("Investment");
  title.x = 100;
  title.y = 40;
  title.font = "50px myFirstFont";
  
  var back_icon = new Sprite(128, 128);
  back_icon.x = 10;
  back_icon.y = game_height - 180;
  back_icon.image = game.assets['assets/back.png'];
  
  var back_label = new Label("Back");
  back_label.x = 30;
  back_label.y = game_height - 60;
  back_label.font = "30px myFirstFont";
  
  var backInInvestmentScene = function(){
   game.removeScene(Investment_Scene); // remove current scene;
   drawHomeMenuScene();
  }
  
  back_icon.addEventListener("touchstart", backInInvestmentScene);
  back_label.addEventListener("touchstart", backInInvestmentScene);
  
  Investment_Scene.addChild(title);
  Investment_Scene.addChild(back_icon);
  Investment_Scene.addChild(back_label);
  game.pushScene(Investment_Scene);

 }
 
 drawAdvertisement = function(advertisement_obj, x, y){
   var cost = new Label("Cost: " + advertisement_obj.cost);
   cost.x = x;
   cost.y = y;
   cost.font = "40px myFirstFont";
   Advertising_Scene.addChild((cost));
   
   var type = new Label("type: " + advertisement_obj.type);
   type.x = x;
   type.y = y + 30;
   type.font = "40px myFirstFont";
   Advertising_Scene.addChild((type));
   /*
   var buy = new Label("Buy?");
   buy.x = x;
   buy.y = y + 60;
   buy.font = "40px myFirstFont";
   */
   var invest_button = new Sprite(128, 128);
   invest_button.image = game.assets['assets/invest_button.png'];
   invest_button.x = x + 400;
   invest_button.y = y;
   Advertising_Scene.addChild((invest_button));
   
   var click = function(){
    advertisement_obj.clickBuy();
    
    drawAdvertisingScene();       // draw advertising scene again.
   }
   
   invest_button.addEventListener("touchstart", click);
 }
 
 
 drawAdvertisingScene = function(){
  Advertising_Scene = new Scene();
  Advertising_Scene.backgroundColor = "#F5F5F5";

  // draw advertisments;  
  var TOP_START = 120;
  var SPACE = 160;
  for(var i = 0; i < advertisementsAvailable.length; i++){
   drawAdvertisement(advertisementsAvailable[i], 20, TOP_START + SPACE * i );
  }

  
  var title = new Label("Advertising");
  title.x = 100;
  title.y = 40;
  title.font = "50px myFirstFont";
  
  var back_icon = new Sprite(128, 128);
  back_icon.x = 10;
  back_icon.y = game_height - 180;
  back_icon.image = game.assets['assets/back.png'];
  
  var back_label = new Label("Back");
  back_label.x = 30;
  back_label.y = game_height - 60;
  back_label.font = "30px myFirstFont";
  
  var backInAdvertisingScene = function(){
   game.removeScene(Advertising_Scene); // remove current scene;
   drawHomeMenuScene();
  }
  
  back_icon.addEventListener("touchstart", backInAdvertisingScene);
  back_label.addEventListener("touchstart", backInAdvertisingScene);
  
  Advertising_Scene.addChild(title);
  Advertising_Scene.addChild(back_icon);
  Advertising_Scene.addChild(back_label);
  game.pushScene(Advertising_Scene);
 }
 
 $(document).ready(function(){ // when the document is ready
     window.scrollTo(0, 0);
     enchant();
     game = new Game(game_width, game_height);
     game.preload("assets/investment.png", 'assets/money.png', 'assets/fame.png', 'assets/branches_num.png', 
                  'assets/employee.png', 'assets/ad.png', 'assets/branches.png', 'assets/settings.png',
                  'assets/back.png', 'assets/build_branch.png', 'assets/upgrade_branch.png',
                  'assets/sell.png' , 'assets/employ.png', 'assets/invest_button.png',
                  'assets/up_button.png', 'assets/down_button.png', 'assets/level1_branch.png',
                  'assets/level2_branch.png', 'assets/level3_branch.png', 'assets/tellers.png',
                  'assets/sales.png', 'assets/security_guard.png', 'assets/next_month.png',
                  'assets/train.png', 'assets/fire.png');  // load pictures.
     game.onload = function(){   // when the game is loaded
         drawHomeMenuScene();
     }
     
     game.start(); // start the game     
         
 });
