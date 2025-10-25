const navigationLinks = [
  { label: 'Shop', type: 'button' },
  { label: 'New Arrivals', href: '#' },
  { label: 'Nam', href: '#' },
  { label: 'Nữ', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Best Seller', href: '#' }
];

const Header = ({ onNavigateHome, onShopClick }) => {
  const handleLogoClick = () => {
    if (typeof onNavigateHome === 'function') {
      onNavigateHome();
    }
  };

  const handleShopClick = () => {
    if (typeof onShopClick === 'function') {
      onShopClick();
    }
  };

  return (
    <header className="header">
      <div className="top-bar">
        <span>Hỗ trợ 24/7: Hotline 0305 808 190</span>
        <span>Freeship đơn hàng &gt; 500.000đ</span>
      </div>
      <div className="nav-bar">
        <div className="logo-area">
          <button
            type="button"
            className="logo"
            aria-label="Trang chủ Clothing Store"
            onClick={handleLogoClick}
          >
            <span className="logo-icon">CS</span>
            <span className="logo-text">logo</span>
          </button>
        </div>
        <nav className="navigation">
          <ul>
            {navigationLinks.map((link) => (
              <li key={link.label}>
                {link.type === 'button' ? (
                  <button type="button" className="link-button" onClick={handleShopClick}>
                    {link.label}
                  </button>
                ) : (
                  <a href={link.href}>{link.label}</a>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="search-area">
          <input type="text" placeholder="Tìm kiếm..." />
        </div>
      </div>
    </header>
  );
};

export default Header;
