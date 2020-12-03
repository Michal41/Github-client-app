class GithubApiController < ApplicationController
  include ReactOnRails::Controller
  before_action :init_github_client
  
  
  def index
    @veryfied_repo_name = @client.repos({}, query: {name:@repo_name}).first.name
    redux_store('appStore', props: { repo_name: @veryfied_repo_name, issues: @issues })
    
  end


  def create
    @client.create_issue("#{@login}/#{@repo_name}", params[:title], params[:body])  
    redux_store('appStore', props: { repo_name: @veryfied_repo_name, issues: @issues })
    redirect_to root_path
  end

  def update
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @issues }
    end
  end

  def init_github_client
    @client ||= Octokit::Client.new(:access_token => Figaro.env.github_personal_acces_key)
    @login = @client.user.login
    @repo_name = Figaro.env.github_repo_name
    @issues||= @client.list_issues("#{@login}/#{@repo_name}",options = {direction:"asc"})
    .map { |element|  {title:element.title, body:element.body, id:element.id}}
  end
end
