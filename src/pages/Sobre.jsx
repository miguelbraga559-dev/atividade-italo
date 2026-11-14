export default function Sobre() {
  return (
    <main style={{
      padding: '72px 20px',
      minHeight: '80vh',
      background: 'linear-gradient(180deg, #0b0820 0%, #1a0f3d 100%)',
      color: '#f4f0ff'
    }}>
      <div style={{
        maxWidth: '1040px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '48px',
        alignItems: 'center'
      }}>

        <div style={{ flex: '1 1 400px' }}>
          <span style={{
            display: 'inline-block',
            padding: '6px 16px',
            marginBottom: '18px',
            borderRadius: '999px',
            border: '1px solid #00f5d4',
            color: '#00f5d4',
            fontSize: '0.85rem',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            Por trás do código
          </span>

          <h2 style={{
            fontSize: '2.6rem',
            color: '#ffffff',
            margin: '0 0 20px 0',
            textShadow: '0 0 18px rgba(0, 245, 212, 0.45)'
          }}>
            Sobre o <span style={{ color: '#00f5d4' }}>projeto</span>
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#d9d2f5', lineHeight: '1.8', marginBottom: '16px' }}>
            O <strong style={{ color: '#00f5d4' }} translate="no">Catálogo Tech</strong> é uma aplicação web criada como atividade prática, com um objetivo claro: mostrar domínio dos pilares do desenvolvimento com <strong style={{ color: '#ffffff' }}>React</strong>.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#d9d2f5', lineHeight: '1.8', marginBottom: '22px' }}>
            Ao longo da construção, foram postos em prática três conceitos essenciais:
          </p>

          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <li style={{
              padding: '16px 20px',
              borderRadius: '16px',
              backgroundColor: 'rgba(123, 47, 247, 0.18)',
              border: '1px solid rgba(123, 47, 247, 0.5)',
              color: '#d9d2f5',
              lineHeight: '1.6'
            }}>
              <strong style={{ color: '#00f5d4' }}>Componentização:</strong> interfaces modulares e reutilizáveis, como Header, Card e Button.
            </li>
            <li style={{
              padding: '16px 20px',
              borderRadius: '16px',
              backgroundColor: 'rgba(123, 47, 247, 0.18)',
              border: '1px solid rgba(123, 47, 247, 0.5)',
              color: '#d9d2f5',
              lineHeight: '1.6'
            }}>
              <strong style={{ color: '#00f5d4' }}>Props:</strong> dados que viajam entre componentes de forma dinâmica e flexível.
            </li>
            <li style={{
              padding: '16px 20px',
              borderRadius: '16px',
              backgroundColor: 'rgba(123, 47, 247, 0.18)',
              border: '1px solid rgba(123, 47, 247, 0.5)',
              color: '#d9d2f5',
              lineHeight: '1.6'
            }}>
              <strong style={{ color: '#00f5d4' }}>React Router Dom:</strong> navegação fluida entre páginas, sem recarregar o site (Single Page Application).
            </li>
          </ul>
        </div>

        <div style={{ flex: '1 1 400px', textAlign: 'center' }}>
          <img
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80"
            alt="Código React no ecrã"
            style={{
              width: '100%',
              borderRadius: '24px',
              border: '1px solid rgba(0, 245, 212, 0.4)',
              boxShadow: '0 0 40px rgba(123, 47, 247, 0.45)',
              display: 'block'
            }}
          />
        </div>

      </div>
    </main>
  );
}