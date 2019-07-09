Rails.application.routes.draw do

  scope '/api'  do
    resources :polls, only: [:index, :create,:show,:destroy], :shallow  => true do
      resources :candidates

    end

  end
  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'users#create'

end


