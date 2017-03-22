# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :text             not null
#  password_digest :text             not null
#  session_token   :text             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  include Membershipable
  include Messageable
  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token
  after_save :join_default_forums
  attr_reader :password

  DEFAULT_FORUMS = ['general', 'random']

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    user if user && user.is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  def password=(provided_password)
    @password = provided_password
    self.password_digest = BCrypt::Password.create(provided_password)
  end

  def is_password?(provided_password)
    current_password = BCrypt::Password.new(self.password_digest)
    current_password.is_password?(provided_password)
  end

  def join_default_forums
    DEFAULT_FORUMS.each { |forum| self.join(forum) }
  end

  def join(forum_name)
    forum = Forum.find_by_name(forum_name)
    not_joined = !self.forums.include?(forum)
    return unless forum && not_joined
    self.forums << forum
  end
end
