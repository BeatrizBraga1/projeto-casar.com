import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const navbar = () => {
  return (
    <>
        <div className="flex items-center justify-between border-b border-gray-300">
            <div className="flex items-center w-1/2 p-[20px] relative">
                <input
                    type="text"
                    placeholder="Buscar usuário"
                    className="border border-gray-300 rounded p-2 pr-10 flex-1"
                />
                <button className="absolute right-[32px] top-1/2 transform -translate-y-1/2">
                    <FaSearch className="text-[25px] text-placeholder" />
                </button>
            </div>
            <div className="flex items-center justify-end w-1/2 pr-[20px]">
                <a href="#home" className="flex items-center text-white hover:text-white-700 bg-p-color p-5">
                    <FaRegHeart className="pr-[5px] text-[24px]" /> Favoritos
                </a>
            </div>
        </div>
    </>
  )
}

export default navbar