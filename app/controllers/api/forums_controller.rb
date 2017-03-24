class Api::ForumsController < ApplicationController
  def index
    @channels = Forum.channels
    @direct_messages = Forum.direct_messages
    print "-" * 20
    print "DEBUGGING: @channels after initialization in index"
    p @forum
    print "DEBUGGING: @direct_message after initialization in index"
    p @forum
    print "-" * 20
  end

  def show
    @forum = Forum.find_by_name(params[:name])
    # AutoMessageJob.set(wait: 0.seconds).perform_later(@forum.name)
    print "-" * 20
    print "DEBUGGING: @forum after initialization in show"
    p @forum
    print "-" * 20
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
    print "-" * 20
    print "DEBUGGING: @forum after initialization in create"
    p @forum
    print "-" * 20

    @forum.configure_dm(forum_params[:current_user], forum_params[:other_users])

    print "-" * 20
    print "DEBUGGING: @forum after configure_dm, before save in create"
    p @forum
    print "-" * 20
    if @forum.save
      current_user.forums << @forum
      other_users.each do |user|
        user.forums << @forum
      end
      print "-" * 20
      print "DEBUGGING: @forum after successful save in create"
      p @forum
      print "-" * 20
    else
      # Find the existing forum with that name
      new_forum = Forum.find_by(name: @forum.name)
      @forum = new_forum
      print "-" * 20
      print "DEBUGGING: @forum after unsuccessful save (the newly found forum) in create"
      p @forum
      print "-" * 20
    end

    print "-" * 20
    print "DEBUGGING: @forum before rendering api/forums/show in forums_controller in create"
    p @forum
    print "-" * 20
    render 'api/forums/show'
  end

  private

  def forum_params
    params.require(:forum).permit(:current_user, other_users: [])
  end
end
