import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './MovieCarousel.css';

interface Pelicula {
  id: number;
  titulo: string;
  imagen: string;
  descripcion: string;
}

interface MovieCarouselProps {
  movies: Pelicula[];
  onVerDetalle: (id: number) => void;
}

function MovieCarousel({ movies, onVerDetalle }: MovieCarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={16}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {movies.map((pelicula) => (
        <SwiperSlide key={pelicula.id}>
          <div className="carousel-card" onClick={() => onVerDetalle(pelicula.id)}>
            <img src={pelicula.imagen} alt={pelicula.titulo} />
            <h3>{pelicula.titulo}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MovieCarousel;
