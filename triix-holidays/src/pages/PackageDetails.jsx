import { useParams, Link } from "react-router-dom";

import {
  MapPin,
  Clock,
  Star,
  CalendarDays,
  Users,
  ArrowLeft,
  CheckCircle,
  Compass,
  Wallet
} from "lucide-react";

import packages from "../data/packages";

import "./PackageDetails.css";

function PackageDetails() {
  const { id } = useParams();

  // Find package
  const pkg = packages.find(
    (item) => String(item.id) === id
  );

  // Invalid package
  if (!pkg) {
    return (
      <div className="package-not-found">
        <h2>Package Not Found</h2>
        <p>The travel package you are looking for doesn't exist.</p>
        <Link to="/packages">View All Packages</Link>
      </div>
    );
  }

  return (
    <div className="package-details-page">
      <div className="container">
        {/* BACK BUTTON */}
        <Link to="/packages" className="back-link">
          <ArrowLeft size={18} />
          Back to Packages
        </Link>

        {/* HEADER */}
        <div className="package-details-header">
          <div>
            <span className="package-label">
              EXCLUSIVE TRAVEL PACKAGE
            </span>
            <h1>{pkg.name}</h1>

            <div className="package-location">
              <MapPin size={17} />
              {pkg.location}
            </div>
          </div>

          <div className="package-rating">
            <Star size={19} fill="#FFB547" color="#FFB547" />
            <strong>{pkg.rating}</strong>
            <span>({pkg.reviews} reviews)</span>
          </div>
        </div>

        {/* IMAGE GALLERY */}
        <div className="package-gallery">
          <div className="gallery-main">
            <img src={pkg.image} alt={pkg.name} />
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="package-content-layout">
          {/* LEFT CONTENT */}
          <div className="package-main-content">
            <section className="package-section">
              <h2>About This Package</h2>
              <p>{pkg.description}</p>
            </section>

            <section className="package-section">
              <h2>Package Highlights</h2>
              <div className="highlight-grid">
                {pkg.highlights.map((item, index) => (
                  <div className="highlight-item" key={index}>
                    <CheckCircle size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="package-section">
              <h2>Package Details</h2>
              <div className="package-info-grid">
                <div className="package-info-item">
                  <CalendarDays size={22} />
                  <div>
                    <strong>Travel Dates</strong>
                    <p>{pkg.bestTimeToVisit}</p>
                  </div>
                </div>

                <div className="package-info-item">
                  <Clock size={22} />
                  <div>
                    <strong>Duration</strong>
                    <p>{pkg.duration}</p>
                  </div>
                </div>

                <div className="package-info-item">
                  <Users size={22} />
                  <div>
                    <strong>Group Size</strong>
                    <p>{pkg.groupSize}</p>
                  </div>
                </div>

                <div className="package-info-item">
                  <Compass size={22} />
                  <div>
                    <strong>Category</strong>
                    <p>{pkg.category} Experience</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="package-section">
              <h2>Your itinerary</h2>
              <div className="package-itinerary">
                {pkg.itinerary.map((stop) => (
                  <article className="itinerary-stop" key={stop.day}>
                    <span>{stop.day}</span>
                    <div>
                      <h3>{stop.title}</h3>
                      <p>{stop.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="package-section">
              <h2>What's Included</h2>
              <ul className="travel-tips-list">
                {pkg.inclusions.map((inclusion) => <li key={inclusion}>{inclusion}</li>)}
              </ul>
              <p className="package-data-note">Sample itinerary and inclusions; confirm availability and final arrangements when booking.</p>
            </section>
          </div>

          {/* RIGHT BOOKING CARD */}
          <aside className="package-booking-card">
            <div className="package-price">
              <span>Starting from</span>
              <h2>
                ₹{pkg.price.toLocaleString("en-IN")}
              </h2>
              <small>per person</small>

              <div className="package-original-price">
                <span>Original Price</span>
                <s>₹{pkg.originalPrice.toLocaleString("en-IN")}</s>
              </div>

              <span className="package-discount-badge">
                {pkg.discount}% OFF
              </span>
            </div>

            <Link
              to={`/booking/package/${pkg.id}`}
              className="book-package-btn"
            >
              Book This Package
              <CheckCircle size={19} />
            </Link>

            <div className="booking-info-item">
              <CalendarDays size={19} />
              <div>
                <strong>Best Time to Visit</strong>
                <p>{pkg.bestTimeToVisit}</p>
              </div>
            </div>

            <div className="booking-info-item">
              <Wallet size={19} />
              <div>
                <strong>Payment</strong>
                <p>Demo reservation · no payment required</p>
              </div>
            </div>

            <p className="booking-disclaimer">
              Prices are sample estimates and may vary depending on your
              travel dates and group size.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default PackageDetails;
