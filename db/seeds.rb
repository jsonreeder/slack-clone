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
  ['mozart', 'salieri']
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

PAIRS.flatten.each do |username|
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

