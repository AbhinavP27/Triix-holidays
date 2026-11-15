import { useState } from 'react'

import { motion } from 'framer-motion'

import {
    Users,
    Search,
    MapPin,
    Plus
} from 'lucide-react'

import travelPartners from '../data/travelPartners'

import TravellerCard from './TravellerCard'

import './TravelPartners.css'

function TravelPartners() {

    const [search, setSearch] = useState('')
    const [travelType, setTravelType] = useState('All')

    const filteredPartners = travelPartners.filter((person) => {

        const matchesSearch =
            person.destination.toLowerCase().includes(search.toLowerCase()) ||
            person.departure.toLowerCase().includes(search.toLowerCase())

        const matchesType =
            travelType === 'All' || person.travelType === travelType

        return matchesSearch && matchesType

    })

    return (

        <section className="travel-partners-section">

            <div className="travel-partners-container">

                {/* HEADER */}

                <div className="travel-partners-heading">

                    <div>

                        <span className="section-label">
                            TRAVEL TOGETHER
                        </span>

                        <h2>
                            Find Your <span>Travel Tribe.</span>
                        </h2>

                        <p>
                            Discover people travelling to the same
                            destination and make every journey memorable.
                        </p>

                    </div>

                    <button className="create-trip-btn">
                        <Plus size={18} />
                        Create Travel Post
                    </button>

                </div>


                {/* SEARCH */}

                <div className="partner-search">

                    <div>

                        <Search size={20} />

                        <input
                            type="text"
                            placeholder="Search destination or departure city..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                    </div>

                    <select
                        value={travelType}
                        onChange={(e) => setTravelType(e.target.value)}
                    >

                        <option value="All">All Travel Types</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Nature">Nature</option>
                        <option value="Beach">Beach</option>
                        <option value="Photography">Photography</option>

                    </select>

                </div>


                {/* RESULTS */}

                <div className="partner-results-heading">

                    <h3>
                        Available Travel Partners
                    </h3>

                    <span>
                        {filteredPartners.length} travellers found
                    </span>

                </div>


                {/* CARDS */}

                {filteredPartners.length > 0 ? (

                    <div className="travellers-grid">

                        {filteredPartners.map((traveller, index) => (

                            <motion.div
                                key={traveller.id}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1
                                }}
                            >

                                <TravellerCard traveller={traveller} />

                            </motion.div>

                        ))}

                    </div>

                ) : (

                    <div className="no-partners">

                        <Users size={40} />

                        <h3>No travellers found</h3>

                        <p>Try searching for another destination.</p>

                    </div>

                )}

            </div>

        </section>

    )

}

export default TravelPartners