# == Schema Information
#
# Table name: forums
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  kind       :string           not null
#  topic      :text
#  greeting   :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Forum < ApplicationRecord
  validates :name, :kind, presence: true
  validates :kind, inclusion: { in: %w(channel direct_message) }
  has_many :memberships
  has_many :members,
           through: :memberships,
           source: :membershipable,
           source_type: :User
  has_many :messages

  def configure_dm(current_user, other_users)
    self.kind = "direct_message"
    self.greeting = Forum.greeting(other_users)
    self.name = other_users.unshift(current_user).join('-')
  end

  def self.greeting(other_users)
    if other_users.length > 2
      names = other_users.take(2).join(", ") + ", and " + other_users.last
    elsif other_users.length == 2
      names = other_users.join(" and ")
    else
      names = other_users.first
    end

    "This is the very beginning of your direct message history with #{names}."
  end
end
