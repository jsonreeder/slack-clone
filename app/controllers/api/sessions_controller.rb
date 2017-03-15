class Api::SessionsController < ApplicationController
  def create
    username, password = user_params.values
    @user = User.find_by_credentials(username, password)

    if @user
      sign_in!(@user)
      render 'api/users/show'
    else
      render(
        json: ['Invalid credentials'],
        status: 401
      )
    end
  end

  def destroy
    @user = current_user

    if @user
      sign_out!
      render 'api/users/show'
    else
      render(
        json: ['No user is signed in.'],
        status: 404
      )
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
