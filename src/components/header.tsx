import './header.css';

interface HeaderProps {
  cambiarVista: (vista: string) => void;
}

function Header({ cambiarVista }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-inner">
        <h1>Cinépolis</h1>
        <nav style={{ display: 'flex', gap: '24px' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => cambiarVista('home')}>Inicio</span>
          <span style={{ cursor: 'pointer' }} onClick={() => cambiarVista('cartelera')}>Cartelera</span>
          <span style={{ cursor: 'pointer' }} onClick={() => cambiarVista('alimentos')}>Alimentos</span>
          <span style={{ cursor: 'pointer' }} onClick={() => cambiarVista('otros')}>Otros</span>
        </nav>
      </div>
    </header>
  );
}

export default Header;
