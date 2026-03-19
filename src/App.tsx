import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import Cartelera from './pages/Cartelera';
import Alimentos from './pages/Alimentos';
import Otros from './pages/Otros';
import Detalle from './pages/Detalles';
import Historia from './pages/Historia';
import Membresias from './pages/Membresias';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartelera" element={<Cartelera />} />
          <Route path="/alimentos" element={<Alimentos />} />
          <Route path="/otros" element={<Otros />} />
          <Route path="/pelicula/:id" element={<Detalle />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/membresias" element={<Membresias />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
