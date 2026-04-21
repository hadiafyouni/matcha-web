import "./Home.css";
import WelcomeSection from "./WelcomeSection";
import GeneralInfo from "./GeneralInfo";
import ProductCard from "./ProductCard";
import img1 from "./assets/IMG_4549.png";
import img2 from "./assets/IMG_4605.png";
import img3 from "./assets/IMG_4606.png";
import img4 from "./assets/IMG_4607.png";

export default function Home() {
    return (
        <div className="home">
            <WelcomeSection />
            <GeneralInfo />

            <div className="RecommendedProducts">
                <h2>Our Top Products</h2>
                <div className="products-grid">
                    <ProductCard
                        image={img1}
                        name="Classic Matcha"
                        price="$29.99"
                        description="Premium ceremonial grade for an authentic matcha experience."
                    />
                    <ProductCard
                        image={img2}
                        name="Banana Bread"
                        price="$19.99"
                        description="Perfect for baking and making delicious matcha lattes."
                    />
                    <ProductCard
                        image={img3}
                        name="Strawberry Jam"
                        price="$24.99"
                        description="Authentic bamboo whisk and scoop for the perfect froth."
                    />
                    <ProductCard
                        image={img4}
                        name="Vanilla Matcha"
                        price="$45.00"
                        description="Everything you need to begin your matcha journey."
                    />
                </div>
            </div>
        </div>
    )
}