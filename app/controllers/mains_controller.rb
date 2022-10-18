# frozen_string_literal: true

class MainsController < ApplicationController
  def index
    @posts = Post.ordered
  end
end
