import { useState } from 'react';

export default function Button({ texto, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: '14px 24px',
        cursor: 'pointer',
        background: isHovered
          ? 'linear-gradient(90deg, #7b2ff7, #00f5d4)'
          : 'linear-gradient(90deg, #00f5d4, #7b2ff7)',
        color: '#0b0820',
        border: 'none',
        borderRadius: '999px',
        fontSize: '1rem',
        fontWeight: 'bold',
        letterSpacing: '0.5px',
        transition: 'all 0.25s ease',
        transform: isHovered ? 'translateY(-3px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: isHovered
          ? '0 0 28px rgba(0, 245, 212, 0.65)'
          : '0 0 14px rgba(123, 47, 247, 0.45)',
        width: '100%'
      }}
    >
      {texto}
    </button>
  );
}