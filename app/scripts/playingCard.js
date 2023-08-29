/**
 * A class which represents a standard playing card
 */
class PlayingCard{

    /**
     * Playing card details
     */
    constructor(){

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
         * Determines the value to display for the playing card, based on its inherent value
         * @param {number} value the inherent value of the card
         * @returns {string} the value of the  card to be displayed
         */
        function convertValue(value){

            let a = String(value);
    
            if (a == 1){
    
                a = "ace";
    
            } else if (a == 11){
    
                a = "jack";
    
            } else if (a == 12){
    
                a = "queen";
    
            } else if (a == 13){
    
                a = "king";
    
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

    }

    /**
     * Converts the playing card to a string containing each of its properties
     * @returns {string} a string representation of the playing card
     */
    toString() {

        return String("value = " + this.value + ", display value = " + this.displayValue + ", suit = " + this.suit);
        
    }

}