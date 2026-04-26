import { createContext, useContext, useState } from "react";

// 1. Create the Context — this is like creating a "radio channel"
const CartContext = createContext();

// 2. Create the Provider — this is the "radio station" that broadcasts the cart data
export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    // Add a product to the cart (or increase quantity if it already exists)
    function addToCart(product) {
        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === product.id);
            if (existingItem) {
                // Item already in cart → increase quantity by 1
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // New item → add it with quantity 1
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    }

    // Increase quantity by 1
    function increaseQuantity(id) {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    }

    // Decrease quantity by 1 (remove if it hits 0)
    function decreaseQuantity(id) {
        setCartItems(prev =>
            prev
                .map(item =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter(item => item.quantity > 0)
        );
    }

    // Remove item entirely
    function removeItem(id) {
        setCartItems(prev => prev.filter(item => item.id !== id));
    }

    // 3. Broadcast all cart data and functions to any component that wants them
    return (
        <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, removeItem }}>
            {children}
        </CartContext.Provider>
    );
}

// 4. Custom hook — this is the "radio receiver" components use to tune in
export function useCart() {
    return useContext(CartContext);
}
