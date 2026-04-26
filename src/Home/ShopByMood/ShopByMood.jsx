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
                    <h3>Need Focus?</h3>
                    <p>Clean energy for deep work and study sessions without the crash.</p>
                    <PrimaryButton component={Link} to="/menu/1">Find Focus</PrimaryButton>
                </div>
                <div className="mood-card">
                    <span className="mood-emoji">🧘‍♀️</span>
                    <h3>Winding Down?</h3>
                    <p>Soothing, restorative blends for a relaxing afternoon ritual.</p>
                    <PrimaryButton component={Link} to="/menu/4">Relax Now</PrimaryButton>
                </div>
                <div className="mood-card">
                    <span className="mood-emoji">🧁</span>
                    <h3>Sweet Tooth?</h3>
                    <p>Vibrant culinary matcha perfect for baking, smoothies, and lattes.</p>
                    <PrimaryButton component={Link} to="/menu/2">Satisfy Cravings</PrimaryButton>
                </div>
            </div>
        </div>
    );
}
