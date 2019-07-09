Rails.application.routes.draw do
  scope '/api' do
    resources :polls do
      resources :candidates
    end
  end
  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'users#create'
end

#  resources :polls, :shallow => true do
