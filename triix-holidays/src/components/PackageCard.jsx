import {
    MapPin,
    Clock,
    Star,
    ArrowRight,
    Check
} from 'lucide-react'

import { Link } from 'react-router-dom'

function PackageCard({ packageData }) {

    return (

        <Link
            to={`/packages/${packageData.id}`}
            className="package-card"
            aria-label={`View details for ${packageData.name}`}
        >

            {/* IMAGE */}

            <div className="package-image-wrapper">

                <img
                    src={packageData.image}
                    alt={packageData.name}
                />

                <span className="package-discount">
                    {packageData.discount}% OFF
                </span>

                <span className="package-category">
                    {packageData.category}
                </span>

            </div>


            {/* CONTENT */}

            <div className="package-content">

                <div className="package-location">

                    <MapPin size={15} />

                    {packageData.location}

                </div>


                <h3>{packageData.name}</h3>


                <div className="package-info">

                    <span>
                        <Clock size={15} />
                        {packageData.duration}
                    </span>

                    <span>
                        <Star size={15} fill="#FFB547" color="#FFB547" />
                        {packageData.rating}
                        ({packageData.reviews})
                    </span>

                </div>


                {/* HIGHLIGHTS */}

                <div className="package-highlights">

                    {packageData.highlights.map((item, index) => (

                        <div key={index}>

                            <Check size={15} />

                            {item}

                        </div>

                    ))}

                </div>


                {/* PRICE */}

                <div className="package-bottom">

                    <div>

                        <span className="package-old-price">
                            ₹{packageData.originalPrice.toLocaleString('en-IN')}
                        </span>

                        <h4>
                            ₹{packageData.price.toLocaleString('en-IN')}
                            <small> / person</small>
                        </h4>

                    </div>

                    <span className="package-book-btn">
                        View details

                        <ArrowRight size={17} />
                    </span>

                </div>

            </div>

        </Link>

    )

}

export default PackageCard
