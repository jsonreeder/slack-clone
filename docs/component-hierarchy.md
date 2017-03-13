# Component Heirarchy

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
    - ChannelTitle
    - ChannelGreeting
    - MessageHistoryContainer
      - Message
    - Compose

### Join New Channel
- JoinChannelIndex
  - JoinChannelSearch (bonus)
  - JoinChannelItem

### New Direct Message
- NewDMIndex
  - NewDMSearch (bonus)
  - NewDMItem

## Routes

| Path                     | Component             |
|--------------------------|-----------------------|
| "/"                      | "SplashContainer"     |
| "/try"                   | "TryAuth"             |
| "/join"                  | "JoinContainer"       |
| "/sign-in"               | "SignInContainer"     |
| "/messages/:channelName" | "MessagesContainer"   |