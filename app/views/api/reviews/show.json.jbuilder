json.reviews do
    json.set! @review.id do
        json.extract! @review, :id, :guest_id, :spot_id, :body
    end
end