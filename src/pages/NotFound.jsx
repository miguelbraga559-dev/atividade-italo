import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main style={{
      padding: '64px 20px',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      background: 'linear-gradient(180deg, #0b0820 0%, #1a0f3d 100%)',
      color: '#f4f0ff'
    }}>
      <div style={{
        backgroundColor: 'rgba(20, 16, 48, 0.85)',
        border: '1px solid rgba(0, 245, 212, 0.35)',
        padding: '56px 48px',
        borderRadius: '24px',
        boxShadow: '0 0 40px rgba(123, 47, 247, 0.35)',
        maxWidth: '560px'
      }}>
        <div style={{
          fontSize: '6rem',
          fontWeight: 'bold',
          lineHeight: '1',
          marginBottom: '12px',
          color: '#00f5d4',
          textShadow: '0 0 24px rgba(0, 245, 212, 0.6)'
        }}>
          404
        </div>
        <h2 style={{ fontSize: '2rem', margin: '0 0 14px 0', color: '#ffffff' }}>
          Sinal perdido
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#d9d2f5', lineHeight: '1.7', margin: '0 0 32px 0' }}>
          A página que estás a tentar aceder não existe ou foi movida.
          Volta ao início e continua a explorar o catálogo.
        </p>
        <Link
          to="/"
          style={{
            display: 'inline-block',
            background: 'linear-gradient(90deg, #00f5d4, #7b2ff7)',
            color: '#0b0820',
            padding: '14px 36px',
            textDecoration: 'none',
            borderRadius: '999px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            boxShadow: '0 0 24px rgba(0, 245, 212, 0.45)'
          }}
        >
          ← Voltar ao início
        </Link>
      </div>
    </main>
  );
}