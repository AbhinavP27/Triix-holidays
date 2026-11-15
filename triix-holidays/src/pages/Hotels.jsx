import { useState } from "react";

import { Search, SlidersHorizontal } from "lucide-react";

import hotels from "../data/hotels";
import HotelCard from "../components/HotelCard";

import "./Hotels.css";

function Hotels() {

  const [search, setSearch] = useState("");

  const [maxPrice, setMaxPrice] = useState(10000);

  const [selectedRating, setSelectedRating] = useState("All");

  // Filter Hotels

  const filteredHotels = hotels.filter((hotel) => {

    const matchesSearch =
      hotel.name.toLowerCase().includes(search.toLowerCase()) ||
      hotel.location.toLowerCase().includes(search.toLowerCase());

    const matchesPrice =
      hotel.price <= Number(maxPrice);

    const matchesRating =
      selectedRating === "All" ||
      hotel.rating >= Number(selectedRating);

    return matchesSearch && matchesPrice && matchesRating;

  });

  return (

    <div className="hotels-page">

      {/* Page Header */}

      <section className="hotels-hero">

        <div className="hotels-hero-content">

          <span>TRIIX HOLIDAYS</span>

          <h1>
            Find Your Perfect <br />
            <span>Stay Anywhere</span>
          </h1>

          <p>
            Discover comfortable stays, beautiful resorts
            and unforgettable hotel experiences.
          </p>

        </div>

      </section>

      {/* Hotel Listings */}

      <section className="hotels-listing">

        <div className="hotels-container">

          <div className="hotels-heading">

            <div>

              <span className="hotels-label">
                EXPLORE ACCOMMODATIONS
              </span>

              <h2>Popular Hotels & Stays</h2>

              <p>
                Find the perfect accommodation for your next trip.
              </p>

            </div>

            <div className="hotel-count">
              {filteredHotels.length} Properties
            </div>

          </div>

          {/* Filters */}

          <div className="hotel-filter-box">

            {/* Search */}

            <div className="hotel-search">

              <Search size={19} />

              <input
                type="text"
                placeholder="Search hotel or destination..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

            </div>

            {/* Price Filter */}

            <div className="hotel-filter">

              <label>
                <SlidersHorizontal size={15} />
                Maximum Price
              </label>

              <select
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              >
                <option value="10000">Any Price</option>
                <option value="2000">Under ₹2,000</option>
                <option value="3000">Under ₹3,000</option>
                <option value="4000">Under ₹4,000</option>
                <option value="5000">Under ₹5,000</option>
                <option value="7000">Under ₹7,000</option>
              </select>

            </div>

            {/* Rating Filter */}

            <div className="hotel-filter">

              <label>
                <SlidersHorizontal size={15} />
                Minimum Rating
              </label>

              <select
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
              >
                <option value="All">All Ratings</option>
                <option value="4.5">4.5+ Excellent</option>
                <option value="4.7">4.7+ Outstanding</option>
                <option value="4.8">4.8+ Exceptional</option>
              </select>

            </div>

          </div>

          {/* Hotel Grid */}

          <div className="hotels-grid">

            {filteredHotels.length > 0 ? (

              filteredHotels.map((hotel) => (

                <HotelCard
                  key={hotel.id}
                  hotel={hotel}
                />

              ))

            ) : (

              <div className="hotel-empty">

                <h3>No hotels found</h3>

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

export default Hotels;