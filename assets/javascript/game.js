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
            document.querySelector(element).classList.add("invisible")
        }
    }
    /* ***************************************************** */
    /* * * * * * * * * * * * mkVisible() * * * * * * * * * * */
    /* ***************************************************** */
    // Method to make element visible using element ID(s)
    let mkVisible = function (...elementIDs) {
        for (let element of elementIDs) {
            // document.getElementById(element).classList.remove("invisible");
            document.querySelector(element).classList.remove("invisible")
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
            }
            // Remove eventListener from selected Attacker
            // Note: To remove event handlers, the function 
            // specified with the addEventListener() method
            // must be an external function, in this case onCardClick.
            this.removeEventListener("click", onCardClick);
            // Move the other characters to enemiesRow
            for (let _enemy of characters) {

                // TODO: change background color to yellow
                // ................
                
                document.querySelector("#enemiesRow").append(_enemy);
            }
            // Change Text for youCharacterHeader
            document.querySelector("#youCharacterHeader").innerHTML = "Your Attacker";
            // Display availableEnemiesHeader 
            mkVisible("#availableEnemiesHeader");
            // change attackerNotSelected flag
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
            }


            // TODO: Change bg color to red
            // ...............


            // Move Selected Enemy to enemyRow
            document.querySelector("#enemyRow").append(enemy.card);
            // remove available enemies durring fight section
            mkInvisible("#availableEnemiesHeader", "#enemiesRow");
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
    // Add onclick to Attack Button
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /*               Attack Buuton ONCLICK Event               */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    document.querySelector("#btnAttack").addEventListener("click", function (event) {
        // cretate text with fight info
        let _textInfo = `You Attack ${enemy.name} by : ${attacker.hit}<br>${enemy.name} attck you by : ${enemy.hit}`;
        // Display Fight info
        document.querySelector("#fightInfo").innerHTML = _textInfo;
        // Update Attacker HIT rate by 20%
        attacker.hit += Math.round(attacker.hit * (20 / 100));




        //TODO: Update HP of fighting characters
        //TODO: Check for winner
        








    });
} // END of window.onload

// enemy