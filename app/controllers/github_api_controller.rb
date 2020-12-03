class GithubApiController < ApplicationController
  include ReactOnRails::Controller
  
  def index
    redux_store('appStore', props: { foo: 'bar' })
    

    repo_name = "test3"
    login = client.user.login
    
    @veryfied_repo_name = client.repos({}, query: {name:repo_name}).first.name
    @single_issue = client.issue("#{login}/#{repo_name}",2).body
    cl = client.list_issues("#{login}/#{repo_name}").map { |el| {el:el} }

    puts cl.last

    @issues = client.list_issues("#{login}/#{repo_name}")
      .map { |element|  {title:element.title, body:element.body, id:element.id}}


    redux_store('appStore', props: { repo_name: @veryfied_repo_name, issues: @issues })

  end



end
