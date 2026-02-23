import { useState } from 'react';
import Header from './components/header';
import Home from './pages/Home';
import Cartelera from './pages/Cartelera';
import Detalle from './pages/Detalles';
import Alimentos from './pages/Alimentos';
import Otros from './pages/Otros';

function App() {
  const [vistaActual, setVistaActual] = useState('home');

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header cambiarVista={setVistaActual} />
      {vistaActual === 'home' && <Home cambiarVista={setVistaActual} />}
      {vistaActual === 'cartelera' && <Cartelera cambiarVista={setVistaActual} />}
      {vistaActual === 'detalle' && <Detalle />}
      {vistaActual === 'alimentos' && <Alimentos cambiarVista={setVistaActual} />}
      {vistaActual === 'otros' && <Otros cambiarVista={setVistaActual} />}
    </div>
  );
}

export default App;
