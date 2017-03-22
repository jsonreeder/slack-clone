json.extract! @message, :body, :created_at
json.extract! @message.messageable, :username
