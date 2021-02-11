class Category < ApplicationRecord
   validates :name, 
   presence: true, uniqueness: true,
   length: { minimum: 3, maximum: 40 }  
   has_many :quizzes, dependent: :destroy
end
