// Category class ()
class Category {
    constructor(categoryJSON) {
        this.id = categoryJSON.id
        this.name = categoryJSON.name
        this.quizzes = categoryJSON.quizzes
    }

    // Method to render category to the dom
    renderCategory() {
        return `
         <option value="${this.name}" data-id="${this.id}">${this.name}</option>
        `
    }

    // Get quizzes for current category
    getQuizzes() {
        const quizzes = this.quizzes.map(quiz => {
            return `
               <ul id="quiz-${quiz.id}-list">
                  <li>Title: ${quiz.title}</li>
                  <li>Difficulty: ${quiz.difficultyLevel}</li>
                  <li>Question Amount: ${quiz.questionAmount}</li>
               </ul>
            `
        })
        return quizzes.join()
    }
}