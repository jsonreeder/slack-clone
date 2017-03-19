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
end
