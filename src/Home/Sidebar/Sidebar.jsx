import { Link, useLocation } from "react-router-dom"; // 1. Import Link and useLocation
import "./Sidebar.css";

// 2. Add closeSidebar to the props
export default function Sidebar({ isOpen, closeSidebar }) {
    const location = useLocation();

    return (
        <aside className={isOpen ? "sidebar open" : "sidebar"}>
            <ul className="sidebar-elements">
                {/* 3. Wrap items in Links and add the closeSidebar click handler */}
                <li className={location.pathname === "/" ? "active" : ""}>
                    <Link to="/" onClick={closeSidebar}>Home</Link>
                </li>
                <li className={location.pathname === "/menu" ? "active" : ""}>
                    <Link to="/menu" onClick={closeSidebar}>Menu</Link>
                </li>
                <li className={location.pathname === "/story" ? "active" : ""}>
                    <Link to="/story" onClick={closeSidebar}>Our Story</Link>
                </li>
                <li className={location.pathname === "/cart" ? "active" : ""}>
                    <Link to="/cart" onClick={closeSidebar}>Cart</Link>
                </li>
                <li className={location.pathname === "/contact" ? "active" : ""}>
                    <Link to="/contact" onClick={closeSidebar}>Contact</Link>
                </li>
            </ul>
        </aside>
    );
}