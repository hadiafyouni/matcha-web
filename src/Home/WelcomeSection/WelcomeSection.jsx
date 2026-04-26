import './WelcomeSection.css';
import { Link } from "react-router-dom";
import PrimaryButton from '../../components/PrimaryButton';

export default function WelcomeSection() {
    return (
        <div className="welcome-section">
            <h2>Welcome to MATCHA HORIKKU</h2>
            <p>A place where everything tastes green</p>
            <PrimaryButton component={Link} to="/menu" sx={{ width: 'auto' }}>
                Shop Now
            </PrimaryButton>
        </div>
    );
}
