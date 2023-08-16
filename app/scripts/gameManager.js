//  Initialise variable to store the numbers of playing cards dealt
//  (Used to name variables new playing cards are assigned to)
let numCardsDealt = 0;

//  Initialise a list of playing cards that have been dealth
//  (Used to stop duplicate cards being drawn)
let cardsDealt = [];

//  When the webpage loads, intialise required listeners
window.onload = function() {initialiseListeners()};

/**
* Initialises required listeners. 
* Called on window load
*/
function initialiseListeners(){

    //  Initialise listener for the link that initiates the game when clicked
    document.querySelector("#gameInitiator").addEventListener("click", function() {  

        //  Deal the first playing card
        dealCard();
        
    })

}