Rails.application.routes.draw do
  root 'home#index'
  devise_for :users
  resources :notes
  resources :blogs
  resources :challenges
end
