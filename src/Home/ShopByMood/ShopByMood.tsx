import './ShopByMood.css';
import PrimaryButton from '../../components/PrimaryButton';
import { Link } from 'react-router-dom';

export default function ShopByMood() {
    return (
        <div className="shop-by-mood-section">
            <h2>Shop by Mood</h2>
            <div className="mood-cards-container">
                <div className="mood-card">
                    <span className="mood-emoji">⚡</span>
                    <h3>Morning Ritual</h3>
                    <p>Start your day with the perfect matcha set — whisk, bowl, and premium powder.</p>
                    <PrimaryButton component={Link} to="/products">Explore Tools</PrimaryButton>
                </div>
                <div className="mood-card">
                    <span className="mood-emoji">🧘‍♀️</span>
                    <h3>Mindful Moments</h3>
                    <p>Discover accessories that elevate your daily matcha ritual into a calming practice.</p>
                    <PrimaryButton component={Link} to="/products">Find Calm</PrimaryButton>
                </div>
                <div className="mood-card">
                    <span className="mood-emoji">🍵</span>
                    <h3>Event Exclusives</h3>
                    <p>Taste our hand-crafted drinks at special Matcha Horikku events near you.</p>
                    <PrimaryButton component={Link} to="/events">See Events</PrimaryButton>
                </div>
            </div>
        </div>
    );
}
