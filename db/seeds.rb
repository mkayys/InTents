# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

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


# SPOTS

num_users = User.all.length

Spot.destroy_all

Spot.create(
    name: "Wendy's Kick it Spot", 
    nearby: "Joshua Tree", 
    host_id: User.all[(0..num_users).to_a.sample].id,
    about: "It's like deep starry nights. And dreamy meditation. It's like great Joshua Tree coffee, best cup you ever had. It's like Jesus is your best friend, and you don't have to worry anymore. It's like getting amazingly elevated by your surrounding. And, what you chose to do with that. There is love, there is tranquil, there is peace. Please stay and enjoy.",  
    price: 50, 
    max_guests: 4,             
    check_in: "after 3pm", 
    check_out: "before 11am", 
    cancellation: "moderate", 
    on_arrival: "meet and greet", 
    min_nights: 1,
    latitude: 34.249133, 
    longitude: -116.353233, 
    parking: true, 
    ada_access: false, 
    toilets: true, 
    pull_through: true,
    campfire: true, 
    pets: true, 
    hookups: false, 
    potable_water: true, 
    showers: true, 
    picnic_table: false, 
    bins: true
)

Spot.create(
    name: "S K Y C A M P", 
    nearby: "Joshua Tree", 
    host_id: User.all[(0..num_users).to_a.sample].id,
    about: "Sky Camp is like a home without walls, offering panoramic desert views that will take your breath away. The camp is situated high on the hills of the Bartlett Mountain Range and offers great views of Joshua Tree National Park, just minutes away.",  
    price: 50, 
    max_guests: 4,             
    check_in: "after 2pm", 
    check_out: "before 12pm", 
    cancellation: "strict", 
    on_arrival: "go straight to camp", 
    min_nights: 1,
    latitude: 34.179, 
    longitude: -116.347599, 
    parking: true, 
    ada_access: false, 
    toilets: true, 
    pull_through: false,
    campfire: true, 
    pets: true, 
    hookups: false, 
    potable_water: true, 
    showers: true, 
    picnic_table: true, 
    bins: true
)

Spot.create(
    name: "Edge Of The Wilderness", 
    nearby: "Joshua Tree", 
    host_id: User.all[(0..num_users).to_a.sample].id,
    about: "This cabin lies on the edge of the Cleghorn Lakes (dry) Wilderness. It sits on 5 acres with incredible views of the Bullion Mtns during the day and stars everywhere at night! This site will accommodate a small RV and works great for tent camping as well. Hiking and horseback riding are nearby, as well as the local watering hole (The Palms). Edge of the Wilderness is a primitive campsite with basic amenities. Joshua Tree National Park is a short drive away.",  
    price: 65, 
    max_guests: 12,             
    check_in: "after 2pm", 
    check_out: "before 1pm", 
    cancellation: "strict", 
    on_arrival: "meet and greet", 
    min_nights: 1,
    latitude: 34.2009, 
    longitude: -115.858899, 
    parking: true, 
    ada_access: false, 
    toilets: true, 
    pull_through: true,
    campfire: false, 
    pets: true, 
    hookups: false, 
    potable_water: false, 
    showers: false, 
    picnic_table: true, 
    bins: false
)

Spot.create(
    name: "CAMP COYOTE ACRES", 
    nearby: "Joshua Tree", 
    host_id: User.all[(0..num_users).to_a.sample].id,
    about: "Our Old Western-themed Campsites provides the perfect desert camping experience, and quick access to hiking trails and OHV trails in the area. Easy access in and out from camp to Hwy. 247. Area is Very quiet and peaceful . Our campsites offer privacy with a private fire pit, We've got a uniquely cute bathroom , the ladies love it. The campsite is open for tent camping or parking RV's/Toy Haulers nearby. For your pets we have dog boarding services are available. Guided tours to many local hot spots like petroglyphs, sand dunes, gold mines, jade and torquoise mines. Our activities include off roading, hiking , rock climbing, desert adventures exploring the historic sights in our area. The kids love it here, since we are an animal Foster ranch we have many fun animals , potbellied pigs, turkeys, chickens a goat and of course dogs.",  
    price: 40, 
    max_guests: 9,             
    check_in: "after 12pm", 
    check_out: "before 12pm", 
    cancellation: "flexible", 
    on_arrival: "meet and greet", 
    min_nights: 1,
    latitude: 34.340567, 
    longitude: -116.572366, 
    parking: true, 
    ada_access: false, 
    toilets: true, 
    pull_through: true,
    campfire: true, 
    pets: true, 
    hookups: false, 
    potable_water: false, 
    showers: false, 
    picnic_table: true, 
    bins: true
)

Spot.create(
    name: "A View of Joshua Tree", 
    nearby: "Joshua Tree", 
    host_id: User.all[(0..num_users).to_a.sample].id,
    about: "Pitch a tent. It is a short drive to Joshua Tree National Park for hiking or climbing. There is a small mountain to climb right across the dirt road from my house. It is quiet and peaceful in the middle of the desert. Not fancy. This is a clothing optional 420-friendly and LGBTQ friendly place.",  
    price: 25, 
    max_guests: 10,             
    check_in: "after 12pm", 
    check_out: "before 12pm", 
    cancellation: "flexible", 
    on_arrival: "meet and greet", 
    min_nights: 1,
    latitude: 34.1451, 
    longitude: -116.199199, 
    parking: true, 
    ada_access: false, 
    toilets: true, 
    pull_through: true,
    campfire: false, 
    pets: false, 
    hookups: false, 
    potable_water: true, 
    showers: true, 
    picnic_table: true, 
    bins: true
)

Spot.all.each_with_index do |spot, idx|
    (1..4).each do |pic_idx|
        file = EzDownload.open("https://in-tents-seed.s3-us-west-1.amazonaws.com/spots/JT/0#{idx+1}-JT/0#{idx+1}-0#{pic_idx}-JT.jpg")
        spot.photos.attach(io: file, filename: "0#{idx+1}-0#{pic_idx}-JT.jpg")
        spot.save!
    end
end


# BOOKINGS

num_spots = Spot.all.length

Booking.destroy_all

Booking.create(
    guest_id: User.all.to_a.sample.id,
    check_in: 20190718,
    check_out: 20190720,
    spot_id: Spot.all.to_a.sample.id,
    num_guests: rand(1..4)
)

Booking.create(
    guest_id: User.all.to_a.sample.id,
    check_in: 20190721,
    check_out: 20190722,
    spot_id: Spot.all.to_a.sample.id,
    num_guests: rand(1..4)
)

Booking.create(
    guest_id: User.all.to_a.sample.id,
    check_in: 20190801,
    check_out: 20190806,
    spot_id: Spot.all.to_a.sample.id,
    num_guests: rand(1..4)
)

Booking.create(
    guest_id: User.all.to_a.sample.id,
    check_in: 20190723,
    check_out: 20190725,
    spot_id: Spot.all.to_a.sample.id,
    num_guests: rand(1..4)
)

Booking.create(
    guest_id: User.all.to_a.sample.id,
    check_in: 20190729,
    check_out: 20190730,
    spot_id: Spot.all.to_a.sample.id,
    num_guests: rand(1..4)
)