Rails.application.routes.draw do
  root to: 'github_api#index'
  post 'issue', to:"github_api#create"
  get 'update', to:"github_api#update"
  post 'close_issue', to:"github_api#close_issue"
  #root to: 'hello_world#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
