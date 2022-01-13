import { Route, Routes } from 'react-router-dom';
import Footer from './components/Common/Footer';
import Header from './components/Common/Header';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div className="App">
      <Header title="Meu Site!" />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
