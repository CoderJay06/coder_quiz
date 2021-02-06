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

# REQUIREMENTS
   1. The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend. All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format.

   2. The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior.

   3. The domain model served by the Rails backend must include a resource with at least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments.

   4. The backend and frontend must collaborate to demonstrate Client-Server Communication. Your application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD). Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.

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
         - Build out Category controller actions [index, show]
   
   ## Quiz
      1. Generate Quiz using resource generator, run migration
         - Build out Quiz controller actions [index, show]
      
# Frontend
   ## User
      1. Create user signup form and user class
         - Make signup form functional (able to process user data)
         - Style signup form
      2. Create user login form
         - Make login form functional (able to login user)
         - Style login form
   ## Category
      1. Create category class
         Methods:
         - render categories
         - render category

# TODOS
   - Switch to token based authentication


