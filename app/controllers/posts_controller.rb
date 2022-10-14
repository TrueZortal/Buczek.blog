class PostsController < ApplicationController
  def show
    @post = Post.find(params['id'])
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.create! params.require(:post).permt(:title,:content)

    # if @post.save
    #   redirect_to @post
    # else
    #   render :new, status: :unprocessable_entity
    # end
  end

  def edit
    @post = Post.find(params['id'])
  end

  def update
    @post = Post.find(params['id'])

    if @post.update(params)
      redirect_to @post
    else
      render :edit, status: :unprocessable_entity
    end
  end
  private

  def post_params
    params.permit(:post).require(:title, :body)
  end
end
