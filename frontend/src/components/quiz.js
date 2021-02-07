class Quiz {
    constructor(quizJSON) {
        this.id = quizJSON.id
        this.title = quizJSON.title
        this.difficultyLevel = quizJSON.difficultyLevel
        this.questionAmount = quizJSON.questionAmount
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