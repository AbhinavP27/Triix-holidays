import { useState } from 'react'

import { motion } from 'framer-motion'

import {
    Search,
    Compass
} from 'lucide-react'

import attractions from '../data/attractions'

import AttractionCard from './AttractionCard'

import './Attractions.css'

function Attractions() {

    const [search, setSearch] = useState('')
    const [activeCategory, setActiveCategory] = useState('All')

    const categories = [
        'All',
        'Nature',
        'Waterfalls',
        'Beach',
        'Historical',
        'Adventure'
    ]

    const filteredAttractions = attractions.filter((item) => {

        const matchesSearch =
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.location.toLowerCase().includes(search.toLowerCase())

        const matchesCategory =
            activeCategory === 'All' ||
            item.category === activeCategory

        return matchesSearch && matchesCategory

    })

    return (

        <section className="attractions-section">

            <div className="attractions-container">

                {/* HEADING */}

                <div className="attractions-heading">

                    <span className="section-label">
                        EXPLORE SOMETHING NEW
                    </span>

                    <h2>
                        Discover Tourist <span>Attractions.</span>
                    </h2>

                    <p>
                        From famous landmarks to hidden gems,
                        discover incredible places worth visiting.
                    </p>

                </div>


                {/* SEARCH */}

                <div className="attraction-search">

                    <Search size={20} />

                    <input
                        type="text"
                        placeholder="Search tourist attractions or locations..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>


                {/* FILTERS */}

                <div className="attraction-filters">

                    {categories.map((category) => (

                        <button
                            key={category}
                            className={
                                activeCategory === category
                                    ? 'attraction-filter active'
                                    : 'attraction-filter'
                            }
                            onClick={() => setActiveCategory(category)}
                        >

                            {category}

                        </button>

                    ))}

                </div>


                {/* RESULTS */}

                <div className="attraction-results">

                    <h3>Popular Attractions</h3>

                    <span>
                        {filteredAttractions.length} places found
                    </span>

                </div>


                {filteredAttractions.length > 0 ? (

                    <div className="attractions-grid">

                        {filteredAttractions.map((attraction, index) => (

                            <motion.div
                                key={attraction.id}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08
                                }}
                            >

                                <AttractionCard
                                    attraction={attraction}
                                />

                            </motion.div>

                        ))}

                    </div>

                ) : (

                    <div className="attraction-empty">

                        <Compass size={40} />

                        <h3>No attractions found</h3>

                        <p>Try another location or category.</p>

                    </div>

                )}

            </div>

        </section>

    )

}

export default Attractions