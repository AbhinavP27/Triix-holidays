import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { useToast } from '../context/ToastContext'
import {
  isSaved,
  toggleWishlist
} from "../utils/wishlist";

function WishlistButton({ item }) {

  const { showToast } = useToast();

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

    const wasSaved = isSaved(item.id);

    toggleWishlist(item);

    setSaved(isSaved(item.id));

    if (wasSaved) {
      showToast("Removed from your wishlist", "info");
    } else {
      showToast("Added to your wishlist!", "success");
    }

  };

  return (
    <button
      className={`wishlist-button ${saved ? "saved" : ""
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