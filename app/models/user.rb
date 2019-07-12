# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  zip_code        :integer          not null
#

class User < ApplicationRecord
    validates :first_name, :last_name, :zip_code, :email, :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :email, uniqueness: true

    attr_reader :password
    
    has_one_attached :photo

    has_many :spots

    has_many :bookings,
        foreign_key: :guest_id,
        class_name: :Booking
    
    has_many :reviews

    has_many :booked_spots,
        through: :bookings,
        source: :spot

    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

end
