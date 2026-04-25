import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header({ isOpen, handleMenuClick }) {
    return (
        <header className="header">
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>

            <nav className="nav">
                <button className="bars-buttons" onClick={handleMenuClick}>
                    <FontAwesomeIcon
                        icon={faBars}
                        className={isOpen ? "bars rotate" : "bars"}
                    />
                </button>

                <button className="signin-buttons">
                    Sign in
                </button>
            </nav>
        </header>
    );
}