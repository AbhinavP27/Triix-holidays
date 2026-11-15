import { useState } from "react";

import {
  Search,
  SlidersHorizontal
} from "lucide-react";

import vehicles from "../data/vehicles";

import VehicleCard from "../components/VehicleCard";

import "./Rentals.css";

function Rentals() {

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [maxPrice, setMaxPrice] = useState(5000);

  const categories = [
    "All",
    "Bike",
    "Scooter",
    "Car"
  ];

  // Filter Vehicles

  const filteredVehicles = vehicles.filter((vehicle) => {

    const matchesSearch =
      vehicle.name.toLowerCase().includes(search.toLowerCase()) ||
      vehicle.location.toLowerCase().includes(search.toLowerCase()) ||
      vehicle.brand.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      vehicle.category === selectedCategory;

    const matchesPrice =
      vehicle.price <= Number(maxPrice);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesPrice
    );

  });

  return (

    <div className="rentals-page">

      {/* Hero Section */}

      <section className="rentals-hero">

        <div className="rentals-hero-content">

          <span>TRIIX HOLIDAYS</span>

          <h1>
            Explore More. <br />
            <span>Travel Freely.</span>
          </h1>

          <p>
            Find the perfect ride for your journey.
            Rent bikes, scooters and cars at your destination.
          </p>

        </div>

      </section>

      {/* Vehicle Listings */}

      <section className="rentals-listing">

        <div className="rentals-container">

          {/* Heading */}

          <div className="rentals-heading">

            <div>

              <span className="rentals-label">
                FIND YOUR PERFECT RIDE
              </span>

              <h2>Explore Rental Vehicles</h2>

              <p>
                Choose your vehicle and make every journey memorable.
              </p>

            </div>

            <div className="vehicle-count">
              {filteredVehicles.length} Vehicles
            </div>

          </div>

          {/* Search and Filters */}

          <div className="rental-filter-box">

            <div className="rental-search">

              <Search size={19} />

              <input
                type="text"
                placeholder="Search vehicle, brand or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

            </div>

            <div className="rental-price-filter">

              <label>
                <SlidersHorizontal size={15} />
                Maximum Daily Price
              </label>

              <select
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              >

                <option value="5000">Any Price</option>

                <option value="700">Under ₹700</option>

                <option value="1000">Under ₹1,000</option>

                <option value="1500">Under ₹1,500</option>

                <option value="2000">Under ₹2,000</option>

                <option value="3000">Under ₹3,000</option>

              </select>

            </div>

          </div>

          {/* Category Filters */}

          <div className="vehicle-category-filters">

            {categories.map((category) => (

              <button
                key={category}
                className={
                  selectedCategory === category
                    ? "active"
                    : ""
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>

            ))}

          </div>

          {/* Vehicle Grid */}

          <div className="vehicles-grid">

            {filteredVehicles.length > 0 ? (

              filteredVehicles.map((vehicle) => (

                <VehicleCard
                  key={vehicle.id}
                  vehicle={vehicle}
                />

              ))

            ) : (

              <div className="vehicle-empty">

                <h3>No vehicles found</h3>

                <p>
                  Try changing your search or filter settings.
                </p>

              </div>

            )}

          </div>

        </div>

      </section>

    </div>

  );

}

export default Rentals;