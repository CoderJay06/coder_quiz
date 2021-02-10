class Api::V1::UsersController < ApplicationController
   # index
   def index 
      users = User.all 

      # render json: users, except: [:created_at, :updated_at]
      render json: UserSerializer.new(users), status: :accepted
   end 

   # # render signup
   # def new
   # end

   # signup user
   def create
      user = User.new(user_params)

      if user.save 
         # byebug
         render json: UserSerializer.new(user)
      else  
         render json: { message: 'Sorry, there was a problem..'}
      end 
   end 

   # view a user
   def show 
      user = User.find_by(id: params[:id])

      render json: UserSerializer.new(user), status: :accepted
   end 

   # delete user
   def destroy 
      user = User.find_by(id: params[:id])
      user.destroy

      render json: {userId: user.id}
   end 

   private 
   def user_params
      params.require(:user).permit(:email, :username, :password, :password_confirmation)
   end 
end
