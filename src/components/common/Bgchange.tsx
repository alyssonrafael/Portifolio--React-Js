import React, { useState, useEffect, ReactNode } from 'react';
import lightBg from '../../assets/bgWhite.png';
import darkBg from '../../assets/bgDark.png';

interface BgchangeProps {
    children: ReactNode; // Adiciona uma propriedade para receber o children
  }


// componente que renderiza a imagem de backgroun e recebe children
const Bgchange: React.FC<BgchangeProps> = ({ children }) => {
  // estados para monitorar o tema e o carregamento da img
  const [themeIcon, setThemeIcon] = useState<'light' | 'dark'>('light');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Define o tema inicial com base no valor armazenado no localStorage
    const storedTheme = localStorage.getItem('theme') || 'light';
    setThemeIcon(storedTheme as 'light' | 'dark');
    setLoaded(true); // Garante que a imagem é carregada antes de mostrar

    // Função para atualizar o tema com base no evento personalizado
    const handleThemeChange = (event: CustomEvent) => {
      setLoaded(false); // Esconde a imagem durante a troca
      setTimeout(() => {
        setThemeIcon(event.detail as 'light' | 'dark');
        setLoaded(true); // Mostra a imagem após a troca
      }, 300); // Espera a transição de 0.3s para mostrar a imagem
    };

    // Adiciona o ouvinte para o evento 'themeChange' que e passado la na mudança de tema fazendo com que o bg aqui tambem mude
    window.addEventListener('themeChange', handleThemeChange as EventListener);

    // Limpa o ouvinte quando o componente é desmontado
    return () => {
      window.removeEventListener('themeChange', handleThemeChange as EventListener);
    };
  }, []);
// seta o bg que sera mostrado comforme o tema
  const BgSrc = themeIcon === 'light' ? lightBg : darkBg; 
// coloca a img dentro de uma div e exporta ela para ser usado em outros lugares
return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflowX: 'hidden' }}>
      <img
        className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        src={BgSrc}
        alt="Background"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        {children}
      </div>
    </div>
  );
  
  
};

export default Bgchange;
