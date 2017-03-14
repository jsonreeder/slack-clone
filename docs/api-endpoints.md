# API Endpoints

## HTML API

### Root

- `GET /`

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `GET /api/session`
- `POST /api/session`
- `DELETE /api/session`

### Messages

- `GET /api/messages`
- `POST /api/messages`
- `GET /api/messages/:id`

### Fora

- `GET /api/fora`
- `POST /api/fora`
- `GET /api/fora/:forumName`
  - Using `forumName` instead of `id` so that the url can access the channel via its name
- `GET /api/fora/:id/messages`
