import { useState } from 'react'

import { motion } from 'framer-motion'

import destinations from '../data/destinations'

import DestinationCard from './DestinationCard'
import { Link } from "react-router-dom";

import './Destinations.css'

function Destinations() {

    const [activeCategory, setActiveCategory] = useState('All')

    const categories = [
        'All',
        'Mountains',
        'Beach',
        'Nature',
        'Backwaters'
    ]

    const filteredDestinations =
        activeCategory === 'All'
            ? destinations
            : destinations.filter(
                (item) => item.category === activeCategory
            )

    return (

        <section className="destinations-section">

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
                            onClick={() => setActiveCategory(category)}
                        >

                            {category}

                        </button>

                    ))}

                </div>


                {/* DESTINATION GRID */}

                <div className="destinations-grid">

                    {filteredDestinations.map((destination, index) => (

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


                {/* VIEW ALL */}

                <div className="view-all-container">

                    <button className="view-all-btn">

                        <Link to="/explore" className="explore-all-btn">
                            Explore All Destinations
                        </Link>
                    </button>

                </div>

            </div>

        </section>

    )

}

export default Destinations