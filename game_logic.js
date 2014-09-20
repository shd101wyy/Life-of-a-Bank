/*
 * Game Logic file
 * use enchant.js
 */
 var WIDTH = window.innerWidth;
 var HEIGHT = window.innerHeight;
 var game_width = 640;
 var game_height = 960;
 var game; // our game
 
 /*
  *    home menu scene
  *    Money
  *    Fame
  *    Braches
  *    Employees
  */
 var Home_Menu_Scene; // home menu scene
 var money_icon;      // money
 var money_label;    
 
 var fame_icon;       // fame
 var fame_label;
 
 var branches_num_icon;  // branches num
 var branches_num_label; 
 
 var employees_num_icon; // employees num
 var employees_num_label; 
 
 var invest_icon;     // invest
 var invest_label; 
 function click_invest(){
  alert("You touched me");
 }

 
 var branch_label;    // branch

 var adverting_icon;
 var adverting_label; // advertising

 var settings_label;  // settings 
 
 var bank_name;       // bank name
 
 
 $(document).ready(function(){ // when the document is ready
     window.scrollTo(0, 0);
     enchant();
     game = new Game(game_width, game_height);
     game.preload("assets/investment.png", 'assets/money.png', 'assets/fame.png', 'assets/branches_num.png', 
                  'assets/employee.png', 'assets/advertising.png');  // load pictures.
     game.onload = function(){   // when the game is loaded
         /*
          *  set up home menu scene
          */
         Home_Menu_Scene = new Scene();
         money_icon = new Sprite(128, 128);
         money_icon.image = game.assets['assets/money.png'];
         money_icon.x = 50;
         money_icon.y = 140;
         
         money_label = new Label("1000");
         money_label.x = 320;
         money_label.y = 170;
         money_label.font = "60px myFirstFont";
         
         fame_icon = new Sprite(128, 128);
         fame_icon.image = game.assets['assets/fame.png'];
         fame_icon.x = 50;
         fame_icon.y = 290;
         
         fame_label = new Label("0");
         fame_label.x = 320;
         fame_label.y = 320;
         fame_label.font = "60px myFirstFont";
         
         branches_num_icon = new Sprite(128, 128);
         branches_num_icon.image = game.assets['assets/branches_num.png'];
         branches_num_icon.x = 50;
         branches_num_icon.y = 440;
         
         branches_num_label = new Label("1");
         branches_num_label.x = 320;
         branches_num_label.y = 470;
         branches_num_label.font = "60px myFirstFont";
         
         employees_num_icon = new Sprite(128, 128);
         employees_num_icon.image = game.assets['assets/employee.png'];
         employees_num_icon.x = 50;
         employees_num_icon.y = 570;
         
         employees_num_label = new Label("5");
         employees_num_label.x = 320;
         employees_num_label.y = 600;
         employees_num_label.font = "60px myFirstFont";
     

         invest_icon = new Sprite(128, 128);
         invest_icon.x = 50;
         invest_icon.y = game_height - 180;
         invest_icon.image = game.assets['assets/investment.png'];
         
         invest_label = new Label("Invest");
         invest_label.x = 50;
         invest_label.y = game_height - 60;
         invest_label.font = "30px myFirstFont";
         invest_icon.addEventListener("touchstart", click_invest);
         invest_label.addEventListener("touchstart", click_invest);
         
         branch_label = new Label("Branch");
         branch_label.x = 128+50;
         branch_label.y = game_height - 60;
         branch_label.font = "30px myFirstFont";
         
         adverting_icon = new Sprite(128, 128);
         adverting_icon.x = 50;
         adverting_icon.y = game_height - 180;
         adverting_icon.image = game.assets['assets/advertising.png'];
         
         adverting_label = new Label("Advert. ");
         adverting_label.x = 50 + 128 * 2;
         adverting_label.y = game_height - 60;
         adverting_label.font = "30px myFirstFont";
         
         settings_label = new Label("Settings");
         settings_label.x = 50 + 128 * 3;
         settings_label.y = game_height - 60;
         settings_label.font = "30px myFirstFont";
         
         bank_name = new Label("Bank"); // code here has problem, if name of bank is too long, they overlap..
         bank_name.x = 100;
         bank_name.y = 40;
         bank_name.font = "60px myFirstFont";

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
         Home_Menu_Scene.addChild(branch_label);
         Home_Menu_Scene.addChild(adverting_icon);
         Home_Menu_Scene.addChild(adverting_label);
         Home_Menu_Scene.addChild(settings_label);
         Home_Menu_Scene.addChild(bank_name);

         Home_Menu_Scene.backgroundColor = "#F5F5F5";
         game.pushScene(Home_Menu_Scene);
         
         

     }
     
     game.start(); // start the game     
         
 });
