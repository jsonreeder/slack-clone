json.extract! @forum, :id, :name, :kind, :topic, :greeting, :members

json.messages @forum.messages.each do |message|
  json.extract! message, :body
  json.extract! message.messageable, :username
end
