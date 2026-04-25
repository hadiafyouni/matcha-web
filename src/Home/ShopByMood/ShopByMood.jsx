import './ShopByMood.css';
import PrimaryButton from '../../components/PrimaryButton';

export default function ShopByMood() {
    return (
        <div className="shop-by-mood-section">
            <h2>Shop by Mood</h2>
            <div className="mood-cards-container">
                <div className="mood-card">
                    <span className="mood-emoji">⚡</span>
                    <h3>Need Focus?</h3>
                    <p>Clean energy for deep work and study sessions without the crash.</p>
                    <PrimaryButton>Find Focus</PrimaryButton>
                </div>
                <div className="mood-card">
                    <span className="mood-emoji">🧘‍♀️</span>
                    <h3>Winding Down?</h3>
                    <p>Soothing, restorative blends for a relaxing afternoon ritual.</p>
                    <PrimaryButton>Relax Now</PrimaryButton>
                </div>
                <div className="mood-card">
                    <span className="mood-emoji">🧁</span>
                    <h3>Sweet Tooth?</h3>
                    <p>Vibrant culinary matcha perfect for baking, smoothies, and lattes.</p>
                    <PrimaryButton>Satisfy Cravings</PrimaryButton>
                </div>
            </div>
        </div>
    );
}
