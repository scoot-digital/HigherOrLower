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

    return playingCard;

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

    //  Create new playing card div
    let newCard = document.createElement('div');

    //  Style the playing card div
    newCard.className = "bg-secondary-subtle rounded"

    //  Add the suit icon to the card
    let suitIcon = getSuitIcon(_playingCard.suit);
    
    //  Display the playing card's value
    newCard.innerHTML = String(_playingCard.displayValue + " " + suitIcon);

    //  Add the playing card to its container div
    cardContainer.appendChild(newCard);


}


/**
 *  Returns the svg for the playing card's suit icon
 *  @returns {svg} suitIcon the playing card's suit icon
 */
function getSuitIcon(_cardSuit){

    //  Initialise variable to hold the svg for the suit icon
    let suitIcon;

    //  
    switch(_cardSuit){

        case "heart":

            suitIcon =  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16"><path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/></svg>';
            break;
        
        case "diamond":

            suitIcon =  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-diamond-fill" viewBox="0 0 16 16"><path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z"/></svg>';
            break;

        case "club":

            suitIcon =  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-club-fill" viewBox="0 0 16 16"><path d="M11.5 12.5a3.493 3.493 0 0 1-2.684-1.254 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907 3.5 3.5 0 1 1-2.538-5.743 3.5 3.5 0 1 1 6.708 0A3.5 3.5 0 1 1 11.5 12.5z"/></svg>';
            break;

        case "spade":

            suitIcon =  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-club-fill" viewBox="0 0 16 16"><path d="M11.5 12.5a3.493 3.493 0 0 1-2.684-1.254 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907 3.5 3.5 0 1 1-2.538-5.743 3.5 3.5 0 1 1 6.708 0A3.5 3.5 0 1 1 11.5 12.5z"/></svg>';
            break;  
        
    }


    //  Return the playing card's suit icon
    return suitIcon;

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
        let response = input();

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