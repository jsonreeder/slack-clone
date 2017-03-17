Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [ :create ]
    resources :forums, only: [ :show, :index ], param: :name
    resource :session, only: [ :create, :destroy ]
  end
end
