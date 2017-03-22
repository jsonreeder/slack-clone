class Api::ForumsController < ApplicationController
  def index
    @channels = Forum.channels
    @direct_messages = Forum.direct_messages
  end

  def show
    @forum = Forum.find_by_name(params[:name])
  end

  def create
    # NOTE: This logic only applies to creating direct messages. If creating
    # channels, some logic will need to be changed
    p forum_params
    current_user = User.find_by_username(forum_params[:current_user])
    other_users = forum_params[:other_users].map do |user|
      User.find_by_username(user)
    end

    @forum = Forum.new
    @forum.configure_dm(forum_params[:current_user], forum_params[:other_users])

    if @forum.save!
      current_user.forums << @forum
      other_users.each do |user|
        user.forums << @forum
      end

      render 'api/forums/show'
    end
  end

  private

  def forum_params
    params.require(:forum).permit(:current_user, other_users: [])
  end
end
