import './Products.css';
import { accessoriesItems } from "../products";
import ProductCard from "../components/ProductCard/ProductCard";


export default function Products() {
    return (
        <div className="products-container">
            <header className="products-header">
                <h1>Our Products</h1>
                <p>Premium matcha tools and accessories, handpicked for the perfect ritual.</p>
            </header>

            <div className="products-section">
                <h2 className="products-section-title">Matcha Accessories</h2>
                <div className="products-grid">
                    {accessoriesItems.map((item) => (
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            description={item.desc}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
