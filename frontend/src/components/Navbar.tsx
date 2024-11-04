import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaRegHeart, FaSearch } from "react-icons/fa";

const Navbar: React.FC = () => {
    const [nome, setNome] = useState('');
    const [erro, setErro] = useState<string | JSX.Element>('');
    const navigate = useNavigate();

    const buscarUsuario = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/usuario/nome/${nome}`);
            if (response.data) {
                navigate('/user', { state: { usuario: response.data } });
                setErro('');
            } else {
                setErro('Usuário não encontrado');
            }
        } catch (error) {
            console.error("Erro ao buscar usuário:", error);
            navigate('/notfound', { state: { nome } });
            setErro('');
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        buscarUsuario();
    };

    return (
        <div className="flex items-center justify-between border-b border-gray-300">
            <div className="flex items-center w-1/2 p-[20px] relative">
                <form onSubmit={handleSubmit} className="w-[100%]">
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Digite o nome do usuário"
                        className="w-[100%] border border-gray-300 rounded p-2 pr-10 flex-1"
                    />
                    <button type="submit" className="absolute right-[32px] top-1/2 transform -translate-y-1/2">
                        <FaSearch className="text-[25px] text-placeholder" />
                    </button>
                </form>
                {typeof erro === 'string' ? <p>{erro}</p> : erro}
            </div>
            <div className="flex items-center justify-end w-1/2 pr-[20px]">
                <a href="#home" className="flex items-center text-white hover:text-white-700 bg-p-color p-5">
                    <FaRegHeart className="pr-[5px] text-[24px]" /> Favoritos
                </a>
            </div>
        </div>
    );
};

export default Navbar;
