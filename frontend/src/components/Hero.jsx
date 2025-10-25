const Hero = ({ onShopClick }) => {
  const handleShopNow = () => {
    if (typeof onShopClick === 'function') {
      onShopClick();
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">BST MỚI</p>
        <h1 className="hero-title">Streetwear Lifestyle</h1>
        <p className="hero-description">
          ICS mang đến phong cách trẻ trung, năng động với cảm hứng từ văn hóa đường phố.
        </p>
        <div className="hero-actions">
          <button className="primary" type="button" onClick={handleShopNow}>
            MUA NGAY
          </button>
          <button className="secondary" type="button">
            XEM LOOKBOOK
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
