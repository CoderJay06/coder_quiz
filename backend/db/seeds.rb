# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(email: 'jay@flatiron.com', username: 'jay06', password: 'j123')
User.create(email: 'bob@email.com', username: 'bob01', password: 'bob123')
User.create(email: 'mike@flatiron.com', username: 'mike01', password: 'mik123')
User.create(email: 'cindy@mail.com', username: 'cindy02', password: 'cind123')
User.create(email: 'sarah@mail.com', username: 'sarah05', password: 'sara123')
User.create(email: 'avi@example.com', username: 'avi04', password: 'av123')