import { useState } from 'react'

import { motion } from 'framer-motion'

import { Search, Utensils } from 'lucide-react'

import restaurants from '../data/restaurants'

import RestaurantCard from './RestaurantCard'

import './Restaurants.css'

function Restaurants() {

    const [search, setSearch] = useState('')
    const [activeCuisine, setActiveCuisine] = useState('All')

    const cuisines = [
        'All',
        'Indian',
        'Kerala',
        'Seafood',
        'Cafe',
        'Multi Cuisine'
    ]

    const filteredRestaurants = restaurants.filter((restaurant) => {

        const matchesSearch =
            restaurant.name.toLowerCase().includes(search.toLowerCase()) ||
            restaurant.location.toLowerCase().includes(search.toLowerCase())

        const matchesCuisine =
            activeCuisine === 'All' ||
            restaurant.cuisine === activeCuisine

        return matchesSearch && matchesCuisine

    })

    return (

        <section className="restaurants-section">

            <div className="restaurants-container">

                {/* HEADING */}

                <div className="restaurants-heading">

                    <span className="section-label">
                        TASTE THE JOURNEY
                    </span>

                    <h2>
                        Discover Amazing <span>Restaurants.</span>
                    </h2>

                    <p>
                        Explore local flavours, popular restaurants
                        and unforgettable dining experiences.
                    </p>

                </div>


                {/* SEARCH */}

                <div className="restaurant-search">

                    <Search size={20} />

                    <input
                        type="text"
                        placeholder="Search restaurants or locations..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>


                {/* FILTERS */}

                <div className="restaurant-filters">

                    {cuisines.map((cuisine) => (

                        <button
                            key={cuisine}
                            className={
                                activeCuisine === cuisine
                                    ? 'restaurant-filter active'
                                    : 'restaurant-filter'
                            }
                            onClick={() => setActiveCuisine(cuisine)}
                        >

                            {cuisine}

                        </button>

                    ))}

                </div>


                {/* RESULTS */}

                <div className="restaurant-results">

                    <h3>Popular Restaurants</h3>

                    <span>
                        {filteredRestaurants.length} restaurants found
                    </span>

                </div>


                {filteredRestaurants.length > 0 ? (

                    <div className="restaurants-grid">

                        {filteredRestaurants.map((restaurant, index) => (

                            <motion.div
                                key={restaurant.id}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08
                                }}
                            >

                                <RestaurantCard
                                    restaurant={restaurant}
                                />

                            </motion.div>

                        ))}

                    </div>

                ) : (

                    <div className="restaurant-empty">

                        <Utensils size={40} />

                        <h3>No restaurants found</h3>

                        <p>Try another restaurant or location.</p>

                    </div>

                )}

            </div>

        </section>

    )

}

export default Restaurants