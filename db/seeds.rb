# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

user = User.new(first_name: 'Ryan', last_name: 'Mapa', email: 'rmapa@aa.io', password: 'password', zip_code: 94111)
user.save!

User.create(
    first_name: 'Selam',
    last_name: 'Weldu',
    email: 'swel@twinpeaks.io',
    password: 'password123',
    zip_code: 43015
)

User.create(
    first_name: 'Kavya',
    last_name: 'Kumar',
    email: 'kavku@twinpeaks.io',
    password: 'pass123word',
    zip_code: 94602    
)

User.create(
    first_name: 'Johnny',
    last_name: 'Tae',
    email: 'jtae@twinpeaks.io',
    password: '123password',
    zip_code: 94662  
)

User.create(
    first_name: 'David',
    last_name: 'Song',
    email: 'dsong@twinpeaks.io',
    password: 'pass123',
    zip_code: 94016 
)

User.create(
    first_name: 'Jesus',
    last_name: 'Montano',
    email: 'jmontano@twinpeaks.io',
    password: 'word123',
    zip_code: 94103 
)

User.create(
    first_name: 'Jimmy',
    last_name: 'Nguyen',
    email: 'jnguyen@twinpeaks.io',
    password: '123456',
    zip_code: 94122
)

User.create(
    first_name: 'Omar',
    last_name: 'Abbasi',
    email: 'oabb@twinpeaks.io',
    password: '654321',
    zip_code: 94111
)

Spot.destroy_all

Spot.create(
    name: "Wendy's Kick it Spot",
    nearby: "Joshua Tree",
    about: "It's like deep starry nights. And dreamy meditation. It's like great Joshua Tree coffee, best cup you ever had. It's like Jesus is your best friend, and you don't have to worry anymore. It's like getting amazingly elevated by your surrounding. And, what you chose to do with that. There is love, there is tranquil, there is peace. Please stay and enjoy.",
    price: 50,
    max_guests: 4,
    latitude: 34.249133,
    longitude: -116.353233
)

