Rails.application.routes.draw do
  resources :ratings
  resources :comments
  resources :posts do
    resources :ratings, shallow: true 
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

