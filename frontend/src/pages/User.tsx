import React from 'react';
import NotFound from './NotFound';
import IndividualRepository from '../components/IndividualRepository';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';


const User: React.FC = () => {
    const location = useLocation();
    const { usuario, repositorios } = location.state || {};

    if (!usuario) {
        return <NotFound />;
    }

    return (
        <>
            <Navbar />
            <div className="flex flex-col sm:flex-row justify-between">
                <div className="sm:w-[40%] p-[20px] m-[20px] text-left sm:text-center border border-gray-300 rounded flex-1 h-[100%]">
                    <div className="pt-0 pb-0 sm:pt-[20px] sm:pb-[20px] flex flex-row sm:flex-col">
                        <div className="pb-[10px] sm:pb-[20px]">
                            <img src={usuario.foto} alt="User" className="w-[70px] h-[70px] sm:w-[200px] sm:h-[200px] sm:mx-auto rounded-full" />
                        </div>
                        <div className="pl-[10px] sm:pl-[0]">
                            <h1>{usuario.nome}</h1>
                            <p>{usuario.usuario}</p>
                        </div>
                    </div>
                    <hr className="border-t border-gray-300 sm:hidden" />
                    <p className="pt-[10px] sm:pt-0">{usuario.descricao_usuario}</p>
                </div>
            
                <div className="sm:w-[60%] m-[20px]">
                    <h1 className="text-p-color">Repositórios</h1>
                    <div className="mb-[55px] sm:mb-0">
                        {Array.isArray(repositorios) && repositorios.length > 0 ? (
                        repositorios.map((repositorio) => (
                            <IndividualRepository key={repositorio.idrepositorio} repositorio={repositorio} />
                        ))
                        ) : (
                        <p>Nenhum repositório encontrado.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default User;
