class GithubApiController < ApplicationController
  include ReactOnRails::Controller
  def index
    @props = { name: "Stranger" }
    redux_store('appStore', props: { foo: 'bar' })
  end
end
