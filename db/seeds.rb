User.destroy_all
Membership.destroy_all
Forum.destroy_all
Message.destroy_all

PAIRS = [
  ['harold', 'maude'],
  ['abbot', 'costello'],
  ['poncho', 'lefty'],
  ['abelard', 'heloise'],
  ['luke', 'c-3po'],
  ['lyra', 'pantalaimon'],
  ['marykate', 'ashley'],
  ['thelma', 'louise'],
  ['rosencrantz', 'guildenstern'],
  ['click', 'clack'],
  ['hannibal', 'clarice'],
  ['orville', 'wilbur'],
  ['mozart', 'salieri'],
  ['mario', 'luigi'],
  ['link', 'zelda'],
  ['simba', 'rafiki'],
  ['calvin', 'hobbes'],
  ['sherlock', 'watson'],
  ['winnie', 'chrisrobin'],
  ['jekyll', 'hyde']
]

GREETINGS = [
  'Howdy',
  'Ahlan wa Sahlan',
  "What's up!",
  'Salve',
  'Cheers',
  "What's good",
  'Yo'
]

general = Forum.create!(
  name: 'general',
  kind: 'channel',
  topic: 'This channel is for team-wide communication and announcements. All team members are in this channel.',
  greeting: 'This is the very beginning of the #general channel.'
)

random = Forum.create!(
  name: 'random',
  kind: 'channel',
  topic: "A place for non-work-related flimflam, faffing, hodge-podge or jibber-jabber you'd prefer to keep out of more focused work-related channels.",
  greeting: 'This is the very beginning of the #random channel.'
)

Forum.create!(
  name: 'eastereggs',
  kind: 'channel',
  topic: "A wonderful compendium of unexpected twists and turns. Congratulations on finding it!",
  greeting: 'This is the very beginning of the #eastereggs channel.'
)

PAIRS.each_with_index do |pair, idx|
  pair.each do |username|
    User.create!(username: username, password: 'password')
    user_id = User.find_by_username(username).id

    Membership.create!(
      forum_id: general.id,
      membershipable_id: user_id,
      membershipable_type: 'User'
    )
    Membership.create!(
      forum_id: random.id,
      membershipable_id: user_id,
      membershipable_type: 'User'
    )
    Message.create!(
      forum_id: Forum.first.id,
      body: GREETINGS.sample,
      messageable_type: "User",
      messageable_id: user_id
    )
  end

  pair0 = User.find_by_username(pair[0])
  pair1 = User.find_by_username(pair[1])
  dm = Forum.new
  dm.configure_dm(pair0.username, [pair1.username])
  dm.save!
  pair0.forums << dm
  pair1.forums << dm

  Message.create!(
    forum_id: dm.id,
    body: 'Well, hello!',
    messageable_type: "User",
    messageable_id: pair0.id
  )

  Message.create!(
    forum_id: dm.id,
    body: 'What are the chances of seeing you here?',
    messageable_type: "User",
    messageable_id: pair1.id
  )

  if idx > 2
    pair2 = User.find_by_username(PAIRS[idx - 1][0])
    pair3 = User.find_by_username(PAIRS[idx - 1][1])
    dm = Forum.new
    dm.configure_dm(pair0.username, [pair1.username, pair2.username, pair3.username])
    dm.save!
    pair0.forums << dm
    pair1.forums << dm
    pair2.forums << dm
    pair3.forums << dm

    if (idx % 2).zero?
      Message.create!(
        forum_id: dm.id,
        body: "I bet you we're more famous that you.",
        messageable_type: "User",
        messageable_id: pair0.id
      )

      Message.create!(
        forum_id: dm.id,
        body: "That's right",
        messageable_type: "User",
        messageable_id: pair1.id
      )

      Message.create!(
        forum_id: dm.id,
        body: "Bald face lies!",
        messageable_type: "User",
        messageable_id: pair2.id
      )

      Message.create!(
        forum_id: dm.id,
        body: "You tell 'em.",
        messageable_type: "User",
        messageable_id: pair3.id
      )
    else
      Message.create!(
        forum_id: dm.id,
        body: "How's your day going?",
        messageable_type: "User",
        messageable_id: pair0.id
      )

      Message.create!(
        forum_id: dm.id,
        body: "I hear you guys are pretty cool.",
        messageable_type: "User",
        messageable_id: pair1.id
      )

      Message.create!(
        forum_id: dm.id,
        body: "Is that right?",
        messageable_type: "User",
        messageable_id: pair2.id
      )

      Message.create!(
        forum_id: dm.id,
        body: "Let's be friends",
        messageable_type: "User",
        messageable_id: pair3.id
      )
    end
  end
end
