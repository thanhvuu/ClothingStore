import ProductGrid from './ProductGrid.jsx';
import './Cart.css';

function Cart({ items, recommendations }) {
  const total = items.reduce((sum, item) => sum + item.quantity * parsePrice(item.price), 0);
  const formattedTotal = formatCurrency(total);

  return (
    <section className="cart" aria-labelledby="cart-heading">
      <div className="cart__header">
        <h2 id="cart-heading">Giỏ hàng</h2>
        <p>Kiểm tra lại sản phẩm của bạn trước khi thanh toán.</p>
      </div>
      <div className="cart__table" role="table" aria-label="Giỏ hàng">
        <div className="cart__row cart__row--head" role="row">
          <div role="columnheader">Sản phẩm</div>
          <div role="columnheader">Số lượng</div>
          <div role="columnheader">Tổng tiền</div>
          <div role="columnheader">Xóa</div>
        </div>
        {items.map((item) => (
          <div className="cart__row" role="row" key={item.id}>
            <div className="cart__product" role="cell">
              <img src={item.image} alt={item.name} />
              <div>
                <p className="cart__product-name">{item.name}</p>
                <p className="cart__product-price">{item.price}</p>
              </div>
            </div>
            <div className="cart__quantity" role="cell">
              <button type="button" aria-label="Giảm số lượng">
                -
              </button>
              <span>{item.quantity}</span>
              <button type="button" aria-label="Tăng số lượng">
                +
              </button>
            </div>
            <div className="cart__total" role="cell">
              {formatCurrency(item.quantity * parsePrice(item.price))}
            </div>
            <div className="cart__remove" role="cell">
              <button type="button" aria-label={`Xóa ${item.name} khỏi giỏ hàng`}>
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart__summary">
        <p>
          <span>Tổng cộng</span>
          <strong>{formattedTotal}</strong>
        </p>
        <div className="cart__actions">
          <button type="button" className="cart__continue">
            Tiếp tục mua sắm
          </button>
          <button type="button" className="cart__checkout">
            Thanh toán
          </button>
        </div>
      </div>
      <div className="cart__recommendations">
        <h3>Có thể bạn sẽ thích</h3>
        <ProductGrid
          products={recommendations}
          headingId="cart-recommendations-heading"
          title="Các sản phẩm khác"
        />
      </div>
    </section>
  );
}

function parsePrice(price) {
  return Number(price.replace(/[^0-9]/g, '')) || 0;
}

function formatCurrency(value) {
  return new Intl.NumberFormat('vi-VN').format(value) + '₫';
}

export default Cart;
