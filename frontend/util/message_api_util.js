export const createMessage = ({ forum_id, body, messageable_type, messageable_id }) => (
  $.ajax({
    method: 'post',
    url: 'api/messages',
    data: {
      message: {
        forum_id,
        body,
        messageable_type,
        messageable_id
      }
    }
  })
);


