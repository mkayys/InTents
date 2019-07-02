class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
    end

    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password)
    end
end
