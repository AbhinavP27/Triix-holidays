import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
    return (
        <section className="hero-section" aria-labelledby="home-title">
            <div className="hero-overlay" />

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <span className="hero-eyebrow">TRIIX HOLIDAYS · TRAVEL, MADE SIMPLE</span>
                <h1 id="home-title">
                    Your next journey,
                    <br />
                    <span>beautifully planned.</span>
                </h1>
                <p>
                    From the right place to stay to the people and experiences that make a trip,
                    bring every part of your holiday together in one place.
                </p>

                <div className="hero-actions">
                    <a className="hero-primary-action" href="#services">
                        Explore our services <ArrowDown size={17} />
                    </a>
                    <Link className="hero-secondary-action" to="/register">
                        Start planning <ArrowRight size={17} />
                    </Link>
                </div>
            </motion.div>

            <span className="hero-location">A better way to see India</span>
        </section>
    )
}

export default Hero
