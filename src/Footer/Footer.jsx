import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-brand">
                    <h2>Matcha Horikku</h2>
                    <p>A place where everything tastes green.</p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/story">Our Story</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <a
                        href="https://www.instagram.com/matchahorikku/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                        @matchahorikku
                    </a>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Matcha Horikku. All rights reserved.</p>
            </div>
        </footer>
    );
}
