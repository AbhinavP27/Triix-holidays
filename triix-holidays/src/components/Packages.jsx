import { motion } from 'framer-motion'

import { ArrowRight } from 'lucide-react'

import packages from '../data/packages'

import PackageCard from './PackageCard'

import './Packages.css'

function Packages() {

    return (

        <section className="packages-section">

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

                    <button className="packages-view-all">
                        View All Packages
                        <ArrowRight size={17} />
                    </button>

                </div>


                {/* PACKAGE GRID */}

                <div className="packages-grid">

                    {packages.map((item, index) => (

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

                </div>

            </div>

        </section>

    )

}

export default Packages