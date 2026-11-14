import Button from './Button';

export default function Card({ titulo, imagem, descricao, preco }) {
  return (
    <div style={{
      backgroundColor: 'rgba(20, 16, 48, 0.85)',
      border: '1px solid rgba(123, 47, 247, 0.55)',
      borderRadius: '20px',
      width: '290px',
      textAlign: 'left',
      boxShadow: '0 0 24px rgba(123, 47, 247, 0.3)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      color: '#f4f0ff'
    }}>
      <div style={{ position: 'relative' }}>
        <img
          src={imagem}
          alt={titulo}
          style={{ width: '100%', height: '190px', objectFit: 'cover', display: 'block' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(11, 8, 32, 0) 50%, rgba(20, 16, 48, 0.95) 100%)'
        }} />
      </div>

      <div style={{ padding: '22px 22px 26px 22px' }}>
        <h3 style={{
          margin: '0 0 10px 0',
          color: '#00f5d4',
          fontSize: '1.25rem',
          letterSpacing: '0.3px'
        }}>
          {titulo}
        </h3>
        <p style={{
          color: '#d9d2f5',
          fontSize: '0.92rem',
          margin: '0 0 18px 0',
          lineHeight: '1.6'
        }}>
          {descricao}
        </p>
        <p style={{
          fontSize: '1.4rem',
          color: '#ffffff',
          margin: '0 0 22px 0',
          textShadow: '0 0 12px rgba(0, 245, 212, 0.5)'
        }}>
          <strong>R$ {preco}</strong>
        </p>
        <Button
          texto="Adicionar ao carrinho"
          onClick={() => alert(`${titulo} foi adicionado ao teu carrinho!`)}
        />
      </div>
    </div>
  );
}