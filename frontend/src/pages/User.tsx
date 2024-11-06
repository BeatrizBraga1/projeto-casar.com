import React from 'react';
import NotFound from './NotFound';
import IndividualRepository from '../components/IndividualRepository';
import { useLocation } from 'react-router-dom';


const User: React.FC = () => {
    const location = useLocation();
    const { usuario, repositorios } = location.state || {};

    if (!usuario) {
        return <NotFound />;
    }

    return (
        <div className="flex justify-between">
            <div className="w-[40%] p-[20px] m-[20px] text-center border border-gray-300 rounded flex-1 h-[100%]">
                <img src={usuario.foto} alt="User" className="w-[200px] h-[200px] mx-auto rounded-full" />
                <div className="pt-[20px] pb-[20px]">
                    <h1>{usuario.nome}</h1>
                    <p>{usuario.usuario}</p>
                </div>
                <p>{usuario.descricao_usuario}</p>
            </div>
            <div className="w-[60%] m-[20px]">
                <h1 className="text-p-color">Repositórios</h1>
                <div>
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
    );
};

export default User;
