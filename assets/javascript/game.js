

window.onload = function () {

    let attackerName;
    let enemyName;
    let attackerNotSelected = true;
    let enemyNotSelected = true;
    let currentAttacker;
    let currentEnemy;
    // Get HTMLCollection with images at attackerImgsColumn
    let characters = Array.from(document.querySelector("#attackerImgsColumn").children);
    // Get total numbefr of images
    let totalCharacters = characters.length;

    /* ***************************************************** */
    /* * * * * * * * * * * mkInvisible() * * * * * * * * * * */
    /* ***************************************************** */
    // Method to make element invisible using element ID(s)
    let mkInvisible = function(...elementIDs){
        for(let element of elementIDs ){
            //document.getElementById(element).classList.add("invisible");
            document.querySelector(element).classList.add("invisible")
        }
    }
    /* ***************************************************** */
    /* * * * * * * * * * * * mkVisible() * * * * * * * * * * */
    /* ***************************************************** */
    // Method to make element visible using element ID(s)
    let mkVisible = function(...elementIDs){
        for(let element of elementIDs ){
            // document.getElementById(element).classList.remove("invisible");
            document.querySelector(element).classList.remove("invisible")
        }
    }
    // Add onclick listener to attackes
    for (let attacker of characters) {
        attacker.addEventListener("click", function (event) {
            // Check if user selected the Attacker
            if (attackerNotSelected) {
                // Get Attacker Name
                attackerName = event.target.getAttribute("alt");
                // Remove Selected Attacker from Array (splice returns HTML collection)
                currentAttacker = characters.splice(characters.indexOf(event.target), 1);
                // Move the enemiesCollumn other characters to 
                for (let _enemy of characters) {
                    // TODO: change background color to yellow
                    // ................
                    document.querySelector("#enemiesCollumn").append(_enemy);
                }
                // Display availableEnemiesHeader 
                mkVisible("#availableEnemiesHeader");
                // change attackerNotSelected flag
                attackerNotSelected = !attackerNotSelected;
            }
            // Check if user selected enemy
            else if(enemyNotSelected){
                // Get Enemy Name
                enemyName = event.target.getAttribute("alt");
                // Remove Selected Enemy From Array (splice returns HTML collection)
                currentEnemy = characters.splice(characters.indexOf(event.target), 1);
                // TODO: Change bg color to red
                // ...............
                // Move Selected Enemy to enemyColumn
                document.querySelector("#enemyColumn").append(currentEnemy[0]);
                // remove available enemies durring fight section
                mkInvisible("#availableEnemiesHeader","#enemiesCollumn");
                // display fightSectionHeader, btnAttack and enemyHeader
                mkVisible("#fightSectionHeader","#btnAttack","#enemyHeader");







                // Change enemyNotSelected flag
                enemyNotSelected = !enemyNotSelected;
            }

        });
    }
}