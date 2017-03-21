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
