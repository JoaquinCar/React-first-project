import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import peliculas from '../detalles.json';

interface Pelicula {
  id: number;
  titulo: string;
  imagen: string;
  descripcion: string;
}

interface Noticia {
  id: number;
  title: string;
  body: string;
}

interface HomeProps {
  verDetalle: (pelicula: Pelicula) => void;
}

function Home({ verDetalle }: HomeProps) {
  const [noticias, setNoticias] = useState<Noticia[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res => res.json())
      .then(data => setNoticias(data));
  }, []);

  return (
    <>
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '16px',
        padding: '16px',
      }}>
        {(peliculas as Pelicula[]).map((pelicula) => (
          <MovieCard
            key={pelicula.id}
            title={pelicula.titulo}
            image={pelicula.imagen}
            onVerDetalle={() => verDetalle(pelicula)}
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
