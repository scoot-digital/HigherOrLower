/**
 * A class which represents a standard playing card
 */
class PlayingCard{

    /**
     * Playing card details
     */
    constructor(){ 

        /**
         *  @property {number} cardNumber the card's draw order number
         * 
         */
        this.cardNumber = cardsDealt.length + 1;

        /**
         * @property {number} value The inherent value of the card
         */
        this.value = Math.floor(Math.random() * 13) + 1;

        /**
         * @property {string} displayValue The displayed value of the card
         */
        this.displayValue = convertValue(this.value); 

        /**
         * @property {string} suit The suit of the card
         */
        this.suit = generateSuit();

        /**
         *  @property {svg} suitIcon The icon of the suit of the card
         * 
         */
        this.suitIcon = getSuitIcon(this.suit);

        //  Display card on creation
        this.displayCard();

        /**
         * Determines the value to display for the playing card, based on its inherent value
         * @param {number} value the inherent value of the card
         * @returns {string} the value of the  card to be displayed
         */
        function convertValue(value){

            let a = String(value);
    
            if (a == 1){
    
                a = "A";
    
            } else if (a == 11){
    
                a = "J";
    
            } else if (a == 12){
    
                a = "Q";
    
            } else if (a == 13){
    
                a = "K";
    
            } else {};

            return a;
    
        }        
        
        /**
         * Chooses a suit for the card from a list of possible suits
         * @returns {string} the suit of the card
         */
        function generateSuit(){
        
            let suits = ["diamond", "heart", "spade", "club"]
            
            let a = suits[(Math.floor(Math.random() * suits.length))];
        
            return a;
        
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

                    suitIcon =  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-spade-fill" viewBox="0 0 16 16"><path d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 19.92 19.92 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a19.919 19.919 0 0 0 1.582-2.907z"/></svg>';
                    break;  
                
            }


            //  Return the playing card's suit icon
            return suitIcon;

        }

    }


    /**
     *  Displays playing card on-screen
     * 
     */
    displayCard(){        

        //  Initialise variable to determine where to display the card on-screen
        let cardPosition;

        switch (this.cardNumber){

            case 1:

                cardPosition = document.querySelector("#card-1");
                break;

            case 2:

                cardPosition = document.querySelector("#card-2");
                break;

            case 3:

                cardPosition = document.querySelector("#card-3");
                break;

            case 4:

                cardPosition = document.querySelector("#card-4");
                break;

            case 5:

                cardPosition = document.querySelector("#card-5");
                
        } 

        //  Create new playing card div
        let newCard = document.createElement('div');

        //  Style the playing card div
        newCard.className = "bg-secondary-subtle rounded p-3"
        
        //  Display the playing card's value
        newCard.innerHTML = String(this.displayValue + "<br/>" + this.suitIcon);

        //  Add the playing card to its container div
        cardPosition.appendChild(newCard);

        //  If this is not the first playing card to be drawn
        if(cardsDealt.length > 1){

            //  Check if the player answered the question correctly
            completeInteraction(cardsDealt.length-1);

        }

    }

    /**
     * Converts the playing card to a string containing each of its properties
     * @returns {string} a string representation of the playing card
     */
    toString() {

        return String("value = " + this.value + ", display value = " + this.displayValue + ", suit = " + this.suit);
        
    }

}