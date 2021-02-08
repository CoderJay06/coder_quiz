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
   x 1. The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend. All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format.

      - Frontend uses HTML, CSS, JS. Rails API in backend. All interactions handled asynchronously using fetch, callbacks and promises

   x 2. The JavaScript application must use Object Oriented JavaScript (classes) to encapsulate related data and behavior.
   
      - Category, Quiz, and User Javascript classes are used to encaspulate related data and behavior

   x 3. The domain model served by the Rails backend must include a resource with at least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments.

      - The Category model includes a has many Quizzes relationship with Quizzes referencing Category

   x 4. The backend and frontend must collaborate to demonstrate Client-Server Communication. Your application should have at least 3 AJAX calls, covering at least 2 of Create, Read, Update, and Delete (CRUD). Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.

      - Backend and frontend collaborate demonstrating client-server communication int the following ways:
         . User signs up on a frontend form, submiting user input sends request to backend, persisting user data into the users database (Create)
         . User can login, sending credentials to backend sessions controller to authenticate and assign session to user id.
         . User can logout, sends Patch request to backend deleting user session (Delete)
      - CRUD actions covered, user can signup (create) and user can logout (delete)
      - Client-side JS uses fetch requests to handle client-server communication with appropriate HTTP verb for each fetch
      - Rail api follows RESTful conventions

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

# REFACTORING

   ## Best Practices 
      JavaScript
         [ ] Use classes and functions to organize your code into reusable pieces.
         [ ] Translate JSON responses into JavaScript model objects using ES6 class or constructor function syntax.
         [ ] Use ES6 features when appropriate (e.g. arrow functions, let & const, rest and spread syntax).

      Rails
         [ ] Follow Rails MVC and RESTful conventions. That means, for example, that a request GET /puppies ought to be handled by the PuppiesController, fetch puppies from the database using a Puppy Active Record model, and return a list of puppies as JSON.
         [ ] Well-named variables and methods
         [ ] Short, single-purpose methods





