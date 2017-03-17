export const fetchAllUsers = () => (
  $.ajax({
    method: 'get',
    url: 'api/users'
  })
);
