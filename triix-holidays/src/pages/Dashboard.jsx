import { useEffect, useState } from "react";

import {
  CalendarCheck,
  Wallet,
  MapPin,
  Heart,
  ArrowRight,
  Clock,
  CheckCircle,
  XCircle,
  Search
} from "lucide-react";

import { Link } from "react-router-dom";

import DashboardSidebar from "../components/DashboardSidebar";

import initialBookings from "../data/booking";

import "./Dashboard.css";

function Dashboard() {

  const [bookings, setBookings] = useState(() => {

    try {
      const saved = localStorage.getItem("triixBookings");

      return saved
        ? JSON.parse(saved)
        : initialBookings;

    } catch {
      return initialBookings;
    }

  });

  const [activeFilter, setActiveFilter] = useState("All");

  const [search, setSearch] = useState("");

  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {

    localStorage.setItem(
      "triixBookings",
      JSON.stringify(bookings)
    );

  }, [bookings]);


  const cancelBooking = (id) => {

    const updatedBookings = bookings.map((booking) =>
      booking.id === id
        ? { ...booking, status: "Cancelled" }
        : booking
    );

    setBookings(updatedBookings);

  };


  const filteredBookings = bookings.filter((booking) => {

    const matchesFilter =
      activeFilter === "All" ||
      booking.status === activeFilter ||
      booking.category === activeFilter;

    const matchesSearch =
      booking.title.toLowerCase().includes(search.toLowerCase()) ||
      booking.location.toLowerCase().includes(search.toLowerCase()) ||
      string(booking.id).toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;

  });


  const confirmedCount = bookings.filter(
    (booking) => booking.status === "Confirmed"
  ).length;

  const pendingCount = bookings.filter(
    (booking) => booking.status === "Pending"
  ).length;

  const totalSpent = bookings
    .filter((booking) => booking.status === "Confirmed")
    .reduce((total, booking) => total + booking.amount, 0);


  const formatPrice = (amount) => {
    return `₹${amount.toLocaleString("en-IN")}`;
  };


  const formatDate = (date) => {

    return new Date(date + "T00:00:00").toLocaleDateString(
      "en-IN",
      {
        day: "numeric",
        month: "short",
        year: "numeric"
      }
    );

  };


  const stats = [
    {
      title: "Total Bookings",
      value: bookings.length,
      icon: CalendarCheck,
      color: "#2878a5",
      background: "#eaf3f9"
    },
    {
      title: "Confirmed",
      value: confirmedCount,
      icon: CheckCircle,
      color: "#1b9b63",
      background: "#e7f7ef"
    },
    {
      title: "Pending",
      value: pendingCount,
      icon: Clock,
      color: "#e99b36",
      background: "#fff5e7"
    },
    {
      title: "Total Spent",
      value: formatPrice(totalSpent),
      icon: Wallet,
      color: "#8b68c8",
      background: "#f1eafa"
    }
  ];


  return (

    <div className="dashboard-layout">

      <DashboardSidebar />


      <main className="dashboard-main">

        {/* HEADER */}

        <header className="dashboard-header">

          <div>
            <h1>Dashboard</h1>

            <p>
              Welcome back! Manage your travel activities here.
            </p>
          </div>

          <Link
            to="/explore"
            className="dashboard-explore-btn"
          >
            Explore Trips
            <ArrowRight size={17} />
          </Link>

        </header>


        {/* PROFILE BANNER */}

        <section className="dashboard-banner">

          <div>
            <span>YOUR TRAVEL JOURNEY</span>

            <h2>
              Discover More.
              <br />
              Travel More.
            </h2>

            <p>
              Your next adventure is just around the corner.
            </p>

            <Link to="/trip-planner">
              Plan Your Next Trip
              <ArrowRight size={16} />
            </Link>

          </div>

        </section>


        {/* STATISTICS */}

        <section className="dashboard-stats">

          {stats.map((stat) => {

            const Icon = stat.icon;

            return (

              <div
                className="dashboard-stat-card"
                key={stat.title}
              >

                <div
                  className="dashboard-stat-icon"
                  style={{
                    color: stat.color,
                    background: stat.background
                  }}
                >
                  <Icon size={22} />
                </div>

                <div>
                  <p>{stat.title}</p>
                  <h3>{stat.value}</h3>
                </div>

              </div>

            );

          })}

        </section>


        {/* QUICK LINKS */}

        <section className="dashboard-quick-links">

          <Link to="/wishlist" className="quick-link-card">

            <Heart size={22} />

            <div>
              <h3>My Wishlist</h3>
              <p>View your saved destinations</p>
            </div>

            <ArrowRight size={18} />

          </Link>


          <Link to="/trip-planner" className="quick-link-card">

            <MapPin size={22} />

            <div>
              <h3>Trip Planner</h3>
              <p>Create your travel itinerary</p>
            </div>

            <ArrowRight size={18} />

          </Link>

        </section>


        {/* BOOKINGS */}

        <section className="dashboard-bookings">

          <div className="bookings-heading">

            <div>
              <h2>My Bookings</h2>
              <p>Manage your travel reservations</p>
            </div>

          </div>


          {/* FILTERS */}

          <div className="booking-controls">

            <div className="booking-search">

              <Search size={18} />

              <input
                type="text"
                placeholder="Search bookings..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

            </div>


            <div className="booking-filters">

              {[
                "All",
                "Confirmed",
                "Pending",
                "Cancelled",
                "Hotel",
                "Activity",
                "Taxi",
                "Package"
              ].map((filter) => (

                <button
                  key={filter}
                  className={
                    activeFilter === filter ? "selected" : ""
                  }
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>

              ))}

            </div>

          </div>


          {/* BOOKING CARDS */}

          <div className="booking-list">

            {filteredBookings.length === 0 ? (

              <div className="no-bookings">

                <CalendarCheck size={45} />

                <h3>No bookings found</h3>

                <p>
                  Try another filter or search term.
                </p>

              </div>

            ) : (

              filteredBookings.map((booking) => (

                <div
                  className="booking-card"
                  key={booking.id}
                >

                  <div className="booking-image">

                    <img
                      src={booking.image}
                      alt={booking.title}
                    />

                  </div>


                  <div className="booking-information">

                    <div className="booking-title-row">

                      <span className="booking-category">
                        {booking.category}
                      </span>

                      <span
                        className={`booking-status ${booking.status.toLowerCase()}`}
                      >
                        {booking.status}
                      </span>

                    </div>

                    <h3>{booking.title}</h3>

                    <p className="booking-location">
                      <MapPin size={15} />
                      {booking.location}
                    </p>

                    <div className="booking-details">

                      {booking.details && typeof booking.details === "object" ? (

                        <>
                          <p>
                            Customer: {booking.details.customerName}
                          </p>

                          <p>
                            Travellers: {booking.details.travellers}
                          </p>

                          <p>
                            Duration: {booking.details.duration}
                          </p>

                          <p>
                            Booking Type: {booking.details.bookingType}
                          </p>
                        </>

                      ) : (

                        <p>{booking.details || "No additional details available"}</p>

                      )}

                    </div>

                    <p className="booking-date">
                      <CalendarCheck size={15} />
                      {formatDate(booking.date)}
                    </p>

                  </div>


                  <div className="booking-payment">

                    <span>Booking ID</span>

                    <strong>{booking.id}</strong>

                    <h3>{formatPrice(booking.amount)}</h3>

                    {booking.status !== "Cancelled" && (

                      <button
                        className="cancel-booking-btn"
                        onClick={() => cancelBooking(booking.id)}
                      >
                        Cancel Booking
                      </button>

                    )}

                  </div>

                </div>

              ))

            )}

          </div>

        </section>


        {/* FOOTER */}

        <footer className="dashboard-footer">
          TRIIX HOLIDAYS · Your Journey. Your People. Your Adventure.
        </footer>

      </main>

    </div>

  );

}

export default Dashboard;