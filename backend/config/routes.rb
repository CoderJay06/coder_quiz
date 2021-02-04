Rails.application.routes.draw do
   namespace :api do 
      namespace :v1 do 
         resources :users, only: [:index, :create, :show, :destroy]
         resources :categories, only: [:index, :show]
         resources :quizzes, only: [:index, :show]
      end
   end

   delete 'sessions', controller: :sessions, action: :destroy
   resources :sessions, only: [:create, :destroy]
end
