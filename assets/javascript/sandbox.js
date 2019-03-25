// /*
// Adriano Alves
// Mar 18 2019
// Berkely Bootcamp 
// JS file to hold all JQuery code used for RPG game
// */

// $(document).ready(function () {
//     // 1)  get all images belong to it parrent 
//     // 2)  to know witch on as select we can remove a special class name and get all the children using class name
//     // 3)  load all the other img to second row and change it to bg-danger

//     // **** Global Variables **** \\
//     // TODO: If no use remove
//     // Flags (Booleans) used to control 
//     //when user selects the Attacker and defender
//     var isAttackerSelected = false;
//     var isEnemySelected = false;
//     var attackerImages = [];
//     var enemyImages = [];
//     var attackerIndex = 0;
//     // ************************* //

//     /////////////////////////////////// ONCLICK ////////////////////////////////////////
//     //// onclick event added using class selector $(".setAttacker") for every image ////
//     //// this will be the first event listener to be called, inside we will remove  ////
//     //// the selector to void this listener be called until game is reload          ////
//     ////////////////////////////////////////////////////////////////////////////////////
//     $(".setAttacker").on("click", function (event) {
//         // ----- debugging ----- //
//         //console.log("clicked on image");
//         //$(this).removeClass("bg-success");

//         // Get HTML Colection with attackers images
//         attackerImages = $("#attackerImgsColumn").children();

//         // Get HTML Colection with enemy images
//         enemyImages = $("#enemyImgsColumn").children();

//         // Get the index of the clicked (Selected) character image
//         // by change the HTML Collection to an Array[]
//         attackerIndex = Array.from(attackerImages).indexOf(event.target);
//         // ------ debugging ----- //
//         //console.log(attackerIndex);

//         // using map to interate 
//         attackerImages.map((i, element) => {
//             // get the current element on loop
//             let currentCharacter = $(element);

//             // remove this onclick event from img to void user click on it again
//             currentCharacter.removeClass("setAttacker");

//             // Finding the selected Attacker
//             if(i == attackerIndex){
//                 // ----- debugging ----- //
//                 //console.log(element);

//                 // // remove this onclick event to the selected attacker
//                 // // currentCharacter.removeClass("attackerImage");

//                 // and add the selectedAttacker class into it
//                 currentCharacter.addClass("selectedAttacker");
//             }
//             // for all others (not selected) characters will go to next row dow
//             // and nwe class will be added to make the next onclick handler
//             else 
//             {
//                 // ----- debugging ------ //
//                 //console.log(`clicked at index ${i}`);

//                 // hidde the images not selected from the first col by 
//                 // removing the show-element class
//                 // adding hidden-element class to hidden character
//                 currentCharacter.addClass("hidden-element");
//                 // removing hidden-element class from the others characters on second row
//                 // this will display enemy to be selected by user
//                 // the second row event will be handle by another function below $(".setEnemy")...
//                 $(enemyImages[i]).removeClass("hidden-element");
//                 //    add class to display then
//                 //    $(enemyImages[i]).addClass("show");
//                 //    add a class to make the next event be handle by the next event listener
//                 //    $(enemyImages[i]).addClass("setEnemy");     
//             } 
//         });
//     }); // :::: end of attackerImage onclick event listener ::::

//     /////////////////////////////////////////////////////////////////////////
//     //// onclick event for selectro $("".setEnemy") event listner,       ////
//     //// this event will handle the enemy selection by user              ////
//     /////////////////////////////////////////////////////////////////////////
//     $(".setEnemy").on("click", function (event) {
//         //
//         let enemyIndex = Array.from(enemyImages).indexOf(event.target);

//         // ------ debugging ------- //
//         console.log("inside enemyEvent");
//         console.log(`Enemy Index ${enemyIndex}`);

//         enemyImages.map( (i, enemy) => {
//             // get current enemy on loop 
//             let currentEnemy = $(enemy);
            
//              // check for selected enemy
//              // in this case we only will remove the selected enemy
//              // but we need to make sure user only will be able to select 
//              // anothe enemy after he beats the previous selected one
//              if(i == enemyIndex){
//                  // remove selected enemy from view
//                  currentEnemy.addClass("hidden-element");
//              }
//             //  TODO: get array of #currentEnemyImgRow and display selected enemy
//          });
         

        
//     });

//     ///////////////////////////////////////////
//     // add onclick event to Attack button
//     //////////////////////////////////////////
//     $("#btn-attack").on("click", function () {
//         // debugging
//         console.log("works!");
//     });

//     ////////////////////////////////////////////
//     // onclick listener to handle page relod
//     ////////////////////////////////////////////
//     $("#relod-attack").on("click", function(){
//         location.reload();
//         console.log("reload page");
//     });

// });