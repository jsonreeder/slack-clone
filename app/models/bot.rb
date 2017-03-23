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
end
