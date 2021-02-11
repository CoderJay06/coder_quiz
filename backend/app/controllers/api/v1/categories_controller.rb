class Api::V1::CategoriesController < ApplicationController
   before_action :include_options

   def index 
      categories = Category.all 

      render json: CategorySerializer.new(categories, @options)
   end 

   def show 
      category = Category.find_by(id: params[:id])
     
      render json: CategorySerializer.new(category, @options)
   end 

   private 

   def include_options 
      @options = {
         include: [:quizzes]
      }
   end 
end