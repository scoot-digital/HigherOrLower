//  Initialise variable to represent start button
let startButton;

//  Declare variable to represent whether the player has finished the current game or not
let gameFinished = false;

//  Declare variable to represent whether the player has lost or not
let playerLoss = false;

//  Initialise a list of playing cards that have been dealth
//  (Used to stop duplicate cards being drawn)
let cardsDealt = [];

//  Create reference to json file which stores player interactions
const interactionData = "./data/interactions.json";

//  Initialise an array to store the interactions to be had with the player
let interactions = [];

//  Initialise a list list to store the number of questions asked of the player
let questionsAsked = [];

//  Initialise variable to represent containers for game
let interactionContainer, cardContainer;

//  Declare variable to hold HTML for empty card container
const emptyCardContainer = '<div class="col" id = "card-container"><div class="row g-5 text-align-center"><div class="col"></div><div class="col-md-3" id="card-3"></div><div class="col"></div></div> <div class="row g-5 text-align-center"><div class="col-md-3" id="card-1"></div><div class="col"></div><div class="col-md-3" id="card-5"></div><div class="col"></div><div class="col-md-3" id="card-2"></div></div><div class="row g-5 text-align-center"><div class="col"></div><div class="col-md-3" id="card-4"></div><div class="col"></div></div></div>'


//  -------------------------   Methods -------------------------   //

//  When the webpage loads, intialise required listeners
window.onload = function() {intialiseVariables(), initialiseListeners()};

/**
 *  Initialises variables
 *  Called on window load
 */
function intialiseVariables(){

    //  Apply reference to start button initialised above
    startButton = document.querySelector("#start-button");
    
    //  Apply reference to container for player interactions initialised above
    interactionContainer = document.querySelector("#interaction-container");

    //  Apply reference to container for playing cards initialised above
    cardContainer = document.querySelector("#card-container");

    //  Read interactions json file and store data as array initialised above
    getInteractions();

}


/**
 * Read the interaction data and store in the global variable initialised above
 * 
 */
async function getInteractions(){

    const response = await

    //  Read in the interaction data
    fetch(interactionData);

    //  Apply interaction data to variable initialised above
    interactions = await response.json();

    interactions = interactions["interactions"];

}


/**
* Initialises required listeners. 
* Called on window load
*/
function initialiseListeners(){

    //  Initialise listener for the link that initiates the game when clicked
    startButton.addEventListener("click", function() {  

        //  Start the game when the game initiator link is clicked
        startGame();
        
    })

}


/**
 * Start the game 
 * 
 */
function startGame(){

    //  Disable start button
    startButton.classList.add("disabled");
    startButton.setAttribute('aria-disabled', true);

    //  Re-set all variables
    gameFinished = false;
    playerLoss = false;
    cardsDealt = [];
    interactionContainer.innerHTML = "";
    cardContainer.innerHTML = emptyCardContainer;

    //  Create the first playing card playing card and start the game
    manageGame(createCard());

}


/**
 * Deals the next playing card and asks the corresponding question, or ends the game if the player answers incorrectly
 * @param {PlayingCard} _playingCard the next playing card to display
 * 
 */
function manageGame(_playingCard){
    
    //  Display the next playing card
    _playingCard.displayCard(_playingCard);
    
    //  If less than 5 cards have been drawn and the player hasn't answered any questions incorrectly
    if (!gameFinished){

        //  Interact with player
        startInteraction();  

   
    //  If 5 cards have been dealt or the player has answered incorrectly
    } else {
        
        //  If the player has answered incorrectly
        if(playerLoss){

            //  Inform them and give them the opportunity to play again
            console.log("Unforunately, that is incorrect. Would you like to restart?");

        //  Otherwise
        } else {

            //  Inform the player they have won
            console.log("Congratualations, you won!");

        }           

    }

}