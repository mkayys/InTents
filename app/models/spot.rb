# == Schema Information
#
# Table name: spots
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  nearby        :string           not null
#  host_id       :integer          not null
#  about         :text             not null
#  price         :float            not null
#  max_guests    :integer          not null
#  check_in      :string
#  check_out     :string
#  cancellation  :string
#  on_arrival    :string
#  min_nights    :integer
#  latitude      :float            not null
#  longitude     :float            not null
#  parking       :boolean          default(FALSE)
#  ada_access    :boolean          default(FALSE)
#  toilets       :boolean          default(FALSE)
#  pull_through  :boolean          default(FALSE)
#  campfire      :boolean          default(FALSE)
#  pets          :boolean          default(FALSE)
#  hookups       :boolean          default(FALSE)
#  potable_water :boolean          default(FALSE)
#  showers       :boolean          default(FALSE)
#  picnic_table  :boolean          default(FALSE)
#  bins          :boolean          default(FALSE)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Spot < ApplicationRecord

    validates :name, :nearby, :host_id, :about, :price, :max_guests, :latitude, :longitude, presence: true

    belongs_to :host,
        foreign_key: :host_id,
        class_name: :User
    
    has_many :bookings,
        foreign_key: :spot_id,
        class_name: :Booking

    has_many_attached :photos

    has_many :reviews,
        foreign_key: :spot_id,
        class_name: :Review

    has_many :authors,
        through: :reviews,
        source: :guest

    def self.in_bounds(bounds)
        # debugger
        bounds = JSON.parse(bounds)

        self.where("latitude < ?", bounds[:northEast][:lat])
            .where("latitude > ?", bounds[:southWest][:lat])
            .where("longitude > ?", bounds[:southWest][:lng])
            .where("longitude < ?", bounds[:northEast][:lng])
    end

end
