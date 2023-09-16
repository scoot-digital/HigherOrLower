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
         *  @property {list} answerButtons The list to store all the buttons for this interaction
         */
        this.answerButtons = [];

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

        /**
         *  
         * 
         */
        this.questionContainer;

        /**
         * 
         * 
         */
        this.answerContainer;

        /**
         * 
         * 
         */
        this.interactionContainer;
    }

    /**
     * Records the answer given by the player for this question
     * @param {string} _answer the text of the answer button clicked by the user
     */
    recordAnswer(_answer){

        //  Apply the answer given to the relevant attribute for this object
        this.answerGiven = _answer;

        //  Check the answer given
        completeInteraction(this);

    }

    /**
     *  Displays an interaction on-screen
     * 
     */
    displayInteraction(){

        //  -----   Create DOM  -----   //

        //  Create containers
        const interactionContainer = document.createElement('div');
        interactionContainer.classList.add("interaction-container");

        const questionContainer = document.createElement('div');
        questionContainer.classList.add("question-container");

        const answerContainer = document.createElement('div');
        answerContainer.classList.add("answer-container");

        //  Create question text
        const questionParagraph = document.createElement('p');
        questionParagraph.classList.add("fs-4");
        const questionText = document.createTextNode(this.question);
        questionParagraph.appendChild(questionText);

        //  Show the question to its container
        questionContainer.appendChild(questionParagraph);

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
            
            const interaction = this;

            //  Create listener for button to check user's answer
            answerButton.addEventListener("click", function() {  

                //  Make the questions of this interaction smaller
                interaction.questionContainer.firstChild.classList.remove("fs-4");

                //  Hide the buttons for this interaction
                interaction.answerContainer.classList.add("d-none");                  

                //  Record the user's answer
                interaction.recordAnswer(answer);
                
            })

            //  Show the answer button on screen
            answerContainer.appendChild(answerButton);

            //  Add the button to the list of answer buttons relating to this interaction
            this.answerButtons.push(answerButton);

        } 

        //  Add the interaction elements to the interaction container
        interactionContainer.appendChild(questionContainer);
        interactionContainer.appendChild(answerContainer);

        //  Store the interaction's DOM elements as attributes of this interaction
        this.interactionContainer = interactionContainer
        this.questionContainer = questionContainer;
        this.answerContainer = answerContainer;

        //  Add this interaction's DOM elements to the interaction container
        interactionsContainer.insertBefore(interactionContainer, interactionsContainer.firstChild);
        
        //  Increment the number of interactions started
        questionsAsked.push(this);

    }

    /**
     * Converts the interaction to a string containing each of its properties
     * @returns {string} a string representation of the interaction
     */
    toString() {

        return String(`question = ${this.question}, answers = ${this.answers}, correct answer = ${this.correctAnswer}`);
        
    }

}