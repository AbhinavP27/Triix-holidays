import { Link, useParams } from "react-router-dom";

import {
    CheckCircle,
    CalendarDays,
    MapPin,
    Ticket,
    LayoutDashboard
} from "lucide-react";

import "./BookingConfirmation.css";


function BookingConfirmation() {

    const { bookingId } = useParams();


    // Retrieve booking

    const bookings = JSON.parse(
        localStorage.getItem("triixBookings") || "[]"
    );


    const booking = bookings.find(
        (item) => String(item.id) === bookingId
    );


    if (!booking) {

        return (

            <div className="confirmation-not-found">

                <h2>Booking Not Found</h2>

                <Link to="/dashboard">
                    Go to Dashboard
                </Link>

            </div>

        );

    }


    return (

        <div className="confirmation-page">

            <div className="confirmation-card">


                {/* SUCCESS ICON */}

                <div className="confirmation-icon">

                    <CheckCircle size={65} />

                </div>


                <span className="confirmation-label">
                    TRIIX HOLIDAYS
                </span>


                <h1>Booking Confirmed!</h1>


                <p className="confirmation-description">

                    Your demo reservation has been saved successfully.

                    Get ready for your next adventure!

                </p>


                {/* BOOKING ID */}

                <div className="confirmation-reference">

                    <span>BOOKING REFERENCE</span>

                    <h3>{booking.id}</h3>

                </div>


                {/* BOOKING DETAILS */}

                <div className="confirmation-details">


                    <div>

                        <Ticket size={19} />

                        <section>

                            <span>Booking</span>

                            <strong>{booking.title}</strong>

                        </section>

                    </div>


                    <div>

                        <MapPin size={19} />

                        <section>

                            <span>Location</span>

                            <strong>{booking.location}</strong>

                        </section>

                    </div>


                    <div>

                        <CalendarDays size={19} />

                        <section>

                            <span>Travel Date</span>

                            <strong>{booking.date}</strong>

                        </section>

                    </div>


                </div>


                {/* TOTAL */}

                <div className="confirmation-total">

                    <span>Total Amount</span>

                    <h2>
                        ₹{Number(booking.amount).toLocaleString("en-IN")}
                    </h2>

                </div>


                {/* ACTIONS */}

                <Link
                    to="/dashboard"
                    className="confirmation-dashboard-btn"
                >

                    <LayoutDashboard size={18} />

                    Go to Dashboard

                </Link>


                <Link
                    to="/"
                    className="confirmation-home-btn"
                >

                    Back to Home

                </Link>


                <p className="confirmation-note">

                    This is a frontend demonstration. No real payment
                    or reservation has been processed.

                </p>


            </div>

        </div>

    );

}

export default BookingConfirmation;