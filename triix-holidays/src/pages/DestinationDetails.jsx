import { useParams, Link } from "react-router-dom";

import {
    MapPin,
    Star,
    CalendarDays,
    Clock,
    Camera,
    ArrowLeft,
    Compass,
    Wallet
} from "lucide-react";

import destinations from "../data/destinations";

import destinationDetails from "../data/destinationDetails";

import "./DestinationDetails.css";


function DestinationDetails() {

    const { id } = useParams();

    // Find destination
    const destination = destinations.find(
        (item) => String(item.id) === id
    );

    // Find additional information
    const details = destinationDetails[id];


    // Invalid destination
    if (!destination) {

        return (

            <div className="destination-not-found">

                <h2>Destination Not Found</h2>

                <p>The destination you are looking for doesn't exist.</p>

                <Link to="/explore">
                    Explore Destinations
                </Link>

            </div>

        );

    }


    return (

        <div className="destination-details-page">

            <div className="container">


                {/* BACK BUTTON */}

                <Link to="/explore" className="back-link">

                    <ArrowLeft size={18} />

                    Back to Explore

                </Link>


                {/* HEADER */}

                <div className="destination-details-header">

                    <div>

                        <span className="destination-label">
                            EXPLORE DESTINATION
                        </span>

                        <h1>{destination.name}</h1>

                        <div className="destination-location">

                            <MapPin size={17} />

                            {destination.state}, {destination.country}

                        </div>

                    </div>


                    <div className="destination-rating">

                        <Star size={19} fill="#FFB800" color="#FFB800" />

                        <strong>{destination.rating}</strong>

                        <span>
                            ({destination.reviews} reviews)
                        </span>

                    </div>

                </div>


                {/* IMAGE GALLERY */}

                <div className="destination-gallery">

                    <div className="gallery-main">

                        <img
                            src={destination.image}
                            alt={destination.name}
                        />

                    </div>


                    <div className="gallery-side">

                        {details?.gallery?.slice(0, 2).map((image, index) => (

                            <img
                                key={index}
                                src={image}
                                alt={`${destination.name} ${index + 1}`}
                            />

                        ))}

                    </div>

                </div>


                {/* MAIN CONTENT */}

                <div className="destination-content-layout">


                    {/* LEFT CONTENT */}

                    <div className="destination-main-content">


                        {/* ABOUT */}

                        <section className="destination-section">

                            <h2>About {destination.name}</h2>

                            <p>{destination.description}</p>

                            <p>
                                Discover the beauty of {destination.name},
                                explore popular attractions and enjoy
                                memorable experiences during your journey.
                            </p>

                        </section>


                        {/* HIGHLIGHTS */}

                        <section className="destination-section">

                            <h2>Destination Highlights</h2>

                            <div className="highlight-grid">

                                {details?.highlights?.map((item, index) => (

                                    <div
                                        className="highlight-item"
                                        key={index}
                                    >

                                        <Compass size={20} />

                                        <span>{item}</span>

                                    </div>

                                ))}

                            </div>

                        </section>


                        {/* ATTRACTIONS */}

                        <section className="destination-section">

                            <h2>Popular Attractions</h2>

                            <div className="attraction-details-grid">

                                {details?.attractions?.map((place, index) => (

                                    <div
                                        className="attraction-details-card"
                                        key={index}
                                    >

                                        <img
                                            src={place.image}
                                            alt={place.name}
                                        />

                                        <div>

                                            <h4>{place.name}</h4>

                                            <p>{place.description}</p>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </section>


                        {/* ACTIVITIES */}

                        <section className="destination-section">

                            <h2>Things To Do</h2>

                            <div className="activity-tags">

                                {details?.activities?.map((activity, index) => (

                                    <span key={index}>
                                        {activity}
                                    </span>

                                ))}

                            </div>

                        </section>


                        {/* TRAVEL TIPS */}

                        <section className="destination-section">

                            <h2>Travel Tips</h2>

                            <ul className="travel-tips-list">

                                {details?.tips?.map((tip, index) => (

                                    <li key={index}>
                                        {tip}
                                    </li>

                                ))}

                            </ul>

                        </section>


                    </div>


                    {/* RIGHT BOOKING CARD */}

                    <aside className="destination-booking-card">

                        <div className="destination-price">

                            <span>Starting from</span>

                            <h2>
                                ₹{destination.price.toLocaleString("en-IN")}
                            </h2>

                            <small>Estimated per person</small>

                        </div>


                        <div className="booking-info-item">

                            <CalendarDays size={19} />

                            <div>

                                <strong>Best Time to Visit</strong>

                                <p>{details?.bestTime || "Check seasonal conditions"}</p>

                            </div>

                        </div>


                        <div className="booking-info-item">

                            <Clock size={19} />

                            <div>

                                <strong>Recommended Duration</strong>

                                <p>{details?.idealDuration || "Flexible"}</p>

                            </div>

                        </div>


                        <div className="booking-info-item">

                            <Camera size={19} />

                            <div>

                                <strong>Travel Experience</strong>

                                <p>{destination.category}</p>

                            </div>

                        </div>


                        <Link
                            to="/trip-planner"
                            className="plan-trip-btn"
                        >

                            Plan Your Trip

                        </Link>


                        <Link
                            to="/hotels"
                            className="view-hotels-btn"
                        >

                            Explore Hotels

                        </Link>


                        <p className="booking-disclaimer">

                            Prices are sample estimates and may vary
                            depending on your travel dates.

                        </p>

                    </aside>

                </div>

            </div>

        </div>

    );

}

export default DestinationDetails;