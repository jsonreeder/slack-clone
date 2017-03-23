# == Schema Information
#
# Table name: bots
#
#  id         :integer          not null, primary key
#  username   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Bot < ApplicationRecord
  include Membershipable
  include Messageable

  def send_message(body, forum_name)
    Message.create!(
      forum_id: Forum.find_by(name: forum_name).id,
      body: body,
      messageable_type: "Bot",
      messageable_id: self.id
    )
  end
end
