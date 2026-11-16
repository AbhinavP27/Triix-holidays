const packages = [
    {
        id: 1,
        name: "Munnar Mountain Escape",
        location: "Munnar, Kerala",
        duration: "3 Days / 2 Nights",
        price: 4999,
        originalPrice: 6499,
        discount: 23,
        rating: 4.9,
        reviews: 320,
        category: "Adventure",
        image: "https://www.sreestours.com/blog/wp-content/uploads/2025/07/munnar-in-monsoon.jpg",
        description: "Slow down among Munnar's tea gardens, cool mountain air and wide-open valley views. This short escape pairs a comfortable stay with time to explore the hill town.",
        bestTimeToVisit: "September to March",
        groupSize: "2–6 travellers",
        inclusions: ["2 nights' accommodation", "Breakfast each morning", "Munnar sightseeing transfer", "Tea garden visit"],
        itinerary: [
            { day: "Day 1", title: "Arrive in the hills", description: "Check in, settle in and enjoy a relaxed evening overlooking the tea country." },
            { day: "Day 2", title: "Tea gardens & viewpoints", description: "Visit a tea estate and explore Munnar's scenic viewpoints at an easy pace." },
            { day: "Day 3", title: "A slow morning", description: "Enjoy breakfast, check out and depart with time for one last stop in town." }
        ],
        highlights: [
            "Tea Plantation Visit",
            "Mountain View Stay",
            "Local Sightseeing"
        ]
    },
    {
        id: 2,
        name: "Goa Beach Holiday",
        location: "Goa, India",
        duration: "4 Days / 3 Nights",
        price: 6999,
        originalPrice: 8999,
        discount: 22,
        rating: 4.8,
        reviews: 450,
        category: "Beach",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
        description: "A laid-back Goa break with time for the shoreline, local food and a sunset on the water. Keep the days flexible and make the most of the coast.",
        bestTimeToVisit: "November to February",
        groupSize: "2–6 travellers",
        inclusions: ["3 nights' accommodation", "Breakfast each morning", "North Goa sightseeing transfer", "Sunset cruise experience"],
        itinerary: [
            { day: "Day 1", title: "Arrive in Goa", description: "Check in and spend the evening exploring a nearby beach and local cafés." },
            { day: "Day 2", title: "Coastal Goa", description: "Visit popular beaches and take time for the water activities available locally." },
            { day: "Day 3", title: "A sunset on the water", description: "Enjoy a relaxed day before heading out for a sunset cruise experience." },
            { day: "Day 4", title: "Breakfast & departure", description: "Check out after breakfast and make your way home." }
        ],
        highlights: [
            "Beach Activities",
            "Water Sports",
            "Sunset Cruise"
        ]
    },
    {
        id: 3,
        name: "Wayanad Nature Retreat",
        location: "Wayanad, Kerala",
        duration: "2 Days / 1 Night",
        price: 3499,
        originalPrice: 4499,
        discount: 22,
        rating: 4.7,
        reviews: 210,
        category: "Nature",
        image: "https://www.inmysore.com/images/tour-packages/from-bangalore/wayanad-tour-from-bangalore-3-days-hero.jpg",
        description: "A short nature retreat for forest trails, waterfall scenery and quiet time in the Western Ghats. A good fit for a quick weekend outside the city.",
        bestTimeToVisit: "October to May",
        groupSize: "2–6 travellers",
        inclusions: ["1 night's accommodation", "Breakfast", "Local sightseeing transfer", "Waterfall visit"],
        itinerary: [
            { day: "Day 1", title: "Forest & waterfall", description: "Arrive in Wayanad, check in and visit a nearby waterfall or viewpoint." },
            { day: "Day 2", title: "Fresh air before you go", description: "Enjoy breakfast, take a short nature walk and depart at your own pace." }
        ],
        highlights: [
            "Waterfall Visit",
            "Forest Exploration",
            "Nature Stay"
        ]
    },
    {
        id: 4,
        name: "Manali Snow Adventure",
        location: "Manali, Himachal Pradesh",
        duration: "5 Days / 4 Nights",
        price: 9999,
        originalPrice: 12999,
        discount: 23,
        rating: 4.9,
        reviews: 510,
        category: "Adventure",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
        description: "A mountain escape with time for Manali's old town, valley views and seasonal snow experiences. The itinerary leaves room to choose activities that suit your group.",
        bestTimeToVisit: "December to March for snow; April to June for mild weather",
        groupSize: "2–6 travellers",
        inclusions: ["4 nights' accommodation", "Breakfast each morning", "Manali local sightseeing transfer", "One guided outdoor experience"],
        itinerary: [
            { day: "Day 1", title: "Welcome to Manali", description: "Arrive, settle into your stay and take an easy evening around town." },
            { day: "Day 2", title: "Old Manali & valley views", description: "Explore the old town, riverside paths and nearby viewpoints." },
            { day: "Day 3", title: "Choose your adventure", description: "Set aside a day for a seasonal outdoor activity or a relaxed mountain drive." },
            { day: "Day 4", title: "A day in the mountains", description: "Enjoy a guided outdoor experience and take in the changing scenery." },
            { day: "Day 5", title: "Breakfast & departure", description: "Check out after breakfast and begin your onward journey." }
        ],
        highlights: [
            "Snow Activities",
            "Mountain Camping",
            "Adventure Sports"
        ]
    },
    {
        id: 5,
        name: "Jaipur Heritage Weekend",
        location: "Jaipur, Rajasthan",
        duration: "3 Days / 2 Nights",
        price: 5799,
        originalPrice: 7499,
        discount: 23,
        rating: 4.8,
        reviews: 286,
        category: "Heritage",
        image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a",
        description: "A short city break built around Jaipur's forts, palace lanes and colourful bazaars, with time to enjoy local Rajasthani food.",
        bestTimeToVisit: "October to March",
        groupSize: "2–6 travellers",
        inclusions: ["2 nights' accommodation", "Breakfast each morning", "Old city and fort transfer", "Local orientation walk"],
        itinerary: [
            { day: "Day 1", title: "Welcome to the Pink City", description: "Check in and take an easy walk through the nearby old city streets." },
            { day: "Day 2", title: "Forts and palace courtyards", description: "Spend the day exploring Amber Fort and Jaipur's central heritage sites." },
            { day: "Day 3", title: "Markets before departure", description: "Enjoy breakfast, browse a local market and depart." }
        ],
        highlights: ["Amber Fort", "Pink City walk", "Local markets"]
    },
    {
        id: 6,
        name: "Rishikesh Riverside Break",
        location: "Rishikesh, Uttarakhand",
        duration: "3 Days / 2 Nights",
        price: 4699,
        originalPrice: 5999,
        discount: 22,
        rating: 4.8,
        reviews: 194,
        category: "Nature",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        description: "A restorative foothill stay with time by the Ganges, a guided local walk and optional seasonal outdoor activities.",
        bestTimeToVisit: "September to April",
        groupSize: "2–6 travellers",
        inclusions: ["2 nights' accommodation", "Breakfast each morning", "Riverside heritage walk", "Local transfer between activity points"],
        itinerary: [
            { day: "Day 1", title: "Arrive by the river", description: "Check in and explore the nearby riverside lanes." },
            { day: "Day 2", title: "Ghats and foothill paths", description: "Join a local walk and take time for the evening river ceremony." },
            { day: "Day 3", title: "A quiet morning", description: "Enjoy breakfast and depart, or add an optional activity locally." }
        ],
        highlights: ["Ganges riverside", "Local heritage walk", "Foothill scenery"]
    },
    {
        id: 7,
        name: "Srinagar Lake & Garden Stay",
        location: "Srinagar, Jammu and Kashmir",
        duration: "4 Days / 3 Nights",
        price: 8999,
        originalPrice: 11499,
        discount: 22,
        rating: 4.9,
        reviews: 238,
        category: "Nature",
        image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d",
        description: "A scenic Srinagar stay featuring Dal Lake, Mughal gardens and free time to explore the old city and local crafts.",
        bestTimeToVisit: "March to October",
        groupSize: "2–6 travellers",
        inclusions: ["3 nights' accommodation", "Breakfast each morning", "Garden and city transfer", "One-hour shikara ride"],
        itinerary: [
            { day: "Day 1", title: "Settle in beside the lake", description: "Arrive, check in and enjoy an easy first evening." },
            { day: "Day 2", title: "Dal Lake and old Srinagar", description: "Explore the waterfront and browse traditional craft shops." },
            { day: "Day 3", title: "Mughal gardens", description: "Visit the city's historic gardens and enjoy the mountain views." },
            { day: "Day 4", title: "Breakfast and departure", description: "Check out after breakfast and begin your onward journey." }
        ],
        highlights: ["Dal Lake", "Mughal gardens", "Kashmiri crafts"]
    },
    {
        id: 8,
        name: "Puducherry Slow Coast Escape",
        location: "Puducherry, India",
        duration: "3 Days / 2 Nights",
        price: 5299,
        originalPrice: 6799,
        discount: 22,
        rating: 4.7,
        reviews: 176,
        category: "Coastal",
        image: "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a",
        description: "Take a slower coastal break with a guided French Quarter walk, seafront time and room for cafés and local shopping.",
        bestTimeToVisit: "October to March",
        groupSize: "2–6 travellers",
        inclusions: ["2 nights' accommodation", "Breakfast each morning", "French Quarter orientation walk", "Local cycle rental for one day"],
        itinerary: [
            { day: "Day 1", title: "Check in and unwind", description: "Settle in and stroll along the seafront in the evening." },
            { day: "Day 2", title: "French Quarter by foot and cycle", description: "Explore the heritage streets, cafés and coastal promenade." },
            { day: "Day 3", title: "One last café stop", description: "Enjoy breakfast and a free morning before departure." }
        ],
        highlights: ["French Quarter", "Coastal promenade", "Café and food stops"]
    },
    {
        id: 9,
        name: "Alleppey Backwater Retreat",
        location: "Alleppey, Kerala",
        duration: "3 Days / 2 Nights",
        price: 6299,
        originalPrice: 7999,
        discount: 21,
        rating: 4.8,
        reviews: 203,
        category: "Backwaters",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
        description: "A relaxed Kerala break with a backwater cruise, village views and time to enjoy the slower pace around Alleppey.",
        bestTimeToVisit: "October to March",
        groupSize: "2–6 travellers",
        inclusions: ["2 nights' accommodation", "Breakfast each morning", "Shared backwater cruise", "Village walk with a local host"],
        itinerary: [
            { day: "Day 1", title: "Arrive by the water", description: "Check in and take an easy walk along the nearby canals." },
            { day: "Day 2", title: "Backwater cruise", description: "Spend part of the day on the water and visit a local village." },
            { day: "Day 3", title: "A quiet morning", description: "Enjoy breakfast, check out and depart at your own pace." }
        ],
        highlights: ["Backwater cruise", "Village walk", "Kerala cuisine"]
    }
]

export default packages
