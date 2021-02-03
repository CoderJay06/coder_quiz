# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users seed data
User.create(email: 'jay@flatiron.com', username: 'jay06', password: 'j123')
User.create(email: 'bob@email.com', username: 'bob01', password: 'bob123')
User.create(email: 'mike@flatiron.com', username: 'mike01', password: 'mik123')
User.create(email: 'cindy@mail.com', username: 'cindy02', password: 'cind123')
User.create(email: 'sarah@mail.com', username: 'sarah05', password: 'sara123')
User.create(email: 'avi@example.com', username: 'avi04', password: 'av123')

# Categories seed data
category1 = Category.create(name: 'Algorithms')
category2 = Category.create(name: 'Data Structures')
category3 = Category.create(name: 'Databases')

# Quizzes seed data
Quiz.create(
   title: 'Quiz 1', difficultyLevel: 'Easy', questionAmount: 10, category_id: category1.id
)
Quiz.create(
   title: 'Quiz 2', difficultyLevel: 'Easy', questionAmount: 12, category_id: category2.id
)
Quiz.create(
   title: 'Quiz 3', difficultyLevel: 'Medium', questionAmount: 10, category_id: category3.id
)
Quiz.create(
   title: 'Quiz 4', difficultyLevel: 'Hard', questionAmount: 5, category_id: category1.id
)
Quiz.create(
   title: 'Quiz 5', difficultyLevel: 'Medium', questionAmount: 15, category_id: category2.id
)
Quiz.create(
   title: 'Quiz 6', difficultyLevel: 'Medium', questionAmount: 10, category_id: category1.id
)