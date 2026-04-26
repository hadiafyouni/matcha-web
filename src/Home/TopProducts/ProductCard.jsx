import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Toast from '../../components/Toast';
import './ProductCard.css';

export default function ProductCard({ id, image, name, price, description, from }) {
    const { addToCart } = useCart();
    const [toastOpen, setToastOpen] = useState(false);

    function handleAddToCart(e) {
        e.preventDefault(); // Prevent the Link from navigating
        addToCart({ id, image, name, price, desc: description });
        setToastOpen(true);
    }

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
                        <button className="add-to-cart-btn" onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <Toast
                open={toastOpen}
                onClose={() => setToastOpen(false)}
                message={`${name} added to cart!`}
            />
        </Link>
    );
}
