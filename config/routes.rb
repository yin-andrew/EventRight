Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :events, only: [:create, :index, :destroy, :update, :show]
    resources :tickets, only: [:create, :index, :show, :destroy]
    resources :likes, only: [:create, :index, :destroy, :show]
  end

end
