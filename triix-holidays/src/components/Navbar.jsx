import { useState } from 'react'
import { Link } from "react-router-dom";

import {
    Menu,
    X,
    ChevronDown,
    Compass,
    Hotel,
    Car,
    Users,
    Map,
    Users2,
    Wallet,
    Heart

} from 'lucide-react'

import './Navbar.css'

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)
    const [exploreOpen, setExploreOpen] = useState(false)

    return (

        <nav className="navbar-container">

            <div className="navbar-inner">



                <div className="navbar-logo">

                    <div className="logo-icon">
                        <Compass size={25} />
                    </div>

                    <div>
                        <h2>TRIIX</h2>
                        <span>HOLIDAYS</span>
                    </div>

                </div>




                <div className={`nav-links ${menuOpen ? 'active' : ''}`}>

                    <a href="/">Home</a>

                    <div className="nav-dropdown">

                        <button
                            className="dropdown-toggle"
                            onClick={() => setExploreOpen(!exploreOpen)}
                        >
                            Explore <ChevronDown size={15} />
                        </button>

                        {exploreOpen && (

                            <div className="dropdown-menu-custom">

                                <Link to="/explore">
                                    <Compass size={17} />
                                    Destinations
                                </Link>

                                <Link to="/hotels"><Hotel size={17} />Hotels</Link>

                                <Link to="/rentals"><Car size={17} />Vehicle Rentals</Link>

                                <Link to="/taxi"><Car size={17} />Taxi Booking</Link>

                                <Link to="/travel-partners">
                                    <Users size={17} />
                                    Travel Partners
                                </Link>

                                <Link to="/activities">
                                    <Map size={17} />
                                    Activities
                                </Link>

                                <Link to="/trip-planner">
                                    <Wallet size={17}/>
                                    Smart Trip Planner
                                </Link>

                                <Link to="/wishlist" className="nav-link">
                                    <Heart size={17} />
                                    Wishlist
                                </Link>

                                <Link to="/guides"><Users2 size={17} />
                                    Tour Guides
                                </Link>

                            </div>

                        )}

                    </div>

                    <a href="/packages">Packages</a>

                    <a href="/community">Community</a>

                </div>




                <div className="navbar-actions">

                    <button className="login-btn">
                        Log in
                    </button>

                    <button className="signup-btn">
                        Sign up
                    </button>

                </div>




                <button
                    className="mobile-menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >

                    {menuOpen ? <X size={25} /> : <Menu size={25} />}

                </button>

            </div>

        </nav>

    )

}

export default Navbar