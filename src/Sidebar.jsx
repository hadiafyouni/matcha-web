import "./Sidebar.css";

export default function Sidebar({ isOpen }) {
    return (
        <aside className={isOpen ? "sidebar open" : "sidebar"}>
            <ul className="sidebar-elements">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </aside>
    );
}