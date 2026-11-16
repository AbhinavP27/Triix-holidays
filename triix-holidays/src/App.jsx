import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Destinations from './components/Destinations'
import Packages from './components/Packages'
import SearchResults from './pages/SearchResults'
import TravelPartners from './components/TravelPartners'
import Restaurants from './components/Restaurants'
import Attractions from './components/Attractions'
import Activities from './components/Activities'
import Hotels from './pages/Hotels'
import Rentals from "./pages/Rentals";
import Taxi from "./pages/Taxi";
import TravelPartnersPage from './pages/TravelPartnersPage';
import Guides from './pages/Guides';
import TripPlanner from './pages/TripPlanner';
import Wishlist from "./pages/Wishlist";
import Explore from './pages/Explore';
import ActivitiesPage from './pages/Activities';
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicOnlyRoute from "./components/PublicOnlyRoute";
import DestinationDetails from "./pages/DestinationDetails";
import Booking from "./pages/Booking";
import BookingConfirmation from "./pages/BookingConfirmation";
import Footer from "./components/Footer";


function Home() {

  return (
    <>
      <Hero />
      <Services />
      <Destinations />
      <Packages />
      <TravelPartners />
      <Restaurants />
      <Attractions />
      <Activities />
    </>
  )

}

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/search"
          element={<SearchResults />}
        />
        <Route
          path="/destinations/:id"
          element={<DestinationDetails />}
        />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/taxi" element={<Taxi />} />
        <Route
          path="/travel-partners"
          element={<TravelPartnersPage />}
        />
        <Route path="/guides" element={<Guides />} />
        <Route path="/trip-planner" element={<TripPlanner />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/destinations" element={<Explore />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/dashboard/bookings"
          element={<Dashboard />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        <Route element={<PublicOnlyRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/bookings" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route
          path="/booking/:type/:id"
          element={<Booking />}
        />

        <Route
          path="/booking-confirmation/:bookingId"
          element={<BookingConfirmation />}
        />
        <Route path="/packages" element={<Packages />} />
        <Route path="/community" element={<TravelPartnersPage />} />
      </Routes>
      <Footer/>

    </BrowserRouter>

  )

}

export default App