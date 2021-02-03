Rails.application.routes.draw do
   namespace :api do 
      namespace :v1 do 
         resources :users 
      end
   end

   delete 'sessions', controller: :sessions, action: :destroy
   resources :sessions, only: [:create, :destroy]
end
