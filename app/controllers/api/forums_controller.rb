class Api::ForumsController < ApplicationController
  def index
    @forums = Forum.all
  end

  def show
    @forum = Forum.find_by_name(params[:name])
  end

  def create
    # NOTE: This logic only applies to creating direct messages. If creating
    # channels, some logic will need to be changed
    @forum = Forum.new
    @forum.configure_dm(forum_params)

    if @forum.save!
      forum_params[:current_user].forums << @forum
      forum_params[:other_users].each do |user|
        user.forums << @forum
      end
    end
  end

  private

  def forum_params
    params.require(:forum).permit(:current_user, :other_users)
  end
end
