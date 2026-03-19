import { useNavigate } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import peliculas from '../detalles.json';

function Cartelera() {
  const navigate = useNavigate();

  function irADetalle(id: number) {
    navigate(`/pelicula/${id}`);
  }

  return (
    <main style={{
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '16px',
      padding: '16px',
    }}>
      {peliculas.map((pelicula) => (
        <MovieCard
          key={pelicula.id}
          title={pelicula.titulo}
          image={pelicula.imagen}
          onVerDetalle={() => irADetalle(pelicula.id)}
        />
      ))}
    </main>
  );
}

export default Cartelera;
