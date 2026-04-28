
import { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { accessoriesItems } from '../products';
import PrimaryButton from '../components/PrimaryButton';
import Toast from '../components/Toast';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

export default function ProductDetail() {

    const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const cartContext = useCart();
    const [toastOpen, setToastOpen] = useState(false);


    const from = location.state?.from || "products";
    const backPath = from === "home" ? "/" : "/products";
    const backLabel = from === "home" ? "Back to Home" : "Back to Products";


    const allProducts = [...accessoriesItems];
    const product = allProducts.find((item) => item.id === parseInt(id || "0"));

    function handleAddToCart() {
        if (product && cartContext) {
            cartContext.addToCart(product);
            setToastOpen(true);
        }
    }


    if (!product) {
        return (
            <div className="product-not-found">
                <h2>Product not found.</h2>
                <PrimaryButton component={Link} to="/products" sx={{ width: 'auto', mt: 2 }}>
                    Return to Products
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
                        borderRadius: '50px',
                        padding: '8px 24px',
                        backgroundColor: 'rgba(44, 76, 59, 0.05)',
                        color: '#2c4c3b',
                        fontWeight: 500,
                        fontSize: '0.95rem',
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        '&:hover': {
                            border: 'none',
                            backgroundColor: 'rgba(44, 76, 59, 0.12)',
                            color: '#1a251f',
                            transform: 'translateX(-6px)'
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
                        <PrimaryButton onClick={handleAddToCart}>
                            Add to Cart
                        </PrimaryButton>
                    </div>
                </div>
            </div>

            <Toast
                open={toastOpen}
                onClose={() => setToastOpen(false)}
                message={`${product?.name} added to cart!`}
            />

        </div>
    );
}