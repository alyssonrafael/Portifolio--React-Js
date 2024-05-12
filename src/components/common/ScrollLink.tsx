// importa o React e alguns tipos úteis, como FC (Componente Funcional) e MouseEventHandler para lidar com eventos do mouse.
import React, { FC, MouseEventHandler } from "react";

/* Aqui está sendo definido um tipo ScrollLinkProps,
que inclui todas as propriedades de um elemento de âncora HTML (<a>),
além de uma propriedade adicional to, que é uma string representando o
ID da seção para a qual o link deve rolar.*/
type ScrollLinkProps = {
  to: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

//este e o componente que recebe as propriedades definidas no ScrollLinkProps ele desetrutura as propriedades to e children e usa o ... para receber quaisquer outras props fornecidas
const ScrollLink: FC<ScrollLinkProps> = ({ to, children, onClick, ...props }) => {
  const scrollToSection: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    const section = document.getElementById(to);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      onClick && onClick(e); 
    }
  };

  return (
    <a href={`#${to}`} onClick={scrollToSection} {...props}>
      {children}
    </a>
  );
};

export default ScrollLink;
