Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [ :index, :create ]
    resources :forums, only: [ :show, :index, :create ], param: :name
    resources :memberships, only: [ :create ]
    resources :messages, only: [ :create ]
    resource :session, only: [ :create, :destroy ]
  end
end
