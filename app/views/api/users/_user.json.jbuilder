json.set! user.id do
    json.extract! user, :id, :first_name, :last_name
end