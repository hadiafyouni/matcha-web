import "./Home.css";

export default function Home() {
    return (
        <div className="home">
            <div className="welcome-section">
                <h2>Welcome to MATCHA HORIKKU</h2>
                <p>A place where everything tastes green</p>
                <button>Shop Now</button>
            </div>
            <div className="general-info">
                <div className="info-card">
                    <h3>Sustained Energy</h3>
                    <p>
                        Unlike the jittery "spike and crash" of coffee,
                        matcha contains L-theanine, an amino acid that
                        slows the absorption of caffeine. This results in a calm,
                        focused alertness that typically lasts 4 to 6 hours
                        without the mid-afternoon slump.
                    </p>
                </div>
                <div className="info-card">
                    <h3>High Antioxidant Density</h3>
                    <p>
                        Matcha is a powerhouse of catechins, specifically
                        EGCG (epigallocatechin gallate). Because you consume
                        the entire leaf rather than just the brewed water,
                        you get up to 10 times the antioxidants found in regular green tea,
                        helping to combat oxidative stress.
                    </p>
                </div>
                <div className="info-card">
                    <h3>Metabolic Support</h3>
                    <p>
                        Matcha is often used to naturally support weight management.
                        It has been shown to increase the body's rate of thermogenesis the rate
                        at which your body burns calories making it a clean addition to a healthy lifestyle.
                    </p>
                </div>

            </div>

            <div className="RecommendedProducts">
                <h2></h2>
                <div className="products">
                    <div className="product-card">
                        <img src="" alt="" />
                        <h3></h3>
                        <p></p>
                    </div>
                </div>

            </div>
        </div>
    )
}