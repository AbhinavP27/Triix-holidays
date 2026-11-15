import {
    Hotel,
    Car,
    Bike,
    Users,
    Utensils,
    MapPin,
    Mountain,
    UserRound,
    Wallet
} from 'lucide-react'

const services = [
    {
        id: 1,
        title: "Hotels & Stays",
        description: "Find comfortable stays at the best prices.",
        icon: Hotel,
        color: "#E8F1FF",
        iconColor: "#2878A5",
        link: "/hotels"
    },
    {
        id: 2,
        title: "Taxi Booking",
        description: "Compare taxi prices and book your ride.",
        icon: Car,
        color: "#FFF0E8",
        iconColor: "#FF8A4C",
        link: "/taxi"
    },
    {
        id: 3,
        title: "Vehicle Rentals",
        description: "Rent bikes, scooters and cars easily.",
        icon: Bike,
        color: "#E9F8EF",
        iconColor: "#299D62",
        link: "/rentals"
    },
    {
        id: 4,
        title: "Travel Partners",
        description: "Find people travelling to your destination.",
        icon: Users,
        color: "#F2EAFE",
        iconColor: "#8955C9",
        link: "/travel-partners"
    },
    {
        id: 5,
        title: "Restaurants",
        description: "Discover popular restaurants and local food.",
        icon: Utensils,
        color: "#FFF3DF",
        iconColor: "#E79B27",
        link: "/restaurants"
    },
    {
        id: 6,
        title: "Tourist Spots",
        description: "Discover beautiful places and hidden gems.",
        icon: MapPin,
        color: "#FDECEC",
        iconColor: "#E65C5C",
        link: "/explore"
    },
    {
        id: 7,
        title: "Activities",
        description: "Book exciting adventures and experiences.",
        icon: Mountain,
        color: "#E5F5F5",
        iconColor: "#279B9B",
        link: "/activities"
    },
    {
        id: 8,
        title: "Tour Guides",
        description: "Explore destinations with local experts.",
        icon: UserRound,
        color: "#FCEAF2",
        iconColor: "#D45B91",
        link: "/guides"
    },
    {
        id: 9,
        title: "Smart Trip Planner",
        description: "Plan your itinerary and calculate your travel budget.",
        icon: Wallet,
        color: "#EAF3F9",
        iconColor: "#2878A5",
        link: "/trip-planner"
    }
]

export default services