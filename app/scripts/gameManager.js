//  Initialise variable to represent start button
let startButton;

//  Declare variable to represent whether the player has finished the current game or not
let gameFinished = false;

//  Declare variable to represent whether the player has lost or not
let playerLoss = false;

//  Initialise a list of playing cards that have been dealth
//  (Used to stop duplicate cards being drawn)
let cardsDealt = [];

//  Initialise a list list to store the number of questions asked of the player
let questionsAsked = [];

//  Create reference to json file which stores player interactions
const interactionData = "./data/interactions.json";

//  Initialise an array to store the interactions to be had with the player
let interactions = [];

//  Initialise variable to represent containers for game
let interactionsContainer, cardContainer;

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
    interactionsContainer = document.querySelector("#interactions-container");

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
    disableButton([startButton]);

    //  Re-set all variables
    gameFinished = false;
    playerLoss = false;
    cardsDealt = [];
    questionsAsked = [];
    interactionsContainer.innerHTML = "";
    cardContainer.innerHTML = emptyCardContainer;

    //  Draw the first playing card
    createCard();

    //  Create the first playing card playing card and start the game
    manageGame();

}


/**
 * Deals the next playing card and asks the corresponding question, or ends the game if the player answers incorrectly
 * @param {PlayingCard} _playingCard the next playing card to display
 * 
 */
function manageGame(){
    
    //  If less than 5 cards have been drawn and the player hasn't answered any questions incorrectly
    if (!gameFinished){

        //  Interact with player
        startInteraction();  
   
    //  If 5 cards have been dealt or the player has answered incorrectly
    } else {

        //  Initialise a message to tell the player the game is over
        const outcomeParagraph = document.createElement('p');  
        //  Initialise variable to hold outcome
        let outcomeText;      
        //  Style the outcome paragraph
        outcomeParagraph.classList.add("fs-4");

        //  Create the restart link
        const restartLink = document.createElement('a');
        const restartText = "Restart";
        const restartTextNode = document.createTextNode(restartText);
        restartLink.appendChild(restartTextNode);
        restartLink.title = restartText;
        restartLink.href = "#";
        restartLink.classList.add("mb-3", "me-3", "restart-button"); 

        //  Create listener for link to be able to restart the game
        restartLink.addEventListener("click", function() {  

            //  Restart the game
            startGame();
            
        })
        
        //  If the player has lost
        if(playerLoss){
            
            //  Apply the outcome text to the variable initialised above
            outcomeText = document.createTextNode("Unforunately, that is incorrect. ");
            outcomeParagraph.appendChild(outcomeText);

        //  If the player has won
        } else {

            //  Apply the outcome text to the variable initialised above 
            outcomeText = document.createTextNode("Congratualations, you won! ");
            outcomeParagraph.appendChild(outcomeText);

        }              
        
        //  Add the restart link to the outcome paragraph
        outcomeParagraph.appendChild(restartLink);
        //  Inform the player
        interactionsContainer.insertBefore(outcomeParagraph, interactionsContainer.firstChild);

    }

}

/**
 * Disables a button
 * @param {List} _buttonList 
 */
function disableButton(_buttonList){

    _buttonList.forEach(b => {

        b.classList.add("disabled");
        b.setAttribute('aria-disabled', true);    
        
    });


}