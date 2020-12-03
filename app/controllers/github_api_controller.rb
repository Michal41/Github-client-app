class GithubApiController < ApplicationController
  include ReactOnRails::Controller
  
  def index
    redux_store('appStore', props: { foo: 'bar' })
    

    client = Octokit::Client.new(:access_token => token)

    login = client.user.login
    
    puts login
    repo_name = "test3"
    @veryfied_repo_name = client.repos({}, query: {name:repo_name}).first.name
    puts @veryfied_repo_name
    @single_issue = client.issue("#{login}/#{repo_name}",2).body

    redux_store('appStore', props: { repo_name: @veryfied_repo_name, issues: @single_issue })

  end



end
