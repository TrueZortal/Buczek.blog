# frozen_string_literal: true

class MainsController < ApplicationController
  def index
    @posts = Post.order(created_at: :desc)
  end
end
