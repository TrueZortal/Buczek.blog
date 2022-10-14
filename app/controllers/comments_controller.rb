class CommentsController < ApplicationController
  def index
    @comments = Comment.where(post_id: comment_params['post_id'])
  end

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      redirect_to post_path(comment_params['post_id'])
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def comment_params
      params.permit(:post_id, :user, :body)
  end
end
