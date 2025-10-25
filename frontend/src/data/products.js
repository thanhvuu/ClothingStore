const products = [
  {
    id: 'urban-flare-hoodie',
    name: 'Urban Flare Hoodie',
    category: 'Áo khoác',
    price: '690.000đ',
    description: 'Áo hoodie form rộng chất nỉ dày, phối màu khói thời thượng.',
    longDescription:
      'Urban Flare Hoodie sử dụng chất nỉ dày dặn kết hợp xử lý chống xù giúp giữ phom bền đẹp. Thân áo phối hai tông màu khói - trắng tạo hiệu ứng chuyển sắc hiện đại, phù hợp cho cả nam và nữ.',
    image:
      'https://images.unsplash.com/photo-1542293787938-4d2226c63dc3?auto=format&fit=crop&w=1200&q=80',
    materials: '80% Cotton, 20% Polyester',
    care: 'Giặt máy chế độ nhẹ, lộn trái khi giặt, phơi nơi thoáng mát.',
    colors: ['Khói Xám', 'Đen'],
    sizes: ['S', 'M', 'L', 'XL'],
    features: [
      'Form oversized dễ phối đồ',
      'Bo tay co giãn đàn hồi tốt',
      'Logo thêu 3D trước ngực'
    ]
  },
  {
    id: 'skyline-cargo-jacket',
    name: 'Skyline Cargo Jacket',
    category: 'Áo khoác',
    price: '890.000đ',
    description: 'Áo khoác cargo đa túi chống nước nhẹ với khóa kéo kim loại.',
    longDescription:
      'Skyline Cargo Jacket được thiết kế từ chất liệu nylon dệt dày, phủ lớp chống nước mỏng cho khả năng cản gió tốt. Các chi tiết dây rút và khóa kéo kim loại giúp tăng tính tiện dụng khi di chuyển.',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80',
    materials: '100% Nylon phủ DWR',
    care: 'Lau sạch bề mặt bằng khăn ẩm, hạn chế giặt máy.',
    colors: ['Olive', 'Đen'],
    sizes: ['S', 'M', 'L'],
    features: [
      '4 túi hộp tiện dụng',
      'Dây rút điều chỉnh ở lai áo',
      'Khóa kéo YKK bền bỉ'
    ]
  },
  {
    id: 'nebula-oversized-tee',
    name: 'Nebula Oversized Tee',
    category: 'Áo thun',
    price: '390.000đ',
    description: 'Áo thun oversize in họa tiết nebula độc đáo.',
    longDescription:
      'Nebula Oversized Tee sử dụng chất cotton 230gsm mềm mịn, in kỹ thuật DTG giúp màu sắc sống động và bền màu. Phom rộng thoải mái cùng họa tiết lấy cảm hứng từ vũ trụ tạo điểm nhấn nổi bật.',
    image:
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80',
    materials: '100% Cotton 230gsm',
    care: 'Giặt máy với nước lạnh, không dùng chất tẩy mạnh.',
    colors: ['Tím Nebula', 'Trắng'],
    sizes: ['S', 'M', 'L', 'XL'],
    features: [
      'Chất liệu cotton dày dặn',
      'In DTG sắc nét',
      'Đường may tỉ mỉ, ít nhăn'
    ]
  },
  {
    id: 'midnight-layered-shirt',
    name: 'Midnight Layered Shirt',
    category: 'Áo sơ mi',
    price: '520.000đ',
    description: 'Áo sơ mi layering với cổ tàu phối nút bọc lạ mắt.',
    longDescription:
      'Midnight Layered Shirt kết hợp thiết kế cổ tàu tối giản với lớp lót mỏng tạo hiệu ứng layering tinh tế. Chất vải rayon thoáng mát, phù hợp mặc đơn lẻ hoặc kết hợp cùng áo khoác nhẹ.',
    image:
      'https://images.unsplash.com/photo-1521572163474-dbf02766c3b3?auto=format&fit=crop&w=1200&q=80',
    materials: '65% Rayon, 35% Polyester',
    care: 'Ủi nhẹ ở nhiệt độ thấp, hạn chế vắt mạnh.',
    colors: ['Đen', 'Xanh Đậm'],
    sizes: ['S', 'M', 'L'],
    features: [
      'Thiết kế cổ tàu gọn gàng',
      'Lớp lót mỏng thoáng khí',
      'Nút bọc cùng tông màu'
    ]
  },
  {
    id: 'alloy-tech-jogger',
    name: 'Alloy Tech Jogger',
    category: 'Quần dài',
    price: '610.000đ',
    description: 'Jogger chất liệu co giãn 4 chiều với dây khóa điều chỉnh.',
    longDescription:
      'Alloy Tech Jogger sử dụng chất vải tổng hợp co giãn đa chiều, kết hợp khóa dây kéo ở ống quần giúp tùy chỉnh phom dáng. Thích hợp cho các hoạt động đường phố hoặc tập luyện nhẹ.',
    image:
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80',
    materials: '90% Polyester, 10% Spandex',
    care: 'Giặt máy nước lạnh, không sấy nhiệt cao.',
    colors: ['Xám Bạc', 'Đen'],
    sizes: ['S', 'M', 'L', 'XL'],
    features: [
      'Co giãn 4 chiều',
      'Túi khóa kéo an toàn',
      'Đai lưng co giãn kèm dây rút'
    ]
  },
  {
    id: 'vertex-denim-jacket',
    name: 'Vertex Denim Jacket',
    category: 'Áo khoác',
    price: '920.000đ',
    description: 'Áo denim wash loang với chi tiết cắt laser hiện đại.',
    longDescription:
      'Vertex Denim Jacket được xử lý wash loang kết hợp cắt laser tạo texture độc đáo. Form unisex dễ phối, lớp vải denim 12oz giữ nhiệt vừa đủ cho thời tiết se lạnh.',
    image:
      'https://images.unsplash.com/photo-1490111718993-d98654ce6cf7?auto=format&fit=crop&w=1200&q=80',
    materials: 'Denim 12oz 100% Cotton',
    care: 'Giặt tay với nước lạnh, không ngâm lâu.',
    colors: ['Xanh Indigo', 'Đen Faded'],
    sizes: ['S', 'M', 'L'],
    features: [
      'Kỹ thuật wash loang thủ công',
      'Đinh tán kim loại cao cấp',
      'Logo da ở thân sau'
    ]
  },
  {
    id: 'horizon-windbreaker',
    name: 'Horizon Windbreaker',
    category: 'Áo khoác nhẹ',
    price: '780.000đ',
    description: 'Áo gió hai lớp chống tia UV với khóa kéo ẩn.',
    longDescription:
      'Horizon Windbreaker có lớp vải ngoài chống tia UV UPF30+, lớp trong mesh thoáng khí. Thiết kế khóa kéo ẩn và túi hông có khóa giúp bảo vệ đồ dùng khi di chuyển.',
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
    materials: 'Polyester tái chế 100%',
    care: 'Giặt máy nhẹ, không sử dụng chất tẩy.',
    colors: ['Cam Cháy', 'Xanh Bạc Hà'],
    sizes: ['S', 'M', 'L', 'XL'],
    features: [
      'Chống tia UV UPF30+',
      'Khóa kéo ẩn liền mạch',
      'Đường viền phản quang'
    ]
  },
  {
    id: 'ember-knit-sweater',
    name: 'Ember Knit Sweater',
    category: 'Áo len',
    price: '640.000đ',
    description: 'Áo len dệt kim họa tiết gân nổi, chất liệu mềm nhẹ.',
    longDescription:
      'Ember Knit Sweater sử dụng sợi acrylic pha len merino cho cảm giác mềm mại, ít xù lông. Họa tiết gân nổi chạy dọc thân áo tạo hiệu ứng thị giác thanh lịch.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    materials: '55% Acrylic, 30% Merino, 15% Nylon',
    care: 'Giặt tay nước lạnh, phơi ngang tránh dão.',
    colors: ['Đỏ Gạch', 'Be'],
    sizes: ['S', 'M', 'L'],
    features: [
      'Sợi len merino mềm mịn',
      'Thiết kế gân nổi tạo điểm nhấn',
      'Cổ bo tròn ôm vừa vặn'
    ]
  },
  {
    id: 'driftwood-chino-pants',
    name: 'Driftwood Chino Pants',
    category: 'Quần dài',
    price: '540.000đ',
    description: 'Quần chino ống đứng với chi tiết gấu xếp ly tinh tế.',
    longDescription:
      'Driftwood Chino Pants sử dụng cotton twill dày dặn kết hợp elastane giúp giữ phom, tạo độ ôm nhẹ ở hông và buông dần xuống ống quần. Phù hợp phối cùng sơ mi hoặc áo thun.',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
    materials: '97% Cotton, 3% Elastane',
    care: 'Giặt máy chế độ nhẹ, ủi nhiệt độ trung bình.',
    colors: ['Nâu Nhạt', 'Xanh Rêu'],
    sizes: ['28', '30', '32', '34'],
    features: [
      'Ống đứng dễ mặc',
      'Lưng quần khóa kéo kim loại',
      'Chất vải twill bền màu'
    ]
  },
  {
    id: 'mirage-sport-hoodie',
    name: 'Mirage Sport Hoodie',
    category: 'Áo khoác',
    price: '720.000đ',
    description: 'Hoodie thể thao phối lưới thoáng khí, mũ trùm sâu.',
    longDescription:
      'Mirage Sport Hoodie kết hợp chất liệu spandex co giãn với mảng lưới mesh ở hai bên sườn tạo sự thông thoáng. Mũ trùm sâu và dây rút phản quang phù hợp cho hoạt động ngoài trời.',
    image:
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80',
    materials: '85% Polyester, 15% Spandex',
    care: 'Giặt tay hoặc máy ở chế độ nhẹ, không sấy nhiệt cao.',
    colors: ['Xanh Navy', 'Đen'],
    sizes: ['S', 'M', 'L', 'XL'],
    features: [
      'Mũ trùm sâu chống gió',
      'Mảng lưới mesh thoáng khí',
      'Khóa kéo dài tới ngực'
    ]
  },
  {
    id: 'pulse-reflective-vest',
    name: 'Pulse Reflective Vest',
    category: 'Áo gile',
    price: '480.000đ',
    description: 'Áo gile phản quang kèm túi zipper trước ngực.',
    longDescription:
      'Pulse Reflective Vest là lựa chọn hoàn hảo cho những buổi đạp xe hoặc chạy bộ ban đêm. Lớp vải phản quang phủ toàn bộ mặt ngoài giúp bạn nổi bật và an toàn hơn trên đường phố.',
    image:
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80',
    materials: '100% Polyester phản quang',
    care: 'Lau sạch bằng khăn ẩm, không ủi.',
    colors: ['Bạc'],
    sizes: ['Free Size'],
    features: [
      'Phản quang toàn diện',
      'Túi zipper trước ngực',
      'Cài khóa bấm dễ dàng'
    ]
  },
  {
    id: 'solstice-linen-shirt',
    name: 'Solstice Linen Shirt',
    category: 'Áo sơ mi',
    price: '560.000đ',
    description: 'Áo sơ mi linen thoáng mát, cổ mở chữ V mềm mại.',
    longDescription:
      'Solstice Linen Shirt sử dụng 100% sợi linen cao cấp, có khả năng thấm hút mồ hôi vượt trội. Thiết kế cổ chữ V mềm mại cùng tay áo lửng tạo cảm giác thoải mái cho mùa hè.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    materials: '100% Linen',
    care: 'Giặt tay, phơi mát, ủi khi áo còn ẩm.',
    colors: ['Trắng Kem', 'Xanh Phấn'],
    sizes: ['S', 'M', 'L'],
    features: [
      'Chất linen thoáng mát',
      'Cổ chữ V nữ tính',
      'Cúc gỗ tự nhiên'
    ]
  },
  {
    id: 'emberline-pleated-skirt',
    name: 'Emberline Pleated Skirt',
    category: 'Chân váy',
    price: '520.000đ',
    description: 'Chân váy xếp pli midi với lưng thun bản lớn.',
    longDescription:
      'Emberline Pleated Skirt có độ xòe nhẹ nhàng nhờ các đường pli đều nhau. Lưng thun bản lớn ôm gọn vòng eo nhưng vẫn tạo cảm giác thoải mái khi vận động.',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80',
    materials: '98% Polyester, 2% Spandex',
    care: 'Giặt tay, phơi treo, không ủi nhiệt cao.',
    colors: ['Nâu Gỗ', 'Đen'],
    sizes: ['S', 'M', 'L'],
    features: [
      'Nếp pli giữ phom lâu',
      'Lưng thun đàn hồi tốt',
      'Độ dài midi tinh tế'
    ]
  },
  {
    id: 'apex-track-pants',
    name: 'Apex Track Pants',
    category: 'Quần thể thao',
    price: '510.000đ',
    description: 'Quần track pants phối sọc phản quang, chất liệu nhẹ.',
    longDescription:
      'Apex Track Pants làm từ vải dệt siêu nhẹ, có khả năng thoát ẩm nhanh. Sọc phản quang chạy dọc ống quần tạo điểm nhấn thể thao cá tính.',
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
    materials: '88% Polyester, 12% Spandex',
    care: 'Giặt máy nhẹ, phơi mát.',
    colors: ['Đen', 'Xanh Than'],
    sizes: ['S', 'M', 'L', 'XL'],
    features: [
      'Thoát ẩm nhanh',
      'Sọc phản quang nổi bật',
      'Ống bo gọn gàng'
    ]
  },
  {
    id: 'aurora-quilted-jacket',
    name: 'Aurora Quilted Jacket',
    category: 'Áo phao nhẹ',
    price: '1.050.000đ',
    description: 'Áo phao chần bông siêu nhẹ, phối màu chuyển sắc Aurora.',
    longDescription:
      'Aurora Quilted Jacket sử dụng sợi polyester tái chế với cấu trúc chần bông ô nhỏ giúp giữ nhiệt tốt mà vẫn nhẹ nhàng. Lớp phủ màu chuyển sắc tạo hiệu ứng aurora bắt mắt.',
    image:
      'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=1200&q=80',
    materials: 'Vỏ 100% Polyester tái chế, ruột bông microfiber',
    care: 'Giặt khô hoặc giặt máy chế độ chuyên dụng cho áo phao.',
    colors: ['Aurora Gradient'],
    sizes: ['S', 'M', 'L'],
    features: [
      'Giữ nhiệt tốt, trọng lượng nhẹ',
      'Hiệu ứng màu chuyển sắc độc đáo',
      'Túi trong chống ẩm'
    ]
  },
  {
    id: 'vivid-gradient-hoodie',
    name: 'Vivid Gradient Hoodie',
    category: 'Áo hoodie',
    price: '760.000đ',
    description: 'Hoodie nhuộm chuyển màu Vivid, vải nỉ chải bông.',
    longDescription:
      'Vivid Gradient Hoodie sử dụng kỹ thuật nhuộm tie-dye kiểm soát tạo dải màu chuyển mượt. Lớp nỉ chải bông bên trong giữ ấm, đồng thời thoáng khí giúp mặc cả ngày.',
    image:
      'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1200&q=80',
    materials: '70% Cotton, 30% Polyester',
    care: 'Giặt riêng sản phẩm màu đậm, tránh phơi trực tiếp dưới nắng gắt.',
    colors: ['Gradient Cam-Tím'],
    sizes: ['S', 'M', 'L', 'XL'],
    features: [
      'Hiệu ứng gradient độc đáo',
      'Nỉ chải bông giữ ấm',
      'Mũ trùm rộng rãi'
    ]
  },
  {
    id: 'onyx-minimal-cap',
    name: 'Onyx Minimal Cap',
    category: 'Phụ kiện',
    price: '260.000đ',
    description: 'Nón lưỡi trai tối giản, khóa kéo kim loại điều chỉnh.',
    longDescription:
      'Onyx Minimal Cap có phom dáng cổ điển với chất vải canvas chống nhăn. Logo thêu tông xuyệt tông và khoá kim loại phía sau giúp điều chỉnh kích thước dễ dàng.',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
    materials: 'Canvas chống nhăn',
    care: 'Vệ sinh bằng bàn chải mềm và khăn ẩm.',
    colors: ['Đen Onyx', 'Xám Tro'],
    sizes: ['Free Size'],
    features: [
      'Chất liệu canvas bền',
      'Khóa kim loại chắc chắn',
      'Logo thêu tối giản'
    ]
  },
  {
    id: 'cascade-utility-bag',
    name: 'Cascade Utility Bag',
    category: 'Túi đeo',
    price: '450.000đ',
    description: 'Túi đeo chéo đa ngăn, dây đai bản lớn êm vai.',
    longDescription:
      'Cascade Utility Bag gồm 3 ngăn chính kèm túi phụ mặt trước giúp sắp xếp đồ dùng gọn gàng. Dây đai bản lớn lót mút êm vai, phù hợp mang theo khi đi làm hoặc dạo phố.',
    image:
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80',
    materials: 'Vải Cordura chống mài mòn',
    care: 'Lau bằng khăn ẩm, hạn chế giặt máy.',
    colors: ['Đen', 'Xanh Rêu'],
    sizes: ['Dung tích 4L'],
    features: [
      'Chất liệu Cordura bền bỉ',
      'Nhiều ngăn tiện dụng',
      'Khóa kéo chống gỉ'
    ]
  },
  {
    id: 'lumen-knit-cardigan',
    name: 'Lumen Knit Cardigan',
    category: 'Áo cardigan',
    price: '680.000đ',
    description: 'Cardigan dệt kim mềm, cúc gỗ tự nhiên.',
    longDescription:
      'Lumen Knit Cardigan sở hữu chất len sợi tổng hợp mềm mại, giữ ấm vừa phải. Thiết kế cổ chữ V kinh điển kết hợp hàng cúc gỗ mang lại vẻ ngoài thanh lịch.',
    image:
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80',
    materials: '50% Viscose, 28% Nylon, 22% Polyester',
    care: 'Giặt tay, không vắt mạnh, phơi ngang.',
    colors: ['Kem Sữa', 'Nâu Hạt Dẻ'],
    sizes: ['S', 'M', 'L'],
    features: [
      'Len mềm nhẹ thoải mái',
      'Cúc gỗ tự nhiên',
      'Túi ẩn hai bên'
    ]
  },
  {
    id: 'ripple-washed-jeans',
    name: 'Ripple Washed Jeans',
    category: 'Quần jeans',
    price: '640.000đ',
    description: 'Quần jeans slim fit wash loang nhẹ, co giãn thoải mái.',
    longDescription:
      'Ripple Washed Jeans sử dụng denim co giãn 2 chiều, xử lý wash loang và cào nhẹ tạo hiệu ứng vintage. Cạp quần trung bình dễ mặc, phù hợp với nhiều dáng người.',
    image:
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80',
    materials: '98% Cotton, 2% Elastane',
    care: 'Giặt máy nước lạnh, lộn trái khi giặt.',
    colors: ['Xanh Bạc'],
    sizes: ['28', '30', '32', '34', '36'],
    features: [
      'Denim co giãn 2 chiều',
      'Hiệu ứng wash vintage',
      'Đường may chắc chắn'
    ]
  }
];

export default products;
