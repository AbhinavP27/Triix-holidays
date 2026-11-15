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
      </Routes>

    </BrowserRouter>

  )

}

export default App