import { ArrowUpRight } from 'lucide-react'

import { Link } from 'react-router-dom'

function ServiceCard({ service }) {

    const Icon = service.icon

    return (

        <Link
            to={service.link}
            className="service-card"
        >

            <div
                className="service-icon"
                style={{ color: '#49665e' }}
            >

                <Icon size={28} strokeWidth={1.8} />

            </div>

            <div className="service-content">

                <h3>{service.title}</h3>

                <p>{service.description}</p>

            </div>

            <div className="service-arrow">

                <ArrowUpRight size={20} />

            </div>

        </Link>

    )

}

export default ServiceCard
