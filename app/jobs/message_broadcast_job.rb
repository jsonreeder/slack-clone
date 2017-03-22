class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message, channel)
    message = Api::MessagesController.render(
      partial: 'api/messages/message',
      locals: { message: message }
    )
    ActionCable.server.broadcast("room_#{channel.name}",
                                 message: JSON.parse(message))
  end
end
