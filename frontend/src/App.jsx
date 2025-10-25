import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default App;
