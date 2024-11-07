import React from 'react';
import notFoundImg from '../assets/images/not-found.png';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const NotFound: React.FC = () => {
  const location = useLocation();
  const { valorBusca } = location.state || { valorBusca: '' };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center pt-[30px] sm:pt-[100px] overflow-hidden p-5 sm:p-0">
        <h2 className="text-[21px] text-p-color">“{valorBusca}”</h2>
        <h1>Nenhum usuário encontrado</h1>
        <p className='pb-[30px] text-center'>Verifique se a escrita está correta ou tente novamente</p>
        <img src={notFoundImg} alt="Not Found" className="w-[300px] hidden sm:block"/>
      </div>
    </>
  );
};

export default NotFound;
