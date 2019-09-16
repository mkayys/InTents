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
    validate :start_must_come_before_end

    belongs_to :guest,
        foreign_key: :guest_id,
        class_name: :User

    belongs_to :spot,
        foreign_key: :spot_id,
        class_name: :Spot
    

    def overlapping_bookings
        Booking
            .where.not(id: self.id)
            .where(spot_id: spot_id)
            .where.not('check_in > :check_out OR check_out < :check_in', 
                        check_in: check_in, check_out: check_out)
    end
    

    def start_must_come_before_end
        return if check_in < check_out
        errors[:check_in] << 'must come before check-out date'
        errors[:check_out] << 'must come after check-in date'
    end


end
