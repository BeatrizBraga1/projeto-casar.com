import React from 'react';
import { FaCircle } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const individualrepository = () => {
  return (
    <>
        <div className="flex justify-between border border-gray-300 p-[10px] mt-[15px] mb-[15px] rounded min-h-[130px]">
            <div className="w-[70%] items-center justify-center">
                <h2>Pokepicker</h2>
                <p>Aplicativo de visualização de Pokémon utilizando o PokeAPI.co - Construído em React Native (Expo)</p>
                <div className="flex pt-[10px] pb-[10px]">
                    <FaCircle className="text-blue-500"/>
                    <p className="text-[12px] pl-[5px]">Typescript</p>
                    <p className="text-[12px] pl-[25px]">Updated on 17 Apr 2021</p>
                </div>
            </div>
            <div className="flex w-[30%] justify-end">
                <FaRegHeart className="text-[40px] placeholder bg-bg-white rounded-full pt-[11px] pb-[11px] pl-[8px] pr-[8px] inline-flex" /> 
            </div>
        </div>

        <div className="flex justify-between border border-gray-300 p-[10px] mt-[15px] mb-[15px] rounded min-h-[130px]">
            <div className="w-[70%] items-center justify-center">
                <h2>parlador-ideal</h2>
                <p>Projeto desenvolvido para processo seletivo da Assessoria VIP</p>
                <div className="flex pt-[10px] pb-[10px]">
                    <FaCircle className="text-danger"/>
                    <p className="text-[12px] pl-[5px]">HTML</p>
                    <p className="text-[12px] pl-[25px]">Updated on 16 Jul 2020</p>
                </div>
            </div>
            <div className="flex w-[30%] justify-end">
                <FaHeart className="text-[40px] text-p-color border border-p-color rounded-full pt-[11px] pb-[11px] pl-[8px] pr-[8px] inline-flex" />
            </div>
        </div>

        <div className="flex justify-between border border-gray-300 p-[10px] mt-[15px] mb-[15px] rounded min-h-[130px]">
            <div className="w-[70%] items-center justify-center">
                <h2>snaker</h2>
                <p>Essa é uma simples recriação da página inicial do YouTube utilizando ReactJS com Styled Components.                </p>
                <div className="flex pt-[10px] pb-[10px]">
                    <FaCircle className="text-yellow-500"/>
                    <p className="text-[12px] pl-[5px]">Javascript</p>
                    <p className="text-[12px] pl-[25px]">Updated on 16 Jul 2020</p>
                </div>
            </div>
            <div className="flex w-[30%] justify-end">
                <FaHeart className="text-[40px] text-p-color border border-p-color rounded-full pt-[11px] pb-[11px] pl-[8px] pr-[8px] inline-flex" />  
            </div>
        </div>

        <div className="flex justify-between border border-gray-300 p-[10px] mt-[15px] mb-[15px] rounded min-h-[130px]">
            <div className="w-[70%] items-center justify-center">
                <h2>snaker</h2>
                <p>Essa é uma simples recriação da página inicial do YouTube utilizando ReactJS com Styled Components.                </p>
                <div className="flex pt-[10px] pb-[10px]">
                    <FaCircle className="text-yellow-500"/>
                    <p className="text-[12px] pl-[5px]">Javascript</p>
                    <p className="text-[12px] pl-[25px]">Updated on 16 Jul 2020</p>
                </div>
            </div>
            <div className="flex w-[30%] justify-end">
                <FaHeart className="text-[40px] text-p-color border border-p-color rounded-full pt-[11px] pb-[11px] pl-[8px] pr-[8px] inline-flex" />  
            </div>
        </div>
    </>
  )
}

export default individualrepository