import { useEffect, useState } from "react";
import { Heart, Trash2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import {
  getWishlist,
  toggleWishlist
} from "../utils/wishlist";

import "./Wishlist.css";

function Wishlist() {

  const [items, setItems] = useState(
    () => getWishlist()
  );

  useEffect(() => {

    const updateItems = () => {
      setItems(getWishlist());
    };

    window.addEventListener(
      "wishlistUpdated",
      updateItems
    );

    return () => {
      window.removeEventListener(
        "wishlistUpdated",
        updateItems
      );
    };

  }, []);

  const removeItem = (item) => {

    toggleWishlist(item);

    setItems(getWishlist());

  };

  const clearWishlist = () => {

    localStorage.setItem(
      "triixWishlist",
      JSON.stringify([])
    );

    window.dispatchEvent(
      new Event("wishlistUpdated")
    );

    setItems([]);

  };

  return (

    <div className="wishlist-page">

      <section className="wishlist-hero">

        <div>
          <span>YOUR TRAVEL COLLECTION</span>

          <h1>
            Your Saved Places
          </h1>

          <p>
            Keep your favourite travel experiences
            together in one place.
          </p>
        </div>

      </section>


      <section className="wishlist-container">

        <div className="wishlist-heading">

          <div>
            <h2>My Wishlist</h2>

            <p>
              {items.length} saved{" "}
              {items.length === 1 ? "item" : "items"}
            </p>
          </div>

          {items.length > 0 && (

            <button
              className="clear-wishlist"
              onClick={clearWishlist}
            >
              <Trash2 size={17} />
              Clear All
            </button>

          )}

        </div>


        {items.length === 0 ? (

          <div className="empty-wishlist">

            <Heart size={55} />

            <h3>Your wishlist is empty</h3>

            <p>
              You haven't saved any destinations
              or activities yet.
            </p>

            <Link
              to="/explore"
              className="explore-wishlist-btn"
            >
              Explore Destinations
            </Link>

          </div>

        ) : (

          <div className="wishlist-grid">

            {items.map((item) => (

              <div
                className="wishlist-card"
                key={item.id}
              >

                <div className="wishlist-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <button
                    className="remove-wishlist"
                    onClick={() => removeItem(item)}
                    aria-label={`Remove ${item.name}`}
                  >
                    <Heart
                      size={19}
                      fill="currentColor"
                    />
                  </button>

                  <span className="wishlist-category">
                    {item.category}
                  </span>

                </div>


                <div className="wishlist-card-content">

                  <h3>{item.name}</h3>

                  <p className="wishlist-location">
                    <MapPin size={15} />
                    {item.location}
                  </p>

                  <div className="wishlist-card-footer">

                    <strong>
                      {item.price !== undefined
                        ? `₹${Number(item.price).toLocaleString("en-IN")}`
                        : "Explore"}
                    </strong>

                    <button
                      onClick={() => removeItem(item)}
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

    </div>

  );
}

export default Wishlist;