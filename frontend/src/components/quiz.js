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
            ${this.showQuestions()}
         <button class="submit-quiz-btn">Submit Quiz</button>
         `
    }

    showQuestions() {
        return this.questions.map(question => {
            return `
                  <div class="question-description">${question.question}</div>
                  <div class="answers">
                     <label>
                        <input type="radio" value="a">
                        a : ${question.answerChoices.a}
                     </label>
                     <label>
                        <input type="radio" value="b">
                        b : 
                        ${question.answerChoices.b}
                     <label>
                        <input type="radio" value="c">
                        c : 
                        ${question.answerChoices.c}
                     </label>
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