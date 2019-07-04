Rails.application.routes.draw do
  resources :polls do
    resources :candidates
  end
end
