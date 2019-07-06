@spots.each do |spot|
   json.set! spot.id do
        json.extract! spot, :name, :nearby, :host_id, :about, :price, :max_guests,
                            :check_in, :check_out, :cancellation, :on_arrival, :min_nights,
                            :latitude, :longitude, :parking, :ada_access, :toilets, :pull_through,
                            :campfire, :pets, :hookups, :potable_water, :showers, :picnic_table, :bins
    #    json.photo_url url_for(spot.photos.first)
    #    json.photoUrls spot.photos.map { |photo| url_for(photo) }
   end
end