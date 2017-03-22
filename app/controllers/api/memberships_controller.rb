class Api::MembershipsController < ApplicationController
  def create
    forum_name = params[:name]
    forum = Forum.find_by_name(forum_name)
    current_user.forums << forum unless current_user.forums.include?(forum)
    @user = current_user
    render 'api/users/show'
  end
end
