/**
 * Returns a new playing card and incremenets the number of playing cards dealt
 * @return {PlayingCard} A new playing card
 */
function dealCard(){ 

    //  Create a new playing card 
    const playingCard = new PlayingCard();  

    //  Return the new playing card
    return playingCard;

}

/**
 * Handles interaction with the player (including asking questions and checking answers)
 * @param {num} value the number of cards dealt -1 (Used to determine which question to ask)
 */
function playerInteraction(value){

    //  If the player has not answered all the questions
    if (value < questions.length){

        //  Ask the next question
        console.log(questions[value]);
        
        //  Get the answer from the player
        response = prompt();

        //  -----   Check the answer    -----

        //  If the first question is being answered
        if(value = 0){

            if (response = "lower" && cardsDealt[1] > cardsDealt[0]){

                playerLoss = true;

            } else if (response = "higher" && cardsDealt[1] < cardsDealt[0]){

                playerLoss = true;

            }

        //  If the second question is being answered
        } else if (value = 1){

            

        }


    }
    
}