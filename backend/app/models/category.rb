class Category < ApplicationRecord
   has_many :quizzes, dependent: :destroy
end
