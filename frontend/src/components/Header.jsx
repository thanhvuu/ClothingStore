import { useState } from 'react';
import './Header.css';

const NAV_ITEMS = ['Shop', 'Dragon Ball Z', 'Collabs', 'Contact', 'About Us', 'Best Seller'];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="topbar">
        <span>Hỗ trợ / Mua hàng: <strong>0933 800 190</strong></span>
        <span className="topbar-right">Freeship đơn hàng từ 500.000₫</span>
      </div>
      <div className="navbar">
        <a className="logo" href="#" aria-label="DirtyCoins home">
          <span className="logo__icon">DC</span>
          <span className="logo__text">DirtyCoins</span>
        </a>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a key={item} href="#" className="nav-link">
              {item}
            </a>
          ))}
        </nav>
        <div className="actions">
          <div className="search">
            <input type="text" placeholder="Tìm kiếm" aria-label="Tìm kiếm" />
            <span className="icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5s4.5 2.01 4.5 4.5S11.99 14 9.5 14z" />
              </svg>
            </span>
          </div>
          <button className="icon-button" type="button" aria-label="Account">
            <svg viewBox="0 0 24 24">
              <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
            </svg>
          </button>
          <button className="icon-button" type="button" aria-label="Wishlist">
            <svg viewBox="0 0 24 24">
              <path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.28 2 8.5A5.5 5.5 0 0 1 7.5 3 5.4 5.4 0 0 1 12 5.34 5.4 5.4 0 0 1 16.5 3 5.5 5.5 0 0 1 22 8.5c0 3.78-3.4 6.86-8.55 11.54z" />
            </svg>
          </button>
          <button className="icon-button" type="button" aria-label="Giỏ hàng">
            <svg viewBox="0 0 24 24">
              <path d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM7.15 14h9.9a2 2 0 0 0 1.97-1.64l1.18-6.14A1 1 0 0 0 19.23 5H6.31l-.28-1.44A1 1 0 0 0 5.05 3H2v2h2.31l2.12 10.86A3 3 0 0 0 9.35 18h8.82v-2H9.35a1 1 0 0 1-.98-.8z" />
            </svg>
          </button>
          <button
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            type="button"
            aria-label="Mở menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
