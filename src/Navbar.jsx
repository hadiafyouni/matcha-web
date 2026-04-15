import "./Navbar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }
    return (
        <header className="header">
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>

            <nav className="nav">
                <button className="bars-buttons" onClick={handleClick}>
                    <FontAwesomeIcon
                        icon={faBars}
                        className={isOpen ? "bars rotate" : "bars"}
                    />
                </button>

                <button className="signin-buttons" >Sign in</button>


            </nav>
        </header>
    );
}