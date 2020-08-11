Rails.application.routes.draw do
  root 'home#index'
  get '/home/terminal', to: 'home#terminal'
  get '/home/trash', to: 'home#trash'
  devise_for :users
  resources :notes
  resources :blogs
  resources :challenges
end
