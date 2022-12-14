# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'mains#index'
  # TODO: shallow nest comments and rewrite link_to delete comment to work with turbo_stream.remove~
  resources :posts do
    resources :comments
  end
  get '/about', to: 'about#about'
  get '/projects', to: 'projects#index'
end
