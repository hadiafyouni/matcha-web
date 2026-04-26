
import { useParams, Link, useLocation } from 'react-router-dom';
import { matchaItems, accessoriesItems } from '../data';
import PrimaryButton from '../components/PrimaryButton';
import './ProductDetail.css';

export default function ProductDetail() {

    const { id } = useParams();
    const location = useLocation();


    const from = location.state?.from || "menu";
    const backPath = from === "home" ? "/" : "/menu";
    const backLabel = from === "home" ? "Back to Home" : "Back to Menu";


    const allProducts = [...matchaItems, ...accessoriesItems];
    const product = allProducts.find((item) => item.id === parseInt(id));


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

    return (
        <div className="product-detail-container">

            <div className="back-button-container">
                <PrimaryButton
                    component={Link}
                    to={backPath}
                    sx={{
                        width: 'auto',
                        border: 'none',
                        borderRadius: '50px', // Perfect pill shape
                        padding: '8px 24px', // Generous side breathing room
                        backgroundColor: 'rgba(44, 76, 59, 0.05)', // A 5% opacity tint of your matcha green
                        color: '#2c4c3b', // Your deep matcha green
                        fontWeight: 500,
                        fontSize: '0.95rem',
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)', // Ultra-smooth designer animation
                        '&:hover': {
                            border: 'none',
                            backgroundColor: 'rgba(44, 76, 59, 0.12)', // Slightly darker tint on hover
                            color: '#1a251f', // Almost black
                            transform: 'translateX(-6px)' // Smooth slide back
                        }
                    }}
                >

                    {backLabel}
                </PrimaryButton>
            </div>

            <div className="product-detail-grid">

                <div className="product-image-section">
                    <img src={product.image} alt={product.name} />
                </div>

                <div className="product-info-section">
                    <h1>{product.name}</h1>
                    <p className="price">{product.price}</p>
                    <p className="description">{product.desc}</p>

                    <div className="action-area">

                        <PrimaryButton onClick={() => alert(`Added ${product.name} to cart!`)}>
                            Add to Cart
                        </PrimaryButton>
                    </div>
                </div>
            </div>

        </div>
    );
}