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
end
