json.users do
    json.set! @user.id do
        json.extract! @user, :id, :first_name, :last_name, :email
        json.joined @user.joined
    end
end

json.bookings do
    @user.bookings.each do |booking|
        json.set! booking.id do
            json.extract! booking, :id, :check_in, :check_out, :guest_id, :spot_id, :num_guests
        end
    end
end

json.spots do
    @user.booked_spots.each do |spot|
        json.set! spot.id do
            json.extract! spot, :id, :name, :nearby
        end
    end
end