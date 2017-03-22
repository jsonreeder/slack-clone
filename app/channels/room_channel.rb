class RoomChannel < ApplicationCable::Channel
  def subscribed
    puts "PARAMS PARAMS PARAMS"
    puts params
    puts "constructed name:"
    puts "room_#{params[:channel]}"
    stream_from "room_#{params[:channel]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    Message.create!(
      body: data['message'],
      forum_id: 363,
      messageable_type: 'User',
      messageable_id: 595
    )
  end
end
