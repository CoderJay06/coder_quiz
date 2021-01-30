Project structure:
   javascript-project/
   backend/
      app/
      (...other rails files and folders)
   frontend/
      index.html
      style.css
      index.js
   README.md

Classes/Models
   - Quiz
      . title
      . difficultyLevel
      . questionAmount
   - Category
      . name
   - Question
      . description
      . answerChoices
      . correctAnswer

Model Relationships
   - Quiz
      has many Questions
      belongs to Category
   - Category
      has one to many Quizzes
   - Question
      belongs to Quiz


1. Start building out Rails API backend (Follow Rails MVC and RESTful conventions)
2. 