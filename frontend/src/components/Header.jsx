const navigationLinks = [
  'Shop',
  'New Arrivals',
  'Nam',
  'Nữ',
  'About Us',
  'Best Seller'
];

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <span>Hỗ trợ 24/7: Hotline 0305 808 190</span>
        <span>Freeship đơn hàng &gt; 500.000đ</span>
      </div>
      <div className="nav-bar">
        <div className="logo-area">
          <div className="logo" aria-label="Clothing Store Logo">
            <span className="logo-icon">CS</span>
            <span className="logo-text">logo</span>
          </div>
        </div>
        <nav className="navigation">
          <ul>
            {navigationLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
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
