import React, { useState, useEffect } from 'react';
import IndividualRepository from '../components/IndividualRepository';


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
      <div className="justify-between w-[896px] m-[20px] mx-auto">
        <h1 className="text-p-color text-center">Meus Favoritos</h1>
        <div>
          {repositoriosFavoritos.length > 0 ? (
            repositoriosFavoritos.map((repositorio: any) => (
              <IndividualRepository
                key={repositorio.idrepositorio}
                repositorio={repositorio}
                onToggleFavorito={handleToggleFavorito}
              />
            ))
          ) : (
            <p className="text-center">Nenhum repositório favorito encontrado.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Favorites;
