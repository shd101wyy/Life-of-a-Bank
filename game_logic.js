/*
 * Game Logic file
 * use enchant.js
 */
 var WIDTH = window.innerWidth;
 var HEIGHT = window.innerHeight;
 var game_width = 640;
 var game_height = 960;
 var game; // our game
 var bankname = "Captial Two";

 var CURRENT_SCENE;   // save current scene
 var LAST_SCENE   ;   // save last scene
 var drawHomeMenuScene;
 var drawBranchesScene;
 var drawInvestmentScene;
 var drawAdvertisingScene;

 // scenes
 var Home_Menu_Scene; // home menu scene
 var Advertising_Scene;
 var Branches_Scene;
 var Investment_Scene;

 
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
         
         var money_label = new Label("1000");
         money_label.x = 320;
         money_label.y = 170;
         money_label.font = "60px myFirstFont";
         
         var fame_icon = new Sprite(128, 128);
         fame_icon.image = game.assets['assets/fame.png'];
         fame_icon.x = 50;
         fame_icon.y = 290;
         
         var fame_label = new Label("0");
         fame_label.x = 320;
         fame_label.y = 320;
         fame_label.font = "60px myFirstFont";
         
         var branches_num_icon = new Sprite(128, 128);
         branches_num_icon.image = game.assets['assets/branches_num.png'];
         branches_num_icon.x = 50;
         branches_num_icon.y = 440;
         
         var branches_num_label = new Label("1");
         branches_num_label.x = 320;
         branches_num_label.y = 470;
         branches_num_label.font = "60px myFirstFont";
         
         var employees_num_icon = new Sprite(128, 128);
         employees_num_icon.image = game.assets['assets/employee.png'];
         employees_num_icon.x = 50;
         employees_num_icon.y = 570;
         
         var employees_num_label = new Label("5");
         employees_num_label.x = 320;
         employees_num_label.y = 600;
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
         
         var bank_name = new Label(bankname == null?"✮Bank" : ("✮" + bankname)); // code here has problem, if name of bank is too long, they overlap..
         bank_name.x = 100;
         bank_name.y = 40;
         bank_name.font = "50px myFirstFont";
         
   
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

         Home_Menu_Scene.backgroundColor = "#F5F5F5";
         
         game.pushScene(Home_Menu_Scene); // add to game
}
 
 /*
  *
  *  Branches Scene
  *
  */
 drawBranchesScene = function(){
    Branches_Scene = new Scene();
    // but not pushed to game.
    Branches_Scene.backgroundColor = "#F5F5F5";
    var title = new Label("Branches");
    title.x = 100;
    title.y = 40;
    title.font = "60px myFirstFont";
    
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
    build_branch_label.addEventListener('touchstart', null); // TODO Build Branches
    build_branch_label.addEventListener('touchstart', null);
         
   
    Branches_Scene.addChild(title);
    Branches_Scene.addChild(back_icon);
    Branches_Scene.addChild(back_label);
    Branches_Scene.addChild(build_branch_icon);
    Branches_Scene.addChild(build_branch_label);
    game.pushScene(Branches_Scene);
 }
 
 drawInvestmentScene = function(){
  Investment_Scene = new Scene();
  Investment_Scene.backgroundColor = "#F5F5F5";
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
 drawAdvertisingScene = function(){
  Advertising_Scene = new Scene();
  Advertising_Scene.backgroundColor = "#F5F5F5";
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
                  'assets/back.png', 'assets/build_branch.png');  // load pictures.
     game.onload = function(){   // when the game is loaded
         drawHomeMenuScene();
     }
     
     game.start(); // start the game     
         
 });
