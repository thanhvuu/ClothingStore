import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-tagline">BST MỚI</p>
          <h1 className="hero-title">Streetwear Lifestyle</h1>
          <p className="hero-subtitle">
            CS mang đến phong cách trẻ trung, năng động với cảm hứng từ văn hoá đường phố.
          </p>
          <div className="hero-actions">
            <a href="#" className="hero-button primary">
              Mua ngay
            </a>
            <a href="#" className="hero-button secondary">
              Xem lookbook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
