import SmoothScroll from './components/SmoothScroll';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './sections/Hero';
import Values from './sections/Values';

import Footer from './sections/Footer';
import Founder from './sections/Founder';
import Programs from './sections/Programs';
import Shop from './sections/Shop';
import Notice from './sections/Notice';
import Contact from './sections/Contact';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="bg-paper min-h-screen text-ink selection:bg-stone-200 selection:text-ink">
      <SmoothScroll />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/intro" element={<><Values /><Founder /></>} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/program" element={<Programs />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

