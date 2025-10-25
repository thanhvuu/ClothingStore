import './Hero.css';

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__image" role="presentation" />
      <div className="hero__overlay">
        <div className="hero__content">
          <p className="hero__eyebrow">DirtyCoins® 2024 collection</p>
          <h1 className="hero__title" id="hero-heading">
            Streetwear Lifestyle
          </h1>
          <p className="hero__subtitle">
            Những thiết kế đậm chất DirtyCoins, lấy cảm hứng từ văn hoá đường phố Việt Nam.
            Sẵn sàng nâng cấp outfit của bạn.
          </p>
          <div className="hero__actions">
            <a className="hero__button hero__button--primary" href="#new-arrivals-heading">
              Mua ngay
            </a>
            <a className="hero__button hero__button--ghost" href="#">
              Xem lookbook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
