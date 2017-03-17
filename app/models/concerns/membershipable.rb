module Membershipable
  extend ActiveSupport::Concern

  included do
    has_many :memberships, as: :membershipable
  end

  def join(forum_id)
    self.forums.find_or_create_by(id: forum_id)
  end
end
