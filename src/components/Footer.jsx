import './Footer.css';

const STORES = [
  'Chi Nhánh Hồ Chí Minh',
  'Phường Sài Gòn - Tầng B1 Vincom Center Đồng Khởi, 72 Lê Thánh Tôn',
  'Phường Sài Gòn - 21 Nguyễn Trãi, Quận 1',
  'Phường Sài Gòn - 212 Nguyễn Trãi, Quận 1',
  'Phường Sài Gòn - Tầng 2 Vạn Hạnh Mall, Quận 10',
  'Phường Sài Gòn - 15 Nguyễn Trãi, Quận 5',
  'Chi Nhánh Hà Nội',
  'Phường Hà Nội - 49 Đại Cồ Việt, Hai Bà Trưng',
  'Phường Hà Nội - Tầng 2 Vincom Bà Triệu',
  'Phường Hà Nội - 18 Đặng Tiến Đông, Đống Đa',
  'Chi Nhánh Đà Nẵng',
  'Phường Đà Nẵng - 262 Lê Duẩn, Thanh Khê',
  'Phường Đà Nẵng - 44 Phan Chu Trinh, Hải Châu'
];

const POLICIES = [
  'Chính sách bảo mật',
  'FAQ',
  'Chính sách đổi trả',
  'Chính sách vận chuyển',
  'Hướng dẫn đặt hàng'
];

const SOCIALS = [
  { label: 'Facebook', href: '#', username: 'DirtyCoins' },
  { label: 'Instagram', href: '#', username: '@dirtycoins.vn' },
  { label: 'Youtube', href: '#', username: 'DirtyCoins Official' },
  { label: 'Tiktok', href: '#', username: '@dirtycoinsvn' }
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h2 className="footer-heading">Hệ Thống Cửa Hàng</h2>
          <ul className="footer-list">
            {STORES.map((store) => (
              <li key={store}>{store}</li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h2 className="footer-heading">Mạng Xã Hội</h2>
          <ul className="footer-list">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a href={social.href}>
                  {social.label}
                  <span className="footer-meta">{social.username}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h2 className="footer-heading">Chính Sách</h2>
          <ul className="footer-list">
            {POLICIES.map((policy) => (
              <li key={policy}>
                <a href="#">{policy}</a>
              </li>
            ))}
          </ul>
          <div className="footer-contact">
            <p>
              <strong>Hotline:</strong> 0933 800 190
            </p>
            <p>
              <strong>Email:</strong> hello@dirtycoins.vn
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
