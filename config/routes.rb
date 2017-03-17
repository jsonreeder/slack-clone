Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [ :index, :create ]
    resources :forums, only: [ :show, :index ], param: :name
    resource :session, only: [ :create, :destroy ]
  end
end
