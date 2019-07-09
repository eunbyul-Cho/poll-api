Rails.application.routes.draw do
  resources :polls, only: [:index, :create,:show,:destroy], :shallow  => true do
    resources :candidates, :except => [:index,:destroy]
  end
  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'users#create'
end


