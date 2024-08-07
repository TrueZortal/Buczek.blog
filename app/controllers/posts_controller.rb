# frozen_string_literal: true

class PostsController < ApplicationController
  before_action :set_post, only: %i[show edit update destroy]
  def index
    p is_admin
    @posts = Post.order(created_at: :desc)
  end

  def posts_index
    @posts = Post.order(created_at: :desc)
  end

  def archive
    @posts = Post.order(created_at: :desc)
  end

  def show; end

  def new
    @post = Post.new
  end

  def edit; end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to @post
    else
      render :new, status: :unprocessable_entity
    end
  end

  def update
    if @post.update(post_params)
      redirect_to @post
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy

    redirect_to root_path
  end

  private

  def set_post
    @post = Post.find(params['id'])
  end

  def post_params
    params.require(:post).permit(:title, :content, :thumbnail, uploads: [])
  end
end
