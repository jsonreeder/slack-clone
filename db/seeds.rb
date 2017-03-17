User.destroy_all
pairs = [
  ['harold', 'maude'],
  ['abbot', 'costello'],
  ['poncho', 'lefty'],
  ['abelard', 'heloise'],
  ['luke', 'c-3po'],
  ['lyra', 'pantalaimon'],
  ['marykate', 'ashley'],
  ['thelma', 'louise'],
  ['rosencrantz', 'guildenstern'],
  ['click', 'clack']
]

pairs.flatten.each do |username|
  User.create!(username: username, password: 'password')
end

Forum.destroy_all
Forum.create!(name: 'general',
              kind: 'channel',
              topic: 'This channel is for team-wide communication and announcements. All team members are in this channel.',
              greeting: 'This is the very beginning of the #general channel.'
             )

Forum.create!(name: 'random',
              kind: 'channel',
              topic: "A place for non-work-related flimflam, faffing, hodge-podge or jibber-jabber you'd prefer to keep out of more focused work-related channels.",
              greeting: 'This is the very beginning of the #random channel.'
             )

Forum.create!(name: 'eastereggs',
              kind: 'channel',
              topic: "A wonderful compendium of unexpected twists and turns. Congratulations on finding it!",
              greeting: 'This is the very beginning of the #eastereggs channel.'
             )
