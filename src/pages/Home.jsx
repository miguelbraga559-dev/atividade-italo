import { Link } from 'react-router-dom';

const destaques = [
  { icone: '⌨️', titulo: 'Periféricos', texto: 'Teclados, ratos e headsets de alta precisão.' },
  { icone: '🖥️', titulo: 'Setup Dev', texto: 'Monitores e acessórios para horas de código.' },
  { icone: '🎮', titulo: 'Gaming', texto: 'Equipamento pronto para qualquer partida.' },
];

export default function Home() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        textAlign: 'center',
        padding: '48px 20px',
        backgroundColor: '#0b0820',
        backgroundImage:
          'linear-gradient(135deg, rgba(11, 8, 32, 0.9), rgba(70, 12, 110, 0.75)), url("https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=1400&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#f4f0ff',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(20, 16, 48, 0.72)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(0, 245, 212, 0.35)',
          padding: '56px 48px',
          borderRadius: '24px',
          maxWidth: '860px',
          boxShadow: '0 0 40px rgba(123, 47, 247, 0.35)',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            padding: '6px 16px',
            marginBottom: '20px',
            borderRadius: '999px',
            border: '1px solid #00f5d4',
            color: '#00f5d4',
            fontSize: '0.85rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          Novo drop de hardware
        </span>

        <h2
          style={{
            fontSize: '3.2rem',
            margin: '0 0 18px 0',
            lineHeight: '1.15',
            color: '#ffffff',
            textShadow: '0 0 18px rgba(0, 245, 212, 0.55)',
          }}
        >
          O teu setup, <span style={{ color: '#00f5d4' }}>sem limites.</span>
        </h2>

        <p
          style={{
            fontSize: '1.2rem',
            margin: '0 auto 36px auto',
            maxWidth: '620px',
            lineHeight: '1.7',
            color: '#d9d2f5',
          }}
        >
          Descobre os melhores periféricos, monitores e acessórios para programar
          durante horas e jogar como um profissional.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          {destaques.map((item) => (
            <div
              key={item.titulo}
              style={{
                flex: '1 1 200px',
                maxWidth: '240px',
                padding: '18px',
                borderRadius: '16px',
                backgroundColor: 'rgba(123, 47, 247, 0.18)',
                border: '1px solid rgba(123, 47, 247, 0.5)',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{item.icone}</div>
              <strong style={{ display: 'block', color: '#00f5d4', marginBottom: '6px' }}>
                {item.titulo}
              </strong>
              <span style={{ fontSize: '0.95rem', color: '#d9d2f5' }}>{item.texto}</span>
            </div>
          ))}
        </div>

        <Link
          to="/produtos"
          style={{
            display: 'inline-block',
            background: 'linear-gradient(90deg, #00f5d4, #7b2ff7)',
            color: '#0b0820',
            padding: '16px 42px',
            textDecoration: 'none',
            borderRadius: '999px',
            fontSize: '1.15rem',
            fontWeight: 'bold',
            letterSpacing: '0.5px',
            boxShadow: '0 0 24px rgba(0, 245, 212, 0.45)',
            cursor: 'pointer',
          }}
        >
          Ver catálogo completo →
        </Link>
      </div>
    </main>
  );
}
