import React from 'react'
import IndividualRepository from '../components/IndividualRepository';
import userImg from '../assets/images/bia-braga.jpg';

const user = () => {
  return (
    <>
        <div className="flex justify-between">
            <div className="w-[40%] p-[20px] m-[20px] text-center border border-gray-300 rounded flex-1 h-[100%]">
                <img src={userImg} alt="User" className="w-[200px] h-[200px] mx-auto rounded-full"/>
                <div className="pt-[20px] pb-[20px]">
                    <h1>Beatriz Braga</h1>
                    <p>@bia_bragaa</p>
                </div>
                <p>Trabalha com segurança cibernética, experiencia em empresas multinacionais.</p>
            </div>
            <div className="w-[60%] m-[20px]">
                <h1 className="text-p-color">Repositórios</h1>
                <div>
                    <IndividualRepository />
                </div>
            </div>
        </div>
    </>
  )
}

export default user