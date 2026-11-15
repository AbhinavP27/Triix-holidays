import {
    MapPin,
    CalendarDays,
    Users,
    Wallet,
    Clock,
    BadgeCheck,
    Send
} from 'lucide-react'

function TravellerCard({ traveller }) {

    return (

        <div className="traveller-card">

            <div className="traveller-card-header">

                <div className="traveller-profile">

                    <img
                        src={traveller.avatar}
                        alt={traveller.name}
                    />

                    <div>

                        <h3>
                            {traveller.name}

                            {traveller.verified && (
                                <BadgeCheck
                                    size={17}
                                    className="verified-icon"
                                />
                            )}

                        </h3>

                        <span>{traveller.age} years old</span>

                    </div>

                </div>

                <span className="travel-type">
                    {traveller.travelType}
                </span>

            </div>


            <div className="traveller-destination">

                <span>TRAVELLING TO</span>

                <h2>{traveller.destination}</h2>

                <p>
                    <MapPin size={15} />
                    {traveller.state}, India
                </p>

            </div>


            <div className="traveller-details">

                <div>
                    <CalendarDays size={17} />
                    <span>{traveller.date}</span>
                </div>

                <div>
                    <Clock size={17} />
                    <span>{traveller.duration}</span>
                </div>

                <div>
                    <MapPin size={17} />
                    <span>From {traveller.departure}</span>
                </div>

                <div>
                    <Users size={17} />
                    <span>{traveller.travellers} Travellers</span>
                </div>

            </div>


            <p className="traveller-description">
                {traveller.description}
            </p>


            <div className="traveller-card-footer">

                <div>

                    <span>Estimated Budget</span>

                    <h3>
                        <Wallet size={17} />
                        ₹{traveller.budget.toLocaleString('en-IN')}
                    </h3>

                </div>

                <button className="send-request-btn">

                    <Send size={16} />

                    Connect

                </button>

            </div>

        </div>

    )

}

export default TravellerCard