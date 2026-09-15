import bannerImage from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-small">YOUR DEVELOPER TOOLKIT</p>

          <h1>
            Build your perfect
            <span> Dev Stack</span>
          </h1>

          <p className="hero-description">
            Discover the technologies developers love. Build your stack,
            explore new tools, and create something amazing.
          </p>

          <div className="hero-buttons">
            <a href="#technologies" className="primary-button">
              Explore Technologies →
            </a>

            <a href="#about" className="secondary-button">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={bannerImage} alt="Developer technology stack"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;