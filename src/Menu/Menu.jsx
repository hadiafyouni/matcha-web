import './Menu.css';
import { Link } from 'react-router-dom';
import { matchaItems, accessoriesItems } from "../data";

export default function Menu() {

    return (
        <div className="menu-container">
            <header className="menu-header">
                <h1>Matcha Horikku Menu</h1>
                <p>Hand-crafted flavors from Kyoto to Sydney.</p>
            </header>

            <div className="menu-section">
                <h2 className="section-title">Cups</h2>
                <div className="menu-grid">
                    {matchaItems.map((item) => (
                        <Link to={`/menu/${item.id}`} key={item.id} className="menu-card-link">
                            <div className="menu-card">
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
                        </Link>
                    ))}
                </div>
            </div>

            <div className="menu-section">
                <h2 className="section-title">Matcha Accessories</h2>
                <div className="menu-grid">
                    {accessoriesItems.map((item) => (
                        <Link to={`/menu/${item.id}`} key={item.id} className="menu-card-link">
                            <div className="menu-card">
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
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}