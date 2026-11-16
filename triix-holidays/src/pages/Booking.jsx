import { useState, useMemo } from "react";
import { useToast } from '../context/ToastContext'
import { useParams, useNavigate, Link } from "react-router-dom";

import {
    MapPin,
    CalendarDays,
    Users,
    Clock,
    ArrowLeft,
    CheckCircle
} from "lucide-react";

import hotels from "../data/hotels";
import activities from "../data/activities";
import vehicles from "../data/vehicles";
import packages from "../data/packages";

import "./Booking.css";


function Booking() {
    const { showToast } = useToast();

    const { type, id } = useParams();

    const navigate = useNavigate();


    // Select the correct data source

    const dataSources = {
        hotel: hotels,
        activity: activities,
        vehicle: vehicles,
        package: packages
    };


    const selectedData = dataSources[type];

    const item = selectedData?.find(
        (product) => String(product.id) === id
    );


    // Traveller information

    const [formData, setFormData] = useState({

        name: "",
        email: "",
        phone: "",
        date: "",
        travellers: 1,
        duration: 1

    });


    const [error, setError] = useState("");


    // Date helper

    const today = new Date().toLocaleDateString("en-CA");


    // Handle input changes

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({

            ...formData,

            [name]: value

        });

        setError("");

    };


    // Calculate booking price

    const priceDetails = useMemo(() => {

        if (!item) return null;

        const price = Number(item.price);

        const travellers = Number(formData.travellers);

        const duration = Number(formData.duration);


        let total = 0;


        if (type === "hotel") {

            // Hotel price per night

            total = price * duration * travellers;

        }

        else if (type === "activity") {

            // Activity price per person

            total = price * travellers;

        }

        else if (type === "vehicle") {

            // Vehicle price per day

            total = price * duration;

        }

        else if (type === "package") {

            // Package price per person

            total = price * travellers;

        }


        const serviceFee = Math.round(total * 0.05);

        const grandTotal = total + serviceFee;


        return {

            basePrice: total,

            serviceFee,

            grandTotal

        };

    }, [item, type, formData.travellers, formData.duration]);


    // Confirm booking

    const handleBooking = (e) => {

        e.preventDefault();


        if (!formData.name.trim()) {

            setError("Please enter your full name.");

            return;

        }


        if (!formData.email.trim()) {

            setError("Please enter your email address.");

            return;

        }


        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(formData.email)) {

            setError("Please enter a valid email address.");

            return;

        }


        if (!/^[0-9]{10}$/.test(formData.phone)) {

            setError("Please enter a valid 10-digit phone number.");

            return;

        }


        if (!formData.date || formData.date < today) {

            setError("Please select a valid travel date.");

            return;

        }


        const bookingId = `TRX${Date.now()}`;


        const newBooking = {

            id: bookingId,

            title: item.name,

            location: item.location,

            category:
                type === "hotel"
                    ? "Hotel"
                    : type === "activity"
                    ? "Activity"
                    : type === "package"
                    ? "Package"
                    : "Vehicle",

            date: formData.date,

            amount: priceDetails.grandTotal,

            status: "Confirmed",

            image: item.image,

            details: {
                customerName: formData.name,
                email: formData.email,
                phone: formData.phone,
                travellers: Number(formData.travellers),
                duration:
                    type === "activity"
                        ? item.duration
                        : item.duration,
                bookingType: type
            }

        };


        // Save booking in LocalStorage

        const existingBookings = JSON.parse(
            localStorage.getItem("triixBookings") || "[]"
        );


        localStorage.setItem(

            "triixBookings",

            JSON.stringify([
                newBooking,
                ...existingBookings
            ])

        );

        showToast("Your booking has been confirmed!", "success");

        // Navigate to confirmation page

        navigate(`/booking-confirmation/${bookingId}`);

    };


    // Invalid item

    if (!selectedData || !item) {

        return (

            <div className="booking-not-found">

                <h2>Booking Item Not Found</h2>

                <p>Please select a valid item.</p>

                <Link to="/explore">
                    Explore Destinations
                </Link>

            </div>

        );

    }


    return (

        <div className="booking-page">

            <div className="container">


                {/* BACK BUTTON */}

                <Link
                    to={
                        type === "hotel"
                            ? "/hotels"
                            : type === "activity"
                            ? "/activities"
                            : type === "package"
                            ? "/packages"
                            : "/rentals"
                    }
                    className="booking-back"
                >

                    <ArrowLeft size={18} />

                    Back to Explore

                </Link>


                {/* HEADER */}

                <div className="booking-heading">

                    <span>TRIIX HOLIDAYS</span>

                    <h1>Complete Your Booking</h1>

                    <p>
                        You're one step closer to your next adventure.
                    </p>

                </div>


                <div className="booking-layout">


                    {/* BOOKING FORM */}

                    <div className="booking-form-card">

                        <h2>Traveller Information</h2>

                        <p className="booking-form-description">
                            Enter your details to continue.
                        </p>


                        {error && (

                            <div className="booking-error">
                                {error}
                            </div>

                        )}


                        <form onSubmit={handleBooking}>


                            {/* NAME */}

                            <div className="booking-field">

                                <label>Full Name</label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            {/* EMAIL */}

                            <div className="booking-field">

                                <label>Email Address</label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            {/* PHONE */}

                            <div className="booking-field">

                                <label>Phone Number</label>

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="10-digit mobile number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    maxLength={10}
                                    required
                                />

                            </div>


                            {/* DATE */}

                            <div className="booking-field">

                                <label>Travel Date</label>

                                <div className="booking-input-icon">

                                    <CalendarDays size={18} />

                                    <input
                                        type="date"
                                        name="date"
                                        min={today}
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                            </div>


                            {/* TRAVELLERS */}

                            <div className="booking-field">

                                <label>Number of Travellers</label>

                                <div className="booking-input-icon">

                                    <Users size={18} />

                                    <select
                                        name="travellers"
                                        value={formData.travellers}
                                        onChange={handleChange}
                                    >

                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                                            (number) => (

                                                <option
                                                    key={number}
                                                    value={number}
                                                >
                                                    {number} Traveller{number > 1 ? "s" : ""}
                                                </option>

                                            )
                                        )}

                                    </select>

                                </div>

                            </div>


                            {/* DURATION */}

                            {type !== "activity" && type !== "package" && (

                                <div className="booking-field">

                                    <label>
                                        {type === "hotel"
                                            ? "Number of Nights"
                                            : type === "vehicle"
                                            ? "Rental Duration (Days)"
                                            : "Number of Days"}
                                    </label>

                                    <div className="booking-input-icon">

                                        <Clock size={18} />

                                        <select
                                            name="duration"
                                            value={formData.duration}
                                            onChange={handleChange}
                                        >

                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                                                (number) => (

                                                    <option
                                                        key={number}
                                                        value={number}
                                                    >
                                                        {number} {number === 1 ? "Day" : "Days"}
                                                    </option>

                                                )
                                            )}

                                        </select>

                                    </div>

                                </div>

                            )}


                            {/* SUBMIT */}

                            <button
                                type="submit"
                                className="confirm-booking-btn"
                            >

                                Confirm Booking

                                <CheckCircle size={19} />

                            </button>


                        </form>

                    </div>


                    {/* BOOKING SUMMARY */}

                    <aside className="booking-summary-card">


                        <img
                            src={item.image}
                            alt={item.name}
                        />


                        <div className="booking-summary-content">

                            <span className="booking-type-label">
                                {type.toUpperCase()}
                            </span>

                            <h3>{item.name}</h3>


                            <div className="booking-location">

                                <MapPin size={16} />

                                {item.location}

                            </div>


                            <div className="booking-summary-divider"></div>


                            <h4>Price Details</h4>


                            <div className="booking-price-row">

                                <span>
                                    {type === "hotel"
                                        ? `₹${item.price} × ${formData.duration} nights × ${formData.travellers} travellers`
                                        : type === "vehicle"
                                        ? `₹${item.price} × ${formData.duration} days`
                                        : type === "package"
                                        ? `₹${item.price} × ${formData.travellers} travellers · ${item.duration}`
                                        : `₹${item.price} × ${formData.travellers} travellers`
                                    }
                                </span>

                                <strong>
                                    ₹{priceDetails.basePrice.toLocaleString("en-IN")}
                                </strong>

                            </div>


                            <div className="booking-price-row">

                                <span>Service Fee (5%)</span>

                                <strong>
                                    ₹{priceDetails.serviceFee.toLocaleString("en-IN")}
                                </strong>

                            </div>


                            <div className="booking-summary-divider"></div>


                            <div className="booking-total-row">

                                <strong>Total Amount</strong>

                                <h3>
                                    ₹{priceDetails.grandTotal.toLocaleString("en-IN")}
                                </h3>

                            </div>


                            <p className="booking-secure-text">

                                <CheckCircle size={15} />

                                Demo booking – no payment required.

                            </p>

                        </div>

                    </aside>


                </div>

            </div>

        </div>

    );

}

export default Booking;