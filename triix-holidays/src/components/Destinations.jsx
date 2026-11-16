import { useMemo, useState } from 'react'

import { motion } from 'framer-motion'

import destinations from '../data/destinations'

import DestinationCard from './DestinationCard'
import { Search, Compass } from 'lucide-react'

import './Destinations.css'

function Destinations() {

    const [activeCategory, setActiveCategory] = useState('All')
    const [search, setSearch] = useState('')
    const [showAll, setShowAll] = useState(false)

    const categories = useMemo(() => [
        'All',
        ...new Set(destinations.map((item) => item.category))
    ], [])

    const filteredDestinations = destinations.filter((item) => {
        const matchesCategory = activeCategory === 'All' || item.category === activeCategory
        const matchesSearch = `${item.name} ${item.state} ${item.category}`
            .toLowerCase()
            .includes(search.toLowerCase().trim())
        return matchesCategory && matchesSearch
    })
    const visibleDestinations = showAll ? filteredDestinations : filteredDestinations.slice(0, 6)

    return (

        <section className="destinations-section" id="destination-list">

            <div className="destinations-container">

                {/* SECTION HEADING */}

                <motion.div
                    className="destinations-heading"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >

                    <div>

                        <span className="section-label">
                            EXPLORE THE WORLD
                        </span>

                        <h2>
                            Popular <span>Destinations</span>
                        </h2>

                        <p>
                            Discover breathtaking places and
                            plan your next unforgettable journey.
                        </p>

                    </div>

                </motion.div>


                <label className="destination-search" htmlFor="destination-search-input">
                    <Search size={18} />
                    <input
                        id="destination-search-input"
                        type="search"
                        placeholder="Search destinations or states"
                        value={search}
                        onChange={(event) => {
                            setSearch(event.target.value)
                            setShowAll(false)
                        }}
                    />
                </label>

                {/* CATEGORY FILTERS */}

                <div className="destination-filters">

                    {categories.map((category) => (

                        <button
                            key={category}
                            className={
                                activeCategory === category
                                    ? 'filter-btn active'
                                    : 'filter-btn'
                            }
                            onClick={() => {
                                setActiveCategory(category)
                                setShowAll(false)
                            }}
                        >

                            {category}

                        </button>

                    ))}

                </div>


                {/* DESTINATION GRID */}

                <div className="destinations-grid" id="destination-grid">

                    {visibleDestinations.map((destination, index) => (

                        <motion.div
                            key={destination.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08
                            }}
                        >

                            <DestinationCard
                                destination={destination}
                            />

                        </motion.div>

                    ))}

                </div>

                {filteredDestinations.length === 0 && (
                    <div className="destination-empty">
                        <Compass size={34} />
                        <h3>No destinations found</h3>
                        <p>Try another name or choose a different category.</p>
                    </div>
                )}


                {/* VIEW ALL */}

                {filteredDestinations.length > 6 && <div className="view-all-container">
                    <button
                        className="view-all-btn"
                        onClick={() => {
                            const nextShowAll = !showAll
                            setShowAll(nextShowAll)
                            if (!nextShowAll) {
                                document.getElementById('destination-list')?.scrollIntoView({ behavior: 'smooth' })
                            }
                        }}
                    >
                        {showAll ? 'Show less' : 'Explore more'}
                    </button>
                </div>}

            </div>

        </section>

    )

}

export default Destinations
