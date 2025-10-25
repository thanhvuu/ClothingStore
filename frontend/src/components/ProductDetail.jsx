const ProductDetail = ({ product, onBack }) => {
  const handleBack = () => {
    if (typeof onBack === 'function') {
      onBack();
    }
  };

  return (
    <section className="product-detail">
      <div className="product-detail__container">
        <div className="product-detail__breadcrumb">
          <button type="button" onClick={handleBack}>
            ← Quay lại danh mục
          </button>
        </div>
        <div className="product-detail__layout">
          <div className="product-detail__image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-detail__info">
            <span className="product-detail__category">{product.category}</span>
            <h1 className="product-detail__title">{product.name}</h1>
            <p className="product-detail__price">{product.price}</p>
            <p className="product-detail__description">{product.longDescription}</p>

            <div className="product-detail__meta">
              <div>
                <h3>Kích cỡ</h3>
                <ul className="pill-list">
                  {product.sizes.map((size) => (
                    <li key={size}>{size}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Màu sắc</h3>
                <ul className="pill-list">
                  {product.colors.map((color) => (
                    <li key={color}>{color}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="product-detail__extra">
              <div>
                <h3>Chất liệu</h3>
                <p>{product.materials}</p>
              </div>
              <div>
                <h3>Bảo quản</h3>
                <p>{product.care}</p>
              </div>
            </div>

            <div className="product-detail__features">
              <h3>Điểm nổi bật</h3>
              <ul>
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="product-detail__actions">
              <button type="button" className="primary">
                Thêm vào giỏ hàng
              </button>
              <button type="button" className="secondary" onClick={handleBack}>
                Tiếp tục xem sản phẩm
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
