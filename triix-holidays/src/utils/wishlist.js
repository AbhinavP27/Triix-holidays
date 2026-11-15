const STORAGE_KEY = "triixWishlist";

export const getWishlist = () => {
  try {
    return JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );
  } catch {
    return [];
  }
};

export const isSaved = (id) => {
  return getWishlist().some(
    (item) => item.id === id
  );
};

export const toggleWishlist = (item) => {
  const wishlist = getWishlist();

  const exists = wishlist.some(
    (savedItem) => savedItem.id === item.id
  );

  let updatedWishlist;

  if (exists) {
    updatedWishlist = wishlist.filter(
      (savedItem) => savedItem.id !== item.id
    );
  } else {
    updatedWishlist = [...wishlist, item];
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedWishlist)
  );

  window.dispatchEvent(
    new Event("wishlistUpdated")
  );

  return updatedWishlist;
};