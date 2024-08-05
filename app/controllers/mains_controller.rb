# frozen_string_literal: true

class MainsController < ApplicationController
  def index
    @posts = Post.order(created_at: :desc)
  end

  def sign_in; end

  def log_out
    session[:admin] = nil
    redirect_to root_path
  end

  def authorise
    if params[:password] == ENV['BUCZEK_BLOG_PW']
      session[:admin] = { value: true, expires: 2.weeks.from_now, secure: true }
    end
    redirect_to root_path
  end
end
