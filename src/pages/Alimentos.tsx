import Tarjeta from '../components/tarjeta';

interface AlimentosProps {
  cambiarVista: (vista: string) => void;
}

function Alimentos({ cambiarVista }: AlimentosProps) {
  return (
    <main style={{
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '16px',
      padding: '16px',
    }}>
      <Tarjeta title="Coca-Cola" image="https://i.pinimg.com/736x/8c/0b/21/8c0b21344f54ecfe4144e42b5241a010.jpg" onVerDetalle={() => cambiarVista('detalle')} />
      <Tarjeta title="Agua Mineral" image="https://i.pinimg.com/736x/b3/73/ba/b373ba8e9dbd55d9bec7de93d92e919c.jpg" onVerDetalle={() => cambiarVista('detalle')} />
      <Tarjeta title="Hot Dog" image="https://i.pinimg.com/1200x/b4/16/ee/b416ee10abfdeaa923c49faeffa576f2.jpg" onVerDetalle={() => cambiarVista('detalle')} />
      <Tarjeta title="Hamburguesa" image="https://i.pinimg.com/736x/b5/0d/22/b50d22aed638664f17fe53e43680d7c8.jpg" onVerDetalle={() => cambiarVista('detalle')} />
      <Tarjeta title="Palomitas" image="https://i.pinimg.com/1200x/28/be/f5/28bef5a1875e6292f4d6551393943d25.jpg" onVerDetalle={() => cambiarVista('detalle')} />
      <Tarjeta title="Nachos" image="https://i.pinimg.com/736x/83/99/be/8399bedaec8cc6b506c07091812f149e.jpg" onVerDetalle={() => cambiarVista('detalle')} />
    </main>
  );
}

export default Alimentos;
