# Schema Information
- Each table will also include timestamps (`created_at`, `updated_at`)
- Avatars and other images will be stored as Cloudinary links.

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
avatar          | string    | not null

## Bots (bonus)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
username    | string    | not null, indexed, unique
avatar      | string    | not null

## Fora
column name | data type | details
------------|-----------|--------------------------
id          | integer   | not null, primary key
name        | string    | not null, indexed, unique
kind        | string    | not null
topic       | text      |
greeting    | text      |

### Model validations
- `kind` one of [channel, direct_message]

## Memberships
column name         | data type | details
--------------------|-----------|------------------------------------------------------------------------------------------------
id                  | integer   | not null, primary key
forum_id            | integer   | not null, foreign key (references fora), indexed, uniqe(membershipable_id, membershipable_type)
membershipable_id   | integer   | not null, foreign key (references users or bots), indexed
membershipable_type | string    | not null

### Model validations
- `membershipable_type` one of [user, bot]

## Messages
column name      | data type | details
-----------------|-----------|----------------------------------------------------------
id               | integer   | not null, primary key
forum_id         | integer   | not null, foreign key (references fora), indexed
messageable_id   | integer   | not null, foreign key (references users or bots), indexed
messageable_type | string    | not null
body             | text      | not null

### Model validations
- `messageable_type` one of [user, bot]

## Attachments (bonus)
_Sending more than plain text. Pulled from the Slack API._

column name | data type | details
------------|-----------|-----------------------------------------------------
id          | integer   | not null, primary key
message_id  | integer   | not null, foreign key (references messages), indexed
author_icon | string    |
author_link | string    |
author_name | string    |
callback_id | string    |
color       | string    |
fallback    | string    |
footer      | string    |
footer_icon | string    |
image_url   | string    |
pretext     | string    |
text        | text      |
thumb_url   | string    |
title       | string    |
title_link  | string    |
ts          | datetime  |

## Fields (bonus)
_Tags on attachments. Pulled from the Slack API._

column name    | data type | details
---------------|-----------|--------------------------------------------------------
id             | integer   | not null, primary key
attachment_id  | integer   | not null, foreign key (references attachments), indexed
title          | string    |
value          | string    |
short          | boolean   |

## Actions (bonus)
_Buttons. Pulled from the Slack API._

column name    | data type | details
---------------|-----------|--------------------------------------------------------
id             | integer   | not null, primary key
attachment_id  | integer   | not null, foreign key (references attachments), indexed
name           | string    |
text           | string    |
style          | string    |
type           | string    |
value          | string    |
