class ApplicationController < ActionController::Base

    # protect_from_forgery with: :exception
    skip_before_action :verify_authenticity_token

    helper_method :logged_in?, :current_user

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def login!(user)
        user.reset_session_token!
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def logged_in?
        !!current_user
    end
    
    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

end
