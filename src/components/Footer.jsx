import './Footer.css';

const STORES = [
  'Chi Nhánh Hồ Chí Minh',
  '273 An Dương Vương, Phường, Chợ Quán, Thành phố Hồ Chí Minh',
  '105 Bà Huyện Thanh Quan, Phường Xuân Hòa, TP. HCM',
  '04 Tôn Đức Thắng, Phường Sài Gòn, TP. HCM',
  
  
];

const POLICIES = [
  'Chính sách bảo mật',
  'FAQ',
  'Chính sách đổi trả',
  'Chính sách vận chuyển',
  'Hướng dẫn đặt hàng'
];

const SOCIALS = [
  { label: 'Facebook', href: '#', username: 'Đặng Thanh Vũ' },
  { label: 'Instagram', href: '#', username: 'Trần Tuấn Khanh' },
  { label: 'Youtube', href: '#', username: 'Trần Thái Hiễn' },
  { label: 'Tiktok', href: '#', username: 'Phan Gia Kiệt' }
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
              <strong>Hotline:</strong> 0123456789
            </p>
            <p>
              <strong>Email:</strong> dangthanhvu19124@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ClothingStore Vietnam. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
