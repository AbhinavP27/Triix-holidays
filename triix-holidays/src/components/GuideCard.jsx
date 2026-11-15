import {
  MapPin,
  Star,
  Clock,
  Languages,
  BadgeCheck,
  ArrowUpRight
} from "lucide-react";

import { motion } from "framer-motion";

import "./GuideCard.css";

function GuideCard({ guide, requested, onRequest }) {

  return (

    <motion.div
      className="guide-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
    >

      {/* Guide Image */}

      <div className="guide-image-wrapper">

        <img
          src={guide.image}
          alt={guide.name}
          className="guide-image"
        />

        <span className="guide-speciality">
          {guide.speciality}
        </span>

        {guide.verified && (

          <span className="guide-verified">
            <BadgeCheck size={14} />
            Verified
          </span>

        )}

      </div>

      {/* Guide Information */}

      <div className="guide-content">

        <div className="guide-location">
          <MapPin size={15} />
          {guide.location}
        </div>

        <h3>{guide.name}</h3>

        <div className="guide-rating">

          <Star
            size={15}
            fill="#FFB547"
            color="#FFB547"
          />

          <strong>{guide.rating}</strong>

          <span>({guide.reviews} reviews)</span>

        </div>

        <p className="guide-bio">
          {guide.bio}
        </p>

        {/* Experience */}

        <div className="guide-experience">

          <span>
            <Clock size={16} />
            {guide.experience} Years Experience
          </span>

        </div>

        {/* Languages */}

        <div className="guide-languages">

          <div className="guide-language-heading">
            <Languages size={15} />
            <span>Languages</span>
          </div>

          <div className="guide-language-list">

            {guide.languages.map((language) => (

              <span key={language}>
                {language}
              </span>

            ))}

          </div>

        </div>

        {/* Footer */}

        <div className="guide-footer">

          <div className="guide-price">

            <small>Guide charges</small>

            <h4>
              ₹{guide.pricePerHour.toLocaleString("en-IN")}
              <span>/ hour</span>
            </h4>

          </div>

          <button
            className={`guide-request-button ${
              requested ? "requested" : ""
            }`}
            onClick={onRequest}
          >

            {requested ? "Request Sent" : "Book Guide"}

            <ArrowUpRight size={16} />

          </button>

        </div>

      </div>

    </motion.div>

  );

}

export default GuideCard;