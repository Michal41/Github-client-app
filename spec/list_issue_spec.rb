require 'rails_helper'


# RSpec.describe "clients", :type => :request do

#   it "creates a client and redirects to the clients" do
#     get "/clients/new"
#     expect(response).to render_template(:new)
#     count=(Client.count)+1
#     post "/clients", :params => { :client => {:name => "Amazon", :nip=>"1234569587", :email=> "amazon@amazon.com", 
#         :contact_person_first_name => "Jeff", :contact_person_last_name => "Bazos", :phone_number => "425136545"} }
#     expect(Client.count).to eq(count)
#     follow_redirect!
#     expect(response).to render_template(:index)
#     expect(response.body).to include("Amazon")
#   end

#   it "does not render a different template" do
#     get "/clients/new"
#     expect(response).to_not render_template(:index)
#   end
# end



RSpec.describe "github_api", :type => :request do

  it "render valid template" do
    get "/"
    
    expect(response).to render_template(:index)
  end

  


end