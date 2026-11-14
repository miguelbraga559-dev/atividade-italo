import Menu from './Menu';

export default function Header() {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '16px',
      padding: '18px 48px',
      backgroundColor: 'rgba(11, 8, 32, 0.92)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid rgba(0, 245, 212, 0.35)',
      boxShadow: '0 4px 24px rgba(123, 47, 247, 0.35)'
    }}>
      <h1
        translate="no"
        style={{
          margin: 0,
          fontSize: '1.8rem',
          letterSpacing: '1px',
          color: '#ffffff',
          textShadow: '0 0 14px rgba(0, 245, 212, 0.45)'
        }}
      >
        <span style={{ color: '#00f5d4' }}>{'<'}Catálogo</span> Tech<span style={{ color: '#7b2ff7' }}>{' />'}</span>
      </h1>
      <Menu />
    </header>
  );
}