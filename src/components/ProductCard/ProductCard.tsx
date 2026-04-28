import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Toast from '../Toast';
import './ProductCard.css';

export interface ProductCardProps {
    id: string | number;
    image: string;
    name: string;
    price: string | number;
    description?: string;
    category?: string;
    buttonText?: string;
    onAction?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    from?: string;
}

export default function ProductCard({
    id,
    image,
    name,
    price,
    description,
    category,
    buttonText = "Add to Cart",
    onAction,
    from
}: ProductCardProps) {
    const cart = useCart();
    const [toastOpen, setToastOpen] = useState(false);

    function handleDefaultAction(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault(); // Prevent the Link from navigating
        if (cart) {
            cart.addToCart({ id: Number(id), image, name, price, desc: description || '' });
        }
        setToastOpen(true);
    }

    const handleAction = onAction || handleDefaultAction;

    return (
        <>
            <Link to={`/products/${id}`} state={{ from: from || "products" }} className="product-card-link">
                <div className="product-card">
                    {category && <span className="product-category-tag">{category}</span>}
                    <div className="product-image-container">
                        <img src={image} alt={name} />
                    </div>
                    <div className="product-info">
                        <h3>{name}</h3>
                        {description && <p className="product-desc">{description}</p>}
                        <div className="product-footer">
                            <span className="product-price">{price}</span>
                            <button className="add-to-cart-btn" onClick={handleAction}>
                                {buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
            <Toast
                open={toastOpen}
                onClose={() => setToastOpen(false)}
                message={`${name} added to cart!`}
            />
        </>
    );
}
