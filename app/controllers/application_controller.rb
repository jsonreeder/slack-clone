class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :ensure_signed_in, :current_user

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def sign_in!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def sign_out!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def ensure_signed_in
    redirect_to new_session_url unless current_user
  end
end
