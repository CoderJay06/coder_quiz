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
   - User
      . email
      . username
      . password
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
   - AnswerChoice
      . letter
      . description
   - ChosenAnswer
      . letter
      . description

Model Relationships
   - User
      has many ChosenAnswers
   - Quiz
      has many Questions
      belongs to Category
   - Category
      has one to many Quizzes
   - Question
      belongs to Quiz
      has many AnswerChoices
      has many ChosenAnswers
   - AnswerChoice
      belongs to Question
   - ChosenAnswer
      belongs to User
      belongs to Question

# Backend

   1. Start building out Rails API backend (Follow Rails MVC and RESTful conventions)
   ## User
      1. Generate User using resource generator and run migration
         - Build out User controller actions [new (render signup), create (signup new user)]
         - Create User seed data
         - Add controller actions to UserController
      2. Generate Sessions controller for user login (actions: create, destroy)
         - Build login authentiction
         - Build logout logic
   ## Category
      1. Generate Category using resource generator and run migration
   
   ## Quiz
      1. Generate Quiz using resource generator, run migration
      
# Frontend
   1. Create user signup form and user class
      - Make signup form functional (able to process user data)
      - Style signup form
   2. Create user login form
      - Make login form functional (able to login user)
      - Style login form


# TODOS
   - Switch to token based authentication


