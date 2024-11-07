import React from 'react'
import searchUserImg from '../assets/images/search-user.png';
import Navbar from '../components/Navbar';

const searchUser = () => {
  return (
    <div className="flex flex-col">
      <div className="order-last sm:order-first">
        <Navbar />
      </div>
      <div className="order-first sm:orderlast flex flex-col items-center pt-[30px] sm:pt-[100px] overflow-hidden p-5 sm:p-0">
        <h1>Procure pelo Nome ou Nome de Usuário</h1>
        <p className='pb-0 sm:pb-[30px] pt-[10px] sm:pt-0'>Encontre os repositórios de algum usuário digitando no campo acima</p>
        <img src={searchUserImg} alt="Search User" className="hidden sm:block"/>
      </div>
    </div>
  )
}

export default searchUser