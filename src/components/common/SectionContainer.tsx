import React, { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
}

// componente para definir uma seção padrao para todas as paginas par ficar organizadas
const SectionContainer: React.FC<SectionContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-gray-950 dark:text-gray-200 ">
      {children}
    </div>
  );
};

export default SectionContainer;