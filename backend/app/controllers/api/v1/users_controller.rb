class Api::V1::UsersController < ApplicationController
   # index
   def index 
      users = User.all 

      render json: users 
   end 

   # # render signup
   # def new
   # end

   # signup user
   def create
      user = User.create(user_params)

      if user 
         render json: { message: 'Successfully signed up!'}
      else  
         render json: { message: 'Sorry, there was a problem..'}
      end 
   end 

   # view a user
   def show 
      user = User.find_by(id: params[:id])

      render json: user 
   end 

   # delete user
   def destroy 
      user = User.find_by(id: params[:id])
      user.destroy

      render json: {userId: user.id}
   end 

   private 
   def user_params
      params.require(:user).permit(:email, :username, :password)
   end 
end






