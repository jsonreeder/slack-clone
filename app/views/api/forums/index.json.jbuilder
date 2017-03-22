json.set! 'channels', @channels.each do |forum|
  json.extract! forum, :name
end

json.set! 'direct_messages', @direct_messages.each do |forum|
  json.extract! forum, :name
end
