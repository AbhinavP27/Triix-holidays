import { useMemo, useState } from 'react'

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
    const [showAll, setShowAll] = useState(false)

    const categories = useMemo(() => [
        'All',
        ...new Set(attractions.map((item) => item.category))
    ], [])

    const filteredAttractions = attractions.filter((item) => {

        const matchesSearch = `${item.name} ${item.location} ${item.category} ${item.description}`
            .toLowerCase()
            .includes(search.toLowerCase().trim())

        const matchesCategory =
            activeCategory === 'All' ||
            item.category === activeCategory

        return matchesSearch && matchesCategory

    })
    const visibleAttractions = showAll ? filteredAttractions : filteredAttractions.slice(0, 6)

    return (

        <section className="attractions-section" id="popular-attractions">

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
                        onChange={(e) => {
                            setSearch(e.target.value)
                            setShowAll(false)
                        }}
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
                            onClick={() => {
                                setActiveCategory(category)
                                setShowAll(false)
                            }}
                        >

                            {category}

                        </button>

                    ))}

                </div>


                {/* RESULTS */}

                <div className="attraction-results">

                    <h3>Popular Attractions</h3>

                    <span>
                        Showing {visibleAttractions.length} of {filteredAttractions.length} places
                    </span>

                </div>


                    {filteredAttractions.length > 0 ? (

                    <div className="attractions-grid">

                        {visibleAttractions.map((attraction, index) => (

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

                {filteredAttractions.length > 6 && (
                    <div className="attraction-show-more-wrap">
                        <button
                            type="button"
                            className="attraction-show-more"
                            onClick={() => {
                                const nextShowAll = !showAll
                                setShowAll(nextShowAll)
                                if (!nextShowAll) {
                                    document.getElementById('popular-attractions')?.scrollIntoView({ behavior: 'smooth' })
                                }
                            }}
                        >
                            {showAll ? 'Show less' : 'Explore more'}
                        </button>
                    </div>
                )}

            </div>

        </section>

    )

}

export default Attractions
