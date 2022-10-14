class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]
  def index
    @posts = Post.all
  end

  def show
    @comments = Comment.where(post_id: @post.id)
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    p @post
    if @post.save
      redirect_to @post
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
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
    params.require(:post).permit(:title, :content, :thumbnail)
  end
end
