export const createMembership = forumName => (
  $.ajax({
    method: 'post',
    url: 'api/memberships',
    data: {name: forumName}
  })
);
