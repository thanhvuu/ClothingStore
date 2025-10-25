const ProductGrid = ({ products, onProductSelect }) => {
  const handleSelect = (productId) => {
    if (typeof onProductSelect === 'function') {
      onProductSelect(productId);
    }
  };

  const handleKeyDown = (event, productId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleSelect(productId);
    }
  };

  return (
    <section className="product-section" id="products">
      <div className="section-header">
        <p className="section-subtitle">Sản phẩm mới</p>
        <h2 className="section-title">Danh mục nổi bật</h2>
        <p className="section-description">
          Khám phá hơn 20 thiết kế streetwear được chọn lọc cho mùa này, từ áo khoác utility đến
          phụ kiện đa năng.
        </p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <article
            key={product.id}
            className="product-card"
            onClick={() => handleSelect(product.id)}
            onKeyDown={(event) => handleKeyDown(event, product.id)}
            tabIndex={0}
            role="button"
            aria-label={`Xem chi tiết ${product.name}`}
          >
            <div className="product-card__image">
              <img src={product.image} alt={product.name} loading="lazy" />
            </div>
            <div className="product-card__info">
              <span className="product-card__category">{product.category}</span>
              <h3 className="product-card__name">{product.name}</h3>
              <p className="product-card__description">{product.description}</p>
              <span className="product-card__price">{product.price}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
