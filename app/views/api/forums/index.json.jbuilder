@forums.each do |forum|
  json.set! forum.id do
    json.extract! forum, :name, :kind
  end
end
