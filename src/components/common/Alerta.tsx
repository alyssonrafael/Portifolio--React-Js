import { useState, useEffect, FC } from "react";

// Definição de tipos para as props do componente
type AlertaProps = {
    msg: string; 
    tipo: string;
    key: number;
}

// Utilização do tipo definido acima nas props do componente
const Alerta: FC<AlertaProps> = ({ msg, tipo, key }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (msg) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [msg, key]); 

  const alertColor = tipo === 'sucesso' ? 'bg-green-500' : 'bg-red-500';
// montando o componente de alerta 
  return (
    <>
      {visible && (
        <div
          className={`p-4 text-white ${alertColor} rounded fixed top-16 right-0 m-4`}
        >
          {msg}
        </div>
      )}
    </>
  );
}

export default Alerta;
