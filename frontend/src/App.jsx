import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import Cart from './components/Cart.jsx';
import Footer from './components/Footer.jsx';
import {
  featuredProduct,
  shippingAreas,
  newArrivalProducts,
  relatedProducts,
  cartItems,
} from './data/products.js';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ProductGrid
          title="New arrivals"
          subtitle="Khám phá các thiết kế mới nhất của DirtyCoins"
          products={newArrivalProducts}
          headingId="new-arrivals-heading"
        />
        <ProductDetail
          product={featuredProduct}
          shippingAreas={shippingAreas}
          relatedProducts={relatedProducts}
        />
        <Cart items={cartItems} recommendations={relatedProducts} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
