class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message, forum)
    puts "Message Broadcast Job firing"
    puts "message is:"
    p message
    message = Api::MessagesController.render(
      partial: 'api/messages/message',
      locals: { message: message }
    )
    ActionCable.server.broadcast("channel_#{forum.name}",
                                 message: JSON.parse(message))
  end
end
