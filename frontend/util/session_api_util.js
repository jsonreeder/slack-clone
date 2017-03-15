let user = {
  username: 'harold',
  password: 'password'
};

export const join = user => (
  $.ajax({
    method: 'post',
    url: 'api/users',
    data: {user}
  })
);

export const signIn = user => (
  $.ajax({
    method: 'post',
    url: 'api/session',
    data: {user}
  })
);

export const signOut = () => (
  $.ajax({
    method: 'delete',
    url: 'api/session'
  })
);
