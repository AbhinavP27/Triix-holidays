import { MapPin, Star, ArrowUpRight } from 'lucide-react'

import { Link } from 'react-router-dom'
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
                <span className="destination-category">
                    {destination.category}
                </span>

                <button className="destination-favourite">
                    ♡
                </button>

            </div>

            <div className="destination-details">

                <div className="destination-location">

                    <MapPin size={15} />

                    <span>
                        {destination.state}, {destination.country}
                    </span>

                </div>

                <div className="destination-title-row">

                    <h3>{destination.name}</h3>

                    <div className="destination-rating">

                        <Star size={15} fill="#FFB547" color="#FFB547" />

                        <span>{destination.rating}</span>

                    </div>


                </div>

                <p className="destination-description">
                    {destination.description}
                </p>

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

                    <Link
                        to={`/search?destination=${encodeURIComponent(destination.name)}`}
                        className="destination-explore"
                    >

                        <ArrowUpRight size={19} />

                    </Link>

                </div>

            </div>

        </div>

    )

}

export default DestinationCard