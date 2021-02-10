class Quiz {
    constructor(quiz, quizAttributes) {
        this.id = Number(quiz.id)
        this.title = quizAttributes.title
        this.difficultyLevel = quizAttributes.difficultyLevel
        this.questionAmount = quizAttributes.questionAmount
        Quiz.all.push(this)
    }

    showQuiz() {
        return `
         <h2>${this.title}</h2>
      `
    }

    findById(id) {
        if (this.id === id) {
            return this
        }
    }
}
Quiz.all = []