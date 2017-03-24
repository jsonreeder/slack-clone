# ThorpChat

ThorpChat is a chat application built in React/Redux and Ruby on Rails. It allows users to send live messages to each other, to small groups, and to public channels. It was inspired by Slack, and is modeled after the Slack web app.

[Chat with Thorp](http://thorp.jasonreeder.com/)

## About

I built most of Thorp in a two-week sprint, during which time I focused on producing an MVP that would allow users to
1. Securely sign up and log in
2. Send and receive live chats using websockets
3. Belong to public channels
4. Belong to multi-user private messages
5. Send user-user direct messages
6. See a beautiful design, inspired by Slack

Why on earth did I pick such a horrendous name? Well, what do you call the following symbol: `#`? To some it is a hash tag, to others it is a pound symbol, and to the rest it is an [octothorp](). Slack beat me to the octothorp, but I've contented myself with the quadrithorp.

I chose to build a chat app largely due to my interest in digital communications and artificial intelligence. I'm also just a big fan of Slack.

## Noteworthy Features

### Live Chat

Here it is, in a gif:
![Live chat](docs/gifs/thorp_live_chat.gif)

By far the coolest bit of Thorp is its support for live chat. Fire it up in two browsers (or a browser and an incognito window) and you'll see: when one user sends a message it is received by all other users on that channel. No refresh is necessary. This works thanks to a technology called [actioncable](), which leverages web sockets.

The quick version goes like this. There are three important terms:
1. channels
2. sockets
3. jobs

And there are two important actions
1. listen
2. broadcast

There is an actioncable `channel` for each of the various forums in Thorp that you can send a message to (that includes user-user direct messages, multi-user group messages, and public channels). The actioncable term `channel` is used for all of these and should not be confused with the ambiguous term "CHANNEL" that I've used to denote public forums like #general.

Harold and Maude are both Thorp users. When Maude sign into a channel, say '#general', a new `socket` is opened. Sockets are a communication protocol, like HTTP. Through that socket, she begins to `listen` to that channel.

Meanwhile, Harold is also signed in and viewing #general. When he sends a message out, it is caught by the socket and handled by a `job`. There are lots of things that jobs can do. In the case of Thorp, all that happens is that it sends to message out to all of the users. This is a `broadcast` job. A separate AJAX requests handles storing that chat in the database. Harold and Maude's sockets both receive the message sent by the job, and it displays instantly in both of their browsers.

## Polymorphic concerns

Another interesting aspect of Thorp is its use of polymorphic concerns. The feature is essentially invisible to users, but makes the code much more manageable.

In Thorp, human users and bots share some features. Both belong to channels and direct message threads. They can both join channels, send messages, and receive messages. In order to reduce repeated code, I implemented these shared features using a pair of shared concerns, [membershipalbe]() and [messageable]().

The code below, from [membershipalbe]() defines many of those features:

```ruby
module Membershipable
  extend ActiveSupport::Concern

  included do
    has_many :memberships, as: :membershipable
    has_many :forums,
             through: :memberships,
             source: :forum
  end

  def channels
    forums.where(kind: 'channel')
  end

  def direct_messages
    forums.where(kind: 'direct_message')
  end

  def join(forum_id)
    self.forums.find_or_create_by(id: forum_id)
  end
end
```

This code only has to be written once, and is included in both the User and the Bot model in only one like per model:

```ruby
class Bot < ApplicationRecord
  include Membershipable
```

```ruby
class User < ApplicationRecord
  include Membershipable
```

## Authentication

Thorp features secure user authentication. Most users will likely prefer to tour the app with one of the guest personalities, like `luke`, `c-3p0`, `marykate`, or `ashley`. Those and other duos are available via quick button access on the [try page](http://thorp.jasonreeder.com/#/try).

Both anyone who chooses to create an account will have their password well protected. Passwords are not stored in the database, but rather hashed and salted using [BCrypt]() into a digest, which is stored. That digest allows Thorp to verify at user sign in that the provided password, when hashed and salted, matches the application record, but there is no way to move in the other direction and to guess a users password simply by the stored hash. Try it out. [Create an account](http://thorp.jasonreeder.com/#/join), sign out, and confirm that you can only return with the correct password.

This project is open source. By this I mean that the sourcecode is freely available to peruse, copy, and modify under the [GNU Public License](). In addition, my notes and development process are publicly accessible via the [ThorpChat Development Notes](https://github.com/jsonreeder/thorp-chat-development-notes) repo.

## Design Decisions

Before starting the project, I set out a number of goals for how I wanted to approach the work. Like most brainstorming, much of it went out the window once I got deep in code and errors started to fly, but here are a few conventions I did stick to:

### Logging before, during, and after

In [ThorpChat Development Notes](https://github.com/jsonreeder/thorp-chat-development-notes) I kept daily snippets of my work, including what I intended to build, why I wanted to build it, and how I planned to implement it. I used lists as a lab notebook to track my steps while debugging. After working through problems, I recorded my thoughts and reflections.

While preparing for this project, I wrote extensive [development docs](docs/README.d).

### User focus

I framed work with a user focus, asking "after today what do I want to allow users to do."

### Git Flow

Git Flow was an excellent tool / convention. This was my first major project using it, and I'll definitely use it again. The biggest benefit is that it handles branching, merging, and naming, so that starting and finishing a feature or a hotfix are a breeze. Its 'release' functionality was unnecessary for a project of this scope, but was only minimally burdensome.

## Gratitude

Throughout the project, I benefited signficantly from the help of my project manager, [Louis Cruz](). I was also grateful to learn quite a bit in discussions with my three colleagues who were also building chat apps, [Josh](), [Riley](), and [Chase](). The name was inspired by [Andrew]() and [Alec]()

Other resources I used are available here
- [Resources](https://github.com/jsonreeder/thorp-chat-development-notes/blob/master/resources.org)
- [Tools](https://github.com/jsonreeder/thorp-chat-development-notes/blob/master/tools.org)

Thanks for reading!
