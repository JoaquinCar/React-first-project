import Tarjeta from '../components/tarjeta';

interface CarteleraProps {
  cambiarVista: (vista: string) => void;
}

function Cartelera({ cambiarVista }: CarteleraProps) {
  return (
    <main style={{
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '16px',
      padding: '16px',
    }}>
      <Tarjeta title="Grown Ups" image="https://image.tmdb.org/t/p/original/r1mDA1SLjw2yiYhhLiAjrd2Pt1l.jpg" onVerDetalle={() => cambiarVista('detalle')} />
      <Tarjeta title="Her" image="https://image.tmdb.org/t/p/original/n1sY9uAsQKOus91A4FtvN3JdHYH.jpg" onVerDetalle={() => cambiarVista('detalle')} />
      <Tarjeta title="Sinners" image="https://image.tmdb.org/t/p/original/jIVa5m9s7bKYdI0KH8wFw1qLxHl.jpg" onVerDetalle={() => cambiarVista('detalle')} />
      <Tarjeta title="One Battle After Another" image="https://image.tmdb.org/t/p/original/iZ1499F6hYxDxiqioy8oSUaxipG.jpg" onVerDetalle={() => cambiarVista('detalle')} />
    </main>
  );
}

export default Cartelera;
