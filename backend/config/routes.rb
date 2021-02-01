Rails.application.routes.draw do
#   get 'sessions/create'
#   get 'sessions/destroy'
   namespace :api do 
      namespace :v1 do 
         resources :users 
      end
   end
   resources :sessions
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
