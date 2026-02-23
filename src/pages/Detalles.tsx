import { useState } from 'react';

interface Pelicula {
  id: number;
  titulo: string;
  imagen: string;
  descripcion: string;
}

interface DetalleProps {
  pelicula: Pelicula | null;
}

function Detalle({ pelicula }: DetalleProps) {
  const [nombre, setNombre] = useState('');
  const [cantidadBoletos, setCantidadBoletos] = useState(1);
  const [mensaje, setMensaje] = useState('');

  if (!pelicula) {
    return (
      <main style={{ padding: '24px', textAlign: 'center' }}>
        <h2>No hay película seleccionada</h2>
      </main>
    );
  }

  function manejarCompra(e: React.FormEvent) {
    e.preventDefault();
    setMensaje(`Gracias ${nombre}, compraste ${cantidadBoletos} boleto(s) para ${pelicula!.titulo}`);
    setNombre('');
    setCantidadBoletos(1);
  }

  return (
    <main style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>{pelicula.titulo}</h2>
      <img
        src={pelicula.imagen}
        alt={pelicula.titulo}
        style={{ width: '100%', borderRadius: '8px', marginBottom: '16px' }}
      />
      <p>{pelicula.descripcion}</p>

      <hr style={{ margin: '24px 0' }} />

      <h3>Comprar boletos</h3>

      <form onSubmit={manejarCompra}>
        <div style={{ marginBottom: '12px' }}>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{ display: 'block', width: '100%', padding: '8px', marginTop: '4px' }}
            required
          />
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label>Cantidad de boletos:</label>
          <input
            type="number"
            min="1"
            value={cantidadBoletos}
            onChange={(e) => setCantidadBoletos(Number(e.target.value))}
            style={{ display: 'block', width: '100%', padding: '8px', marginTop: '4px' }}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 16px',
            backgroundColor: '#ff9800',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Comprar
        </button>
      </form>

      {mensaje && (
        <p style={{ marginTop: '16px', color: 'green' }}>{mensaje}</p>
      )}
    </main>
  );
}

export default Detalle;
