export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#0b0820',
      color: '#f4f0ff',
      padding: '44px 20px',
      marginTop: 'auto',
      textAlign: 'center',
      borderTop: '1px solid rgba(0, 245, 212, 0.35)',
      boxShadow: '0 -4px 24px rgba(123, 47, 247, 0.35)'
    }}>
      <div style={{ marginBottom: '12px' }}>
        <h3
          translate="no"
          style={{
            margin: 0,
            fontSize: '1.5rem',
            letterSpacing: '1px',
            color: '#ffffff',
            textShadow: '0 0 14px rgba(0, 245, 212, 0.45)'
          }}
        >
          <span style={{ color: '#00f5d4' }}>{'<'}Catálogo</span> Tech<span style={{ color: '#7b2ff7' }}>{' />'}</span>
        </h3>
      </div>
      <p style={{ color: '#d9d2f5', fontSize: '0.95rem', margin: '14px 0 0 0', lineHeight: '1.6' }}>
        Hardware de elite para quem programa e joga sem limites.
      </p>
      <p style={{ color: '#8f86b8', fontSize: '0.85rem', margin: '10px 0 0 0' }}>
        &copy; 2026 <span translate="no">Catálogo Tech</span>. Desenvolvido para a Atividade Prática de React.
      </p>
    </footer>
  );
}