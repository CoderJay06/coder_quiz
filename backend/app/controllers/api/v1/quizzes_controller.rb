class Api::V1::QuizzesController < ApplicationController
   def index
      quizzes = Quiz.all 
 
      # render json: quizzes, except: [:created_at, :updated_at]
      render json: QuizSerializer.new(quizzes), status: :accepted
   end 

   def show 
      quiz = Quiz.find_by(id: params[:id])
      # byebug
      # render json: quiz, except: [:created_at, :updated_at]
      render json: QuizSerializer.new(quiz), status: :accepted
   end 
end
