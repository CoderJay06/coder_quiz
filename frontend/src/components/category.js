// Category class ()
class Category {
    constructor(
        category, categoryAttributes, categoryRelationships,
        categoryRelationshipAttrs) {
        this.id = Number(category.id)
        this.name = categoryAttributes.name
        this.quizzes = categoryRelationships.quizzes.data
        this.assignQuizzesAttributes(categoryRelationshipAttrs)
        Category.all.push(this) // Store all category objs in array
    }

    assignQuizzesAttributes(attributes) {
        const quizAttributes = attributes.map(quiz => {
            if (this.id === quiz.attributes.category_id) {
                return quiz.attributes
            }
        }).filter(quizObj => quizObj !== undefined)
        this.setAttributes(quizAttributes)
    }

    setAttributes(quizAttributes) {
        for (let i = 0; i < quizAttributes.length; i++) {
            if (this.id === quizAttributes[i].category_id) {
                this.quizzes[i].title = quizAttributes[i].title
                this.quizzes[i].difficultyLevel = quizAttributes[i].difficultyLevel
                this.quizzes[i].questionAmount = quizAttributes[i].questionAmount
            }
        }
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
                  <button class="quiz-btn" data-id="${quiz.id}">Take Quiz</button>
                  `
        })
        return quizzes.join()
    }
}
Category.all = []