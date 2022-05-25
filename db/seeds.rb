# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# title, description, data, creator_id, start_time, end_time, address

# demo = Event.create(title: "", description: "", date: '', start_time:'', end_time: '', creator_id: , price: , address: '')
# demo = open('')
# demo.photo.attach(io: , filename: '')

require 'open-uri'

User.destroy_all
Event.destroy_all
Like.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('events')
ActiveRecord::Base.connection.reset_pk_sequence!('likes')
ActiveRecord::Base.connection.reset_pk_sequence!('tickets')


u1 = User.create(username:'test', email: 'test@mail.com', fname: 'tester', lname: 'testa', password: '123456')
u2 = User.create(username:'test2', email: 'test2@gmail.com', fname: 'tester2', lname: 'tester2', password: '123456')
u3 = User.create(username: 'test3', email: 'test3@gmail.com', fname: 'tester3', lname:'tester2', password: '123456')

l1 = Like.create(event_id: 1, user_id:1)
l2 = Like.create(event_id: 5, user_id:1)
l3 = Like.create(event_id: 16, user_id:1)

l4 = Like.create(event_id: 3, user_id: 2)
l5 = Like.create(event_id: 9, user_id: 2)
l6 = Like.create(event_id: 14, user_id: 2)

l7 = Like.create(event_id: 17, user_id: 3)

e1 = Event.create(
    title: 'Toasted Life Summer Outdoor Block Party', 
    description: "Let's Kick off the Sumemr the Toasted Life Way - In Celebration of JOY!

    Toasted Life is back and hosting another epic day part this May to celebrate our community and 
    being BACK OUTSIDE! It's expected to be sunny, so be ready for all the fresh vibes. Come toast 
    to life and bring your tribe!

    ABOUT THE TOASTED LIFE BLOCK PARTY
    A Celebration for the Culture. The Toasted Life Block Party is more than a home for Bay Area
    party-goers - It's an ongoing community building experience, for both new and existing residents 
    of the area, and a unifying demonstration of positive energy and joy in celebration of good
    health, fortune, and vitality. This is a space to celebrate yourself and your growth!", 

    date: 'Sat, May 21, 2022', 
    start_time:'1:00 PM PDT', 
    end_time: '7:00 PM PDT', 
    creator_id: 1, 
    price: 20,
    address: '341 13th St Entrance to Outdoor Space Oakland, CA 94612'

)

f1 = open("https://eventright-seeds.s3.us-west-1.amazonaws.com/e1.jpg")
e1.photo.attach(io: f1, filename: 'e1.jpg')

e2 = Event.create(
    title: 'Lakehouse Jazz', 
    description: 
    "Lakehouse Jazz is a unique and intimate concert experience in the iconic Golden Gate Park at
    a hidden and iconic boathouse. 

    About Lakehouse Jazz
    Enjoy the most reviwed intimate music experience WORLDWIDE! Lakehouse Jazz, a unique and 
    intimate concert experience in the iconic Golden Gate Park at a hidden and iconic boathouse. 
    As Karl the Fog moves over the lake and covers a slew of colorful boats, we'll sit inside our
    intimate and improvised conecert venue where the music of the best musicians in the Bay Area 
    and a glass of beer and wine will be the perfect way to unwind your week. By attending this 
    event not only will you listen and learn jazz from some of the best musicians in The By Area, 
    but you'll also be actively supporting the local art scene and its musicians. Kudos!", 

    date: 'Fri, May 20, 2022', 
    start_time:'7:30 PM PDT',
    end_time: '9:30 PM PDT', 
    creator_id: 1, 
    price: 35, 
    address: "Stow Lake Boathouse 50 Stow Lake Drive East San Francisco, CA 94118"
)
f2 = open('https://eventright-seeds.s3.us-west-1.amazonaws.com/e2.jpg')
e2.photo.attach(io: f2, filename: 'e2.jpg')


e3 = Event.create(
    title: "No Scrubs: SF's Best '90s Hip Hop and R&b Night", 
    description: 
    "After 14 months we are back! From TLC, to the Fresh Prince, to Kid 'N play to Usher
    
    About this event

    After 14 months, one of SF's most poular weekly dance parties is finally back! We're taking
    over San Francisco's Neck of the Woods, which is reopening for the first time since early 
    2020 and has just been extensively renovated with a brand new kick-ass sound system, plus 
    upgraded lighting and seating, brand new hard wood floors, new DJ booth and a full bar w/
    summer cocktails specials.

    //EVERY SATURDAY AT 10:30PM //

    The '90s were the best. The fashion was uhh-mayy-zing, the slang was super dope, and the music 
    was PHENOMENAL. From TLC, to the Fresh Prince, to Kid 'N play to Usher...the list goes on. Wear 
    your dancing shoes to get your groove on to the best 90's Hip Hop and R&B tunes every Saturday.
    DJ Beats Me will be spinning your favorite jams until the popo kick us out! NO SCRUBS ALLOWED!",

    date: 'Fri, May 20, 2022', 
    start_time:'10:30 PM PDT', 
    end_time: '1:00 AM PDT', 
    creator_id: 1, 
    price: 15, 
    address: 'Neck of the Woods 406 Clement Street San Francisco, CA 94118'

)

f3 = open('https://eventright-seeds.s3.us-west-1.amazonaws.com/e3.jpg')
e3.photo.attach(io: f3, filename: 'e3.jpg')


e4 = Event.create(
    title: "SUMMERTIME RADNESS / WAX MOTIF", 
    description: "WAX MOTIF @ THE PHOENIX HOTEL SUNDAY 5/29 1PM. Support from Musubi, Watts &amp; 
    N808 b2b Dwata.", 
    date: 'Sun, May 29, 2022', 
    start_time:'1:00 PM PDT', 
    end_time: '6:00 PM PDT', 
    creator_id: 1, 
    price: 30, 
    address: 'The Phoenix Hotel 601 Eddy St. San Francisco, CA 94109'

)

f4 = open('https://eventright-seeds.s3.us-west-1.amazonaws.com/e4.jpg')
e4.photo.attach(io: f4, filename: 'e4.jpg')

e5 = Event.create(
    title: "The Unreal Garden: San Francisco", 
    description: "Discover the world's most advanced holographic experience with your friends and 
    family in the heart of San Francisco, in the same building as the Verse: Art of the Future exhibit. 
    Are you looking for a little magic with your special someone, an engaging adventure and fun for the 
    whole family, or the next hit content for your TikTok feed? The Unreal Garden is a space of 
    possibilities filled with magical flora, fauna and artworks, a space to be transformed by your presence 
    and energy. A space where everyone has their own unique experience. The experience uses the Microsoft 
    HoloLens 2, a powerful mixed reality headset that allows you to see your surroundings and fellow guests, 
    while cool augmented creatures, plant life and art come to life around you.
        
    We are located in the historic San Francisco Mint, presented by NPU Events and powered by Enklu.

    For more information, visit www.theunrealgarden.com", 
    date: 'Wed, May 18, 2022', 
    start_time:'12:30 PM PDT', 
    end_time: '7:00 PM PDT', 
    creator_id: 1, 
    price: 50, 
    address: 'The Historic San Francisco Mint 88 5th St. San Francisco, CA 94103'

)

f5 = open('https://eventright-seeds.s3.us-west-1.amazonaws.com/e5.jpg')
e5.photo.attach(io: f5, filename: 'e5.jpg')

e6 = Event.create(
    title: "Frugal Foodies Berkeley--Cooking the Books: East Bay Cooks", 
    description: "It's the fourth Tuesday of the month and that means that we'll take our inspiration 
    (and all of our recipes) from a particular cookbook. In May, I'm excited to delve into Carolyn 
    Jung's East Bay Cooks, a new book in my collection. It touts itself as the “signature recipes 
    from best restaurants, bars, and bakeries”, and the entries look compelling. The represented 
    restaurants are a Who's Who of the culinary scene including some of my favorites like Duende, 
    Shakewell, Gaumenkitzel, and Millenium. We'll cook some of the veggie selections and do so at 
    one tenth of the cost!", 
    date: 'Tue, May 24, 2022', 
    start_time:'6:30 PM PDT', 
    end_time: '9:30 PM PDT', 
    creator_id: 1, 
    price: 10, 
    address: '800 Heinz Avenue Suite 14 Berkeley, CA 94710'

)

f6 = open('https://eventright-seeds.s3.us-west-1.amazonaws.com/e6.jpg')
e6.photo.attach(io: f6, filename: 'e6.jpg')

e7 = Event.create(
    title: "Fundamental Tai Chi Class in Sunnyvale", 
    description: "Besides learning the fundamental principle and movement of Tai Chi, this class is both 
    fun and practical. We will learn the complete series of the traditional Yang Style Taijuquan Slow Form 
    Advance methods are taught in loosening pliability, supple strength, twisting strength, and the continuity
    of energy flow as an expression of body.", 
    date: 'Tue, May 24, 2022', 
    start_time:'10:00 AM PDT', 
    end_time: '11:30 AM PDT', 
    creator_id: 1, 
    price: 0, 
    address: 'Sunnyvale Community Center Park 560 E. Remington Dr. Sunnyvale, CA 94087'

)
f7 = open('https://eventright-seeds.s3.us-west-1.amazonaws.com/e7.jpg')
e7.photo.attach(io: f7, filename: 'e7.jpg')

e8 = Event.create(
    title: "District Six Arts & Wine Festival", 
    description: "District Six is hosting our first art & wine festival. Combining some of our favorites 
    local artists & wineries together for one day. Think outdoor art walk that meets wine tasting with 
    best friends. Featuring live music and muralist creating art on-site.", 
    date: 'Sat, May 21, 2022', 
    start_time:'12:00 PM PDT', 
    end_time: '5:00 PM PDT', 
    creator_id: 2, 
    price: 45, 
    address: 'District Six 428 11th Street San Francisco, CA 94103'

)

f8 = open('https://eventright-seeds.s3.us-west-1.amazonaws.com/e8.jpg')
e8.photo.attach(io: f8, filename: 'e8.jpg')

e9 = Event.create(
    title: "2022 Race for the Sea Turtles 1M 5K 10K 13.1 26.2-Save $2", 
    description: "Okay people! Did you know that June 16 is World Sea Turtle Day? We are so excited to 
    team up with The Turtle Hospital in Marathon, Florida, for our third annual: Race for the Sea Turtles 
    1M 5K 10K 13.1 26.2 virtual race! We are so excited for this race and this beautiful sea turtle medal!
    We will be donating 15% of each registration for this race to The Turtle Hospital, (Hidden Harbor Marine 
    Environmental Project, Inc.). They are a fully functioning veterinary hospital for sick and injured 
    sea turtles and rescue, rehab, and release sea turtles in the Florida Keys.", 
    date: 'Sun, Jun 12, 2022', 
    start_time:'5:00 AM PDT', 
    end_time: '11:00 PM PDT', 
    creator_id: 2, 
    price: 16, 
    address: 'AROUND THE WORLD Participate from home!'

)
f9 = open('https://eventright-seeds.s3.us-west-1.amazonaws.com/e9.jpg')
e9.photo.attach(io: f9, filename: 'e9.jpg')

e10 = Event.create(
    title: "World Dog Surfing Competition: Entrant Registration for 2022", 
    description: "The World Championships for Dog Surfing take place on the Northern California coast - 
    where the concept for the sport originated - bringing together dog surfing talent for charity. Dog 
    surfers are invited to bring home the gold. During the event there will be a number of activities 
    including the surf competition, partner tents and activities, and more. Entrants also receive a VIP 
    Gift Bag, with items such as dog treats, snacks, and more. The Norcal World Dog Surfing event celebrates 
    the best in the sport, but this event is not only for sport and for fun. It's also for great causes, 
    like Rocket Dog the Peninsula Humane Society. Help local charities raise money by having friends and family 
    sponsor your or your team using our partners, Eventbrite and Crowdrise. $5 of each surfing dog registration 
    is donated to either of the associate charities after the event has been completed. We also encourage entrants 
    to fundraise for these dog non-profits as well.", 
    date: 'Sat, August 6, 2022', 
    start_time:'9:00 AM PDT', 
    end_time: '2:00 PM PDT', 
    creator_id: 2, 
    price: 25, 
    address: 'Linda Mar Beacha Highway One and Linda Mar Blvd Pacifica, CA 94044'

)

f10 = open('https://eventright-seeds.s3.us-west-1.amazonaws.com/e10.jpg')
e10.photo.attach(io: f10, filename: 'e10.jpg')

e11 = Event.create(
    title: "Friends Night Brunch Trivia Event!", 
    description: "Do you have Unagi? Are you our lobster? Do you know what kind of scary ass clowns 
    were at your birthday parties? Then this is the trivia brunch for you! We'll have 2 hours Friends 
    trivia, themed food and drink specials and a Friend costume contest! Expect Monica's jam, lots 
    of mimosas and bloody marys and 60 all-new questions about your favorite Friends! Grab your Friends, 
    grab your table and get ready for Friends Trivia Brunch! Our Friends event sell out fast so grab 
    your table now!", 
    date: 'Sun, May 22, 2022', 
    start_time:'7:00 PM PDT', 
    end_time: '9:00 PM PDT', 
    creator_id: 2, 
    price: 15, 
    address: 'Canyon Commons'

)

f11 = open('https://eventright-seeds.s3.us-west-1.amazonaws.com/e11.jpg')
e11.photo.attach(io: f11, filename: 'e11.jpg')

e12 = Event.create(
    title: "Ladies Art Night", 
    description: "Ladies Art Night is a time to bring out your creativity and make art in a relaxed 
    environment. As always each month we have a different craft or project that can be done while 
    drinking wine (or your preferred beverage) and chatting with each other, in person in San Jose! 
    No experience needed, yet even experienced artists find these events fun! Invite your friends 
    or meet new ones in this supportive session.", 
    date: 'Fri, May 20, 2022', 
    start_time:'6:30 PM PDT', end_time: '8:30 PM PDT', 
    creator_id: 2, 
    price: 30, 
    address: 'School Of Visual Philosophy 1065 The Alameda San Jose, CA 95126'

)

f12 = open('https://eventright-seeds.s3.us-west-1.amazonaws.com/e12.jpg')
e12.photo.attach(io: f12, filename: 'e12.jpg')

e13 = Event.create(
    title: "Yoga at Almanac Beer Co.", 
    description: "Join us on the 2nd and 4th Sunday of every month at 10am for Yoga at Almanac Beer Co. 
    We'll begin with a one hour yoga class followed by a pint of your favorite Almanac beer! Class will 
    be held in the beer garden outside, weather permitting. If needed, we'll move inside. Yoga begins 
    at 10am, please plan to arrive at least ten minutes early to check in and get settled. Class is 
    suitable for beginner and intermediate level pracitioners, modifications and props will be provided. 
    21+, masks required while indoors. Your ticket includes class and a beer, so come thirsty! A food 
    truck will arrive shortly after yoga ends for you to purchase lunch - and perhaps another cold one!
    
    What to bring: yoga mat, water bottle, sunblock, mask, ID

    Cheers!", 
    date: 'Sun, May 22, 2022', 
    start_time:'10:00 AM PDT', 
    end_time: '12:30 PM PDT', 
    creator_id: 2, 
    price: 20, 
    address: 'Almanac Beer Co. 651 West Tower Avenue Alameda, CA 94501'

)

f13 = open('https://eventright-seeds.s3.us-west-1.amazonaws.com/e13.jpg')
e13.photo.attach(io: f13, filename: 'e13.jpg')

e14 = Event.create(
    title: "Stigma Elevated Workout", 
    description: "Join us for a Elevated Workout Session - Saturday May 28th @12pm PST at Elevated 
    Fitness & Recovery San Carlos, Ca. Together we are shattering the “lazy stoner” stereotype with 
    Coach Quenne @elevatedfitnessrecovery leading us through a 60 min. full body warm up, workout, 
    and cool down. Followed by a pow-wow. 
    
    There will be two ways you can join:
    
    Join us in person at Elevated Fitness & Recovery in San Carlos, Ca. Look for the large Stigma flags. Snacks and drinks provided.
    
    Tune in to our LIVE stream on Instagram from anywhere around the world 🌎", 
    date: 'Sat, May 28, 2022', 
    start_time:'12:00 PM PDT', 
    end_time: '2:00 PM PDT', 
    creator_id: 2, 
    price: 0, 
    address: '1700 Industrial Road San Carlos, CA 94070'

)

f14 = open('https://eventright-seeds.s3.us-west-1.amazonaws.com/e14.jpg')
e14.photo.attach(io: f14, filename: 'e14.jpg')


e15 = Event.create(
    title: "Hexagon Patchwork", 
    description: "Come learn a quick and easy method for making hexagon patchwork! These hexagons 
    can be stitched together to create all sorts of patterns. I will show you my Hexagon Project 
    Quilt in progress. All materials are provided and there is no previous sewing experience 
    necessary. ", 
    date: 'Wed, June 15, 2022', 
    start_time:'6:00 PM PDT', 
    end_time: '7:00 PM PDT', 
    creator_id: 2, 
    price: 30, 
    address: 'SCRAP 2150 Newcomb Avenue San Francisco, CA 94124'

)

f15 = open('https://eventright-seeds.s3.us-west-1.amazonaws.com/e15.jpg')
e15.photo.attach(io: f15, filename: 'e15.jpg')


e16 = Event.create(
    title: "SUMMERTIME RADNESS / CHRIS LORENZO", 
    description: "CHRIS LORENZO @ THE PHOENIX HOTEL SUNDAY 7/10 1PM. Support from Jackie Little, Wyld b2b 
    Nem &amp; Chocolate Sushi!", 
    date: 'Sun, July 10, 2022', 
    start_time:'11:30 PM PDT', 
    end_time: '2:00 AM PDT', 
    creator_id: 3, 
    price: 30, 
    address: 'The Phoenix Hotel 601 Eddy St. San Francisco, CA 94109'

)

f16 = open('https://eventright-seeds.s3.us-west-1.amazonaws.com/e16.jpg')
e16.photo.attach(io: f16, filename: 'e16.jpg')

e17 = Event.create(
    title: "Andrew Schulz at Cobb's Comedy Club", 
    description: "Andrew Cameron Schulz is an American stand-up comedian, actor, television producer 
    and podcaster. In addition to his stand-up, he is known for his work on MTV2's Guy Code, the 
    Flagrant 2 podcast, and The Brilliant Idiots podcast. Schulz's first Netflix special, Schulz 
    Saves America, premiered on December 17, 2020. Andrew Schulz's INFAMOUS Tour's next stop is the
    local favorite Cobb's Comedy Club in SF. ", 
    date: 'Fri, June 4, 2022', 
    start_time:'7:30 PM PDT', 
    end_time: '9:00 PM PDT', 
    creator_id: 3, 
    price: 30, 
    address: '915 Columbus Ave, San Francisco, CA 94133'

)

f17 = open('https://eventright-seeds.s3.us-west-1.amazonaws.com/e17.jpg')
e17.photo.attach(io: f17, filename: 'e17.jpg') 

e18 = Event.create(
    title: "Dance Fridays - Salsa, Bachata, Dance Lessons, 2 Dance Rooms", 
    description: "Every Friday (Yes, we are NOW a weekly event). THE BEST OF SAN FRANCISCO DANCE LESSONS, 
    MUSIC, AND DANCING (Live bands - NOW twice a month). Please, always refer to schedule! Come and Join 
    us for an Amazing Dance night with 2 Rooms of SALSA DANCING, BACHATA DANCE, Dance Lessons for ALL.", 
    date: 'Fri, May 27, 2022', 
    start_time:'7:45 PM PDT', end_time: '11:30 PM PDT', 
    creator_id: 3, 
    price: 12, 
    address: '550 Barneveld San Francisco, CA 94124'

)

f18 = open('https://eventright-seeds.s3.us-west-1.amazonaws.com/s18.jpg')
e18.photo.attach(io: f18, filename: 's18.jpg')

e19 = Event.create(
    title: "Vibe Sundays Weekly Day Party", 
    description: "Join us every Sunday, for the VIBE Sundays day party at Westwood, in the beautiful 
    Marina District of San Francisco. Featuring a rotation of top DJs, good food & cocktails, 
    mechanical bull, and that well-regarded VIBE Sundays reputation -- Quality crowd, good music, 
    and great VIBE! 4pm-9pm. This Sunday, May22nd, we'll have music by Bay Area favorite, DJ Val G + DJ Bud", 
    date: 'Sun, May 22, 2022', 
    start_time:'7:00 PM PDT', 
    end_time: '1:00 AM PDT', 
    creator_id: 3, 
    price: 20, 
    address: 'Westwood 2036 Lombard Street San Francisco, CA 94123'
)

f19 = open('https://eventright-seeds.s3.us-west-1.amazonaws.com/s19.jpg')
e19.photo.attach(io: f19, filename: 's19.jpg')

e20 = Event.create(
    title: "Museum Night & Spring Arts Fair", 
    description: "The Cantor Arts Center will be open late for Stanford students on May 20th from 
    7pm-9pm PT for the Spring Arts Fair featuring the Immigrant Art Expo ( https://abieiden.github.io/capstone/) 
    and over 25 original student art works, special performances, art making activities, student led 
    tours, and free Teaspoon Boba & Desserts! Register for your free student ticket on eventbrite.", 
    date: 'Fri, May 20, 2022', 
    start_time:'7:00 PM PDT', 
    end_time: '9:00 PM PDT', 
    creator_id: 3, 
    price: 0, 
    address: 'Cantor Arts Center at Stanford University 328 Lomita Dr Stanford, CA 94305-5060'

)

f20 = open('https://eventright-seeds.s3.us-west-1.amazonaws.com/s20.jpg')
e20.photo.attach(io: f20, filename: 's20.jpg')