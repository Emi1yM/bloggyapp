Rails.application.routes.draw do
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  post :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  root to: "static#home"

  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index, :create, :destroy, :update]
    end
  end
end