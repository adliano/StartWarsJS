

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

    // Add onclick listener to attackes
    for (let attacker of characters) {
        attacker.addEventListener("click", function (event) {
            // Check if user selected the Attacker
            if (attackerNotSelected) {
                // Get Attacker Name
                attackerName = event.target.getAttribute("alt");
                // Remove Selected Attacker from Array (splice returns HTML collection)
                currentAttacker = characters.splice(characters.indexOf(event.target), 1);
                // Move the enemyCollumn other characters to 
                for (let _enemy of characters) {
                    document.querySelector("#enemyCollumn").append(_enemy);
                }
                // change attackerNotSelected flag
                attackerNotSelected = !attackerNotSelected;
            }
            // Check if user selected enemy
            else if(enemyNotSelected){
                // Get Enemy Name
                enemyName = event.target.getAttribute("alt");
                // Remove Selected Enemy From Array (splice returns HTML collection)
                currentEnemy = characters.splice(characters.indexOf(event.target), 1);
                // Move Selected Enemy to ....
                document.querySelector("#test").append(currentEnemy[0]);
                // Change enemyNotSelected flag
                enemyNotSelected = !enemyNotSelected;
            }

        });
    }
}