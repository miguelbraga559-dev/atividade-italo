import { Link } from 'react-router-dom';

export default function Menu() {
  const linkStyle = {
    textDecoration: 'none',
    color: '#d9d2f5',
    fontWeight: '600',
    fontSize: '1rem',
    letterSpacing: '0.5px',
    padding: '8px 18px',
    borderRadius: '999px',
    border: '1px solid rgba(123, 47, 247, 0.6)',
    backgroundColor: 'rgba(123, 47, 247, 0.15)',
    display: 'inline-block'
  };

  return (
    <nav translate="no">
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><Link to="/" style={linkStyle}>Início</Link></li>
        <li><Link to="/produtos" style={linkStyle}>Produtos</Link></li>
        <li><Link to="/sobre" style={linkStyle}>Sobre nós</Link></li>
        <li><Link to="/contato" style={linkStyle}>Contacto</Link></li>
      </ul>
    </nav>
  );
}