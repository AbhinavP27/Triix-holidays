import { MapPin, Star, Clock, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import WishlistButton from "./WishlistButton";

function ActivityCard({ activity }) {
    return (
        <motion.div
            className="activity-card"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
        >
            <div className="activity-image-wrapper">

                <img
                    src={activity.image}
                    alt={activity.name}
                    className="activity-image"
                />
                <div className="activity-wishlist">
                    <WishlistButton
                        item={{
                            id: `activity-${activity.id}`,
                            name: activity.name,
                            location: activity.location,
                            image: activity.image,
                            category: "Activity",
                            price: activity.price
                        }}
                    />
                </div>
                <span className="activity-category">
                    {activity.category}
                </span>

            </div>

            <div className="activity-content">

                <div className="activity-location">
                    <MapPin size={15} />
                    <span>{activity.location}</span>
                </div>

                <h3>{activity.name}</h3>

                <p className="activity-description">
                    {activity.description}
                </p>

                <div className="activity-info">

                    <span>
                        <Star size={15} fill="#FFB547" color="#FFB547" />
                        {activity.rating}
                        <small> ({activity.reviews})</small>
                    </span>

                    <span>
                        <Clock size={15} />
                        {activity.duration}
                    </span>

                </div>

                <div className="activity-footer">

                    <div>
                        <small>Starting from</small>
                        <h4>₹{activity.price.toLocaleString("en-IN")}</h4>
                    </div>

                    <button className="activity-button">
                        Explore <ArrowUpRight size={16} />
                    </button>

                </div>

            </div>
        </motion.div>
    );
}

export default ActivityCard;