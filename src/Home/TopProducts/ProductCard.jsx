import { Link } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard({ id, image, name, price, description, from }) {
    return (
        <Link to={`/menu/${id}`} state={{ from: from || "menu" }} className="product-card-link">
            <div className="product-card">
                <div className="product-image-container">
                    <img src={image} alt={name} />
                </div>
                <div className="product-info">
                    <h3>{name}</h3>
                    <p className="product-desc">{description}</p>
                    <div className="product-footer">
                        <span className="product-price">{price}</span>
                        <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                </div>
            </div>
        </Link>
    );
}
