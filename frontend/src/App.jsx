import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import products from './data/products.js';

const parseProductFromHash = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  const hash = window.location.hash ?? '';
  const match = hash.match(/^#\/products\/([a-z0-9-]+)$/i);
  return match ? match[1] : null;
};

const App = () => {
  const [selectedProductId, setSelectedProductId] = useState(() => parseProductFromHash());

  useEffect(() => {
    const syncFromLocation = () => {
      setSelectedProductId(parseProductFromHash());
    };

    window.addEventListener('popstate', syncFromLocation);
    window.addEventListener('hashchange', syncFromLocation);

    return () => {
      window.removeEventListener('popstate', syncFromLocation);
      window.removeEventListener('hashchange', syncFromLocation);
    };
  }, []);

  useEffect(() => {
    if (!selectedProductId || typeof window === 'undefined') {
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedProductId]);

  const scrollToProducts = () => {
    if (typeof window === 'undefined') {
      return;
    }

    const scroll = () => {
      const section = document.getElementById('products');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    window.requestAnimationFrame(scroll);
  };

  const updateHash = (hash, state = {}) => {
    if (typeof window === 'undefined') {
      return;
    }

    if (window.location.hash === hash) {
      window.history.replaceState(state, '', hash);
    } else {
      window.history.pushState(state, '', hash);
    }
  };

  const handleProductSelect = (productId) => {
    setSelectedProductId(productId);
    updateHash(`#/products/${productId}`, { productId });
  };

  const navigateHome = (options = {}) => {
    setSelectedProductId(null);
    updateHash('#/', {});

    if (options.scrollTo === 'products') {
      setTimeout(() => {
        scrollToProducts();
      }, 80);
    } else if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToProducts = () => {
    navigateHome({ scrollTo: 'products' });
  };

  const selectedProduct = selectedProductId
    ? products.find((product) => product.id === selectedProductId)
    : null;

  return (
    <div className="app">
      <Header onNavigateHome={() => navigateHome()} onShopClick={handleBackToProducts} />
      <main>
        {selectedProductId && !selectedProduct && (
          <div className="product-detail not-found">
            <div className="product-detail__content">
              <h1>Không tìm thấy sản phẩm</h1>
              <p>Sản phẩm bạn tìm kiếm hiện không tồn tại hoặc đã được cập nhật.</p>
              <button type="button" className="primary" onClick={handleBackToProducts}>
                Quay lại danh mục
              </button>
            </div>
          </div>
        )}

        {!selectedProductId && (
          <>
            <Hero onShopClick={() => navigateHome({ scrollTo: 'products' })} />
            <ProductGrid products={products} onProductSelect={handleProductSelect} />
          </>
        )}

        {selectedProduct && (
          <ProductDetail product={selectedProduct} onBack={handleBackToProducts} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
