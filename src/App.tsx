import { useState } from 'react';
import Header from './components/header';
import Home from './pages/Home';
import Cartelera from './pages/Cartelera';
import Detalle from './pages/Detalles';
import Alimentos from './pages/Alimentos';
import Otros from './pages/Otros';

interface Pelicula {
  id: number;
  titulo: string;
  imagen: string;
  descripcion: string;
}

function App() {
  const [vistaActual, setVistaActual] = useState('home');
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState<Pelicula | null>(null);

  function verDetalle(pelicula: Pelicula) {
    setPeliculaSeleccionada(pelicula);
    setVistaActual('detalle');
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header cambiarVista={setVistaActual} />
      {vistaActual === 'home' && <Home verDetalle={verDetalle} />}
      {vistaActual === 'cartelera' && <Cartelera verDetalle={verDetalle} />}
      {vistaActual === 'detalle' && <Detalle pelicula={peliculaSeleccionada} />}
      {vistaActual === 'alimentos' && <Alimentos cambiarVista={setVistaActual} />}
      {vistaActual === 'otros' && <Otros cambiarVista={setVistaActual} />}
    </div>
  );
}

export default App;
