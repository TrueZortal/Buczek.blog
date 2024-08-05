# frozen_string_literal: true

Rails.application.routes.draw do
  # Defines the root path route ("/")
  root 'mains#index'
  # TODO: shallow nest comments and rewrite link_to delete comment to work with turbo_stream.remove~
  resources :posts do
    resources :comments
  end

  # Defines the routes for the statics controller
  get 'sign_in', to: 'mains#sign_in'
  get 'sign_out', to: 'mains#log_out'
  post 'authorise', to: 'mains#authorise'

  # Defines the routes for the mains controller
  get '/about', to: 'about#about'
  get '/projects', to: 'projects#index'
  get '/archive', to: 'posts#archive'
end
