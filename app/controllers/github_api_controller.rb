class GithubApiController < ApplicationController
  include ReactOnRails::Controller

  before_action :init_service,:init_github_client
  def index
    redux_store('appStore', props: { repo_name: @repo_name, issues: @issues })
  end

  def create
    @ghClient.create_issue(params[:title],params[:body])
    redirect_to root_path
  end

  def update
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @issues }
    end
  end

  def close_issue
    @ghClient.close_issue(params[:id])
  end
  def init_github_client
    client = @ghClient.init_github_client
    @repo_name = client[:repo_name]
    @issues = client[:issues]
  end

  def init_service
    @ghClient=GitHubClient.new()
  end

end
