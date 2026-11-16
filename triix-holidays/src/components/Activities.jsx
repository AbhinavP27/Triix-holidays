import { useMemo, useState } from "react";
import activities from "../data/activities";
import ActivityCard from "./ActivityCard";
import "./Activities.css";

function Activities() {

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = useMemo(() => [
    "All",
    ...new Set(activities.map((activity) => activity.category))
  ], []);

  const filteredActivities = activities.filter((activity) => {

    const matchesSearch = `${activity.name} ${activity.location} ${activity.category}`
      .toLowerCase()
      .includes(search.toLowerCase().trim());

    const matchesCategory =
      selectedCategory === "All" ||
      activity.category === selectedCategory;

    return matchesSearch && matchesCategory;

  });
  const visibleActivities = showAll ? filteredActivities : filteredActivities.slice(0, 6);

  return (
    <section className="activities-section" id="activities-list">

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
            onChange={(e) => {
              setSearch(e.target.value);
              setShowAll(false);
            }}
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
              onClick={() => {
                setSelectedCategory(category);
                setShowAll(false);
              }}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Activities Grid */}

        <div className="activities-grid">

          {filteredActivities.length > 0 ? (

            visibleActivities.map((activity) => (

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

        {filteredActivities.length > 6 && (
          <div className="activities-show-more-wrap">
            <button
              type="button"
              className="activities-show-more"
              onClick={() => {
                const nextShowAll = !showAll;
                setShowAll(nextShowAll);
                if (!nextShowAll) {
                  document.getElementById("activities-list")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {showAll ? "Show less" : "Explore more"}
            </button>
          </div>
        )}

      </div>

    </section>
  );
}

export default Activities;
