json.set! 'channels', @channels.each do |channel|
  json.extract! channel, :name
end
