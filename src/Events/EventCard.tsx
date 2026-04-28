import { useState } from 'react';
import { EventData } from '../events';
import BookingModal from '../components/BookingModal/BookingModal';

interface EventCardProps {
    event: EventData;
}

export default function EventCard({ event }: EventCardProps) {
    const [showBooking, setShowBooking] = useState(false);

    return (
        <>
            <div className="event-card">
                <div className="event-card-header">
                    <div className="event-date-badge">
                        <span className="event-date-icon">🍵</span>
                        <span className="event-date-text">{event.date}</span>
                    </div>
                    <h2 className="event-title">{event.title}</h2>
                    <div className="event-meta">
                        <span className="event-time">🕐 {event.time}</span>
                        <span className="event-location">📍 {event.location}</span>
                    </div>
                    <p className="event-description">{event.description}</p>

                    <div className="event-booking-area">
                        <button
                            className="event-book-btn"
                            onClick={() => setShowBooking(true)}
                        >
                            Reserve Your Spot
                        </button>
                    </div>
                </div>

                <div className="event-drink-menu">
                    <h3 className="drink-menu-title">
                        <span className="drink-menu-leaf">🍃</span>
                        Event Drink Menu
                        <span className="drink-menu-leaf">🍃</span>
                    </h3>
                    <div className="drink-gallery">
                        {event.drinkMenu.map((drink) => (
                            <div key={drink.id} className="drink-gallery-item">
                                <div className="drink-image-wrapper">
                                    <img src={drink.image} alt={drink.name} />
                                </div>
                                <span className="drink-name">{drink.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {showBooking && (
                <BookingModal
                    eventId={event.id}
                    eventTitle={event.title}
                    onClose={() => setShowBooking(false)}
                />
            )}
        </>
    );
}
