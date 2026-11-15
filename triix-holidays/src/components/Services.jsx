import { motion } from 'framer-motion'

import services from '../data/services'

import ServiceCard from './ServiceCard'

import './Services.css'

function Services() {

    return (

        <section className="services-section">

            <div className="services-container">

                <motion.div
                    className="services-heading"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >

                    <span className="section-label">
                        WHAT WE OFFER
                    </span>

                    <h2>
                        Everything You Need,
                        <span> All in One Place.</span>
                    </h2>

                    <p>
                        From finding the perfect stay to discovering
                        unforgettable experiences, we've got your
                        entire journey covered.
                    </p>

                </motion.div>


                <div className="services-grid">

                    {services.map((service, index) => (

                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08
                            }}
                        >

                            <ServiceCard service={service} />

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>

    )

}

export default Services