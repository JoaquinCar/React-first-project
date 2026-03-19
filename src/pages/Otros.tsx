import MovieCard from '../components/MovieCard';

function Otros() {
  return (
    <main style={{
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '16px',
      padding: '16px',
    }}>
      <MovieCard title="Promociones" image="https://assets.ejecentral.com.mx/dims4/default/a713754/2147483647/strip/true/crop/1080x1080+0+0/resize/1440x1440!/format/webp/quality/90/?url=https%3A%2F%2Fk3-prod-ejecentral.s3.us-west-2.amazonaws.com%2Fbrightspot%2F95%2F16%2Fecca50444a7ab3f15d908b554bf4%2Fgnawrhjamaev0qv.jpg" onVerDetalle={() => {}} />
      <MovieCard title="Membresías" image="https://cdn2.telediario.mx/uploads/media/2025/02/04/niveles-club-cinepolis-frecuencia-asistes.JPG" onVerDetalle={() => {}} />
      <MovieCard title="Preventas" image="https://palomaynacho.com/wp-content/uploads/2026/01/Viernes-13-pelicula-Cinepolis-scaled.jpg.webp" onVerDetalle={() => {}} />
      <MovieCard title="Formatos Especiales" image="https://static.cinepolis.com/img/comercializacion/1/20194314558689.jpg" onVerDetalle={() => {}} />
    </main>
  );
}

export default Otros;
