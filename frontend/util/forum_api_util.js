export const fetchSingleForum = name => (
  $.ajax({
    method: 'get',
    url: `api/forums/${name}`
  })
);

export const fetchAllForums = () => (
  $.ajax({
    method: 'get',
    url: 'api/forums'
  })
);

export const createForum = (current_user, other_users) => (
  $.ajax({
    method: 'post',
    url: 'api/forums',
    data: {
      forum: {
        current_user,
        other_users
      }
    }
  })
);

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
