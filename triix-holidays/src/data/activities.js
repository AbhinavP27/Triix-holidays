const activities = [
  {
    id: 1,
    name: "Mountain Trekking",
    location: "Munnar, Kerala",
    category: "Trekking",
    price: 1200,
    duration: "5 Hours",
    rating: 4.9,
    reviews: 320,
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306",
    description:
      "Explore beautiful mountain trails and enjoy breathtaking views of nature."
  },
  {
    id: 2,
    name: "Forest Camping",
    location: "Wayanad, Kerala",
    category: "Camping",
    price: 2500,
    duration: "1 Night",
    rating: 4.8,
    reviews: 210,
    image:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d",
    description:
      "Experience peaceful camping surrounded by forests and beautiful landscapes."
  },
  {
    id: 3,
    name: "Scuba Diving",
    location: "Grand Island, Goa",
    category: "Water Sports",
    price: 3500,
    duration: "2 Hours",
    rating: 4.9,
    reviews: 450,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
    description:
      "Discover underwater life and explore the beauty of the ocean."
  },
  {
    id: 4,
    name: "Paragliding",
    location: "Manali, Himachal Pradesh",
    category: "Adventure",
    price: 2800,
    duration: "30 Minutes",
    rating: 4.7,
    reviews: 180,
    image:
      "https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f",
    description:
      "Enjoy an unforgettable flying experience with spectacular mountain views."
  },
  {
    id: 5,
    name: "Backwater Kayaking",
    location: "Alleppey, Kerala",
    category: "Water Sports",
    price: 900,
    duration: "2 Hours",
    rating: 4.8,
    reviews: 275,
    image:
      "https://images.unsplash.com/photo-1472745942893-4b9f730c7668",
    description:
      "Explore peaceful backwaters through an exciting kayaking experience."
  },
  {
    id: 6,
    name: "Jeep Safari",
    location: "Thekkady, Kerala",
    category: "Safari",
    price: 1800,
    duration: "3 Hours",
    rating: 4.6,
    reviews: 150,
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    description:
      "Discover forest landscapes and wildlife on an exciting jeep safari."
  },
  {
    id: 7,
    name: "Sunrise Tea Trail",
    location: "Munnar, Kerala",
    category: "Trekking",
    price: 850,
    duration: "3 Hours",
    rating: 4.8,
    reviews: 186,
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    description: "Walk a guided hillside route through tea country as the morning light reaches the valley."
  },
  {
    id: 8,
    name: "Banasura Forest Zipline",
    location: "Wayanad, Kerala",
    category: "Adventure",
    price: 1400,
    duration: "1 Hour",
    rating: 4.7,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0",
    description: "Take in the reservoir and forest views from a supervised adventure course."
  },
  {
    id: 9,
    name: "Goa Sunset Cruise",
    location: "Panaji, Goa",
    category: "Cruise",
    price: 1600,
    duration: "2 Hours",
    rating: 4.6,
    reviews: 230,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    description: "Enjoy an evening cruise with coastal views as the sun sets over the water."
  },
  {
    id: 10,
    name: "Solang Snow Experience",
    location: "Manali, Himachal Pradesh",
    category: "Adventure",
    price: 2200,
    duration: "3 Hours",
    rating: 4.7,
    reviews: 201,
    image: "https://images.unsplash.com/photo-1517299321609-52687d1bc55a",
    description: "Try beginner-friendly seasonal snow activities with local equipment guidance."
  },
  {
    id: 11,
    name: "Alleppey Backwater Cruise",
    location: "Alleppey, Kerala",
    category: "Cruise",
    price: 1800,
    duration: "3 Hours",
    rating: 4.8,
    reviews: 318,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    description: "Cruise quiet canals, palm-lined banks and village waterways with a local boat crew."
  },
  {
    id: 12,
    name: "Periyar Lake Boat Safari",
    location: "Thekkady, Kerala",
    category: "Safari",
    price: 1200,
    duration: "2 Hours",
    rating: 4.5,
    reviews: 174,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    description: "Look for birds and wildlife from a designated boat route across Periyar Lake."
  },
  {
    id: 13,
    name: "Jaipur Old City Heritage Walk",
    location: "Jaipur, Rajasthan",
    category: "Culture",
    price: 950,
    duration: "2 Hours",
    rating: 4.9,
    reviews: 206,
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a",
    description: "Explore historic streets, market lanes and local architecture with a city guide."
  },
  {
    id: 14,
    name: "Rishikesh River Rafting",
    location: "Rishikesh, Uttarakhand",
    category: "Water Sports",
    price: 1500,
    duration: "3 Hours",
    rating: 4.8,
    reviews: 427,
    image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed",
    description: "Paddle a guided stretch of the Ganges with a licensed rafting crew and safety gear."
  },
  {
    id: 15,
    name: "Fort Kochi Food Walk",
    location: "Kochi, Kerala",
    category: "Food",
    price: 1300,
    duration: "2.5 Hours",
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    description: "Sample local flavours and hear stories of Kochi's trading-port heritage."
  },
  {
    id: 16,
    name: "Dal Lake Shikara Ride",
    location: "Srinagar, Jammu and Kashmir",
    category: "Cruise",
    price: 900,
    duration: "1 Hour",
    rating: 4.9,
    reviews: 392,
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d",
    description: "Take a calm ride across Dal Lake with time to enjoy the mountain-framed scenery."
  },
  {
    id: 17,
    name: "Hampi Heritage Cycle Tour",
    location: "Hampi, Karnataka",
    category: "Cycling",
    price: 1100,
    duration: "3 Hours",
    rating: 4.7,
    reviews: 122,
    image: "https://images.unsplash.com/photo-1600100397608-e89195d9b5e3",
    description: "Cycle between historic temple sites and granite landscapes with a local guide."
  },
  {
    id: 18,
    name: "Puducherry French Quarter Cycle",
    location: "Puducherry, India",
    category: "Cycling",
    price: 750,
    duration: "2 Hours",
    rating: 4.6,
    reviews: 139,
    image: "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a",
    description: "See pastel streets, quiet lanes and the seafront on an easy guided cycle ride."
  },
  {
    id: 19,
    name: "Coorg Coffee Estate Walk",
    location: "Coorg, Karnataka",
    category: "Nature",
    price: 800,
    duration: "2 Hours",
    rating: 4.8,
    reviews: 184,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e",
    description: "Walk through a working coffee estate and learn about the local growing season."
  },
  {
    id: 20,
    name: "Ooty Mountain Railway Ride",
    location: "Ooty, Tamil Nadu",
    category: "Sightseeing",
    price: 650,
    duration: "3 Hours",
    rating: 4.8,
    reviews: 315,
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3",
    description: "Take a scenic ride through the Nilgiri hills on the heritage mountain railway."
  }
];

export default activities;
