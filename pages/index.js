import React, { useState, useEffect } from 'react';
import Builder from '../components/Builder';
import Toggle from '@/components/Toggle';

const Home = () => {
  // Estado para controlar se o loading está ativo ou não
  const [isLoading, setIsLoading] = useState(true);

  // Simulando a conclusão do loading (isso deve ser feito com base no estado do componente LoadingScreen)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Assumindo que o loading dura 2 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Builder/>
    </>
  );
};

export default Home;