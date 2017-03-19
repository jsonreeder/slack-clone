# == Schema Information
#
# Table name: memberships
#
#  id                  :integer          not null, primary key
#  forum_id            :integer          not null
#  membershipable_type :string
#  membershipable_id   :integer
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

class Membership < ApplicationRecord
  validates :forum_id, :membershipable_id, :membershipable_type, presence: true
  validates :forum_id, uniqueness: { scope: [:membershipable] }
  belongs_to :membershipable, polymorphic: true
  belongs_to :forum
end
