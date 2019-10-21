Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'feedback_categories/index'
      post 'feedback_categories/create'
      get 'feedback_categories/show/:id', to: 'feedback_categories#show'
      delete 'feedback_categories/destroy/:id', to: 'feedback_categories#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
