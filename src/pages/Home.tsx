import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import MovieCarousel from '../components/MovieCarousel';
import peliculas from '../detalles.json';

interface Noticia {
  id: number;
  title: string;
  body: string;
}

function Home() {
  const navigate = useNavigate();
  const [noticias, setNoticias] = useState<Noticia[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res => res.json())
      .then(data => setNoticias(data));
  }, []);

  function irADetalle(id: number) {
    navigate(`/pelicula/${id}`);
  }

  return (
    <>
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px' }}>
        <h2>Estrenos</h2>
        <MovieCarousel movies={peliculas} onVerDetalle={irADetalle} />
      </section>

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

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px' }}>
        <h2>Noticias del Cine</h2>
        {noticias.map((noticia) => (
          <div key={noticia.id} style={{
            marginBottom: '16px',
            padding: '16px',
            border: '1px solid #ddd',
            borderRadius: '8px'
          }}>
            <h3>{noticia.title}</h3>
            <p>{noticia.body}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Home;
