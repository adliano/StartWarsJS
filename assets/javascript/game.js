/*
Adriano Alves
Mar 18 2019
Berkely Bootcamp 
game.js javascript file used for RPG game
 */

window.onload = function () {

    let attackerNotSelected = true;
    let enemyNotSelected = true;
    let attacker;
    let enemy;
    // Get HTMLCollection with images at attackerRow
    let characters = Array.from(document.querySelector("#attackerRow").children);

    /* ***************************************************** */
    /* * * * * * * * * * * mkInvisible() * * * * * * * * * * */
    /* ***************************************************** */
    // Method to make element invisible using element ID(s)
    let mkInvisible = function (...elementIDs) {
        for (let element of elementIDs) {
            //document.getElementById(element).classList.add("invisible");
            document.querySelector(element).classList.add("invisible");
        }
    }
    /* ***************************************************** */
    /* * * * * * * * * * * * mkVisible() * * * * * * * * * * */
    /* ***************************************************** */
    // Method to make element visible using element ID(s)
    let mkVisible = function (...elementIDs) {
        for (let element of elementIDs) {
            // document.getElementById(element).classList.remove("invisible");
            document.querySelector(element).classList.remove("invisible");
        }
    }
    /* ****************************************************** */
    /* * * * * * * * * * * * * rand() * * * * * * * * * * * * */
    /* ****************************************************** */
    // Function that generate random number                                          
    // this will return a number beteween the provided range                         
    // Math.random() return number between 0 (inclusive) and 1 (exclusive)           
    // in this case, The maximum is inclusive and the minimum is inclusive
    // it will be used to generate a random attack number           
    var rand = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    /* ******************************************************* */
    /* * * * * * * * * * * onCardClick() * * * * * * * * * * * */
    /* ******************************************************* */
    let onCardClick = function (event) {
        // Check if user selected the Attacker
        if (attackerNotSelected) {
            // Init Attacker JSON
            attacker = {
                // Get Attacker Name
                name: this.dataset.name,
                // Get Attacker HP
                hp: this.dataset.hp,
                // Generate Random Attacker hit
                hit: rand(5, 15),
                // Remove Selected Attacker from Array 
                // (splice returns HTML collection)
                card: characters.splice(characters.indexOf(this), 1),
                // Get node element to set HP
                hpNode : this.querySelector(".setHp"),
            }
            // Remove eventListener from selected Attacker
            // Note: To remove event handlers, the function 
            // specified with the addEventListener() method
            // must be an external function, in this case onCardClick.
            this.removeEventListener("click", onCardClick);
            // Change Attacker background color
            this.firstElementChild.classList.add("bg-success");
            // Move the other characters to enemiesRow
            for (let _enemy of characters) {        
                document.querySelector("#enemiesRow").append(_enemy);
            }
            // Change Text for youCharacterHeader
            document.querySelector("#youCharacterHeader").innerHTML = "Your Attacker";
            // Display availableEnemiesHeader 
            mkVisible("#availableEnemiesHeader");
            // change attackerNotSelected Flag
            attackerNotSelected = !attackerNotSelected;
        }
        // Check if user selected enemy
        else if (enemyNotSelected) {
            // Init enemy JSON
            enemy = {
                // Get Enemy Name
                name: this.dataset.name,
                // Get Enemy HP
                hp: this.dataset.hp,
                // Generate Random Enemy hit
                hit: rand(5, 15),
                // Remove Selected Enemy From Array 
                // (splice returns HTML collection)
                card: characters.splice(characters.indexOf(this), 1)[0],
                // Get node element to set HP
                hpNode : this.querySelector(".setHp"),
            }
            // Change Enemy bg color to red
            this.firstElementChild.classList.add("bg-danger");
            // Move Selected Enemy to enemyRow
            document.querySelector("#enemyRow").append(enemy.card);
            // remove available enemies durring fight section
            mkInvisible("#availableEnemiesHeader", "#enemiesRow","#fightInfo");
            // display fightSectionHeader, btnAttack and enemyHeader
            mkVisible("#fightSectionHeader", "#btnAttack", "#enemyHeader");
            // Change enemyNotSelected flag
            enemyNotSelected = !enemyNotSelected;
        } // END of else
    };
    // Add onclick listener to attackes
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /*               Characters ONCLICK Event                  */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    for (let attacker of characters) {
        attacker.addEventListener("click", onCardClick); // END of event listsner
    } // END of for loop that added onclick event listener to characters
    
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /*               Attack Button ONCLICK Event               */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    // Add onclick to Attack Button
    document.querySelector("#btnAttack").addEventListener("click", function (event) {
        // cretate text with fight info
        let _textInfo = `You Attack ${enemy.name} by : ${attacker.hit}<br>${enemy.name} attck you by : ${enemy.hit}`;
        // Update Attacker HIT rate by 20%
        attacker.hit += Math.round(attacker.hit * (20 / 100));

        // Update HP of fighting characters
        attacker.hp = attacker.hp - enemy.hit;
        enemy.hp = enemy.hp - attacker.hit;
        // Dispaly Updated HPs
        attacker.hpNode.innerHTML = (attacker.hp < 1)? "0" : attacker.hp;
        enemy.hpNode.innerHTML = (enemy.hp < 1)? "0" : enemy.hp;

        // Check for win or game over
        if(attacker.hp < 1){
            // User Lost, GAME OVER 
            _textInfo = `${enemy.name} Defeat You <br> GAME OVER`;
            // Display restart button
            mkVisible("#btnRestart");
        }
        else if(enemy.hp < 1){
            // User defeat enemy, WINS
            
            // Remove enemy
            document.querySelector("#enemyRow").innerHTML = "";
            // Remove fightSectionHeader, btnAttack and enemyHeader
            mkInvisible("#fightSectionHeader", "#btnAttack", "#enemyHeader");
            // Display availableEnemiesHeader and enemiesRow
            mkVisible("#availableEnemiesHeader", "#enemiesRow");
            // Update fight info
            _textInfo = `You Defeat ${enemy.name} <br> SELECT ANOTHER ENEMY!`;
            enemyNotSelected = !enemyNotSelected;
        }

        if(characters.length < 1){
            // User defeat all enemies
            _textInfo = "You Defeat All Enemies <br> GAME OVER";
            mkInvisible("#availableEnemiesHeader",);
            // Display restart button
            mkVisible("#btnRestart");
        }
        // Display Fight Info
        mkVisible("#fightInfo");
        // Display Fight info
        document.querySelector("#fightInfo").innerHTML = _textInfo;
    });
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /*               Restart Button ONCLICK Event              */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    document.querySelector("#btnRestart").addEventListener("click", function(){
        location.reload();
    });
} // END of window.onload