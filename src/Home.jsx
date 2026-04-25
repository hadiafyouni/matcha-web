import "./Home.css";
import WelcomeSection from "./WelcomeSection";
import GeneralInfo from "./GeneralInfo";
import ShopByMood from "./ShopByMood";
import ProductCard from "./ProductCard";
import img1 from "./assets/IMG_15.png";
import img2 from "./assets/IMG_13.png";


export default function Home({ isOpen }) {
    return (
        <div className={`home ${isOpen ? 'blurred' : ''}`}>
            <WelcomeSection />
            <GeneralInfo />

            <div className="RecommendedProducts">
                <h2>Our Top Products</h2>
                <div className="products-grid">
                    <ProductCard
                        image={img1}
                        name="Classic Matcha"
                        price="$10"
                        description="Premium ceremonial grade for an authentic matcha experience."
                    />
                    <ProductCard
                        image={img2}
                        name="Banana Bread"
                        price="$12"
                        description="Perfect for baking and making delicious matcha lattes."
                    />
                </div>
            </div>

            <ShopByMood />
        </div>
    )
}