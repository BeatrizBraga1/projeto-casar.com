import React from 'react';
import notFoundImg from '../assets/images/not-found.png';
import { useLocation } from 'react-router-dom';

const NotFound: React.FC = () => {
  const location = useLocation();
  const { valorBusca } = location.state || { valorBusca: '' };

  return (
    <div className="flex flex-col items-center pt-[100px] overflow-hidden">
      <h2 className="text-[21px] text-p-color">“{valorBusca}”</h2>
      <h1>Nenhum usuário encontrado</h1>
      <p className='pb-[30px]'>Verifique se a escrita está correta ou tente novamente</p>
      <img src={notFoundImg} alt="Not Found" className='w-[300px]' />
    </div>
  );
};

export default NotFound;
