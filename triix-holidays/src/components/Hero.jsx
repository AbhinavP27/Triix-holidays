import { useState } from 'react'

import {
    MapPin,
    CalendarDays,
    Users,
    Search
} from 'lucide-react'

import { motion } from 'framer-motion'

import { useNavigate } from 'react-router-dom'

import destinations from '../data/destinations'


import './Hero.css'

function Hero() {

    const navigate = useNavigate()

    const [destination, setDestination] = useState('')
    const [date, setDate] = useState('')
    const [travellers, setTravellers] = useState(1)

    const [showSuggestions, setShowSuggestions] = useState(false)

    const filteredDestinations = destinations.filter((item) =>
        item.name.toLowerCase().includes(destination.toLowerCase())
    )

    function handleSearch(e) {

        e.preventDefault()

        if (!destination.trim()) {
            alert('Please enter a destination')
            return
        }

        const selected = destinations.find(
            (item) =>
                item.name.toLowerCase() === destination.trim().toLowerCase()
        )

        if (!selected) {
            alert('Please select a valid destination')
            return
        }

        if (date && date < new Date().toLocaleDateString('en-CA')) {
            alert('Please select a future date')
            return
        }

        navigate(
            `/search?destination=${encodeURIComponent(selected.name)}&date=${date}&travellers=${travellers}`
        )

    }

    function selectDestination(name) {

        setDestination(name)
        setShowSuggestions(false)

    }

    return (

        <section className="hero-section">

            <div className="hero-overlay"></div>

            <div className="hero-content">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    
                    <span className="hero-badge">
                        ✦ EXPLORE THE WORLD WITH TRIIX
                    </span>

                    <h1>
                        Discover the World.
                        <br />
                        <span>Create Your Story.</span>
                    </h1>

                    <p>
                        Find incredible destinations, affordable stays,
                        unforgettable experiences and travel partners
                        who share your passion.
                    </p>

                </motion.div>


                <motion.form
                    className="travel-search"
                    onSubmit={handleSearch}
                >

                    {/* DESTINATION */}

                    <div className="search-field destination-field">

                        <MapPin size={22} />

                        <div className="search-input-wrapper">

                            <label>Destination</label>

                            <input
                                type="text"
                                placeholder="Where do you want to go?"
                                value={destination}
                                onChange={(e) => {
                                    setDestination(e.target.value)
                                    setShowSuggestions(true)
                                }}
                                onFocus={() => setShowSuggestions(true)}
                            />

                            {showSuggestions && destination && (

                                <div className="destination-suggestions">

                                    {filteredDestinations.length > 0 ? (

                                        filteredDestinations.map((item) => (

                                            <div
                                                key={item.id}
                                                onClick={() => selectDestination(item.name)}
                                                className="suggestion-item"
                                            >

                                                <MapPin size={17} />

                                                <div>
                                                    <strong>{item.name}</strong>
                                                    <small>{item.state}, India</small>
                                                </div>

                                            </div>

                                        ))

                                    ) : (

                                        <div className="no-suggestions">
                                            No destinations found
                                        </div>

                                    )}

                                </div>

                            )}

                        </div>

                    </div>


                    {/* DATE */}

                    <div className="search-field">

                        <CalendarDays size={22} />

                        <div>

                            <label>Travel Date</label>

                            <input
                                type="date"
                                min={new Date().toLocaleDateString('en-CA')}
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />

                        </div>

                    </div>


                    {/* TRAVELLERS */}

                    <div className="search-field">

                        <Users size={22} />

                        <div>

                            <label>Travellers</label>

                            <select
                                value={travellers}
                                onChange={(e) =>
                                    setTravellers(Number(e.target.value))
                                }
                            >

                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (

                                    <option key={number} value={number}>
                                        {number} {number === 1 ? 'Traveller' : 'Travellers'}
                                    </option>

                                ))}

                            </select>

                        </div>

                    </div>


                    <button type="submit" className="search-btn">

                        <Search size={20} />
                        Explore

                    </button>

                </motion.form>


                <div className="hero-trust">

                    <span>✓ Affordable Travel</span>
                    <span>✓ Trusted Experiences</span>
                    <span>✓ Travel Together</span>

                </div>

            </div>

        </section>

    )

}

export default Hero