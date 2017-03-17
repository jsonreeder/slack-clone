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

require 'test_helper'

class ForumTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
