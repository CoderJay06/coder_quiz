class Quiz {
    constructor(quiz, quizAttributes) {
        this.id = Number(quiz.id)
        this.title = quizAttributes.title
        this.difficultyLevel = quizAttributes.difficultyLevel
        this.questionAmount = quizAttributes.questionAmount
        this.questions = this.questions()
        Quiz.all.push(this)
    }

    showQuiz() {
        return `
         <h2>${this.title}</h2>
         `
    }

    showQuestions() {
        return this.questions.map(question => {
            return `
               <div class="question">${question.question}</div>
               <div class=""answers">
               <input type="radio" value="${question.answerChoices.a}">
               a : ${question.answerChoices.a}
               <input type="radio" value="${question.answerChoices.b}">
               b : ${question.answerChoices.b}
               <input type="radio" value="${question.answerChoices.c}">
               c : ${question.answerChoices.c}
               </div>
            `
        }).join("")
    }


    findById(id) {
        if (this.id === id) {
            return true
        }
    }

    questions() {
        const questions = [{
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
        return questions
    }

}
Quiz.all = []