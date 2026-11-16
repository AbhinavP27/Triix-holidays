import { useEffect, useState } from "react";

import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Camera,
  Save,
  Settings,
  Bell,
  Plane,
  Heart
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Profile.css";

const defaultProfile = {
  name: "Abhinav P",
  email: "abhinav@example.com",
  phone: "",
  location: "Thrissur, Kerala",
  dateOfBirth: "",
  gender: "",
  bio: "Travel enthusiast exploring new destinations.",
  travelStyle: "Adventure",
  favouriteDestination: "Munnar",
  profileImage: "",
  emailNotifications: true,
  bookingNotifications: true,
  promotionalNotifications: false
};

function Profile() {

  const [profile, setProfile] = useState(() => {

    try {
      const saved = localStorage.getItem("triixProfile");

      return saved
        ? { ...defaultProfile, ...JSON.parse(saved) }
        : defaultProfile;

    } catch {
      return defaultProfile;
    }

  });

  const [isEditing, setIsEditing] = useState(false);

  const [savedMessage, setSavedMessage] = useState("");

  const [previewImage, setPreviewImage] = useState(
    profile.profileImage
  );


  useEffect(() => {

    setPreviewImage(profile.profileImage);

  }, [profile.profileImage]);


  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setProfile((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value
    }));

  };


  const handleImageUpload = (e) => {

    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("Please select an image smaller than 2 MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setPreviewImage(reader.result);
      setProfile((previous) => ({
        ...previous,
        profileImage: reader.result
      }));
    };

    reader.readAsDataURL(file);

  };


  const handleSave = (e) => {

    e.preventDefault();

    localStorage.setItem(
      "triixProfile",
      JSON.stringify(profile)
    );

    setIsEditing(false);

    setSavedMessage("Profile updated successfully!");

    setTimeout(() => {
      setSavedMessage("");
    }, 3000);

  };


  const handleCancel = () => {

    try {

      const saved = localStorage.getItem("triixProfile");

      const restored = saved
        ? { ...defaultProfile, ...JSON.parse(saved) }
        : defaultProfile;

      setProfile(restored);
      setPreviewImage(restored.profileImage);
      setIsEditing(false);

    } catch {

      setProfile(defaultProfile);
      setPreviewImage("");
      setIsEditing(false);

    }

  };


  const getInitials = (name) => {

    return name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("");

  };


  return (

    <div className="profile-page">

      {/* HEADER */}

      <section className="profile-header">

        <div>
          <span>ACCOUNT MANAGEMENT</span>

          <h1>My Profile</h1>

          <p>
            Manage your personal information and travel preferences.
          </p>
        </div>

      </section>


      <div className="profile-container">

        {/* PROFILE OVERVIEW */}

        <section className="profile-overview">

          <div className="profile-avatar-wrapper">

            {previewImage ? (

              <img
                src={previewImage}
                alt="Profile"
                className="profile-avatar-image"
              />

            ) : (

              <div className="profile-avatar-placeholder">
                {getInitials(profile.name || "Abhinav P")}
              </div>

            )}

            {isEditing && (

              <label className="profile-camera-btn">

                <Camera size={17} />

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  hidden
                />

              </label>

            )}

          </div>


          <div className="profile-overview-info">

            <h2>{profile.name || "Your Name"}</h2>

            <p>
              <Mail size={15} />
              {profile.email || "No email added"}
            </p>

            <p>
              <MapPin size={15} />
              {profile.location || "Location not added"}
            </p>

            <span className="profile-member-badge">
              TRIIX Traveller
            </span>

          </div>


          <button
            className="profile-edit-btn"
            onClick={() => {
              setSavedMessage("");
              setIsEditing(true);
            }}
          >
            <User size={17} />
            Edit Profile
          </button>

        </section>


        {savedMessage && (

          <div className="profile-success-message">
            {savedMessage}
          </div>

        )}


        {/* PROFILE FORM */}

        <form
          className="profile-form-card"
          onSubmit={handleSave}
        >

          <div className="profile-section-heading">

            <div>
              <h2>Personal Information</h2>

              <p>
                Update your personal details.
              </p>
            </div>

            <User size={22} />

          </div>


          <div className="profile-form-grid">

            <div className="profile-field">

              <label>Full Name</label>

              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                disabled={!isEditing}
                required
              />

            </div>


            <div className="profile-field">

              <label>Email Address</label>

              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                disabled={!isEditing}
                required
              />

            </div>


            <div className="profile-field">

              <label>Phone Number</label>

              <input
                type="tel"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="Enter phone number"
              />

            </div>


            <div className="profile-field">

              <label>Location</label>

              <input
                type="text"
                name="location"
                value={profile.location}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="City, State"
              />

            </div>


            <div className="profile-field">

              <label>Date of Birth</label>

              <input
                type="date"
                name="dateOfBirth"
                value={profile.dateOfBirth}
                onChange={handleChange}
                disabled={!isEditing}
              />

            </div>


            <div className="profile-field">

              <label>Gender</label>

              <select
                name="gender"
                value={profile.gender}
                onChange={handleChange}
                disabled={!isEditing}
              >

                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">
                  Prefer not to say
                </option>

              </select>

            </div>


            <div className="profile-field full-width">

              <label>About Me</label>

              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                disabled={!isEditing}
                rows="4"
                placeholder="Tell us about yourself..."
              />

            </div>

          </div>


          {/* TRAVEL PREFERENCES */}

          <div className="profile-section-heading preference-heading">

            <div>
              <h2>Travel Preferences</h2>

              <p>
                Tell us what kind of travel experiences you enjoy.
              </p>
            </div>

            <Plane size={22} />

          </div>


          <div className="profile-form-grid">

            <div className="profile-field">

              <label>Preferred Travel Style</label>

              <select
                name="travelStyle"
                value={profile.travelStyle}
                onChange={handleChange}
                disabled={!isEditing}
              >

                <option value="Adventure">Adventure</option>
                <option value="Nature">Nature</option>
                <option value="Beach">Beach</option>
                <option value="Photography">Photography</option>
                <option value="Luxury">Luxury</option>
                <option value="Budget">Budget</option>

              </select>

            </div>


            <div className="profile-field">

              <label>Favourite Destination</label>

              <select
                name="favouriteDestination"
                value={profile.favouriteDestination}
                onChange={handleChange}
                disabled={!isEditing}
              >

                <option value="Munnar">Munnar</option>
                <option value="Goa">Goa</option>
                <option value="Wayanad">Wayanad</option>
                <option value="Ooty">Ooty</option>
                <option value="Manali">Manali</option>
                <option value="Alleppey">Alleppey</option>

              </select>

            </div>

          </div>


          {/* NOTIFICATIONS */}

          <div className="profile-section-heading preference-heading">

            <div>
              <h2>Notification Preferences</h2>

              <p>
                Choose the notifications you want to receive.
              </p>
            </div>

            <Bell size={22} />

          </div>


          <div className="notification-settings">

            <label className="notification-option">

              <div>
                <strong>Email Notifications</strong>
                <p>Receive general updates through email.</p>
              </div>

              <input
                type="checkbox"
                name="emailNotifications"
                checked={profile.emailNotifications}
                onChange={handleChange}
                disabled={!isEditing}
              />

            </label>


            <label className="notification-option">

              <div>
                <strong>Booking Notifications</strong>
                <p>Receive booking-related updates.</p>
              </div>

              <input
                type="checkbox"
                name="bookingNotifications"
                checked={profile.bookingNotifications}
                onChange={handleChange}
                disabled={!isEditing}
              />

            </label>


            <label className="notification-option">

              <div>
                <strong>Promotional Notifications</strong>
                <p>Receive offers and travel promotions.</p>
              </div>

              <input
                type="checkbox"
                name="promotionalNotifications"
                checked={profile.promotionalNotifications}
                onChange={handleChange}
                disabled={!isEditing}
              />

            </label>

          </div>


          {/* ACTION BUTTONS */}

          {isEditing && (

            <div className="profile-actions">

              <button
                type="button"
                className="profile-cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="profile-save-btn"
              >
                <Save size={17} />
                Save Changes
              </button>

            </div>

          )}

        </form>


        {/* QUICK LINKS */}

        <section className="profile-quick-links">

          <Link to="/wishlist">
            <Heart size={20} />
            My Wishlist
          </Link>

          <Link to="/dashboard">
            <Settings size={20} />
            Dashboard Settings
          </Link>

        </section>

      </div>

    </div>

  );

}

export default Profile;