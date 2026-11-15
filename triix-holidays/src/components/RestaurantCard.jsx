import {
    MapPin,
    Star,
    Clock,
    Heart,
    ArrowUpRight
} from 'lucide-react'

function RestaurantCard({ restaurant }) {

    return (

        <div className="restaurant-card">

            <div className="restaurant-image-wrapper">

                <img
                    src={restaurant.image}
                    alt={restaurant.name}
                />

                <span className="restaurant-category">
                    {restaurant.category}
                </span>

                <button className="restaurant-favourite">
                    <Heart size={19} />
                </button>

            </div>


            <div className="restaurant-content">

                <div className="restaurant-location">

                    <MapPin size={15} />

                    {restaurant.location}

                </div>


                <div className="restaurant-title-row">

                    <h3>{restaurant.name}</h3>

                    <div className="restaurant-rating">

                        <Star
                            size={15}
                            fill="#FFB547"
                            color="#FFB547"
                        />

                        {restaurant.rating}

                    </div>

                </div>


                <span className="restaurant-cuisine">
                    {restaurant.cuisine}
                </span>


                <p className="restaurant-description">
                    {restaurant.description}
                </p>


                <div className="restaurant-timing">

                    <Clock size={15} />

                    {restaurant.openingHours}

                </div>


                <div className="restaurant-bottom">

                    <div>

                        <span>Average cost / person</span>

                        <h4>
                            ₹{restaurant.price.toLocaleString('en-IN')}
                        </h4>

                    </div>

                    <button className="restaurant-explore-btn">
                        Explore
                        <ArrowUpRight size={17} />
                    </button>

                </div>

            </div>

        </div>

    )

}

export default RestaurantCard