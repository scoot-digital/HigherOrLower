/**
 * Creates a new playing card object, increments the number of playing cards dealt 
 * and calls for the new card to be displayed on screen * 
 * 
 * @returns {playingCard} a new playing card
 */
function createCard(){ 

    //  Create a new playing card 
    const playingCard = new PlayingCard();  

    //  -----   Duplication check   -----   //

    //  If this is not the first card to be pulled
    if (cardsDealt.length > 0) {

        console.log(`Cards dealt length: ${cardsDealt.length}`);

        //  Check the new card against the list of cards already dealt
        for (let i = 0; i < cardsDealt.length; i++) { 

            console.log(`Checking newly created card for duplication against card no. ${i}`);

            //  If the new card has already been pulled
            if (playingCard.value == cardsDealt[i].value && playingCard.suit == cardsDealt[i].suit){

                console.log("Card is a duplicate");

                //  Pull another card
                return createCard();
            
            }

        }

    }

    console.log("Card is not a duplicate");

    //  -----   End duplication check   -----   //

    //  Add the new card to the list of card dealt
    cardsDealt.push(playingCard);

    //  Display playing card
    playingCard.displayCard();

    //  Log the new card
    console.log(`Card dealt: ${playingCard.toString()}`);

    //  Return the new playing card
    return playingCard;

}


/**
 * Create an interaction with the player (asks a question)
 */
function startInteraction(){

    //  If the player has answered all the questions
    if (cardsDealt.length > interactions.length){

        //  The game is finished
        gameFinished = true;      
        manageGame();       

    // If the player has not answered all the questions
    } else {

        //  Create a new interaction
        let interaction = new Interaction(cardsDealt.length -1);

        //  Display the new interaction
        interaction.displayInteraction();  

    }

}


/**
 * Checks if the answer given by the user for a question was correct and then calls the gameManager to continue the game
 * @param {interaction} _interaction the interaction to complete
 */
function completeInteraction(_interaction){

    console.log(`Question asked: ${_interaction.question}, answer given: ${_interaction.answerGiven}`);

    //  If all the questions haven't been answered
    if(questionsAsked.length <= interactions.length){

        console.log("It thinks it needs to draw a new card");

        //  Deal the next card
        const nextCard = createCard();

    }

    console.log("Question was answered");

    //  -----   Determine correct answer for question    -----   //    

    let correctAnswer;   
    
    //  If the first question is being answered
    if(questionsAsked.length == 1){

        console.log("checking anwswer!");

        //  If the second card drawn is higher than the first
        if (cardsDealt[1].value > cardsDealt[0].value) {

            //  Apply the relevant answer
            _interaction.correctAnswer = "Higher";  
        
        //  If the second card is lower than the first
        } else if (cardsDealt[1].value < cardsDealt[0].value) {

            //  Apply the relevant answer
            _interaction.correctAnswer = "Lower";
        
        //  If the second card drawn is equal to the first
        } else {

            //  Apply the relevant answer
            _interaction.correctAnswer = "Equal";

        }

    //  If the second question is being answered
    } else if (questionsAsked.length == 2){

        //  If the third card falls between the two cards
        if ((cardsDealt[2].value - cardsDealt[0].value) * (cardsDealt[2].value - cardsDealt[1].value) <= 0){

            _interaction.correctAnswer = "Inside";
            
        //  If the third card does not fall between the two cards
        }   else {

            _interaction.correctAnswer = "Outside";

        }

    //  If the third answer is being answered
    } else if (questionsAsked.length == 3){

        
        console.log(`Card suit is: ${cardsDealt[3].suit}`);

        switch (cardsDealt[3].suit){

            case "Diamonds": 
            case "Hearts":

                _interaction.correctAnswer = "Red";
                break;

            case "Clubs":
            case "Spades":

                _interaction.correctAnswer = "Black"
                break;

        }

    } else if (questionsAsked.length == 4){

        
        console.log(`Card suit is: ${cardsDealt[4].suit}`);

        switch (cardsDealt[4].suit){
            

            case "Clubs":

                _interaction.correctAnswer = "Clubs"
                break;

            case "Diamonds":

                _interaction.correctAnswer = "Diamonds"
                break;

            case "Hearts":

                _interaction.correctAnswer = "Hearts"
                break;

            case "Spades":

                _interaction.correctAnswer = "Spades"
                break;

        }

    }

    console.log(`Answer given: ${_interaction.answerGiven} - Correct answer: ${_interaction.correctAnswer}`);
          

    //  -----   Evaluate answer -----   //

    //  If the player is not correct
    if(_interaction.answerGiven != _interaction.correctAnswer){

        //  The player has lot
        playerLoss = true;

        //  The game is over
        gameFinished = true;

    }   

    //  Recall function to ask the next question (if the player is correct) or end the game (if they are not correct)
    manageGame();    

}