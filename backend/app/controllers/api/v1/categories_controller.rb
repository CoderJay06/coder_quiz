class Api::V1::CategoriesController < ApplicationController
   before_action :include_options
   # Categories index
   def index 
      categories = Category.all 

      # render json: categories, only: [:id, :name]
      # render json: categories.to_json(:include => {:quizzes => {
      #    :only => [:id, :title, :difficultyLevel, :questionAmount]
      # }})
      render json: CategorySerializer.new(categories, @options)
   end 

   # Show category
   def show 
      category = Category.find_by(id: params[:id])
      # byebug
      # render json: category.to_json(:include => {:quizzes => {
      #    :only => [:id, :title, :difficultyLevel, :questionAmount]
      # }})
      render json: CategorySerializer.new(category, @options)
   end 

   private 

   def include_options 
      @options = {
         include: [:quizzes]
      }
   end 
end












