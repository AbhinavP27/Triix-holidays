import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

import {
  isSaved,
  toggleWishlist
} from "../utils/wishlist";

function WishlistButton({ item }) {

  const [saved, setSaved] = useState(
    () => isSaved(item.id)
  );

  useEffect(() => {

    const updateWishlist = () => {
      setSaved(isSaved(item.id));
    };

    window.addEventListener(
      "wishlistUpdated",
      updateWishlist
    );

    return () => {
      window.removeEventListener(
        "wishlistUpdated",
        updateWishlist
      );
    };

  }, [item.id]);

  const handleWishlist = (e) => {

    e.preventDefault();
    e.stopPropagation();

    toggleWishlist(item);

    setSaved(isSaved(item.id));
  };

  return (
    <button
      className={`wishlist-button ${
        saved ? "saved" : ""
      }`}
      onClick={handleWishlist}
      aria-label={
        saved ? "Remove from wishlist" : "Add to wishlist"
      }
      title={
        saved ? "Remove from wishlist" : "Add to wishlist"
      }
    >
      <Heart
        size={19}
        fill={saved ? "currentColor" : "none"}
      />
    </button>
  );
}

export default WishlistButton;