import { MapPin, Star, ArrowUpRight } from 'lucide-react';

import { Link } from 'react-router-dom';

import WishlistButton from "./WishlistButton";


function DestinationCard({ destination }) {

    return (

        <div className="destination-card">

            <div className="destination-image-wrapper">

                <img
                    src={destination.image}
                    alt={destination.name}
                    className="destination-image"
                />

                {/* WISHLIST */}

                <div className="destination-wishlist">

                    <WishlistButton
                        item={{
                            id: `destination-${destination.id}`,
                            name: destination.name,
                            location: `${destination.state}, ${destination.country}`,
                            image: destination.image,
                            category: "Destination",
                            price: destination.price
                        }}
                    />

                </div>


                {/* CATEGORY */}

                <span className="destination-category">

                    {destination.category}

                </span>



            </div>


            {/* DESTINATION DETAILS */}

            <div className="destination-details">


                {/* LOCATION */}

                <div className="destination-location">

                    <MapPin size={15} />

                    <span>
                        {destination.state}, {destination.country}
                    </span>

                </div>


                {/* TITLE AND RATING */}

                <div className="destination-title-row">

                    <h3>{destination.name}</h3>

                    <div className="destination-rating">

                        <Star
                            size={15}
                            fill="#FFB547"
                            color="#FFB547"
                        />

                        <span>{destination.rating}</span>

                    </div>

                </div>


                {/* DESCRIPTION */}

                <p className="destination-description">

                    {destination.description}

                </p>


                {/* PRICE AND EXPLORE */}

                <div className="destination-bottom">

                    <div>

                        <span className="price-label">

                            Starting from

                        </span>

                        <h4>

                            ₹{destination.price.toLocaleString('en-IN')}

                            <small> / person</small>

                        </h4>

                    </div>


                    {/* DESTINATION DETAILS LINK */}

                    <Link
                        to={`/destinations/${destination.id}`}
                        className="destination-explore"
                        aria-label={`Explore ${destination.name}`}
                    >

                        <ArrowUpRight size={19} />

                    </Link>

                </div>

            </div>

        </div>

    );

}

export default DestinationCard;