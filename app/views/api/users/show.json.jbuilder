json.partial! "api/users/user", user: @user

# json.bookings do
#     @user.bookings.each do |booking|
#         json.set! booking.id do
#             json.extract! booking, :id, :check_in, :check_out, :guest_id, :spot_id, :num_guests
#         end
#     end
# end