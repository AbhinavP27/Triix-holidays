import { useState } from "react";
import activities from "../data/activities";
import ActivityCard from "./ActivityCard";
import "./Activities.css";

function Activities() {

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Trekking",
    "Camping",
    "Water Sports",
    "Adventure",
    "Safari"
  ];

  const filteredActivities = activities.filter((activity) => {

    const matchesSearch =
      activity.name.toLowerCase().includes(search.toLowerCase()) ||
      activity.location.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      activity.category === selectedCategory;

    return matchesSearch && matchesCategory;

  });

  return (
    <section className="activities-section">

      <div className="activities-container">

        <div className="activities-heading">

          <div>
            <span className="section-label">MAKE MEMORIES</span>

            <h2>
              Adventure <span>Experiences</span>
            </h2>

            <p>
              Discover exciting activities and make your journey unforgettable.
            </p>
          </div>

        </div>

        {/* Search */}

        <div className="activity-search">

          <input
            type="text"
            placeholder="Search activities or destinations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        {/* Category Filters */}

        <div className="activity-filters">

          {categories.map((category) => (

            <button
              key={category}
              className={
                selectedCategory === category ? "active" : ""
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Activities Grid */}

        <div className="activities-grid">

          {filteredActivities.length > 0 ? (

            filteredActivities.map((activity) => (

              <ActivityCard
                key={activity.id}
                activity={activity}
              />

            ))

          ) : (

            <div className="activity-empty">
              <h3>No activities found</h3>
              <p>Try searching for another activity or destination.</p>
            </div>

          )}

        </div>

      </div>

    </section>
  );
}

export default Activities;