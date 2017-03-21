json.extract! @forum, :id, :name, :kind, :topic, :greeting, :members, :messages

# NOTE: Keys will be camel case (createdAt) due to Jbuilder.key_format in
# application.rb
json.messages @forum.messages.limit(100).each do |message|
  json.extract! message, :body, :created_at
  json.extract! message.messageable, :username
end
