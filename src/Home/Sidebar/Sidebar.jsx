import { Link, useLocation } from "react-router-dom"; // 1. Import Link and useLocation
import "./Sidebar.css";

// 2. Add closeMenu to the props
export default function Sidebar({ isOpen, closeMenu }) {
    const location = useLocation();

    return (
        <aside className={isOpen ? "sidebar open" : "sidebar"}>
            <ul className="sidebar-elements">
                {/* 3. Wrap items in Links and add the closeMenu click handler */}
                <li className={location.pathname === "/" ? "active" : ""}>
                    <Link to="/" onClick={closeMenu}>Home</Link>
                </li>
                <li className={location.pathname === "/menu" ? "active" : ""}>
                    <Link to="/menu" onClick={closeMenu}>Menu</Link>
                </li>
                <li className={location.pathname === "/story" ? "active" : ""}>
                    <Link to="/story" onClick={closeMenu}>Our Story</Link>
                </li>
                <li className={location.pathname === "/contact" ? "active" : ""}>
                    <Link to="/contact" onClick={closeMenu}>Contact</Link>
                </li>
            </ul>
        </aside>
    );
}