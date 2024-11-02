import React from 'react'
import IndividualRepository from '../components/IndividualRepository';

const favorites = () => {
  return (
    <>
      <div className="justify-between w-[896px] m-[20px] mx-auto">
          <h1 className="text-p-color text-center">Meus Favoritos</h1>
          <div>
              <IndividualRepository />
          </div>
      </div>
    </>
  )
}

export default favorites