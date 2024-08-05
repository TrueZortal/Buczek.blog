# frozen_string_literal: true

class ApplicationController < ActionController::Base
  helper_method :is_admin

  def is_admin
    session[:admin]
  end
end
