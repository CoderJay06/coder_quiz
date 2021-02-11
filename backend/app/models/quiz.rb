class Quiz < ApplicationRecord
   validates :title, :difficultyLevel, :questionAmount, :category_id,
   presence: true
   belongs_to :category
end
