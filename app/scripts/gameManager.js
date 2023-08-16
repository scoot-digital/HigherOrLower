//  Initialise variable to represent whether the player has lost or not
let playerLoss = false;

//  Initialise variable to store the numbers of playing cards dealt
//  (Used to name variables new playing cards are assigned to)
let numCardsDealt = 0;

//  Initialise a list of playing cards that have been dealth
//  (Used to stop duplicate cards being drawn)
let cardsDealt = [];

//  Store the questions to ask the player as a list
let questions = ["Higher or lower?", "Inside or outside?", "Colour?", "Suit?"];

//  When the webpage loads, intialise required listeners
window.onload = function() {initialiseListeners()};

/**
* Initialises required listeners. 
* Called on window load
*/
function initialiseListeners(){

    //  Initialise listener for the link that initiates the game when clicked
    document.querySelector("#gameInitiator").addEventListener("click", function() {  

        //  Run the game when the game initiator link is clicked
        runGame();
        
    })

}

/**
 * Runs the game. 
 * (Deals cards from the deck until 5 cards have been pulled)
 */
function runGame(){

    //  Continue the game until 5 cards have been dealt or the player has answered incorrectly
    while (numCardsDealt < 5 && !playerLoss){

        //  Deal a playing card
        dealCard();

        //  Increment the number of cards dealt
        numCardsDealt += 1;

        //  Interact with player
        playerInteraction(numCardsDealt -1);        

    }   

    //  (After 5 cards have been dealt or the player has answered incorrectly)
    //  If the player has answered incorrectly
    if(playerLoss){

        //  Inform them and give them the opportunity to play again
        console.log("Unforunately, that is incorrect. Would you like to restart?");

    //  Otherwise
    } else {

        //  Inform the player they have won
        console.log("Congratualations, you won!");

    }

};