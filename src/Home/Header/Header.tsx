import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../context/CartContext";

interface HeaderProps {
    isOpen: boolean;
    handleMenuClick: () => void;
}

export default function Header({ isOpen, handleMenuClick }: HeaderProps) {
    const cart = useCart();
    const itemCount = cart ? cart.cartItems.reduce((sum, item) => sum + item.quantity, 0) : 0;

    return (
        <header className="header">
            {/* Aurora glow */}
            <div className="aurora"></div>

            {/* Waves */}
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
            <div className="wave wave3"></div>

            {/* Floating particles */}
            <div className="particle p1"></div>
            <div className="particle p2"></div>
            <div className="particle p3"></div>
            <div className="particle p4"></div>
            <div className="particle p5"></div>

            <nav className="nav">
                <button className="bars-buttons" onClick={handleMenuClick}>
                    <FontAwesomeIcon
                        icon={isOpen ? faXmark : faBars}
                        className={isOpen ? "bars rotate" : "bars"}
                    />
                </button>

                <Link to="/" className="logo-link">
                    <h1 className="logo">Matcha Horikku</h1>
                </Link>

                <div className="header-actions">
                    <Link to="/cart" className="cart-button" aria-label="Shopping cart">
                        <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
                        {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
                    </Link>
                    <Link to="/signin" className="signin-buttons">
                        Sign in
                    </Link>
                </div>
            </nav>
        </header>
    );
}