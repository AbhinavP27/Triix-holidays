import {
  MapPin,
  CalendarDays,
  Wallet,
  Users,
  Clock,
  BadgeCheck,
  ArrowUpRight
} from "lucide-react";

import { motion } from "framer-motion";

import "./TravelPartnerCard.css";

function TravelPartnerCard({
  partner,
  connected,
  onConnect
}) {

  return (

    <motion.div
      className="partner-profile-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
    >

      {/* Profile Header */}

      <div className="partner-card-header">

        <div className="partner-user-info">

          <img
            src={partner.avatar}
            alt={partner.name}
            className="partner-avatar"
          />

          <div>

            <h3>
              {partner.name}

              {partner.verified && (
                <BadgeCheck
                  size={17}
                  className="verified-icon"
                />
              )}

            </h3>

            <span>{partner.age} years old</span>

          </div>

        </div>

        <span className="partner-travel-type">
          {partner.travelType}
        </span>

      </div>

      {/* Destination */}

      <div className="partner-destination">

        <span>TRAVELLING TO</span>

        <h2>{partner.destination}</h2>

        <p>
          <MapPin size={15} />
          {partner.state}
        </p>

      </div>

      {/* Description */}

      <p className="partner-description">
        {partner.description}
      </p>

      {/* Travel Information */}

      <div className="partner-details-grid">

        <div>
          <CalendarDays size={17} />
          <span>
            <small>Travel Date</small>
            <strong>{partner.date}</strong>
          </span>
        </div>

        <div>
          <Clock size={17} />
          <span>
            <small>Duration</small>
            <strong>{partner.duration}</strong>
          </span>
        </div>

        <div>
          <Wallet size={17} />
          <span>
            <small>Budget</small>
            <strong>
              ₹{partner.budget.toLocaleString("en-IN")}
            </strong>
          </span>
        </div>

        <div>
          <Users size={17} />
          <span>
            <small>Group Size</small>
            <strong>{partner.travellers} Travellers</strong>
          </span>
        </div>

      </div>

      {/* Departure */}

      <div className="partner-departure">

        <MapPin size={15} />

        Starting from <strong>{partner.departure}</strong>

      </div>

      {/* Button */}

      <button
        className={`partner-connect-button ${
          connected ? "connected" : ""
        }`}
        onClick={onConnect}
      >

        {connected ? "Request Sent" : "Connect with Traveller"}

        <ArrowUpRight size={17} />

      </button>

    </motion.div>

  );

}

export default TravelPartnerCard;