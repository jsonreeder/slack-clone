class AutoMessageJob < ApplicationJob
  queue_as :default

  def perform
    Message.bot_message
  end
end
