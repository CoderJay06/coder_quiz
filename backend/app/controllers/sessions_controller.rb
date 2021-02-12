class SessionsController < ApplicationController
  before_action :find_user, :authenticate_user, only: [:create]

   # Login user
  def create
    session[:user_id] = @user.id

    render json: @user, status: :accepted
  end

  # Logout user
  def destroy
  end

  private

  def find_user 
     @user = User.find_by(username: params[:username])
  end 

  def authenticate_user
     unless @user && @user.authenticate(params[:password]) 
         render json: { errors: "Invalid login credentials" }, status: :unauthorized
     end 
  end 
end
