Rails.application.routes.draw do
  resources :polls do
    resources :candidates
  end
  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'users#create'
end

#  resources :polls, :shallow => true do
