import Card from '../components/Card';

export default function Produtos() {
  const listaProdutos = [
    { id: 1, titulo: 'Notebook Nova Pro', descricao: 'Processador de última geração e memória de sobra para compilar, testar e multitarefa sem engasgos.', preco: '4500,00', imagem: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80' },
    { id: 2, titulo: 'Smartphone Pulse X', descricao: 'Câmara de 108MP, ecrã AMOLED vibrante e bateria para o dia inteiro.', preco: '2500,00', imagem: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80' },
    { id: 3, titulo: 'Teclado Mecânico Glitch', descricao: 'Switches azuis com resposta tátil e iluminação RGB totalmente personalizável.', preco: '350,00', imagem: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80' },
    { id: 4, titulo: 'Rato Gamer Phantom', descricao: 'Sensor de alta precisão, design ergonómico e ligação sem fios sem atrasos.', preco: '200,00', imagem: 'https://images.unsplash.com/photo-1527814050087-379381547939?w=500&q=80' },
    { id: 5, titulo: 'Monitor Ultrawide Horizon', descricao: 'Ecrã de 29 polegadas Full HD com espaço de sobra para código, terminal e preview lado a lado.', preco: '1200,00', imagem: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80' },
    { id: 6, titulo: 'Headset Sonic 7.1', descricao: 'Som surround imersivo e microfone com cancelamento de ruído para jogar e fazer calls.', preco: '300,00', imagem: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80' }
  ];

  return (
    <main
      style={{
        minHeight: '80vh',
        padding: '64px 20px',
        background: 'linear-gradient(180deg, #0b0820 0%, #1a0f3d 100%)',
        color: '#f4f0ff'
      }}
    >
      <section style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '6px 16px',
              marginBottom: '16px',
              borderRadius: '999px',
              border: '1px solid #00f5d4',
              color: '#00f5d4',
              fontSize: '0.85rem',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}
          >
            {listaProdutos.length} produtos em destaque
          </span>

          <h2
            style={{
              fontSize: '2.6rem',
              margin: '0 0 12px 0',
              color: '#ffffff',
              textShadow: '0 0 18px rgba(0, 245, 212, 0.45)'
            }}
          >
            Hardware <span style={{ color: '#00f5d4' }}>de elite</span>
          </h2>

          <p style={{ margin: '0 auto', maxWidth: '560px', fontSize: '1.1rem', lineHeight: '1.7', color: '#d9d2f5' }}>
            Escolhe o equipamento certo para programar, jogar e criar sem limites.
          </p>
        </header>

        <div
          style={{
            display: 'flex',
            gap: '32px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {listaProdutos.map((produto) => (
            <Card
              key={produto.id}
              titulo={produto.titulo}
              descricao={produto.descricao}
              preco={produto.preco}
              imagem={produto.imagem}
            />
          ))}
        </div>
      </section>
    </main>
  );
}