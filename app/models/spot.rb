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
    
    has_many_attached :photos


    def self.in_bounds(bounds)
        self.where("latitude < ?", bounds[:northEast][:latitude])
        .where("latitude > ?", bounds[:southWest][:longitude])
        .where("longitude > ?", bounds[:southWest][:longitude])
        .where("longitude < ?", bounds[:northEast][:longitude])
    end

end
