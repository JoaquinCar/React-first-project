import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    cursor: 'pointer',
    color: isActive ? '#f0c040' : 'white',
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: 'none',
  });

  return (
    <header className="header">
      <div className="header-inner">
        <h1>Cinépolis</h1>
        <nav style={{ display: 'flex', gap: '24px' }}>
          <NavLink to="/" end style={linkStyle}>Inicio</NavLink>
          <NavLink to="/cartelera" style={linkStyle}>Cartelera</NavLink>
          <NavLink to="/alimentos" style={linkStyle}>Alimentos</NavLink>
          <NavLink to="/otros" style={linkStyle}>Otros</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
