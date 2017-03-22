# == Schema Information
#
# Table name: messages
#
#  id               :integer          not null, primary key
#  forum_id         :integer          not null
#  body             :text             not null
#  messageable_type :string
#  messageable_id   :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Message < ApplicationRecord
  validates :forum_id, :body, :messageable_type, :messageable_id, presence: true
  belongs_to :messageable, polymorphic: true
  belongs_to :forum

  after_create_commit { MessageBroadcastJob.perform_later(self, 363) }
end
