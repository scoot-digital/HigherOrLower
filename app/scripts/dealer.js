/**
 * Creates a new playing card object, increments the number of playing cards dealt 
 * and calls for the new card to be displayed on screen
 * 
 */
function dealCard(){ 

    //  Create a new playing card 
    let playingCard = new PlayingCard();  

    //  If this is not the first card to be pulled
    if (cardsDealt.length > 0) {

        //  Check the new card against the list of cards already dealt
        for (let i = 0; i < cardsDealt.length; i++) { 

            //  If the new card has already been pulled
            if (playingCard.value == cardsDealt[i].value && playingCard.suit == cardsDealt[i].suit){

                //  Pull another card
                return dealCard();
            
            } else {}

        }

    }

    //  Add the new card to the list of card dealt
    cardsDealt.push(playingCard);

    //  Increment the number of cards dealt
    numCardsDealt += 1;

    //  Display the playing card on screen
    displayCard(playingCard, numCardsDealt);

}

/**
 *  Displays new playing card on-screen
 * 
 */
function displayCard(_playingCard, _cardNumber){

    console.log(_playingCard, _cardNumber);

    let cardContainer;

    switch (_cardNumber){

        case 1:

            cardContainer = document.querySelector("#card-1");
            break;

        case 2:

            cardContainer = document.querySelector("#card-2");
            break;

        case 3:

            cardContainer = document.querySelector("#card-3");
            break;

        case 4:

            cardContainer = document.querySelector("#card-4");
            break;

        case 5:

            cardContainer = document.querySelector("#card-5");
            
    } 

    cardContainer.innerHTML = String(_playingCard.displayValue + " " + _playingCard.suit);

}


/**
 * Handles interaction with the player (including asking questions and checking answers)
 * @param {num} _interaction the number of cards dealt -1 (Used to determine which question to ask)
 */
function playerInteraction(_interaction){

    //  If the player has not answered all the questions
    if (_interaction < questions.length){

        //  Ask the next question
        console.log(questions[_interaction]);
        
        //  Get the answer from the player
        let response = prompt();

        //  -----   Check the answer    -----

        //  If the first question is being answered
        if(_interaction = 0){

            if (response = "lower" && cardsDealt[1].value > cardsDealt[0].value){

                gameFinished = true;
                playerLoss = true;

            } else if (response = "higher" && cardsDealt[1].value < cardsDealt[0].value){

                gameFinished = true;
                playerLoss = true;

            }

        //  If the second question is being answered
        } else if (_interaction = 1){

            

        }


    // If the player has answered all the questions
    } else {

        //  The game is finished
        gameFinished = true;

    }

}