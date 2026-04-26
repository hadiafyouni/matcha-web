// src/ProductDetail.jsx
import { useParams, Link, useLocation } from 'react-router-dom';
import { matchaItems, accessoriesItems } from './data';
import PrimaryButton from './components/PrimaryButton';
import './ProductDetail.css';

export default function ProductDetail() {
    // Pull the dynamic ID from the URL (e.g., /menu/1)
    const { id } = useParams();
    const location = useLocation();

    // Check where the user came from (defaults to "menu")
    const from = location.state?.from || "menu";
    const backPath = from === "home" ? "/" : "/menu";
    const backLabel = from === "home" ? "← Back to Home" : "← Back to Menu";

    // Combine data arrays and search for the specific item
    const allProducts = [...matchaItems, ...accessoriesItems];
    const product = allProducts.find((item) => item.id === parseInt(id));

    // Safety Fallback: If the user types an invalid URL
    if (!product) {
        return (
            <div className="product-not-found">
                <h2>Product not found.</h2>
                <PrimaryButton component={Link} to="/menu" sx={{ width: 'auto', mt: 2 }}>
                    Return to Menu
                </PrimaryButton>
            </div>
        );
    }

    // The Premium Layout
    return (
        <div className="product-detail-container">

            <div className="back-button-container">
                <PrimaryButton
                    component={Link}
                    to={backPath}
                    sx={{ width: 'auto', border: 'none', '&:hover': { border: 'none', backgroundColor: 'transparent', color: '#1a202c' }, padding: 0 }}
                >
                    {backLabel}
                </PrimaryButton>
            </div>

            <div className="product-detail-grid">
                {/* Left Column: Image */}
                <div className="product-image-section">
                    <img src={product.image} alt={product.name} />
                </div>

                {/* Right Column: Info & Action */}
                <div className="product-info-section">
                    <h1>{product.name}</h1>
                    <p className="price">{product.price}</p>
                    <p className="description">{product.desc}</p>

                    <div className="action-area">
                        {/* Standard use of your button for the core action */}
                        <PrimaryButton onClick={() => alert(`Added ${product.name} to cart!`)}>
                            Add to Cart
                        </PrimaryButton>
                    </div>
                </div>
            </div>

        </div>
    );
}