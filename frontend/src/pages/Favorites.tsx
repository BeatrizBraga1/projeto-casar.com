import React, { useState, useEffect } from 'react';
import IndividualRepository from '../components/IndividualRepository';
import Navbar from '../components/Navbar';


const Favorites: React.FC = () => {
  const [repositoriosFavoritos, setRepositoriosFavoritos] = useState<any[]>([]);

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    setRepositoriosFavoritos(favoritos);
  }, []);

  const handleToggleFavorito = (idrepositorio: number) => {
    const novosFavoritos = repositoriosFavoritos.filter(
      (repositorio) => repositorio.idrepositorio !== idrepositorio
    );
    setRepositoriosFavoritos(novosFavoritos);
    localStorage.setItem('favoritos', JSON.stringify(novosFavoritos));
  };

  return (
    <>
      <div className="hidden sm:block">
        <Navbar />
      </div>
      <div className="justify-between sm:w-[896px] p-[20px] mx-auto">
        <h1 className="sm:text-p-color sm:text-center">Meus Favoritos</h1>
        <div className="mb-[55px] sm:mb-0">
          {repositoriosFavoritos.length > 0 ? (
            repositoriosFavoritos.map((repositorio: any) => (
              <IndividualRepository
                key={repositorio.idrepositorio}
                repositorio={repositorio}
                onToggleFavorito={handleToggleFavorito}
              />
            ))
          ) : (
            <p className="sm:text-center">Nenhum repositório favorito encontrado.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Favorites;
