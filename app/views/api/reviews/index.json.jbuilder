json.reviews do  
   @reviews.each do |review|
      json.set! review.id do
         json.extract! review, :id, :guest_id, :spot_id, :body
      end
   end
end

json.users do
   @reviews.each do |review|
      json.set! review.guest_id do
         json.extract! review.guest, :id, :first_name, :last_name
      end
   end
end