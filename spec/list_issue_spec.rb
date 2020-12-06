require 'rails_helper'


RSpec.describe "github_api", :type => :request do

  it "render valid template" do
    get "/"
    expect(response).to render_template(:index)
  end

  
  it "list issues" do
    get "/"
    expect(response).to render_template(:index)
    expect(response.body).to include("title_of_issue")
    expect(response.body).to include("body_of_issue")

  end
    
  it "allows to create new issue" do
    get "/"
    post "/issue", :params => {:title => "Amazon", :body=>"1234569587"} 
    # implemented in FakeGithub      
  end


end