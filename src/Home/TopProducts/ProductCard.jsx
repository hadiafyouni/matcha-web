import './ProductCard.css';

export default function ProductCard({ image, name, price, description }) {
    return (
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
    );
}
