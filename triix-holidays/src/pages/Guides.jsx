import { useMemo, useState } from "react";

import {
  Search,
  Users,
  Languages,
  Compass
} from "lucide-react";

import guides from "../data/guides";

import GuideCard from "../components/GuideCard";

import "./Guides.css";

function Guides() {

  const [search, setSearch] = useState("");

  const [selectedSpeciality, setSelectedSpeciality] =
    useState("All");

  const [selectedLanguage, setSelectedLanguage] =
    useState("All");

  const [maxPrice, setMaxPrice] = useState(2000);

  const [requests, setRequests] = useState([]);

  const [message, setMessage] = useState("");

  const specialities = [
    "All",
    "Nature & Wildlife",
    "History & Culture",
    "Beach & Adventure",
    "Trekking & Camping",
    "Backwater Tours",
    "Photography Tours"
  ];

  const languages = [
    "All",
    "English",
    "Malayalam",
    "Hindi",
    "Tamil"
  ];

  // Filter Guides

  const filteredGuides = useMemo(() => {

    return guides.filter((guide) => {

      const matchesSearch =
        guide.name.toLowerCase().includes(search.toLowerCase()) ||
        guide.location.toLowerCase().includes(search.toLowerCase()) ||
        guide.speciality.toLowerCase().includes(search.toLowerCase());

      const matchesSpeciality =
        selectedSpeciality === "All" ||
        guide.speciality === selectedSpeciality;

      const matchesLanguage =
        selectedLanguage === "All" ||
        guide.languages.includes(selectedLanguage);

      const matchesPrice =
        guide.pricePerHour <= Number(maxPrice);

      return (
        matchesSearch &&
        matchesSpeciality &&
        matchesLanguage &&
        matchesPrice
      );

    });

  }, [
    search,
    selectedSpeciality,
    selectedLanguage,
    maxPrice
  ]);

  // Booking Request

  function handleRequest(id) {

    if (requests.includes(id)) {
      return;
    }

    setRequests((previous) => [...previous, id]);

    setMessage(
      "Your demo booking request has been created successfully."
    );

  }

  return (

    <div className="guides-page">

      {/* Hero Section */}

      <section className="guides-hero">

        <div className="guides-hero-content">

          <span>EXPLORE WITH LOCAL EXPERTS</span>

          <h1>
            Discover More. <br />
            <span>Travel Like a Local.</span>
          </h1>

          <p>
            Connect with experienced local guides and discover
            hidden places, local culture and unforgettable experiences.
          </p>

        </div>

      </section>

      {/* Guide Listings */}

      <section className="guides-listing">

        <div className="guides-container">

          {/* Heading */}

          <div className="guides-heading">

            <div>

              <span>MEET YOUR LOCAL EXPERTS</span>

              <h2>Explore Local Tour Guides</h2>

              <p>
                Find experienced guides for your next adventure.
              </p>

            </div>

            <div className="guides-count">

              <Users size={18} />

              {filteredGuides.length} Guides Found

            </div>

          </div>

          {/* Success Message */}

          {message && (

            <div className="guide-success-message">

              <span>{message}</span>

              <button onClick={() => setMessage("")}>
                ×
              </button>

            </div>

          )}

          {/* Search and Filters */}

          <div className="guides-filter-box">

            {/* Search */}

            <div className="guide-search">

              <Search size={19} />

              <input
                type="text"
                placeholder="Search guide, location or speciality..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

            </div>

            {/* Speciality */}

            <div className="guide-filter">

              <label>
                <Compass size={15} />
                Speciality
              </label>

              <select
                value={selectedSpeciality}
                onChange={(e) =>
                  setSelectedSpeciality(e.target.value)
                }
              >

                {specialities.map((speciality) => (

                  <option
                    key={speciality}
                    value={speciality}
                  >
                    {speciality}
                  </option>

                ))}

              </select>

            </div>

            {/* Language */}

            <div className="guide-filter">

              <label>
                <Languages size={15} />
                Language
              </label>

              <select
                value={selectedLanguage}
                onChange={(e) =>
                  setSelectedLanguage(e.target.value)
                }
              >

                {languages.map((language) => (

                  <option
                    key={language}
                    value={language}
                  >
                    {language}
                  </option>

                ))}

              </select>

            </div>

            {/* Price */}

            <div className="guide-filter">

              <label>Maximum Hourly Price</label>

              <select
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              >

                <option value="2000">Any Price</option>

                <option value="500">Under ₹500</option>

                <option value="700">Under ₹700</option>

                <option value="800">Under ₹800</option>

                <option value="1000">Under ₹1,000</option>

              </select>

            </div>

          </div>

          {/* Guide Grid */}

          <div className="guides-grid">

            {filteredGuides.length > 0 ? (

              filteredGuides.map((guide) => (

                <GuideCard
                  key={guide.id}
                  guide={guide}
                  requested={requests.includes(guide.id)}
                  onRequest={() => handleRequest(guide.id)}
                />

              ))

            ) : (

              <div className="guides-empty">

                <Compass size={42} />

                <h3>No guides found</h3>

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

export default Guides;