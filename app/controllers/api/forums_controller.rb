class Api::ForumsController < ApplicationController
  def index
    @forums = Forum.all
  end

  def show
    @forum = Forum.find_by_name(params[:name])
  end
end
