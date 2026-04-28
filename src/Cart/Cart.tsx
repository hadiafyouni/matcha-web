import './Cart.css';
import { Link } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';
import { useCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

// Helper to extract the numeric value from a price string like "$10" or "$18.00"
function parsePrice(priceStr: string) {
    return parseFloat(priceStr.replace('$', ''));
}

export default function Cart() {
    // Pull cart data and functions from the shared Context
    const cart = useCart();
    if (!cart) return null;
    const { cartItems, increaseQuantity, decreaseQuantity, removeItem } = cart;

    const subtotal = cartItems.reduce((total, item) => total + (parsePrice(String(item.price)) * item.quantity), 0);
    const shipping = cartItems.length > 0 ? 5.00 : 0;
    const total = subtotal + shipping;

    if (cartItems.length === 0) {
        return (
            <div className="cart-empty">
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added any matcha to your cart yet.</p>
                <PrimaryButton component={Link} to="/menu" sx={{ width: 'auto', mt: 3, padding: '12px 30px' }}>
                    Continue Shopping
                </PrimaryButton>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h1 className="cart-title">Your Cart</h1>

            <div className="cart-content">
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="item-image-wrapper">
                                <img src={item.image} alt={item.name} />
                            </div>

                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p className="item-price">{item.price}</p>
                            </div>

                            <div className="item-quantity">
                                <button className="qty-btn" onClick={() => decreaseQuantity(item.id)} aria-label="Decrease quantity">
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <span>{item.quantity}</span>
                                <button className="qty-btn" onClick={() => increaseQuantity(item.id)} aria-label="Increase quantity">
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>

                            <div className="item-total">
                                ${(parsePrice(String(item.price)) * item.quantity).toFixed(2)}
                            </div>

                            <button className="remove-btn" onClick={() => removeItem(item.id)} aria-label="Remove item">
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="summary-divider"></div>
                    <div className="summary-row total">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <PrimaryButton sx={{ mt: 3, padding: '12px', fontSize: '1.1rem' }}>
                        Proceed to Checkout
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
}
