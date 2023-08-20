/**
 * Returns a new playing card and incremenets the number of playing cards dealt
 * @return {PlayingCard} A new playing card
 */
function dealCard(){ 

    //  Create a new playing card 
    let playingCard = new PlayingCard();  

    //  If this is not the first card to be pulled
    if (cardsDealt.length > 0) {

        console.log("This is not the first card to be pulled");

        //  Check the new card against the list of cards already dealt
        for (let i = 0; i < cardsDealt.length; i++) { 

            //  If the new card has already been pulled
            if (playingCard.value == cardsDealt[i].value && playingCard.suit == cardsDealt[i].suit){

                console.log("!!!!!!!!!!!!!  New card exists, pulling again");

                //  Pull another card
                dealCard();
            
            } else {}

        }

    }

    console.log("New card is unique, adding to list of pulled cards");

    //  Add the new card to the list of card dealt
    cardsDealt.push(playingCard);

    //  Increment the number of cards dealt
    numCardsDealt += 1;

    //  Return the new playing card
    return playingCard;

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