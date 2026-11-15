import {
  Users,
  Briefcase,
  Clock,
  CheckCircle
} from "lucide-react";

import { motion } from "framer-motion";

import "./TaxiCard.css";

function TaxiCard({
  taxi,
  distance,
  selected,
  onSelect
}) {

  const estimatedFare =
    taxi.baseFare + taxi.pricePerKm * distance;

  return (

    <motion.div
      className={`taxi-card ${selected ? "selected" : ""}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      onClick={onSelect}
    >

      {/* Vehicle Image */}

      <div className="taxi-image-wrapper">

        <img
          src={taxi.image}
          alt={taxi.name}
          className="taxi-image"
        />

        <span className="taxi-category">
          {taxi.category}
        </span>

        {selected && (
          <span className="taxi-selected">
            <CheckCircle size={14} />
            Selected
          </span>
        )}

      </div>

      {/* Content */}

      <div className="taxi-content">

        <h3>{taxi.name}</h3>

        <p className="taxi-description">
          {taxi.description}
        </p>

        {/* Specifications */}

        <div className="taxi-specifications">

          <span>
            <Users size={15} />
            {taxi.capacity} Seats
          </span>

          <span>
            <Briefcase size={15} />
            {taxi.luggage} Bags
          </span>

          <span>
            <Clock size={15} />
            {taxi.estimatedArrival}
          </span>

        </div>

        {/* Price */}

        <div className="taxi-card-footer">

          <div>

            <small>Estimated fare</small>

            <h4>
              ₹{estimatedFare.toLocaleString("en-IN")}
            </h4>

          </div>

          <button
            type="button"
            className={selected ? "selected-button" : ""}
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
          >
            {selected ? "Selected" : "Select Taxi"}
          </button>

        </div>

      </div>

    </motion.div>

  );

}

export default TaxiCard;