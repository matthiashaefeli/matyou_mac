Rails.application.routes.draw do
  root 'home#index'
  get '/home/terminal', to: 'home#terminal'
  devise_for :users
  resources :notes
  resources :blogs
  resources :challenges
end
