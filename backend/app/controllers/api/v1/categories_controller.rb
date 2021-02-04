class Api::V1::CategoriesController < ApplicationController
   # Categories index
   def index 
      categories = Category.all 

      render json: categories, only: [:id, :name]
   end 

   # Show category
   def show 
      category = Category.find_by(id: params[:id])
      # byebug
      render json: category.to_json(:include => {:quizzes => {
         :only => [:title, :difficultyLevel, :questionAmount]
      }})
   end 
end
