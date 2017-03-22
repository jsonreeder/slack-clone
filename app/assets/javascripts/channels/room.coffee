App.room = App.cable.subscriptions.create "RoomChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    # $('#message-history-container').append data['message']
    alert(data['message'])

  speak: (message) ->
    @perform 'speak', message: message

$(document).on 'keypress', '[data-behavior~=room_speaker]', (event) ->
  if event.keyCode is 13 # return = send
    console.log("Sending an event")
    console.log("Event info: ", event)
    console.log("App information:", App.room)
    App.room.speak event.target.value
    event.target.value = ''
    event.preventDefault()
