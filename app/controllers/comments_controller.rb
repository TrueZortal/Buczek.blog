# frozen_string_literal: true

class CommentsController < ApplicationController
  before_action :set_comment, only: %i[show edit update destroy]

  def show; end

  def index
    @comments = Comment.where(post_id: comment_params[:post_id])
  end

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)
    respond_to do |format|
      if @comment.save
        format.html { redirect_to post_path(@comment.post_id), notice: "Comment added!"}
        format.turbo_stream
      else
        render :new, status: :unprocessable_entity
      end
    end
  end

  def edit; end

  def update
    if @comment.update(comment_params)
      redirect_to post_path(@comment.post_id)
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @comment.destroy

    redirect_to post_path(comment_params[:post_id])
  end

  private

  def set_comment
    p params
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.permit(:id, :post_id, :user, :body, :_method)
  end
end
