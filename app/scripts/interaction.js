/**
 * A class which represents an interaction
 */
class Interaction{

    /**
     * 
     */
    constructor(_interaction){

        /**
         * @property {string} question The question asked of the player
         */
        this.question = interactions[_interaction].question;

        /**
         * @property {list} answers The potential answers for the question
         */
        this.answers = interactions[_interaction].answers;

        /**
         * @property {string} correctAnswer The correct answer for the question
         * (Applied later)
         */
        this.question;

    }

    /**
     *  Evaluates if the player answered the questions correctly or not
     *  @param {string} _answerGiven the answer given by the player
     *  @returns {boolean} a value representing if the player answered the question correctly
     */
    evaluateAnswer(){

        //  If the answer given by the player is correct

        //  Advise the player

        //  If the answer given by the player is not true

        //  Advise the player

    }

    /**
     * Converts the interaction to a string containing each of its properties
     * @returns {string} a string representation of the interaction
     */
    toString() {

        return String("question = " + this.question + ", answers = " + this.answers + ", correct answer = " + this.correctAnswer);
        
    }

}