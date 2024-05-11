import { FaSun, FaMoon } from 'react-icons/fa';
import { useEffect, useState } from 'react';

// componente que e responsavel pela muidança de tema.
export default function ChangeTheme() {

  // Estado para controlar o ícone atual sol ou lua.
  const [themeIcon, setThemeIcon] = useState('light');

  // executa o codigo quando o componente e montado verifica o tema atual armazenado no localstorage e aplica ele e tambem adiciona ou remove a classe dark dependendo do tema.
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    setThemeIcon(currentTheme); // Atualiza o estado com o tema atual
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // aqui a funçao que vai alterar entre os temas e fazer a alteraçao de classe
  const changeteme = () => {
    const newTheme = themeIcon === "dark" ? "light" : "dark";
    setThemeIcon(newTheme); // Atualiza o estado com o novo tema
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
// o retorno retorna o icone que tera a funçao de trocar o tema e mostar o icone dependendo do tema
  return (
    <div className="transition-colors duration-500 mr-4 hover:text-orange-900 dark:hover:text-purple-500">
      <span onClick={changeteme} style={{ cursor: 'pointer' }}>
        {themeIcon === 'light' ? <FaMoon className="text-2xl"/> : <FaSun className="text-2xl" />}
      </span>
    </div>
  );
}
