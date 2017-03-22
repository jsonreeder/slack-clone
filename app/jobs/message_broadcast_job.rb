class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message, channel)
    puts "Message Broadcast Job firing"
    puts "message is:"
    p message
    message = Api::MessagesController.render(
      partial: 'api/messages/message',
      locals: { message: message }
    )
    ActionCable.server.broadcast("room_#{channel.name}",
                                 message: JSON.parse(message))
  end
end
