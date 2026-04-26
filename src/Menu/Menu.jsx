import './Menu.css';
import { matchaItems } from "../data";

export default function Menu() {

    return (
        <div className="menu-container">
            <header className="menu-header">
                <h1>Matcha Horikku Menu</h1>
                <p>Hand-crafted flavors from Kyoto to Sydney.</p>
            </header>

            <div className="menu-grid">
                {/* This loop handles 3 items or 300 items exactly the same way */}
                {matchaItems.map((item) => (
                    <div key={item.id} className="menu-card">

                        <div className="image-box">

                            <img src={item.image} alt={item.name} className="menu-image" />

                        </div>

                        <div className="content-box">
                            <div className="menu-title-row">
                                <h3 className="menu-title">{item.name}</h3>
                                <span className="price-tag">{item.price}</span>
                            </div>
                            <p className="menu-description">{item.desc}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}