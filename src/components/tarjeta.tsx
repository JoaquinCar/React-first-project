import './tarjeta.css';
import Button from './button';

interface TarjetaProps {
  title: string;
  image: string;
  onVerDetalle: () => void;
}

function Tarjeta({ title, image, onVerDetalle }: TarjetaProps) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
    }}>
      <img
        src={image}
        alt={title}
        style={{ width: '100%', height: '300px', objectFit: 'cover' }}
      />
      <div style={{ padding: '12px', textAlign: 'center' }}>
        <h3>{title}</h3>
        <Button text="Ver detalle" onClick={onVerDetalle} />
      </div>
    </div>
  );
}

export default Tarjeta;
