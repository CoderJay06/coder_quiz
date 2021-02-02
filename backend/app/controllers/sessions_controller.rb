class SessionsController < ApplicationController
  before_action :authenticate_user

   # Login user
  def create
    @user = User.find_by(username: params[:username])
    byebug
    render json: @user
  end

  # Logout user
  def destroy
  end

  private
  def authenticate_user
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
    end 
  end 
end
