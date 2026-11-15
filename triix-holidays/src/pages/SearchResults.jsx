import { useSearchParams } from 'react-router-dom'

import destinations from '../data/destinations'

function SearchResults() {

    const [searchParams] = useSearchParams()

    const destinationName = searchParams.get('destination')
    const date = searchParams.get('date')
    const travellers = searchParams.get('travellers')

    const destination = destinations.find(
        (item) => item.name === destinationName
    )

    if (!destination) {
        return <h2 className="text-center mt-5">Destination not found</h2>
    }

    return (

        <div className="container py-5">

            <h2>Explore {destination.name}</h2>

            <p>
                {destination.state}, {destination.country}
            </p>

            <div className="card shadow-sm mt-4">

                <img
                    src={destination.image}
                    alt={destination.name}
                    style={{
                        height: '350px',
                        objectFit: 'cover'
                    }}
                />

                <div className="card-body">

                    <h3>{destination.name}</h3>

                    <p>Category: {destination.category}</p>

                    <p>Travel date: {date || 'Not selected'}</p>

                    <p>Travellers: {travellers}</p>

                    <h5>
                        Starting from ₹{destination.price}
                    </h5>

                </div>

            </div>

        </div>

    )

}

export default SearchResults