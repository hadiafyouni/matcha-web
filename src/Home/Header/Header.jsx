import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header({ isOpen, handleMenuClick }) {
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

                <button className="signin-buttons">
                    Sign in
                </button>
            </nav>
        </header>
    );
}