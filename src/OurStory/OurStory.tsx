import './OurStory.css';
import { Link } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';
import { img5 } from '../assets';

export default function OurStory() {
    return (
        <div className="story-container">

            <header className="story-hero">
                <h1>Our Story</h1>
                <p className="story-tagline">From the hills of Kyoto to your cup — a journey of passion, purity, and matcha.</p>
            </header>

            <section className="story-section">
                <div className="story-content">
                    <h2>How It All Began</h2>
                    <p>
                        I was first introduced to matcha when a friend made it for me using powder
                        from a grocery store, and I loved it instantly. I began ordering matcha regularly
                        from cafés, often spending more than I realised. Everything changed when another
                        friend introduced me to authentic matcha from Japan. The colour alone was noticeably
                        more vibrant, and the taste was smoother and more refined. From that point on,
                        I couldn’t go back. I started searching for that same high-quality matcha
                        and eventually found the one I use today.
                    </p>
                    <p>
                        What began as sharing it with friends and family quickly grew, especially after
                        encouragement from a family member to turn it into something more. This business
                        was created with a simple goal: to make authentic, high-quality matcha accessible, so
                        people can enjoy its true taste and benefits without the high cost of buying it from
                        cafés every day.
                    </p>
                </div>
                <div className="story-image-wrapper">
                    <img src={img5} alt="Matcha preparation" className="story-image" />
                </div>
            </section>

            <section className="story-values">
                <h2>What We Stand For</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <span className="value-icon">🌱</span>
                        <h3>Purity</h3>
                        <p>100% organic, stone-ground matcha. No fillers, no additives, no shortcuts.</p>
                    </div>
                    <div className="value-card">
                        <span className="value-icon">🤝</span>
                        <h3>Partnership</h3>
                        <p>Direct trade with Japanese farmers ensures fair prices and exceptional quality.</p>
                    </div>
                    <div className="value-card">
                        <span className="value-icon">🍵</span>
                        <h3>Ritual</h3>
                        <p>We believe in slowing down. Every cup is an invitation to pause and be present.</p>
                    </div>
                    <div className="value-card">
                        <span className="value-icon">🌍</span>
                        <h3>Sustainability</h3>
                        <p>Eco-friendly packaging and carbon-conscious shipping from field to doorstep.</p>
                    </div>
                </div>
            </section>

            <section className="story-timeline">
                <h2>Our Journey</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <span className="timeline-year">2023</span>
                            <h3>The First Trip to Kyoto</h3>
                            <p>Our founder visited Uji and discovered the art of ceremonial matcha.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <span className="timeline-year">2024</span>
                            <h3>Matcha Horikku Goes Live</h3>
                            <p>We launched our online store and shipped our first orders to matcha lovers worldwide.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <span className="timeline-year">2025</span>
                            <h3>The Accessories Line</h3>
                            <p>Handcrafted bamboo whisks, ceramic bowls, and scoops joined the collection.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <span className="timeline-year">2026</span>
                            <h3>Growing the Community</h3>
                            <p>New flavors, new partnerships, and a growing family of matcha enthusiasts.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="story-cta">
                <h2>Ready to taste the difference?</h2>
                <p>Explore our carefully curated selection of matcha and accessories.</p>
                <PrimaryButton
                    component={Link}
                    to="/products"
                    sx={{ width: 'auto', padding: '12px 40px', fontSize: '1.1rem' }}
                >
                    Browse Our Products
                </PrimaryButton>
            </section>

        </div>
    );
}
