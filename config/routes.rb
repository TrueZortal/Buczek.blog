# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users

  # Defines the root path route ("/")
  root 'mains#index'
  # TODO: shallow nest comments and rewrite link_to delete comment to work with turbo_stream.remove~
  resources :posts, except: [:index] do
    resources :comments
  end

  get '/posts', to: 'posts#posts_index'
  get '/post/:id', to: 'posts#post_index'
  get '/about', to: 'about#about'
  get '/projects', to: 'projects#index'
  get '/archive', to: 'posts#archive'
end
