import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse,
    faStore,
    faCalendarDays,
    faBookOpen,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram as faInstagramBrand } from '@fortawesome/free-brands-svg-icons';
import "./Sidebar.css";

interface SidebarProps {
    isOpen: boolean;
    closeSidebar: () => void;
}

const navItems = [
    { path: "/", label: "Home", icon: faHouse },
    { path: "/products", label: "Products", icon: faStore },
    { path: "/events", label: "Events", icon: faCalendarDays },
    { path: "/story", label: "Our Story", icon: faBookOpen },
    { path: "/contact", label: "Contact", icon: faEnvelope },
];

export default function Sidebar({ isOpen, closeSidebar }: SidebarProps) {
    const location = useLocation();

    return (
        <aside className={isOpen ? "sidebar open" : "sidebar"}>
            <ul className="sidebar-elements">
                {navItems.map((item) => (
                    <li key={item.path} className={location.pathname === item.path ? "active" : ""}>
                        <Link to={item.path} onClick={closeSidebar}>
                            <FontAwesomeIcon icon={item.icon} className="sidebar-icon" />
                            <span className="sidebar-label">{item.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="sidebar-social">
                <a
                    href="https://www.instagram.com/matchahorikku/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <FontAwesomeIcon icon={faInstagramBrand} className="social-icon" />
                    <span className="sidebar-label">@matchahorikku</span>
                </a>
            </div>
        </aside>
    );
}