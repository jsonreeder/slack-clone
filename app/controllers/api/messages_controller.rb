class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)

    if @message.save
      render 'api/messages/show'
    else
      render(
        json: @user.errors.full_messages,
        status: 422
      )
    end
  end

  def message_params
    params.require(:message).permit(:forum_id,
                                    :body,
                                    :messageable_type,
                                    :messageable_id
                                   )
  end
end
