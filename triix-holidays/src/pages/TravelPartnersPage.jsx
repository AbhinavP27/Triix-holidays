import { useMemo, useState } from "react";

import {
  Search,
  Users,
  Plus,
  X,
  Compass
} from "lucide-react";

import initialPartners from "../data/travelPartners";

import TravelPartnerCard from "../components/TravelPartnerCard";

import "./TravelPartnersPage.css";

function getLocalDate() {

  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;

}

function TravelPartnersPage() {

  const [partners, setPartners] = useState(initialPartners);

  const [search, setSearch] = useState("");

  const [departure, setDeparture] = useState("");

  const [selectedDate, setSelectedDate] = useState("");

  const [selectedType, setSelectedType] = useState("All");

  const [maxBudget, setMaxBudget] = useState(10000);

  const [connections, setConnections] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [newPost, setNewPost] = useState({
    destination: "",
    state: "",
    departure: "",
    date: "",
    duration: "",
    budget: "",
    travellers: 2,
    travelType: "Adventure",
    description: ""
  });

  const [message, setMessage] = useState("");

  // Filter Partners

  const filteredPartners = useMemo(() => {

    return partners.filter((partner) => {

      const matchesSearch =
        partner.destination.toLowerCase().includes(search.toLowerCase()) ||
        partner.state.toLowerCase().includes(search.toLowerCase());

      const matchesDeparture =
        partner.departure.toLowerCase().includes(departure.toLowerCase());

      const matchesDate =
        !selectedDate || partner.date === selectedDate;

      const matchesType =
        selectedType === "All" ||
        partner.travelType === selectedType;

      const matchesBudget =
        partner.budget <= Number(maxBudget);

      return (
        matchesSearch &&
        matchesDeparture &&
        matchesDate &&
        matchesType &&
        matchesBudget
      );

    });

  }, [
    partners,
    search,
    departure,
    selectedDate,
    selectedType,
    maxBudget
  ]);

  // Connect with Traveller

  function handleConnect(id) {

    setConnections((previous) => {

      if (previous.includes(id)) {
        return previous;
      }

      return [...previous, id];

    });

  }

  // Handle Form Changes

  function handlePostChange(e) {

    const { name, value } = e.target;

    setNewPost((previous) => ({
      ...previous,
      [name]: value
    }));

  }

  // Create Travel Post

  function handleCreatePost(e) {

    e.preventDefault();

    const post = {

      id: Date.now(),

      name: "You",

      age: 25,

      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",

      ...newPost,

      budget: Number(newPost.budget),

      travellers: Number(newPost.travellers),

      verified: false

    };

    setPartners((previous) => [post, ...previous]);

    setNewPost({
      destination: "",
      state: "",
      departure: "",
      date: "",
      duration: "",
      budget: "",
      travellers: 2,
      travelType: "Adventure",
      description: ""
    });

    setShowForm(false);

    setMessage("Your travel post has been created successfully.");

    setSearch("");
    setDeparture("");
    setSelectedDate("");
    setSelectedType("All");
    setMaxBudget(10000);

  }

  return (

    <div className="travel-community-page">

      {/* Hero */}

      <section className="community-hero">

        <div className="community-hero-content">

          <span>TRAVEL TOGETHER</span>

          <h1>
            Find Your <br />
            <span>Travel Tribe.</span>
          </h1>

          <p>
            Meet fellow travellers, discover shared adventures
            and create unforgettable memories together.
          </p>

          <button
            onClick={() => setShowForm(true)}
          >
            <Plus size={18} />
            Create Travel Post
          </button>

        </div>

      </section>

      {/* Community Section */}

      <section className="community-listing">

        <div className="community-container">

          {/* Heading */}

          <div className="community-heading">

            <div>

              <span>TRIIX TRAVEL COMMUNITY</span>

              <h2>Find Your Travel Partner</h2>

              <p>
                Connect with people who share your travel interests.
              </p>

            </div>

            <div className="community-count">

              <Users size={18} />

              {filteredPartners.length} Travellers Found

            </div>

          </div>

          {/* Success Message */}

          {message && (

            <div className="community-success">

              {message}

              <button onClick={() => setMessage("")}>
                <X size={16} />
              </button>

            </div>

          )}

          {/* Filters */}

          <div className="community-filter-box">

            <div className="community-search">

              <Search size={18} />

              <input
                type="text"
                placeholder="Search destination..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

            </div>

            <div className="community-filter">

              <label>Departure Location</label>

              <input
                type="text"
                placeholder="Enter city"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
              />

            </div>

            <div className="community-filter">

              <label>Travel Date</label>

              <input
                type="date"
                min={getLocalDate()}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />

            </div>

            <div className="community-filter">

              <label>Maximum Budget</label>

              <select
                value={maxBudget}
                onChange={(e) => setMaxBudget(e.target.value)}
              >

                <option value="10000">Any Budget</option>

                <option value="2000">Under ₹2,000</option>

                <option value="3000">Under ₹3,000</option>

                <option value="5000">Under ₹5,000</option>

                <option value="7000">Under ₹7,000</option>

              </select>

            </div>

          </div>

          {/* Travel Types */}

          <div className="community-types">

            {[
              "All",
              "Adventure",
              "Nature",
              "Beach",
              "Photography"
            ].map((type) => (

              <button
                key={type}
                className={
                  selectedType === type ? "active" : ""
                }
                onClick={() => setSelectedType(type)}
              >
                {type}
              </button>

            ))}

          </div>

          {/* Traveller Grid */}

          <div className="community-grid">

            {filteredPartners.length > 0 ? (

              filteredPartners.map((partner) => (

                <TravelPartnerCard
                  key={partner.id}
                  partner={partner}
                  connected={connections.includes(partner.id)}
                  onConnect={() => handleConnect(partner.id)}
                />

              ))

            ) : (

              <div className="community-empty">

                <Compass size={40} />

                <h3>No travel partners found</h3>

                <p>
                  Try changing your search or filter settings.
                </p>

              </div>

            )}

          </div>

        </div>

      </section>

      {/* Create Travel Post Modal */}

      {showForm && (

        <div
          className="travel-modal-overlay"
          onClick={() => setShowForm(false)}
        >

          <div
            className="travel-post-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="travel-modal-header">

              <div>

                <span>TRIIX COMMUNITY</span>

                <h2>Create Travel Post</h2>

                <p>Find people to join your next adventure.</p>

              </div>

              <button
                type="button"
                onClick={() => setShowForm(false)}
              >
                <X size={21} />
              </button>

            </div>

            <form onSubmit={handleCreatePost}>

              <div className="travel-post-grid">

                <div className="travel-post-field">

                  <label>Destination</label>

                  <input
                    type="text"
                    name="destination"
                    placeholder="e.g. Munnar"
                    value={newPost.destination}
                    onChange={handlePostChange}
                    required
                  />

                </div>

                <div className="travel-post-field">

                  <label>State</label>

                  <input
                    type="text"
                    name="state"
                    placeholder="e.g. Kerala"
                    value={newPost.state}
                    onChange={handlePostChange}
                    required
                  />

                </div>

                <div className="travel-post-field">

                  <label>Departure Location</label>

                  <input
                    type="text"
                    name="departure"
                    placeholder="e.g. Thrissur"
                    value={newPost.departure}
                    onChange={handlePostChange}
                    required
                  />

                </div>

                <div className="travel-post-field">

                  <label>Travel Date</label>

                  <input
                    type="date"
                    name="date"
                    min={getLocalDate()}
                    value={newPost.date}
                    onChange={handlePostChange}
                    required
                  />

                </div>

                <div className="travel-post-field">

                  <label>Duration</label>

                  <input
                    type="text"
                    name="duration"
                    placeholder="e.g. 3 Days"
                    value={newPost.duration}
                    onChange={handlePostChange}
                    required
                  />

                </div>

                <div className="travel-post-field">

                  <label>Budget (₹)</label>

                  <input
                    type="number"
                    name="budget"
                    min="1"
                    placeholder="Enter budget"
                    value={newPost.budget}
                    onChange={handlePostChange}
                    required
                  />

                </div>

                <div className="travel-post-field">

                  <label>Group Size</label>

                  <select
                    name="travellers"
                    value={newPost.travellers}
                    onChange={handlePostChange}
                  >

                    {[1, 2, 3, 4, 5, 6].map((number) => (

                      <option key={number} value={number}>
                        {number} Travellers
                      </option>

                    ))}

                  </select>

                </div>

                <div className="travel-post-field">

                  <label>Travel Style</label>

                  <select
                    name="travelType"
                    value={newPost.travelType}
                    onChange={handlePostChange}
                  >

                    <option value="Adventure">Adventure</option>
                    <option value="Nature">Nature</option>
                    <option value="Beach">Beach</option>
                    <option value="Photography">Photography</option>

                  </select>

                </div>

              </div>

              <div className="travel-post-field">

                <label>About Your Trip</label>

                <textarea
                  name="description"
                  placeholder="Tell other travellers about your plans..."
                  value={newPost.description}
                  onChange={handlePostChange}
                  rows="4"
                  required
                />

              </div>

              <button
                type="submit"
                className="create-post-submit"
              >
                Publish Travel Post
                <Plus size={18} />
              </button>

            </form>

          </div>

        </div>

      )}

    </div>

  );

}

export default TravelPartnersPage;