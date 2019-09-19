json.spots do
    json.set! @spot.id do
        json.extract! @spot, :id, :name, :nearby, :host_id, :about, :price, :max_guests,
                            :check_in, :check_out, :cancellation, :on_arrival, :min_nights,
                            :latitude, :longitude, :parking, :ada_access, :toilets, :pull_through,
                            :campfire, :pets, :hookups, :potable_water, :showers, :picnic_table, :bins
        json.photoUrls @spot.photos.map { |photo| url_for(photo) }
    end
end

json.users do
    json.set! @spot.host.id do
        json.extract! @spot.host, :id, :first_name, :last_name
    end
end

