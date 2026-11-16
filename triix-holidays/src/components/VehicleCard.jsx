import {
    MapPin,
    Star,
    Users,
    Fuel,
    Settings,
    ArrowUpRight
} from "lucide-react";

import { motion } from "framer-motion";

import "./VehicleCard.css";
import { Link } from "react-router-dom";

function VehicleCard({ vehicle }) {

    return (

        <motion.div
            className="vehicle-card"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
        >

            {/* Vehicle Image */}

            <div className="vehicle-image-wrapper">

                <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="vehicle-image"
                />

                <span className="vehicle-category">
                    {vehicle.category}
                </span>

                {vehicle.available && (
                    <span className="vehicle-available">
                        Available
                    </span>
                )}

            </div>

            {/* Vehicle Details */}

            <div className="vehicle-content">

                <div className="vehicle-location">
                    <MapPin size={15} />
                    {vehicle.location}
                </div>

                <h3>{vehicle.name}</h3>

                <p className="vehicle-brand">
                    {vehicle.brand}
                </p>

                {/* Rating */}

                <div className="vehicle-rating">

                    <Star
                        size={15}
                        fill="#FFB547"
                        color="#FFB547"
                    />

                    <strong>{vehicle.rating}</strong>

                    <span>({vehicle.reviews} reviews)</span>

                </div>

                {/* Specifications */}

                <div className="vehicle-specifications">

                    <span>
                        <Settings size={15} />
                        {vehicle.transmission}
                    </span>

                    <span>
                        <Fuel size={15} />
                        {vehicle.fuel}
                    </span>

                    <span>
                        <Users size={15} />
                        {vehicle.seats} Seats
                    </span>

                </div>

                {/* Footer */}

                <div className="vehicle-footer">

                    <div className="vehicle-price">

                        <small>Rental price</small>

                        <h4>
                            ₹{vehicle.price.toLocaleString("en-IN")}
                            <span>/ day</span>
                        </h4>

                    </div>

                    <Link
                        to={`/booking/vehicle/${vehicle.id}`}
                        className="vehicle-button"
                    >
                        Rent Now
                        <ArrowUpRight size={16} />
                    </Link>

                </div>

            </div>

        </motion.div>

    );

}

export default VehicleCard;