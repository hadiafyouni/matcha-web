import "./Home.css";
import WelcomeSection from "./WelcomeSection/WelcomeSection";
import GeneralInfo from "./Generalinfo/GeneralInfo";
import ShopByMood from "./ShopByMood/ShopByMood";
import ProductCard from "./TopProducts/ProductCard";
import { matchaItems } from "../data";


export default function Home({ isOpen }) {
    return (
        <div className="home">
            <WelcomeSection />
            <GeneralInfo />

            <div className="RecommendedProducts">
                <h2>Our Top Products</h2>
                <div className="products-grid">
                    {[matchaItems[0], matchaItems[1]].map((item) => (
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            description={item.desc}
                            from="home"
                        />
                    ))}
                </div>
            </div>

            <ShopByMood />
        </div>
    )
}