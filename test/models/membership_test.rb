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

require 'test_helper'

class MembershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
