class SessionsController < ApplicationController
   # Login user
  def create
    user = User.find_by(username: params[:username])
   #  authenticate_and_login(user)
    render json: user
  end

  # Logout user
  def destroy
  end

#   private
#   def authenticate_and_login(user)
#     if user && user.authenticate(params[:password])
#       session[:user_id] = user.id
#     end 
#   end 
end
