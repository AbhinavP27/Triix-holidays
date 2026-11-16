import { Compass } from 'lucide-react'

import './EmptyState.css'

function EmptyState({
    title = "Nothing here yet",
    description = "Start exploring to discover something amazing.",
    buttonText,
    onAction
}) {

    return (

        <div className="empty-state">

            <div className="empty-state-icon">
                <Compass size={35} />
            </div>

            <h3>{title}</h3>

            <p>{description}</p>

            {buttonText && (

                <button
                    className="empty-state-button"
                    onClick={onAction}
                >
                    {buttonText}
                </button>

            )}

        </div>

    )

}

export default EmptyState