import "./Home.css";
import WelcomeSection from "./WelcomeSection/WelcomeSection";
import GeneralInfo from "./Generalinfo/GeneralInfo";
import ShopByMood from "./ShopByMood/ShopByMood";
import ProductCard from "../components/ProductCard/ProductCard";
import { accessoriesItems } from "../products";


export default function Home() {
    return (
        <div className="home">
            <WelcomeSection />
            <GeneralInfo />

            <div className="RecommendedProducts">
                <h2>Our Top Products</h2>
                <div className="products-grid">
                    {[accessoriesItems[0], accessoriesItems[1]].map((item) => (
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