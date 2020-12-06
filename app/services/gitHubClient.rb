class GitHubClient
  
  def create_issue(title,body)
    @client.create_issue("#{@login}/#{@repo_name}", title, body)  
  end


  def close_issue(id)
    @client.close_issue("#{@login}/#{@repo_name}",id)

  end


  def init_github_client
    @client ||= Octokit::Client.new(:access_token => Figaro.env.github_personal_acces_key)
    @login= Figaro.env.github_login
    @repo_name = Figaro.env.github_repo_name
    @issues||= @client.list_issues("#{@login}/#{@repo_name}",options = {state:"open",direction:"asc"})
    .map { |element|  {title:element.title, body:element.body, id:element.number}}
    return{repo_name:@repo_name,issues:@issues}
  end
end
