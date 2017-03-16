User.destroy_all

pairs = [
  ["harold", "maude"],
  ["abbot", "costello"],
  ["poncho", "lefty"],
  ["abelard", "heloise"],
  ["luke", "c-3po"],
  ["lyra", "pantalaimon"],
  ["marykate", "ashley"],
  ["thelma", "louise"],
  ["rosencrantz", "guildenstern"],
  ["click", "clack"]
]

pairs.flatten.each do |username|
  User.create!(username: username, password: 'password')
end
