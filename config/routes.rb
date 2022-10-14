Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "mains#index"
  resources :posts do
    resources :comments
  end
  get '/about', to: 'about#about'
  get '/projects', to: 'projects#index'
end
