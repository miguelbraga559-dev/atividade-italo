export default function Contato() {
  const inputStyle = {
    padding: '14px 18px',
    border: '1px solid rgba(123, 47, 247, 0.6)',
    borderRadius: '14px',
    fontSize: '1rem',
    outline: 'none',
    fontFamily: 'inherit',
    backgroundColor: 'rgba(11, 8, 32, 0.8)',
    color: '#f4f0ff'
  };

  return (
    <main style={{
      padding: '64px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(180deg, #0b0820 0%, #1a0f3d 100%)',
      minHeight: '80vh',
      color: '#f4f0ff'
    }}>
      <div style={{
        backgroundColor: 'rgba(20, 16, 48, 0.85)',
        border: '1px solid rgba(0, 245, 212, 0.35)',
        padding: '48px 40px',
        borderRadius: '24px',
        boxShadow: '0 0 40px rgba(123, 47, 247, 0.35)',
        width: '100%',
        maxWidth: '520px'
      }}>
        <h2 style={{
          textAlign: 'center',
          marginTop: 0,
          marginBottom: '14px',
          color: '#ffffff',
          fontSize: '2.2rem',
          textShadow: '0 0 18px rgba(0, 245, 212, 0.45)'
        }}>
          Fala <span style={{ color: '#00f5d4' }}>connosco</span>
        </h2>
        <p style={{
          textAlign: 'center',
          color: '#d9d2f5',
          marginBottom: '32px',
          lineHeight: '1.7'
        }}>
          Tens dúvidas sobre algum equipamento ou queres ajuda a montar o teu setup?
          Envia-nos uma mensagem e respondemos o mais depressa possível.
        </p>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input type="text" placeholder="O teu nome completo" required style={inputStyle} />
          <input type="email" placeholder="O teu melhor e-mail" required style={inputStyle} />
          <textarea placeholder="Em que te podemos ajudar?" required rows="5" style={{ ...inputStyle, resize: 'vertical' }}></textarea>
          <button type="submit" style={{
            padding: '16px',
            background: 'linear-gradient(90deg, #00f5d4, #7b2ff7)',
            color: '#0b0820',
            border: 'none',
            borderRadius: '999px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            letterSpacing: '0.5px',
            cursor: 'pointer',
            marginTop: '10px',
            boxShadow: '0 0 20px rgba(0, 245, 212, 0.4)'
          }}>
            Enviar mensagem →
          </button>
        </form>
      </div>
    </main>
  );
}