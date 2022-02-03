import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Common/Footer';
import Header from './components/Common/Header';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Suspense fallback="Loading...">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default App;
