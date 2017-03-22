json.set! 'channels', @channels.each do |forum|
  json.set! forum.id do
    json.extract! forum, :name
  end
end

json.set! 'direct_messages', @direct_messages.each do |forum|
  json.set! forum.id do
    json.extract! forum, :name
  end
end
