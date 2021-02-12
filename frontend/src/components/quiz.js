class Quiz {
    constructor(quiz, quizAttributes) {
        this.id = Number(quiz.id)
        this.title = quizAttributes.title
        this.difficultyLevel = quizAttributes.difficultyLevel
        this.questionAmount = quizAttributes.questionAmount
        this.questions = this.setQuestions()
        Quiz.all.push(this)
    }

    showQuiz() {
        return `
         <h2>${this.title}</h2>
         <div class="question-container">
            ${this.showQuestions()}
         </div>
         <button class="submit-quiz-btn">Submit Quiz</button>
         `
    }

    showQuestions() {
        return this.questions.map(question => {
            return `
                  <h4 class="question-description">${question.question}</h4>
                  <div class="answers">
                     <div class="answer-a">
                        <input type="radio" value="${question.answerChoices.a}">
                        a : ${question.answerChoices.a}
                     </div>
                     <div class="answer-b">
                        <input type="radio" value="${question.answerChoices.b}">
                        b : ${question.answerChoices.b}
                     </div>
                     <div class="answer-c">
                        <input type="radio" value="${question.answerChoices.c}">
                        c : ${question.answerChoices.c}
                     </div>
                  </div>
               `
        }).join("")
    }


    findById(id) {
        if (this.id === id) {
            return true
        }
    }

    setQuestions() {
        const questionsArray = [{
                question: "Who invented the term RESTful?",
                answerChoices: {
                    a: "Avi Flombaum",
                    b: "Roy Fielding",
                    c: "John Wayne"
                },
                answer: "b"
            },
            {
                question: "Which one of these is a Data Structure?",
                answerChoices: {
                    a: "bus-list",
                    b: "tree-hash",
                    c: "linked-list"
                },
                answer: "c"
            },
            {
                question: "Who was the first female programmer?",
                answerChoices: {
                    a: "Ada Lovelace",
                    b: "Mariah Carey",
                    c: "Alan Turing"
                },
                answer: "a"
            }
        ];
        return questionsArray
    }

}
Quiz.all = []