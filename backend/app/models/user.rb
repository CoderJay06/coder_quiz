class User < ApplicationRecord
   has_secure_password
   validates :email, :username, :password, :password_confirmation,
   presence: true
   validates :email,
   format: { 
      with: URI::MailTo::EMAIL_REGEXP, 
      message: "%{value} is an invalid email format" 
   },
   uniqueness: true, length: { minimum: 4, maximum: 40 }   
   validates :username, 
   uniqueness: true, length: { minimum: 2, maximum: 20 }
   validates :password, length: { minimum: 4, maximum: 20 }
end
