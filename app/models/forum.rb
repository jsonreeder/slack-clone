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
  validates :name, uniqueness: true
  validates :kind, inclusion: { in: %w(channel direct_message) }
  has_many :memberships
  has_many :members,
           through: :memberships,
           source: :membershipable,
           source_type: :User
  has_many :messages

  def self.channels
    Forum.where(kind: 'channel')
  end

  def self.direct_messages
    Forum.where(kind: 'direct_message')
  end

  def reverse_chron_messages
    messages.order(created_at: :desc)
  end

  def configure_dm(current_user, other_users)
    all_users = [current_user] + other_users
    all_users.sort!
    self.kind = "direct_message"
    self.topic = Forum.topic(all_users)
    self.name = all_users.join('-')
  end

  def self.topic(users)
    if users.length > 2
      names = users.take(2).join(", ") + ", and " + users.last
    elsif users.length == 2
      names = users.join(" and ")
    else
      names = users.first
    end

    "The direct message history between #{names}."
  end
end
