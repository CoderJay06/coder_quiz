class Api::V1::CategoriesController < ApplicationController
   # Categories index
   def index 
      categories = Category.all 

      render json: categories, only: [:name]
   end 

   # Show category
   def show 
      category = Category.find_by(id: params[:id])

      render json: category, only: [:name]
   end 
end
