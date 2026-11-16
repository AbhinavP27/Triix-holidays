import { Link } from 'react-router-dom'
import { ArrowUpRight, Compass } from 'lucide-react'
import services from '../data/services'
import '../styles/Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        <Compass size={28} />
                        <span>TRIIX <strong>HOLIDAYS</strong></span>
                    </Link>
                    <p>Thoughtful travel planning, stays, local experiences and the details that bring a holiday together.</p>
                    <Link to="/register" className="footer-plan-link">
                        Plan with Triix <ArrowUpRight size={16} />
                    </Link>
                </div>

                <div className="footer-column">
                    <h3>Travel services</h3>
                    <div className="footer-service-links">
                        {services.map((service) => (
                            <Link key={service.id} to={service.link}>{service.title}</Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Triix Holidays</p>
                <Link to="/#services" className="footer-back-top">Browse services <ArrowUpRight size={15} /></Link>
            </div>
        </footer>
    )
}

export default Footer
