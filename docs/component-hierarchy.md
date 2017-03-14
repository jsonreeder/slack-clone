# Component Hierarchy

## Components

### Splash Page
- SplashContainer
  - SplashHeader
  - Greeting

### Auth Page(s)
- AuthHeader
- TryAuth
- SignInContainer
  - SignInAuth
  - SignInError
- JoinContainer
  - JoinAuth
  - JoinError

### Messages Page
- MessagesContainer
  - SidebarContainer
    - UserInfo
    - Channels
    - DirectMessages
  - HomeContainer
    - ForumDetail
    - ForumGreeting
    - MessageHistoryContainer
      - Message
    - Compose
  - ForumDetail
    - ForumDetails
    - ForumMembersIndex

### Join New Channel
- JoinChannelIndex
  - JoinChannelSearch (bonus)
  - JoinChannelItem

### New Direct Message
- NewDMIndex
  - NewDMSearch (bonus)
  - NewDMItem

## Routes

| Path                           | Component             |
|--------------------------------|-----------------------|
| "/"                            | "SplashContainer"     |
| "/try"                         | "TryAuth"             |
| "/join"                        | "JoinContainer"       |
| "/sign-in"                     | "SignInContainer"     |
| "/messages/:forumName"         | "MessagesContainer"   |
| "/messages/:forumName/details" | "ForumDetail"         |
