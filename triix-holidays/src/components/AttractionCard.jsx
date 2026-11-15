import {
    MapPin,
    Star,
    Clock,
    Ticket,
    ArrowUpRight
} from 'lucide-react'

function AttractionCard({ attraction }) {

    return (

        <div className="attraction-card">

            <div className="attraction-image-wrapper">

                <img
                    src={attraction.image}
                    alt={attraction.name}
                />

                <span className="attraction-category">
                    {attraction.category}
                </span>

            </div>


            <div className="attraction-content">

                <div className="attraction-location">

                    <MapPin size={15} />

                    {attraction.location}

                </div>


                <div className="attraction-title-row">

                    <h3>{attraction.name}</h3>

                    <div className="attraction-rating">

                        <Star
                            size={15}
                            fill="#FFB547"
                            color="#FFB547"
                        />

                        {attraction.rating}

                    </div>

                </div>


                <p className="attraction-description">
                    {attraction.description}
                </p>


                <div className="attraction-information">

                    <div>

                        <Clock size={16} />

                        <span>{attraction.openingHours}</span>

                    </div>

                    <div>

                        <Ticket size={16} />

                        <span>
                            {attraction.entryFee === 0
                                ? "Free Entry"
                                : `₹${attraction.entryFee} Entry`}
                        </span>

                    </div>

                </div>


                <div className="attraction-footer">

                    <span>
                        {attraction.reviews.toLocaleString('en-IN')} reviews
                    </span>

                    <button className="attraction-explore-btn">

                        Explore

                        <ArrowUpRight size={17} />

                    </button>

                </div>

            </div>

        </div>

    )

}

export default AttractionCard