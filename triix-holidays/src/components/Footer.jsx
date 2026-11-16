
import { Link } from "react-router-dom";
import {
    Compass,
    MapPin,
    Phone,
    Mail,
    ArrowRight
} from "lucide-react";

import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* BRAND */}
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        <Compass size={30} />
                        <span>TRIIX <strong>HOLIDAYS</strong></span>
                    </Link>

                    <p>
                        Your Journey. Your People. Your Adventure.
                        Discover amazing destinations, connect with travellers
                        and create unforgettable memories.
                    </p>

                    <div className="footer-socials">
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                            IG
                        </a>

                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                            f
                        </a>

                        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter">
                            X
                        </a>
                    </div>
                </div>

                {/* QUICK LINKS */}
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <Link to="/">Home</Link>
                    <Link to="/explore">Explore</Link>
                    <Link to="/trip-planner">Trip Planner</Link>
                    <Link to="/travel-partners">Travel Partners</Link>
                    <Link to="/packages">Packages</Link>
                </div>

                {/* SERVICES */}
                <div className="footer-column">
                    <h3>Our Services</h3>
                    <Link to="/hotels">Hotels & Stays</Link>
                    <Link to="/taxi">Taxi Booking</Link>
                    <Link to="/rentals">Vehicle Rentals</Link>
                    <Link to="/activities">Activities</Link>
                    <Link to="/guides">Tour Guides</Link>
                </div>

                {/* CONTACT */}
                <div className="footer-column footer-contact">
                    <h3>Contact Us</h3>

                    <p>
                        <MapPin size={16} />
                        <span>Kerala, India</span>
                    </p>

                    <p>
                        <Phone size={16} />
                        <span>Contact details coming soon</span>
                    </p>

                    <p>
                        <Mail size={16} />
                        <span>Support details coming soon</span>
                    </p>
                </div>

            </div>

            {/* BOTTOM */}
            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} TRIIX HOLIDAYS. All rights reserved.
                </p>

                <Link to="/" className="footer-back-top">
                    Back to Home <ArrowRight size={15} />
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
