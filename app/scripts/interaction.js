/**
 * A class which represents an interaction
 * @param {number} _interaction the interaction number
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
        this.correctAnswer;

        /**
         *  @property {string} answerGiven The answer given for the question
         *  (Applied later)
         */
        this.answerGiven;
        
    }

    /**
     * Records the answer given by the player for this question
     * @param {string} _answer the text of the answer button clicked by the user
     * @param {interaction} _interaction 
     */
    recordAnswer(_answer, _interaction){

        //  Apply the answer given to the relevant attribute for this object
        this.answerGiven = _answer;

        //  Check the answer given
        completeInteraction(_interaction);

    }

    /**
     *  Displays an interaction on-screen
     *  @param {interaction} _interaction the question being displayed (passed into the evaluateAnswer() function of each answer button) 
     */
    displayInteraction(_interaction){

        //  -----   Create DOM  -----   //

        //  Create question text
        const questionParagraph = document.createElement('p');
        const questionText = document.createTextNode(this.question);
        questionParagraph.appendChild(questionText);

        //  Show the question text on screen
        interactionContainer.appendChild(questionParagraph);

        //  Create answer buttons
        for (let i = 0; i < this.answers.length; i++) {

            const answer = this.answers[i];
            
            //  Create answer buttons
            const answerButton = document.createElement('a');
            const answerText = document.createTextNode(answer);
            answerButton.appendChild(answerText);
            answerButton.title = answer;
            answerButton.href = "#";
            answerButton.classList.add("btn", "btn-primary", "mb-3", "me-3", "answer-button");

            //  Create listener for button to check user's answer
            answerButton.addEventListener("click", function() {  

                //  Evaluate if the user's choice is correct
                _interaction.recordAnswer(answer, _interaction);
                
            })

            //  Show the question text on screen
            interactionContainer.appendChild(answerButton);

            //  Increment the number of interactions started
            questionsAsked += 1;
            
        }

    }

    /**
     * Converts the interaction to a string containing each of its properties
     * @returns {string} a string representation of the interaction
     */
    toString() {

        return String("question = " + this.question + ", answers = " + this.answers + ", correct answer = " + this.correctAnswer);
        
    }

}