# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user = User.new(first_name: 'Guest', last_name: 'User', email: 'guestuser@in-tents', password: 'password', zip_code: 94111)
user.save!

User.create(
    first_name: 'Ryan', 
    last_name: 'Mapa', 
    email: 'rmapa@aa.io', 
    password: 'password', 
    zip_code: 94111
)

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

User.create(
    first_name: 'Rebecca',
    last_name: 'Lambert',
    email: 'reba@lamb.io',
    password: 'r3b3cca',
    zip_code: 94502
)

# SPOTS

num_users = User.all.length

Spot.destroy_all

## Joshua Tree - 8

Spot.create(
    name: "Wendy's Kick it Spot", 
    nearby: "Joshua Tree", 
    host_id: User.all.to_a.sample.id,
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
    host_id: User.all.to_a.sample.id,
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
    host_id: User.all.to_a.sample.id,
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
    host_id: User.all.to_a.sample.id,
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
    name: "High Desert Rock Pile", 
    nearby: "Joshua Tree", 
    host_id: User.all.to_a.sample.id,
    about: "A secluded camp site nestled at the base of a rock pile formation of large sand stone and granite boulders. Enjoy views of San Jacinto and San Gregornio. Only 15 minutes to JTNP or Giant Rock and the Integratron. Even Pioneertown is close!",  
    price: 80, 
    max_guests: 8,             
    check_in: "after 12pm", 
    check_out: "before 12pm", 
    cancellation: "flexible", 
    on_arrival: "meet and greet", 
    min_nights: 1,
    latitude: 34.169, 
    longitude: -116.429999, 
    parking: true, 
    ada_access: true, 
    toilets: true, 
    pull_through: true,
    campfire: true, 
    pets: true, 
    hookups: false, 
    potable_water: false, 
    showers: false, 
    picnic_table: false, 
    bins: true
)

Spot.create(
    name: "Camp at Boulder Gardens", 
    nearby: "Joshua Tree", 
    host_id: User.all.to_a.sample.id,
    about: "This listing allows you to pick from ten spots chosen for rural camping. Or choose car, van or RV spots without hookups. Most are only a small walk away from the main area, and have all access to same the amenities as all the listings do. Our camp areas may be selected near to a ancient Pinion Pine tree, next to massive boulders, or even in a cave. Parking is close by. The landscape is cluttered with massive boulder and Joshua Trees.",  
    price: 48, 
    max_guests: 9,             
    check_in: "after 2pm", 
    check_out: "before 12pm", 
    cancellation: "moderate", 
    on_arrival: "meet and greet", 
    min_nights: 1,
    latitude: 34.21194, 
    longitude: -116.577919, 
    parking: true, 
    ada_access: true, 
    toilets: true, 
    pull_through: false,
    campfire: false, 
    pets: true, 
    hookups: false, 
    potable_water: true, 
    showers: true, 
    picnic_table: true, 
    bins: false
)

Spot.create(
    name: "Auntie Berts Farm", 
    nearby: "Joshua Tree", 
    host_id: User.all.to_a.sample.id,
    about: "Located in Sunny Southern California, this desert escape is filled with cool pieces of history and entertainment, fun for the whole family. A 162 Acre piece of private property lays home to a private campground, welcoming campers looking to drop off the grid, camp, hike and even take a dip in some watering holes. As a true oasis we have 2 swimming holes nestled into a beautiful valley filled with hiking, plenty of shade and a great view waiting at the top of any ridge. A relaxed atmosphere around this RURAL campground, a building sense of community throughout the campground, regularly held pot lucks and group campfires sharing in the beauty of the Southern California Desert.",  
    price: 50, 
    max_guests: 6,             
    check_in: "after 1pm", 
    check_out: "before 11am", 
    cancellation: "strict", 
    on_arrival: "meet and greet", 
    min_nights: 1,
    latitude: 34.075046, 
    longitude: -116.541938, 
    parking: true, 
    ada_access: false, 
    toilets: true, 
    pull_through: false,
    campfire: false, 
    pets: true, 
    hookups: false, 
    potable_water: false, 
    showers: true, 
    picnic_table: true, 
    bins: true
)

Spot.create(
    name: "Horse With No Name", 
    nearby: "Joshua Tree", 
    host_id: User.all.to_a.sample.id,
    about: "🌵One of the few properties in the area that lies next to its own mountain, Horse With No Name is the perfect spot to enjoy a relaxing weekend of cookouts, hiking, and starry nights. 🌜Night sky photographers love us because we're in the darkest gray scale on the nigh sky map - even darker than in the Park!",  
    price: 29, 
    max_guests: 4,             
    check_in: "after 7am", 
    check_out: "before 11am", 
    cancellation: "strict", 
    on_arrival: "go straight to camp", 
    min_nights: 2,
    latitude: 34.1364, 
    longitude: -116.167799, 
    parking: false, 
    ada_access: false, 
    toilets: true, 
    pull_through: false,
    campfire: true, 
    pets: false, 
    hookups: false, 
    potable_water: true, 
    showers: true, 
    picnic_table: true, 
    bins: true
)



## Yosemite - 9

Spot.create(
    name: "A little piece of the planet", 
    nearby: "Yosemite", 
    host_id: User.all.to_a.sample.id,
    about: "A great spot to base camp to be near our National Parks Yosemite and Kings Canyon. It is about 30 mins to 1 plus hour to Yosemite depending on where you want to go. Kings is a bit farther. Bass lake is 20 mins. Other lakes up to an hour. Town is 10 mins. A family restaurant and bar is just around the corner. Also Ahwahnee park and indian wassuma roundhouse. You can look at the pictures and see that there is a fire pit area and a camping kitchen area, also a horseshoe pit and other outdoor games available. Nice neighborhood, no crime, 5 acres of trees, wildlife, beautiful views, sunrise and sunsets. Green grass, wild flowers and creek in spring. Some snow in winter. Access to bathroom and possible shower for short showers. I do live on a dirt road and driveway. MUST DRIVE SLOW. I do have dogs in my home and backyard and chickens and a rooster that crows around 7am.",  
    price: 45, 
    max_guests: 4,             
    check_in: "after 10am", 
    check_out: "before 10am", 
    cancellation: "moderate", 
    on_arrival: "meet and greet", 
    min_nights: 1,
    latitude: 37.3795, 
    longitude: -119.733099, 
    parking: true, 
    ada_access: true, 
    toilets: true, 
    pull_through: false,
    campfire: true, 
    pets: true, 
    hookups: false, 
    potable_water: true, 
    showers: false, 
    picnic_table: true, 
    bins: true
)

Spot.create(
    name: "Wilderness Bridge", 
    nearby: "Yosemite", 
    host_id: User.all.to_a.sample.id,
    about: "Featured on Cabin Porn (Summer cottage in the western foothills of Sierra Nevada Range, California.), this cabin is a whirlwind of sensations and tidbits. The arches are recycled from Korean War era arctic huts. The beams, windows, and door are salvaged from various demolition project-adventures, and the siding and cabinetry are home-made from locally sourced, rough sawn, beetle killed wood.",  
    price: 130, 
    max_guests: 2,             
    check_in: "after 2pm", 
    check_out: "before 12pm", 
    cancellation: "moderate", 
    on_arrival: "meet and greet", 
    min_nights: 2,
    latitude: 37.7956, 
    longitude: -120.262299, 
    parking: false, 
    ada_access: false, 
    toilets: true, 
    pull_through: false,
    campfire: false, 
    pets: false, 
    hookups: false, 
    potable_water: true, 
    showers: true, 
    picnic_table: true, 
    bins: true
)

Spot.create(
    name: "Paradise Shores Lakeshore Camping", 
    nearby: "Yosemite", 
    host_id: User.all.to_a.sample.id,
    about: "Enjoy mellow community vibe, kayaks, stargazing, outdoor kitchen, weekend bonfire nights, and more.. Camp right on the shores of Bridgeport Reservoir with a backdrop of snowcapped Sawtooth Mountain Range and an easy access to trails.",  
    price: 34, 
    max_guests: 6,             
    check_in: "after 1pm", 
    check_out: "before 11am", 
    cancellation: "strict", 
    on_arrival: "meet and greet", 
    min_nights: 1,
    latitude: 38.288814, 
    longitude: -119.236736, 
    parking: true, 
    ada_access: false, 
    toilets: true, 
    pull_through: true,
    campfire: true, 
    pets: true, 
    hookups: false, 
    potable_water: true, 
    showers: true, 
    picnic_table: true, 
    bins: true
)


Spot.create(
    name: "Camp Heather in Tuolumne City", 
    nearby: "Yosemite", 
    host_id: User.all.to_a.sample.id,
    about: "Pitch your tent on the side of a cliff and watch wild life, hear the river and relax. See the moon rise over the mountains and starswithout any intrusive lights. Wild life include quail, foxes, deer and turkeys. Allwhilebeing 3 minutes away from Black Oak Casino and it's fabulous restaurantsand the West Side Trail.",  
    price: 100, 
    max_guests: 5,             
    check_in: "after 3pm", 
    check_out: "before 11am", 
    cancellation: "strict", 
    on_arrival: "meet and greet", 
    min_nights: 1,
    latitude: 37.97377, 
    longitude: -120.242495, 
    parking: true, 
    ada_access: false, 
    toilets: true, 
    pull_through: true,
    campfire: false, 
    pets: true, 
    hookups: false, 
    potable_water: true, 
    showers: true, 
    picnic_table: true, 
    bins: true
)

Spot.create(
    name: "Frog Hollow - Creekbed Canyon", 
    nearby: "Yosemite", 
    host_id: User.all.to_a.sample.id,
    about: "Enjoy two acres of private land located in historic Mariposa. Right off the highway and only 10 minutes to town; you will get to enjoy the serene peace and quiet on our mostly secluded land. We are surrounded by several scenic local spots and a 45 minute drive to Yosemite National Park. Additionally, each site comes with picnic table, flat spot for tents, and close to camp parking. Disclaimer: Please note that the shower is not available until further notice.",  
    price: 30, 
    max_guests: 4,             
    check_in: "after 1pm", 
    check_out: "before 12pm", 
    cancellation: "super strict", 
    on_arrival: "go straight to camp", 
    min_nights: 1,
    latitude: 37.4833, 
    longitude: -120.041799, 
    parking: true, 
    ada_access: false, 
    toilets: true, 
    pull_through: false,
    campfire: true, 
    pets: true, 
    hookups: false, 
    potable_water: false, 
    showers: false, 
    picnic_table: true, 
    bins: false
)


Spot.create(
    name: "Big Sage", 
    nearby: "Yosemite", 
    host_id: User.all.to_a.sample.id,
    about: "This our large group camping area. We can accomodate large groups up to 40 or more. This area offers shady flat camping . A large fire pit, tables and chairs . There is also a pit toilet as well we have a porta potty . The views from this location are legendary! Kids camp free! We now have firewood available 10$ a bundle!",  
    price: 50, 
    max_guests: 45,             
    check_in: "after 2pm", 
    check_out: "before 12pm", 
    cancellation: "flexible", 
    on_arrival: "meet and greet", 
    min_nights: 1,
    latitude: 38.0813, 
    longitude: -119.053599, 
    parking: true, 
    ada_access: false, 
    toilets: true, 
    pull_through: true,
    campfire: true, 
    pets: true, 
    hookups: false, 
    potable_water: true, 
    showers: false, 
    picnic_table: true, 
    bins: false
)


Spot.create(
    name: "Piñon Camp", 
    nearby: "Yosemite", 
    host_id: User.all.to_a.sample.id,
    about: "Come camp in the shade of the Pinion trees. This camp is ready for tents and campers, small r.v . Complete with fire pit , cooking table, and pit toilet. Excellent views of the Mono lake and the Sierra Nevada. Kids camp free! Firewood available 10$ a bundle!",  
    price: 20, 
    max_guests: 12,             
    check_in: "after 2pm", 
    check_out: "before 12pm", 
    cancellation: "flexible", 
    on_arrival: "go straight to camp", 
    min_nights: 1,
    latitude: 38.0854, 
    longitude: -119.062499, 
    parking: true, 
    ada_access: false, 
    toilets: true, 
    pull_through: false,
    campfire: true, 
    pets: true, 
    hookups: false, 
    potable_water: true, 
    showers: false, 
    picnic_table: false, 
    bins: false
)

Spot.create(
    name: "Mountain Views • Right On the Water", 
    nearby: "Yosemite", 
    host_id: User.all.to_a.sample.id,
    about: "Welcome to Bridgeport Reservoir Marina and Campground. Classic camping and fishing with excellent views of the mountains and lake We have developed tent and campervan sites right on the water. Lies within the Toiyabe National Forest area and near two distinct hot springs. The lake is great for fishing in the spring through fall. In proximity to great river and stream fishing as well. 30 minutes or 31 miles to Tioga pass into Yosemite National Park. Plenty of mountain biking and 4x4 trails access. Bodie Ghost Town is very close as well.",  
    price: 28, 
    max_guests: 7,             
    check_in: "after 2pm", 
    check_out: "before 2pm", 
    cancellation: "strict", 
    on_arrival: "meet and greet", 
    min_nights: 1,
    latitude: 38.2808, 
    longitude: -119.238999, 
    parking: true, 
    ada_access: false, 
    toilets: true, 
    pull_through: true,
    campfire: true, 
    pets: true, 
    hookups: true, 
    potable_water: true, 
    showers: true, 
    picnic_table: true, 
    bins: true
)

Spot.create(
    name: "Starry views on Anahata lake", 
    nearby: "Yosemite", 
    host_id: User.all.to_a.sample.id,
    about: "Pitch your tent or park your camper by a wonderful lake on our 80-acre oak woodland and enjoy the sounds of nature -- birds on the lake, frogs, and crickets. You may see deer, geese, turkeys or a jack rabbit in the early morning. Our dark skies are great for relaxing under the stars. The location is perfect for wine tasting in Murphys (5 minutes), attending a concert at Ironstone (10 minutes) site seeing in the gold country, hiking in the Sierra, and playing in high alpine lakes. We are about half way between Yosemite and Lake Tahoe.",  
    price: 45, 
    max_guests: 4,             
    check_in: "after 2pm", 
    check_out: "before 12pm", 
    cancellation: "flexible", 
    on_arrival: "meet and greet", 
    min_nights: 1,
    latitude: 38.0837, 
    longitude: -120.476587, 
    parking: true, 
    ada_access: false, 
    toilets: true, 
    pull_through: true,
    campfire: false, 
    pets: false, 
    hookups: false, 
    potable_water: true, 
    showers: true, 
    picnic_table: false, 
    bins: true
)

Spot.all.each_with_index do |spot, idx|
    if (idx < 8) 
        (1..9).each do |pic_idx|
            file = EzDownload.open("https://in-tents-seed.s3-us-west-1.amazonaws.com/spots/JT/0#{idx+1}-JT/0#{idx+1}-0#{pic_idx}-JT.jpg")
            spot.photos.attach(io: file, filename: "0#{idx+1}-0#{pic_idx}-JT.jpg")
            spot.save!
        end
    else
        (1..9).each do |pic_idx|
            file = EzDownload.open("https://in-tents-seed.s3-us-west-1.amazonaws.com/spots/Y/0#{idx-8}-Y/0#{idx-8}-0#{pic_idx}-Y.jpg")
            spot.photos.attach(io: file, filename: "0#{idx-8}-0#{pic_idx}-Y.jpg")
            spot.save!
        end
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


# REVIEWS

Review.destroy_all

Review.create(
    guest_id: User.all.to_a.sample.id,
    spot_id: Spot.all.to_a.sample.id,
    body: 'awesome campsite, found a gold ring, sold it for 20K'
)

Review.create(
    guest_id: User.all.to_a.sample.id,
    spot_id: Spot.all.to_a.sample.id,
    body: 'lame campsite, skunk ate my food; this is what war must feel like'
)

Review.create(
    guest_id: User.all.to_a.sample.id,
    spot_id: Spot.all.to_a.sample.id,
    body: "I enjoyed myself here. I spent my time reading Thoreau and his essay on civil disobedience. I'm leaving feeling much more educated than when I came in. My life will never be the same. I took the road less traveled. And NOW... I am on the other side. Deuces, mic drop"
)

Review.create(
    guest_id: User.all.to_a.sample.id,
    spot_id: Spot.all.to_a.sample.id,
    body: "
    Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;

Then took the other, as just as fair,
And having perhaps the better claim,
Because it was grassy and wanted wear;
Though as for that the passing there
Had worn them really about the same,

And both that morning equally lay
In leaves no step had trodden black.
Oh, I kept the first for another day!
Yet knowing how way leads on to way,
I doubted if I should ever come back.

I shall be telling this with a sigh
Somewhere ages and ages hence:
Two roads diverged in a wood, and I—
I took the one less traveled by,
And that has made all the difference.
"
)

Review.create(
    guest_id: User.all.to_a.sample.id,
    spot_id: Spot.all.to_a.sample.id,
    body: "
    Whose woods these are I think I know.   
His house is in the village though;   
He will not see me stopping here   
To watch his woods fill up with snow.   

My little horse must think it queer   
To stop without a farmhouse near   
Between the woods and frozen lake   
The darkest evening of the year.   

He gives his harness bells a shake   
To ask if there is some mistake.   
The only other sound’s the sweep   
Of easy wind and downy flake.   

The woods are lovely, dark and deep,   
But I have promises to keep,   
And miles to go before I sleep,   
And miles to go before I sleep.
"
)
