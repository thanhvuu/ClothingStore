import './ProductGrid.css';

function ProductGrid({ title, subtitle, products, headingId = 'product-grid-heading' }) {
  return (
    <section className="product-grid" aria-labelledby={title ? headingId : undefined}>
      <div className="product-grid__header">
        {title && (
          <h2 className="product-grid__title" id={headingId}>
            {title}
          </h2>
        )}
        {subtitle && <p className="product-grid__subtitle">{subtitle}</p>}
      </div>
      <div className="product-grid__list">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-card__media">
              <img src={product.image} alt={product.name} loading="lazy" />
              {product.badge && <span className="product-card__badge">{product.badge}</span>}
            </div>
            <div className="product-card__info">
              <h3 className="product-card__name">{product.name}</h3>
              <p className="product-card__price">{product.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
