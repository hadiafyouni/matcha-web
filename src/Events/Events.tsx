import './Events.css';
import { events } from '../events';
import EventCard from './EventCard';

export default function Events() {
    return (
        <div className="events-container">
            <header className="events-hero">
                <h1>Our Events</h1>
                <p className="events-tagline">
                    Exclusive matcha experiences crafted for moments worth savouring.
                </p>
            </header>

            <div className="events-list">
                {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>

            <section className="events-cta">
                <span className="events-cta-emoji">💌</span>
                <h2>Want to attend?</h2>
                <p>Follow us on Instagram for event announcements and exclusive invitations.</p>
                <a
                    href="https://www.instagram.com/matchahorikku/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="events-cta-link"
                >
                    @matchahorikku
                </a>
            </section>
        </div>
    );
}
