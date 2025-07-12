import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Collection from './pages/CollectionPage/collection';
import KidsSection from './pages/kids-section/KidSection';
import CustomStitching from './pages/CustomPage/custom';
import Contact from './pages/ContactPage/contact';

function App() {
  return (
    <BrowserRouter basename="/La-laam-Project">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/kids-section" element={<KidsSection />} />
        <Route path="/custom" element={<CustomStitching />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;