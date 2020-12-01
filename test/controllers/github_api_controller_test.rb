require 'test_helper'

class GithubApiControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get github_api_index_url
    assert_response :success
  end

end
