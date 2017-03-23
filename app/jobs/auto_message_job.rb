class AutoMessageJob < ApplicationJob
  queue_as :default

  def perform(forum_name)
    thorpbot = Bot.find_by(username: "thorpbot")
    thorpbot.send_message("Message bomb!", forum_name)
  end
end
