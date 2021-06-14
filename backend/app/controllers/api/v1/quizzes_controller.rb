class Api::V1::QuizzesController < ApplicationController
   def index
      quizzes = Quiz.all 

      #  open trivia api setup
      # url = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
      # response = HTTP.get(url).to_json <= render as json
      # JSON.parse response <= remove extra characters
      byebug
      render json: QuizSerializer.new(quizzes), status: :accepted
   end 

   def show 
      quiz = Quiz.find_by(id: params[:id])
      
      render json: QuizSerializer.new(quiz), status: :accepted
   end 
end
