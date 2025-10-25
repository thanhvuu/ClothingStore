import ProductGrid from './ProductGrid.jsx';
import './ProductDetail.css';

function ProductDetail({ product, shippingAreas, relatedProducts }) {
  return (
    <section className="product-detail" aria-labelledby="product-detail-heading">
      <div className="product-detail__wrapper">
        <div className="product-detail__gallery">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail__info">
          <p className="product-detail__breadcrumbs">Home / Shop / Headwear</p>
          <h2 className="product-detail__title" id="product-detail-heading">
            {product.name}
          </h2>
          <p className="product-detail__price">{product.price}</p>
          <div className="product-detail__meta">
            <div>
              <span className="product-detail__label">Mã sản phẩm:</span>
              <span>{product.sku}</span>
            </div>
            <div>
              <span className="product-detail__label">Màu sắc:</span>
              <span>{product.colors.join(', ')}</span>
            </div>
            <div>
              <span className="product-detail__label">Kích cỡ:</span>
              <span>{product.sizes.join(', ')}</span>
            </div>
          </div>
          <p className="product-detail__description">{product.description}</p>
          <ul className="product-detail__list">
            {product.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <div className="product-detail__badges">
            {product.highlightBadges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
          <div className="product-detail__actions">
            <button type="button" className="btn btn-secondary">
              Thêm vào giỏ
            </button>
            <button type="button" className="btn btn-primary">
              Mua ngay
            </button>
          </div>
          <div className="product-detail__shipping" aria-label="Khu vực giao hàng">
            <h3>Khu vực giao hàng</h3>
            <ul>
              {shippingAreas.map((area) => (
                <li key={area.name}>
                  <div>
                    <p className="area-name">{area.name}</p>
                    <p className="area-eta">{area.eta}</p>
                  </div>
                  <span className="area-status">{area.status}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="product-detail__related">
        <h3>Các sản phẩm khác</h3>
        <ProductGrid products={relatedProducts} />
      </div>
    </section>
  );
}

export default ProductDetail;
