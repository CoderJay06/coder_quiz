class QuizSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :difficultyLevel, :questionAmount, :category_id
  belongs_to :category 
end
