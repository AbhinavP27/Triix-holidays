import Destinations from "../components/Destinations";
import Attractions from "../components/Attractions";
import Activities from "../components/Activities";
import TravelMap from '../components/TravelMap'
import "./Explore.css";

function Explore() {
  return (
    <>
      <section className="explore-page-header">
        <h1>Explore the World</h1>
        <p>
          Discover destinations, tourist attractions
          and exciting travel experiences.
        </p>
      </section>

      <Destinations />

      <TravelMap />

      <Attractions />

      <Activities />
    </>
  );
}

export default Explore;