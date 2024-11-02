import React from 'react'
import searchUserImg from '../assets/images/search-user.png';

const searchUser = () => {
  return (
    <>
      <div className="flex flex-col items-center pt-[100px] overflow-hidden">
          <h1>Procure pelo Nome ou Nome de Usuário</h1>
          <p className='pb-[30px]'>Encontre os repositórios de algum usuário digitando no campo acima</p>
          <img src={searchUserImg} alt="Search User" />
      </div>
    </>
  )
}

export default searchUser