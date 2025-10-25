import './Footer.css';

const STORES = [
  '173C Hai Bà Trưng, Q.3, TP.HCM',
  '561 Sư Vạn Hạnh, Q.10, TP.HCM',
  '25 Thái Phiên, Q.Hải Châu, Đà Nẵng',
  '27 Nguyễn Trãi, Q.Hoàn Kiếm, Hà Nội',
];

const POLICIES = [
  'Chính sách bảo mật',
  'Chính sách đổi trả',
  'Phương thức vận chuyển',
  'Điều khoản & điều kiện',
  'Hướng dẫn mua hàng',
];

const SOCIALS = [
  { label: 'Facebook', href: '#', username: '@dirtycoins.official' },
  { label: 'Instagram', href: '#', username: '@dirtycoins' },
  { label: 'YouTube', href: '#', username: 'DirtyCoins® Studio' },
  { label: 'TikTok', href: '#', username: '@dirtycoins.vietnam' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column footer-column--brand">
          <a className="footer-logo" href="#" aria-label="DirtyCoins home">
            <span className="footer-logo__icon">DC</span>
            <span className="footer-logo__text">DirtyCoins</span>
          </a>
          <p>
            DirtyCoins® là thương hiệu streetwear Việt Nam với những sản phẩm mang cảm hứng từ văn hoá đường phố,
            luôn sẵn sàng đồng hành cùng bạn trên mọi hành trình.
          </p>
        </div>
        <div className="footer-column">
          <h2 className="footer-heading">Hệ thống cửa hàng</h2>
          <ul className="footer-list">
            {STORES.map((store) => (
              <li key={store}>{store}</li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h2 className="footer-heading">Chính sách</h2>
          <ul className="footer-list">
            {POLICIES.map((policy) => (
              <li key={policy}>
                <a href="#">{policy}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h2 className="footer-heading">Kết nối DirtyCoins</h2>
          <ul className="footer-list footer-list--social">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a href={social.href}>
                  {social.label}
                  <span className="footer-meta">{social.username}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="footer-contact">
            <p>
              <strong>Hotline:</strong> 0933 800 190
            </p>
            <p>
              <strong>Email:</strong> support@dirtycoins.vn
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DirtyCoins Vietnam. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
