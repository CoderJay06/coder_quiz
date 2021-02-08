class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :email, :username, :password_digest
end
