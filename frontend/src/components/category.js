// Category class ()
class Category {
    constructor(category, categoryAttributes, categoryRelationships) {
        //   debugger
        this.id = Number(category.id)
        this.name = categoryAttributes.name
        this.quizzes = categoryRelationships.quizzes.data
        Category.all.push(this) // Store all category objs in array
    }

    // Method to render category to the dom
    renderCategory() {
        return `
           <option value="${this.name}" data-id="${this.id}">${this.name}</option>
          `
            //   let categoryOption = document.createElement("option")
            //   categoryOption.value = `${this.value}`
            //   categoryOption.dataset.id = `${this.id}`
            //   categoryOption.innerHTML = `${this.name}`
            //   return categoryOption
    }

    // Get quizzes for current category
    getQuizzes() {
        const quizzes = this.quizzes.map(quiz => {
            return `
                  <ul id="quiz-${quiz.id}-list" data-id="${quiz.id}">
                     <li>Title: ${quiz.title}</li>
                     <li>Difficulty: ${quiz.difficultyLevel}</li>
                     <li>Question Amount: ${quiz.questionAmount}</li>
                  </ul>
                  <button class="quiz-${quiz.id}-btn" data-id="${quiz.id}">Take Quiz</button>
                  `
        })
        return quizzes.join()
    }
}
Category.all = []