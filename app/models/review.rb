# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  guest_id   :integer          not null
#  spot_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
    validates :guest_id, :spot_id, :body, presence: true

    belongs_to :guest,
        foreign_key: :guest_id,
        class_name: :User
    
    belongs_to :spot,
        foreign_key: :spot_id,
        class_name: :Spot
end
