import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'

import packages from '../data/packages'

import PackageCard from './PackageCard'

import './Packages.css'

function Packages() {
    const [searchParams] = useSearchParams()
    const [search, setSearch] = useState(searchParams.get('destination') || '')
    const [showAll, setShowAll] = useState(false)

    const filteredPackages = useMemo(() => {
        const query = search.trim().toLowerCase()
        if (!query) return packages
        return packages.filter((item) =>
            `${item.name} ${item.location} ${item.category}`.toLowerCase().includes(query)
        )
    }, [search])
    const visiblePackages = showAll ? filteredPackages : filteredPackages.slice(0, 6)

    return (

        <section className="packages-section" id="packages-grid">

            <div className="packages-container">

                {/* HEADING */}

                <div className="packages-heading">

                    <div>

                        <span className="section-label">
                            HANDPICKED FOR YOU
                        </span>

                        <h2>
                            Exclusive <span>Travel Packages</span>
                        </h2>

                        <p>
                            Explore amazing destinations with
                            carefully curated travel experiences.
                        </p>

                    </div>

                    <span className="packages-count">{filteredPackages.length} of {packages.length} journeys</span>

                </div>


                <label className="packages-search" htmlFor="package-search">
                    <Search size={18} />
                    <input
                        id="package-search"
                        type="search"
                        placeholder="Search by package or destination"
                        value={search}
                        onChange={(event) => {
                            setSearch(event.target.value)
                            setShowAll(false)
                        }}
                    />
                </label>

                {/* PACKAGE GRID */}

                {filteredPackages.length > 0 ? <div className="packages-grid">

                    {visiblePackages.map((item, index) => (

                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1
                            }}
                        >

                            <PackageCard packageData={item} />

                        </motion.div>

                    ))}

                </div> : (
                    <div className="packages-empty">
                        <h3>No packages found</h3>
                        <p>Try a different destination or clear your search.</p>
                        <button type="button" onClick={() => setSearch('')}>Show all packages</button>
                    </div>
                )}

                {filteredPackages.length > 6 && (
                    <div className="packages-show-more-wrap">
                        <button
                            type="button"
                            className="packages-show-more"
                            onClick={() => {
                                const nextShowAll = !showAll
                                setShowAll(nextShowAll)
                                if (!nextShowAll) {
                                    document.getElementById('packages-grid')?.scrollIntoView({ behavior: 'smooth' })
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

export default Packages
