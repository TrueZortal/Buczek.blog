class MainsController < ApplicationController
  def index
    @posts = Post.ordered
  end
end
