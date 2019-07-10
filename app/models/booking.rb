# == Schema Information
#
# Table name: bookings
#
#  id         :bigint           not null, primary key
#  guest_id   :integer          not null
#  check_in   :date             not null
#  check_out  :date             not null
#  spot_id    :integer          not null
#  num_guests :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Booking < ApplicationRecord
    validates :guest_id, :check_in, :check_out, :spot_id, :num_guests, presence: true

    belongs_to :guest,
        foreign_key: :guest_id,
        class_name: :User

    belongs_to :spot,
        foreign_key: :spot_id,
        class_name: :Spot
    
end
