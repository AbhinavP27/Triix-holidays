import { useState } from "react";
import {
  MapPin,
  CalendarDays,
  Users,
  Wallet,
  Plane,
  Hotel,
  Utensils,
  Camera,
  Save,
  Trash2
} from "lucide-react";

import tripPlans from "../data/tripPlans";
import "./TripPlanner.css";

function TripPlanner() {

  const [destination, setDestination] = useState("Munnar");
  const [days, setDays] = useState(3);
  const [travellers, setTravellers] = useState(2);
  const [travelStyle, setTravelStyle] = useState("standard");
  const [budget, setBudget] = useState(10000);

  const [generatedPlan, setGeneratedPlan] = useState(null);
  const [savedMessage, setSavedMessage] = useState("");

  const generatePlan = () => {

    const selectedTrip = tripPlans[destination];

    const costs = selectedTrip.costs[travelStyle];

    const transport = costs.transport * travellers;

    const accommodation = costs.accommodation * days;

    const food = costs.food * days * travellers;

    const activities = costs.activities * travellers;

    const subtotal =
      transport +
      accommodation +
      food +
      activities;

    const contingency = Math.round(subtotal * 0.10);

    const total = subtotal + contingency;

    const itinerary = Array.from(
      { length: Number(days) },
      (_, index) => ({
        day: index + 1,
        activity:
          selectedTrip.activities[
            index % selectedTrip.activities.length
          ]
      })
    );

    setGeneratedPlan({
      destination,
      days,
      travellers,
      travelStyle,
      budget,
      transport,
      accommodation,
      food,
      activities,
      contingency,
      total,
      perPerson: Math.ceil(total / travellers),
      itinerary,
      image: selectedTrip.image
    });

    setSavedMessage("");
  };

  const savePlan = () => {

    if (!generatedPlan) return;

    const existingPlans = JSON.parse(
      localStorage.getItem("triixTrips") || "[]"
    );

    const updatedPlans = [
      ...existingPlans,
      {
        ...generatedPlan,
        id: Date.now()
      }
    ];

    localStorage.setItem(
      "triixTrips",
      JSON.stringify(updatedPlans)
    );

    setSavedMessage("Your trip plan has been saved!");
  };

  const formatPrice = (amount) => {
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  return (
    <div className="trip-planner-page">

      {/* HERO */}

      <section className="planner-hero">

        <div className="planner-hero-content">

          <span>PLAN YOUR NEXT ADVENTURE</span>

          <h1>
            Your Journey.
            <br />
            Your Perfect Plan.
          </h1>

          <p>
            Create your travel itinerary and estimate
            your trip expenses with TRIIX HOLIDAYS.
          </p>

        </div>

      </section>


      {/* PLANNER FORM */}

      <section className="planner-container">

        <div className="planner-form-card">

          <div className="planner-heading">

            <h2>Plan Your Trip</h2>

            <p>
              Enter your travel preferences to create
              a personalized sample itinerary.
            </p>

          </div>


          <div className="planner-form-grid">

            {/* DESTINATION */}

            <div className="planner-field">

              <label>
                <MapPin size={18} />
                Destination
              </label>

              <select
                value={destination}
                onChange={(e) =>
                  setDestination(e.target.value)
                }
              >

                {Object.keys(tripPlans).map((place) => (
                  <option key={place} value={place}>
                    {place}
                  </option>
                ))}

              </select>

            </div>


            {/* DAYS */}

            <div className="planner-field">

              <label>
                <CalendarDays size={18} />
                Travel Days
              </label>

              <input
                type="number"
                min="1"
                max="15"
                value={days}
                onChange={(e) =>
                  setDays(e.target.value)
                }
              />

            </div>


            {/* TRAVELLERS */}

            <div className="planner-field">

              <label>
                <Users size={18} />
                Travellers
              </label>

              <input
                type="number"
                min="1"
                max="20"
                value={travellers}
                onChange={(e) =>
                  setTravellers(e.target.value)
                }
              />

            </div>


            {/* TRAVEL STYLE */}

            <div className="planner-field">

              <label>
                <Hotel size={18} />
                Travel Style
              </label>

              <select
                value={travelStyle}
                onChange={(e) =>
                  setTravelStyle(e.target.value)
                }
              >

                <option value="budget">
                  Budget
                </option>

                <option value="standard">
                  Standard
                </option>

                <option value="premium">
                  Premium
                </option>

              </select>

            </div>


            {/* BUDGET */}

            <div className="planner-field planner-budget-field">

              <label>
                <Wallet size={18} />
                Your Total Budget (₹)
              </label>

              <input
                type="number"
                min="1"
                value={budget}
                onChange={(e) =>
                  setBudget(e.target.value)
                }
              />

            </div>

          </div>


          <button
            className="generate-trip-btn"
            onClick={generatePlan}
            disabled={
              Number(days) < 1 ||
              Number(days) > 15 ||
              Number(travellers) < 1 ||
              Number(travellers) > 20 ||
              Number(budget) < 1
            }
          >
            <Plane size={19} />
            Generate My Trip Plan
          </button>

        </div>


        {/* GENERATED RESULT */}

        {generatedPlan && (

          <div className="generated-trip">

            <div className="generated-heading">

              <div>
                <span>YOUR TRAVEL PLAN</span>

                <h2>
                  {generatedPlan.destination} Adventure
                </h2>

                <p>
                  {generatedPlan.days} Days ·{" "}
                  {generatedPlan.travellers} Travellers ·{" "}
                  {generatedPlan.travelStyle}
                </p>
              </div>

              <button
                className="save-trip-btn"
                onClick={savePlan}
              >
                <Save size={17} />
                Save Plan
              </button>

            </div>


            {savedMessage && (
              <p className="saved-message">
                {savedMessage}
              </p>
            )}


            {/* COST BREAKDOWN */}

            <div className="budget-section">

              <h3>Estimated Trip Budget</h3>

              <div className="budget-total">

                <div>
                  <span>Estimated Total</span>

                  <h2>
                    {formatPrice(generatedPlan.total)}
                  </h2>
                </div>

                <div>
                  <span>Cost Per Person</span>

                  <h3>
                    {formatPrice(generatedPlan.perPerson)}
                  </h3>
                </div>

              </div>


              <div className="budget-status">

                {generatedPlan.total <=
                Number(generatedPlan.budget) ? (
                  <span className="within-budget">
                    Within your budget
                  </span>
                ) : (
                  <span className="over-budget">
                    Exceeds your budget
                  </span>
                )}

                <span>
                  Your budget:{" "}
                  {formatPrice(
                    Number(generatedPlan.budget)
                  )}
                </span>

              </div>


              <div className="budget-progress">

                <div
                  className="budget-progress-fill"
                  style={{
                    width: `${
                      Math.min(
                        (generatedPlan.total /
                          Number(generatedPlan.budget)) *
                          100,
                        100
                      )
                    }%`
                  }}
                />

              </div>


              <div className="budget-breakdown">

                <div className="budget-item">
                  <Plane />
                  <div>
                    <span>Transportation</span>
                    <strong>
                      {formatPrice(generatedPlan.transport)}
                    </strong>
                  </div>
                </div>

                <div className="budget-item">
                  <Hotel />
                  <div>
                    <span>Accommodation</span>
                    <strong>
                      {formatPrice(generatedPlan.accommodation)}
                    </strong>
                  </div>
                </div>

                <div className="budget-item">
                  <Utensils />
                  <div>
                    <span>Food</span>
                    <strong>
                      {formatPrice(generatedPlan.food)}
                    </strong>
                  </div>
                </div>

                <div className="budget-item">
                  <Camera />
                  <div>
                    <span>Activities</span>
                    <strong>
                      {formatPrice(generatedPlan.activities)}
                    </strong>
                  </div>
                </div>

              </div>


              <div className="contingency-row">
                <span>Emergency / Extra allowance (10%)</span>

                <strong>
                  {formatPrice(generatedPlan.contingency)}
                </strong>
              </div>

            </div>


            {/* ITINERARY */}

            <div className="itinerary-section">

              <h3>Your Day-wise Itinerary</h3>

              {generatedPlan.itinerary.map((item) => (

                <div
                  className="itinerary-card"
                  key={item.day}
                >

                  <div className="itinerary-day">
                    Day {item.day}
                  </div>

                  <div>
                    <h4>{item.activity}</h4>

                    <p>
                      Explore and enjoy your destination.
                    </p>
                  </div>

                </div>

              ))}

            </div>

            <p className="planner-disclaimer">
              Note: All prices and activities are sample
              estimates. Actual costs, availability and
              travel conditions may vary.
            </p>

          </div>

        )}

      </section>

    </div>
  );
}

export default TripPlanner;