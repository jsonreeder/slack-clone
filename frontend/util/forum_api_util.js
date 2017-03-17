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
