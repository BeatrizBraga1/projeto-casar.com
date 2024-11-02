import React from 'react'
import notFoundImg from '../assets/images/not-found.png';

const notFound = () => {
  return (
    <>
      <div className="flex flex-col items-center pt-[100px] overflow-hidden">
          <h2 className="text-[21px] text-p-color">“MHshdahsudl”</h2>
          <h1>Nenhum usuário encontrado</h1>
          <p className='pb-[30px]'>Verifique se a escrita está correta ou tente novamente</p>
          <img src={notFoundImg} alt="Not Found" className='w-[300px]'/>
      </div>
    </>
  )
}

export default notFound