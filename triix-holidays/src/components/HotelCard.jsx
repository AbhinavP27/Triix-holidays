import {
  MapPin,
  Star,
  Wifi,
  Coffee,
  ArrowUpRight
} from "lucide-react";

import { motion } from "framer-motion";
import "./HotelCard.css";

function HotelCard({ hotel }) {

  return (
    <motion.div
      className="hotel-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
    >

      {/* Hotel Image */}

      <div className="hotel-image-wrapper">

        <img
          src={hotel.image}
          alt={hotel.name}
          className="hotel-image"
        />

        <span className="hotel-category">
          {hotel.category}
        </span>

      </div>

      {/* Hotel Details */}

      <div className="hotel-content">

        <div className="hotel-location">
          <MapPin size={15} />
          {hotel.location}
        </div>

        <h3>{hotel.name}</h3>

        {/* Rating */}

        <div className="hotel-rating">

          <span className="rating-score">
            <Star size={15} fill="#FFB547" color="#FFB547" />
            {hotel.rating}
          </span>

          <span className="rating-reviews">
            ({hotel.reviews} reviews)
          </span>

          <span className="hotel-stars">
            {"★".repeat(hotel.stars)}
          </span>

        </div>

        <p className="hotel-description">
          {hotel.description}
        </p>

        {/* Facilities */}

        <div className="hotel-facilities">

          {hotel.facilities.map((facility, index) => (

            <span key={index}>
              {facility}
            </span>

          ))}

        </div>

        {/* Footer */}

        <div className="hotel-footer">

          <div className="hotel-price">

            <small>Starting from</small>

            <h4>
              ₹{hotel.price.toLocaleString("en-IN")}
              <span>/ night</span>
            </h4>

          </div>

          <button className="hotel-button">
            View Hotel
            <ArrowUpRight size={16} />
          </button>

        </div>

      </div>

    </motion.div>
  );
}

export default HotelCard;