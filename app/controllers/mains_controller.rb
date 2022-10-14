class MainsController < ApplicationController
  def index
    @posts = Post.all
  end
end
