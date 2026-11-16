import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { isAuthenticated, logoutDemo } from "../utils/auth";

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

    const [loggedIn, setLoggedIn] = useState(isAuthenticated());

    const [menuOpen, setMenuOpen] = useState(false);

    const [exploreOpen, setExploreOpen] = useState(false);

    const navigate = useNavigate();


    // Authentication Update

    useEffect(() => {

        const updateAuth = () => {
            setLoggedIn(isAuthenticated());
        };

        window.addEventListener("authChanged", updateAuth);

        return () => {
            window.removeEventListener("authChanged", updateAuth);
        };

    }, []);


    // Logout

    const handleLogout = () => {

        logoutDemo();

        setMenuOpen(false);

        navigate("/", { replace: true });

    };


    // Close Mobile Menu

    const closeMenu = () => {

        setMenuOpen(false);

        setExploreOpen(false);

    };


    return (

        <nav className="navbar-container">

            <div className="navbar-inner">


                {/* LOGO */}

                <Link
                    to="/"
                    className="navbar-logo"
                    onClick={closeMenu}
                >

                    <div className="logo-icon">
                        <Compass size={25} />
                    </div>

                    <div>
                        <h2>TRIIX</h2>
                        <span>HOLIDAYS</span>
                    </div>

                </Link>


                {/* NAVIGATION */}

                <div className={`nav-links ${menuOpen ? 'active' : ''}`}>

                    {loggedIn ? (
                        <>

                    <Link to="/" onClick={closeMenu}>
                        Home
                    </Link>


                    {/* EXPLORE DROPDOWN */}

                    <div className="nav-dropdown">

                        <button
                            className="dropdown-toggle"
                            onClick={() => setExploreOpen(!exploreOpen)}
                            aria-expanded={exploreOpen}
                        >

                            Explore

                            <ChevronDown
                                size={16}
                                className={exploreOpen ? "rotate-chevron" : ""}
                            />

                        </button>


                        {exploreOpen && (

                            <div className="dropdown-menu-custom">

                                <Link to="/explore" onClick={closeMenu}>
                                    <Compass size={17} />
                                    Destinations
                                </Link>

                                <Link to="/hotels" onClick={closeMenu}>
                                    <Hotel size={17} />
                                    Hotels
                                </Link>

                                <Link to="/rentals" onClick={closeMenu}>
                                    <Car size={17} />
                                    Vehicle Rentals
                                </Link>

                                <Link to="/taxi" onClick={closeMenu}>
                                    <Car size={17} />
                                    Taxi Booking
                                </Link>

                                <Link to="/travel-partners" onClick={closeMenu}>
                                    <Users size={17} />
                                    Travel Partners
                                </Link>

                                <Link to="/activities" onClick={closeMenu}>
                                    <Map size={17} />
                                    Activities
                                </Link>

                                <Link to="/trip-planner" onClick={closeMenu}>
                                    <Wallet size={17} />
                                    Smart Trip Planner
                                </Link>

                                <Link to="/guides" onClick={closeMenu}>
                                    <Users2 size={17} />
                                    Tour Guides
                                </Link>

                            </div>

                        )}

                    </div>


                    <Link to="/packages" onClick={closeMenu}>
                        Packages
                    </Link>

                    <Link to="/community" onClick={closeMenu}>
                        Community
                    </Link>


                    {/* MOBILE ACTIONS */}

                    <div className="mobile-nav-actions">

                        <Link
                            to="/wishlist"
                            className="mobile-wishlist"
                            onClick={closeMenu}
                        >
                            <Heart size={17} />
                            Wishlist
                        </Link>


                        {loggedIn ? (

                            <>
                                <Link
                                    to="/dashboard"
                                    className="login-btn"
                                    onClick={closeMenu}
                                >
                                    Dashboard
                                </Link>

                                <button
                                    className="signup-btn"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </>

                        ) : (

                            <>
                                <Link
                                    to="/login"
                                    className="login-btn"
                                    onClick={closeMenu}
                                >
                                    Log in
                                </Link>

                                <Link
                                    to="/register"
                                    className="signup-btn"
                                    onClick={closeMenu}
                                >
                                    Sign up
                                </Link>
                            </>

                        )}

                    </div>

                        </>
                    ) : (
                        <>
                            <Link to="/" onClick={closeMenu}>Home</Link>
                            <a href="/#services" onClick={closeMenu}>Services</a>
                            <div className="mobile-nav-actions">
                                <Link to="/login" className="login-btn" onClick={closeMenu}>Log in</Link>
                                <Link to="/register" className="signup-btn" onClick={closeMenu}>Create account</Link>
                            </div>
                        </>
                    )}

                </div>


                {/* DESKTOP ACTIONS */}

                <div className="navbar-actions">

                    {loggedIn && (
                        <Link to="/wishlist" className="nav-link" aria-label="Wishlist">
                            <Heart size={17} />
                        </Link>
                    )}


                    {loggedIn ? (

                        <>
                            <Link to="/dashboard" className="login-btn">
                                Dashboard
                            </Link>

                            <button
                                className="signup-btn"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </>

                    ) : (

                        <>
                            <Link to="/login" className="login-btn">
                                Log in
                            </Link>

                            <Link to="/register" className="signup-btn">
                                Sign up
                            </Link>
                        </>

                    )}

                </div>


                {/* MOBILE MENU BUTTON */}

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

    );

}

export default Navbar;
