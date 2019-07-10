json.partial! "api/users/user", user: @user

# json.bookings do
#     json.set! @booking.id do
#         json.extract! @booking, :id, :check_in, :check_out, :guest_id, :spot_id, :num_guests
#     end
# end