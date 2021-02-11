class Api::V1::UsersController < ApplicationController
   before_action :find_user, only: [:show, :destroy]

   def index 
      users = User.all 

      render json: UserSerializer.new(users), status: :accepted
   end 

   # signup user
   def create
      user = User.new(user_params)

      if user.save 
         session[:user_id] = user.id 
         render json: UserSerializer.new(user), status: :accepted
      else  
         render json: { errors: user.errors.full_messages.join(", ")}
      end 
   end 

   # view a user
   def show 
      render json: UserSerializer.new(@user), status: :accepted
   end 

   # delete user
   def destroy 
      @user.destroy

      render json: {userId: @user.id}
   end 

   private 

   def find_user
      @user = User.find_by(id: params[:id])
   end 

   def user_params
      params.require(:user).permit(:email, :username, :password, :password_confirmation)
   end 
end
