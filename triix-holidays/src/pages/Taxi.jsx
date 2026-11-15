import { useState } from "react";

import {
  MapPin,
  CalendarDays,
  Clock,
  Users,
  Car,
  ArrowRight,
  CheckCircle
} from "lucide-react";

import taxis from "../data/taxis";

import TaxiCard from "../components/TaxiCard";

import "./Taxi.css";

function getLocalDate() {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function Taxi() {

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");

  const [travelDate, setTravelDate] = useState(getLocalDate());

  const [travelTime, setTravelTime] = useState("09:00");

  const [passengers, setPassengers] = useState(2);

  const [distance, setDistance] = useState(20);

  const [selectedTaxi, setSelectedTaxi] = useState(2);

  const [booking, setBooking] = useState(null);

  const [error, setError] = useState("");

  // Selected Taxi

  const selectedVehicle = taxis.find(
    (taxi) => taxi.id === selectedTaxi
  );

  // Estimated Fare

  const estimatedFare = selectedVehicle
    ? selectedVehicle.baseFare +
      selectedVehicle.pricePerKm * Number(distance)
    : 0;

  // Booking Function

  function handleBooking(e) {

    e.preventDefault();

    setError("");
    setBooking(null);

    if (!pickup.trim() || !drop.trim()) {
      setError("Please enter both pickup and drop locations.");
      return;
    }

    if (pickup.trim().toLowerCase() === drop.trim().toLowerCase()) {
      setError("Pickup and drop locations must be different.");
      return;
    }

    if (Number(distance) <= 0) {
      setError("Please enter a valid journey distance.");
      return;
    }

    if (Number(passengers) > selectedVehicle.capacity) {
      setError(
        `This taxi can accommodate a maximum of ${selectedVehicle.capacity} passengers.`
      );
      return;
    }

    if (travelDate < getLocalDate()) {
      setError("Please select a valid future travel date.");
      return;
    }

    const bookingDetails = {
      pickup,
      drop,
      travelDate,
      travelTime,
      passengers,
      distance,
      taxi: selectedVehicle.name,
      fare: estimatedFare
    };

    setBooking(bookingDetails);

  }

  return (

    <div className="taxi-page">

      {/* Hero */}

      <section className="taxi-hero">

        <div className="taxi-hero-content">

          <span>TRIIX HOLIDAYS</span>

          <h1>
            Your Journey. <br />
            <span>Our Ride.</span>
          </h1>

          <p>
            Book comfortable rides and explore your destination
            with convenient taxi options.
          </p>

        </div>

      </section>

      {/* Booking Section */}

      <section className="taxi-booking-section">

        <div className="taxi-container">

          <div className="taxi-heading">

            <span>BOOK YOUR RIDE</span>

            <h2>Where Are You Going?</h2>

            <p>
              Enter your journey details and compare taxi options.
            </p>

          </div>

          {/* Booking Form */}

          <form
            className="taxi-booking-form"
            onSubmit={handleBooking}
          >

            <div className="taxi-form-grid">

              {/* Pickup */}

              <div className="taxi-form-group">

                <label>
                  <MapPin size={17} />
                  Pickup Location
                </label>

                <input
                  type="text"
                  placeholder="Enter pickup location"
                  value={pickup}
                  onChange={(e) => {
                    setPickup(e.target.value);
                    setBooking(null);
                  }}
                  required
                />

              </div>

              {/* Drop */}

              <div className="taxi-form-group">

                <label>
                  <MapPin size={17} />
                  Drop Location
                </label>

                <input
                  type="text"
                  placeholder="Enter destination"
                  value={drop}
                  onChange={(e) => {
                    setDrop(e.target.value);
                    setBooking(null);
                  }}
                  required
                />

              </div>

              {/* Date */}

              <div className="taxi-form-group">

                <label>
                  <CalendarDays size={17} />
                  Travel Date
                </label>

                <input
                  type="date"
                  min={getLocalDate()}
                  value={travelDate}
                  onChange={(e) => {
                    setTravelDate(e.target.value);
                    setBooking(null);
                  }}
                  required
                />

              </div>

              {/* Time */}

              <div className="taxi-form-group">

                <label>
                  <Clock size={17} />
                  Pickup Time
                </label>

                <input
                  type="time"
                  value={travelTime}
                  onChange={(e) => {
                    setTravelTime(e.target.value);
                    setBooking(null);
                  }}
                  required
                />

              </div>

              {/* Passengers */}

              <div className="taxi-form-group">

                <label>
                  <Users size={17} />
                  Passengers
                </label>

                <select
                  value={passengers}
                  onChange={(e) => {
                    setPassengers(Number(e.target.value));
                    setBooking(null);
                  }}
                >

                  {[1, 2, 3, 4, 5, 6].map((number) => (

                    <option key={number} value={number}>
                      {number} {number === 1 ? "Passenger" : "Passengers"}
                    </option>

                  ))}

                </select>

              </div>

              {/* Distance */}

              <div className="taxi-form-group">

                <label>
                  <MapPin size={17} />
                  Estimated Distance (KM)
                </label>

                <input
                  type="number"
                  min="1"
                  max="1000"
                  value={distance}
                  onChange={(e) => {
                    setDistance(e.target.value);
                    setBooking(null);
                  }}
                  required
                />

              </div>

            </div>

            <p className="taxi-demo-note">
              Demo mode: Enter an estimated journey distance manually.
              Actual route distance will require a maps integration.
            </p>

            {error && (
              <div className="taxi-error">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="taxi-search-button"
            >
              Find Taxi Options
              <ArrowRight size={18} />
            </button>

          </form>

        </div>

      </section>

      {/* Taxi Comparison */}

      <section className="taxi-options-section">

        <div className="taxi-container">

          <div className="taxi-options-heading">

            <div>

              <span>COMPARE YOUR OPTIONS</span>

              <h2>Choose Your Ride</h2>

              <p>
                Select the vehicle that best fits your journey.
              </p>

            </div>

            <div className="taxi-distance">
              <Car size={17} />
              {distance || 0} KM Journey
            </div>

          </div>

          <div className="taxi-options-grid">

            {taxis.map((taxi) => (

              <TaxiCard
                key={taxi.id}
                taxi={taxi}
                distance={Number(distance) || 0}
                selected={selectedTaxi === taxi.id}
                onSelect={() => {
                  setSelectedTaxi(taxi.id);
                  setBooking(null);
                }}
              />

            ))}

          </div>

        </div>

      </section>

      {/* Booking Summary */}

      <section className="taxi-summary-section">

        <div className="taxi-container">

          <div className="taxi-summary">

            <div className="taxi-summary-left">

              <span>YOUR ESTIMATED FARE</span>

              <h2>
                ₹{estimatedFare.toLocaleString("en-IN")}
              </h2>

              <p>
                {selectedVehicle?.name} · {distance} KM
              </p>

            </div>

            <div className="taxi-summary-right">

              <div>
                <small>Pickup</small>
                <strong>{pickup || "Not selected"}</strong>
              </div>

              <ArrowRight size={20} />

              <div>
                <small>Destination</small>
                <strong>{drop || "Not selected"}</strong>
              </div>

            </div>

          </div>

          {/* Booking Confirmation */}

          {booking && (

            <div className="taxi-confirmation">

              <CheckCircle size={25} />

              <div>

                <h3>Booking Request Created!</h3>

                <p>
                  Your demo booking for {booking.taxi} from{" "}
                  {booking.pickup} to {booking.drop} has been created.
                </p>

                <p>
                  Date: {booking.travelDate} · Time: {booking.travelTime}
                </p>

                <strong>
                  Estimated Fare: ₹
                  {booking.fare.toLocaleString("en-IN")}
                </strong>

                <p className="taxi-confirmation-note">
                  This is a frontend demonstration. No real taxi
                  has been booked.
                </p>

              </div>

            </div>

          )}

        </div>

      </section>

    </div>

  );

}

export default Taxi;