import {
    MapContainer,
    TileLayer,
    CircleMarker,
    Popup
} from 'react-leaflet'

import { Link } from 'react-router-dom'

import { MapPin, Star } from 'lucide-react'

import destinations from '../data/destinations'

import './TravelMap.css'


function TravelMap() {

    return (

        <section className="travel-map-section">

            <div className="travel-map-heading">

                <div>
                    <span className="map-subtitle">
                        EXPLORE THE WORLD
                    </span>

                    <h2>
                        Discover Destinations on the Map
                    </h2>

                    <p>
                        Explore amazing destinations and find
                        your next travel experience.
                    </p>
                </div>

            </div>


            <div className="travel-map-container">

                <MapContainer
                    center={[20.5937, 78.9629]}
                    zoom={4}
                    scrollWheelZoom={true}
                    className="travel-map"
                >

                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />


                    {destinations.map((destination) => (

                        <CircleMarker
                            key={destination.id}
                            center={[
                                destination.latitude,
                                destination.longitude
                            ]}
                            radius={9}
                            pathOptions={{
                                color: '#ffffff',
                                fillColor: '#FF8A4C',
                                fillOpacity: 1,
                                weight: 3
                            }}
                        >

                            <Popup>

                                <div className="map-popup">

                                    <img
                                        src={destination.image}
                                        alt={destination.name}
                                    />

                                    <h4>
                                        {destination.name}
                                    </h4>

                                    <p>
                                        <MapPin size={14} />
                                        {destination.state}, {destination.country}
                                    </p>

                                    <div className="map-popup-rating">

                                        <Star
                                            size={14}
                                            fill="#FFB547"
                                            color="#FFB547"
                                        />

                                        {destination.rating}

                                    </div>

                                    <Link
                                        to={`/destinations/${destination.id}`}
                                        className="map-popup-button"
                                    >
                                        Explore Destination
                                    </Link>

                                </div>

                            </Popup>

                        </CircleMarker>

                    ))}

                </MapContainer>

            </div>

        </section>

    )

}

export default TravelMap