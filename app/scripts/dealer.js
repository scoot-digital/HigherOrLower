/**
 * Returns a new playing card and incremenets the number of playing cards dealt
 * @return {PlayingCard} A new playing card
 */
function dealCard(){ 

    //  Create a new playing card 
    const playingCard = new PlayingCard();  

    //  Increment the number of cards dealt
    numCardsDealt += 1;

    //  Return the new playing card
    return playingCard;

}