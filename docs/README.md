# Development README

- [Heroku link]()
- [Trello link](https://trello.com/b/xj2mckmN/slack-clone)

## Minimum Viable Product

Slack Clone (new name TBD) is a web application inspired by Slack's web interface and built using Ruby on Rails and React/Redux. The following is the minimum list of features that it will contain.

- Production README
- Hosting on Heroku
- Authentication (New account creation, login, and guest/demo login)
- Live chat
- Channels
- Direct message
- Multi-person DM

## Design Docs
- Wireframes
  - Entry
    - [splash](wireframes/splash.png)
    - [guest_sign_in](wireframes/guest_sign_in.png)
    - [join_app](wireframes/join_app.png)
    - [sign_in](wireframes/sign_in.png)
  - Main
    - [messages](wireframes/messages.png)
  - Modals
    - [join_channel](wireframes/join_channel.png)
    - [new_direct_message](wireframes/new_direct_message.png)
- [React Components](component-hierarchy.md)
- [API endpoints](api-endpoints.md)
- [DB schema](schema.md)
- [Sample State](sample-state.md)

## Process Decisions
- Version control
  - Messages: [Chris Beams' Article](https://chris.beams.io/posts/git-commit/)
  - Branching: [Git Flow](http://nvie.com/posts/a-successful-git-branching-model/)
  - Commit history: leave a minimal history on `develop` by squashing checkpoint commits together
- Code style
  - Ruby: Rubocop
  - JS: [StandardJS](http://standardjs.com/)
- Testing
  - Test-first design (TDD)
  - Use continuous integration tests (Travis CI)
- Reflection
  - I will keep notes about the development process in a separate repo: [slack-clone-development-notes](https://github.com/jsonreeder/slack-clone-development-notes)

## Implementation Timeline

1. Backend setup and Front End User Authentication (2 days)
  - Allow users to sign up and sign in
  - Create functioning guest users
  - Establish styling
2. Channel Model, API, & Components (1 day)
  - Channels exist and have users
3. Live chat (2 days)
  - Users can send and receive plain text messages to channels
  - Users can join new channels
4. Direct messages (1 day)
  - Users can send private messages to each other
  - Users can start new private message "channels"
5. Group direct messages (1 day)
  - Users can send private messages in groups
6. Basic bot users (bonus)
  - App can receive incoming webhooks (from external bot users)
  - App can send webhooks (to bot users)
  - Separate lightweight apps (bot users) handle basic conversation
  - App can register bot users
7. Advanced bot users (bonus)
  - Bot users make API calls to things like Wikipedia to find and send interesting information
8. Message formatting & attachments (bonus)
  - Users can add markup to their messages
  - Bots can send messages with more than the basic formatting

### Outside of scope
_Slack features that I will not attempt to integrate_
- Customizable avatars
- Emoji
- Slash commands
- Notifications
- Snippets
- Creating new channels, modifying channels (beyond creating new direct messages)
- User presence / absence (green circles)
