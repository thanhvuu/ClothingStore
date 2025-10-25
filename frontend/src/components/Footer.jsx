const storeLocations = [
  'Chi Nhánh Hồ Chí Minh',
  '273 Âu Dương Lân, Phường 03, Quận 8, Thành phố Hồ Chí Minh',
  '45 Tân Đạt, Phường Tân Biên, Thành phố Biên Hòa',
  '10 Đào Duy Từ, Phường 5, Quận 10, TP. HCM'
];

const socialLinks = ['Facebook', 'Instagram', 'TikTok', 'Youtube', 'Twitter'];

const policyLinks = [
  'Chính sách bảo mật',
  'Chính sách vận chuyển',
  'Chính sách đổi trả',
  'Hướng dẫn thanh toán',
  'FAQ'
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Hệ thống cửa hàng</h3>
          <ul>
            {storeLocations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h3>Mạng xã hội</h3>
          <ul>
            {socialLinks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h3>Chính sách</h3>
          <ul>
            {policyLinks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="footer-column contact">
          <h3>Liên hệ</h3>
          <p>Hotline: 0702458798</p>
          <p>Email: dangnhatsanhtk12h2@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 ClothingStore Vietnam. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
